export const DEFAULT_HERO_FONT_FAMILY = "Perpetua Titling MT";

export type HeroFontCategory =
  | "sans-serif"
  | "serif"
  | "display"
  | "handwriting"
  | "monospace";

export type HeroFontOption = {
  family: string;
  category: HeroFontCategory;
};

const CATEGORY_LABELS: Record<HeroFontCategory, string> = {
  "sans-serif": "Sans serif",
  serif: "Serif",
  display: "Display",
  handwriting: "Handwriting",
  monospace: "Monospace",
};

export function heroFontCategoryLabel(category: HeroFontCategory): string {
  return CATEGORY_LABELS[category];
}

export function heroFontStack(
  family: string,
  category: HeroFontCategory = "sans-serif",
): string {
  const safe = family.replace(/"/g, "").trim() || DEFAULT_HERO_FONT_FAMILY;
  const generic =
    category === "serif"
      ? "serif"
      : category === "monospace"
        ? "monospace"
        : category === "handwriting"
          ? "cursive"
          : "sans-serif";
  return `"${safe}", ${generic}`;
}

export function getHeroFontCategory(family: string): HeroFontCategory {
  const match = HERO_FONT_CATALOG.find((f) => f.family === family);
  return match?.category ?? "sans-serif";
}

/** Popular Google Fonts for hero title & quote play-testing (searchable in UI). */
const HERO_FONT_CATALOG_RAW = [
  { family: "Abril Fatface", category: "display" },
  { family: "Alegreya", category: "serif" },
  { family: "Alegreya Sans", category: "sans-serif" },
  { family: "Alfa Slab One", category: "display" },
  { family: "Alice", category: "serif" },
  { family: "Allura", category: "handwriting" },
  { family: "Amatic SC", category: "handwriting" },
  { family: "Amiri", category: "serif" },
  { family: "Antic Slab", category: "serif" },
  { family: "Anton", category: "display" },
  { family: "Archivo", category: "sans-serif" },
  { family: "Archivo Narrow", category: "sans-serif" },
  { family: "Arimo", category: "sans-serif" },
  { family: "Arvo", category: "serif" },
  { family: "Asap", category: "sans-serif" },
  { family: "Assistant", category: "sans-serif" },
  { family: "Barlow", category: "sans-serif" },
  { family: "Barlow Condensed", category: "sans-serif" },
  { family: "Bebas Neue", category: "display" },
  { family: "Bitter", category: "serif" },
  { family: "Bodoni Moda", category: "serif" },
  { family: "Bree Serif", category: "serif" },
  { family: "Cabin", category: "sans-serif" },
  { family: "Cardo", category: "serif" },
  { family: "Carme", category: "sans-serif" },
  { family: "Catamaran", category: "sans-serif" },
  { family: "Caveat", category: "handwriting" },
  { family: "Chivo", category: "sans-serif" },
  { family: "Cinzel", category: "serif" },
  { family: "Comfortaa", category: "display" },
  { family: "Commissioner", category: "sans-serif" },
  { family: "Cormorant", category: "serif" },
  { family: "Cormorant Garamond", category: "serif" },
  { family: "Crimson Pro", category: "serif" },
  { family: "Crimson Text", category: "serif" },
  { family: "DM Sans", category: "sans-serif" },
  { family: "DM Serif Display", category: "serif" },
  { family: "Domine", category: "serif" },
  { family: "Dosis", category: "sans-serif" },
  { family: "EB Garamond", category: "serif" },
  { family: "Exo 2", category: "sans-serif" },
  { family: "Fauna One", category: "serif" },
  { family: "Figtree", category: "sans-serif" },
  { family: "Fira Sans", category: "sans-serif" },
  { family: "Fraunces", category: "serif" },
  { family: "Gentium Book Plus", category: "serif" },
  { family: "Gilda Display", category: "serif" },
  { family: "Great Vibes", category: "handwriting" },
  { family: "Heebo", category: "sans-serif" },
  { family: "Hind", category: "sans-serif" },
  { family: "IBM Plex Sans", category: "sans-serif" },
  { family: "IBM Plex Serif", category: "serif" },
  { family: "Inconsolata", category: "monospace" },
  { family: "Inter", category: "sans-serif" },
  { family: "Josefin Sans", category: "sans-serif" },
  { family: "Josefin Slab", category: "serif" },
  { family: "Jost", category: "sans-serif" },
  { family: "Kanit", category: "sans-serif" },
  { family: "Karla", category: "sans-serif" },
  { family: "Lato", category: "sans-serif" },
  { family: "Lexend", category: "sans-serif" },
  { family: "Libre Baskerville", category: "serif" },
  { family: "Libre Franklin", category: "sans-serif" },
  { family: "Lilita One", category: "display" },
  { family: "Lobster", category: "display" },
  { family: "Lora", category: "serif" },
  { family: "M PLUS Rounded 1c", category: "sans-serif" },
  { family: "Manrope", category: "sans-serif" },
  { family: "Marcellus", category: "serif" },
  { family: "Martel", category: "serif" },
  { family: "Merriweather", category: "serif" },
  { family: "Merriweather Sans", category: "sans-serif" },
  { family: "Montserrat", category: "sans-serif" },
  { family: "Mukta", category: "sans-serif" },
  { family: "Mulish", category: "sans-serif" },
  { family: "Nanum Gothic", category: "sans-serif" },
  { family: "Neuton", category: "serif" },
  { family: "Noticia Text", category: "serif" },
  { family: "Noto Sans", category: "sans-serif" },
  { family: "Noto Serif", category: "serif" },
  { family: "Nunito", category: "sans-serif" },
  { family: "Nunito Sans", category: "sans-serif" },
  { family: "Old Standard TT", category: "serif" },
  { family: "Open Sans", category: "sans-serif" },
  { family: "Oswald", category: "sans-serif" },
  { family: "Outfit", category: "sans-serif" },
  { family: "Overpass", category: "sans-serif" },
  { family: "Oxygen", category: "sans-serif" },
  { family: "Pacifico", category: "handwriting" },
  { family: "Palanquin", category: "sans-serif" },
  { family: "Parisienne", category: "handwriting" },
  { family: "Passion One", category: "display" },
  { family: "Pathway Gothic One", category: "sans-serif" },
  { family: "Patua One", category: "display" },
  { family: "Perpetua Titling MT", category: "serif" },
  { family: "Petrona", category: "serif" },
  { family: "Philosopher", category: "sans-serif" },
  { family: "Playfair Display", category: "serif" },
  { family: "Plus Jakarta Sans", category: "sans-serif" },
  { family: "Poppins", category: "sans-serif" },
  { family: "Prata", category: "serif" },
  { family: "Prompt", category: "sans-serif" },
  { family: "Proza Libre", category: "sans-serif" },
  { family: "PT Sans", category: "sans-serif" },
  { family: "PT Serif", category: "serif" },
  { family: "Public Sans", category: "sans-serif" },
  { family: "Quattrocento", category: "serif" },
  { family: "Quattrocento Sans", category: "sans-serif" },
  { family: "Questrial", category: "sans-serif" },
  { family: "Quicksand", category: "sans-serif" },
  { family: "Raleway", category: "sans-serif" },
  { family: "Red Hat Display", category: "sans-serif" },
  { family: "Roboto", category: "sans-serif" },
  { family: "Roboto Condensed", category: "sans-serif" },
  { family: "Roboto Slab", category: "serif" },
  { family: "Rokkitt", category: "serif" },
  { family: "Rubik", category: "sans-serif" },
  { family: "Sacramento", category: "handwriting" },
  { family: "Sanchez", category: "serif" },
  { family: "Satisfy", category: "handwriting" },
  { family: "Secular One", category: "sans-serif" },
  { family: "Sen", category: "sans-serif" },
  { family: "Signika", category: "sans-serif" },
  { family: "Source Sans 3", category: "sans-serif" },
  { family: "Source Serif 4", category: "serif" },
  { family: "Space Grotesk", category: "sans-serif" },
  { family: "Space Mono", category: "monospace" },
  { family: "Spectral", category: "serif" },
  { family: "Sora", category: "sans-serif" },
  { family: "League Spartan", category: "sans-serif" },
  { family: "Spectral SC", category: "serif" },
  { family: "Taviraj", category: "serif" },
  { family: "Tenor Sans", category: "sans-serif" },
  { family: "Tinos", category: "serif" },
  { family: "Titillium Web", category: "sans-serif" },
  { family: "Trirong", category: "serif" },
  { family: "Ubuntu", category: "sans-serif" },
  { family: "Urbanist", category: "sans-serif" },
  { family: "Varela", category: "sans-serif" },
  { family: "Varela Round", category: "sans-serif" },
  { family: "Vollkorn", category: "serif" },
  { family: "Work Sans", category: "sans-serif" },
  { family: "Yanone Kaffeesatz", category: "sans-serif" },
  { family: "Yeseva One", category: "display" },
  { family: "Young Serif", category: "serif" },
  { family: "Zilla Slab", category: "serif" },
] satisfies HeroFontOption[];

export const HERO_FONT_CATALOG_SORTED: HeroFontOption[] = [...HERO_FONT_CATALOG_RAW].sort(
  (a, b) => a.family.localeCompare(b.family),
);

export const HERO_FONT_CATALOG = HERO_FONT_CATALOG_SORTED;

export const HERO_FONT_FAMILY_NAMES = HERO_FONT_CATALOG.map((f) => f.family);
