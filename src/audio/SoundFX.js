/**
 * Zero-dependency Web Audio API Sound Synthesizer
 * Provides crisp procedural sound effects without downloading any external audio files.
 */
class SoundFXManager {
  constructor() {
    this.ctx = null;
    this.muted = false;
    this._loadPreference();
  }

  _loadPreference() {
    try {
      const val = localStorage.getItem('rotatle_muted') ?? localStorage.getItem('tumbleword_muted');
      this.muted = val === 'true';
    } catch (e) {
      this.muted = false;
    }
  }

  _initContext() {
    if (!this.ctx && typeof window !== 'undefined') {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
      }
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  toggleMute() {
    this.muted = !this.muted;
    try {
      localStorage.setItem('rotatle_muted', String(this.muted));
    } catch (e) {}
    return this.muted;
  }

  isMuted() {
    return this.muted;
  }

  /**
   * Tactile click / turn sound on board rotation
   */
  playTurn() {
    if (this.muted) return;
    this._initContext();
    if (!this.ctx) return;

    try {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      const now = this.ctx.currentTime;

      osc.type = 'sine';
      osc.frequency.setValueAtTime(240, now);
      osc.frequency.exponentialRampToValueAtTime(80, now + 0.08);

      gain.gain.setValueAtTime(0.22, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.08);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(now);
      osc.stop(now + 0.08);
    } catch (e) {}
  }

  /**
   * Rising two-tone chime when active letters bond into compound words
   */
  playBond() {
    if (this.muted) return;
    this._initContext();
    if (!this.ctx) return;

    try {
      const now = this.ctx.currentTime;
      [440, 660].forEach((freq, idx) => {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        const start = now + idx * 0.06;

        osc.type = 'triangle';
        osc.frequency.setValueAtTime(freq, start);
        osc.frequency.exponentialRampToValueAtTime(freq * 1.15, start + 0.1);

        gain.gain.setValueAtTime(0.18, start);
        gain.gain.exponentialRampToValueAtTime(0.001, start + 0.1);

        osc.connect(gain);
        gain.connect(this.ctx.destination);

        osc.start(start);
        osc.stop(start + 0.1);
      });
    } catch (e) {}
  }

  /**
   * Soft pop / airy sweep when an expired obstacle word dissolves
   */
  playDissolve() {
    if (this.muted) return;
    this._initContext();
    if (!this.ctx) return;

    try {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      const now = this.ctx.currentTime;

      osc.type = 'sine';
      osc.frequency.setValueAtTime(320, now);
      osc.frequency.exponentialRampToValueAtTime(110, now + 0.14);

      gain.gain.setValueAtTime(0.12, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.14);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(now);
      osc.stop(now + 0.14);
    } catch (e) {}
  }

  /**
   * Resonant harmonic chord when a word is completed
   */
  playWordComplete() {
    if (this.muted) return;
    this._initContext();
    if (!this.ctx) return;

    try {
      const now = this.ctx.currentTime;
      const notes = [523.25, 659.25, 783.99]; // C5, E5, G5

      notes.forEach((freq, i) => {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        const start = now + i * 0.04;

        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, start);

        gain.gain.setValueAtTime(0.2, start);
        gain.gain.exponentialRampToValueAtTime(0.001, start + 0.28);

        osc.connect(gain);
        gain.connect(this.ctx.destination);

        osc.start(start);
        osc.stop(start + 0.28);
      });
    } catch (e) {}
  }

