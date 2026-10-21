#!/usr/bin/env python3
"""
App Icon Generator & Android Mipmap Pipeline
Reusable CLI tool to convert a master 512x512 app icon into:
1. Android adaptive foreground, background XML, legacy & round mipmaps (mdpi to xxxhdpi)
2. Web / PWA favicons (ico, 32x32, 192x192, 512x512)
3. Updates to HTML and Web Manifest
"""

import os
import sys
import argparse
import json
import re
from PIL import Image, ImageDraw

ANDROID_DENSITIES = {
    'mdpi': {'legacy': 48, 'foreground': 108},
    'hdpi': {'legacy': 72, 'foreground': 162},
    'xhdpi': {'legacy': 96, 'foreground': 216},
    'xxhdpi': {'legacy': 144, 'foreground': 324},
    'xxxhdpi': {'legacy': 192, 'foreground': 432},
}

def detect_bg_color(img):
    """Detect dominant background color from image corners."""
    corners = [
        (0, 0),
        (img.width - 1, 0),
        (0, img.height - 1),
        (img.width - 1, img.height - 1)
    ]
    rgb_img = img.convert('RGB')
    pixels = [rgb_img.getpixel(pt) for pt in corners]
    avg_r = int(sum(p[0] for p in pixels) / len(pixels))
    avg_g = int(sum(p[1] for p in pixels) / len(pixels))
    avg_b = int(sum(p[2] for p in pixels) / len(pixels))
    return f"#{avg_r:02X}{avg_g:02X}{avg_b:02X}"

def create_circular_icon(src_img, size):
    """Create a circular-masked icon of the specified size."""
    resample_filter = getattr(Image, 'Resampling', Image).LANCZOS
    resized = src_img.resize((size, size), resample_filter).convert('RGBA')
    
    # 4x supersampled mask for crisp anti-aliased circular edges
    mask_scale = 4
    mask_size = (size * mask_scale, size * mask_scale)
    mask = Image.new('L', mask_size, 0)
    draw = ImageDraw.Draw(mask)
    draw.ellipse((0, 0, mask_size[0] - 1, mask_size[1] - 1), fill=255)
    mask = mask.resize((size, size), resample_filter)
    
    output = Image.new('RGBA', (size, size), (0, 0, 0, 0))
    output.paste(resized, (0, 0))
    output.putalpha(mask)
    return output

def create_adaptive_foreground(src_img, fg_size, safe_scale=0.70):
    """
    Create an Android adaptive icon foreground.
    The Android adaptive icon canvas is 108dp, with a 72dp safe circular mask.
    We center the artwork within the safe scale area.
    """
    resample_filter = getattr(Image, 'Resampling', Image).LANCZOS
    fg = Image.new('RGBA', (fg_size, fg_size), (0, 0, 0, 0))
    
    content_size = int(fg_size * safe_scale)
    resized_content = src_img.resize((content_size, content_size), resample_filter)
    
    offset_x = (fg_size - content_size) // 2
    offset_y = (fg_size - content_size) // 2
    
    fg.paste(resized_content, (offset_x, offset_y))
    return fg

def generate_android_icons(master_img, android_res_dir, bg_color):
    """Generate all Android mipmap densities and ic_launcher_background.xml."""
    resample_filter = getattr(Image, 'Resampling', Image).LANCZOS
    
    # 1. Write ic_launcher_background.xml
    values_dir = os.path.join(android_res_dir, 'values')
    os.makedirs(values_dir, exist_ok=True)
    bg_xml_path = os.path.join(values_dir, 'ic_launcher_background.xml')
    bg_xml_content = f'''<?xml version="1.0" encoding="utf-8"?>
<resources>
    <color name="ic_launcher_background">{bg_color}</color>
</resources>
'''
    with open(bg_xml_path, 'w', encoding='utf-8') as f:
        f.write(bg_xml_content)
    print(f"[Android] Generated background color XML ({bg_color}): {bg_xml_path}")
    
    # 2. Generate Mipmaps for each density
    for density, specs in ANDROID_DENSITIES.items():
        density_dir = os.path.join(android_res_dir, f'mipmap-{density}')
        os.makedirs(density_dir, exist_ok=True)
        
        legacy_size = specs['legacy']
        fg_size = specs['foreground']
        
        # Legacy square icon
        legacy_icon = master_img.resize((legacy_size, legacy_size), resample_filter)
        legacy_path = os.path.join(density_dir, 'ic_launcher.png')
        legacy_icon.save(legacy_path, 'PNG')
        
        # Legacy round icon
        round_icon = create_circular_icon(master_img, legacy_size)
        round_path = os.path.join(density_dir, 'ic_launcher_round.png')
        round_icon.save(round_path, 'PNG')
        
        # Adaptive foreground
        fg_icon = create_adaptive_foreground(master_img, fg_size, safe_scale=0.70)
        fg_path = os.path.join(density_dir, 'ic_launcher_foreground.png')
        fg_icon.save(fg_path, 'PNG')
        
        print(f"[Android] Generated mipmap-{density}: legacy {legacy_size}px, fg {fg_size}px")

