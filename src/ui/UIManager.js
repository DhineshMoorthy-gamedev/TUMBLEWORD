export class UIManager {
  constructor(elements) {
    this.el = elements;
  }

  /**
   * Render the 10 level cards on the home screen
   * @param {Array<object>} levels
   * @param {(levelId: number) => void} onSelectLevel
   * @param {number} [activeLevelId]
   */
  renderHomeScreen(levels, onSelectLevel, activeLevelId = 1) {
    if (!this.el.levelGrid) return;
    this.el.levelGrid.innerHTML = '';

    levels.forEach(lvl => {
      const card = document.createElement('button');
      card.className = `level-card${lvl.id === activeLevelId ? ' active' : ''}`;
      card.type = 'button';

      card.innerHTML = `
        <div class="level-card-top">
          <span class="level-badge">Level ${lvl.id}</span>
          <span class="grid-badge">${lvl.n}×${lvl.n}</span>
        </div>
        <div class="level-card-title">${lvl.name}</div>
        <div class="level-card-meta">${lvl.words.length} Words • ${lvl.difficultyTier}</div>
        <div class="level-card-bottom">
          <span class="level-card-score">⚡ Score: <b>${lvl.difficultyScore}</b></span>
          <span class="level-moves-badge">🎯 <b>${lvl.optimalMoves || lvl.words.length * 4}</b> Moves</span>
        </div>
      `;

      card.addEventListener('click', () => {
        onSelectLevel(lvl.id);
      });

      this.el.levelGrid.appendChild(card);
    });
  }

  /**
   * Switch to Home Screen view
   */
  showHomeScreen() {
    if (this.el.homeScreen) this.el.homeScreen.hidden = false;
    if (this.el.gameScreen) this.el.gameScreen.hidden = true;
    this.hideVictory();
  }

  /**
   * Switch to Gameplay view
   */
  showGameScreen() {
    if (this.el.homeScreen) this.el.homeScreen.hidden = true;
    if (this.el.gameScreen) this.el.gameScreen.hidden = false;
  }

  /**
   * Update header metadata for active level
   * @param {object} level
   */
  updateLevelHeader(level) {
    if (this.el.currentLevelName) {
      this.el.currentLevelName.textContent = `Level ${level.id}: ${level.name}`;
    }
    if (this.el.currentLevelMeta) {
      this.el.currentLevelMeta.textContent = `${level.n}×${level.n} Grid • ${level.words.length} Words • Score: ${level.difficultyScore}`;
    }
  }

  /**
   * Update stats and button states
   * @param {object} gameState
   * @param {boolean} isPlayingTimeline
   */
  updateStats(gameState, isPlayingTimeline = false) {
    const totalWords = gameState.level ? gameState.level.words.length : 3;
    const currentWordNum = Math.min(gameState.wordIdx + 1, totalWords);

    if (this.el.wordProgress) {
      this.el.wordProgress.textContent = `${currentWordNum} / ${totalWords}`;
    }
    if (this.el.moves) this.el.moves.textContent = String(gameState.moves);
    if (this.el.streak) this.el.streak.textContent = String(gameState.streak);
    if (this.el.bestStreak) this.el.bestStreak.textContent = String(gameState.bestStreak);

    if (this.el.leftBtn) this.el.leftBtn.disabled = gameState.locked || isPlayingTimeline;
    if (this.el.rightBtn) this.el.rightBtn.disabled = gameState.locked || isPlayingTimeline;
    if (this.el.undoBtn) {
      this.el.undoBtn.disabled =
        gameState.locked || isPlayingTimeline || gameState.hist.length === 0;
    }
    if (this.el.restartBtn) {
      this.el.restartBtn.disabled = gameState.locked && !isPlayingTimeline;
    }
  }

  /**
   * Set status line HTML message
   * @param {string} html
   */
  setStatus(html) {
    if (this.el.status) this.el.status.innerHTML = html;
  }

  /**
   * Show victory modal
   * @param {number} moves
   * @param {number} bestStreak
   * @param {object} [level]
   */
  showVictory(moves, bestStreak, level = null) {
    if (this.el.victoryMoves) this.el.victoryMoves.textContent = String(moves);
    if (this.el.victoryBest) this.el.victoryBest.textContent = String(bestStreak);

    if (level) {
      if (this.el.victoryTitle) {
        this.el.victoryTitle.textContent = `${level.name} Cleared!`;
      }
      if (this.el.victorySubtitle) {
        this.el.victorySubtitle.textContent = `All ${level.words.length} words spelled on ${level.n}×${level.n} grid!`;
      }
      if (this.el.victoryScore) {
        this.el.victoryScore.textContent = `Score: ${level.difficultyScore}`;
      }
    }

    if (this.el.victoryOverlay) this.el.victoryOverlay.hidden = false;
  }

  /**
   * Hide victory modal
   */
  hideVictory() {
    if (this.el.victoryOverlay) this.el.victoryOverlay.hidden = true;
  }
}