  /**
   * Warm, celebratory victory arpeggio on level completion
   */
  playVictory() {
    if (this.muted) return;
    this._initContext();
    if (!this.ctx) return;

    try {
      const now = this.ctx.currentTime;
      const notes = [440, 554.37, 659.25, 880, 1108.73]; // A4, C#5, E5, A5, C#6

      notes.forEach((freq, i) => {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        const start = now + i * 0.07;

        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, start);

        gain.gain.setValueAtTime(0.0001, start);
        gain.gain.linearRampToValueAtTime(0.16, start + 0.008);
        gain.gain.exponentialRampToValueAtTime(0.0001, start + 0.42);

        osc.connect(gain);
        gain.connect(this.ctx.destination);

        osc.start(start);
        osc.stop(start + 0.42);
      });
    } catch (e) {}
  }

  /**
   * Subtle UI button tap sound
   */
  playClick() {
    if (this.muted) return;
    this._initContext();
    if (!this.ctx) return;

    try {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      const now = this.ctx.currentTime;

      osc.type = 'sine';
      osc.frequency.setValueAtTime(500, now);
      osc.frequency.exponentialRampToValueAtTime(200, now + 0.03);

      gain.gain.setValueAtTime(0.1, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.03);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(now);
      osc.stop(now + 0.03);
    } catch (e) {}
  }

  /**
   * Bright, ascending two-step chime on level / daily challenge launch
   */
  playLevelStart() {
    if (this.muted) return;
    this._initContext();
    if (!this.ctx) return;

    try {
      const now = this.ctx.currentTime;
      const notes = [392, 587.33]; // G4 -> D5

      notes.forEach((freq, i) => {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        const start = now + i * 0.07;

        osc.type = 'triangle';
        osc.frequency.setValueAtTime(freq, start);

        gain.gain.setValueAtTime(0.16, start);
        gain.gain.exponentialRampToValueAtTime(0.001, start + 0.22);

        osc.connect(gain);
        gain.connect(this.ctx.destination);

        osc.start(start);
        osc.stop(start + 0.22);
      });
    } catch (e) {}
  }

  /**
   * Crystalline, musical star reveal chimes in the level victory modal (Star 1, 2, 3)
   * Harmonized in A-Major (E5 -> A5 -> C#6) with soft anti-click envelopes and warm resonance.
   * @param {number} starIndex - 1, 2, or 3
   */
  playStarDrop(starIndex = 1) {
    if (this.muted) return;
    this._initContext();
    if (!this.ctx) return;

    try {
      const now = this.ctx.currentTime;

      // Define musical layers per star tier:
      // Star 1: Warm celesta drop chime (E5 + soft octave E6)
      // Star 2: Bright uplifting bell chime (A5 + soft octave A6)
      // Star 3: Radiant golden mastery resolution (C#6 + harmony fifth G#6 + sparkle octave C#7)
      let layers = [];
      if (starIndex === 1) {
        layers = [
          { freq: 659.25, vol: 0.14, dur: 0.28 }, // E5 fundamental
          { freq: 1318.51, vol: 0.035, dur: 0.20 }, // E6 shimmer
        ];
      } else if (starIndex === 2) {
        layers = [
          { freq: 880.00, vol: 0.16, dur: 0.34 }, // A5 fundamental
          { freq: 1760.00, vol: 0.045, dur: 0.24 }, // A6 shimmer
        ];
      } else {
        layers = [
          { freq: 1108.73, vol: 0.18, dur: 0.52 }, // C#6 golden fundamental
          { freq: 1661.22, vol: 0.06, dur: 0.42 }, // G#6 harmonic fifth
          { freq: 2217.46, vol: 0.035, dur: 0.32 }, // C#7 sparkle overtone
        ];
      }

      layers.forEach(({ freq, vol, dur }) => {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();

        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, now);

        // Smooth anti-click attack ramp and natural exponential decay
        gain.gain.setValueAtTime(0.0001, now);
        gain.gain.linearRampToValueAtTime(vol, now + 0.006);
        gain.gain.exponentialRampToValueAtTime(0.0001, now + dur);

        osc.connect(gain);
        gain.connect(this.ctx.destination);

        osc.start(now);
        osc.stop(now + dur);
      });
    } catch (e) {}
  }

  /**
   * Subtle, gentle two-tone chime when an achievement is unlocked
   */
  playAchievement() {
    if (this.muted) return;
    this._initContext();
    if (!this.ctx) return;

    try {
      const now = this.ctx.currentTime;
      // Two warm, delicate sine tones (D5 -> A5) with gentle attack and soft decay
      const tones = [
        { freq: 587.33, start: now,         vol: 0.10, dur: 0.18 }, // D5
        { freq: 880.00, start: now + 0.075, vol: 0.12, dur: 0.32 }, // A5
      ];

      tones.forEach(({ freq, start, vol, dur }) => {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();

        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, start);

        // Smooth anti-click attack and gentle exponential decay
        gain.gain.setValueAtTime(0.0001, start);
        gain.gain.linearRampToValueAtTime(vol, start + 0.008);
        gain.gain.exponentialRampToValueAtTime(0.0001, start + dur);

        osc.connect(gain);
        gain.connect(this.ctx.destination);

        osc.start(start);
        osc.stop(start + dur);
      });
    } catch (e) {}
  }

  /**
   * Subtle crack / dim sound when a star tier is lost during moves
   */
  playStarCrack() {
    if (this.muted) return;
    this._initContext();
    if (!this.ctx) return;

    try {
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(300, now);
      osc.frequency.exponentialRampToValueAtTime(120, now + 0.1);

      gain.gain.setValueAtTime(0.12, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.1);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(now);
      osc.stop(now + 0.1);
    } catch (e) {}
  }

  /**
   * Low dramatic descending tone when move budget is exhausted
   */
  playOutOfMoves() {
    if (this.muted) return;
    this._initContext();
    if (!this.ctx) return;

    try {
      const now = this.ctx.currentTime;
      [220, 174.61, 130.81].forEach((freq, idx) => {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        const start = now + idx * 0.1;

        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, start);
        osc.frequency.exponentialRampToValueAtTime(freq * 0.85, start + 0.22);

        gain.gain.setValueAtTime(0.18, start);
        gain.gain.exponentialRampToValueAtTime(0.001, start + 0.22);

        osc.connect(gain);
        gain.connect(this.ctx.destination);

        osc.start(start);
        osc.stop(start + 0.22);
      });
    } catch (e) {}
  }
}

export const soundFX = new SoundFXManager();
