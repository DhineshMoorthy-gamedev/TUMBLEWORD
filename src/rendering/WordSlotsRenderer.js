export class WordSlotsRenderer {
  /**
   * @param {HTMLElement} wordEl
   */
  constructor(wordEl) {
    this.wordEl = wordEl;
  }

  /**
   * Render target word letter slots
   * @param {string} word
   * @param {boolean} isWon
   */
  renderSlots(word, isWon = false) {
    this.wordEl.innerHTML = '';
    [...word].forEach((ch, idx) => {
      const s = document.createElement('div');
      s.className = `slot${isWon ? ' won' : ' slot-reveal'}`;
      s.style.setProperty('--slot-idx', String(idx));
      s.textContent = ch;
      this.wordEl.appendChild(s);
    });
  }

  /**
   * Flash all word slots as won
   */
  markWon() {
    this.wordEl.querySelectorAll('.slot').forEach(s => s.classList.add('won'));
  }
}
