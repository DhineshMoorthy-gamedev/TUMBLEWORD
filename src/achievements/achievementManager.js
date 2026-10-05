/**
 * Local Achievement Manager
 * Tracks 25 local achievements, handles evaluation, timestamps, and unlock notifications
 */

import { ACHIEVEMENTS, ACHIEVEMENT_CATEGORIES } from './achievementDefinitions.js';
import { dailyManager } from '../simulation/dailyManager.js';
import {
  loadUnlockedAchievements,
  saveUnlockedAchievements,
  loadAchievementStats,
  loadCompletedLevels,
  loadLevelStars,
  getTotalStarsEarned,
  loadBestStreak,
  loadTotalWordsSolved
} from '../utils/storage.js';

export class AchievementManager {
  constructor() {
    this.definitions = ACHIEVEMENTS;
    this.categories = ACHIEVEMENT_CATEGORIES;
    this.unlockedData = loadUnlockedAchievements();
    this.onUnlockCallback = null;
  }

  setOnUnlock(callback) {
    this.onUnlockCallback = callback;
  }

  /**
   * Reload unlocked data from storage
   */
  reload() {
    this.unlockedData = loadUnlockedAchievements();
  }

  /**
   * Assemble comprehensive gameplay stats snapshot
   * @param {object} [extraStats={}]
   * @returns {object}
   */
  getAggregatedStats(extraStats = {}) {
    const completedLevels = loadCompletedLevels();
    const levelStars = loadLevelStars();
    const customStats = loadAchievementStats();

    let threeStarCount = 0;
    Object.values(levelStars).forEach(s => {
      if (s === 3) threeStarCount++;
    });

    const dailySolvedCount = Math.max(
      customStats.dailyTotalSolved || 0,
      dailyManager.getAllTimeCompletedCount() || 0
    );

    const dailyStreakVal = Math.max(
      customStats.dailyBestStreak || 0,
      dailyManager.getStreak() || 0
    );

    return {
      completedLevelsCount: completedLevels.length,
      totalStars: getTotalStarsEarned(),
      threeStarLevelsCount: threeStarCount,
      bestStreak: loadBestStreak(),
      totalWords: loadTotalWordsSolved(),
      dailyTotalSolved: dailySolvedCount,
      dailyBestStreak: dailyStreakVal,
      dailyArchiveSolvedCount: customStats.dailyArchiveSolvedCount || 0,
      endlessBestStreak: customStats.endlessBestStreak || loadBestStreak() || 0,
      undoFreeClears: customStats.undoFreeClears || 0,
      multiChunkMerges: customStats.multiChunkMerges || 0,
      fastClears10s: customStats.fastClears10s || 0,
      fastClears15s: customStats.fastClears15s || 0,
      dailySprinter60s: customStats.dailySprinter60s || 0,
      endlessMaxTimeSec: customStats.endlessMaxTimeSec || 0,
      nightOwlClears: customStats.nightOwlClears || 0,
      ...extraStats
    };
  }

  /**
   * Evaluate all achievements against latest stats
   * @param {object} [extraStats={}]
   * @returns {Array<object>} Newly unlocked achievements
   */
  checkAchievements(extraStats = {}) {
    this.reload();
    const stats = this.getAggregatedStats(extraStats);
    const newlyUnlocked = [];
    let stateChanged = false;

    this.definitions.forEach(ach => {
      const currentVal = ach.evalProgress ? ach.evalProgress(stats) : 0;
      const alreadyUnlocked = !!this.unlockedData[ach.id]?.unlockedAt;

      if (!alreadyUnlocked && currentVal >= ach.target) {
        const entry = {
          unlockedAt: new Date().toISOString(),
          progress: ach.target
        };
        this.unlockedData[ach.id] = entry;
        newlyUnlocked.push({ ...ach, ...entry });
        stateChanged = true;
      }
    });

    if (stateChanged) {
      saveUnlockedAchievements(this.unlockedData);
      newlyUnlocked.forEach(unlocked => {
        if (this.onUnlockCallback) {
          this.onUnlockCallback(unlocked);
        }
      });
    }

    return newlyUnlocked;
  }

  /**
   * Get formatted list of achievements for a category
   * @param {string} [category='all']
   * @param {object} [statsOverride]
   * @returns {Array<object>}
   */
  getAchievementsList(category = 'all', statsOverride = null) {
    this.reload();
    const stats = statsOverride || this.getAggregatedStats();

    const filtered = category === 'all'
      ? this.definitions
      : this.definitions.filter(a => a.category === category);

    return filtered.map(ach => {
      const currentVal = ach.evalProgress ? ach.evalProgress(stats) : 0;
      const unlockEntry = this.unlockedData[ach.id];
      const isUnlocked = !!(unlockEntry && unlockEntry.unlockedAt);
      const displayProgress = isUnlocked ? ach.target : Math.min(ach.target, currentVal);

      return {
        ...ach,
        isUnlocked,
        unlockedAt: isUnlocked ? unlockEntry.unlockedAt : null,
        currentProgress: displayProgress,
        percent: Math.min(100, Math.round((displayProgress / ach.target) * 100))
      };
    });
  }

  /**
   * Overall summary statistics
   * @returns {{ unlockedCount: number, totalCount: number, percentage: number }}
   */
  getSummary() {
    this.reload();
    const totalCount = this.definitions.length;
    let unlockedCount = 0;

    this.definitions.forEach(ach => {
      if (this.unlockedData[ach.id]?.unlockedAt) {
        unlockedCount++;
      }
    });

    const percentage = totalCount > 0 ? Math.round((unlockedCount / totalCount) * 100) : 0;
    return {
      unlockedCount,
      totalCount,
      percentage
    };
  }

  /**
   * Format ISO date string to e.g. "18 Sep 2026"
   * @param {string} isoString
   * @returns {string}
   */
  formatDate(isoString) {
    if (!isoString) return '';
    try {
      const d = new Date(isoString);
      const day = d.getDate();
      const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
      const month = monthNames[d.getMonth()];
      const year = d.getFullYear();
      return `${day} ${month} ${year}`;
    } catch (e) {
      return '';
    }
  }
}

export const achievementManager = new AchievementManager();
