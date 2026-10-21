/**
 * Level1TourController - Controls the focused 7-substep spotlight tour for Level 1.
 * Spotlights Word Counter, Target Word, Moves Counter, Star Goal, Open Floor Cells Counter,
 * Rotating Board, and Gravity Controls.
 */
export class Level1TourController {
  /**
   * @param {object} options
   * @param {import('../ui/UIManager.js').UIManager} options.uiManager
   * @param {import('../core/GameState.js').GameState} options.state
   * @param {import('../audio/SoundFX.js').soundFX} [options.sound]
   * @param {import('../platform/nativeBridge.js').NativeBridge} [options.nativeBridge]
   * @param {object} options.elements
   */
  constructor({ uiManager, state, sound = null, nativeBridge = null, elements }) {
    this.uiManager = uiManager;
    this.state = state;
    this.sound = sound;
    this.nativeBridge = nativeBridge;
    this.el = elements;
    this.currentStep = 0;
    this.active = false;

    this.steps = [
      {
        targetId: 'wordProgressPill',
        title: '📖 WORD COUNTER',
        desc: 'Tracks current word progress. Some levels feature multiple words!',
        placement: 'bottom'
      },
      {
        targetId: 'word',
        title: '🎯 TARGET WORD',
        desc: 'Spell this word by sliding letters together.',
        placement: 'bottom'
      },
      {
        targetId: 'movesPill',
        title: '🔢 MOVES COUNTER',
        desc: 'Tracks moves taken versus your maximum allowed limit.',
        placement: 'bottom'
      },
      {
        targetId: 'starGoalsTracker',
        title: '⭐ STAR GOAL',
        desc: 'Solve within the move target to earn all 3 Stars!',
        placement: 'bottom'
      },
      {
        targetId: 'emptyCellsBadge',
        title: '⬚ OPEN SPACES',
        desc: 'Shows open floor cells. Keep enough room for words to slide!',
        placement: 'bottom'
      },
      {
        targetId: 'stage',
        title: '📦 GRAVITY BOARD',
        desc: 'Letters tumble until blocked. Letters in sequence bond together!',
        placement: 'bottom'
      },
      {
        targetId: 'turnrow',
        title: '🔄 ROTATE GRAVITY',
        desc: 'Turn Left ↺ or Right ↻ to shift gravity and slide tiles.',
        placement: 'top'
      }
    ];

    this._onResize = this._onResize.bind(this);
  }

  static STORAGE_KEY = 'rotatle_level1_tour_completed';

  /**
   * Check if the Level 1 tour has been completed or skipped
   * @returns {boolean}
   */
  static isCompleted() {
    try {
      return localStorage.getItem(Level1TourController.STORAGE_KEY) === 'true';
    } catch (_) {
      return false;
    }
  }

  /**
   * Mark the Level 1 tour as completed/seen in local storage
   */
  static markCompleted() {
    try {
      localStorage.setItem(Level1TourController.STORAGE_KEY, 'true');
    } catch (_) {}
  }

  /**
   * Evaluate whether Level 1 tour should run.
   * Runs whenever Level 1 is played, replayed, or restarted.
   * @param {import('../core/GameState.js').GameState} state
   * @returns {boolean}
   */
  static shouldRun(state) {
    if (!state || !state.level) return false;
    // Always show on Campaign Level 1, not endless, not daily, not tutorial level
    const isLevel1 = state.currentLevelId === 1 || state.level.id === 1;
    const isSpecialMode = state.isTutorial || state.isEndless || !!state.level.isDaily || !!state.level.isTutorial;
    return isLevel1 && !isSpecialMode;
  }

  /**
   * Start the focused 7-substep tour
   */
  startTour() {
    if (!this.el.levelTourOverlay) return;
    this.active = true;
    this.currentStep = 0;
    this.el.levelTourOverlay.hidden = false;

    window.removeEventListener('resize', this._onResize);
    window.addEventListener('resize', this._onResize, { passive: true });
    this._renderCurrentStep();
  }

