import { useState } from "react";

type Article = {
  title: string;
  file: string;
  type: "pdf" | "image";
  previewImage?: string;
  layout?: "portrait" | "landscape";
};

const pressFeatures: Article[] = [
  {
    title: "Press Feature — Island Life",
    file: "/images/IMG_7686.jpeg",
    type: "image",
    layout: "portrait",
  },
  {
    title: "Time for Pele\u2019s curse to take a rest — Star-Bulletin",
    file: "/images/Time for peles curse to take arest.jpeg",
    type: "image",
    layout: "portrait",
  },
  {
    title: "Powerstones — Island Life, November 1994",
    file: "/images/IMG_7210.jpg",
    type: "image",
    layout: "landscape",
  },
  {
    title: "Chicken Soup from the Soul of Hawai\u2018i — Star-Bulletin",
    file: "/images/cid_894AAA7A-8D08-4C13-B5BB-8100B15E57F6 (1).jpeg",
    type: "image",
    layout: "landscape",
  },
];

const portraitFeatures = pressFeatures.filter((a) => a.layout !== "landscape");
const landscapeFeatures = pressFeatures.filter((a) => a.layout === "landscape");

function MediaPreview({
  article,
  className = "",
  fit = "cover",
}: {
  article: Article;
  className?: string;
  fit?: "cover" | "contain";
}) {
  const [loaded, setLoaded] = useState(false);
  const objectFit = fit === "contain" ? "object-contain" : "object-cover";

  return (
    <div
      className={`relative overflow-hidden bg-ivory/95 rounded-xl ring-1 ring-ivory/20 ${className}`}
    >
      {!loaded && (
        <div className="absolute inset-0 z-10 flex items-center justify-center bg-navy-900/5">
          <div className="w-8 h-8 border-2 border-navy-800/15 border-t-gold/80 rounded-full animate-spin" />
        </div>
      )}
      {article.type === "image" || article.previewImage ? (
        <img
          src={article.type === "image" ? article.file : article.previewImage!}
          alt={article.title}
          className={`w-full h-full ${objectFit} object-top transition-opacity duration-500 ${loaded ? "opacity-100" : "opacity-0"}`}
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
          <div className="flex h-full min-h-[12rem] items-center justify-center p-6 text-center text-sm font-bold text-navy-800">
            PDF preview unavailable
          </div>
        </object>
      )}
    </div>
  );
}

function PressFeatureCard({
  article,
  index,
}: {
  article: Article;
  index: number;
}) {
  const cardClass = `fade-in fade-in-delay-${index + 1} overflow-hidden rounded-2xl bg-white/[0.06] border border-ivory/10 p-2 md:p-3`;

  if (article.layout === "landscape") {
    return (
      <figure className={cardClass}>
        <img
          src={article.file}
          alt={article.title}
          className="block w-full h-auto rounded-lg"
          loading="lazy"
        />
      </figure>
    );
  }

  return (
    <figure className={cardClass}>
      <div className="relative aspect-[3/4] w-full rounded-lg overflow-hidden">
        <MediaPreview article={article} className="absolute inset-0 h-full ring-0" />
      </div>
    </figure>
  );
}

export default function AlsoInThePressSection() {
  return (
    <div
      id="also-in-the-press"
      className="space-y-4 lg:space-y-5 pt-5 md:pt-6 border-t border-ivory/10"
    >
      <div className="border-b border-ivory/10 pb-3 text-center">
        <h4 className="site-subheading text-ivory">In the Media</h4>
      </div>

      <div className="grid md:grid-cols-2 gap-4 lg:gap-6">
        {portraitFeatures.map((article, i) => (
          <PressFeatureCard key={article.file} article={article} index={i} />
        ))}
      </div>

      <div className="space-y-4 lg:space-y-5">
        {landscapeFeatures.map((article, i) => (
          <PressFeatureCard
            key={article.file}
            article={article}
            index={portraitFeatures.length + i}
          />
        ))}
      </div>
    </div>
  );
}
