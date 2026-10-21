---
name: app-icon-generator
description: >-
  Use this skill when the user wants to generate, convert, or update app icons for Android
  (Capacitor, Cordova, React Native, or native Android) and Web/PWA from a master 512x512
  image. Automatically generates adaptive icons (foreground + background XML), legacy square
  and round mipmaps across all 5 densities (mdpi to xxxhdpi), multi-size favicon.ico, 32px,
  192px, 512px PWA assets, and updates index.html and manifest.json.
---

# App Icon Generator Skill

Generates production-ready Android launcher mipmaps, adaptive icons, and web/PWA favicons from a single master 512×512 PNG image.

## When to Use
- User provides an icon (e.g. `public/app_icon_512.png` or `assets/icon.png`) and wants it applied as the app icon.
- User wants Android adaptive icons generated so the icon doesn't get clipped on modern phones.
- User needs complete favicons, PWA icons, and manifest updates.

## Quick CLI Command
Run the Python script located in `scripts/generate_app_icons.py`:

```bash
python scripts/generate_app_icons.py \
  --icon <path-to-512x512.png> \
  --android-res <path-to-android/app/src/main/res> \
  --web-dir <path-to-public-or-web-dir> \
  --html <path-to-index.html> \
  --manifest <path-to-manifest.json>
```

### Optional Parameters
- `--bg-color "#RRGGBB"`: Override the adaptive icon background color. If omitted, the script automatically samples the corner pixels of the master icon.

## What It Produces
1. **Android Mipmaps (`res/mipmap-*/`)**:
   - `ic_launcher.png`: Legacy square icon (48, 72, 96, 144, 192 px)
   - `ic_launcher_round.png`: Anti-aliased circular icon (48, 72, 96, 144, 192 px)
   - `ic_launcher_foreground.png`: Adaptive foreground scaled to the 72dp safe area on a 108dp canvas (108, 162, 216, 324, 432 px)
   - `res/values/ic_launcher_background.xml`: Extracted background color
2. **Web & PWA Icons**:
   - `favicon.ico`: Multi-size (16, 32, 48 px)
   - `favicon-32x32.png`
   - `favicon-192x192.png`
   - `app_icon_512.png`
3. **HTML & Manifest Updates**:
   - Updates `<link rel="icon">` and `<link rel="apple-touch-icon">` in `index.html`
   - Updates the `"icons"` array in `manifest.json` with `"purpose": "any maskable"`
