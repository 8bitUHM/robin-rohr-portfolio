import { useCallback, useEffect, useState } from "react";

import {
  DEFAULT_CORAL,
  applyCoralTheme,
  getStoredCoralHex,
} from "../utils/coralTheme";
import {
  DEFAULT_GOLD,
  applyGoldTheme,
  getStoredGoldHex,
} from "../utils/goldTheme";
import {
  DEFAULT_HERO_TEXT_PLAYGROUND,
  DEFAULT_HERO_TITLE,
  HERO_TITLE_FONT_SIZE_MAX,
  HERO_TITLE_FONT_SIZE_MIN,
  type HeroTextBlockSettings,
  type HeroTextPlaygroundSettings,
  applyHeroTextPlayground,
  formatHeroTitlePlaygroundForCopy,
  getStoredHeroTextPlayground,
  storeHeroTextPlayground,
} from "../utils/heroTextPlayground";
import {
  applyTaglineShimmer,
  getStoredTaglineShimmer,
} from "../utils/heroTaglineShimmer";
import FontSearchSelect from "./FontSearchSelect";
import { HERO_FONT_CATALOG } from "../utils/heroFontCatalog";

type HeroTitleControlGroupProps = {
  settings: HeroTextBlockSettings;
  onChange: (next: HeroTextBlockSettings) => void;
  onReset: () => void;
};

function HeroTitleControlGroup({
  settings,
  onChange,
  onReset,
}: HeroTitleControlGroupProps) {
  const patch = (partial: Partial<HeroTextBlockSettings>) => {
    onChange({ ...settings, ...partial });
  };

  return (
    <div className="space-y-3">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <p className="text-xs md:text-sm font-semibold uppercase tracking-wider text-ivory/60">
          Robin Stephens Rohr
        </p>
        <button
          type="button"
          onClick={onReset}
          className="text-xs md:text-sm font-semibold text-ivory/70 underline underline-offset-2 hover:text-ivory"
        >
          Reset section
        </button>
      </div>

      <FontSearchSelect
        label="Font"
        value={settings.fontFamily}
        fonts={HERO_FONT_CATALOG}
        onChange={(fontFamily) => patch({ fontFamily })}
      />

      <label className="flex flex-col gap-1 text-xs text-ivory/80 max-w-xs">
        <span className="font-semibold uppercase tracking-wider">Font size (px)</span>
        <div className="flex flex-wrap items-center gap-2">
          <input
            type="number"
            min={HERO_TITLE_FONT_SIZE_MIN}
            max={HERO_TITLE_FONT_SIZE_MAX}
            step={1}
            value={settings.fontSizePx ?? ""}
            placeholder="Auto"
            onChange={(e) => {
              const raw = e.target.value.trim();
              if (raw === "") {
                patch({ fontSizePx: null });
                return;
              }
              const next = Math.round(Number(raw));
              if (Number.isNaN(next)) return;
              patch({
                fontSizePx: Math.min(
                  HERO_TITLE_FONT_SIZE_MAX,
                  Math.max(HERO_TITLE_FONT_SIZE_MIN, next),
                ),
              });
            }}
            className="w-24 rounded border border-ivory/20 bg-navy-800 px-2 py-1.5 text-sm font-bold text-ivory [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
            aria-label="Robin Stephens Rohr font size in pixels"
          />
          {settings.fontSizePx != null ? (
            <button
              type="button"
              onClick={() => patch({ fontSizePx: null })}
              className="text-xs font-semibold text-ivory/70 underline underline-offset-2 hover:text-ivory"
            >
              Use responsive default
            </button>
          ) : (
            <span className="text-[11px] text-ivory/50">
              Empty = scales with screen size
            </span>
          )}
        </div>
      </label>

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
  const [copiedHeroTitle, setCopiedHeroTitle] = useState(false);
  const [heroText, setHeroText] = useState<HeroTextPlaygroundSettings>(
    DEFAULT_HERO_TEXT_PLAYGROUND,
  );

  const persistHeroText = useCallback((next: HeroTextPlaygroundSettings) => {
    setHeroText(next);
    applyHeroTextPlayground(next);
    storeHeroTextPlayground(next);
    setCopiedHeroTitle(false);
  }, []);

  useEffect(() => {
    applyCoralTheme(getStoredCoralHex() ?? DEFAULT_CORAL);
    applyGoldTheme(getStoredGoldHex() ?? DEFAULT_GOLD);
    applyTaglineShimmer(getStoredTaglineShimmer());

    const initialHero = getStoredHeroTextPlayground() ?? DEFAULT_HERO_TEXT_PLAYGROUND;
    setHeroText(initialHero);
    applyHeroTextPlayground(initialHero);
  }, []);

  const copyHeroTitleSettings = async () => {
    try {
      await navigator.clipboard.writeText(
        formatHeroTitlePlaygroundForCopy(heroText.title),
      );
      setCopiedHeroTitle(true);
      window.setTimeout(() => setCopiedHeroTitle(false), 2000);
    } catch {
      setCopiedHeroTitle(false);
    }
  };

  return (
    <div className="bg-navy-900 text-ivory border-b border-ivory/10 px-4 py-3 md:px-6">
      <div className="max-w-6xl mx-auto space-y-4">
        <p className="text-sm md:text-base font-bold tracking-wide">
          Play test — hero name
        </p>

        <ol className="text-xs md:text-sm text-ivory/85 space-y-1 list-decimal list-inside">
          <li>
            Adjust <strong>Robin Stephens Rohr</strong> — font, size, colors,
            weight, and italic.
          </li>
          <li>When you like your choices, copy settings and send them to Jalen.</li>
        </ol>

        <div className="space-y-4 pt-1 border-t border-ivory/10">
          <HeroTitleControlGroup
            settings={heroText.title}
            onChange={(title) => persistHeroText({ ...heroText, title })}
            onReset={() =>
              persistHeroText({ ...heroText, title: { ...DEFAULT_HERO_TITLE } })
            }
          />

          <button
            type="button"
            onClick={copyHeroTitleSettings}
            className="rounded-lg bg-coral px-3 py-2 text-sm font-bold text-ivory transition-opacity hover:opacity-90"
          >
            {copiedHeroTitle
              ? "Copied hero name settings!"
              : "Copy hero name settings"}
          </button>
        </div>
      </div>
    </div>
  );
}
