type WaveShape = "gentle" | "deep" | "soft" | "wide";

const WAVE_PATHS: Record<WaveShape, string> = {
  gentle:
    "M0 96V56C240 8 480 0 720 24C960 48 1200 56 1440 32V96H0Z",
  deep:
    "M0 96V40C360 80 720 0 1080 40C1260 60 1380 70 1440 64V96H0Z",
  soft:
    "M0 96V68C280 28 560 88 840 52C1120 16 1280 72 1440 44V96H0Z",
  wide:
    "M0 96V48C320 96 640 24 960 64C1280 104 1360 40 1440 72V96H0Z",
};

export const SECTION_COLORS = {
  ivory: "#FFFDF7",
  navy50: "#EEF3FB",
  navy900: "#142D52",
} as const;

type SectionDividerProps = {
  from: string;
  to: string;
  wave?: WaveShape;
  className?: string;
};

export default function SectionDivider({
  from,
  to,
  wave = "gentle",
  className = "",
}: SectionDividerProps) {
  return (
    <div
      className={`section-divider relative block ${className || "h-20 md:h-28"}`}
      style={{ backgroundColor: from }}
      aria-hidden
    >
      <svg
        viewBox="0 0 1440 96"
        fill="none"
        className="section-divider__wave"
        preserveAspectRatio="none"
      >
        <path d={WAVE_PATHS[wave]} fill={to} />
        {/* Bleed past edges to prevent subpixel gaps */}
        <rect x="0" y="94" width="1440" height="4" fill={to} />
      </svg>
    </div>
  );
}
