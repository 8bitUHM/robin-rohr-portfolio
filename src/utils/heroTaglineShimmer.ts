export const TAGLINE_SHIMMER_STORAGE_KEY = "robin-portfolio-tagline-shimmer";

export function getStoredTaglineShimmer(): boolean {
  try {
    return localStorage.getItem(TAGLINE_SHIMMER_STORAGE_KEY) === "true";
  } catch {
    return false;
  }
}

export function storeTaglineShimmer(enabled: boolean): void {
  try {
    localStorage.setItem(TAGLINE_SHIMMER_STORAGE_KEY, enabled ? "true" : "false");
  } catch {
    // Ignore storage failures
  }
}

export function applyTaglineShimmer(enabled: boolean): void {
  document.documentElement.classList.toggle("hero-tagline-shimmer-on", enabled);
}
