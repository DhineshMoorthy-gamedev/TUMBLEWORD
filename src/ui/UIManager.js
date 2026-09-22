export class UIManager {
  constructor(elements) {
    this.el = elements;
  }

  /**
   * Update stats and button states
   * @param {object} gameState
   * @param {boolean} isPlayingTimeline
   */
  updateStats(gameState, isPlayingTimeline = false) {
    this.el.moves.textContent = String(gameState.moves);
    this.el.streak.textContent = String(gameState.streak);
    this.el.streakVal.textContent = String(gameState.streak);
    this.el.bestStreak.textContent = String(gameState.bestStreak);

    this.el.leftBtn.disabled = gameState.locked || isPlayingTimeline;
    this.el.rightBtn.disabled = gameState.locked || isPlayingTimeline;
    this.el.undoBtn.disabled =
      gameState.locked || isPlayingTimeline || gameState.hist.length === 0;
    this.el.restartBtn.disabled = gameState.locked && !isPlayingTimeline;
  }

  /**
   * Set status line HTML message
   * @param {string} html
   */
  setStatus(html) {
    this.el.status.innerHTML = html;
  }

  /**
   * Show victory modal
   * @param {number} moves
   * @param {number} bestStreak
   */
  showVictory(moves, bestStreak) {
    this.el.victoryMoves.textContent = String(moves);
    this.el.victoryBest.textContent = String(bestStreak);
    this.el.victoryOverlay.hidden = false;
  }

  /**
   * Hide victory modal
   */
  hideVictory() {
    this.el.victoryOverlay.hidden = true;
  }
}