def generate_web_icons(master_img, web_dir):
    """Generate favicons and PWA icons in web public directory."""
    os.makedirs(web_dir, exist_ok=True)
    resample_filter = getattr(Image, 'Resampling', Image).LANCZOS
    
    # Favicon 32x32
    fav32 = master_img.resize((32, 32), resample_filter)
    fav32_path = os.path.join(web_dir, 'favicon-32x32.png')
    fav32.save(fav32_path, 'PNG')
    
    # Favicon 192x192
    fav192 = master_img.resize((192, 192), resample_filter)
    fav192_path = os.path.join(web_dir, 'favicon-192x192.png')
    fav192.save(fav192_path, 'PNG')
    
    # Multi-size favicon.ico (16, 32, 48)
    ico_path = os.path.join(web_dir, 'favicon.ico')
    fav16 = master_img.resize((16, 16), resample_filter)
    fav48 = master_img.resize((48, 48), resample_filter)
    fav48.save(ico_path, format='ICO', sizes=[(16, 16), (32, 32), (48, 48)])
    
    # Master 512x512
    icon512_path = os.path.join(web_dir, 'app_icon_512.png')
    master_img.resize((512, 512), resample_filter).save(icon512_path, 'PNG')
    
    print(f"[Web] Generated web icons in {web_dir}: favicon.ico, 32px, 192px, 512px")

def update_manifest(manifest_path):
    """Update or inject standard icons in manifest.json."""
    if not os.path.exists(manifest_path):
        return
    try:
        with open(manifest_path, 'r', encoding='utf-8') as f:
            data = json.load(f)
    except Exception as e:
        print(f"[Manifest] Warning: Failed to parse {manifest_path}: {e}")
        return
    
    data['icons'] = [
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
    with open(manifest_path, 'w', encoding='utf-8') as f:
        json.dump(data, f, indent=2)
    print(f"[Manifest] Updated icon definitions in {manifest_path}")

def update_html(html_path):
    """Ensure favicon and apple-touch-icon links are present in index.html head."""
    if not os.path.exists(html_path):
        return
    with open(html_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    head_match = re.search(r'<head\b[^>]*>', content, re.IGNORECASE)
    if not head_match:
        return
    
    # Tags to inject
    icon_tags = '''  <link rel="icon" type="image/x-icon" href="/favicon.ico">
  <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
  <link rel="icon" type="image/png" sizes="512x512" href="/app_icon_512.png">
  <link rel="apple-touch-icon" href="/app_icon_512.png">'''

    # If favicon link doesn't already exist, add right after <head>
    if '<link rel="icon"' not in content:
        insert_pos = head_match.end()
        new_content = content[:insert_pos] + '\n' + icon_tags + content[insert_pos:]
        with open(html_path, 'w', encoding='utf-8') as f:
            f.write(new_content)
        print(f"[HTML] Injected favicon & apple-touch-icon links into {html_path}")
    else:
        print(f"[HTML] Favicon links already present in {html_path}")

def main():
    parser = argparse.ArgumentParser(description="App Icon Generator & Android Mipmap Pipeline")
    parser.add_argument('--icon', required=True, help="Path to master 512x512 app icon PNG")
    parser.add_argument('--android-res', help="Path to android/app/src/main/res directory")
    parser.add_argument('--web-dir', help="Path to web public directory")
    parser.add_argument('--html', help="Path to index.html to update favicon links")
    parser.add_argument('--manifest', help="Path to manifest.json to update icons")
    parser.add_argument('--bg-color', help="Custom background color (e.g. #030408); auto-detected if omitted")
    
    args = parser.parse_args()
    
    if not os.path.exists(args.icon):
        print(f"Error: Master icon not found at {args.icon}")
        sys.exit(1)
        
    master_img = Image.open(args.icon).convert('RGBA')
    bg_color = args.bg_color or detect_bg_color(master_img)
    print(f"[Icon Engine] Loaded master icon: {args.icon} ({master_img.size[0]}x{master_img.size[1]})")
    print(f"[Icon Engine] Detected background tone: {bg_color}")
    
    if args.android_res:
        generate_android_icons(master_img, args.android_res, bg_color)
        
    if args.web_dir:
        generate_web_icons(master_img, args.web_dir)
        
    if args.manifest:
        update_manifest(args.manifest)
        
    if args.html:
        update_html(args.html)
        
    print("[Icon Engine] All icon operations completed successfully!")

if __name__ == '__main__':
    main()
