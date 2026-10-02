/**
 * Maps active cards on the board to their matching character ranges in target word
 * @param {string} word
 * @param {Array<object>} cards
 * @returns {Array<{ch: string, start: number, end: number, isBonded: boolean}>}
 */
export function findTileRangesInWord(word, cards) {
  if (!word || !cards || cards.length === 0) return [];
  const activeTiles = cards
    .filter(c => !c.completed && !c.isCompletedWord && c.ch)
    .map(c => c.ch);

  if (activeTiles.length === 0) return [];

  // Recursive partition search
  function findPartition(idx, remainingTiles, currentRanges) {
    if (idx === word.length) {
      return remainingTiles.length === 0 ? currentRanges : null;
    }
    const tried = new Set();
    for (let i = 0; i < remainingTiles.length; i++) {
      const tile = remainingTiles[i];
      if (tried.has(tile)) continue;
      tried.add(tile);
      if (word.startsWith(tile, idx)) {
        const nextRemaining = remainingTiles.filter((_, k) => k !== i);
        const range = {
          ch: tile,
          start: idx,
          end: idx + tile.length,
          isBonded: tile.length >= 2
        };
        const result = findPartition(idx + tile.length, nextRemaining, [...currentRanges, range]);
        if (result !== null) {
          return result;
        }
      }
    }
    return null;
  }

  const ranges = findPartition(0, activeTiles, []);
  return ranges || [];
}

export class WordSlotsRenderer {
  /**
   * @param {HTMLElement} wordEl
   */
  constructor(wordEl) {
    this.wordEl = wordEl;
    this.currentWord = '';
  }

  /**
   * Render target word letter slots
   * @param {string} word
   * @param {boolean} isWon
   * @param {Array<object>} [cards]
   */
  renderSlots(word, isWon = false, cards = []) {
    this.currentWord = word;
    if (!this.wordEl) return;
    this.wordEl.innerHTML = '';
    [...word].forEach((ch, idx) => {
      const s = document.createElement('div');
      s.className = `slot${isWon ? ' won' : ' slot-reveal'}`;
      s.style.setProperty('--slot-idx', String(idx));
      s.textContent = ch;
      this.wordEl.appendChild(s);
    });

    if (cards && cards.length > 0 && !isWon) {
      this.updateBondedSlots(word, cards);
    }
  }

  /**
   * Update highlight status of slots based on merged multi-letter tiles
   * @param {string} word
   * @param {Array<object>} cards
   * @param {Array<string>} [newlyMergedChs]
   */
  updateBondedSlots(word, cards, newlyMergedChs = []) {
    if (!this.wordEl || !word) return;
    const ranges = findTileRangesInWord(word, cards);
    const slots = Array.from(this.wordEl.querySelectorAll('.slot'));
    if (slots.length === 0) return;

    let themeIdx = 0;
    const targetInfo = new Array(slots.length).fill(null);

    for (const r of ranges) {
      const len = r.end - r.start;
      const isNew = newlyMergedChs && newlyMergedChs.includes(r.ch);

      if (r.isBonded && len >= 2) {
        const themeClass = `chunk-theme-${themeIdx % 2}`;
        themeIdx++;

        for (let i = r.start; i < r.end; i++) {
          let posClass = 'chunk-mid';
          if (i === r.start) posClass = 'chunk-start';
          else if (i === r.end - 1) posClass = 'chunk-end';

          targetInfo[i] = {
            bonded: true,
            posClass,
            themeClass,
            isNew
          };
        }
      } else {
        for (let i = r.start; i < r.end; i++) {
          targetInfo[i] = {
            bonded: false,
            posClass: 'chunk-single',
            themeClass: null,
            isNew: false
          };
        }
      }
    }

    // Apply classes idempotently to prevent DOM jitter
    slots.forEach((slot, idx) => {
      if (slot.classList.contains('won')) return;

      const info = targetInfo[idx] || {
        bonded: false,
        posClass: 'chunk-single',
        themeClass: null,
        isNew: false
      };

      slot.classList.toggle('bonded', info.bonded);
      slot.classList.toggle('chunk-bonded', info.bonded);

      slot.classList.toggle('chunk-start', info.posClass === 'chunk-start');
      slot.classList.toggle('chunk-mid', info.posClass === 'chunk-mid');
      slot.classList.toggle('chunk-end', info.posClass === 'chunk-end');
      slot.classList.toggle('chunk-single', info.posClass === 'chunk-single');

      slot.classList.toggle('chunk-theme-0', info.themeClass === 'chunk-theme-0');
      slot.classList.toggle('chunk-theme-1', info.themeClass === 'chunk-theme-1');

      if (info.isNew) {
        slot.classList.remove('merge-pop');
        void slot.offsetWidth; // Force reflow only for newly merged pulse
        slot.classList.add('merge-pop');
      } else {
        slot.classList.remove('merge-pop');
      }
    });
  }

  /**
   * Flash all word slots as won
   */
  markWon() {
    if (!this.wordEl) return;
    const classesToRemove = [
      'bonded', 'chunk-bonded', 'chunk-start', 'chunk-mid', 'chunk-end',
      'chunk-single', 'chunk-theme-0', 'chunk-theme-1', 'merge-pop'
    ];
    this.wordEl.querySelectorAll('.slot').forEach(s => {
      s.classList.remove(...classesToRemove);
      s.classList.add('won');
    });
  }
}
