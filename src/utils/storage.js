const BEST_STREAK_KEY = 'tumbleword_best_streak';
const COMPLETED_LEVELS_KEY = 'tumbleword_completed_levels';
const UNLOCKED_LEVEL_KEY = 'tumbleword_unlocked_level';
const TOTAL_WORDS_KEY = 'tumbleword_total_words';
const SOUND_MUTED_KEY = 'tumbleword_sound_muted';
const VIBRATE_KEY = 'tumbleword_vibrate_enabled';
const LEVEL_STARS_KEY = 'tumbleword_level_stars';
const LEVEL_BEST_MOVES_KEY = 'tumbleword_level_best_moves';

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

export function clearAllGameData() {
  try {
    localStorage.removeItem(BEST_STREAK_KEY);
    localStorage.removeItem(COMPLETED_LEVELS_KEY);
    localStorage.removeItem(UNLOCKED_LEVEL_KEY);
    localStorage.removeItem(TOTAL_WORDS_KEY);
    localStorage.removeItem(LEVEL_STARS_KEY);
    localStorage.removeItem(LEVEL_BEST_MOVES_KEY);
    localStorage.removeItem('tumbleword_daily_data');
  } catch (e) {}
}

