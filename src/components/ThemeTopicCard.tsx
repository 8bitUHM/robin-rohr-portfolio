import type { ReactNode } from "react";

type ThemeTopicCardProps = {
  label: string;
  titleLine1: string;
  titleLine2: string;
  children: ReactNode;
  className?: string;
};

export default function ThemeTopicCard({
  label,
  titleLine1,
  titleLine2,
  children,
  className = "",
}: ThemeTopicCardProps) {
  return (
    <article className={`fade-in ${className}`.trim()}>
      <div className="relative bg-white rounded-3xl p-8 md:p-10 shadow-sm border border-navy-800/5 overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-coral via-gold to-coral/50" />

        <header className="max-w-3xl mx-auto text-center pt-1">
          <p className="text-gold font-bold tracking-[0.2em] uppercase text-xs sm:text-sm mb-4">
            {label}
          </p>
          <h2 className="site-heading text-coral leading-[1.12]">
            <span className="block">{titleLine1}</span>
            <span className="block italic mt-1">{titleLine2}</span>
          </h2>
          <div
            className="mx-auto mt-6 mb-8 w-20 h-1 rounded-full bg-gradient-to-r from-coral to-gold"
            aria-hidden
          />
        </header>

        <div className="max-w-3xl mx-auto">{children}</div>
      </div>
    </article>
  );
}
