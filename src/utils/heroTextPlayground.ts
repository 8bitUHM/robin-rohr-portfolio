import { hexToRgbTriplet, normalizeHex } from "./colorUtils";
import {
  DEFAULT_HERO_FONT_FAMILY,
  getHeroFontCategory,
  heroFontStack,
} from "./heroFontCatalog";
import { ensureHeroGoogleFonts } from "./heroGoogleFonts";

export type HeroTextBlockSettings = {
  fillHex: string;
  outlineHex: string;
  outlineWidth: number;
  fontWeight: 600 | 700;
  italic: boolean;
  fontFamily: string;
  /** Fixed px size; null uses responsive site defaults. */
  fontSizePx: number | null;
};

export const HERO_TITLE_FONT_SIZE_MIN = 20;
export const HERO_TITLE_FONT_SIZE_MAX = 120;
export const HERO_QUOTE_FONT_SIZE_MIN = 14;
export const HERO_QUOTE_FONT_SIZE_MAX = 80;

export type HeroTextPlaygroundSettings = {
  title: HeroTextBlockSettings;
  quote: HeroTextBlockSettings;
};

export const HERO_TEXT_PLAYGROUND_STORAGE_KEY =
  "robin-portfolio-hero-text-playground";

export const DEFAULT_HERO_TITLE: HeroTextBlockSettings = {
  fillHex: "#1C3D6E",
  outlineHex: "#1C3D6E",
  outlineWidth: 0,
  fontWeight: 700,
  italic: false,
  fontFamily: DEFAULT_HERO_FONT_FAMILY,
  fontSizePx: null,
};

export const DEFAULT_HERO_QUOTE: HeroTextBlockSettings = {
  fillHex: "#F57C35",
  outlineHex: "#1C3D6E",
  outlineWidth: 0,
  fontWeight: 700,
  italic: true,
  fontFamily: DEFAULT_HERO_FONT_FAMILY,
  fontSizePx: null,
};

export const DEFAULT_HERO_TEXT_PLAYGROUND: HeroTextPlaygroundSettings = {
  title: DEFAULT_HERO_TITLE,
  quote: DEFAULT_HERO_QUOTE,
};

function applyBlock(prefix: "title" | "quote", block: HeroTextBlockSettings): void {
  const root = document.documentElement;
  root.style.setProperty(`--hero-${prefix}-color`, hexToRgbTriplet(block.fillHex));
  root.style.setProperty(
    `--hero-${prefix}-stroke-color`,
    hexToRgbTriplet(block.outlineHex),
  );
  root.style.setProperty(`--hero-${prefix}-stroke-width`, `${block.outlineWidth}px`);
  if (block.fontSizePx == null) {
    root.style.removeProperty(`--hero-${prefix}-size`);
  } else {
    root.style.setProperty(`--hero-${prefix}-size`, `${block.fontSizePx}px`);
  }
  root.style.setProperty(`--hero-${prefix}-weight`, String(block.fontWeight));
  root.style.setProperty(`--hero-${prefix}-style`, block.italic ? "italic" : "normal");
  root.style.setProperty(
    `--hero-${prefix}-font-family`,
    heroFontStack(block.fontFamily, getHeroFontCategory(block.fontFamily)),
  );
}

export function applyHeroTextPlayground(settings: HeroTextPlaygroundSettings): void {
  ensureHeroGoogleFonts([settings.title.fontFamily, settings.quote.fontFamily]);
  applyBlock("title", settings.title);
  applyBlock("quote", settings.quote);
}

export function getStoredHeroTextPlayground(): HeroTextPlaygroundSettings | null {
  try {
    const raw = localStorage.getItem(HERO_TEXT_PLAYGROUND_STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as HeroTextPlaygroundSettings;
    if (!parsed?.title || !parsed?.quote) return null;
    return {
      title: normalizeBlock(parsed.title, DEFAULT_HERO_TITLE, "title"),
      quote: normalizeBlock(parsed.quote, DEFAULT_HERO_QUOTE, "quote"),
    };
  } catch {
    return null;
  }
}

function normalizeBlock(
  block: HeroTextBlockSettings,
  defaults: HeroTextBlockSettings,
  prefix: "title" | "quote",
): HeroTextBlockSettings {
  const weight = block.fontWeight === 600 ? 600 : 700;
  return {
    fillHex: normalizeHex(block.fillHex || defaults.fillHex),
    outlineHex: normalizeHex(block.outlineHex || defaults.outlineHex),
    outlineWidth: clamp(Number(block.outlineWidth), 0, 3),
    fontWeight: weight,
    italic: Boolean(block.italic),
    fontFamily:
      typeof block.fontFamily === "string" && block.fontFamily.trim()
        ? block.fontFamily.trim()
        : defaults.fontFamily,
    fontSizePx: normalizeFontSizePx(block.fontSizePx, defaults.fontSizePx, prefix),
  };
}

function normalizeFontSizePx(
  value: unknown,
  defaultValue: number | null,
  prefix: "title" | "quote",
): number | null {
  if (value === null || value === undefined || value === "") return defaultValue;
  const min =
    prefix === "title" ? HERO_TITLE_FONT_SIZE_MIN : HERO_QUOTE_FONT_SIZE_MIN;
  const max =
    prefix === "title" ? HERO_TITLE_FONT_SIZE_MAX : HERO_QUOTE_FONT_SIZE_MAX;
  const num = Number(value);
  if (Number.isNaN(num)) return defaultValue;
  return clamp(Math.round(num), min, max);
}

function clamp(value: number, min: number, max: number): number {
  if (Number.isNaN(value)) return min;
  return Math.min(max, Math.max(min, value));
}

export function storeHeroTextPlayground(
  settings: HeroTextPlaygroundSettings,
): void {
  try {
    localStorage.setItem(HERO_TEXT_PLAYGROUND_STORAGE_KEY, JSON.stringify(settings));
  } catch {
    // Ignore storage failures
  }
}

export function formatHeroTextPlaygroundForCopy(
  settings: HeroTextPlaygroundSettings,
): string {
  const { title, quote } = settings;
  const lines = [
    "Hero text playground settings",
    "",
    "Robin Stephens Rohr:",
    `  Fill: ${title.fillHex}`,
    `  Outline: ${title.outlineHex} (${title.outlineWidth}px)`,
    `  Weight: ${title.fontWeight}`,
    `  Italic: ${title.italic ? "yes" : "no"}`,
    `  Font: ${title.fontFamily}`,
    `  Font size: ${formatFontSizeForCopy(title.fontSizePx)}`,
    "",
    "Hero quote:",
    `  Fill: ${quote.fillHex}`,
    `  Outline: ${quote.outlineHex} (${quote.outlineWidth}px)`,
    `  Weight: ${quote.fontWeight}`,
    `  Italic: ${quote.italic ? "yes" : "no"}`,
    `  Font: ${quote.fontFamily}`,
    `  Font size: ${formatFontSizeForCopy(quote.fontSizePx)}`,
    "",
    "JSON:",
    JSON.stringify(settings, null, 2),
  ];
  return lines.join("\n");
}

function formatFontSizeForCopy(fontSizePx: number | null): string {
  return fontSizePx == null ? "responsive (site default)" : `${fontSizePx}px`;
}
