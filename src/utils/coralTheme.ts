export const DEFAULT_CORAL = "#F57C35";
export const CORAL_STORAGE_KEY = "robin-portfolio-coral-hex";

function normalizeHex(hex: string): string {
  const cleaned = hex.replace("#", "").trim();
  if (cleaned.length === 3) {
    return `#${cleaned
      .split("")
      .map((char) => char + char)
      .join("")
      .toUpperCase()}`;
  }
  return `#${cleaned.toUpperCase()}`;
}

export function hexToRgbTriplet(hex: string): string {
  const normalized = normalizeHex(hex).slice(1);
  const r = parseInt(normalized.slice(0, 2), 16);
  const g = parseInt(normalized.slice(2, 4), 16);
  const b = parseInt(normalized.slice(4, 6), 16);
  return `${r} ${g} ${b}`;
}

export function adjustHex(hex: string, amount: number): string {
  const normalized = normalizeHex(hex).slice(1);
  const channels = [
    parseInt(normalized.slice(0, 2), 16),
    parseInt(normalized.slice(2, 4), 16),
    parseInt(normalized.slice(4, 6), 16),
  ].map((channel) => Math.min(255, Math.max(0, channel + amount)));

  return `#${channels.map((channel) => channel.toString(16).padStart(2, "0")).join("").toUpperCase()}`;
}

export function applyCoralTheme(hex: string): void {
  const normalized = normalizeHex(hex);
  const root = document.documentElement;
  root.style.setProperty("--coral", hexToRgbTriplet(normalized));
  root.style.setProperty("--coral-dark", hexToRgbTriplet(adjustHex(normalized, -18)));
  root.style.setProperty("--coral-light", hexToRgbTriplet(adjustHex(normalized, 22)));
}

export function getStoredCoralHex(): string | null {
  try {
    const stored = localStorage.getItem(CORAL_STORAGE_KEY);
    return stored ? normalizeHex(stored) : null;
  } catch {
    return null;
  }
}

export function storeCoralHex(hex: string): void {
  try {
    localStorage.setItem(CORAL_STORAGE_KEY, normalizeHex(hex));
  } catch {
    // Ignore storage failures (private browsing, etc.)
  }
}
