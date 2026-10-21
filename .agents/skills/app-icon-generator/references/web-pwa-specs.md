# Web Favicon & PWA App Icon Reference

## Standards
- **favicon.ico**: Legacy & multi-resolution desktop browser icon. Standard sizes bundled: 16×16, 32×32, 48×48.
- **favicon-32x32.png**: Standard high-DPI browser tab icon.
- **favicon-192x192.png**: Standard Android Chrome homescreen shortcut icon.
- **app_icon_512.png**: PWA splash screen & Google Play Store high-resolution listing icon.

## HTML Link Configuration
```html
<link rel="icon" type="image/x-icon" href="/favicon.ico">
<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
<link rel="icon" type="image/png" sizes="512x512" href="/app_icon_512.png">
<link rel="apple-touch-icon" href="/app_icon_512.png">
```

## Web App Manifest Configuration (`manifest.json`)
```json
{
  "icons": [
    {
      "src": "favicon.ico",
      "sizes": "64x64 32x32 24x24 16x16",
      "type": "image/x-icon"
    },
    {
      "src": "favicon-192x192.png",
      "sizes": "192x192",
      "type": "image/png"
    },
    {
      "src": "app_icon_512.png",
      "sizes": "512x512",
      "type": "image/png",
      "purpose": "any maskable"
    }
  ]
}
```
