import { useEffect, useId, useMemo, useRef, useState } from "react";

import {
  DEFAULT_HERO_FONT_FAMILY,
  type HeroFontOption,
  heroFontCategoryLabel,
  heroFontStack,
} from "../utils/heroFontCatalog";
import { ensureHeroGoogleFont } from "../utils/heroGoogleFonts";

type FontSearchSelectProps = {
  label: string;
  value: string;
  fonts: HeroFontOption[];
  onChange: (family: string) => void;
};

const PINNED_FONT = DEFAULT_HERO_FONT_FAMILY;

export default function FontSearchSelect({
  label,
  value,
  fonts,
  onChange,
}: FontSearchSelectProps) {
  const listId = useId();
  const rootRef = useRef<HTMLDivElement>(null);
  const searchRef = useRef<HTMLInputElement>(null);
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    const matches = q
      ? fonts.filter(
          (font) =>
            font.family.toLowerCase().includes(q) ||
            heroFontCategoryLabel(font.category).toLowerCase().includes(q),
        )
      : fonts;

    if (!q && !matches.some((f) => f.family === PINNED_FONT)) {
      return [
        { family: PINNED_FONT, category: "sans-serif" as const },
        ...matches,
      ];
    }

    if (!q) {
      const pinned = matches.find((f) => f.family === PINNED_FONT);
      const rest = matches.filter((f) => f.family !== PINNED_FONT);
      return pinned ? [pinned, ...rest] : matches;
    }

    return matches;
  }, [fonts, query]);

  useEffect(() => {
    if (!open) return;

    ensureHeroGoogleFont(value);

    const onPointerDown = (event: MouseEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) {
        setOpen(false);
      }
    };

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    document.addEventListener("mousedown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    window.setTimeout(() => searchRef.current?.focus(), 0);

    return () => {
      document.removeEventListener("mousedown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open, value]);

  const selectFont = (family: string) => {
    ensureHeroGoogleFont(family);
    onChange(family);
    setOpen(false);
    setQuery("");
  };

  return (
    <div ref={rootRef} className="relative flex flex-col gap-1 text-xs text-ivory/80">
      <span className="font-semibold uppercase tracking-wider">{label}</span>

      <button
        type="button"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-controls={listId}
        onClick={() => setOpen((prev) => !prev)}
        className="flex w-full max-w-md items-center justify-between gap-2 rounded border border-ivory/20 bg-navy-800 px-3 py-2 text-left text-sm font-bold text-ivory hover:border-ivory/35"
        style={{ fontFamily: heroFontStack(value) }}
      >
        <span className="truncate">{value}</span>
        <span className="shrink-0 text-ivory/50" aria-hidden>
          ▾
        </span>
      </button>

      {open ? (
        <div className="absolute left-0 right-0 top-full z-50 mt-1 max-w-md rounded-lg border border-ivory/20 bg-navy-900 shadow-xl">
          <div className="border-b border-ivory/10 p-2">
            <input
              ref={searchRef}
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search fonts…"
              aria-label={`Search ${label}`}
              className="w-full rounded border border-ivory/20 bg-navy-800 px-3 py-2 text-sm text-ivory placeholder:text-ivory/40 focus:outline-none focus:ring-2 focus:ring-coral/60"
            />
            <p className="mt-1.5 px-1 text-[11px] text-ivory/50">
              {filtered.length} font{filtered.length === 1 ? "" : "s"}
              {query ? ` matching “${query.trim()}”` : ""}
            </p>
          </div>

          <ul
            id={listId}
            role="listbox"
            aria-label={label}
            className="max-h-56 overflow-y-auto py-1"
          >
            {filtered.length === 0 ? (
              <li className="px-3 py-2 text-sm text-ivory/60">No fonts found.</li>
            ) : (
              filtered.map((font) => {
                const selected = font.family === value;
                return (
                  <li key={font.family} role="presentation">
                    <button
                      type="button"
                      role="option"
                      aria-selected={selected}
                      onClick={() => selectFont(font.family)}
                      className={`flex w-full items-center justify-between gap-2 px-3 py-2 text-left text-sm hover:bg-ivory/10 ${
                        selected ? "bg-coral/20 text-ivory" : "text-ivory/90"
                      }`}
                      style={{ fontFamily: heroFontStack(font.family, font.category) }}
                    >
                      <span className="truncate">{font.family}</span>
                      <span className="shrink-0 text-[10px] uppercase tracking-wider text-ivory/45">
                        {heroFontCategoryLabel(font.category)}
                      </span>
                    </button>
                  </li>
                );
              })
            )}
          </ul>
        </div>
      ) : null}
    </div>
  );
}
