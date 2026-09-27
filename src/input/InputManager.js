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
    if (this.el.restartBtn) {
      this.el.restartBtn.onclick = () => this.handlers.onRestart();
    }
    if (this.el.replayLevelBtn) {
      this.el.replayLevelBtn.onclick = () => this.handlers.onRestart();
    }

    document.addEventListener('keydown', e => {
      if (this.handlers.onKeyDown) {
        this.handlers.onKeyDown(e);
      }
    });
  }
}
