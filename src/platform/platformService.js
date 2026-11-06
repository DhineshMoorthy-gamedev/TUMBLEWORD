/**
 * PlatformService — Runtime capability seam for Rotatle
 *
 * Detects whether the game is running on:
 *   - 'android'  → Capacitor native (Google Play / AdMob / IAP active)
 *   - 'desktop'  → Tauri v2 wrapper (itch.io / MS Store, ad-free)
 *   - 'web'      → Browser / Netlify (ad-free, PWA)
 *
 * Import this FIRST in main.js before any manager initialisation so
 * every downstream module sees a fully resolved capability object.
 */

import { Capacitor } from '@capacitor/core';
import { TargetConfig } from '../config/targetConfig.js';

function detectPlatform() {
  // 1. Explicit URL parameter override for browser development / testing (e.g. ?platform=android or ?platform=desktop)
  if (typeof window !== 'undefined') {
    try {
      const params = new URLSearchParams(window.location.search);
      const requested = params.get('platform');
      if (requested === 'android' || requested === 'desktop' || requested === 'web') {
        return requested;
      }
    } catch {
      // Ignore URL parsing errors
    }
  }

  // 2. Build target mode check (when running or building with mode 'playstore')
  if (TargetConfig.isPlaystore) return 'android';

  // 3. Tauri v2 injects __TAURI_INTERNALS__ (v2) or __TAURI__ (v1 compat shim)
  const isTauri =
    typeof window !== 'undefined' &&
    (typeof window.__TAURI__ !== 'undefined' ||
      typeof window.__TAURI_INTERNALS__ !== 'undefined');

  // 4. Capacitor native platform check (playstore build running on device)
  const isCapacitorNative = Capacitor.isNativePlatform();

  if (isCapacitorNative) return 'android';
  if (isTauri || TargetConfig.isItch) return 'desktop';
  return 'web';
}

const _platform = detectPlatform();

export const PlatformService = {
  // ── Identity ───────────────────────────────────────────────────────────────
  platform:  _platform,
  isAndroid: _platform === 'android',
  isDesktop: _platform === 'desktop',
  isWeb:     _platform === 'web',

  // ── Feature flags ──────────────────────────────────────────────────────────
  /** AdMob banner / interstitial / rewarded available */
  hasAds:               _platform === 'android',
  /** Google Play Billing IAP available */
  hasIAP:               _platform === 'android',
  /** Capacitor LocalNotifications available */
  hasLocalNotifications: _platform === 'android',
  /** Google Play in-app review dialog available */
  hasInAppReview:       _platform === 'android',
  /** Capawesome in-app update flow available */
  hasInAppUpdate:       _platform === 'android',
  /** Android hardware back-button listener active */
  hasHardwareBack:      _platform === 'android',
  /** Tauri %APPDATA% save mirroring available */
  hasDesktopStorage:    _platform === 'desktop',
  /** Standalone (ad-free) mode — web + desktop */
  isStandalone:         _platform !== 'android',

  // ── Target feature gating flags ────────────────────────────────────────────
  /** Haptic vibration feedback (settings toggle + device vibration) */
  hasHaptics:           _platform === 'android',
  /** Local push notification alarms for daily challenges */
  hasDailyReminders:    _platform === 'android',
  /** In-app rating / review dialog or store link */
  hasRateApp:           _platform === 'android',
  /** In-app updates check */
  hasCheckForUpdates:   _platform === 'android',
  /** More Games by OLAI link (Desktop and Android only; hidden on Web) */
  hasMoreGames:         _platform === 'android' || _platform === 'desktop',

  /**
   * Open an external URL or mailto link using the platform's default browser or handler.
   * On desktop (Tauri), uses the shell plugin via the `open_external_url` command.
   * On web and Android, falls back to window.open / mailto.
   * @param {string} url - Target URL or scheme (e.g. https://... or mailto:...)
   */
  async openExternalUrl(url) {
    if (!url) return;
    if (_platform === 'desktop') {
      try {
        const invoke =
          window.__TAURI__?.core?.invoke ||
          window.__TAURI__?.tauri?.invoke ||
          window.__TAURI_INTERNALS__?.invoke;
        if (invoke) {
          await invoke('open_external_url', { url });
          return;
        }
      } catch (err) {
        console.warn('[PlatformService] Tauri open_external_url failed, falling back:', err);
      }
    }
    if (url.startsWith('mailto:')) {
      window.location.href = url;
    } else {
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  },

  // ── Desktop save backup (Tauri v2 invoke) ─────────────────────────────────
  /**
   * Mirror all rotatle_* localStorage keys to %APPDATA%/Rotatle/save.json
   * via the Tauri `backup_save_data` command.  No-ops on non-desktop.
   * @param {string} dataJson - JSON string of the snapshot object
   */
  async saveDesktopBackup(dataJson) {
    if (_platform !== 'desktop') return;
    try {
      const invoke =
        window.__TAURI__?.core?.invoke ||
        window.__TAURI__?.tauri?.invoke ||
        window.__TAURI_INTERNALS__?.invoke;
      if (invoke) {
        await invoke('backup_save_data', { payload: dataJson });
      }
    } catch (err) {
      console.warn('[PlatformService] Desktop save backup failed:', err);
    }
  },
};

console.log('[PlatformService] platform =', _platform, {
  hasAds:             PlatformService.hasAds,
  hasIAP:             PlatformService.hasIAP,
  isStandalone:       PlatformService.isStandalone,
  hasDesktopStorage:  PlatformService.hasDesktopStorage,
  hasHaptics:         PlatformService.hasHaptics,
  hasDailyReminders:  PlatformService.hasDailyReminders,
  hasRateApp:         PlatformService.hasRateApp,
  hasCheckForUpdates: PlatformService.hasCheckForUpdates,
  hasMoreGames:       PlatformService.hasMoreGames,
});
