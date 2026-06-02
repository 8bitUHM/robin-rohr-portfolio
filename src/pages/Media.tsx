import { useState } from "react";

type Article = {
  title: string;
  file: string;
  desc: string;
  type: "pdf" | "image";
};

const articles: Article[] = [
  {
    title: "Chasing The Light — Column I",
    file: "/images/Midweek 1.pdf",
    type: "pdf",
    desc: "A weekly storytelling column featured in MidWeek, reaching families across the Hawaiian Islands.",
  },
  {
    title: "Chasing The Light — Column II",
    file: "/images/Midweek 2.pdf",
    type: "pdf",
    desc: "Stories that uplift, inspire, and celebrate the quiet \u201cah-ha\u201d moments in human experience.",
  },
  {
    title: "Chasing The Light — Column III",
    file: "/images/Midweek 3.pdf",
    type: "pdf",
    desc: "Seven years of illuminating narratives, touching families across Hawai\u02BBi.",
  },
  {
    title: "Powerstones — Honolulu Advertiser",
    file: "/images/IMG_7210.jpg",
    type: "image",
    desc: "\u2018Powerstones\u2019 unearths the myth behind \u2018Pele\u2019s Curse\u2019 \u2014 Island Life feature by Bob Krauss, November 22, 1994.",
  },
  {
    title: "Press Feature — Island Life",
    file: "/images/SKM_550i26040917160.pdf",
    type: "pdf",
    desc: "Featured press coverage from Robin\u2019s work in Hawaiian storytelling and publishing.",
  },
];

function ArticleCard({
  article,
  index,
}: {
  article: Article;
  index: number;
}) {
  const [loaded, setLoaded] = useState(false);
  const badge = article.type === "pdf" ? "PDF" : "Photo";

  return (
    <div className={`fade-in fade-in-delay-${index + 1} group relative h-full`}>
      <div className="absolute -inset-px bg-gradient-to-br from-navy-600/20 via-gold/10 to-navy-600/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm" />

      <div className="relative bg-white rounded-3xl overflow-hidden shadow-sm border border-navy-800/5 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 h-full flex flex-col">
        <div className="h-1 bg-gradient-to-r from-navy-800 via-navy-600 to-gold" />

        <div className="aspect-[3/4] bg-gradient-to-b from-navy-50 to-ivory relative overflow-hidden">
          {!loaded && (
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 z-10">
              <div className="w-10 h-10 border-[3px] border-navy-800/10 border-t-navy-800/60 rounded-full animate-spin" />
              <p className="text-navy-700/70 text-base font-medium">
                Loading preview&hellip;
              </p>
            </div>
          )}

          {article.type === "image" ? (
            <img
              src={article.file}
              alt={article.title}
              className={`w-full h-full object-cover object-top transition-opacity duration-500 ${loaded ? "opacity-100" : "opacity-0"}`}
              onLoad={() => setLoaded(true)}
            />
          ) : (
            <object
              data={article.file}
              type="application/pdf"
              className={`w-full h-full transition-opacity duration-500 ${loaded ? "opacity-100" : "opacity-0"}`}
              onLoad={() => setLoaded(true)}
            >
              <div className="flex items-center justify-center h-full p-8 text-center">
                <div>
                  <div className="w-20 h-20 rounded-2xl bg-navy-800/5 flex items-center justify-center mx-auto mb-5">
                    <svg
                      className="w-10 h-10 text-navy-800/25"
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
                  <p className="text-navy-700/70 text-base mb-5">
                    PDF preview unavailable
                  </p>
                  <a
                    href={article.file}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-6 py-3 bg-navy-800 text-ivory rounded-xl font-semibold text-base hover:bg-navy-700 transition-colors shadow-sm"
                  >
                    View Article
                  </a>
                </div>
              </div>
            </object>
          )}
        </div>

        <div className="p-7 flex flex-col flex-1">
          <div className="flex items-start justify-between gap-4 mb-3">
            <h3 className="media-card-title">
              {article.title}
            </h3>
            <span className="shrink-0 text-sm font-bold tracking-wider uppercase text-gold bg-gold/10 px-3 py-1 rounded-full">
              {badge}
            </span>
          </div>
          <p className="media-card-body mb-5 flex-1">
            {article.desc}
          </p>
          <a
            href={article.file}
            target="_blank"
            rel="noopener noreferrer"
            className="group/link inline-flex items-center gap-2 text-navy-800 font-bold media-card-body hover:text-navy-600 transition-colors"
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
  return (
    <section
      id="press"
      className="relative site-section-y px-6 bg-navy-900 overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-20 -right-20 w-80 h-80 bg-gold/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-navy-400/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto relative site-section-stack">
        <div className="fade-in text-center">
          <h2 className="site-heading text-ivory mb-4">
            In the Media
          </h2>
          <p className="reading-text-on-dark max-w-2xl mx-auto">
            Featured video and columns from Robin&rsquo;s work in storytelling,
            healing, and community.
          </p>
        </div>

        <div className="fade-in fade-in-delay-1">
          <h3 className="site-subheading text-ivory mb-3 text-center">
            The Power to Choose Courtyard
          </h3>
          <p className="reading-text-on-dark max-w-xl mx-auto text-center mb-6">
            A courtyard transformed into an inspirational gathering place for
            students at Campbell High School &mdash; built on the philosophy of
            Attitudinal Healing.
          </p>
          <div className="relative max-w-4xl mx-auto">
            <div className="absolute -inset-3 bg-gradient-to-br from-gold/20 via-navy-400/10 to-gold/20 rounded-3xl blur-sm" />
            <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl ring-1 ring-white/10">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/q_5G2uiu6TM"
                title="Robin Stephens Rohr — The Power to Choose Courtyard"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>

        <div>
          <h3 className="site-subheading text-ivory mb-2 text-center fade-in">
            Chasing The Light
          </h3>
          <p className="reading-text-on-dark text-center mb-6 max-w-xl mx-auto fade-in">
            Weekly columns and press features from MidWeek and Island Life
            across the Hawaiian Islands.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article, i) => (
              <ArticleCard key={article.file} article={article} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
