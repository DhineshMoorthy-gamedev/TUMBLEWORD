/**
 * Find open floor cells on the board to spawn new word tiles
 * @param {object} targetLevel
 * @param {number} count
 * @param {Array<object>} existingCards
 * @param {number} [n]
 * @param {Array<string>} [walls]
 * @returns {Array<{x: number, y: number}>}
 */
export function findSpawnPositions(targetLevel, count, existingCards, n = 5, walls = null) {
  const boardN = targetLevel.n || n || 5;
  const boardWalls = targetLevel.walls || walls || [];
  const occ = new Set(existingCards.map(c => `${c.x},${c.y}`));
  const positions = [];

  // 1. Try original level coordinates if free and within bounds
  if (targetLevel.cards) {
    for (const c of targetLevel.cards) {
      if (
        c.x < boardN &&
        c.y < boardN &&
        boardWalls[c.y] &&
        boardWalls[c.y][c.x] !== '#' &&
        !occ.has(`${c.x},${c.y}`)
      ) {
        positions.push({ x: c.x, y: c.y });
        occ.add(`${c.x},${c.y}`);
        if (positions.length === count) return positions;
      }
    }
  }

  // 2. Search for any open floor cells (top to bottom)
  for (let y = 0; y < boardN; y++) {
    for (let x = 0; x < boardN; x++) {
      if (boardWalls[y] && boardWalls[y][x] !== '#' && !occ.has(`${x},${y}`)) {
        positions.push({ x, y });
        occ.add(`${x},${y}`);
        if (positions.length === count) return positions;
      }
    }
  }

  return positions;
}

/**
 * Create letter card objects for a target level word
 * @param {object} level
 * @param {Array<object>} existingCards
 * @param {() => number} nextIdFn
 * @param {boolean} isInitial
 * @param {number} [n]
 * @param {Array<string>} [walls]
 * @returns {Array<object>}
 */
export function createWordCards(level, existingCards, nextIdFn, isInitial = false, n = 5, walls = null) {
  const positions = findSpawnPositions(level, level.word.length, existingCards, n, walls);
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
