import { useState } from "react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

const articles = [
  {
    title: "Chasing The Light — Column I",
    file: "/images/Midweek 1.pdf",
    desc: "A weekly storytelling column featured in MidWeek, reaching families across the Hawaiian Islands.",
  },
  {
    title: "Chasing The Light — Column II",
    file: "/images/Midweek 2.pdf",
    desc: "Stories that uplift, inspire, and celebrate the quiet \u201cah-ha\u201d moments in human experience.",
  },
  {
    title: "Chasing The Light — Column III",
    file: "/images/Midweek 3.pdf",
    desc: "Seven years of illuminating narratives, touching nearly 300,000 families in Hawai\u2019i.",
  },
];

function PdfCard({
  article,
  index,
}: {
  article: (typeof articles)[0];
  index: number;
}) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className={`fade-in fade-in-delay-${index + 1} group relative h-full`}>
      {/* Gradient border glow on hover */}
      <div className="absolute -inset-px bg-gradient-to-br from-teal-600/20 via-gold/10 to-teal-600/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm" />

      <div className="relative bg-white rounded-3xl overflow-hidden shadow-sm border border-teal-800/5 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 h-full flex flex-col">
        {/* Top accent bar */}
        <div className="h-1 bg-gradient-to-r from-teal-800 via-teal-600 to-gold" />

        {/* PDF preview */}
        <div className="aspect-[3/4] bg-gradient-to-b from-teal-50 to-ivory relative">
          {!loaded && (
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 z-10">
              <div className="w-10 h-10 border-[3px] border-teal-800/10 border-t-teal-800/60 rounded-full animate-spin" />
              <p className="text-teal-700/40 text-sm font-medium">
                Loading preview&hellip;
              </p>
            </div>
          )}
          <object
            data={article.file}
            type="application/pdf"
            className={`w-full h-full transition-opacity duration-500 ${loaded ? "opacity-100" : "opacity-0"}`}
            onLoad={() => setLoaded(true)}
          >
            <div className="flex items-center justify-center h-full p-8 text-center">
              <div>
                <div className="w-20 h-20 rounded-2xl bg-teal-800/5 flex items-center justify-center mx-auto mb-5">
                  <svg
                    className="w-10 h-10 text-teal-800/25"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
                    />
                  </svg>
                </div>
                <p className="text-teal-700/40 text-sm mb-5">
                  PDF preview unavailable
                </p>
                <a
                  href={article.file}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-6 py-2.5 bg-teal-800 text-ivory rounded-xl font-semibold text-sm hover:bg-teal-700 transition-colors shadow-sm"
                >
                  View Article
                </a>
              </div>
            </div>
          </object>
        </div>

        {/* Card info */}
        <div className="p-7 flex flex-col flex-1">
          <div className="flex items-start justify-between gap-4 mb-3">
            <h3 className="text-lg font-bold text-teal-800">
              {article.title}
            </h3>
            <span className="shrink-0 text-xs font-bold tracking-wider uppercase text-gold bg-gold/10 px-2.5 py-1 rounded-full">
              PDF
            </span>
          </div>
          <p className="text-teal-700/55 text-sm leading-relaxed mb-5 flex-1">
            {article.desc}
          </p>
          <a
            href={article.file}
            target="_blank"
            rel="noopener noreferrer"
            className="group/link inline-flex items-center gap-2 text-teal-800 font-semibold text-sm hover:text-teal-600 transition-colors"
          >
            Open Full Article
            <svg
              className="w-4 h-4 transition-transform group-hover/link:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}

export default function Media() {
  useScrollAnimation();

  return (
    <>
      {/* Page header */}
      <section className="relative pt-16 pb-10 md:pt-24 md:pb-14 px-6 text-center overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-10 left-1/4 w-72 h-72 bg-teal-200/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-gold/5 rounded-full blur-3xl" />
        </div>
        <div className="relative fade-in">
          <p className="text-gold font-semibold tracking-[0.3em] uppercase text-xs mb-4 ornament-line">
            Press
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold gradient-text mb-4">
            Midweek News
          </h1>
          <p className="text-teal-700/60 text-lg max-w-xl mx-auto">
            Featured columns from Robin&rsquo;s weekly{" "}
            <em>Chasing The Light</em> series in MidWeek.
          </p>
        </div>
      </section>

      {/* Articles grid */}
      <section className="pb-20 md:pb-28 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article, i) => (
              <PdfCard key={i} article={article} index={i} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
