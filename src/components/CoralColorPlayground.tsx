import { useEffect, useState } from "react";

import {
  DEFAULT_CORAL,
  applyCoralTheme,
  getStoredCoralHex,
  storeCoralHex,
} from "../utils/coralTheme";

export default function CoralColorPlayground() {
  const [hex, setHex] = useState(DEFAULT_CORAL);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const stored = getStoredCoralHex();
    const initial = stored ?? DEFAULT_CORAL;
    setHex(initial);
    applyCoralTheme(initial);
  }, []);

  const handleColorChange = (value: string) => {
    setHex(value.toUpperCase());
    applyCoralTheme(value);
    storeCoralHex(value);
    setCopied(false);
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(hex);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  const handleReset = () => {
    handleColorChange(DEFAULT_CORAL);
  };

  return (
    <div className="bg-navy-900 text-ivory border-b border-ivory/10 px-4 py-3 md:px-6">
      <div className="max-w-6xl mx-auto space-y-3">
        <p className="text-sm md:text-base font-bold tracking-wide">
          Play test color website
        </p>

        <ol className="text-xs md:text-sm text-ivory/85 space-y-1 list-decimal list-inside">
          <li>Click the color swatch to open the color picker.</li>
          <li>
            Try different coral/orange shades — the site updates instantly.
          </li>
          <li>
            When you like a color, click <strong>Copy color code</strong> and send it to
            Jalen.
          </li>
        </ol>

        <div className="flex flex-wrap items-center gap-3 md:gap-4">
          <label className="inline-flex items-center gap-2 cursor-pointer">
            <span className="text-xs md:text-sm font-semibold uppercase tracking-wider text-ivory/70">
              Coral color
            </span>
            <input
              type="color"
              value={hex}
              onChange={(event) => handleColorChange(event.target.value)}
              className="h-10 w-14 cursor-pointer rounded border border-ivory/20 bg-transparent p-0.5"
              aria-label="Choose coral color"
            />
          </label>

          <code className="rounded bg-ivory/10 px-3 py-1.5 text-sm md:text-base font-bold tracking-wide">
            {hex}
          </code>

          <button
            type="button"
            onClick={handleCopy}
            className="rounded-lg bg-coral px-3 py-1.5 text-sm font-bold text-ivory transition-opacity hover:opacity-90"
          >
            {copied ? "Copied!" : "Copy color code"}
          </button>

          <button
            type="button"
            onClick={handleReset}
            className="text-xs md:text-sm font-semibold text-ivory/70 underline underline-offset-2 hover:text-ivory"
          >
            Reset to default
          </button>
        </div>
      </div>
    </div>
  );
}
