"""Crop Power to Choose Courtyard quote panels from PDFs."""

from __future__ import annotations

import json
from pathlib import Path

import fitz
import numpy as np
from PIL import Image

ROOT = Path(__file__).resolve().parents[1]
IMAGES = ROOT / "public" / "images" / "courtyard-quotes"
IMAGES.mkdir(parents=True, exist_ok=True)

SCALE = 3
WHITE_THRESHOLD = 252
WHITE_EDGE_RATIO = 0.985


def render_page(pdf_path: Path, page_index: int) -> Image.Image:
    doc = fitz.open(pdf_path)
    page = doc[page_index]
    pix = page.get_pixmap(matrix=fitz.Matrix(SCALE, SCALE), alpha=False)
    img = Image.frombytes("RGB", (pix.width, pix.height), pix.samples)
    doc.close()
    return img


def content_mask(arr: np.ndarray, threshold: int = WHITE_THRESHOLD) -> np.ndarray:
    return (
        (arr[:, :, 0] < threshold)
        | (arr[:, :, 1] < threshold)
        | (arr[:, :, 2] < threshold)
    )


def line_white_ratio(line: np.ndarray, threshold: int = WHITE_THRESHOLD) -> float:
    pixels = line.reshape(-1, 3)
    return float((pixels.min(axis=1) >= threshold).mean())


def flood_trim_white(img: Image.Image, threshold: int = WHITE_THRESHOLD) -> Image.Image:
    """Remove white margins connected to the image edges."""
    from collections import deque

    arr = np.array(img)
    h, w = arr.shape[:2]
    bg = np.zeros((h, w), dtype=bool)
    queue: deque[tuple[int, int]] = deque()

    for x in range(w):
        queue.append((0, x))
        queue.append((h - 1, x))
    for y in range(h):
        queue.append((y, 0))
        queue.append((y, w - 1))

    while queue:
        y, x = queue.popleft()
        if y < 0 or y >= h or x < 0 or x >= w or bg[y, x]:
            continue
        r, g, b = (int(v) for v in arr[y, x])
        if r < threshold or g < threshold or b < threshold:
            continue
        bg[y, x] = True
        queue.extend(((y - 1, x), (y + 1, x), (y, x - 1), (y, x + 1)))

    mask = ~bg
    if not mask.any():
        return img

    ys, xs = np.where(mask)
    return img.crop((int(xs.min()), int(ys.min()), int(xs.max()) + 1, int(ys.max()) + 1))


def trim_pure_white_edges(img: Image.Image) -> Image.Image:
    """Remove only edge rows/columns that are nearly all white."""
    arr = np.array(img)

    for _ in range(400):
        h, w = arr.shape[:2]
        if h < 6 or w < 6:
            break

        top = line_white_ratio(arr[0:1]) >= WHITE_EDGE_RATIO
        bottom = line_white_ratio(arr[-1:]) >= WHITE_EDGE_RATIO
        left = line_white_ratio(arr[:, 0:1]) >= WHITE_EDGE_RATIO
        right = line_white_ratio(arr[:, -1:]) >= WHITE_EDGE_RATIO

        if not any((top, bottom, left, right)):
            break

        y0, x0, y1, x1 = 0, 0, h, w
        if top:
            y0 += 1
        if bottom:
            y1 -= 1
        if left:
            x0 += 1
        if right:
            x1 -= 1
        arr = arr[y0:y1, x0:x1]

    return Image.fromarray(arr)


def orient_horizontal(img: Image.Image) -> Image.Image:
    """Rotate portrait PDF strips to landscape (consistent 90° CCW for this set)."""
    if img.width >= img.height * 0.95:
        return img
    return img.rotate(90, expand=True)


def finalize_crop(img: Image.Image, *, rotate: bool = True, gentle: bool = False) -> Image.Image:
    oriented = orient_horizontal(img) if rotate else img
    if gentle:
        return flood_trim_white(oriented)
    trimmed = trim_pure_white_edges(oriented)
    return flood_trim_white(trimmed)


def column_activity(arr: np.ndarray) -> np.ndarray:
    return content_mask(arr).sum(axis=0)


def find_gaps(activity: np.ndarray, min_gap: int) -> list[tuple[int, int]]:
    gaps: list[tuple[int, int]] = []
    in_gap = False
    gap_start = 0
    low = max(4, int(activity.max() * 0.01))

    for x, value in enumerate(activity):
        if value <= low:
            if not in_gap:
                gap_start = x
                in_gap = True
        elif in_gap:
            if x - gap_start >= min_gap:
                gaps.append((gap_start, x))
            in_gap = False

    if in_gap and len(activity) - gap_start >= min_gap:
        gaps.append((gap_start, len(activity)))

    return gaps


