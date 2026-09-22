import { BOARD_N, BOARD_WALLS } from '../config/constants.js';

/**
 * Find open floor cells on the board to spawn new word tiles
 * @param {object} targetLevel
 * @param {number} count
 * @param {Array<object>} existingCards
 * @returns {Array<{x: number, y: number}>}
 */
export function findSpawnPositions(targetLevel, count, existingCards) {
  const occ = new Set(existingCards.map(c => `${c.x},${c.y}`));
  const positions = [];

  // 1. Try original level coordinates if free
  for (const c of targetLevel.cards) {
    if (
      c.x < BOARD_N &&
      c.y < BOARD_N &&
      BOARD_WALLS[c.y][c.x] !== '#' &&
      !occ.has(`${c.x},${c.y}`)
    ) {
      positions.push({ x: c.x, y: c.y });
      occ.add(`${c.x},${c.y}`);
      if (positions.length === count) return positions;
    }
  }

  // 2. Search for any open floor cells (top to bottom)
  for (let y = 0; y < BOARD_N; y++) {
    for (let x = 0; x < BOARD_N; x++) {
      if (BOARD_WALLS[y][x] !== '#' && !occ.has(`${x},${y}`)) {
        positions.push({ x, y });
        occ.add(`${x},${y}`);
        if (positions.length === count) return positions;
      }
    }
  }

  return positions;
}

/**
 * Create letter card objects for a target level
 * @param {object} level
 * @param {Array<object>} existingCards
 * @param {() => number} nextIdFn
 * @param {boolean} isInitial
 * @returns {Array<object>}
 */
export function createWordCards(level, existingCards, nextIdFn, isInitial = false) {
  const positions = findSpawnPositions(level, level.word.length, existingCards);
  return [...level.word].map((ch, idx) => ({
    id: nextIdFn(),
    ch,
    x: positions[idx] ? positions[idx].x : 0,
    y: positions[idx] ? positions[idx].y : 0,
    wi: idx,
    we: idx,
    completed: false,
    isCompletedWord: false,
    isNew: !isInitial
  }));
}
