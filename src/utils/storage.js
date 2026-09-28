const BEST_STREAK_KEY = 'tumbleword_best_streak';
const COMPLETED_LEVELS_KEY = 'tumbleword_completed_levels';
const UNLOCKED_LEVEL_KEY = 'tumbleword_unlocked_level';
const TOTAL_WORDS_KEY = 'tumbleword_total_words';
const SOUND_MUTED_KEY = 'tumbleword_sound_muted';
const VIBRATE_KEY = 'tumbleword_vibrate_enabled';

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
    localStorage.removeItem('tumbleword_daily_data');
  } catch (e) {}
}

