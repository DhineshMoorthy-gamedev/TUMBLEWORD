import { TargetConfig } from '../config/targetConfig.js';

export class NativeBridge {
  /**
   * @param {object} actions - Callbacks for back button actions
   */
  constructor(actions = {}) {
    this.actions = actions;
    this._initNativePlugins();
    this._bindBackButton();
  }

  async _initNativePlugins() {
    if (typeof window === 'undefined') return;

    // Check if running inside native Capacitor
    if (window.Capacitor && window.Capacitor.isNativePlatform && window.Capacitor.isNativePlatform()) {
      try {
        const StatusBar = window.Capacitor.Plugins?.StatusBar;
        if (StatusBar) {
          await StatusBar.setStyle({ style: 'DARK' });
          await StatusBar.setBackgroundColor({ color: '#0F161C' });
        }
      } catch (e) {
        // Optional in web environments
      }
    }
  }

  async _bindBackButton() {
    if (typeof window === 'undefined') return;

    if (window.Capacitor && window.Capacitor.isNativePlatform && window.Capacitor.isNativePlatform()) {
      try {
        const App = window.Capacitor.Plugins?.App;
        if (App) {
          App.addListener('backButton', () => {
            this.handleHardwareBack();
          });
        }
      } catch (e) {}
    }
  }

  /**
   * 4-Tier Hardware Back Button hierarchy
   */
  async handleHardwareBack() {
    // Tier 1: Close Victory Modal if visible
    if (this.actions.isVictoryOpen && this.actions.isVictoryOpen()) {
      this.actions.closeVictory();
      return;
    }

    // Tier 2: Stop timeline solver playback if playing
    if (this.actions.isPlayingTimeline && this.actions.isPlayingTimeline()) {
      this.actions.pauseTimeline();
      return;
    }

    // Tier 3: Exit Editor Mode back to Play Mode
    if (this.actions.isEditorMode && this.actions.isEditorMode()) {
      this.actions.setPlayMode();
      return;
    }

    // Tier 4: Minimize Native Android App
    if (typeof window !== 'undefined' && window.Capacitor && window.Capacitor.isNativePlatform && window.Capacitor.isNativePlatform()) {
      try {
        const App = window.Capacitor.Plugins?.App;
        if (App && App.minimizeApp) App.minimizeApp();
      } catch (e) {}
    }
  }

  /**
   * Trigger tactile haptic feedback
   * @param {'light'|'medium'|'success'|'warning'} type
   */
  async triggerHaptic(type = 'light') {
    if (typeof window === 'undefined') return;

    // 1. Try native Capacitor Haptics if available
    if (window.Capacitor && window.Capacitor.isNativePlatform && window.Capacitor.isNativePlatform()) {
      try {
        const Haptics = window.Capacitor.Plugins?.Haptics;
        if (Haptics) {
          if (type === 'success') {
            await Haptics.notification({ type: 'SUCCESS' });
          } else if (type === 'warning') {
            await Haptics.notification({ type: 'WARNING' });
          } else {
            await Haptics.impact({ style: type === 'medium' ? 'MEDIUM' : 'LIGHT' });
          }
          return;
        }
      } catch (e) {}
    }

    // 2. Fallback to Web Vibration API on mobile browsers
    if (TargetConfig.features.webVibrate && navigator.vibrate) {
      try {
        if (type === 'success') {
          navigator.vibrate([25, 40, 35]);
        } else if (type === 'warning') {
          navigator.vibrate([35, 30, 35]);
        } else {
          navigator.vibrate(12);
        }
      } catch (e) {}
    }
  }
}
