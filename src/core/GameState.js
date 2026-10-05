import { CAMPAIGN_LEVELS } from '../levels/campaignLevels.js';
import {
  loadBestStreak,
  saveBestStreak,
  loadCompletedLevels,
  saveCompletedLevel,
  loadUnlockedLevel,
  saveUnlockedLevel,
  loadTotalWordsSolved,
  addTotalWordsSolved,
  loadLevelStars,
  saveLevelStars,
  loadLevelBestMoves,
  saveLevelBestMoves,
  calculateMoveBudget,
  calculate2StarLimit,
  calculateStars
} from '../utils/storage.js';

export class GameState {
  constructor() {
    this.completedLevels = loadCompletedLevels();
    this.unlockedLevel = loadUnlockedLevel();
    this.totalWords = loadTotalWordsSolved();
    this.levelStars = loadLevelStars();
    this.levelBestMoves = loadLevelBestMoves();
    this.currentLevelId = this.unlockedLevel || 1;
    this.level = CAMPAIGN_LEVELS.find(l => l.id === this.currentLevelId) || CAMPAIGN_LEVELS[0];
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
    this.outOfMoves = false;
    this.undoUsed = false;
    this.mode = 'play'; // 'play' | 'editor'
    this.screen = 'home'; // 'home' | 'game'
  }

  get currentWord() {
    return this.level?.words?.[this.wordIdx]?.word || '';
  }

  setLevel(levelOrId) {
    if (typeof levelOrId === 'object' && levelOrId !== null) {
      this.level = levelOrId;
      this.currentLevelId = levelOrId.id;
    } else {
      const found = CAMPAIGN_LEVELS.find(l => l.id === levelOrId) || CAMPAIGN_LEVELS[0];
      this.currentLevelId = found.id;
      this.level = found;
    }
    this.n = this.level.n;
    this.walls = this.level.walls;
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
    this.outOfMoves = false;
    this.undoUsed = false;
    this.mode = mode;
  }

  getOptimalMoves() {
    return this.level && this.level.optimalMoves ? this.level.optimalMoves : 10;
  }

  getMaxMoves() {
    if (this.isTutorial || (this.level && this.level.isTutorial)) {
      return Infinity;
    }
    if (this.isEndless || (this.level && this.level.isEndless)) {
      return Infinity;
    }
    return calculateMoveBudget(this.getOptimalMoves());
  }

  get2StarLimit() {
    return calculate2StarLimit(this.getOptimalMoves());
  }

  getCurrentStars() {
    return calculateStars(this.moves, this.getOptimalMoves());
  }

  getMovesRemaining() {
    return Math.max(0, this.getMaxMoves() - this.moves);
  }

  getTotalFloorCells() {
    const n = this.n || (this.level && this.level.n) || 5;
    const walls = this.walls || (this.level && this.level.walls) || [];
    let wallCount = 0;
    for (let y = 0; y < n; y++) {
      for (let x = 0; x < n; x++) {
        if (walls[y] && walls[y][x] === '#') {
          wallCount++;
        }
      }
    }
    return Math.max(1, (n * n) - wallCount);
  }

  getEmptyCellsCount() {
    const totalFloor = this.getTotalFloorCells();
    const occupied = this.cards ? this.cards.length : 0;
    return Math.max(0, totalFloor - occupied);
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
    this.totalWords = addTotalWordsSolved(1);
  }

  markLevelCompleted() {
    if (typeof this.currentLevelId === 'number') {
      saveCompletedLevel(this.currentLevelId);
      if (!this.completedLevels.includes(this.currentLevelId)) {
        this.completedLevels.push(this.currentLevelId);
      }
      const earnedStars = calculateStars(this.moves, this.getOptimalMoves());
      saveLevelStars(this.currentLevelId, earnedStars);
      saveLevelBestMoves(this.currentLevelId, this.moves);
      this.levelStars[this.currentLevelId] = Math.max(this.levelStars[this.currentLevelId] || 0, earnedStars);
      this.levelBestMoves[this.currentLevelId] = Math.min(this.levelBestMoves[this.currentLevelId] || 999, this.moves);

      const nextId = this.currentLevelId + 1;
      if (nextId <= CAMPAIGN_LEVELS.length) {
        saveUnlockedLevel(nextId);
        this.unlockedLevel = Math.max(this.unlockedLevel, nextId);
      }
    }
  }

  isLevelCompleted(levelId) {
    return this.completedLevels.includes(levelId);
  }

  getLevelStars(levelId) {
    return this.levelStars[levelId] || 0;
  }

  getLevelBestMoves(levelId) {
    return this.levelBestMoves[levelId] || null;
  }
}

