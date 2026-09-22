import { PLAYBACK_STEP_MS } from '../config/constants.js';

export class TimelineController {
  /**
   * @param {object} elements
   * @param {object} callbacks
   */
  constructor(elements, callbacks) {
    this.el = elements;
    this.callbacks = callbacks;

    this.fullTimeline = [];
    this.totalMoves = 0;
    this.currentStep = 0;
    this.isPlaying = false;
    this.timer = null;

    this._bindEvents();
  }

  _bindEvents() {
    this.el.slider.addEventListener('input', e => {
      this.pause();
      this.callbacks.onGoToStep(parseInt(e.target.value, 10), false);
    });

    this.el.slider.addEventListener('change', e => {
      this.pause();
      this.callbacks.onGoToStep(parseInt(e.target.value, 10), true);
    });

    this.el.startBtn.onclick = () => {
      this.pause();
      this.callbacks.onGoToStep(0, false);
    };

    this.el.prevBtn.onclick = () => {
      this.pause();
      this.callbacks.onGoToStep(this.currentStep - 1, true);
    };

    this.el.playBtn.onclick = () => {
      this.togglePlay();
    };

    this.el.nextBtn.onclick = () => {
      this.pause();
      this.callbacks.onGoToStep(this.currentStep + 1, true);
    };

    this.el.endBtn.onclick = () => {
      this.pause();
      this.callbacks.onGoToStep(this.fullTimeline.length - 1, false);
    };
  }

  /**
   * Load timeline data and configure slider bounds
   * @param {Array<object>} timeline
   * @param {number} totalMoves
   */
  loadTimeline(timeline, totalMoves) {
    this.pause();
    this.fullTimeline = timeline;
    this.totalMoves = totalMoves;
    this.currentStep = 0;

    this.el.slider.min = '0';
    this.el.slider.max = String(totalMoves);
    this.el.slider.value = '0';
    this.el.totalMoves.textContent = String(totalMoves);

    this.updateControls();
  }

  /**
   * Update slider position and step labels
   * @param {number} stepIdx
   */
  setStep(stepIdx) {
    this.currentStep = Math.max(
      0,
      Math.min(stepIdx, this.fullTimeline.length - 1)
    );
    const snap = this.fullTimeline[this.currentStep];
    if (!snap) return;

    this.el.slider.value = String(snap.move);
    this.el.currentMoves.textContent = String(snap.move);
    this.el.totalMoves.textContent = String(this.totalMoves);
    this.el.wordInfo.textContent = `Word ${snap.wordIdx + 1}/12: ${snap.word}`;
    this.el.stepInfo.textContent = `Move ${snap.move} / ${this.totalMoves}`;

    this.updateControls();
  }

  updateControls() {
    const isAtStart = this.currentStep === 0;
    const isAtEnd =
      this.fullTimeline.length === 0 ||
      this.currentStep === this.fullTimeline.length - 1;

    this.el.startBtn.disabled = isAtStart || this.isPlaying;
    this.el.prevBtn.disabled = isAtStart || this.isPlaying;
    this.el.nextBtn.disabled = isAtEnd || this.isPlaying;
    this.el.endBtn.disabled = isAtEnd || this.isPlaying;
  }

  pause() {
    if (this.isPlaying) {
      this.isPlaying = false;
      if (this.timer) {
        clearInterval(this.timer);
        this.timer = null;
      }
      this.el.playBtn.textContent = '▶ Play Solution';
      this.el.playBtn.classList.remove('playing');
      this.callbacks.onPlaybackStateChange(false);
      this.updateControls();
    }
  }

  play() {
    if (this.isPlaying) return;

    if (this.currentStep >= this.fullTimeline.length - 1) {
      this.callbacks.onGoToStep(0, false);
    }

    this.isPlaying = true;
    this.el.playBtn.textContent = '⏸ Pause';
    this.el.playBtn.classList.add('playing');
    this.callbacks.onPlaybackStateChange(true);
    this.updateControls();

    this.timer = setInterval(() => {
      if (this.currentStep >= this.fullTimeline.length - 1) {
        this.pause();
        return;
      }
      this.callbacks.onGoToStep(this.currentStep + 1, true);
    }, PLAYBACK_STEP_MS);
  }

  togglePlay() {
    if (this.isPlaying) {
      this.pause();
    } else {
      this.play();
    }
  }
}
