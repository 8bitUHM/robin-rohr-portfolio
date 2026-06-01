import {
  adjustHex,
  hexToRgbTriplet,
  normalizeHex,
  readStoredHex,
  writeStoredHex,
} from "./colorUtils";

export const DEFAULT_CORAL = "#F57C35";
export const CORAL_STORAGE_KEY = "robin-portfolio-coral-hex";

export function applyCoralTheme(hex: string): void {
  const normalized = normalizeHex(hex);
  const root = document.documentElement;
  root.style.setProperty("--coral", hexToRgbTriplet(normalized));
  root.style.setProperty("--coral-dark", hexToRgbTriplet(adjustHex(normalized, -18)));
  root.style.setProperty("--coral-light", hexToRgbTriplet(adjustHex(normalized, 22)));
}

export function getStoredCoralHex(): string | null {
  return readStoredHex(CORAL_STORAGE_KEY);
}

export function storeCoralHex(hex: string): void {
  writeStoredHex(CORAL_STORAGE_KEY, hex);
}
