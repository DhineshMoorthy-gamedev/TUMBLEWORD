const BEST_STREAK_KEY = 'rotatle_best_streak';
const COMPLETED_LEVELS_KEY = 'rotatle_completed_levels';
const UNLOCKED_LEVEL_KEY = 'rotatle_unlocked_level';
const TOTAL_WORDS_KEY = 'rotatle_total_words';
const SOUND_MUTED_KEY = 'rotatle_sound_muted';
const VIBRATE_KEY = 'rotatle_vibrate_enabled';
const REMINDER_KEY = 'rotatle_reminder_enabled';
const LEVEL_STARS_KEY = 'rotatle_level_stars';
const LEVEL_BEST_MOVES_KEY = 'rotatle_level_best_moves';

/**
 * Calculate maximum move budget for a level
 * @param {number} optimalMoves
 * @returns {number}
 */
export function calculateMoveBudget(optimalMoves = 10) {
  const opt = Math.max(1, optimalMoves || 10);
  return Math.max(opt + 8, Math.ceil(opt * 1.6));
}

/**
 * Calculate 2-star threshold for a level
 * @param {number} optimalMoves
 * @returns {number}
 */
export function calculate2StarLimit(optimalMoves = 10) {
  const opt = Math.max(1, optimalMoves || 10);
  return Math.ceil(opt * 1.3) + 1;
}

/**
 * Calculate star rating (1 to 3) based on moves taken
 * @param {number} moves
 * @param {number} optimalMoves
 * @returns {number} 0, 1, 2, or 3
 */
export function calculateStars(moves, optimalMoves = 10) {
  const opt = Math.max(1, optimalMoves || 10);
  const twoStarLimit = calculate2StarLimit(opt);
  const maxBudget = calculateMoveBudget(opt);

  if (moves <= opt) return 3;
  if (moves <= twoStarLimit) return 2;
  if (moves <= maxBudget) return 1;
  return 0;
}

