import { useState } from "react";

type Article = {
  title: string;
  file: string;
  type: "pdf" | "image";
  previewImage?: string;
  orientation: "portrait" | "landscape";
};

const leadingPressImages: Article[] = [
  {
    title: "MidWeek cover — Chicken Soup Local Style, April 9, 2003",
    file: "/images/press/midweek-chicken-soup-cover.jpg",
    type: "image",
    orientation: "portrait",
  },
  {
    title: "MidWeek cover story — Chicken Soup Goes Hawaiian, page 40",
    file: "/images/press/midweek-chicken-soup-page-40.jpeg",
    type: "image",
    orientation: "landscape",
  },
  {
    title: "MidWeek — Hawaii\u2019s Message For The World, page 71",
    file: "/images/press/midweek-chicken-soup-page-71.jpeg",
    type: "image",
    orientation: "landscape",
  },
  {
    title: "The Honolulu Advertiser Island Life — Local kine soup from the Hawaiian soul",
    file: "/images/press/island-life-feature.jpeg",
    type: "image",
    orientation: "landscape",
  },
  {
    title: "The Honolulu Advertiser Island Life — Soul: A distinctly local approach, page 2",
    file: "/images/press/island-life-soul-page-2.jpeg",
    type: "image",
    orientation: "landscape",
  },
];

const pressFeatures: Article[] = [
  {
    title: "Time for Pele\u2019s curse to take a rest — Star-Bulletin",
    file: "/images/press/powerstones-peles-curse-star-bulletin.jpeg",
    type: "image",
    orientation: "portrait",
  },
  {
    title: "Powerstones — Island Life, November 1994",
    file: "/images/press/powerstones-island-life-1994.jpg",
    type: "image",
    orientation: "landscape",
  },
  {
    title: "Chicken Soup from the Soul of Hawai\u2018i — Star-Bulletin",
    file: "/images/press/chicken-soup-star-bulletin.jpeg",
    type: "image",
    orientation: "landscape",
  },
];

const PRESS_ROW_WIDTH =
  "w-full max-w-[min(100%,56rem)] lg:max-w-[min(100%,64rem)] mx-auto";

function MediaPreview({ article }: { article: Article }) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="relative overflow-hidden bg-ivory/95 rounded-lg ring-1 ring-ivory/20">
      {!loaded && (
        <div className="absolute inset-0 z-10 flex items-center justify-center bg-navy-900/5 min-h-[10rem]">
          <div className="w-8 h-8 border-2 border-navy-800/15 border-t-gold/80 rounded-full animate-spin" />
        </div>
      )}
      <img
        src={article.file}
        alt={article.title}
        className={`block w-full h-auto transition-opacity duration-500 ${loaded ? "opacity-100" : "opacity-0"}`}
        loading="lazy"
        onLoad={() => setLoaded(true)}
      />
    </div>
  );
}

function PressCard({
  article,
  index,
}: {
  article: Article;
  index: number;
}) {
  return (
    <figure
      className={`fade-in fade-in-delay-${Math.min(index + 1, 6)} overflow-hidden rounded-xl bg-white/[0.06] border border-ivory/10 p-2 md:p-2.5 h-full`}
    >
      <MediaPreview article={article} />
    </figure>
  );
}

function chunkPairs(items: Article[]): Article[][] {
  const rows: Article[][] = [];
  for (let i = 0; i < items.length; i += 2) {
    rows.push(items.slice(i, i + 2));
  }
  return rows;
}

function PressPairRow({
  row,
  startIndex,
}: {
  row: Article[];
  startIndex: number;
}) {
  const isPair = row.length === 2;

  return (
    <div
      className={`${PRESS_ROW_WIDTH} ${
        isPair
          ? "grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4 items-start"
          : "w-full"
      }`}
    >
      {row.map((article, columnIndex) => {
        const index = startIndex + columnIndex;
        return (
          <div key={article.file} className={isPair ? "min-w-0" : "w-full"}>
            <PressCard article={article} index={index} />
          </div>
        );
      })}
    </div>
  );
}

export default function AlsoInThePressSection() {
  const allPress = [...leadingPressImages, ...pressFeatures];
  const portraits = allPress.filter((item) => item.orientation === "portrait");
  const leadingLandscapes = leadingPressImages.filter(
    (item) => item.orientation === "landscape",
  );
  const trailingLandscapes = pressFeatures.filter(
    (item) => item.orientation === "landscape",
  );
  const portraitRows = chunkPairs(portraits);
  const landscapeRows = [
    ...chunkPairs(leadingLandscapes),
    ...trailingLandscapes.map((item) => [item]),
  ];

  let itemIndex = 0;

  return (
    <div
      id="also-in-the-press"
      className="space-y-3 md:space-y-4 pt-5 md:pt-6 border-t border-ivory/10"
    >
      <div className="border-b border-ivory/10 pb-2 md:pb-3 text-center">
        <h4 className="site-subheading text-ivory">In the Media</h4>
      </div>

      <div className="space-y-3 md:space-y-4">
        {portraitRows.map((row, rowIndex) => {
          const startIndex = itemIndex;
          itemIndex += row.length;
          return (
            <PressPairRow
              key={`portrait-row-${rowIndex}`}
              row={row}
              startIndex={startIndex}
            />
          );
        })}

        {landscapeRows.map((row, rowIndex) => {
          const startIndex = itemIndex;
          itemIndex += row.length;
          return (
            <PressPairRow
              key={`landscape-row-${rowIndex}`}
              row={row}
              startIndex={startIndex}
            />
          );
        })}
      </div>
    </div>
  );
}
