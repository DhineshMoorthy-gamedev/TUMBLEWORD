import { solveBFS } from '../simulation/solver.js';
import { findWin } from '../simulation/winCondition.js';

/**
 * Check if a cell is an obstacle wall
 * @param {Array<string>} walls
 * @param {number} x
 * @param {number} y
 * @returns {boolean}
 */
function isWallCell(walls, x, y) {
  return !!(walls && walls[y] && walls[y][x] === '#');
}

/**
 * Find open floor cells on the board to spawn new word tiles
 * @param {object} targetLevel
 * @param {number} count
 * @param {Array<object>} existingCards
 * @param {number} [n]
 * @param {Array<string>} [walls]
 * @param {() => number|null} [prng]
 * @param {number} [currentR=0]
 * @returns {Array<{x: number, y: number}>}
 */
export function findSpawnPositions(
  targetLevel,
  count,
  existingCards = [],
  n = 5,
  walls = null,
  prng = null,
  currentR = 0
) {
  const boardN = targetLevel.n || n || 5;
  const boardWalls = targetLevel.walls || walls || [];
  const occ = new Set(existingCards.map(c => `${c.x},${c.y}`));
  const positions = [];

  // 1. Try original level coordinates if free and within bounds (e.g. Campaign levels)
  if (targetLevel.cards && targetLevel.cards.length >= count) {
    for (const c of targetLevel.cards) {
      if (
        c.x < boardN &&
        c.y < boardN &&
        !isWallCell(boardWalls, c.x, c.y) &&
        !occ.has(`${c.x},${c.y}`)
      ) {
        positions.push({ x: c.x, y: c.y });
        occ.add(`${c.x},${c.y}`);
        if (positions.length === count) return positions;
      }
    }
  }

  // 2. Dynamic / Endless / Unspecified Spawn: Find all available open floor tiles
  const openCells = [];
  for (let y = 0; y < boardN; y++) {
    for (let x = 0; x < boardN; x++) {
      if (!isWallCell(boardWalls, x, y) && !occ.has(`${x},${y}`)) {
        openCells.push({ x, y });
      }
    }
  }

  if (openCells.length < count) {
    // If not enough open cells, return whatever open cells exist padded
    return openCells;
  }

  const rng = typeof prng === 'function' ? prng : Math.random;
  const word = targetLevel.word || '';
  let bestCandidate = null;

  // 3. Monte Carlo scattering search: verify non-instant-win and BFS solvability
  for (let attempt = 0; attempt < 25; attempt++) {
    // Fisher-Yates shuffle
    const shuffled = [...openCells];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(rng() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }

    const candidateSlots = shuffled.slice(0, count);
    const candidateLetters = [...word].map((ch, idx) => ({
      id: 99000 + idx,
      ch,
      x: candidateSlots[idx].x,
      y: candidateSlots[idx].y,
      completed: false,
      isCompletedWord: false
    }));

    const testCards = [...existingCards, ...candidateLetters];

    // Reject if word is already formed on spawn
    if (word && findWin(word, testCards)) {
      continue;
    }

    // Save as fallback candidate
    if (!bestCandidate) {
      bestCandidate = candidateSlots;
    }

    // Verify solvability with BFS
    if (word) {
      const sol = solveBFS(
        word,
        { r: currentR, cards: testCards, n: boardN, walls: boardWalls },
        12,
        boardN,
        boardWalls
      );
      if (sol && sol.length > 0) {
        return candidateSlots;
      }
    } else {
      return candidateSlots;
    }
  }

  return bestCandidate || openCells.slice(0, count);
}

/**
 * Create letter card objects for a target level word
 * @param {object} level
 * @param {Array<object>} existingCards
 * @param {() => number} nextIdFn
 * @param {boolean} isInitial
 * @param {number} [n]
 * @param {Array<string>} [walls]
 * @param {() => number|null} [prng]
 * @param {number} [currentR=0]
 * @returns {Array<object>}
 */
export function createWordCards(
  level,
  existingCards = [],
  nextIdFn,
  isInitial = false,
  n = 5,
  walls = null,
  prng = null,
  currentR = 0
) {
  const positions = findSpawnPositions(
    level,
    level.word.length,
    existingCards,
    n,
    walls,
    prng,
    currentR
  );

  return [...level.word].map((ch, idx) => ({
    id: nextIdFn(),
    ch,
    x: positions[idx] !== undefined ? positions[idx].x : 0,
    y: positions[idx] !== undefined ? positions[idx].y : 0,
    completed: false,
    isCompletedWord: false,
    isNew: !isInitial
  }));
}
