import { useState } from "react";

type Article = {
  title: string;
  file: string;
  desc: string;
  type: "pdf" | "image";
};

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

export default function AlsoInThePressSection() {
  return (
    <div
      id="also-in-the-press"
      className="space-y-6 lg:space-y-8 pt-10 md:pt-12 border-t border-ivory/10"
    >
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
  );
}
