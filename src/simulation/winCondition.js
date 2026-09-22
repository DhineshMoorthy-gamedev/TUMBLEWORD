import { DIRS } from '../config/constants.js';

/**
 * Check if a card is a completed word obstacle
 * @param {object} c
 * @returns {boolean}
 */
export function isCompleted(c) {
  return !!(c && (c.completed || c.isCompletedWord));
}

/**
 * Check win condition against active cards only
 * @param {string} word
 * @param {Array<object>} cards
 * @returns {Array<number>|null} Array of winning card IDs, or null if no win
 */
export function findWin(word, cards) {
  const active = cards.filter(c => !isCompleted(c) && c.wi !== undefined);

  // 1. Full-merge win (e.g. single tile that bonded into the whole word)
  const full = active.find(c => c.ch === word);
  if (full) return [full.id];

  // 2. Spatial win (adjacent tiles aligned in reading order in any 4 directions)
  const at = new Map(active.map(c => [`${c.x},${c.y}`, c]));
  for (const [dx, dy] of DIRS) {
    for (const start of active) {
      if (start.wi !== 0) continue;
      const ids = [start.id];
      let x = start.x + dx;
      let y = start.y + dy;
      let exp = start.we + 1;

      while (exp < word.length) {
        const c = at.get(`${x},${y}`);
        if (!c || c.wi !== exp) break;
        ids.push(c.id);
        exp = c.we + 1;
        x += dx;
        y += dy;
      }

      if (exp === word.length) return ids;
    }
  }

  return null;
}
