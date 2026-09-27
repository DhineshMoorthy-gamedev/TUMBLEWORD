import { CAMPAIGN_LEVELS } from '../levels/campaignLevels.js';
import { loadBestStreak, saveBestStreak } from '../utils/storage.js';

export class GameState {
  constructor() {
    this.currentLevelId = 1;
    this.level = CAMPAIGN_LEVELS[0];
    this.n = this.level.n;
    this.walls = this.level.walls;
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
    this.screen = 'home'; // 'home' | 'game'
  }

  setLevel(levelId) {
    const found = CAMPAIGN_LEVELS.find(l => l.id === levelId) || CAMPAIGN_LEVELS[0];
    this.currentLevelId = found.id;
    this.level = found;
    this.n = found.n;
    this.walls = found.walls;
    this.reset(this.mode);
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
