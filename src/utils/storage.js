import { BEST_STREAK_KEY } from '../config/constants.js';

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
  } catch (e) {
    // Storage access may be restricted in sandboxes
  }
}
