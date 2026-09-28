/**
 * Theme Manager for Tumbleword
 * Supports Obsidian (Dark Mode) and Vellum (Light Cotton Mode)
 * Based on Grid Leap Design System
 */

const THEME_KEY = 'tumbleword_theme';

export function getSavedTheme() {
  try {
    const saved = localStorage.getItem(THEME_KEY);
    if (saved === 'vellum' || saved === 'obsidian') return saved;
  } catch (e) {}
  return 'obsidian'; // Default to Obsidian Dark
}

let _transitionTimer = null;

function _syncMetaAndPlatform(targetTheme, nativeBridge) {
  // Sync meta theme-color tag for mobile browsers and Android nav/status bars
  const metaTheme = document.querySelector('meta[name="theme-color"]');
  if (metaTheme) {
    metaTheme.setAttribute('content', targetTheme === 'vellum' ? '#F7F5F0' : '#121316');
  }

  try {
    localStorage.setItem(THEME_KEY, targetTheme);
  } catch (e) {}

  if (nativeBridge && nativeBridge.syncThemeWithStatusBar) {
    nativeBridge.syncThemeWithStatusBar(targetTheme);
  }

  // Dispatch event for UI components to react if needed
  window.dispatchEvent(new CustomEvent('tumbleword:themechange', { detail: { theme: targetTheme } }));
}

export function applyTheme(theme, nativeBridge = null, animate = true) {
  const root = document.documentElement;
  const targetTheme = theme === 'vellum' ? 'vellum' : 'obsidian';
  const currentTheme = root.getAttribute('data-theme') || 'obsidian';

  // Always save immediately to localStorage and sync status bar
  try {
    localStorage.setItem(THEME_KEY, targetTheme);
  } catch (e) {}

  if (!animate || currentTheme === targetTheme) {
    root.setAttribute('data-theme', targetTheme);
    _syncMetaAndPlatform(targetTheme, nativeBridge);
    return targetTheme;
  }

  // 1. High-Performance CSS Transition Coordinator
  if (_transitionTimer) clearTimeout(_transitionTimer);
  root.classList.add('theme-transitioning');
  root.setAttribute('data-theme', targetTheme);
  _syncMetaAndPlatform(targetTheme, nativeBridge);

  _transitionTimer = setTimeout(() => {
    root.classList.remove('theme-transitioning');
    _transitionTimer = null;
  }, 350);

  return targetTheme;
}

export function toggleTheme(nativeBridge = null) {
  const current = getSavedTheme();
  const next = current === 'vellum' ? 'obsidian' : 'vellum';
  return applyTheme(next, nativeBridge, true);
}

export function initTheme(nativeBridge = null) {
  return applyTheme(getSavedTheme(), nativeBridge, false);
}
