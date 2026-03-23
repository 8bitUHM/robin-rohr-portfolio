import { useScrollAnimation } from "../hooks/useScrollAnimation";

export default function Contact() {
  useScrollAnimation();

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
            Get in Touch
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold gradient-text mb-4">
            Contact
          </h1>
          <p className="text-teal-700/60 text-lg max-w-xl mx-auto leading-relaxed">
            Interested in Robin&rsquo;s work, speaking engagements, or
            collaborations? Reach out below.
          </p>
        </div>
      </section>

      {/* Contact content */}
      <section className="pb-20 md:pb-28 px-6">
        <div className="max-w-4xl mx-auto">
          {/* Info cards row */}
          <div className="grid sm:grid-cols-3 gap-5 mb-12">
            {[
              {
                icon: (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                  />
                ),
                label: "Location",
                value: "Hawai\u2019i",
              },
              {
                icon: (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"
                  />
                ),
                label: "Work",
                value: "Author & Journalist",
              },
              {
                icon: (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                  />
                ),
                label: "Column",
                value: "Chasing The Light",
              },
            ].map((item, i) => (
              <div
                key={i}
                className={`fade-in fade-in-delay-${i + 1} bg-white rounded-2xl p-6 border border-teal-800/5 shadow-sm text-center relative overflow-hidden`}
              >
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
                <div className="w-12 h-12 rounded-xl bg-teal-800/5 flex items-center justify-center mx-auto mb-3">
                  <svg
                    className="w-5 h-5 text-teal-800/70"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                  >
                    {item.icon}
                  </svg>
                </div>
                <p className="text-xs text-teal-700/40 font-semibold tracking-wider uppercase mb-1">
                  {item.label}
                </p>
                <p className="text-teal-800 font-bold text-sm">{item.value}</p>
              </div>
            ))}
          </div>

          {/* Form card */}
          <div className="fade-in relative group">
            <div className="absolute -inset-px bg-gradient-to-br from-teal-600/10 via-gold/5 to-teal-600/10 rounded-[1.75rem] blur-sm" />
            <div className="relative bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-teal-800/5 overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-teal-800 via-teal-600 to-gold" />

              <div className="text-center mb-10">
                <h2 className="text-2xl font-bold text-teal-800 mb-2">
                  Send a Message
                </h2>
                <p className="text-teal-700/50 text-sm">
                  Fill out the form below and we&rsquo;ll get back to you.
                </p>
              </div>

              <form
                onSubmit={(e) => e.preventDefault()}
                className="space-y-6 text-left"
              >
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-teal-800 mb-2.5">
                      Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-5 py-3.5 rounded-xl border border-teal-800/10 bg-ivory/80 font-quicksand text-teal-900 placeholder:text-teal-700/30 focus:outline-none focus:ring-2 focus:ring-teal-600/20 focus:border-teal-600/30 transition-all"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-teal-800 mb-2.5">
                      Email
                    </label>
                    <input
                      type="email"
                      className="w-full px-5 py-3.5 rounded-xl border border-teal-800/10 bg-ivory/80 font-quicksand text-teal-900 placeholder:text-teal-700/30 focus:outline-none focus:ring-2 focus:ring-teal-600/20 focus:border-teal-600/30 transition-all"
                      placeholder="you@example.com"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-teal-800 mb-2.5">
                    Subject
                  </label>
                  <input
                    type="text"
                    className="w-full px-5 py-3.5 rounded-xl border border-teal-800/10 bg-ivory/80 font-quicksand text-teal-900 placeholder:text-teal-700/30 focus:outline-none focus:ring-2 focus:ring-teal-600/20 focus:border-teal-600/30 transition-all"
                    placeholder="What is this regarding?"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-teal-800 mb-2.5">
                    Message
                  </label>
                  <textarea
                    rows={5}
                    className="w-full px-5 py-3.5 rounded-xl border border-teal-800/10 bg-ivory/80 font-quicksand text-teal-900 placeholder:text-teal-700/30 focus:outline-none focus:ring-2 focus:ring-teal-600/20 focus:border-teal-600/30 transition-all resize-none"
                    placeholder="Your message..."
                  />
                </div>
                <div className="text-center pt-4">
                  <button
                    type="submit"
                    className="group/btn inline-flex items-center gap-2 px-10 py-4 bg-teal-800 text-ivory rounded-2xl font-semibold hover:bg-teal-700 transition-all shadow-lg shadow-teal-800/20 hover:shadow-xl hover:shadow-teal-800/25 hover:-translate-y-0.5"
                  >
                    Send Message
                    <svg
                      className="w-4 h-4 transition-transform group-hover/btn:translate-x-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
                      />
                    </svg>
                  </button>
                  <p className="text-teal-700/35 text-xs mt-5">
                    This is a static site &mdash; messages are not submitted.
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
