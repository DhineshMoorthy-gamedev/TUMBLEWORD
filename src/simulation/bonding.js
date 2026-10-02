import { DIRS } from '../config/constants.js';
import { isCompleted } from './winCondition.js';

/**
 * Verify whether a collection of tile character strings can partition the target word.
 * Each tile must be used exactly once and placed in sequential order to form the target word.
 * @param {string} word
 * @param {Array<string>} tileStrings
 * @returns {boolean}
 */
export function canPartitionWord(word, tileStrings) {
  if (tileStrings.length === 0) return word.length === 0;

  let totalLen = 0;
  for (let i = 0; i < tileStrings.length; i++) {
    totalLen += tileStrings[i].length;
  }
  if (totalLen !== word.length) return false;

  function search(idx, remainingTiles) {
    if (idx === word.length) {
      return remainingTiles.length === 0;
    }
    const tried = new Set();
    for (let i = 0; i < remainingTiles.length; i++) {
      const tile = remainingTiles[i];
      if (tried.has(tile)) continue;
      tried.add(tile);
      if (word.startsWith(tile, idx)) {
        const nextRemaining = remainingTiles.filter((_, k) => k !== i);
        if (search(idx + tile.length, nextRemaining)) {
          return true;
        }
      }
    }
    return false;
  }

  return search(0, tileStrings);
}

/**
 * Merge adjacent active letters for the current target word
 * @param {string} word
 * @param {Array<object>} cards
 * @returns {{newCards: Array<object>, merges: Array<object>}}
 */
export function tryMerge(word, cards) {
  const merges = [];
  let cur = cards.map(c => ({ ...c }));
  let changed = true;

  while (changed) {
    changed = false;
    const at = new Map(cur.map((c, i) => [`${c.x},${c.y}`, i]));

    loop: for (let i = 0; i < cur.length; i++) {
      const ci = cur[i];
      if (isCompleted(ci) || !ci.ch) continue;

      for (const [dx, dy] of DIRS) {
        const j = at.get(`${ci.x + dx},${ci.y + dy}`);
        if (j === undefined) continue;

        const cj = cur[j];
        if (isCompleted(cj) || !cj.ch) continue;

        // Reading order: Left-to-Right (dx > 0) or Top-to-Bottom (dy > 0)
        const forwardOrder = (dx > 0 || dy > 0);
        const first = forwardOrder ? ci : cj;
        const second = forwardOrder ? cj : ci;
        const firstIdx = forwardOrder ? i : j;
        const secondIdx = forwardOrder ? j : i;

        const combo1 = first.ch + second.ch;
        const combo2 = second.ch + first.ch;

        let sIdx = -1;
        let aIdx = -1;
        let newCh = null;

        if (word.includes(combo1)) {
          const candidateStrings = cur
            .filter((c, idx) => !isCompleted(c) && c.ch && idx !== firstIdx && idx !== secondIdx)
            .map(c => c.ch)
            .concat(combo1);
          if (canPartitionWord(word, candidateStrings)) {
            sIdx = firstIdx;
            aIdx = secondIdx;
            newCh = combo1;
          }
        }

        if (newCh === null && word.includes(combo2)) {
          const candidateStrings = cur
            .filter((c, idx) => !isCompleted(c) && c.ch && idx !== secondIdx && idx !== firstIdx)
            .map(c => c.ch)
            .concat(combo2);
          if (canPartitionWord(word, candidateStrings)) {
            sIdx = secondIdx;
            aIdx = firstIdx;
            newCh = combo2;
          }
        }

        if (newCh === null) {
          continue;
        }

        const survivor = cur[sIdx];
        const absorbed = cur[aIdx];

        const merged = {
          ...survivor,
          ch: newCh,
          completed: false,
          isCompletedWord: false
        };

        merges.push({
          survivorId: survivor.id,
          absorbedId: absorbed.id,
          toX: merged.x,
          toY: merged.y,
          newCh: merged.ch
        });

        cur = cur.filter((_, k) => k !== sIdx && k !== aIdx);
        cur.push(merged);
        changed = true;
        break loop;
      }
    }
  }

  return { newCards: cur, merges };
}

