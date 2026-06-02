import { useState } from "react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import SectionDivider, { SECTION_COLORS } from "../components/SectionDivider";
import ThemeTopicCard from "../components/ThemeTopicCard";
import Media from "./Media";

const testimonials = [
  {
    quote:
      "If anyone who has ever been loved, guided or healed by a kupuna of these Islands, lit one candle in tribute to these wise and gracious Elders at midnight, the Islands would look like they were drenched in the blazingly noonday sun.",
    author: "Beloved Hawaiian Leader, John DeFries",
    coral: true,
  },
  {
    quote:
      "This is a collection of powerful mini Band-Aids for the heart and mind, prescribed for any mood or mishap because if one place on earth inspires the deepest wisdom and spiritual medicines pertinent to our human condition, it is Hawai\u02BBi.",
    author: "Edgy Lee, author & filmmaker",
    gold: true,
  },
  {
    quote:
      "Aloha is the ability to put yourself in the mind, heart, and soul of another. These priceless stories from our kupuna, speak of courage, adventure, forgiveness, and compassion that take us on a journey of understanding.",
    author: (
      <>
        Kenneth F. Brown, a &ldquo;
        <em className="italic">Living Treasure of Hawai&#699;i.</em>
        &rdquo;
      </>
    ),
  },
];

const alohaQuotes = [
  {
    quote:
      "Aloha is not a greeting. It is a feeling... we feeling that God is present.",
    author: "Reverend Abraham Akaka",
  },
  {
    quote: "Aloha is my religion. I practice it everyday.",
    author: "Palahi Paki",
  },
];

