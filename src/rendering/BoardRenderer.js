import { isCompleted } from '../simulation/winCondition.js';

export class BoardRenderer {
  /**
   * @param {HTMLElement} boardEl
   * @param {HTMLElement} gridEl
   * @param {HTMLElement} cardsEl
   */
  constructor(boardEl, gridEl, cardsEl) {
    this.boardEl = boardEl;
    this.gridEl = gridEl;
    this.cardsEl = cardsEl;
    this.cardEls = new Map();
    this.n = 5;
    this.walls = [];
  }

  /**
   * Initialize grid DOM with dynamic dimension N and wall layout
   * @param {number} [n]
   * @param {Array<string>} [walls]
   */
  initGrid(n = 5, walls = []) {
    this.n = n;
    this.walls = walls && walls.length ? walls : Array(n).fill('.'.repeat(n));

    this.boardEl.style.setProperty('--n', this.n);
    this.boardEl.style.transition = 'none';
    this.boardEl.style.transform = 'rotate(0deg)';
    void this.boardEl.offsetWidth;
    this.boardEl.style.transition = '';

    this.gridEl.innerHTML = '';
    for (let y = 0; y < this.n; y++) {
      for (let x = 0; x < this.n; x++) {
        const isWall = this.walls[y] && this.walls[y][x] === '#';
        const d = document.createElement('div');
        d.className = `cell${isWall ? '' : ' floor'}`;
        this.gridEl.appendChild(d);
      }
    }
  }

  /**
   * Update the inner face element of a card
   * @param {HTMLElement} face
   * @param {object} c
   */
  updateFaceDOM(face, c) {
    face.setAttribute('data-len', String(c.ch.length));

    if (isCompleted(c)) {
      face.classList.add('completed');
      face.innerHTML = '';

      const txt = document.createElement('span');
      txt.className = 'label';
      txt.textContent = c.ch;
      face.appendChild(txt);

      if (c.lifespan !== undefined && c.lifespan > 0) {
        const badge = document.createElement('span');
        badge.className = `badge${c.lifespan === 1 ? ' expiring' : ''}`;
        badge.textContent = String(c.lifespan);
        face.appendChild(badge);
      }
    } else {
      face.classList.remove('completed');
      face.innerHTML = '';
      face.textContent = c.ch;
    }
  }

  /**
   * Rebuild DOM elements for all cards
   * @param {Array<object>} cards
   * @param {boolean} noAnim
   */
  rebuildCardDOM(cards, noAnim = false) {
    this.cardsEl.innerHTML = '';
    this.cardEls.clear();

    cards.forEach(c => {
      const el = document.createElement('div');
      el.className = `card${c.isNew ? ' spawned' : ''}`;
      if (noAnim) el.style.transition = 'none';

      const f = document.createElement('div');
      f.className = 'face';
      this.updateFaceDOM(f, c);
      el.appendChild(f);

      this.cardsEl.appendChild(el);
      this.cardEls.set(c.id, el);
      c.isNew = false;
    });
  }

  enableCardTransitions() {
    this.cardEls.forEach(el => {
      el.style.transition = '';
    });
  }

  /**
   * Render board angle and tile positions
   * @param {Array<object>} cards
   * @param {number} angle
   */
  render(cards, angle) {
    this.boardEl.style.transform = `rotate(${angle}deg)`;

    cards.forEach(c => {
      const el = this.cardEls.get(c.id);
      if (!el) return;

      el.style.left = `${(c.x * 100) / this.n}%`;
      el.style.top = `${(c.y * 100) / this.n}%`;

      const face = el.firstChild;
      if (face) {
        face.style.transform = `rotate(${-angle}deg)`;
        this.updateFaceDOM(face, c);
      }
    });
  }

  /**
   * Animate card merging transition
   * @param {number} absorbedId
   * @param {number} toX
   * @param {number} toY
   * @param {number} durationMs
   */
  animateCardMerge(absorbedId, toX, toY, durationMs) {
    const el = this.cardEls.get(absorbedId);
    if (!el) return;
    el.style.transition = `left ${durationMs}ms ease-in,top ${durationMs}ms ease-in,opacity ${durationMs}ms linear`;
    el.style.left = `${(toX * 100) / this.n}%`;
    el.style.top = `${(toY * 100) / this.n}%`;
    el.style.opacity = '0';
  }

  /**
   * Add dissolving animation class
   * @param {number} id
   */
  markDissolving(id) {
    const el = this.cardEls.get(id);
    if (el) el.classList.add('dissolving');
  }

  /**
   * Remove card from DOM map
   * @param {number} id
   */
  removeCard(id) {
    const el = this.cardEls.get(id);
    if (el) el.remove();
    this.cardEls.delete(id);
  }

  /**
   * Trigger pulse bonding animation on survivor card
   * @param {number} id
   */
  triggerBondingPulse(id) {
    const el = this.cardEls.get(id);
    if (el && el.firstChild) {
      el.firstChild.classList.add('bonding');
      setTimeout(() => {
        if (el.firstChild) el.firstChild.classList.remove('bonding');
      }, 380);
    }
  }
}
