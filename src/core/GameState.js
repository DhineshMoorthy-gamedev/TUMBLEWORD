import { BOARD_N, BOARD_WALLS } from '../config/constants.js';
import { loadBestStreak, saveBestStreak } from '../utils/storage.js';

export class GameState {
  constructor() {
    this.n = BOARD_N;
    this.walls = BOARD_WALLS;
    this.r = 0;
    this.angle = 0;
    this.wordIdx = 0;
    this.streak = 0;
    this.bestStreak = loadBestStreak();
    this.moves = 0;
    this.cards = [];
    this.hist = [];
    this.locked = false;
    this.runCompleted = false;
    this.mode = 'play'; // 'play' | 'editor'
  }

  reset(mode = 'play') {
    this.r = 0;
    this.angle = 0;
    this.wordIdx = 0;
    this.streak = 0;
    this.moves = 0;
    this.cards = [];
    this.hist = [];
    this.locked = false;
    this.runCompleted = false;
    this.mode = mode;
  }

  recordHistory(dir) {
    this.hist.push({
      dir,
      r: this.r,
      wordIdx: this.wordIdx,
      streak: this.streak,
      moves: this.moves,
      cards: this.cards.map(c => ({ ...c }))
    });
  }

  popHistory() {
    return this.hist.pop();
  }

  incrementStreak() {
    this.streak++;
    if (this.streak > this.bestStreak) {
      this.bestStreak = this.streak;
      saveBestStreak(this.bestStreak);
    }
  }
}
