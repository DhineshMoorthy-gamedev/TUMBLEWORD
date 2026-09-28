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
        const savedTheme = localStorage.getItem('tumbleword_theme') || 'obsidian';
        await this.syncThemeWithStatusBar(savedTheme);
      } catch (e) {
        // Optional in web environments
      }
    }
  }

  /**
   * Sync Capacitor Android status bar colors with active theme
   * @param {'obsidian'|'vellum'} theme
   */
  async syncThemeWithStatusBar(theme) {
    if (typeof window === 'undefined') return;
    if (window.Capacitor && window.Capacitor.isNativePlatform && window.Capacitor.isNativePlatform()) {
      try {
        const StatusBar = window.Capacitor.Plugins?.StatusBar;
        if (StatusBar) {
          const isVellum = theme === 'vellum';
          await StatusBar.setStyle({ style: isVellum ? 'LIGHT' : 'DARK' });
          await StatusBar.setBackgroundColor({ color: isVellum ? '#F7F5F0' : '#121316' });
        }
      } catch (e) {}
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
   * Hardware Back Button hierarchy
   */
  async handleHardwareBack() {
    // Tier 1: Close Settings Subview if open
    if (this.actions.isSettingsSubviewOpen && this.actions.isSettingsSubviewOpen()) {
      this.actions.closeSettingsSubview();
      return;
    }

    // Tier 2: Close Settings Fullscreen if open
    if (this.actions.isSettingsOpen && this.actions.isSettingsOpen()) {
      this.actions.closeSettings();
      return;
    }

    // Tier 3: Close standard Modal if open
    if (this.actions.isModalOpen && this.actions.isModalOpen()) {
      this.actions.closeModal();
      return;
    }

    // Tier 4: Close Victory Modal if visible
    if (this.actions.isVictoryOpen && this.actions.isVictoryOpen()) {
      this.actions.closeVictory();
      return;
    }

    // Tier 5: Stop timeline solver playback if playing
    if (this.actions.isPlayingTimeline && this.actions.isPlayingTimeline()) {
      this.actions.pauseTimeline();
      return;
    }

    // Tier 6: Return from Active Game back to Home Screen
    if (this.actions.isGameScreen && this.actions.isGameScreen()) {
      this.actions.goToHome();
      return;
    }

    // Tier 7: Exit Editor Mode back to Play Mode
    if (this.actions.isEditorMode && this.actions.isEditorMode()) {
      this.actions.setPlayMode();
      return;
    }

    // Tier 8: Minimize Native Android App
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
