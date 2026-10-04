/**
 * TutorialManager - Controls the step-by-step interactive onboarding tutorial.
 * Guides the player through rotation, letter bonding, obstacles, and word completion.
 */
export class TutorialManager {
  /**
   * @param {object} options
   * @param {import('../core/GameEngine.js').GameEngine} options.engine
   * @param {import('../core/GameState.js').GameState} options.state
   * @param {import('../ui/UIManager.js').UIManager} options.uiManager
   * @param {import('../audio/SoundFX.js').soundFX} [options.sound]
   * @param {import('../platform/nativeBridge.js').NativeBridge} [options.nativeBridge]
   * @param {object} options.elements
   */
  constructor({ engine, state, uiManager, sound = null, nativeBridge = null, elements }) {
    this.engine = engine;
    this.state = state;
    this.uiManager = uiManager;
    this.sound = sound;
    this.nativeBridge = nativeBridge;
    this.el = elements;
    this.active = false;
    this.currentStage = 0;
  }

  /**
   * Check if tutorial has been previously completed
   * @returns {boolean}
   */
  static isCompleted() {
    return localStorage.getItem('tumbleword_tutorial_completed') === 'true';
  }

  /**
   * Mark tutorial as completed in local storage
   */
  static markCompleted() {
    localStorage.setItem('tumbleword_tutorial_completed', 'true');
  }

  /**
   * Show the Welcome Modal
   */
  openWelcomeModal() {
    this.uiManager.openModal('tutorialWelcomeModal');
  }

  /**
   * Start the interactive tutorial gameplay session
   */
  startTutorial() {
    this.uiManager.closeAllModals();
    this.active = true;
    this.currentStage = 1;

    // Define dedicated tutorial level with walls and 3 progressive words
    const tutorialLevel = {
      id: 'TUTORIAL',
      name: 'Interactive Tutorial',
      isTutorial: true,
      n: 5,
      optimalMoves: 3,
      difficultyScore: 50,
      walls: [
        '.....',
        '...#.',
        '.....',
        '.#...',
        '.....'
      ],
      words: [
        {
          word: 'CAT',
          cards: [
            { ch: 'C', x: 0, y: 0 },
            { ch: 'A', x: 2, y: 0 },
            { ch: 'T', x: 4, y: 0 }
          ]
        },
        {
          word: 'SUN',
          cards: [
            { ch: 'S', x: 0, y: 4 },
            { ch: 'U', x: 2, y: 4 },
            { ch: 'N', x: 4, y: 4 }
          ]
        },
        {
          word: 'FOX',
          cards: [
            { ch: 'F', x: 1, y: 2 },
            { ch: 'O', x: 2, y: 2 },
            { ch: 'X', x: 3, y: 2 }
          ]
        }
      ]
    };

    this.state.isEndless = false;
    this.state.isTutorial = true;
    this.state.screen = 'game';
    this.uiManager.showGameScreen();
    if (this.el.gameScreen) {
      this.el.gameScreen.classList.add('tutorial-mode');
    }
    this.state.setLevel(tutorialLevel);
    this.engine.startLevel(tutorialLevel);
    this.uiManager.updateLevelHeader({ name: 'HOW TO PLAY', isTutorial: true });

    this._showPromptForStage(1);
  }

  /**
   * Display guidance banner and highlight controls for the given tutorial stage
   * @param {number} stage
   */
  _showPromptForStage(stage) {
    this.currentStage = stage;
    const banner = this.el.tutorialPromptBanner;
    const textEl = this.el.tutorialPromptText;
    const stepEl = this.el.tutorialStepIndicator;

    if (banner) {
      banner.hidden = false;
      banner.classList.remove('prompt-pop');
      void banner.offsetWidth;
      banner.classList.add('prompt-pop');
    }

    if (stepEl) {
      stepEl.textContent = `${stage}/3`;
    }

    // Clear prior highlights
    this.uiManager.clearHintHighlight();

    if (stage === 1) {
      if (textEl) {
        textEl.innerHTML = `Tap <span class="action-highlight">Turn Left ↺</span> to slide letters and fuse <strong>CAT</strong>!`;
      }
      this.uiManager.highlightHint(-1);
    } else if (stage === 2) {
      if (textEl) {
        textEl.innerHTML = `<strong>CAT</strong> is now an obstacle with a <b>Lifespan Badge [2]</b>! Tap <span class="action-highlight">Turn Right ↻</span> to fuse <strong>SUN</strong>!`;
      }
      this.uiManager.highlightHint(1);
    } else if (stage === 3) {
      if (textEl) {
        textEl.innerHTML = `Notice <strong>CAT's</strong> badge counted down to <b>[1]</b>! Tap <span class="action-highlight">Turn Left ↺</span> to solve <strong>FOX</strong> and dissolve <strong>CAT</strong>!`;
      }
      this.uiManager.highlightHint(-1);
    }
  }

  /**
   * Called by GameEngine after a turn or word completion during tutorial mode
   * @param {string} eventType - 'turn' | 'wordComplete' | 'levelComplete'
   */
  onGameStep(eventType) {
    if (!this.active) return;

    if (eventType === 'wordComplete') {
      if (this.state.wordIdx === 0) {
        setTimeout(() => {
          this._showPromptForStage(2);
        }, 700);
      } else if (this.state.wordIdx === 1) {
        setTimeout(() => {
          this._showPromptForStage(3);
        }, 700);
      }
    } else if (eventType === 'levelComplete') {
      if (this.el.tutorialPromptText) {
        this.el.tutorialPromptText.innerHTML = `✨ <strong>CAT dissolved!</strong> Tutorial complete!`;
      }
      setTimeout(() => {
        this.finishTutorial();
      }, 700);
    }
  }

  /**
   * Complete the tutorial and show celebration Outro Modal
   */
  finishTutorial() {
    this.active = false;
    this.state.isTutorial = false;
    TutorialManager.markCompleted();

    if (this.el.gameScreen) {
      this.el.gameScreen.classList.remove('tutorial-mode');
    }
    if (this.el.tutorialPromptBanner) {
      this.el.tutorialPromptBanner.hidden = true;
    }
    this.uiManager.clearHintHighlight();

    if (this.sound) this.sound.playVictory();
    if (this.nativeBridge) this.nativeBridge.triggerHaptic('success');

    this.uiManager.openModal('tutorialOutroModal');
  }

  /**
   * Exit tutorial cleanly
   */
  exitTutorial() {
    this.active = false;
    this.state.isTutorial = false;
    if (this.el.gameScreen) {
      this.el.gameScreen.classList.remove('tutorial-mode');
    }
    if (this.el.tutorialPromptBanner) {
      this.el.tutorialPromptBanner.hidden = true;
    }
    this.uiManager.clearHintHighlight();
    this.uiManager.closeAllModals();
  }
}
