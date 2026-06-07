import { courtyardGalleryItems } from "../constants/courtyardQuotes";

export default function CourtyardQuotesGallery() {
  return (
    <div className="space-y-4 lg:space-y-5 pt-2 md:pt-3">
      {courtyardGalleryItems.map((item, index) => {
        if (item.kind === "text") {
          return (
            <div
              key={`text-${index}`}
              className="max-w-3xl md:max-w-4xl mx-auto rounded-2xl bg-white/[0.06] border border-ivory/10 p-4 md:p-5 text-center"
            >
              <p className="reading-text-on-dark-sm">{item.content}</p>
            </div>
          );
        }

        return (
          <figure
            key={item.src}
            className="overflow-hidden rounded-2xl bg-white/[0.06] border border-ivory/10 p-2 md:p-3 flex justify-center"
          >
            <img
              src={item.src}
              alt={item.alt}
              className="block w-full max-w-5xl h-auto rounded-lg"
              loading="lazy"
            />
          </figure>
        );
      })}
    </div>
  );
}
