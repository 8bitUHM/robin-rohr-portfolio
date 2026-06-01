import { useState } from "react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import SectionDivider, { SECTION_COLORS } from "../components/SectionDivider";
import ThemeTopicCard from "../components/ThemeTopicCard";
import Media from "./Media";

const testimonials = [
  {
    quote:
      "If everyone who has ever been loved, guided or healed by a kupuna of these Islands, lit one candle in tribute to these wise and gracious Elders at midnight, the Islands would look like they were drenched in the blazingly noonday sun.",
    author: "Kupuna, Jon DeFries",
  },
  {
    quote:
      "This is a collection of powerful mini Band-Aids for the heart and mind, prescribed for any mood or mishap because if one place on earth inspires the deepest wisdom and spiritual medicines pertinent to our human condition, it is Hawai\u2019i.",
    author: "Edgy Lee, author & filmmaker",
  },
  {
    quote:
      "Aloha is the ability to put yourself in the mind, heart, and soul of another. These priceless stories from our kupuna, speak of courage, adventure, forgiveness, and compassion that take us on a journey of understanding.",
    author: "Kenneth F. Brown, A \u201cLiving Treasure of Hawai\u2019i.\u201d",
  },
];

function StatBlock({
  value,
  label,
  showDivider = true,
  align = "left",
}: {
  value: string;
  label: string;
  showDivider?: boolean;
  align?: "left" | "right";
}) {
  return (
    <div
      className={`${showDivider ? "pt-5 border-t border-navy-800/5" : ""} ${align === "right" ? "text-right" : ""}`}
    >
      <span className="text-5xl md:text-6xl font-bold text-navy-800">{value}</span>
      <span className="block text-base sm:text-lg text-navy-700/75 font-bold tracking-wider uppercase mt-1">
        {label}
      </span>
    </div>
  );
}

