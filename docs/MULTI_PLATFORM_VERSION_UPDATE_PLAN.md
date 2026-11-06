# Multi-Platform Version Update Reference & Plan
**Current Version:** `0.0.17`  
**Current Android Version Code:** `17`  
**Current MSIX Windows Version:** `0.0.17.0`  
**Status:** **Updated & Verified across all platforms**  
**Date:** November 2026  
**Studio:** OLAI Digital Studios  

---

## 1. Overview & Alignment

To publish an updated build across all supported targets (**Android / Google Play**, **Web / PWA**, **Desktop / Itch.io**, and **Windows / Microsoft Store via Tauri**), the version metadata must be synchronized across platform-specific build descriptors, service workers, and in-game UI displays.

---

## 2. Master Reference of Files to Update

| # | Platform / Scope | File Path | Line(s) | Current Value (`0.0.16`) | Target Value (`0.0.17`) | Purpose / Impact |
|---|---|---|:---:|---|---|---|
| **1** | **Root Project** | [`package.json`](file:///E:/PROTO/TUMBLEWORD/package.json) | 4 | `"version": "0.0.16"` | `"version": "0.0.17"` | Global Node.js package version |
| **2** | **Root Lockfile** | [`package-lock.json`](file:///E:/PROTO/TUMBLEWORD/package-lock.json) | 3, 9 | `"version": "0.0.16"` | `"version": "0.0.17"` | Lockfile integrity synchronization |
| **3** | **Android App** | [`android/app/build.gradle`](file:///E:/PROTO/TUMBLEWORD/android/app/build.gradle) | 10 | `versionCode 16` | `versionCode 17` | Google Play required incremental release integer |
| **4** | **Android App** | [`android/app/build.gradle`](file:///E:/PROTO/TUMBLEWORD/android/app/build.gradle) | 11 | `versionName "0.0.16"` | `versionName "0.0.17"` | User-facing version string on Android |
| **5** | **Desktop (Tauri)** | [`src-tauri/tauri.conf.json`](file:///E:/PROTO/TUMBLEWORD/src-tauri/tauri.conf.json) | 4 | `"version": "0.0.16"` | `"version": "0.0.17"` | Tauri bundle & Windows MSIX version manifest |
| **6** | **Desktop (Rust)** | [`src-tauri/Cargo.toml`](file:///E:/PROTO/TUMBLEWORD/src-tauri/Cargo.toml) | 3 | `version = "0.0.16"` | `version = "0.0.17"` | Rust desktop application package version |
| **7** | **Web / PWA** | [`public/sw.js`](file:///E:/PROTO/TUMBLEWORD/public/sw.js) | 1 | `'rotatle-v0.0.16'` | `'rotatle-v0.0.17'` | **Critical:** Evicts outdated client cache on browsers |
| **8** | **In-Game Settings** | [`index.html`](file:///E:/PROTO/TUMBLEWORD/index.html) | 676 | `v0.0.16` | `v0.0.17` | Settings menu bottom branding footer |
| **9** | **In-Game About** | [`index.html`](file:///E:/PROTO/TUMBLEWORD/index.html) | 801 | `v0.0.16` | `v0.0.17` | About & Credits modal version pill badge |
| **10** | **App Update Toasts**| [`src/main.js`](file:///E:/PROTO/TUMBLEWORD/src/main.js) | 1187, 1191 | `(v0.0.16)` | `(v0.0.17)` | Feedback toast when user manually checks updates |
| **11** | **Documentation** | [`docs/Cross-Platform Implementation & Platform Readiness Report.md`](file:///E:/PROTO/TUMBLEWORD/docs/Cross-Platform%20Implementation%20&%20Platform%20Readiness%20Report.md) | 4, 43 | `0.0.16` (code 16) | `0.0.17` (code 17) | Project architecture & readiness documentation |

---

## 3. Pre-Flight Verification Required Before Building

1. **Syntax Cleanup in `src/main.js`:**
   - Resolve orphaned duplicate listener closure lines (lines 1611–1614) so `node -c src/main.js` passes with zero errors.
2. **AdMob ID Check (Android):**
   - For internal/testing builds: Keep `AdMobConfig.isTesting = true` and sample App ID in `AndroidManifest.xml`.
   - For production store release: Restore production App ID and unit IDs documented in `cmd.txt` (`ca-app-pub-4890313674539327~7104584458`).

---

## 4. Multi-Platform Build Commands Execution Order

Once the files are updated, the platform bundles can be generated using these standard scripts:

### A. Android (Google Play Release)
```bash
# 1. Build web distribution for Capacitor and sync Android workspace
npm run build:playstore

# 2. Build signed Android App Bundle (.aab) for Google Play Console
npm run build:aab
# Output: android/app/build/outputs/bundle/release/app-release.aab

# (Optional) Build debug APK for local device testing:
npm run build:apk
# Output: android/app/build/outputs/apk/debug/app-debug.apk
```

### B. Web / PWA (Netlify / Web Hosting)
```bash
# Build production web bundle with updated Service Worker cache
npm run build:web
# Output directory: dist/web/ (ready for Netlify deployment)
```

### C. Desktop (Itch.io HTML5)
```bash
# Build desktop HTML5 distribution
npm run build:itch
# Output directory: dist/itch/
```

### D. Desktop (Windows MSIX / Microsoft Store via Tauri)
```bash
# Build Windows .msixbundle container using updated version
npm run tauri:msix
# Output: src-tauri/target/msix/Rotatle_0.0.17.0.msixbundle
```
