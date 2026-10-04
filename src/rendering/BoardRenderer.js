import { isCompleted } from '../simulation/winCondition.js';

export class BoardRenderer {
  /**
   * @param {HTMLElement} boardEl
   * @param {HTMLElement} gridEl
   * @param {HTMLElement} cardsEl
   */
  constructor(boardEl, gridEl, cardsEl) {
    this.boardEl = boardEl;
    this.stageEl = boardEl ? boardEl.parentElement : null;
    this.gridEl = gridEl;
    this.cardsEl = cardsEl;
    this.cardEls = new Map();
    this.n = 5;
    this.walls = [];
    this.currentAngle = 0;
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
    this.boardEl.style.setProperty('--board-rot', '0deg');
    void this.boardEl.offsetWidth;
    this.boardEl.style.transition = '';

    // Trigger stage spring entrance without touching board rotation transform
    if (this.stageEl) {
      this.stageEl.classList.remove('stage-enter');
      void this.stageEl.offsetWidth;
      this.stageEl.classList.add('stage-enter');
      setTimeout(() => {
        if (this.stageEl) this.stageEl.classList.remove('stage-enter');
      }, 500);
    }

    this.gridEl.innerHTML = '';
    let wallCount = 0;
    for (let y = 0; y < this.n; y++) {
      for (let x = 0; x < this.n; x++) {
        const isWall = this.walls[y] && this.walls[y][x] === '#';
        const d = document.createElement('div');
        if (isWall) {
          d.className = 'cell wall wall-pop';
          d.style.setProperty('--wall-idx', String(wallCount++));
        } else {
          d.className = 'cell floor';
        }
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
   * @param {boolean} isInitial
   */
  rebuildCardDOM(cards, noAnim = false, isInitial = false) {
    this.cardsEl.innerHTML = '';
    this.cardEls.clear();

    cards.forEach((c, idx) => {
      const el = document.createElement('div');
      const isIntro = isInitial && !isCompleted(c);
      el.className = `card${c.isNew ? ' spawned' : ''}${isIntro ? ' spawn-intro' : ''}`;
      if (isIntro) {
        el.style.setProperty('--card-idx', String(idx));
      }
      if (noAnim && !isIntro) el.style.transition = 'none';

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
      el.classList.remove('spawn-intro');
      el.style.transition = '';
    });
  }

  /**
   * Render board angle and tile positions
   * @param {Array<object>} cards
   * @param {number} angle
   */
  render(cards, angle) {
    this.currentAngle = angle;
    this.boardEl.style.transform = `rotate(${angle}deg)`;
    this.boardEl.style.setProperty('--board-rot', `${angle}deg`);

    cards.forEach(c => {
      const el = this.cardEls.get(c.id);
      if (!el) return;

      el.style.left = `${(c.x * 100) / this.n}%`;
      el.style.top = `${(c.y * 100) / this.n}%`;

      const face = el.firstChild;
      if (face) {
        face.style.transform = `rotate(${-angle}deg)`;
        face.style.setProperty('--rot', `${-angle}deg`);
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
    el.style.transition = `left ${durationMs}ms cubic-bezier(0.2, 0.8, 0.4, 1), top ${durationMs}ms cubic-bezier(0.2, 0.8, 0.4, 1), opacity ${durationMs}ms ease-out, transform ${durationMs}ms ease-out`;
    el.style.left = `${(toX * 100) / this.n}%`;
    el.style.top = `${(toY * 100) / this.n}%`;
    el.style.opacity = '0';
    el.style.transform = 'scale(0.85)';
  }

  /**
   * Add dissolving animation class and particle burst
   * @param {number} id
   * @param {number} [delayMs=0]
   */
  markDissolving(id, delayMs = 0) {
    const el = this.cardEls.get(id);
    if (el) {
      setTimeout(() => {
        el.classList.add('dissolving');
        this.spawnDissolveBurst(el, 8);
      }, delayMs);
    }
  }

  /**
   * Spawn particle burst when an obstacle card dissolves
   * @param {HTMLElement} targetEl
   * @param {number} [count=8]
   */
  spawnDissolveBurst(targetEl, count = 8) {
    if (!targetEl) return;

    for (let i = 0; i < count; i++) {
      const sp = document.createElement('div');
      sp.className = 'dissolve-particle';
      sp.style.left = '50%';
      sp.style.top = '50%';

      const angle = (Math.PI * 2 * i) / count + (Math.random() - 0.5) * 0.6;
      const dist = 14 + Math.random() * 22;
      sp.style.setProperty('--dx', `${Math.cos(angle) * dist}px`);
      sp.style.setProperty('--dy', `${Math.sin(angle) * dist - 10}px`);

      targetEl.appendChild(sp);
      setTimeout(() => sp.remove(), 650);
    }
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
   * Trigger pulse bonding animation and sparkles on survivor card
   * @param {number} id
   */
  triggerBondingPulse(id) {
    const el = this.cardEls.get(id);
    if (el && el.firstChild) {
      const face = el.firstChild;
      face.classList.remove('bonding');
      void face.offsetWidth;
      face.classList.add('bonding');
      this.spawnSparkleBurst(el);
      setTimeout(() => {
        if (face) face.classList.remove('bonding');
      }, 400);
    }
  }

  /**
   * Trigger word complete celebratory animation, shake, and sparkles
   * @param {number} id
   */
  triggerWordCompleteJuice(id) {
    const el = this.cardEls.get(id);
    if (el && el.firstChild) {
      const face = el.firstChild;
      face.classList.add('word-complete-pulse');
      this.spawnSparkleBurst(el, 8);
      setTimeout(() => {
        if (face) face.classList.remove('word-complete-pulse');
      }, 480);
    }

    this.boardEl.classList.add('impact-shake');
    setTimeout(() => {
      this.boardEl.classList.remove('impact-shake');
    }, 240);
  }

  /**
   * Spawn colorful particle sparkles around an element
   * @param {HTMLElement} targetEl
   * @param {number} count
   */
  spawnSparkleBurst(targetEl, count = 5) {
    if (!targetEl) return;

    for (let i = 0; i < count; i++) {
      const sp = document.createElement('div');
      sp.className = 'merge-sparkle';
      sp.style.left = '50%';
      sp.style.top = '50%';

      const angle = (Math.PI * 2 * i) / count + (Math.random() - 0.5) * 0.5;
      const dist = 18 + Math.random() * 18;
      sp.style.setProperty('--dx', `${Math.cos(angle) * dist}px`);
      sp.style.setProperty('--dy', `${Math.sin(angle) * dist}px`);

      targetEl.appendChild(sp);
      setTimeout(() => sp.remove(), 420);
    }
  }
}
