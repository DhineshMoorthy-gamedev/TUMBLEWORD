import {
  LOCK_MS,
  MERGE_MS
} from '../config/constants.js';
import { mod } from '../utils/math.js';
import { settle } from '../simulation/physics.js';
import { tryMerge } from '../simulation/bonding.js';
import { findWin, isCompleted } from '../simulation/winCondition.js';
import { createWordCards } from '../levels/spawnSystem.js';

export class GameEngine {
  /**
   * @param {import('./GameState.js').GameState} state
   * @param {import('../rendering/BoardRenderer.js').BoardRenderer} boardRenderer
   * @param {import('../rendering/WordSlotsRenderer.js').WordSlotsRenderer} slotsRenderer
   * @param {import('../ui/UIManager.js').UIManager} uiManager
   * @param {import('../audio/SoundFX.js').soundFX} [sound]
   * @param {import('../platform/nativeBridge.js').NativeBridge} [nativeBridge]
   */
  constructor(state, boardRenderer, slotsRenderer, uiManager, sound = null, nativeBridge = null) {
    this.state = state;
    this.boardRenderer = boardRenderer;
    this.slotsRenderer = slotsRenderer;
    this.uiManager = uiManager;
    this.sound = sound;
    this.nativeBridge = nativeBridge;
    this.nextCardId = 1;
  }

  /**
   * Start a specific campaign level
   * @param {number} levelId
   */
  startLevel(levelId) {
    this.state.setLevel(levelId);
    this.nextCardId = 1;
    this.uiManager.hideVictory();
    if (this.sound) this.sound.playLevelStart();
    if (this.nativeBridge) this.nativeBridge.triggerHaptic('light');
    this.boardRenderer.initGrid(this.state.n, this.state.walls);
    this.spawnCurrentWord(true);
  }

  /**
   * Restart the current active level
   */
  startInteractiveRun() {
    this.startLevel(this.state.currentLevelId);
  }

  /**
   * Spawn letters for the current word in the active level
   * @param {boolean} isInitial
   */
  spawnCurrentWord(isInitial = false) {
    const words = this.state.level.words;
    const currentWordData = words[this.state.wordIdx];
    if (!currentWordData) return;

    const newLetters = createWordCards(
      currentWordData,
      this.state.cards,
      () => this.nextCardId++,
      isInitial,
      this.state.n,
      this.state.walls
    );

    this.state.cards.push(...newLetters);
    this.slotsRenderer.renderSlots(currentWordData.word);
    this.boardRenderer.rebuildCardDOM(this.state.cards, isInitial, isInitial);
    this.boardRenderer.render(this.state.cards, this.state.angle);

    // Force reflow to commit initial placement, then re-enable smooth sliding transitions
    void this.boardRenderer.cardsEl.offsetWidth;
    this.boardRenderer.enableCardTransitions();

    this.uiManager.updateStats(this.state);
    if (isInitial) {
      this.uiManager.setStatus(
        `Spell <strong>${currentWordData.word}</strong>. Completed words stay on the board as obstacles!`
      );
    } else {
      this.uiManager.setStatus(
        `Now spell <strong>${currentWordData.word}</strong>! (${this.state.wordIdx + 1}/${words.length})`
      );
    }
  }

  /**
   * Turn the board in direction (-1 or 1)
   * @param {number} dir
   */
  turn(dir) {
    if (this.state.runCompleted) return;

    if (this.state.locked) {
      this._queuedTurn = dir;
      return;
    }

    this._queuedTurn = null;

    if (this.sound) this.sound.playTurn();
    if (this.nativeBridge) this.nativeBridge.triggerHaptic('light');

    const nr = mod(this.state.r + dir, 4);
    this.state.recordHistory(dir);
    this.state.r = nr;
    this.state.angle += 90 * dir;
    this.state.moves++;

    this.state.cards = settle(
      this.state.n,
      this.state.walls,
      this.state.cards,
      mod(2 - nr, 4)
    );
    this.state.locked = true;

    this.boardRenderer.render(this.state.cards, this.state.angle);
    this.uiManager.updateStats(this.state);

    setTimeout(() => this.afterSettle(), LOCK_MS);
  }

