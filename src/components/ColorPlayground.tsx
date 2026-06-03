import { useCallback, useEffect, useState } from "react";

import {
  DEFAULT_CORAL,
  applyCoralTheme,
  getStoredCoralHex,
  storeCoralHex,
} from "../utils/coralTheme";
import {
  DEFAULT_GOLD,
  applyGoldTheme,
  getStoredGoldHex,
  storeGoldHex,
} from "../utils/goldTheme";
import {
  DEFAULT_HERO_QUOTE,
  DEFAULT_HERO_TEXT_PLAYGROUND,
  DEFAULT_HERO_TITLE,
  type HeroTextBlockSettings,
  type HeroTextPlaygroundSettings,
  applyHeroTextPlayground,
  formatHeroTextPlaygroundForCopy,
  getStoredHeroTextPlayground,
  storeHeroTextPlayground,
} from "../utils/heroTextPlayground";
import {
  applyTaglineShimmer,
  getStoredTaglineShimmer,
  storeTaglineShimmer,
} from "../utils/heroTaglineShimmer";

type ColorPickerProps = {
  label: string;
  hex: string;
  copied: boolean;
  onChange: (value: string) => void;
  onCopy: () => void;
  onReset: () => void;
  ariaLabel: string;
};

function ColorPickerRow({
  label,
  hex,
  copied,
  onChange,
  onCopy,
  onReset,
  ariaLabel,
}: ColorPickerProps) {
  return (
    <div className="flex flex-wrap items-center gap-3 md:gap-4">
      <label className="inline-flex items-center gap-2 cursor-pointer">
        <span className="text-xs md:text-sm font-semibold uppercase tracking-wider text-ivory/70">
          {label}
        </span>
        <input
          type="color"
          value={hex}
          onChange={(event) => onChange(event.target.value)}
          className="h-10 w-14 cursor-pointer rounded border border-ivory/20 bg-transparent p-0.5"
          aria-label={ariaLabel}
        />
      </label>

      <code className="rounded bg-ivory/10 px-3 py-1.5 text-sm md:text-base font-bold tracking-wide">
        {hex}
      </code>

      <button
        type="button"
        onClick={onCopy}
        className="rounded-lg bg-coral px-3 py-1.5 text-sm font-bold text-ivory transition-opacity hover:opacity-90"
      >
        {copied ? "Copied!" : "Copy color code"}
      </button>

      <button
        type="button"
        onClick={onReset}
        className="text-xs md:text-sm font-semibold text-ivory/70 underline underline-offset-2 hover:text-ivory"
      >
        Reset to default
      </button>
    </div>
  );
}

type HeroTextControlGroupProps = {
  sectionLabel: string;
  settings: HeroTextBlockSettings;
  onChange: (next: HeroTextBlockSettings) => void;
  onReset: () => void;
};

