export type CourtyardQuote = {
  src: string;
  alt: string;
  layout: "landscape" | "portrait";
};

export type CourtyardGalleryItem =
  | ({ kind: "image" } & CourtyardQuote)
  | {
      kind: "text";
      paragraphs: Array<{ text: string; italic?: boolean }>;
    };

/** Cropped signage from Power to Choose Courtyard PDFs — order matches display. */
export const courtyardGalleryItems: CourtyardGalleryItem[] = [
  {
    kind: "image",
    src: "/images/courtyard-quotes/01-welcome-sign.jpg",
    alt: "Power to Choose Courtyard welcome sign at James Campbell High School",
    layout: "landscape",
  },
  {
    kind: "image",
    src: "/images/courtyard-quotes/02-be-the-change.jpg",
    alt: "Be the change you wish to see in the world — Mahatma Gandhi",
    layout: "landscape",
  },
  {
    kind: "image",
    src: "/images/courtyard-quotes/03-power-to-choose-courtyard.jpg",
    alt: "The Power to Choose Courtyard — a garden of ideas to work hard and dream big",
    layout: "landscape",
  },
  {
    kind: "image",
    src: "/images/courtyard-quotes/04-imagine-choices.jpg",
    alt: "Imagine how your choices, education, hard work and aloha could make a difference",
    layout: "landscape",
  },
  {
    kind: "text",
    paragraphs: [
      {
        text: "Lives that have been reshaped by positivity.",
        italic: true,
      },
      {
        text: "Utilizing large metallic signage boards, the 80 aspirational quotes in the Courtyard have influenced and transformed many lives.",
      },
    ],
  },
  {
    kind: "image",
    src: "/images/courtyard-quotes/05-steve-jobs.jpg",
    alt: "Go to bed at night knowing that you have done something wonderful — Steve Jobs",
    layout: "landscape",
  },
  {
    kind: "image",
    src: "/images/courtyard-quotes/06-walt-disney.jpg",
    alt: "You're braver than you believe, stronger than you seem, and smarter than you think — Walt Disney",
    layout: "landscape",
  },
  {
    kind: "image",
    src: "/images/courtyard-quotes/07-colin-powell.jpg",
    alt: "Always show more kindness than seems necessary — Colin Powell",
    layout: "landscape",
  },
  {
    kind: "image",
    src: "/images/courtyard-quotes/08-michael-jordan-shots.jpg",
    alt: "I missed more than 9,000 shots in my career — Michael Jordan",
    layout: "landscape",
  },
  {
    kind: "image",
    src: "/images/courtyard-quotes/09-muhammad-ali.jpg",
    alt: "Don't quit. Suffer now and live the rest of your life as a champion — Muhammad Ali",
    layout: "landscape",
  },
  {
    kind: "image",
    src: "/images/courtyard-quotes/10-ll-cool-j.jpg",
    alt: "When you move past your fear and go after your dreams wholeheartedly — LL Cool J",
    layout: "landscape",
  },
  {
    kind: "image",
    src: "/images/courtyard-quotes/11-hero.jpg",
    alt: "Hero — a person of courage, perseverance, and integrity",
    layout: "landscape",
  },
  {
    kind: "image",
    src: "/images/courtyard-quotes/12-martin-luther-king.jpg",
    alt: "Everyone can be great, because everyone can serve and help others — Martin Luther King Jr.",
    layout: "landscape",
  },
  {
    kind: "image",
    src: "/images/courtyard-quotes/13-family.jpg",
    alt: "Family means no one gets left behind or forgotten",
    layout: "landscape",
  },
  {
    kind: "image",
    src: "/images/courtyard-quotes/14-be-the-change-students.jpg",
    alt: "If you could change one thing about the world, what would it be? BE THE CHANGE!",
    layout: "landscape",
  },
];

/** @deprecated Use courtyardGalleryItems — image entries only */
export const courtyardQuotes: CourtyardQuote[] = courtyardGalleryItems.filter(
  (item): item is { kind: "image" } & CourtyardQuote => item.kind === "image",
);
