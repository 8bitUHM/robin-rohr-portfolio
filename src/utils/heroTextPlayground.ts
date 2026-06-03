import { hexToRgbTriplet, normalizeHex } from "./colorUtils";

export type HeroTextBlockSettings = {
  fillHex: string;
  outlineHex: string;
  outlineWidth: number;
  fontWeight: 600 | 700;
  italic: boolean;
};

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
};

export const DEFAULT_HERO_QUOTE: HeroTextBlockSettings = {
  fillHex: "#F57C35",
  outlineHex: "#1C3D6E",
  outlineWidth: 0,
  fontWeight: 700,
  italic: true,
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
  root.style.removeProperty(`--hero-${prefix}-size`);
  root.style.setProperty(`--hero-${prefix}-weight`, String(block.fontWeight));
  root.style.setProperty(`--hero-${prefix}-style`, block.italic ? "italic" : "normal");
}

export function applyHeroTextPlayground(settings: HeroTextPlaygroundSettings): void {
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
      title: normalizeBlock(parsed.title, DEFAULT_HERO_TITLE),
      quote: normalizeBlock(parsed.quote, DEFAULT_HERO_QUOTE),
    };
  } catch {
    return null;
  }
}

function normalizeBlock(
  block: HeroTextBlockSettings,
  defaults: HeroTextBlockSettings,
): HeroTextBlockSettings {
  const weight = block.fontWeight === 600 ? 600 : 700;
  return {
    fillHex: normalizeHex(block.fillHex || defaults.fillHex),
    outlineHex: normalizeHex(block.outlineHex || defaults.outlineHex),
    outlineWidth: clamp(Number(block.outlineWidth), 0, 3),
    fontWeight: weight,
    italic: Boolean(block.italic),
  };
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
    "",
    "Hero quote:",
    `  Fill: ${quote.fillHex}`,
    `  Outline: ${quote.outlineHex} (${quote.outlineWidth}px)`,
    `  Weight: ${quote.fontWeight}`,
    `  Italic: ${quote.italic ? "yes" : "no"}`,
    "",
    "JSON:",
    JSON.stringify(settings, null, 2),
  ];
  return lines.join("\n");
}
