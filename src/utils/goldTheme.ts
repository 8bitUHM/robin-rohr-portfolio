import {
  adjustHex,
  hexToRgbTriplet,
  normalizeHex,
  readStoredHex,
  writeStoredHex,
} from "./colorUtils";

export const DEFAULT_GOLD = "#C8A84E";
export const GOLD_STORAGE_KEY = "robin-portfolio-gold-hex";

export function applyGoldTheme(hex: string): void {
  const normalized = normalizeHex(hex);
  const root = document.documentElement;
  root.style.setProperty("--gold", hexToRgbTriplet(normalized));
  root.style.setProperty("--gold-dark", hexToRgbTriplet(adjustHex(normalized, -35)));
  root.style.setProperty("--gold-light", hexToRgbTriplet(adjustHex(normalized, 42)));
}

export function getStoredGoldHex(): string | null {
  return readStoredHex(GOLD_STORAGE_KEY);
}

export function storeGoldHex(hex: string): void {
  writeStoredHex(GOLD_STORAGE_KEY, hex);
}