  /**
   * Post-settle resolution: check win, then apply letter bonding
   */
  afterSettle() {
    const curWord = this.state.level.words[this.state.wordIdx].word;

    // 1. Spatial win check
    const winIds = findWin(curWord, this.state.cards);
    if (winIds) {
      this.completeWord(winIds);
      return;
    }

    // 2. Active letter bonding check
    const { newCards, merges } = tryMerge(curWord, this.state.cards);
    if (merges.length === 0) {
      this.state.cards = newCards;
      this.state.locked = false;
      this.uiManager.updateStats(this.state);

      if (this._queuedTurn !== null) {
        const nextTurn = this._queuedTurn;
        this._queuedTurn = null;
        this.turn(nextTurn);
      }
    } else {
      this.applyMergeAnimation(merges, newCards);
    }
  }

  /**
   * Animate bonding tiles
   * @param {Array<object>} merges
   * @param {Array<object>} newCards
   */
  applyMergeAnimation(merges, newCards) {
    if (this.sound) this.sound.playBond();
    if (this.nativeBridge) this.nativeBridge.triggerHaptic('medium');

    const duration = MERGE_MS;
    merges.forEach(m => {
      this.boardRenderer.animateCardMerge(m.absorbedId, m.toX, m.toY, duration);
      this.boardRenderer.triggerBondingPulse(m.survivorId);
    });

    setTimeout(() => {
      this.state.cards = newCards;
      this.boardRenderer.rebuildCardDOM(this.state.cards);
      this.boardRenderer.render(this.state.cards, this.state.angle);

      const curWord = this.state.level.words[this.state.wordIdx].word;
      const winIds = findWin(curWord, this.state.cards);
      if (winIds) {
        this.completeWord(winIds);
        return;
      }

      // Cascade gravity: drop any tiles resting on previously absorbed cards
      const gravity = mod(2 - this.state.r, 4);
      const cascadedCards = settle(
        this.state.n,
        this.state.walls,
        this.state.cards,
        gravity
      );

      const didMove = cascadedCards.some(c => {
        const prev = this.state.cards.find(p => p.id === c.id);
        return prev && (prev.x !== c.x || prev.y !== c.y);
      });

      if (didMove) {
        this.state.cards = cascadedCards;
        this.boardRenderer.render(this.state.cards, this.state.angle);
        // Allow tiles to slide smoothly into vacated space, then trigger chained merges
        setTimeout(() => {
          this.afterSettle();
        }, 220);
      } else {
        this.state.locked = false;
        this.uiManager.updateStats(this.state);

        if (this._queuedTurn !== null) {
          const nextTurn = this._queuedTurn;
          this._queuedTurn = null;
          this.turn(nextTurn);
        }
      }
    }, duration + 20);
  }

