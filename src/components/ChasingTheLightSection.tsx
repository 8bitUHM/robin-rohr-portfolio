export default function ChasingTheLightSection() {
  return (
    <div
      id="chasing-the-light"
      className="fade-in fade-in-delay-2 relative mt-2 md:mt-3"
    >
      <div className="relative rounded-3xl bg-gradient-to-b from-white/[0.08] to-white/[0.03] border border-ivory/10 shadow-[0_24px_60px_-20px_rgba(0,0,0,0.45)] overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-gold-dark via-gold to-coral/80" />

        <div className="px-6 py-4 md:px-10 md:py-5 lg:px-12 lg:py-6 xl:px-16">
          <header className="text-center max-w-3xl mx-auto">
            <p className="text-coral font-bold tracking-[0.25em] uppercase text-ui sm:text-ui-lg">
              A Weekly newspaper column
            </p>
            <h3 className="site-heading text-gold leading-tight mt-3">Chasing the Light</h3>
            <div className="mx-auto flex items-center justify-center gap-3 pt-1">
              <span className="h-px w-12 sm:w-20 bg-gradient-to-r from-transparent to-gold/60" />
              <span className="w-1.5 h-1.5 rounded-full bg-gold" />
              <span className="h-px w-12 sm:w-20 bg-gradient-to-l from-transparent to-gold/60" />
            </div>
          </header>

          <div className="space-y-2 max-w-4xl mx-auto">
            <p className="reading-text-on-dark mt-3 text-center max-w-3xl mx-auto">
              Robin co-created this weekly storytelling column that reaches over 285,000 families across
              the Hawaiian Islands. For over seven years, its readership has
              been entertained and uplifted by these aspirational stories.
            </p>
            <div className="reading-text-on-dark text-left space-y-2">
              <p className="text-center">
                <span className="text-gold font-bold">Chasing the Light</span>
              </p>
              <p>
                stories shine a beacon on the &lsquo;ah ha&rsquo; moments of our
                lives, moments that give insights and new perspectives as we
                navigate this human experience.
              </p>
              <p>
                These teachable moments can help us build courage and resilience
                as we navigate life&rsquo;s inevitable storms.
              </p>
              <p>
                They can also serve as an inspiration to help illuminate and
                guide us on the path of change in these uncertain times.
              </p>
              <p>
                These tales, some catapulting us into awe and wonder, some
                shimmering in joy and hilarity, and others encouraging us to face
                our resistance to forgiveness and to embrace compassion, have been
                created to help us find our True North once again.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
