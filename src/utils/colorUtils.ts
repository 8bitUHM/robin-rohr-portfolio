export function normalizeHex(hex: string): string {
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

export function goldOutlineTriplet(hex: string): string {
  const normalized = normalizeHex(hex).slice(1);
  const r = parseInt(normalized.slice(0, 2), 16);
  const g = parseInt(normalized.slice(2, 4), 16);
  const b = parseInt(normalized.slice(4, 6), 16);
  return `${Math.round(r * 0.4)} ${Math.round(g * 0.28)} ${Math.round(b * 0.14)}`;
}

export function readStoredHex(key: string): string | null {
  try {
    const stored = localStorage.getItem(key);
    return stored ? normalizeHex(stored) : null;
  } catch {
    return null;
  }
}

export function writeStoredHex(key: string, hex: string): void {
  try {
    localStorage.setItem(key, normalizeHex(hex));
  } catch {
    // Ignore storage failures (private browsing, etc.)
  }
}
