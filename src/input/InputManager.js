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
    this.el.playModeBtn.onclick = () => this.handlers.onSetMode('play');
    this.el.editorModeBtn.onclick = () => this.handlers.onSetMode('editor');

    this.el.leftBtn.onclick = () => this.handlers.onTurn(-1);
    this.el.rightBtn.onclick = () => this.handlers.onTurn(1);
    this.el.undoBtn.onclick = () => this.handlers.onUndo();
    this.el.restartBtn.onclick = () => this.handlers.onRestart();
    this.el.playAgainBtn.onclick = () => this.handlers.onRestart();

    document.addEventListener('keydown', e => {
      this.handlers.onKeyDown(e);
    });
  }
}
