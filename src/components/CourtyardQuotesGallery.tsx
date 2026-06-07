import { courtyardGalleryItems } from "../constants/courtyardQuotes";

export default function CourtyardQuotesGallery() {
  return (
    <div className="space-y-4 lg:space-y-5 pt-2 md:pt-3">
      {courtyardGalleryItems.map((item, index) => {
        if (item.kind === "text") {
          return (
            <p
              key={`text-${index}`}
              className="reading-text-on-dark text-center max-w-3xl md:max-w-4xl mx-auto px-2"
            >
              {item.content}
            </p>
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
