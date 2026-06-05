import { useState } from "react";

type Article = {
  title: string;
  file: string;
  desc: string;
  type: "pdf" | "image";
};

const columns: Article[] = [
  {
    title: "Column I",
    file: "/images/Midweek 1.pdf",
    type: "pdf",
    desc: "Opening stories from the MidWeek series—uplifting families across the Islands.",
  },
  {
    title: "Column II",
    file: "/images/Midweek 2.pdf",
    type: "pdf",
    desc: "Celebrating quiet \u201cah-ha\u201d moments and the wisdom they reveal.",
  },
  {
    title: "Column III",
    file: "/images/Midweek 3.pdf",
    type: "pdf",
    desc: "Seven years of narratives touching readers across Hawai\u02BBi.",
  },
];

const pressFeatures: Article[] = [
  {
    title: "Powerstones — Honolulu Advertiser",
    file: "/images/IMG_7210.jpg",
    type: "image",
    desc: "Island Life feature by Bob Krauss on the myth behind \u2018Pele\u2019s Curse,\u201d November 1994.",
  },
  {
    title: "Press Feature — Island Life",
    file: "/images/SKM_550i26040917160.pdf",
    type: "pdf",
    desc: "Coverage of Robin\u2019s work in Hawaiian storytelling and publishing.",
  },
];

function MediaPreview({
  article,
  className = "",
}: {
  article: Article;
  className?: string;
}) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div
      className={`relative overflow-hidden bg-ivory/95 rounded-xl ring-1 ring-ivory/20 ${className}`}
    >
      {!loaded && (
        <div className="absolute inset-0 z-10 flex items-center justify-center bg-navy-900/5">
          <div className="w-8 h-8 border-2 border-navy-800/15 border-t-gold/80 rounded-full animate-spin" />
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
          aria-label={article.title}
        >
          <div className="flex h-full min-h-[12rem] items-center justify-center p-6 text-center">
            <a
              href={article.file}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-bold text-navy-800 hover:text-coral"
            >
              View PDF
            </a>
          </div>
        </object>
      )}
    </div>
  );
}

function ColumnArchiveCard({ article, index }: { article: Article; index: number }) {
  return (
    <a
      href={article.file}
      target="_blank"
      rel="noopener noreferrer"
      className={`fade-in fade-in-delay-${index + 1} group flex h-full flex-col overflow-hidden rounded-2xl bg-white/[0.07] border border-ivory/10 hover:border-gold/40 hover:bg-white/[0.1] transition-all duration-300`}
    >
      <div className="aspect-[4/3] relative shrink-0">
        <MediaPreview article={article} className="absolute inset-0 rounded-none ring-0" />
        <div className="absolute top-3 right-3 rounded-full bg-navy-900/80 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-gold">
          PDF
        </div>
      </div>
      <div className="flex flex-1 flex-col p-4 md:p-5">
        <p className="text-gold text-ui font-bold uppercase tracking-[0.15em] mb-1">
          Chasing the Light
        </p>
        <h4 className="text-ivory font-bold text-base lg:text-lg leading-snug mb-2 group-hover:text-gold transition-colors">
          {article.title}
        </h4>
        <p className="text-ivory/70 text-sm font-bold leading-snug flex-1">
          {article.desc}
        </p>
        <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-bold text-coral group-hover:gap-2.5 transition-all">
          Read column
          <span aria-hidden>&rarr;</span>
        </span>
      </div>
    </a>
  );
}

function PressFeatureCard({ article, index }: { article: Article; index: number }) {
  const badge = article.type === "pdf" ? "PDF" : "Photo";

  return (
    <a
      href={article.file}
      target="_blank"
      rel="noopener noreferrer"
      className={`fade-in fade-in-delay-${index + 1} group flex h-full gap-4 lg:gap-6 overflow-hidden rounded-2xl bg-white/[0.06] border border-ivory/10 p-4 md:p-5 lg:p-6 hover:border-gold/30 transition-all duration-300`}
    >
      <div className="w-28 sm:w-32 lg:w-36 shrink-0 aspect-[3/4] relative rounded-lg overflow-hidden">
        <MediaPreview article={article} className="absolute inset-0 h-full ring-0" />
      </div>
      <div className="min-w-0 flex flex-col justify-center py-1">
        <span className="text-[10px] font-bold uppercase tracking-wider text-gold mb-2">
          {badge}
        </span>
        <h4 className="text-ivory font-bold text-base lg:text-lg leading-snug mb-2 group-hover:text-gold transition-colors">
          {article.title}
        </h4>
        <p className="text-ivory/70 text-sm lg:text-base font-bold leading-snug">
          {article.desc}
        </p>
      </div>
    </a>
  );
}

