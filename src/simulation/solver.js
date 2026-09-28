import { MAX_BFS_DEPTH } from '../config/constants.js';
import { mod } from '../utils/math.js';
import { settle } from './physics.js';
import { tryMerge } from './bonding.js';
import { findWin, isCompleted } from './winCondition.js';

/**
 * Generate a unique hash key for a state
 * @param {{r: number, cards: Array<object>}} state
 * @returns {string}
 */
export function getStateKey(state) {
  const cardStr = state.cards
    .map(c => `${c.ch}:${c.x},${c.y}${isCompleted(c) ? ':c' : ''}`)
    .sort()
    .join(';');
  return `${state.r}|${cardStr}`;
}

/**
 * Simulate 1 turn in a given direction
 * @param {string} word
 * @param {{r: number, cards: Array<object>, n?: number, walls?: Array<string>}} state
 * @param {number} dir - Turn direction (-1: left, 1: right)
 * @param {number} [n]
 * @param {Array<string>} [walls]
 * @returns {{r: number, cards: Array<object>, won: boolean}}
 */
export function simulateTurn(word, state, dir, n = 5, walls = null) {
  const boardN = state.n || n || 5;
  const boardWalls = state.walls || walls || [];
  const nr = mod(state.r + dir, 4);
  const gravity = mod(2 - nr, 4);

  let currentCards = settle(boardN, boardWalls, state.cards, gravity);

  while (true) {
    if (findWin(word, currentCards)) {
      return { r: nr, cards: currentCards, won: true };
    }

    const { newCards, merges } = tryMerge(word, currentCards);
    if (merges.length === 0) {
      break;
    }

    currentCards = newCards;
    if (findWin(word, currentCards)) {
      return { r: nr, cards: currentCards, won: true };
    }

    // Cascade gravity: drop any tiles resting on absorbed cards
    const cascaded = settle(boardN, boardWalls, currentCards, gravity);
    const didMove = cascaded.some(c => {
      const prev = currentCards.find(p => p.id === c.id);
      return prev && (prev.x !== c.x || prev.y !== c.y);
    });

    currentCards = cascaded;
    if (!didMove) {
      break;
    }
  }

  return { r: nr, cards: currentCards, won: findWin(word, currentCards) !== null };
}

/**
 * Breadth-First Search solver for the current word and obstacle board
 * @param {string} word
 * @param {{r: number, cards: Array<object>, n?: number, walls?: Array<string>}} initialState
 * @param {number} [maxDepth]
 * @param {number} [n]
 * @param {Array<string>} [walls]
 * @returns {Array<number>|null} Array of turn directions (-1 or 1), or null
 */
export function solveBFS(word, initialState, maxDepth = MAX_BFS_DEPTH, n = 5, walls = null) {
  if (!word || !initialState || !initialState.cards) return [];
  if (findWin(word, initialState.cards)) return [];

  const boardN = initialState.n || n || 5;
  const boardWalls = initialState.walls || walls || [];

  const startState = {
    r: initialState.r,
    cards: initialState.cards.map(c => ({ ...c })),
    n: boardN,
    walls: boardWalls
  };
  const queue = [{ state: startState, path: [] }];
  const visited = new Set([getStateKey(startState)]);

  while (queue.length > 0) {
    const { state, path } = queue.shift();
    if (path.length >= maxDepth) continue;

    for (const dir of [-1, 1]) {
      const nextState = simulateTurn(word, state, dir, boardN, boardWalls);
      const nextPath = [...path, dir];

      if (nextState.won) {
        return nextPath;
      }

      const key = getStateKey(nextState);
      if (!visited.has(key)) {
        visited.add(key);
        queue.push({
          state: {
            r: nextState.r,
            cards: nextState.cards,
            n: boardN,
            walls: boardWalls
          },
          path: nextPath
        });
      }
    }
  }

  return null;
}
