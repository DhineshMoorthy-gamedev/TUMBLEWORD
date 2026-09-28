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
  if (!word || !cards || cards.length === 0) return null;

  const active = cards.filter(c => !isCompleted(c) && c.ch);
  if (active.length === 0) return null;

  // 1. Full-merge win (e.g. single tile that bonded into the whole word)
  const full = active.find(c => c.ch === word);
  if (full) return [full.id];

  // 2. Spatial win (adjacent tiles aligned in reading order in any 4 directions)
  const at = new Map(active.map(c => [`${c.x},${c.y}`, c]));
  for (const [dx, dy] of DIRS) {
    for (const start of active) {
      if (!word.startsWith(start.ch)) continue;

      const ids = [start.id];
      let formed = start.ch;
      let cx = start.x + dx;
      let cy = start.y + dy;

      while (formed.length < word.length) {
        const nextCard = at.get(`${cx},${cy}`);
        if (!nextCard) break;

        const nextFormed = formed + nextCard.ch;
        if (!word.startsWith(nextFormed)) break;

        ids.push(nextCard.id);
        formed = nextFormed;
        cx += dx;
        cy += dy;
      }

      if (formed === word) {
        return ids;
      }
    }
  }

  return null;
}