export function loadLevelStars() {
  try {
    const raw = localStorage.getItem(LEVEL_STARS_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch (e) {
    return {};
  }
}

export function saveLevelStars(levelId, stars) {
  try {
    const data = loadLevelStars();
    const currentStars = data[levelId] || 0;
    if (stars > currentStars) {
      data[levelId] = stars;
      localStorage.setItem(LEVEL_STARS_KEY, JSON.stringify(data));
    }
    return data[levelId];
  } catch (e) {
    return stars;
  }
}

export function loadLevelBestMoves() {
  try {
    const raw = localStorage.getItem(LEVEL_BEST_MOVES_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch (e) {
    return {};
  }
}

export function saveLevelBestMoves(levelId, moves) {
  try {
    const data = loadLevelBestMoves();
    const currentBest = data[levelId];
    if (currentBest === undefined || moves < currentBest) {
      data[levelId] = moves;
      localStorage.setItem(LEVEL_BEST_MOVES_KEY, JSON.stringify(data));
    }
    return data[levelId];
  } catch (e) {
    return moves;
  }
}

export function getTotalStarsEarned() {
  try {
    const data = loadLevelStars();
    let total = 0;
    Object.values(data).forEach(s => {
      total += (typeof s === 'number' ? s : 0);
    });
    return total;
  } catch (e) {
    return 0;
  }
}

export function loadBestStreak() {
  try {
    return parseInt(localStorage.getItem(BEST_STREAK_KEY) || '0', 10) || 0;
  } catch (e) {
    return 0;
  }
}

export function saveBestStreak(score) {
  try {
    localStorage.setItem(BEST_STREAK_KEY, String(score));
  } catch (e) {}
}

export function loadCompletedLevels() {
  try {
    const raw = localStorage.getItem(COMPLETED_LEVELS_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch (e) {
    return [];
  }
}

export function saveCompletedLevel(levelId) {
  try {
    const list = loadCompletedLevels();
    if (!list.includes(levelId)) {
      list.push(levelId);
      localStorage.setItem(COMPLETED_LEVELS_KEY, JSON.stringify(list));
    }
  } catch (e) {}
}

export function loadUnlockedLevel() {
  try {
    return parseInt(localStorage.getItem(UNLOCKED_LEVEL_KEY) || '1', 10) || 1;
  } catch (e) {
    return 1;
  }
}

export function saveUnlockedLevel(levelId) {
  try {
    const current = loadUnlockedLevel();
    if (levelId > current) {
      localStorage.setItem(UNLOCKED_LEVEL_KEY, String(levelId));
    }
  } catch (e) {}
}

export function loadTotalWordsSolved() {
  try {
    return parseInt(localStorage.getItem(TOTAL_WORDS_KEY) || '0', 10) || 0;
  } catch (e) {
    return 0;
  }
}

export function addTotalWordsSolved(count) {
  try {
    const current = loadTotalWordsSolved();
    const updated = current + count;
    localStorage.setItem(TOTAL_WORDS_KEY, String(updated));
    return updated;
  } catch (e) {
    return 0;
  }
}

export function loadVibrateEnabled() {
  try {
    const val = localStorage.getItem(VIBRATE_KEY);
    return val !== null ? val === 'true' : true;
  } catch (e) {
    return true;
  }
}

export function saveVibrateEnabled(enabled) {
  try {
    localStorage.setItem(VIBRATE_KEY, String(enabled));
  } catch (e) {}
}

export function loadReminderEnabled() {
  try {
    const val = localStorage.getItem(REMINDER_KEY) ?? localStorage.getItem('tumbleword_reminder_enabled');
    return val !== null ? val === 'true' : false;
  } catch (e) {
    return false;
  }
}

export function saveReminderEnabled(enabled) {
  try {
    localStorage.setItem(REMINDER_KEY, String(enabled));
  } catch (e) {}
}

export function isAdsRemoved() {
  try {
    return localStorage.getItem('rotatle_ads_removed') === 'true';
  } catch (e) {
    return false;
  }
}

export function setAdsRemoved(removed = true) {
  try {
    localStorage.setItem('rotatle_ads_removed', String(Boolean(removed)));
  } catch (e) {}
}

const HINT_COUNT_KEY = 'rotatle_hint_count';
const HINT_RECHARGE_KEY = 'rotatle_hint_recharge_time';
export const HINT_RECHARGE_DURATION_MS = 4 * 60 * 60 * 1000; // 4 hours in milliseconds
const DEFAULT_FREE_HINTS = 3;

export function getHintRechargeTarget() {
  try {
    const raw = localStorage.getItem(HINT_RECHARGE_KEY);
    if (!raw) return null;
    const target = parseInt(raw, 10);
    return isNaN(target) ? null : target;
  } catch (e) {
    return null;
  }
}

export function startHintRechargeTimer() {
  try {
    let target = getHintRechargeTarget();
    if (!target || target <= Date.now()) {
      target = Date.now() + HINT_RECHARGE_DURATION_MS;
      localStorage.setItem(HINT_RECHARGE_KEY, String(target));
    }
    return target;
  } catch (e) {
    return Date.now() + HINT_RECHARGE_DURATION_MS;
  }
}

export function clearHintRechargeTimer() {
  try {
    localStorage.removeItem(HINT_RECHARGE_KEY);
  } catch (e) {}
}

/**
 * Checks if recharge timer is active and calculates remaining ms.
 * If expired, automatically grants +1 hint and clears the recharge target.
 * @returns {number} remaining ms until recharge, or 0 if ready/inactive
 */
export function getHintRechargeRemainingMs() {
  const target = getHintRechargeTarget();
  if (!target) return 0;

  const now = Date.now();
  if (now >= target) {
    // 4 hours elapsed! Grant +1 hint and clear recharge timer
    clearHintRechargeTimer();
    const current = loadHintCount();
    saveHintCount(current + 1);
    return 0;
  }
  return Math.max(0, target - now);
}

/**
 * Format milliseconds into HH:MM:SS or Xh Ym
 * @param {number} ms
 * @param {boolean} [padHours=true]
 * @returns {string}
 */
export function formatRechargeTime(ms, padHours = true) {
  if (!ms || ms <= 0) return padHours ? '00:00:00' : '0m';
  const totalSeconds = Math.max(0, Math.ceil(ms / 1000));
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  if (padHours) {
    return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  }
  if (hours > 0) {
    return `${hours}h ${minutes}m`;
  }
  return `${minutes}m ${seconds}s`;
}

export function loadHintCount() {
  try {
    // Check if an existing 4-hour recharge expired while away
    const target = getHintRechargeTarget();
    if (target && Date.now() >= target) {
      clearHintRechargeTimer();
      const current = parseInt(localStorage.getItem(HINT_COUNT_KEY) || '0', 10) || 0;
      saveHintCount(current + 1);
    }

    const raw = localStorage.getItem(HINT_COUNT_KEY);
    if (raw === null) {
      // First-time player bonus: 3 free starter hints
      saveHintCount(DEFAULT_FREE_HINTS);
      return DEFAULT_FREE_HINTS;
    }
    const parsed = parseInt(raw, 10);
    return isNaN(parsed) ? DEFAULT_FREE_HINTS : Math.max(0, parsed);
  } catch (e) {
    return DEFAULT_FREE_HINTS;
  }
}

export function saveHintCount(count) {
  try {
    localStorage.setItem(HINT_COUNT_KEY, String(Math.max(0, Number(count) || 0)));
  } catch (e) {}
}

export function consumeHint() {
  const current = loadHintCount();
  if (current > 0) {
    const next = current - 1;
    saveHintCount(next);
    if (next === 0) {
      startHintRechargeTimer();
    }
    return true;
  }
  return false;
}

export function addHints(amount = 1) {
  const current = loadHintCount();
  const next = current + Math.max(1, amount);
  saveHintCount(next);
  if (next > 0) {
    clearHintRechargeTimer();
  }
  return next;
}

const ACHIEVEMENTS_DATA_KEY = 'rotatle_unlocked_achievements';
const ACHIEVEMENT_STATS_KEY = 'rotatle_achievement_stats';

export function loadUnlockedAchievements() {
  try {
    const raw = localStorage.getItem(ACHIEVEMENTS_DATA_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch (e) {
    return {};
  }
}

export function saveUnlockedAchievements(data) {
  try {
    localStorage.setItem(ACHIEVEMENTS_DATA_KEY, JSON.stringify(data || {}));
  } catch (e) {}
}

export function loadAchievementStats() {
  try {
    const raw = localStorage.getItem(ACHIEVEMENT_STATS_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch (e) {
    return {};
  }
}

export function saveAchievementStats(stats) {
  try {
    localStorage.setItem(ACHIEVEMENT_STATS_KEY, JSON.stringify(stats || {}));
  } catch (e) {}
}

export function updateAchievementStat(key, value, mode = 'set') {
  try {
    const stats = loadAchievementStats();
    if (mode === 'increment') {
      stats[key] = (stats[key] || 0) + value;
    } else if (mode === 'max') {
      stats[key] = Math.max(stats[key] || 0, value);
    } else {
      stats[key] = value;
    }
    saveAchievementStats(stats);
    return stats[key];
  } catch (e) {
    return value;
  }
}

export function clearAllGameData() {
  try {
    localStorage.removeItem(BEST_STREAK_KEY);
    localStorage.removeItem(COMPLETED_LEVELS_KEY);
    localStorage.removeItem(UNLOCKED_LEVEL_KEY);
    localStorage.removeItem(TOTAL_WORDS_KEY);
    localStorage.removeItem(LEVEL_STARS_KEY);
    localStorage.removeItem(LEVEL_BEST_MOVES_KEY);
    localStorage.removeItem('rotatle_ads_removed');
    localStorage.removeItem(HINT_COUNT_KEY);
    localStorage.removeItem(HINT_RECHARGE_KEY);
    localStorage.removeItem('rotatle_daily_data');
    localStorage.removeItem('rotatle_endless_best');
    localStorage.removeItem(ACHIEVEMENTS_DATA_KEY);
    localStorage.removeItem(ACHIEVEMENT_STATS_KEY);
    // Also clean up any legacy tumbleword keys if present
    localStorage.removeItem('tumbleword_best_streak');
    localStorage.removeItem('tumbleword_completed_levels');
    localStorage.removeItem('tumbleword_unlocked_level');
    localStorage.removeItem('tumbleword_total_words');
    localStorage.removeItem('tumbleword_level_stars');
    localStorage.removeItem('tumbleword_level_best_moves');
    localStorage.removeItem('tumbleword_daily_data');
    localStorage.removeItem('tumbleword_endless_best');
  } catch (e) {}
}


