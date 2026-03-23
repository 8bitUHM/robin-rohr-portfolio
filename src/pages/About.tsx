import { useState } from "react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

export default function About() {
  useScrollAnimation();
  const [imgLoaded, setImgLoaded] = useState(false);

  return (
    <>
      {/* Page header */}
      <section className="relative pt-16 pb-10 md:pt-24 md:pb-14 px-6 text-center overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-10 right-1/3 w-72 h-72 bg-teal-200/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-1/3 w-64 h-64 bg-gold/5 rounded-full blur-3xl" />
        </div>
        <div className="relative fade-in">
          <p className="text-gold font-semibold tracking-[0.3em] uppercase text-xs mb-4 ornament-line">
            About
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold gradient-text">
            Robin Stephens Rohr
          </h1>
        </div>
      </section>

      {/* Bio section */}
      <section className="pb-20 md:pb-28 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-5 gap-12 md:gap-16 items-start">
            {/* Headshot with decorative frame */}
            <div className="md:col-span-2 fade-in">
              <div className="relative">
                <div className="absolute -inset-3 bg-gradient-to-br from-teal-600/20 via-gold/10 to-teal-800/20 rounded-3xl blur-sm" />
                <div className="relative rounded-2xl overflow-hidden shadow-xl ring-1 ring-teal-800/10 bg-teal-50">
                  {!imgLoaded && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-10 h-10 border-[3px] border-teal-800/10 border-t-teal-800/60 rounded-full animate-spin" />
                    </div>
                  )}
                  <img
                    src="/images/headshot.svg"
                    alt="Robin Stephens Rohr"
                    className={`w-full object-cover transition-opacity duration-500 ${imgLoaded ? "opacity-100" : "opacity-0"}`}
                    onLoad={() => setImgLoaded(true)}
                  />
                </div>
              </div>
            </div>

            {/* Bio */}
            <div className="md:col-span-3">
              <div className="space-y-6 text-teal-700/80 leading-relaxed text-base sm:text-lg">
                <p className="fade-in text-xl sm:text-2xl text-teal-800/90 font-medium leading-relaxed">
                  Author and journalist Robin Stephens Rohr holds a
                  Master&rsquo;s in Psychology and focuses her work on
                  science-based, cutting-edge technologies to heal and to
                  elevate the human experience.
                </p>

                <div className="fade-in fade-in-delay-1 w-16 h-px bg-gradient-to-r from-gold/60 to-transparent my-8" />

                <p className="fade-in fade-in-delay-1">
                  Fascinated by Hawaiian culture, she co-authored the bestseller{" "}
                  <em className="text-teal-800/90 font-medium">
                    Powerstones: Letters to a Goddess
                  </em>{" "}
                  &mdash; a provocative book set against Hawaiian mythology that
                  queries some of the finest minds of our time about the power of
                  belief in creating our lives.
                </p>
                <p className="fade-in fade-in-delay-2">
                  Her next project documented the inspirational stories of
                  beloved Island elders, resulting in{" "}
                  <em className="text-teal-800/90 font-medium">
                    Chicken Soup from the Soul of Hawai&rsquo;i: Stories of Aloha
                    to Create Paradise Wherever You Are
                  </em>{" "}
                  &mdash; the best seller of the decade in Hawai&rsquo;i with
                  over 100,000 copies sold. Its proceeds funded projects on the
                  Wai&rsquo;anae Coast and in Hawai&rsquo;i&rsquo;s public
                  schools.
                </p>

                {/* Inline stat callout */}
                <div className="fade-in fade-in-delay-2 bg-teal-50/80 rounded-2xl p-6 border border-teal-800/5 my-8">
                  <div className="flex items-center gap-6">
                    <div className="text-center">
                      <span className="text-4xl font-bold text-teal-800">
                        100K+
                      </span>
                      <span className="block text-xs text-teal-700/50 font-semibold tracking-wider uppercase mt-1">
                        Copies Sold
                      </span>
                    </div>
                    <div className="w-px h-12 bg-teal-800/10" />
                    <p className="text-teal-700/60 text-sm leading-relaxed flex-1">
                      <em>
                        Chicken Soup from the Soul of Hawai&rsquo;i
                      </em>{" "}
                      became the best seller of the decade in Hawai&rsquo;i,
                      funding community projects across the Islands.
                    </p>
                  </div>
                </div>

                <p className="fade-in">
                  Robin produces a weekly storytelling column,{" "}
                  <em className="text-teal-800/90 font-medium">
                    Chasing The Light
                  </em>
                  , that for seven years has reached almost 300,000 families in
                  Hawai&rsquo;i &mdash; stories that uplift, inspire, and
                  celebrate the &ldquo;ah-ha&rdquo; moments in human experience.
                </p>
                <p className="fade-in">
                  Over two decades, Robin has been drawn to integrative medicine.
                  In 2011, she joined a three-star general and community leaders
                  to launch a hospital program using microcurrent technology on
                  acupuncture meridians to alleviate chronic pain, anxiety,
                  depression, and insomnia. She led the program for a decade
                  alongside MDs, PAs, and Acupuncturists.
                </p>
                <p className="fade-in">
                  She is now collaborating with Terry Shintani, MD, JD, MPH
                  &mdash; an official Living Treasure of Hawai&rsquo;i &mdash;
                  on a research initiative targeting Hawai&rsquo;i&rsquo;s
                  diabetic epidemic, which carries an annual cost of $1.5
                  billion.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
