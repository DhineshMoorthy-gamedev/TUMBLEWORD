# Android Adaptive Icons Specification Reference

## Overview
Starting in Android 8.0 (API level 26), adaptive launcher icons were introduced to ensure visual consistency across different OEM devices (Google Pixel, Samsung OneUI, Xiaomi MIUI, Motorola, etc.).

## Dimensions & Densities
Adaptive icons consist of two layers:
1. **Background layer**: Either a solid color drawable XML (`ic_launcher_background.xml`) or a bitmap drawable.
2. **Foreground layer**: A transparent PNG containing the app's glyph/logo (`ic_launcher_foreground.png`).

The full canvas size is **108dp × 108dp**:
- Inner **72dp** diameter circle is the guaranteed visible safe zone.
- Outer **18dp** on each side is reserved for visual effects (parallax, pulse) and varying mask shapes.

### Mipmap Density Table

| Density Qualifier | Scale Factor | Legacy Icon (`ic_launcher.png`) | Adaptive Foreground (`ic_launcher_foreground.png`) |
|---|---|---|---|
| `mipmap-mdpi` | 1.0× | 48 × 48 px | 108 × 108 px |
| `mipmap-hdpi` | 1.5× | 72 × 72 px | 162 × 162 px |
| `mipmap-xhdpi` | 2.0× | 96 × 96 px | 216 × 216 px |
| `mipmap-xxhdpi` | 3.0× | 144 × 144 px | 324 × 324 px |
| `mipmap-xxxhdpi` | 4.0× | 192 × 192 px | 432 × 432 px |

## Mask Shapes
Android system masks include:
- Circle
- Rounded Square (squircle)
- Teardrop
- Rounded Rectangle

Content placed within the center 70% of the 108dp canvas is guaranteed never to be clipped regardless of OEM launcher mask.
