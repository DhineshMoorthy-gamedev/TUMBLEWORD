import { BOARD_N, BOARD_WALLS, MAX_BFS_DEPTH } from '../config/constants.js';
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
 * @param {{r: number, cards: Array<object>}} state
 * @param {number} dir - Turn direction (-1: left, 1: right)
 * @returns {{r: number, cards: Array<object>, won: boolean}}
 */
export function simulateTurn(word, state, dir) {
  const nr = mod(state.r + dir, 4);
  const settled = settle(BOARD_N, BOARD_WALLS, state.cards, mod(2 - nr, 4));

  if (findWin(word, settled)) {
    return { r: nr, cards: settled, won: true };
  }

  const { newCards } = tryMerge(word, settled);
  if (findWin(word, newCards)) {
    return { r: nr, cards: newCards, won: true };
  }

  return { r: nr, cards: newCards, won: false };
}

/**
 * Breadth-First Search solver for the current word and obstacle board
 * @param {string} word
 * @param {{r: number, cards: Array<object>}} initialState
 * @param {number} maxDepth
 * @returns {Array<number>|null} Array of turn directions (-1 or 1), or null
 */
export function solveBFS(word, initialState, maxDepth = MAX_BFS_DEPTH) {
  if (!word || !initialState || !initialState.cards) return [];
  if (findWin(word, initialState.cards)) return [];

  const startState = {
    r: initialState.r,
    cards: initialState.cards.map(c => ({ ...c }))
  };
  const queue = [{ state: startState, path: [] }];
  const visited = new Set([getStateKey(startState)]);

  while (queue.length > 0) {
    const { state, path } = queue.shift();
    if (path.length >= maxDepth) continue;

    for (const dir of [-1, 1]) {
      const nextState = simulateTurn(word, state, dir);
      const nextPath = [...path, dir];

      if (nextState.won) {
        return nextPath;
      }

      const key = getStateKey(nextState);
      if (!visited.has(key)) {
        visited.add(key);
        queue.push({ state: nextState, path: nextPath });
      }
    }
  }

  return null;
}