export default function Home() {
  const [imgLoaded, setImgLoaded] = useState(false);
  const [imgSrc, setImgSrc] = useState("/images/headshot.jpg");
  useScrollAnimation();

  return (
    <>
      {/* Hero */}
      <section className="relative pt-28 pb-0 md:pt-36 md:pb-2 px-6 overflow-hidden bg-ivory">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-1/4 w-72 h-72 bg-navy-200/10 rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-navy-800/[0.03] rounded-full" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-gold/[0.04] rounded-full" />
        </div>

        <div className="max-w-6xl mx-auto relative">
          <div className="text-center mb-16 md:mb-20">
            <p className="text-gold font-semibold tracking-[0.2em] min-[400px]:tracking-[0.3em] uppercase text-xs min-[400px]:text-sm sm:text-base mb-6 fade-in ornament-line whitespace-nowrap">
              Author &middot; Journalist &middot; Advocate
            </p>
            <h1 className="text-3xl min-[400px]:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-[1.05] fade-in fade-in-delay-1 whitespace-nowrap">
              <span className="gradient-text">Robin Stephens</span>{" "}
              <span className="text-navy-800">Rohr</span>
            </h1>
            <blockquote className="fade-in fade-in-delay-2 relative text-[1.15rem] min-[400px]:text-[1.35rem] sm:text-[1.65rem] md:text-[2.05rem] lg:text-[2.5rem] text-coral italic font-bold leading-snug mx-auto px-4 sm:px-6">
              <p className="flex flex-col items-center">
                <span className="whitespace-nowrap">
                  <span
                    aria-hidden="true"
                    className="text-[1.4em] text-gold opacity-50 font-serif leading-none inline-block align-[-0.1em] mr-1 sm:mr-2 select-none"
                  >
                    &ldquo;
                  </span>
                  There is only one thing in life,
                </span>
                <span className="whitespace-nowrap">
                  and that is the continual renewal
                </span>
                <span className="whitespace-nowrap">
                  of inspiration... and creativity.
                  <span
                    aria-hidden="true"
                    className="text-[1.4em] text-gold opacity-50 font-serif leading-none inline-block align-[-0.1em] ml-1 sm:ml-2 select-none"
                  >
                    &rdquo;
                  </span>
                </span>
              </p>
            </blockquote>
          </div>
        </div>

        <div className="relative w-full md:pl-6 lg:pl-10 md:pr-6 lg:pr-10">
          <div className="grid md:grid-cols-[minmax(0,calc(32rem*0.765))_minmax(0,1fr)] lg:grid-cols-[minmax(0,calc(36rem*0.765))_minmax(0,1.35fr)] gap-12 md:gap-10 items-start fade-in fade-in-delay-3 w-full">
            <div className="relative w-full max-w-md mx-auto md:mx-0 md:max-w-none">
              <div className="absolute -inset-3 bg-gradient-to-br from-navy-600/20 via-gold/10 to-navy-800/20 rounded-3xl blur-sm" />
              <div className="relative rounded-2xl overflow-hidden shadow-xl ring-1 ring-navy-800/10 bg-navy-50 aspect-[3/5] w-full">
                {!imgLoaded && (
                  <div className="absolute inset-0 flex items-center justify-center z-10">
                    <div className="w-10 h-10 border-[3px] border-navy-800/10 border-t-navy-800/60 rounded-full animate-spin" />
                  </div>
                )}
                <img
                  src={imgSrc}
                  alt="Robin Stephens Rohr"
                  className={`w-full h-full object-cover object-top transition-opacity duration-500 ${imgLoaded ? "opacity-100" : "opacity-0"}`}
                  onLoad={() => setImgLoaded(true)}
                  onError={() => {
                    if (imgSrc !== "/images/headshot.svg") {
                      setImgSrc("/images/headshot.svg");
                      setImgLoaded(false);
                    }
                  }}
                />
              </div>
            </div>

            <div className="text-left min-w-0 space-y-3 md:space-y-3">
              <h2 className="site-heading text-coral mb-4 md:mb-6">
                My Journey
              </h2>
              <p className="reading-text-narrative">
                The quest to alleviate human suffering in
                its many forms has driven my sense of mission for a
                lifetime. {" "}
                <br className="hidden lg:block" />
                The potential of the human being to evolve and to
                heal is far vaster than ever imagined. Collecting the wisdom
                filled stories of Elders from many cultures and exploring the modalities of
                Integrative Medicine, have been a gift for me, and have helped so
                many others reclaim their lives.
              </p>
              <div className="bg-navy-50/80 rounded-2xl p-4 border border-navy-800/5 border-l-4 border-l-coral">
                <p className="reading-text-narrative-muted italic">
                  As strange as it seems, there is a commonality between
                  collecting the stories of Elder wisdom and pursuing the
                  possibilities that Integrative Medicine presents to us. It
                  seems that these two divergent paths do not have much in
                  common, and yet they both have a mission.
                </p>
                <p className="reading-text-narrative text-navy-800 mt-2">
                  I have found that the tools of Integrative Medicine and the
                  gifts of elder wisdom have a common goal.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SectionDivider
        from={SECTION_COLORS.ivory}
        to={SECTION_COLORS.navy50}
        wave="gentle"
        className="h-6 md:h-8"
      />

      {/* Theme sections */}
      <section className="bg-navy-50 pt-3 pb-6 md:pt-4 md:pb-8 px-6">
        <div className="max-w-5xl mx-auto space-y-8 md:space-y-10">
          <ThemeTopicCard
            label="Elder wisdom"
            titleLine1="The Wisdom of our Elders:"
            titleLine2="The ‘Power of Story’ to Guide and to Heal."
          >
            <div className="space-y-5">
              <p className="reading-text">
                The nervous system can respond to stories as real experiences,
                and they can be transformative to our health and well-being.
                There is impressive research from neuroscience and narrative
                medicine, suggesting that meaningful, wisdom-filled stories
                &mdash; can positively affect the mind and have a profound and
                beneficial impact on our human biology.
              </p>
            </div>
          </ThemeTopicCard>

          <ThemeTopicCard
            className="fade-in-delay-1"
            label="Integrative health"
            titleLine1="Integrative Medicine: Ushering in"
            titleLine2="A New Age of Possibilities"
          >
            <p className="reading-text-muted italic text-center">
              Content coming soon.
            </p>
          </ThemeTopicCard>
        </div>
      </section>

      {/* Work layout */}
      <section className="bg-navy-50 pb-6 md:pb-8 px-6 relative">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-64 h-64 bg-gold/5 rounded-full blur-3xl" />
        </div>

        <div className="relative w-full md:pl-6 lg:pl-10 md:pr-6 lg:pr-10">
        <div className="relative space-y-6 w-full">
          {/* Books — full width */}
          <div className="fade-in group bg-white rounded-3xl p-8 md:p-10 shadow-sm border border-navy-800/5 hover:shadow-xl transition-all duration-300 relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-navy-800 via-navy-600 to-navy-400" />
            <div className="mb-8">
              <p className="text-gold font-bold tracking-[0.2em] uppercase text-3xl md:text-4xl lg:text-4xl leading-snug mb-3">
                Best Selling Author
              </p>
              <div className="h-1 bg-gradient-to-r from-navy-800 via-navy-600 to-navy-400 rounded-full" />
            </div>
            <div className="w-14 h-14 rounded-2xl bg-navy-800/10 flex items-center justify-center mb-8 lg:mb-10">
              <svg
                className="w-7 h-7 text-navy-800"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                />
              </svg>
            </div>

            <div className="space-y-10 lg:space-y-12">
              <div className="grid w-full grid-cols-[9rem_1fr] sm:grid-cols-[11rem_1fr] lg:grid-cols-[19rem_1fr_auto] gap-4 lg:gap-x-6 items-stretch">
                <div className="lg:self-start">
                  <img
                    src="/images/SKM_550i26040917172-Edit-Edit-Edit.jpg"
                    alt="Book cover: Powerstones — Letters to a Goddess by Linda Ching and Robin Stephens Rohr"
                    width={480}
                    height={720}
                    loading="lazy"
                    className="block w-full h-auto rounded-xl shadow-md border border-navy-800/10"
                  />
                </div>
                <div className="min-w-0">
                  <h3 className="site-subheading text-navy-800 mb-3">
                    Powerstones: Letters to a Goddess
                  </h3>
                  <p className="reading-text">
                    Fascinated by Hawaiian Culture, Robin Co-Authored the
                    Bestseller{" "}
                    <em className="text-navy-800/90">
                      Powerstones: Letters to a Goddess
                    </em>
                    . Set against the backdrop of Hawaiian mythology. She
                    queried some of the finest minds of our time about the power
                    of belief in creating our lives. These interviews included
                    the Dalai Lama; Dr. Maya Angelou, &ldquo;Living Treasure of
                    Hawai&rsquo;i&rdquo; Nainoa Thompson, and other renowned
                    thinkers and achievers. They were asked to share their
                    wisdom about the potential of the human being as we move
                    through the 21st century.
                  </p>
                </div>
                <div className="col-span-2 lg:col-span-1 flex flex-col justify-end items-end">
                  <StatBlock
                    value="15K+"
                    label="Copies Sold"
                    showDivider={false}
                    align="right"
                  />
                </div>
              </div>

              <div className="grid w-full grid-cols-[9rem_1fr] sm:grid-cols-[11rem_1fr] lg:grid-cols-[19rem_1fr_auto] gap-4 lg:gap-x-6 items-stretch">
                <div className="lg:self-start">
                  <img
                    src="/images/SKM_550i26040917171-Edit-Edit.jpg"
                    alt="Book cover: Chicken Soup from the Soul of Hawai'i"
                    width={480}
                    height={720}
                    loading="lazy"
                    className="block w-full h-auto rounded-xl shadow-md border border-navy-800/10"
                  />
                </div>
                <div className="min-w-0">
                  <h3 className="site-subheading text-navy-800 mb-3">
                    Chicken Soup from the Soul of Hawai&rsquo;i
                  </h3>
                  <p className="reading-text">
                    Her next project documented the inspirational stories of
                    beloved Island elders, resulting in{" "}
                    <em className="text-navy-800/90">
                      Chicken Soup from the Soul of Hawai&rsquo;i: Stories of
                      Aloha to Create Paradise Wherever You Are
                    </em>
                    . It was the best seller of the decade in Hawai&rsquo;i with
                    over 100,000 copies sold. Its proceeds funded projects on
                    the Wai&rsquo;anae Coast and in Hawai&rsquo;i&rsquo;s public
                    schools.
                  </p>
                  <p className="reading-text mt-4">
                    This celebrated book was the culmination of a five year
                    journey of gathering stories from Hawai&rsquo;i&rsquo;s
                    finest storytellers. It is a remarkable collection of Island
                    wisdom and will be passed on from generation to generation.
                  </p>
                </div>
                <div className="col-span-2 lg:col-span-1 flex flex-col justify-end items-end">
                  <StatBlock
                    value="100K+"
                    label="Copies Sold"
                    showDivider={false}
                    align="right"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-1 gap-6 pt-2">
                {testimonials.map((t, i) => (
                  <blockquote
                    key={i}
                    className="border-l-2 border-gold/30 pl-4 reading-text-muted italic"
                  >
                    <p>&ldquo;{t.quote}&rdquo;</p>
                    <footer className="reading-text mt-2 not-italic">
                      &mdash; {t.author}
                    </footer>
                  </blockquote>
                ))}
              </div>
            </div>
          </div>

          {/* Column + Integrative */}
          <div className="grid md:grid-cols-2 gap-8">
            <div className="fade-in fade-in-delay-1 group bg-white rounded-3xl p-8 shadow-sm border border-navy-800/5 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-gold-dark via-gold to-gold-light" />
              <div className="w-14 h-14 rounded-2xl bg-gold/10 flex items-center justify-center mb-6">
                <svg
                  className="w-7 h-7 text-gold-dark"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                  />
                </svg>
              </div>
              <h3 className="site-subheading text-navy-800 mb-3">Column</h3>
              <p className="reading-text mb-4">
                A weekly storytelling column reaching over 285,000 families
                across the Hawaiian islands. For over seven years, its readership
                has been delighted and uplifted by these inspirational stories.
              </p>
              <p className="reading-text-muted italic mb-6">
                Quote coming soon.
              </p>
              <StatBlock value="285K" label="Families Reached" />
            </div>

            <div className="fade-in fade-in-delay-2 group bg-white rounded-3xl p-8 shadow-sm border border-navy-800/5 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-navy-800 via-navy-600 to-navy-400" />
              <div className="w-14 h-14 rounded-2xl bg-navy-800/10 flex items-center justify-center mb-6">
                <svg
                  className="w-7 h-7 text-navy-800"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                  />
                </svg>
              </div>
              <h3 className="site-subheading text-navy-800 mb-3">
                Integrative Medicine
              </h3>
              <p className="reading-text mb-4">
                Over two decades of work in integrative medicine, including
                collaborating with MDs and PAs in a hospital setting, utilizing
                microcurrent technology for the alleviation of chronic pain.
              </p>
              <p className="reading-text-muted italic mb-6">
                Content coming soon.
              </p>
              <StatBlock value="20+" label="Years of Service" />
            </div>
          </div>
        </div>
        </div>
      </section>

      <SectionDivider
        from={SECTION_COLORS.navy50}
        to={SECTION_COLORS.navy900}
        wave="deep"
        className="h-10 md:h-14"
      />

      <Media />

      <SectionDivider
        from={SECTION_COLORS.navy900}
        to={SECTION_COLORS.ivory}
        wave="gentle"
        className="h-10 md:h-14"
      />

      {/* Additional info */}
      <section
        id="closing"
        className="relative site-section-y px-6 bg-ivory overflow-hidden"
      >
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-navy-100/30 rounded-full blur-3xl" />
        </div>
        <div className="max-w-5xl mx-auto relative fade-in">
          <div className="bg-white rounded-3xl border border-navy-800/5 shadow-sm overflow-hidden">
            <div className="h-1.5 bg-gradient-to-r from-coral via-gold to-navy-800" />
            <div className="relative px-6 py-8 md:px-10 md:py-10 lg:px-12 lg:py-12">
              <p className="reading-text text-center max-w-4xl mx-auto">
                The wisdom of our elders, and the possibilities that Integrative
                medicine is bringing into our lives for the betterment of humanity,
                will &ldquo;echo throughout eternity.&rdquo; My journey of seeking
                the wisdom of the elders and my fascination with the possibilities
                of integrative medicine have a common theme: to uplift, elevate, and
                possibly transform the human experience. Data driven statistically
                based technologies are emerging from research labs around the world,
                showing that our possibilities for our quality of life and our human
                longevity is far vaster than ever imagined. In the next few years,
                the velocity of this profound research will be dazzling in its depth
                and breadth. Fasten your seatbelts, it&rsquo;s a thrilling time to be
                alive! The velocity of this emerging data will give greater
                possibilities to the human experience than ever imagined.
              </p>
              <div
                className="flex items-center justify-center gap-3 mt-8 md:mt-10"
                aria-hidden
              >
                <span className="h-px w-12 sm:w-16 bg-gradient-to-r from-transparent to-gold/50" />
                <span className="w-2 h-2 rounded-full bg-coral/70" />
                <span className="w-1.5 h-1.5 rounded-full bg-gold" />
                <span className="w-2 h-2 rounded-full bg-coral/70" />
                <span className="h-px w-12 sm:w-16 bg-gradient-to-l from-transparent to-gold/50" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
