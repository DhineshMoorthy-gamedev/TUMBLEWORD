# Tauri Icon Assets

Place the following icon files here before running `npm run tauri:build`:

- `32x32.png`
- `128x128.png`
- `128x128@2x.png`
- `icon.icns`   (macOS — optional)
- `icon.ico`    (Windows)

## Quick Generation from the Existing App Icon

Run the following from the workspace root (requires `tauri-cli`):

```bash
npx @tauri-apps/cli icon public/app_icon_512.png
```

This auto-generates all required sizes and places them in `src-tauri/icons/`.
