import { Link } from "react-router-dom";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

const highlights = [
  {
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
      />
    ),
    accent: "teal",
    title: "Published Author",
    text: (
      <>
        Co-author of{" "}
        <em className="text-teal-800/90">Powerstones: Letters to a Goddess</em>{" "}
        and the Hawai&rsquo;i bestseller{" "}
        <em className="text-teal-800/90">
          Chicken Soup from the Soul of Hawai&rsquo;i
        </em>{" "}
        &mdash; with over 100,000 copies sold.
      </>
    ),
    stat: "100K+",
    statLabel: "Copies Sold",
  },
  {
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
      />
    ),
    accent: "gold",
    title: "Chasing The Light",
    text: "A weekly storytelling column reaching nearly 300,000 families across Hawai\u2019i for seven years \u2014 stories that uplift, inspire, and celebrate the \u201cah-ha\u201d moments.",
    stat: "300K",
    statLabel: "Families Reached",
  },
  {
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
      />
    ),
    accent: "teal",
    title: "Integrative Health",
    text: "Over two decades of work in integrative medicine, including leading a hospital program using microcurrent technology alongside MDs, PAs, and Acupuncturists.",
    stat: "20+",
    statLabel: "Years of Service",
  },
];

export default function Home() {
  useScrollAnimation();

  return (
    <>
      {/* Hero */}
      <section className="relative py-28 md:py-44 px-6 text-center overflow-hidden">
        {/* Background decorations */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-1/4 w-72 h-72 bg-teal-200/10 rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-teal-800/[0.03] rounded-full" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-gold/[0.04] rounded-full" />
        </div>

        <div className="max-w-3xl mx-auto relative">
          <p className="text-gold font-semibold tracking-[0.3em] uppercase text-xs sm:text-sm mb-8 fade-in ornament-line">
            Author &middot; Journalist &middot; Advocate
          </p>
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold gradient-text mb-10 leading-[1.05] fade-in fade-in-delay-1">
            Robin Stephens
            <br />
            <span className="text-teal-800">Rohr</span>
          </h1>
          <div className="fade-in fade-in-delay-2">
            <blockquote className="relative text-lg sm:text-xl md:text-2xl text-teal-700/75 italic font-light leading-relaxed max-w-2xl mx-auto mb-12 px-6">
              <span className="absolute -top-4 -left-2 text-6xl text-gold/20 font-serif leading-none">
                &ldquo;
              </span>
              There is only one thing in life, and that is the continual renewal
              of inspiration.
              <span className="text-6xl text-gold/20 font-serif leading-none align-text-bottom">
                &rdquo;
              </span>
            </blockquote>
          </div>
          <div className="fade-in fade-in-delay-3">
            <Link
              to="/about"
              className="group inline-flex items-center gap-2 px-8 py-4 bg-teal-800 text-ivory rounded-2xl font-semibold text-sm hover:bg-teal-700 transition-all shadow-lg shadow-teal-800/20 hover:shadow-xl hover:shadow-teal-800/25 hover:-translate-y-0.5"
            >
              Discover Her Story
              <svg
                className="w-4 h-4 transition-transform group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Wave divider */}
      <div className="relative h-16 md:h-24 -mb-1">
        <svg
          viewBox="0 0 1440 96"
          fill="none"
          className="absolute bottom-0 w-full h-full"
          preserveAspectRatio="none"
        >
          <path
            d="M0 96V56C240 8 480 0 720 24C960 48 1200 56 1440 32V96H0Z"
            fill="#f0fdfa"
          />
        </svg>
      </div>

      {/* Highlights */}
      <section className="bg-teal-50/50 py-20 md:py-28 px-6 relative">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-64 h-64 bg-gold/5 rounded-full blur-3xl" />
        </div>

        <div className="max-w-6xl mx-auto relative">
          <p className="text-center text-gold font-semibold tracking-[0.3em] uppercase text-xs mb-4 fade-in ornament-line">
            Her Work
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-teal-800 text-center mb-16 fade-in">
            Writing, Healing &amp; Storytelling
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {highlights.map((item, i) => (
              <div
                key={i}
                className={`fade-in fade-in-delay-${i + 1} group bg-white rounded-3xl p-8 shadow-sm border border-teal-800/5 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative overflow-hidden`}
              >
                <div
                  className={`absolute top-0 left-0 right-0 h-1 ${item.accent === "gold" ? "bg-gradient-to-r from-gold-dark via-gold to-gold-light" : "bg-gradient-to-r from-teal-800 via-teal-600 to-teal-400"}`}
                />

                <div
                  className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 ${item.accent === "gold" ? "bg-gold/10" : "bg-teal-800/10"}`}
                >
                  <svg
                    className={`w-7 h-7 ${item.accent === "gold" ? "text-gold-dark" : "text-teal-800"}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                  >
                    {item.icon}
                  </svg>
                </div>

                <h3 className="text-xl font-bold text-teal-800 mb-3">
                  {item.title}
                </h3>
                <p className="text-teal-700/65 leading-relaxed mb-6">
                  {item.text}
                </p>

                <div className="pt-5 border-t border-teal-800/5">
                  <span className="text-3xl font-bold text-teal-800/90">
                    {item.stat}
                  </span>
                  <span className="block text-xs text-teal-700/50 font-semibold tracking-wider uppercase mt-1">
                    {item.statLabel}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Wave divider into video */}
      <div className="relative h-16 md:h-24 bg-teal-50/50 -mb-1">
        <svg
          viewBox="0 0 1440 96"
          fill="none"
          className="absolute bottom-0 w-full h-full"
          preserveAspectRatio="none"
        >
          <path
            d="M0 96V40C360 80 720 0 1080 40C1260 60 1380 70 1440 64V96H0Z"
            fill="#134e4a"
          />
        </svg>
      </div>

      {/* YouTube Section */}
      <section className="relative py-20 md:py-28 px-6 bg-teal-900 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-20 -right-20 w-80 h-80 bg-gold/5 rounded-full blur-3xl" />
          <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-teal-400/5 rounded-full blur-3xl" />
        </div>

        <div className="max-w-4xl mx-auto relative">
          <div className="fade-in text-center mb-12">
            <p className="text-gold font-semibold tracking-[0.3em] uppercase text-xs mb-4 ornament-line">
              Featured
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-ivory mb-4">
              Watch &amp; Listen
            </h2>
            <p className="text-ivory/50 max-w-xl mx-auto">
              Discover Robin&rsquo;s stories and insights in her own words.
            </p>
          </div>
          <div className="fade-in fade-in-delay-1 relative">
            <div className="absolute -inset-3 bg-gradient-to-br from-gold/20 via-teal-400/10 to-gold/20 rounded-3xl blur-sm" />
            <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl ring-1 ring-white/10">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/q_5G2uiu6TM"
                title="Robin Stephens Rohr — Featured Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </section>

      {/* Wave divider out of video */}
      <div className="relative h-16 md:h-24 -mt-1">
        <svg
          viewBox="0 0 1440 96"
          fill="none"
          className="absolute top-0 w-full h-full"
          preserveAspectRatio="none"
        >
          <path
            d="M0 0V56C240 88 480 96 720 72C960 48 1200 40 1440 64V0H0Z"
            fill="#134e4a"
          />
        </svg>
      </div>

      {/* CTA */}
      <section className="relative py-20 md:py-28 px-6 text-center overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-teal-100/30 rounded-full blur-3xl" />
        </div>

        <div className="max-w-2xl mx-auto relative fade-in">
          <div className="inline-flex items-center gap-3 mb-8">
            <div className="w-12 h-px bg-gradient-to-r from-transparent to-gold/50" />
            <span className="text-gold font-semibold tracking-[0.3em] uppercase text-xs">
              Connect
            </span>
            <div className="w-12 h-px bg-gradient-to-l from-transparent to-gold/50" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-teal-800 mb-4">
            Let&rsquo;s Start a Conversation
          </h2>
          <p className="text-teal-700/60 text-lg mb-10">
            Interested in Robin&rsquo;s work, speaking engagements, or
            collaborations?
          </p>
          <Link
            to="/contact"
            className="group inline-flex items-center gap-2 px-8 py-4 bg-teal-800 text-ivory rounded-2xl font-semibold text-sm hover:bg-teal-700 transition-all shadow-lg shadow-teal-800/20 hover:shadow-xl hover:shadow-teal-800/25 hover:-translate-y-0.5"
          >
            Get in Touch
            <svg
              className="w-4 h-4 transition-transform group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
              />
            </svg>
          </Link>
        </div>
      </section>
    </>
  );
}