function HeroTextControlGroup({
  sectionLabel,
  settings,
  onChange,
  onReset,
}: HeroTextControlGroupProps) {
  const patch = (partial: Partial<HeroTextBlockSettings>) => {
    onChange({ ...settings, ...partial });
  };

  return (
    <div className="space-y-3">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <p className="text-xs md:text-sm font-semibold uppercase tracking-wider text-ivory/60">
          {sectionLabel}
        </p>
        <button
          type="button"
          onClick={onReset}
          className="text-xs md:text-sm font-semibold text-ivory/70 underline underline-offset-2 hover:text-ivory"
        >
          Reset section
        </button>
      </div>

      <div className="grid gap-3 sm:grid-cols-2">
        <label className="flex flex-col gap-1 text-xs text-ivory/80">
          <span className="font-semibold uppercase tracking-wider">Text color</span>
          <input
            type="color"
            value={settings.fillHex}
            onChange={(e) => patch({ fillHex: e.target.value })}
            className="h-10 w-full max-w-[8rem] cursor-pointer rounded border border-ivory/20 bg-transparent p-0.5"
          />
        </label>
        <label className="flex flex-col gap-1 text-xs text-ivory/80">
          <span className="font-semibold uppercase tracking-wider">
            Outline color
          </span>
          <input
            type="color"
            value={settings.outlineHex}
            onChange={(e) => patch({ outlineHex: e.target.value })}
            className="h-10 w-full max-w-[8rem] cursor-pointer rounded border border-ivory/20 bg-transparent p-0.5"
          />
        </label>
      </div>

      <label className="flex flex-col gap-1 text-xs text-ivory/80">
        <span className="font-semibold uppercase tracking-wider">
          Outline width: {settings.outlineWidth}px
        </span>
        <input
          type="range"
          min={0}
          max={3}
          step={0.5}
          value={settings.outlineWidth}
          onChange={(e) => patch({ outlineWidth: Number(e.target.value) })}
          className="w-full accent-coral"
        />
      </label>

      <div className="flex flex-wrap items-center gap-4">
        <label className="flex flex-col gap-1 text-xs text-ivory/80">
          <span className="font-semibold uppercase tracking-wider">Weight</span>
          <select
            value={settings.fontWeight}
            onChange={(e) =>
              patch({ fontWeight: Number(e.target.value) as 600 | 700 })
            }
            className="rounded border border-ivory/20 bg-navy-800 px-2 py-1.5 text-sm font-bold text-ivory"
          >
            <option value={600}>Semibold (600)</option>
            <option value={700}>Bold (700)</option>
          </select>
        </label>
        <label className="inline-flex items-center gap-2 text-xs text-ivory/80 cursor-pointer">
          <input
            type="checkbox"
            checked={settings.italic}
            onChange={(e) => patch({ italic: e.target.checked })}
            className="h-4 w-4 accent-coral"
          />
          <span className="font-semibold uppercase tracking-wider">Italic</span>
        </label>
      </div>
    </div>
  );
}