def strip_bounds(activity: np.ndarray, count: int) -> list[tuple[int, int]]:
    w = len(activity)
    min_gap = 30 if count >= 4 else 80
    gaps = find_gaps(activity, min_gap)
    internal = [(start, end) for start, end in gaps if start > 10 and end < w - 10]
    internal.sort(key=lambda gap: gap[1] - gap[0], reverse=True)

    if len(internal) >= count - 1:
        split_points = sorted((start + end) // 2 for start, end in internal[: count - 1])
        bounds = [0, *split_points, w]
        return [(bounds[i], bounds[i + 1]) for i in range(count)]

    strip_w = w // count
    return [(i * strip_w, w if i == count - 1 else (i + 1) * strip_w) for i in range(count)]


def split_vertical_strips(img: Image.Image, count: int) -> list[Image.Image]:
    arr = np.array(img)
    h = arr.shape[0]
    activity = column_activity(arr)
    bounds = strip_bounds(activity, count)
    return [img.crop((left, 0, right, h)) for left, right in bounds]


def panel_split_bounds(img: Image.Image) -> tuple[int, int]:
    """Return y range of the white gap between stacked intro panels."""
    arr = np.array(img)
    h, w = arr.shape[:2]
    x0, x1 = int(w * 0.15), int(w * 0.85)

    row_has_content: list[bool] = []
    for y in range(h):
        row = arr[y, x0:x1]
        yellow = ((row[:, 0] > 200) & (row[:, 1] > 200) & (row[:, 2] < 180)).mean()
        dark = ((row[:, 0] < 80) & (row[:, 1] < 80) & (row[:, 2] < 80)).mean()
        orange = (
            (row[:, 0] > 200) & (row[:, 1] > 100) & (row[:, 1] < 200) & (row[:, 2] < 100)
        ).mean()
        row_has_content.append(float(yellow + dark + orange) > 0.08)

    gaps: list[tuple[int, int]] = []
    in_gap = False
    gap_start = 0
    for y, has_content in enumerate(row_has_content):
        if not has_content:
            if not in_gap:
                gap_start = y
                in_gap = True
        elif in_gap:
            if y - gap_start >= 3:
                gaps.append((gap_start, y))
            in_gap = False

    internal = [gap for gap in gaps if h * 0.2 < (gap[0] + gap[1]) // 2 < h * 0.8]
    internal.sort(key=lambda gap: gap[1] - gap[0], reverse=True)

    if internal:
        return internal[0]

    mid = h // 2
    return mid - 6, mid + 6


def save_crop(img: Image.Image, name: str, *, rotate: bool = True, gentle: bool = False) -> str:
    cropped = finalize_crop(img, rotate=rotate, gentle=gentle)
    out = IMAGES / name
    cropped.save(out, quality=92, optimize=True)
    return f"/images/courtyard-quotes/{name}"


def main() -> None:
    manifest: list[dict[str, str]] = []

    skm = ROOT / "public" / "images" / "SKM_550i26060616190.pdf"
    welcome = render_page(skm, 3)
    manifest.append(
        {
            "id": "01-welcome-sign",
            "alt": "Power to Choose Courtyard welcome sign at James Campbell High School",
            "src": save_crop(welcome, "01-welcome-sign.jpg"),
        }
    )

    intro_pdf = ROOT / "public" / "images" / "cid_D31E1574-2768-4EDC-8130-95C6B3DA4F04.pdf"
    intro = render_page(intro_pdf, 0)
    w, h = intro.size
    gap_start, gap_end = panel_split_bounds(intro)
    gandhi = intro.crop((0, 0, w, gap_start))
    imagine = intro.crop((0, gap_end, w, h))
    manifest.append(
        {
            "id": "02-be-the-change",
            "alt": "Be the change you wish to see in the world — Mahatma Gandhi",
            "src": save_crop(gandhi, "02-be-the-change.jpg", rotate=False, gentle=True),
        }
    )
    manifest.append(
        {
            "id": "03-imagine-choices",
            "alt": "Imagine how your choices, education, hard work and aloha could make a difference",
            "src": save_crop(imagine, "03-imagine-choices.jpg", rotate=False, gentle=True),
        }
    )

    quote_names = [
        ("04-steve-jobs", "Go to bed at night knowing that you have done something wonderful — Steve Jobs"),
        ("05-walt-disney", "You're braver than you believe — Walt Disney"),
        ("06-colin-powell", "Always show more kindness than seems necessary — Colin Powell"),
        ("07-michael-jordan-shots", "I missed more than 9,000 shots in my career — Michael Jordan"),
        ("08-muhammad-ali", "Don't quit. Suffer now and live the rest of your life as a champion — Muhammad Ali"),
        ("09-ll-cool-j", "When you move past your fear and go after your dreams — LL Cool J"),
        ("10-hero", "Hero — a person of courage, perseverance, and integrity"),
        ("11-martin-luther-king", "Everyone can be great, because everyone can serve — Martin Luther King Jr."),
        ("12-family", "Family means no one gets left behind or forgotten"),
        ("13-be-the-change-students", "If you could change one thing about the world, what would it be? BE THE CHANGE!"),
    ]

    page_strips = [(0, 4), (1, 3), (2, 3)]
    idx = 0
    for page_index, strip_count in page_strips:
        page = render_page(skm, page_index)
        strips = split_vertical_strips(page, strip_count)
        for strip in strips:
            slug, alt = quote_names[idx]
            manifest.append({"id": slug, "alt": alt, "src": save_crop(strip, f"{slug}.jpg")})
            idx += 1

    manifest_path = IMAGES / "manifest.json"
    manifest_path.write_text(json.dumps(manifest, indent=2), encoding="utf-8")
    print(f"Wrote {len(manifest)} images to {IMAGES}")
    for item in manifest:
        print(item["src"])


if __name__ == "__main__":
    main()
