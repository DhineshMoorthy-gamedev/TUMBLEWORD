import {
  BOARD_N,
  BOARD_WALLS,
  LOCK_MS,
  MERGE_MS,
  REDUCE_MOTION
} from '../config/constants.js';
import { mod } from '../utils/math.js';
import { settle } from '../simulation/physics.js';
import { tryMerge } from '../simulation/bonding.js';
import { findWin, isCompleted } from '../simulation/winCondition.js';
import { createWordCards } from '../levels/spawnSystem.js';
import { LEVELS } from '../levels/levelData.js';

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
   * Start a new interactive game run
   */
  startInteractiveRun() {
    this.state.reset('play');
    this.nextCardId = 1;
    this.uiManager.hideVictory();
    this.boardRenderer.initGrid();
    this.spawnCurrentWord(true);
  }

  /**
   * Spawn letters for the current word level
   * @param {boolean} isInitial
   */
  spawnCurrentWord(isInitial = false) {
    const lv = LEVELS[this.state.wordIdx];
    const newLetters = createWordCards(
      lv,
      this.state.cards,
      () => this.nextCardId++,
      isInitial
    );

    this.state.cards.push(...newLetters);
    this.slotsRenderer.renderSlots(lv.word);
    this.boardRenderer.rebuildCardDOM(this.state.cards, isInitial);
    this.boardRenderer.render(this.state.cards, this.state.angle);

    if (!isInitial) {
      void this.boardRenderer.cardsEl.offsetWidth;
      this.boardRenderer.enableCardTransitions();
    }

    this.uiManager.updateStats(this.state);
    if (isInitial) {
      this.uiManager.setStatus(
        `Spell <strong>${lv.word}</strong>. Completed words stay on board and tumble as obstacles!`
      );
    } else {
      this.uiManager.setStatus(
        `Now spell <strong>${lv.word}</strong>! Completed words remain on the board.`
      );
    }
  }

  /**
   * Turn the board in direction (-1 or 1)
   * @param {number} dir
   */
  turn(dir) {
    if (this.state.locked || this.state.runCompleted) return;

    if (this.sound) this.sound.playTurn();
    if (this.nativeBridge) this.nativeBridge.triggerHaptic('light');

    const nr = mod(this.state.r + dir, 4);
    this.state.recordHistory(dir);
    this.state.r = nr;
    this.state.angle += 90 * dir;
    this.state.moves++;

    this.state.cards = settle(
      BOARD_N,
      BOARD_WALLS,
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
    const curWord = LEVELS[this.state.wordIdx].word;

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

    if (REDUCE_MOTION) {
      merges.forEach(m => {
        this.boardRenderer.removeCard(m.absorbedId);
      });
      this.state.cards = newCards;
      this.boardRenderer.render(this.state.cards, this.state.angle);
      const winIds = findWin(LEVELS[this.state.wordIdx].word, this.state.cards);
      if (winIds) this.completeWord(winIds);
      else {
        this.state.locked = false;
        this.uiManager.updateStats(this.state);
      }
      return;
    }

    merges.forEach(m => {
      this.boardRenderer.animateCardMerge(
        m.absorbedId,
        m.toX,
        m.toY,
        MERGE_MS
      );
    });

    setTimeout(() => {
      merges.forEach(m => {
        this.boardRenderer.removeCard(m.absorbedId);
        this.boardRenderer.triggerBondingPulse(m.survivorId);
      });

      this.state.cards = newCards;
      this.boardRenderer.render(this.state.cards, this.state.angle);

      const winIds = findWin(LEVELS[this.state.wordIdx].word, this.state.cards);
      if (winIds) this.completeWord(winIds);
      else {
        this.state.locked = false;
        this.uiManager.updateStats(this.state);
      }
    }, MERGE_MS + 30);
  }

  /**
   * Complete current target word
   * @param {Array<number>} winIds
   */
  completeWord(winIds) {
    this.state.locked = true;
    const currentWord = LEVELS[this.state.wordIdx].word;
    this.slotsRenderer.markWon();

    const winCards = this.state.cards.filter(c => winIds.includes(c.id));
    const survivor = winCards[0];
    survivor.ch = currentWord;
    survivor.completed = true;
    survivor.isCompletedWord = true;
    survivor.lifespan = currentWord.length;
    delete survivor.wi;
    delete survivor.we;

    // Decrement lifespan of prior completed word obstacles
    const expiredIds = [];
    this.state.cards.forEach(c => {
      if (
        isCompleted(c) &&
        c.id !== survivor.id &&
        c.lifespan !== undefined
      ) {
        c.lifespan--;
        if (c.lifespan <= 0) expiredIds.push(c.id);
      }
    });

    if (expiredIds.length > 0 && this.sound) {
      this.sound.playDissolve();
    }
    expiredIds.forEach(id => this.boardRenderer.markDissolving(id));

    const removeCards = winCards.slice(1);
    const removeIds = removeCards.map(c => c.id);

    if (removeIds.length > 0 && !REDUCE_MOTION) {
      removeIds.forEach(id => {
        this.boardRenderer.animateCardMerge(
          id,
          survivor.x,
          survivor.y,
          MERGE_MS
        );
      });
    }

    const waitTime =
      (removeIds.length > 0 || expiredIds.length > 0) && !REDUCE_MOTION
        ? MERGE_MS + 40
        : 150;

    setTimeout(() => {
      removeIds.forEach(id => this.boardRenderer.removeCard(id));
      expiredIds.forEach(id => this.boardRenderer.removeCard(id));

      this.state.cards = this.state.cards.filter(
        c => !removeIds.includes(c.id) && !expiredIds.includes(c.id)
      );

      this.boardRenderer.triggerBondingPulse(survivor.id);
      this.boardRenderer.render(this.state.cards, this.state.angle);

      this.state.incrementStreak();
      this.uiManager.updateStats(this.state);

      if (this.state.wordIdx === LEVELS.length - 1) {
        this.state.runCompleted = true;
        if (this.sound) this.sound.playVictory();
        if (this.nativeBridge) this.nativeBridge.triggerHaptic('success');
        this.uiManager.showVictory(this.state.moves, this.state.bestStreak);
        this.uiManager.setStatus(
          `🎉 <strong>All 12 words completed!</strong> Run finished in ${this.state.moves} moves.`
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

    const lv = LEVELS[this.state.wordIdx];
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

    const lv = LEVELS[snap.wordIdx];
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
        Math.max(this.state.bestStreak, LEVELS.length)
      );
    } else {
      this.uiManager.hideVictory();
    }
  }
}
