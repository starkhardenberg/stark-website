#!/usr/bin/env python3
"""Comprimeer zware site-afbeeldingen. Bronnen → public/images/_originals/."""

from __future__ import annotations

import shutil
from pathlib import Path

from PIL import Image

ROOT = Path(__file__).resolve().parents[1]
PUBLIC = ROOT / 'public'
ORIGINALS = PUBLIC / 'images' / '_originals'

# (pad t.o.v. public/, max lange zijde in px, jpeg quality)
TARGETS: list[tuple[str, int, int]] = [
    ('images/team/tineke.jpg', 900, 82),
    ('images/team/els.jpg', 900, 82),
    ('images/team/marinus-bw.jpg', 900, 82),
    ('images/foto-groep-les.jpg', 1600, 82),
    ('images/foto-coaching-moment.jpg', 1600, 82),
    ('images/foto-coaching-samen.jpg', 1600, 82),
    ('images/foto-vrouw-lachen.jpg', 1400, 82),
    ('images/foto-vrouw-55-lachen.jpg', 1400, 82),
]


def resize_keep_aspect(img: Image.Image, max_edge: int) -> Image.Image:
    w, h = img.size
    long_edge = max(w, h)
    if long_edge <= max_edge:
        return img
    scale = max_edge / long_edge
    new_size = (max(1, round(w * scale)), max(1, round(h * scale)))
    return img.resize(new_size, Image.Resampling.LANCZOS)


def compress_one(rel: str, max_edge: int, quality: int) -> tuple[int, int, str]:
    src = PUBLIC / rel
    if not src.exists():
        raise FileNotFoundError(src)

    backup = ORIGINALS / rel
    backup.parent.mkdir(parents=True, exist_ok=True)
    if not backup.exists():
        shutil.copy2(src, backup)

    before = src.stat().st_size
    img = Image.open(src)
    if img.mode not in ('RGB', 'L'):
        img = img.convert('RGB')

    img = resize_keep_aspect(img, max_edge)
    img.save(src, format='JPEG', quality=quality, optimize=True, progressive=True)
    after = src.stat().st_size
    return before, after, rel


def main() -> None:
    print('STARK! image compressie\n')
    total_before = 0
    total_after = 0

    for rel, max_edge, quality in TARGETS:
        before, after, path = compress_one(rel, max_edge, quality)
        total_before += before
        total_after += after
        pct = (1 - after / before) * 100 if before else 0
        print(
            f'{path}\n'
            f'  {before / 1024 / 1024:6.2f} MB → {after / 1024 / 1024:6.2f} MB  (-{pct:.0f}%)\n'
        )

    saved = total_before - total_after
    print(
        f'Totaal: {total_before / 1024 / 1024:.2f} MB → '
        f'{total_after / 1024 / 1024:.2f} MB  '
        f'(bespaard {saved / 1024 / 1024:.2f} MB)'
    )
    print(f'\nOriginelen: {ORIGINALS.relative_to(ROOT)}/')


if __name__ == '__main__':
    main()
