export class InputManager {
  /**
   * @param {object} elements
   * @param {object} handlers
   */
  constructor(elements, handlers) {
    this.el = elements;
    this.handlers = handlers;
    this._bindEvents();
  }

  _bindEvents() {
    if (this.el.playModeBtn) {
      this.el.playModeBtn.onclick = () => this.handlers.onSetMode('play');
    }
    if (this.el.editorModeBtn) {
      this.el.editorModeBtn.onclick = () => this.handlers.onSetMode('editor');
    }

    if (this.el.leftBtn) {
      this.el.leftBtn.onclick = () => this.handlers.onTurn(-1);
    }
    if (this.el.rightBtn) {
      this.el.rightBtn.onclick = () => this.handlers.onTurn(1);
    }
    if (this.el.undoBtn) {
      this.el.undoBtn.onclick = () => this.handlers.onUndo();
    }
    if (this.el.hintBtn) {
      this.el.hintBtn.onclick = () => this.handlers.onHint();
    }
    if (this.el.restartBtn) {
      this.el.restartBtn.onclick = () => this.handlers.onRestart();
    }
    if (this.el.replayLevelBtn) {
      this.el.replayLevelBtn.onclick = () => this.handlers.onRestart();
    }

    // Robust Fullscreen Swipe Gesture Recognition on Game Screen
    let startX = 0;
    let startY = 0;
    let startTime = 0;
    let isTracking = false;

    const onStart = (clientX, clientY, target) => {
      // 1. Only track when game screen is active and visible
      if (!this.el.gameScreen || this.el.gameScreen.hidden) {
        return;
      }

      // 2. Ignore swipe initiation if the user tapped on an interactive button or control
      if (target && target.closest && target.closest('button, a, input, select, textarea, .nav-icon-btn, .action-btn, .turn-btn, .mode-btn, .modal-box, .modal-overlay:not([hidden]), .settings-modal, .levels-drawer:not([hidden])')) {
        return;
      }

      startX = clientX;
      startY = clientY;
      startTime = Date.now();
      isTracking = true;
    };

    const onEnd = (clientX, clientY) => {
      if (!isTracking) return;
      isTracking = false;

      const deltaX = clientX - startX;
      const deltaY = clientY - startY;
      const duration = Date.now() - startTime;
      const absX = Math.abs(deltaX);
      const absY = Math.abs(deltaY);

      // Threshold: at least 20px horizontal movement, predominantly horizontal (absX > absY * 0.55), within 750ms
      if (absX >= 20 && absX > absY * 0.55 && duration < 750) {
        if (deltaX < 0) {
          this.handlers.onTurn(-1);
        } else {
          this.handlers.onTurn(1);
        }
      }
    };

    // Global Pointer Events (Desktop mouse/pen & modern Mobile browsers)
    window.addEventListener('pointerdown', e => {
      if (e.pointerType === 'mouse' && e.button !== 0) return;
      onStart(e.clientX, e.clientY, e.target);
    }, { passive: true });

    window.addEventListener('pointerup', e => {
      onEnd(e.clientX, e.clientY);
    }, { passive: true });

    // Touch events fallback for mobile platforms
    window.addEventListener('touchstart', e => {
      if (e.touches && e.touches[0]) {
        onStart(e.touches[0].clientX, e.touches[0].clientY, e.target);
      }
    }, { passive: true });

    window.addEventListener('touchend', e => {
      if (e.changedTouches && e.changedTouches[0]) {
        onEnd(e.changedTouches[0].clientX, e.changedTouches[0].clientY);
      }
    }, { passive: true });

    document.addEventListener('keydown', e => {
      if (this.handlers.onKeyDown) {
        this.handlers.onKeyDown(e);
      }
    });
  }
}