export default function ChasingTheLightSection() {
  const featuredColumn = columns[0];

  return (
    <div
      id="chasing-the-light"
      className="fade-in fade-in-delay-2 relative pt-10 md:pt-12 border-t border-ivory/10"
    >
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent" />

      <div className="relative rounded-3xl bg-gradient-to-b from-white/[0.08] to-white/[0.03] border border-ivory/10 shadow-[0_24px_60px_-20px_rgba(0,0,0,0.45)] overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-gold-dark via-gold to-coral/80" />

        <div className="px-6 py-10 md:px-10 md:py-12 lg:px-12 lg:py-14 xl:px-16 space-y-10 lg:space-y-14">
          <header className="text-center max-w-3xl mx-auto space-y-4">
            <p className="text-gold font-bold tracking-[0.25em] uppercase text-ui sm:text-ui-lg">
              Weekly storytelling column
            </p>
            <h3 className="site-heading text-gold leading-tight">Chasing the Light</h3>
            <div className="mx-auto flex items-center justify-center gap-3 pt-1">
              <span className="h-px w-12 sm:w-20 bg-gradient-to-r from-transparent to-gold/60" />
              <span className="w-1.5 h-1.5 rounded-full bg-gold" />
              <span className="h-px w-12 sm:w-20 bg-gradient-to-l from-transparent to-gold/60" />
            </div>
          </header>

          <div className="lg:grid lg:grid-cols-[minmax(0,1.15fr)_minmax(300px,0.85fr)] lg:gap-12 xl:gap-16 lg:items-start">
            <div className="space-y-4 text-center lg:text-left max-w-4xl mx-auto lg:mx-0">
              <p className="reading-text-on-dark">
                A weekly storytelling column reaching over 285,000 families across
                the Hawaiian Islands. For over seven years, its readership has
                been entertained and uplifted by these aspirational stories.
              </p>
              <p className="reading-text-on-dark">
                <span className="text-gold font-bold">
                  Chasing the Light
                </span>{" "}
                stories shine a beacon on the &lsquo;ah ha&rsquo; moments of our
                lives, moments that give insights and new perspectives as we
                navigate this human experience.
              </p>
              <p className="reading-text-on-dark">
                These teachable moments can help us build courage and resilience
                as we navigate life&rsquo;s inevitable storms.
              </p>
              <p className="reading-text-on-dark">
                They can also serve as an inspiration to help illuminate and
                guide us on the path of change in these uncertain times.
              </p>
              <p className="reading-text-on-dark">
                These tales, some catapulting us into awe and wonder, some
                shimmering in joy and hilarity, and others encouraging us to face
                our resistance to forgiveness and to embrace compassion, have been
                created to help us find our True North once again.
              </p>
            </div>

            <aside className="mt-8 lg:mt-0 lg:sticky lg:top-8 space-y-4">
              <p className="text-ui font-bold uppercase tracking-[0.2em] text-ivory/60 text-center lg:text-left">
                Featured column
              </p>
              <div className="relative max-w-sm mx-auto lg:max-w-none w-full">
                <div className="absolute -inset-2 bg-gradient-to-br from-gold/25 via-transparent to-coral/20 rounded-2xl blur-md opacity-80" />
                <div className="relative rounded-2xl overflow-hidden ring-1 ring-ivory/20 shadow-xl flex flex-col">
                  <div className="aspect-[3/4] lg:aspect-[4/5] w-full">
                    <MediaPreview article={featuredColumn} className="h-full min-h-[14rem]" />
                  </div>
                  <div className="bg-navy-900/90 px-5 py-4 lg:px-6 lg:py-5 border-t border-ivory/10">
                    <p className="text-gold text-ui font-bold uppercase tracking-wider mb-1">
                      {featuredColumn.title}
                    </p>
                    <p className="text-ivory/80 text-sm lg:text-base font-bold leading-snug mb-3">
                      {featuredColumn.desc}
                    </p>
                    <a
                      href={featuredColumn.file}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-bold text-coral hover:text-gold transition-colors"
                    >
                      Open full column
                      <span aria-hidden>&rarr;</span>
                    </a>
                  </div>
                </div>
              </div>
            </aside>
          </div>

          <div className="space-y-6 lg:space-y-8">
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-2 border-b border-ivory/10 pb-4">
              <div>
                <h4 className="site-subheading text-ivory">From the archive</h4>
                <p className="text-ivory/65 text-ui font-bold uppercase tracking-wider mt-1">
                  Three columns from the series
                </p>
              </div>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
              {columns.map((article, i) => (
                <ColumnArchiveCard key={article.file} article={article} index={i} />
              ))}
            </div>
          </div>

          <div className="space-y-6 lg:space-y-8 pt-2 lg:pt-4 border-t border-ivory/10">
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-2 border-b border-ivory/10 pb-4">
              <div>
                <h4 className="site-subheading text-ivory">Also in the press</h4>
                <p className="text-ivory/65 text-ui font-bold uppercase tracking-wider mt-1">
                  Island Life &amp; Honolulu Advertiser
                </p>
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-5 lg:gap-8">
              {pressFeatures.map((article, i) => (
                <PressFeatureCard key={article.file} article={article} index={i} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
