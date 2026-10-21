# App Icon Generator

Reusable Antigravity skill for automated multi-platform app icon generation.

## Features
- Full Android Adaptive Icon suite (`mdpi`, `hdpi`, `xhdpi`, `xxhdpi`, `xxxhdpi`).
- Automatic background color extraction from corner pixels.
- Safe-zone scaling for Android launcher masks (circle, squircle, round-rect).
- Multi-resolution `favicon.ico` and PNG favicons for Web & PWA.
- Auto-updates `index.html` and `manifest.json`.

## Usage
```powershell
python scripts/generate_app_icons.py --icon <path-to-icon.png> --android-res <android-res-path> --web-dir <public-path> --html <html-path> --manifest <manifest-path>
```
