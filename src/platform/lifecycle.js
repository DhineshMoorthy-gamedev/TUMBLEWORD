import { TargetConfig } from '../config/targetConfig.js';

export function setupLifecycle(callbacks = {}) {
  if (typeof window === 'undefined') return;

  // 1. Service Worker registration for PWA offline play
  if (TargetConfig.features.serviceWorker && 'serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker
        .register('./sw.js')
        .then(reg => {
          console.log('[PWA] Service Worker registered:', reg.scope);
        })
        .catch(err => {
          console.warn('[PWA] Service Worker registration failed:', err);
        });
    });
  }

  // 2. Visibility change auto-save and playback pause
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
      if (callbacks.onAppBackground) callbacks.onAppBackground();
    } else {
      if (callbacks.onAppForeground) callbacks.onAppForeground();
    }
  });
}