  /**
   * Complete the current word in the level
   * @param {Array<number>} winIds
   */
  completeWord(winIds) {
    this.slotsRenderer.markWon();

    const currentWord = this.state.level.words[this.state.wordIdx].word;
    const winCards = this.state.cards.filter(c => winIds.includes(c.id));
    const survivor = winCards[0] || this.state.cards[0];

    // If multiple cards contributed to win, animate absorbed cards sliding to survivor
    const otherWinCards = winCards.slice(1);
    if (otherWinCards.length > 0) {
      otherWinCards.forEach(c => {
        this.boardRenderer.animateCardMerge(c.id, survivor.x, survivor.y, MERGE_MS);
      });
    }

    survivor.ch = currentWord;
    survivor.completed = true;
    survivor.isCompletedWord = true;
    survivor.lifespan = currentWord.length;

    const expiredIds = [];
    this.state.cards.forEach(c => {
      if (isCompleted(c) && c.id !== survivor.id && c.lifespan !== undefined) {
        c.lifespan--;
        if (c.lifespan <= 0) expiredIds.push(c.id);
      }
    });

    const removeIds = winCards.slice(1).map(c => c.id);

    expiredIds.forEach(id => {
      this.boardRenderer.markDissolving(id);
    });

    const waitTime = otherWinCards.length > 0 ? (MERGE_MS + 20) : (expiredIds.length > 0 ? 460 : 0);
    if (expiredIds.length > 0 && this.sound) {
      setTimeout(() => this.sound.playDissolve(), 100);
    }

    setTimeout(() => {
      removeIds.forEach(id => this.boardRenderer.removeCard(id));
      expiredIds.forEach(id => this.boardRenderer.removeCard(id));

      this.state.cards = this.state.cards.filter(
        c => !removeIds.includes(c.id) && !expiredIds.includes(c.id)
      );

      this.boardRenderer.triggerWordCompleteJuice(survivor.id);
      this.boardRenderer.render(this.state.cards, this.state.angle);

      this.state.incrementStreak();
      this.uiManager.updateStats(this.state);

      const words = this.state.level.words;
      if (this.state.wordIdx === words.length - 1) {
        this.state.runCompleted = true;
        this.state.markLevelCompleted();
        if (this.sound) this.sound.playVictory();
        if (this.nativeBridge) this.nativeBridge.triggerHaptic('success');
        this.uiManager.showVictory(this.state.moves, this.state.bestStreak, this.state.level);
        this.uiManager.setStatus(
          `🎉 <strong>${this.state.level.name} completed!</strong> Cleared all ${words.length} words in ${this.state.moves} moves.`
        );
        this.uiManager.updateStats(this.state);
        return;
      }

      if (this.sound) this.sound.playWordComplete();
      if (this.nativeBridge) this.nativeBridge.triggerHaptic('success');

      const expireNote =
        expiredIds.length > 0 ? ' (An old word dissolved!)' : '';
      this.uiManager.setStatus(
        `<strong>${currentWord}</strong> formed! Streak <strong>${this.state.streak}</strong>!${expireNote} Next word incoming...`
      );

      setTimeout(() => {
        this.state.wordIdx++;
        this.spawnCurrentWord(false);
        this.state.locked = false;
        this.uiManager.updateStats(this.state);
      }, 600);
    }, waitTime);
  }

  /**
   * Undo previous turn
   */
  undo() {
    if (
      this.state.locked ||
      !this.state.hist.length ||
      this.state.runCompleted
    ) {
      return;
    }

    const h = this.state.popHistory();
    this.state.angle -= 90 * h.dir;
    this.state.r = h.r;
    this.state.wordIdx = h.wordIdx;
    this.state.streak = h.streak;
    this.state.moves = h.moves;
    this.state.cards = h.cards.map(c => ({ ...c }));
    this.state.locked = true;

    const words = this.state.level.words;
    const lv = words[this.state.wordIdx];
    this.slotsRenderer.renderSlots(lv.word);
    this.boardRenderer.rebuildCardDOM(this.state.cards, true);
    this.boardRenderer.render(this.state.cards, this.state.angle);

    void this.boardRenderer.cardsEl.offsetWidth;
    this.boardRenderer.enableCardTransitions();

    this.uiManager.setStatus(
      `Now spell <strong>${lv.word}</strong>! Completed words remain on the board.`
    );
    this.uiManager.updateStats(this.state);

    setTimeout(() => {
      this.state.locked = false;
      this.uiManager.updateStats(this.state);
    }, LOCK_MS);
  }

  /**
   * Apply a snapshot from the pre-computed solution timeline (in Editor / Solver Mode)
   * @param {object} snap
   * @param {boolean} animate
   */
  applyTimelineSnapshot(snap, animate = true) {
    this.state.wordIdx = snap.wordIdx;
    this.state.moves = snap.move;
    this.state.streak = snap.streak;
    this.state.r = snap.r;
    this.state.angle = snap.angle;
    this.state.cards = snap.cards.map(c => ({ ...c }));
    this.state.locked = false;
    this.state.runCompleted = !!snap.isVictory;

    const words = this.state.level.words;
    const lv = words[snap.wordIdx] || words[0];
    this.slotsRenderer.renderSlots(lv.word, snap.isVictory);
    this.boardRenderer.rebuildCardDOM(this.state.cards, !animate);
    this.boardRenderer.render(this.state.cards, this.state.angle);

    if (animate) {
      void this.boardRenderer.cardsEl.offsetWidth;
      this.boardRenderer.enableCardTransitions();
    }

    this.uiManager.updateStats(this.state);
    this.uiManager.setStatus(snap.desc);

    if (snap.isVictory) {
      this.uiManager.showVictory(
        snap.move,
        Math.max(this.state.bestStreak, words.length),
        this.state.level
      );
    } else {
      this.uiManager.hideVictory();
    }
  }
}
