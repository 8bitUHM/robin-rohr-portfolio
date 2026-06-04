import type { ReactNode } from "react";

type ThemeTopicCardProps = {
  label: string;
  titleLine1: string;
  titleLine2: string;
  children: ReactNode;
  className?: string;
  italicTitleLine2?: boolean;
  compactBodyTop?: boolean;
  compactBottom?: boolean;
};

export default function ThemeTopicCard({
  label,
  titleLine1,
  titleLine2,
  children,
  className = "",
  italicTitleLine2 = true,
  compactBodyTop = false,
  compactBottom = false,
}: ThemeTopicCardProps) {
  const cardPadding = compactBottom
    ? "pb-5 md:pb-6"
    : "pb-8 md:pb-10";

  return (
    <article className={`fade-in ${className}`.trim()}>
      <div
        className={`relative bg-white rounded-3xl px-8 pt-5 md:px-10 md:pt-7 shadow-sm border border-navy-800/5 overflow-hidden ${cardPadding}`}
      >
        <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-coral via-gold to-coral/50" />

        <header className="max-w-[72rem] mx-auto text-center">
          <p className="text-gold font-bold tracking-[0.2em] uppercase text-ui sm:text-ui-lg mb-3">
            {label}
          </p>
          <h2 className="site-heading text-coral leading-[1.12]">
            <span className="block">{titleLine1}</span>
            <span
              className={`block mt-1${italicTitleLine2 ? " italic" : ""}`}
            >
              {titleLine2}
            </span>
          </h2>
          <div
            className={`mx-auto mt-6 w-20 h-1 rounded-full bg-gradient-to-r from-coral to-gold ${
              compactBodyTop ? "mb-4" : "mb-8"
            }`}
            aria-hidden
          />
        </header>

        <div className="max-w-[72rem] mx-auto">{children}</div>
      </div>
    </article>
  );
}