export default function ColorPlayground() {
  const [coralHex, setCoralHex] = useState(DEFAULT_CORAL);
  const [goldHex, setGoldHex] = useState(DEFAULT_GOLD);
  const [copiedCoral, setCopiedCoral] = useState(false);
  const [copiedGold, setCopiedGold] = useState(false);
  const [copiedHeroText, setCopiedHeroText] = useState(false);
  const [taglineShimmer, setTaglineShimmer] = useState(false);
  const [heroText, setHeroText] = useState<HeroTextPlaygroundSettings>(
    DEFAULT_HERO_TEXT_PLAYGROUND,
  );

  const persistHeroText = useCallback((next: HeroTextPlaygroundSettings) => {
    setHeroText(next);
    applyHeroTextPlayground(next);
    storeHeroTextPlayground(next);
    setCopiedHeroText(false);
  }, []);

  useEffect(() => {
    const storedCoral = getStoredCoralHex();
    const initialCoral = storedCoral ?? DEFAULT_CORAL;
    setCoralHex(initialCoral);
    applyCoralTheme(initialCoral);

    const storedGold = getStoredGoldHex();
    const initialGold = storedGold ?? DEFAULT_GOLD;
    setGoldHex(initialGold);
    applyGoldTheme(initialGold);

    const storedHero = getStoredHeroTextPlayground();
    const initialHero = storedHero ?? DEFAULT_HERO_TEXT_PLAYGROUND;
    setHeroText(initialHero);
    applyHeroTextPlayground(initialHero);

    const initialShimmer = getStoredTaglineShimmer();
    setTaglineShimmer(initialShimmer);
    applyTaglineShimmer(initialShimmer);
  }, []);

  const handleTaglineShimmerChange = (enabled: boolean) => {
    setTaglineShimmer(enabled);
    applyTaglineShimmer(enabled);
    storeTaglineShimmer(enabled);
  };

  const handleCoralChange = (value: string) => {
    const next = value.toUpperCase();
    setCoralHex(next);
    applyCoralTheme(value);
    storeCoralHex(value);
    setCopiedCoral(false);
  };

  const handleGoldChange = (value: string) => {
    const next = value.toUpperCase();
    setGoldHex(next);
    applyGoldTheme(value);
    storeGoldHex(value);
    setCopiedGold(false);
  };

  const copyHex = async (hex: string, setCopied: (value: boolean) => void) => {
    try {
      await navigator.clipboard.writeText(hex);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  const copyHeroTextSettings = async () => {
    try {
      await navigator.clipboard.writeText(formatHeroTextPlaygroundForCopy(heroText));
      setCopiedHeroText(true);
      window.setTimeout(() => setCopiedHeroText(false), 2000);
    } catch {
      setCopiedHeroText(false);
    }
  };

  return (
    <div className="bg-navy-900 text-ivory border-b border-ivory/10 px-4 py-3 md:px-6">
      <div className="max-w-6xl mx-auto space-y-4">
        <p className="text-sm md:text-base font-bold tracking-wide">
          Play test color website
        </p>

        <ol className="text-xs md:text-sm text-ivory/85 space-y-1 list-decimal list-inside">
          <li>Click a color swatch to open the color picker.</li>
          <li>
            Try different coral and gold shades — the site updates instantly.
          </li>
          <li>
            Toggle <strong>Author · Journalist · Advocate</strong> gold shimmer on or
            off.
          </li>
          <li>
            Use <strong>Robin Stephens Rohr</strong> and <strong>Hero quote</strong>{" "}
            to style the name and quote.
          </li>
          <li>
            When you like your choices, copy settings and send them to Jalen.
          </li>
        </ol>

        <div className="space-y-3 pt-1 border-t border-ivory/10">
          <p className="text-xs md:text-sm font-semibold uppercase tracking-wider text-ivory/60">
            Coral
          </p>
          <ColorPickerRow
            label="Coral color"
            hex={coralHex}
            copied={copiedCoral}
            onChange={handleCoralChange}
            onCopy={() => copyHex(coralHex, setCopiedCoral)}
            onReset={() => handleCoralChange(DEFAULT_CORAL)}
            ariaLabel="Choose coral color"
          />
        </div>

        <div className="space-y-3 pt-1 border-t border-ivory/10">
          <p className="text-xs md:text-sm font-semibold uppercase tracking-wider text-ivory/60">
            Gold
          </p>
          <ColorPickerRow
            label="Gold color"
            hex={goldHex}
            copied={copiedGold}
            onChange={handleGoldChange}
            onCopy={() => copyHex(goldHex, setCopiedGold)}
            onReset={() => handleGoldChange(DEFAULT_GOLD)}
            ariaLabel="Choose gold color"
          />
        </div>

        <div className="space-y-3 pt-1 border-t border-ivory/10">
          <p className="text-xs md:text-sm font-semibold uppercase tracking-wider text-ivory/60">
            Author · Journalist · Advocate
          </p>
          <label className="inline-flex items-center gap-3 text-xs md:text-sm text-ivory/85 cursor-pointer">
            <input
              type="checkbox"
              checked={taglineShimmer}
              onChange={(e) => handleTaglineShimmerChange(e.target.checked)}
              className="h-4 w-4 accent-coral"
            />
            <span>
              Gold shimmer animation{" "}
              <span className="text-ivory/60">(off = solid gold with brown outline)</span>
            </span>
          </label>
        </div>

        <div className="space-y-4 pt-1 border-t border-ivory/10">
          <HeroTextControlGroup
            sectionLabel="Robin Stephens Rohr"
            settings={heroText.title}
            onChange={(title) => persistHeroText({ ...heroText, title })}
            onReset={() =>
              persistHeroText({ ...heroText, title: { ...DEFAULT_HERO_TITLE } })
            }
          />

          <div className="border-t border-ivory/10 pt-4">
            <HeroTextControlGroup
              sectionLabel="Hero quote"
              settings={heroText.quote}
              onChange={(quote) => persistHeroText({ ...heroText, quote })}
              onReset={() =>
                persistHeroText({ ...heroText, quote: { ...DEFAULT_HERO_QUOTE } })
              }
            />
          </div>

          <button
            type="button"
            onClick={copyHeroTextSettings}
            className="rounded-lg bg-coral px-3 py-2 text-sm font-bold text-ivory transition-opacity hover:opacity-90"
          >
            {copiedHeroText ? "Copied hero text settings!" : "Copy hero text settings"}
          </button>
        </div>
      </div>
    </div>
  );
}
