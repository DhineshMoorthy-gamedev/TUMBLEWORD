/**
 * Platform target detection and feature gating
 */
export const APP_TARGET = typeof __APP_TARGET__ !== 'undefined' ? __APP_TARGET__ : 'web';

export const TargetConfig = {
  target: APP_TARGET,
  isPlaystore: APP_TARGET === 'playstore',
  isWeb: APP_TARGET === 'web' || APP_TARGET === 'development',
  isItch: APP_TARGET === 'itch',
  isEditor: APP_TARGET === 'editor',

  features: {
    // Auto-solver and editor suite strictly gated to editor target
    enableAutoSolver: APP_TARGET === 'editor',
    showEditorToggle: APP_TARGET === 'editor',
    autoOpenEditor: APP_TARGET === 'editor',

    // Campaign level cards drawer strictly gated to editor target
    showCampaignLevelCards: APP_TARGET === 'editor',

    // Fullscreen control button on desktop/itch & web builds
    enableFullscreenAPI: APP_TARGET === 'itch' || APP_TARGET === 'web',

    // Key legend on desktop/itch builds
    showDesktopKeyLegend: APP_TARGET === 'itch',

    // Native haptic feedback
    nativeHaptics: APP_TARGET === 'playstore',

    // Web vibration fallback
    webVibrate: APP_TARGET === 'web' || APP_TARGET === 'playstore',

    // Service worker registration
    serviceWorker: APP_TARGET === 'web',

    // Hardware back button hierarchy
    hardwareBackButton: APP_TARGET === 'playstore'
  }
};
