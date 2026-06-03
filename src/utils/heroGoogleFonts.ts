const loadedFamilies = new Set<string>();

function googleFontsCssUrl(family: string): string {
  const param = family.trim().replace(/ /g, "+");
  return `https://fonts.googleapis.com/css2?family=${param}:ital,wght@0,400;0,600;0,700;1,400;1,600;1,700&display=swap`;
}

function linkIdForFamily(family: string): string {
  return `gf-hero-${family.trim().replace(/\s+/g, "-").toLowerCase()}`;
}

/** Loads a Google Font family for hero title/quote preview (idempotent). */
export function ensureHeroGoogleFont(family: string): void {
  const name = family.trim();
  if (!name || loadedFamilies.has(name)) return;

  const id = linkIdForFamily(name);
  if (document.getElementById(id)) {
    loadedFamilies.add(name);
    return;
  }

  const link = document.createElement("link");
  link.id = id;
  link.rel = "stylesheet";
  link.href = googleFontsCssUrl(name);
  document.head.appendChild(link);
  loadedFamilies.add(name);
}

export function ensureHeroGoogleFonts(families: string[]): void {
  for (const family of families) {
    ensureHeroGoogleFont(family);
  }
}
