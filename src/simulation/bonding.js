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
      if (isCompleted(ci) || ci.wi === undefined) continue;

      for (const [dx, dy] of DIRS) {
        const j = at.get(`${ci.x + dx},${ci.y + dy}`);
        if (j === undefined) continue;

        const cj = cur[j];
        if (isCompleted(cj) || cj.wi === undefined) continue;

        let sIdx, aIdx, merged;
        if (ci.we + 1 === cj.wi) {
          // ci before cj -> ci survives
          sIdx = i;
          aIdx = j;
          merged = {
            ...ci,
            ch: word.slice(ci.wi, cj.we + 1),
            we: cj.we,
            completed: false,
            isCompletedWord: false
          };
        } else if (cj.we + 1 === ci.wi) {
          // cj before ci -> cj survives
          sIdx = j;
          aIdx = i;
          merged = {
            ...cj,
            ch: word.slice(cj.wi, ci.we + 1),
            we: ci.we,
            completed: false,
            isCompletedWord: false
          };
        } else {
          continue;
        }

        merges.push({
          survivorId: cur[sIdx].id,
          absorbedId: cur[aIdx].id,
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
