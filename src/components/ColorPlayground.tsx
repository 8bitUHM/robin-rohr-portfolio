import { useEffect, useState } from "react";

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

export default function ColorPlayground() {
  const [coralHex, setCoralHex] = useState(DEFAULT_CORAL);
  const [goldHex, setGoldHex] = useState(DEFAULT_GOLD);
  const [copiedCoral, setCopiedCoral] = useState(false);
  const [copiedGold, setCopiedGold] = useState(false);

  useEffect(() => {
    const storedCoral = getStoredCoralHex();
    const initialCoral = storedCoral ?? DEFAULT_CORAL;
    setCoralHex(initialCoral);
    applyCoralTheme(initialCoral);

    const storedGold = getStoredGoldHex();
    const initialGold = storedGold ?? DEFAULT_GOLD;
    setGoldHex(initialGold);
    applyGoldTheme(initialGold);
  }, []);

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
            When you like a color, click <strong>Copy color code</strong> and
            send it to Jalen.
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
      </div>
    </div>
  );
}
