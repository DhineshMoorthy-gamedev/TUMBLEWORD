import { Capacitor } from '@capacitor/core';
import { App } from '@capacitor/app';
import { Haptics, ImpactStyle, NotificationType } from '@capacitor/haptics';
import { StatusBar, Style } from '@capacitor/status-bar';
import { InAppReview } from '@capacitor-community/in-app-review';
import { TargetConfig } from '../config/targetConfig.js';
import { loadVibrateEnabled } from '../utils/storage.js';

/**
 * Check if haptic vibration is supported on current platform/device
 * @returns {boolean}
 */
export function isHapticsSupported() {
  if (typeof window === 'undefined') return false;
  if (Capacitor.isNativePlatform()) return true;
  return typeof navigator !== 'undefined' && typeof navigator.vibrate === 'function';
}

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
    if (Capacitor.isNativePlatform()) {
      try {
        const savedTheme = localStorage.getItem('rotatle_theme') || localStorage.getItem('tumbleword_theme') || 'obsidian';
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
    if (Capacitor.isNativePlatform()) {
      try {
        const isVellum = theme === 'vellum';
        await StatusBar.setStyle({ style: isVellum ? Style.Light : Style.Dark });
        await StatusBar.setBackgroundColor({ color: isVellum ? '#F7F5F0' : '#121316' });
      } catch (e) {}
    }
  }

  async _bindBackButton() {
    if (typeof window === 'undefined') return;

    if (Capacitor.isNativePlatform()) {
      try {
        App.addListener('backButton', () => {
          this.handleHardwareBack();
        });
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
    if (Capacitor.isNativePlatform()) {
      try {
        await App.minimizeApp();
      } catch (e) {}
    }
  }

  /**
   * Trigger tactile haptic feedback
   * @param {'light'|'medium'|'heavy'|'success'|'warning'|'error'} type
   */
  async triggerHaptic(type = 'light') {
    if (typeof window === 'undefined') return;

    // Honor user vibration toggle setting
    if (!loadVibrateEnabled()) return;

    // 1. Try native Capacitor Haptics if available
    if (Capacitor.isNativePlatform()) {
      try {
        if (type === 'success') {
          await Haptics.notification({ type: NotificationType.Success });
        } else if (type === 'warning' || type === 'error') {
          await Haptics.notification({ type: NotificationType.Warning });
        } else if (type === 'heavy') {
          await Haptics.impact({ style: ImpactStyle.Heavy });
        } else if (type === 'medium') {
          await Haptics.impact({ style: ImpactStyle.Medium });
        } else {
          await Haptics.impact({ style: ImpactStyle.Light });
        }
        return;
      } catch (e) {
        // Fall back to Web Vibration if native call throws
      }
    }

    // 2. Fallback to Web Vibration API on mobile browsers
    if (TargetConfig.features.webVibrate && typeof navigator !== 'undefined' && navigator.vibrate) {
      try {
        if (type === 'success') {
          navigator.vibrate([25, 40, 35]);
        } else if (type === 'warning' || type === 'error') {
          navigator.vibrate([35, 30, 35]);
        } else if (type === 'heavy') {
          navigator.vibrate(30);
        } else if (type === 'medium') {
          navigator.vibrate(20);
        } else {
          navigator.vibrate(12);
        }
      } catch (e) {}
    }
  }

  /**
   * Request native Google Play In-App Review dialog
   * Directly triggers the official Google Play in-app rating flow.
   * Falls back gracefully to Play Store market URL on older devices/web.
   */
  async requestInAppReview() {
    if (Capacitor.isNativePlatform()) {
      try {
        await InAppReview.requestReview();
        return true;
      } catch (e) {
        console.warn('Native InAppReview failed, falling back to market URL:', e);
        try {
          window.location.href = 'market://details?id=com.olaidigitalstudios.rotatle';
          return true;
        } catch (err) {
          window.open('https://play.google.com/store/apps/details?id=com.olaidigitalstudios.rotatle', '_blank');
          return true;
        }
      }
    } else {
      window.open('https://play.google.com/store/apps/details?id=com.olaidigitalstudios.rotatle', '_blank');
      return true;
    }
  }
}