  /**
   * Advance to the next substep or finish if on final step
   */
  nextStep() {
    if (this.currentStep < this.steps.length - 1) {
      this.currentStep++;
      if (this.sound) this.sound.playClick();
      if (this.nativeBridge) this.nativeBridge.triggerHaptic('light');
      this._renderCurrentStep();
    } else {
      this.finishTour();
    }
  }

  /**
   * Skip tour immediately
   */
  skipTour() {
    if (this.sound) this.sound.playClick();
    this.finishTour();
  }

  /**
   * Finish tour and unlock gameplay
   */
  finishTour() {
    this.active = false;
    Level1TourController.markCompleted();
    window.removeEventListener('resize', this._onResize);

    if (this.el.levelTourOverlay) {
      this.el.levelTourOverlay.hidden = true;
    }
    if (this.sound) this.sound.playClick();
    if (this.nativeBridge) this.nativeBridge.triggerHaptic('medium');
  }

  _onResize() {
    if (this.active) {
      this._updatePositions();
    }
  }

  _renderCurrentStep() {
    const step = this.steps[this.currentStep];
    if (!step) return;

    if (this.el.levelTourStepBadge) {
      this.el.levelTourStepBadge.textContent = `${this.currentStep + 1}/${this.steps.length}`;
    }
    if (this.el.levelTourTitle) {
      this.el.levelTourTitle.textContent = step.title;
    }
    if (this.el.levelTourDesc) {
      this.el.levelTourDesc.textContent = step.desc;
    }
    if (this.el.levelTourNextBtn) {
      const isLast = this.currentStep === this.steps.length - 1;
      this.el.levelTourNextBtn.textContent = isLast ? 'Play Level 1 🎮' : 'Next ➔';
    }

    // Defer position calculation to next frame to allow DOM measurements to settle
    requestAnimationFrame(() => this._updatePositions());
  }

  _updatePositions() {
    const step = this.steps[this.currentStep];
    if (!step) return;

    const targetEl = document.getElementById(step.targetId);
    if (!targetEl || !this.el.levelTourSpotlight || !this.el.levelTourCard) return;

    const rect = targetEl.getBoundingClientRect();
    // Use tailored padding and border radius based on target geometry
    const isPill = step.targetId === 'emptyCellsBadge';
    const isStatPill = step.targetId === 'wordProgressPill' || step.targetId === 'movesPill';
    const isTracker = step.targetId === 'starGoalsTracker';
    const padding = isPill ? 3 : (isStatPill ? 4 : (isTracker ? 4 : 6));
    const borderRadius = isPill ? '9999px' : (isStatPill ? '10px' : (isTracker ? '10px' : '16px'));

    this.el.levelTourSpotlight.style.borderRadius = borderRadius;
    this.el.levelTourSpotlight.style.top = `${Math.max(0, rect.top - padding)}px`;
    this.el.levelTourSpotlight.style.left = `${Math.max(0, rect.left - padding)}px`;
    this.el.levelTourSpotlight.style.width = `${rect.width + padding * 2}px`;
    this.el.levelTourSpotlight.style.height = `${rect.height + padding * 2}px`;

    // Position coachmark card
    const cardEl = this.el.levelTourCard;
    const cardRect = cardEl.getBoundingClientRect();
    const viewportHeight = window.innerHeight;
    const margin = 10;

    let topPos;
    if (step.placement === 'bottom') {
      topPos = rect.bottom + padding + margin;
      // If bottom would overflow viewport, flip to top
      if (topPos + cardRect.height > viewportHeight - 14) {
        topPos = rect.top - padding - cardRect.height - margin;
      }
    } else {
      topPos = rect.top - padding - cardRect.height - margin;
      // If top would overflow viewport, flip to bottom
      if (topPos < 14) {
        topPos = rect.bottom + padding + margin;
      }
    }

    cardEl.style.top = `${Math.max(14, Math.min(viewportHeight - cardRect.height - 14, topPos))}px`;
    cardEl.style.left = '50%';
    cardEl.style.transform = 'translateX(-50%)';
  }
}
