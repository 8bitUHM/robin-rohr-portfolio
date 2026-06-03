export type ColorPreset = {
  hex: string;
  label: string;
};

/** Curated coral options for the play-test banner (works on all devices). */
export const CORAL_COLOR_PRESETS: ColorPreset[] = [
  { hex: "#F57C35", label: "Brand coral" },
  { hex: "#E06A24", label: "Deeper coral" },
  { hex: "#FFA060", label: "Light coral" },
  { hex: "#FF8C69", label: "Salmon" },
  { hex: "#E8834A", label: "Warm amber-coral" },
];

/** Curated gold options for the play-test banner (works on all devices). */
export const GOLD_COLOR_PRESETS: ColorPreset[] = [
  { hex: "#C8A84E", label: "Brand gold" },
  { hex: "#E8D48A", label: "Light gold" },
  { hex: "#D4AF37", label: "Classic gold" },
  { hex: "#F5D76E", label: "Bright gold" },
  { hex: "#BDA448", label: "Muted gold" },
];
