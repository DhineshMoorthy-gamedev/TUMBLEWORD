import { DIRS } from '../config/constants.js';
import { isCompleted } from './winCondition.js';

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

        let sIdx, aIdx, newCh;

        if (word.includes(combo1)) {
          sIdx = firstIdx;
          aIdx = secondIdx;
          newCh = combo1;
        } else if (word.includes(combo2)) {
          sIdx = secondIdx;
          aIdx = firstIdx;
          newCh = combo2;
        } else {
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
