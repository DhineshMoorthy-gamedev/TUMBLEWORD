/**
 * Hint Guidance Manager
 * Manages 10-second active live guidance sessions and turn-by-turn reactive hints
 */

import { solveBFS } from '../simulation/solver.js';

export class HintManager {
  constructor() {
    this.active = false;
    this.secondsRemaining = 0;
    this._interval = null;
    this._onTick = null;
    this._onNextMove = null;
    this._onEnd = null;
  }

  /**
   * Check if a 10-second guided hint session is currently active
   * @returns {boolean}
   */
  isGuidanceActive() {
    return this.active;
  }

  /**
   * Start a 10-second active guidance session
   * @param {object} gameState - Current GameState
   * @param {object} callbacks - { onTick, onNextMove, onEnd }
   * @param {number} [duration=10]
   * @returns {boolean} Whether guidance started successfully
   */
  startGuidance(gameState, callbacks = {}, duration = 10) {
    this.stopGuidance();

    const word = gameState?.currentWord || gameState?.level?.words?.[gameState?.wordIdx]?.word;
    if (!gameState || !word || !gameState.cards || !gameState.level) {
      return false;
    }

    const boardN = gameState.level?.n || gameState.n || 5;
    const boardWalls = gameState.level?.walls || gameState.walls || [];

    const path = solveBFS(
      word,
      {
        r: gameState.r,
        cards: gameState.cards,
        n: boardN,
        walls: boardWalls
      },
      16,
      boardN,
      boardWalls
    );

    if (!path || path.length === 0) {
      return false; // Dead-end or already solved
    }

    this.active = true;
    this.secondsRemaining = duration;
    this._onTick = callbacks.onTick || null;
    this._onNextMove = callbacks.onNextMove || null;
    this._onEnd = callbacks.onEnd || null;

    // Trigger initial next move
    const nextDir = path[0];
    if (this._onNextMove) {
      this._onNextMove(nextDir, path.length);
    }
    if (this._onTick) {
      this._onTick(this.secondsRemaining);
    }

    this._interval = setInterval(() => {
      this.secondsRemaining--;
      if (this._onTick) {
        this._onTick(this.secondsRemaining);
      }

      if (this.secondsRemaining <= 0) {
        this.stopGuidance('Timer expired');
      }
    }, 1000);

    return true;
  }

  /**
   * Called whenever the board state changes (turn, merge, undo) during an active session
   * @param {object} gameState
   */
  onStateChanged(gameState) {
    if (!this.active || !gameState) return;

    const word = gameState.currentWord || gameState.level?.words?.[gameState.wordIdx]?.word;
    if (!word || gameState.runCompleted) {
      this.stopGuidance('Completed');
      return;
    }

    const boardN = gameState.level?.n || gameState.n || 5;
    const boardWalls = gameState.level?.walls || gameState.walls || [];

    const path = solveBFS(
      word,
      {
        r: gameState.r,
        cards: gameState.cards,
        n: boardN,
        walls: boardWalls
      },
      16,
      boardN,
      boardWalls
    );

    if (path && path.length > 0) {
      const nextDir = path[0];
      if (this._onNextMove) {
        this._onNextMove(nextDir, path.length);
      }
    } else {
      // Dead-end reached or word already completed
      if (this._onNextMove) {
        this._onNextMove(null, 0);
      }
    }
  }

  /**
   * Stop active guidance session cleanly
   * @param {string} [reason]
   */
  stopGuidance(reason = '') {
    if (this._interval) {
      clearInterval(this._interval);
      this._interval = null;
    }
    const wasActive = this.active;
    this.active = false;
    this.secondsRemaining = 0;

    if (wasActive && this._onEnd) {
      this._onEnd(reason);
    }

    this._onTick = null;
    this._onNextMove = null;
    this._onEnd = null;
  }
}

export const hintManager = new HintManager();