function StatBlock({
  value,
  label,
  showDivider = true,
  align = "left",
  compactMobile = false,
}: {
  value: string;
  label: string;
  showDivider?: boolean;
  align?: "left" | "right";
  compactMobile?: boolean;
}) {
  return (
    <div
      className={`${showDivider ? "pt-5 border-t border-navy-800/5" : ""} ${
        compactMobile ? "max-sm:py-0" : ""
      } ${align === "right" ? "sm:text-right" : ""}`}
    >
      <span
        className={`site-stat-value block ${
          compactMobile ? "max-sm:text-[2rem] max-sm:leading-none" : ""
        }`}
      >
        {value}
      </span>
      <span
        className={`site-stat-label block ${
          compactMobile ? "max-sm:mt-0.5" : "mt-1"
        }`}
      >
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
            <p className="hero-tagline text-gold uppercase mb-8 fade-in ornament-line text-center sm:whitespace-nowrap">
              <span className="block sm:inline">Author &middot; Journalist</span>
              <span className="hidden sm:inline"> &middot; </span>
              <span className="block sm:inline">Advocate</span>
            </p>
            <h1 className="hero-title mb-8 fade-in fade-in-delay-1 whitespace-nowrap">
              <span className="text-navy-800">Robin Stephens</span>{" "}
              <span className="text-navy-800">Rohr</span>
            </h1>
            <blockquote className="fade-in fade-in-delay-2 relative hero-quote text-coral italic mx-auto px-4 sm:px-6">
              <p className="flex flex-col items-center">
                <span className="whitespace-nowrap">
                  <span
                    aria-hidden="true"
                    className="text-[1.4em] text-gold opacity-50 font-serif leading-none inline-block align-[-0.1em] mr-1 sm:mr-2 select-none"
                  >
                    &ldquo;
                  </span>
                  <span>There is only one thing in life,</span>
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

            <div className="text-left min-w-0 space-y-3 md:space-y-4">
              <p className="reading-text-narrative">
                Best-selling author and journalist Robin Stephens Rohr holds a
                Master&rsquo;s degree in Psychology and focuses her work on science
                based, data-driven technologies to heal and to elevate the human
                experience.
              </p>
              <div className="bg-navy-50/80 rounded-2xl p-4 md:p-5 border border-navy-800/5 border-l-4 border-l-coral">
                <p className="reading-text-narrative-muted italic">
                  Robin shares, &ldquo;The quest to help alleviate human suffering
                  in its many forms has driven my sense of mission for a lifetime.
                  Having worked alongside and in collaboration with brilliant
                  MDs and inspirational psychologists, it has become clear
                  that the potential of the human being to heal and to evolve, is
                  far vaster than ever imagined.&rdquo;
                </p>
              </div>
              <p className="reading-text-narrative">
                Additionally, Robin&rsquo;s passion for collecting the wisdom of
                elders from many cultures has led to the creation of two
                best-selling books.
              </p>
              <p className="reading-text-narrative">
                She found that there is a surprising link between that kind of
                wisdom-filled storytelling and the healing possibilities that
                Integrative Medicine pursues.
              </p>
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
        <div className="max-w-7xl mx-auto space-y-8 md:space-y-10">
          <ThemeTopicCard
            label="Elder wisdom"
            titleLine1="The Wisdom of Our Elders:"
            titleLine2="The ‘Power of Story’ to Guide and to Heal."
            compactBodyTop
          >
            <div className="space-y-5">
              <p className="reading-text">
                There is impressive research from neuroscience and narrative
                medicine, suggesting that wisdom-filled stories can positively
                affect the mind and have a beneficial impact on our human biology.
              </p>
              <p className="reading-text">
                The nervous system can respond to stories as real experience and
                they can be transformative to our health and well-being.
              </p>
              <div className="bg-navy-50/80 rounded-2xl p-4 md:p-5 border border-navy-800/5 border-l-4 border-l-coral">
                <p className="reading-text">
                  Robin had the pleasure of sitting with Hawai&#699;i&#39;s
                  beloved elders, the <em>kupuna</em>, over a five year period.
                  The knowledge they shared speaks of values that are universal
                  and oh so necessary as we enter the future: Aloha (compassion
                  and sharing); koa (courage); ahonui (patience);
                  ho&#699;omaika&#699;i (gratitude); kupono (honesty); kalana
                  (forgiveness); and more.
                </p>
              </div>
              <p className="reading-text">
                The stories and the values they promote are how they entertain
                and encourage us all, how they teach our children and how
                we can teach ourselves.
              </p>
            </div>
          </ThemeTopicCard>

          <ThemeTopicCard
            className="fade-in-delay-1"
            label="Integrative health"
            titleLine1="Integrative Medicine: Ushering in"
            titleLine2="a New Age of Possibilities"
            italicTitleLine2={false}
          >
            <div className="space-y-5">
              <p className="reading-text">
                Over the last two decades, Robin has been intrigued by the field
                of Integrative Medicine, utilizing non-addictive, non-toxic,
                FDA-accepted technologies to help alleviate human suffering. In
                2011, she joined with a group of respected community leaders and
                impassioned MDs to create a program at a Hawai&#699;i hospital.
                The program focused on utilizing micro-current technology on
                acupuncture meridians of the body to alleviate chronic pain and to
                help relieve anxiety, depression, and insomnia.
              </p>
              <p className="reading-text">
                Collaborating with MDs, PAs, and acupuncturists, she worked with
                patients for a decade, helping countless men and women to reclaim
                their lives.
              </p>
              <p className="reading-text">
                Robin is now collaborating with Terry Shintani, MD, JD, MPH, an
                official Living Treasure of Hawai&#699;i. This is a designation
                he received for his extraordinary contributions to the field of
                medicine. They are working with researchers and MDs to be helpful
                to Hawai&#699;i&#39;s diabetes community.
              </p>
            </div>
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
          <div className="fade-in group bg-white rounded-3xl px-8 pt-5 pb-8 md:px-10 md:pt-8 md:pb-10 shadow-sm border border-navy-800/5 hover:shadow-xl transition-all duration-300 relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-navy-800 via-navy-600 to-navy-400" />
            <div className="mb-8">
              <p className="text-gold font-bold tracking-[0.2em] uppercase site-section-label leading-snug mb-3">
                Best-Selling Author
              </p>
              <div className="h-1 bg-gradient-to-r from-navy-800 via-navy-600 to-navy-400 rounded-full" />
            </div>

            <div className="space-y-10 lg:space-y-12">
              <div className="flex flex-col gap-5 md:gap-6">
                <img
                  src="/images/SKM_550i26040917172-Edit-Edit-Edit.jpg"
                  alt="Book cover: Powerstones — Letters to a Goddess by Linda Ching and Robin Stephens Rohr"
                  width={480}
                  height={720}
                  loading="lazy"
                  className="block w-full h-auto rounded-xl shadow-md border border-navy-800/10 md:max-w-md lg:max-w-xl"
                />
                <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between sm:gap-6">
                  <div className="min-w-0 flex-1">
                    <h3 className="site-subheading text-navy-800 mb-3 italic">
                      Powerstones: Letters to a Goddess
                    </h3>
                    <p className="reading-text">
                      Fascinated by Hawaiian Culture, Robin co-authored the
                      Bestseller{" "}
                      <em className="text-navy-800/90 italic">
                        Powerstones: Letters to a Goddess
                      </em>
                      . Set against the backdrop of Hawaiian mythology. She
                      queried some of the finest minds of our time about the power
                      of belief in creating our lives. These interviews included
                      the Dalai Lama; Dr. Maya Angelou,{" "}
                      <em className="text-navy-800/90 italic">
                        Living Treasure of Hawai&#699;i
                      </em>{" "}
                      Nainoa Thompson, and other renowned
                      thinkers and achievers. They were asked to share their
                      wisdom about the potential of the human being as we move
                      through the 21st century.
                    </p>
                  </div>
                  <StatBlock
                    value="15K+"
                    label="Copies Sold"
                    showDivider={false}
                    align="right"
                    compactMobile
                  />
                </div>
              </div>

              <div className="flex flex-col gap-5 md:gap-6">
                <img
                  src="/images/SKM_550i26040917171-Edit-Edit.jpg"
                  alt="Book cover: Chicken Soup from the Soul of Hawaiʻi"
                  width={480}
                  height={720}
                  loading="lazy"
                  className="block w-full h-auto rounded-xl shadow-md border border-navy-800/10 md:max-w-md lg:max-w-xl"
                />
                <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between sm:gap-6">
                  <div className="min-w-0 flex-1">
                    <h3 className="site-subheading text-navy-800 mb-3 italic">
                      Chicken Soup from the Soul of Hawai&#699;i
                    </h3>
                    <p className="reading-text">
                      This project documented the inspirational stories of
                      beloved Island elders, resulting in{" "}
                      <em className="text-navy-800/90 italic">
                        Chicken Soup from the Soul of Hawai&#699;i: Stories of
                        Aloha to Create Paradise Wherever You Are
                      </em>
                      .
                    </p>
                    <p className="reading-text mt-4">
                      It was the best seller of the decade in Hawai&#699;i with
                      over 100,000 copies sold. Its proceeds funded projects on
                      the Wai&rsquo;anae Coast and in Hawai&#699;i&#39;s public
                      schools.
                    </p>
                    <p className="reading-text mt-4">
                      This celebrated book was the culmination of a five year
                      journey of gathering stories from Hawai&#699;i&#39;s
                      finest storytellers. It is a remarkable collection of Island
                      wisdom and will be passed on from generation to generation.
                    </p>
                  </div>
                  <StatBlock
                    value="100K+"
                    label="Copies Sold"
                    showDivider={false}
                    align="right"
                    compactMobile
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-1 gap-6 pt-2">
                {testimonials.map((t, i) => (
                  <blockquote
                    key={i}
                    className={`border-l-2 pl-4 italic ${
                      t.coral
                        ? "border-coral/50"
                        : t.gold
                          ? "border-gold/50"
                          : "border-gold/30 reading-text-muted"
                    }`}
                  >
                    <p
                      className={
                        t.coral
                          ? "reading-text text-coral"
                          : t.gold
                            ? "reading-text text-gold"
                            : undefined
                      }
                    >
                      &ldquo;{t.quote}&rdquo;
                    </p>
                    <footer
                      className={`reading-text mt-2 not-italic ${
                        t.coral ? "text-coral" : t.gold ? "text-gold" : ""
                      }`}
                    >
                      &mdash; {t.author}
                    </footer>
                  </blockquote>
                ))}

                <div className="rounded-2xl p-4 md:p-5 border border-coral space-y-5">
                  {alohaQuotes.map((t, i) => (
                    <blockquote
                      key={i}
                      className="reading-text-muted italic"
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
                Over two decades of work in Integrative Medicine, including
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
                of Integrative Medicine have a common theme: to uplift, elevate, and
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
