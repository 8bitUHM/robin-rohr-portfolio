import AlsoInThePressSection from "../components/AlsoInThePressSection";
import ChasingTheLightSection from "../components/ChasingTheLightSection";
import CourtyardQuotesGallery from "../components/CourtyardQuotesGallery";

export default function Media() {
  return (
    <section
      id="press"
      className="relative pt-0 pb-4 md:pb-5 px-6 bg-navy-900 overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-20 -right-20 w-80 h-80 bg-gold/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-navy-400/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-4xl md:max-w-5xl lg:max-w-6xl mx-auto relative space-y-5 md:space-y-6">
        <div className="fade-in fade-in-delay-1 space-y-5 md:space-y-6">
          <ChasingTheLightSection />

          <div className="space-y-5">
            <header className="text-center space-y-2 max-w-3xl mx-auto">
              <h3 className="site-subheading text-gold leading-tight">
                The Power to Choose Courtyard
              </h3>
              <p className="reading-text-on-dark">
                Celebrates{" "}
                <em className="italic">the power of words</em> to impact the
                human being and produce profound and beneficial change.
              </p>
            </header>

            <div className="max-w-3xl md:max-w-4xl lg:max-w-5xl mx-auto space-y-4">
              <p className="reading-text-on-dark">
                Dynamic community leader Lynn Watanabe and Robin found funding for
                and created The Power to Choose Courtyard, a garden of ideas and
                messages.
              </p>
              <p className="reading-text-on-dark">
                In this originally barren open space, at a Hawai&#699;i High School, trees and flowers were
                planted, tables and chairs were installed, and it became a gathering
                place for students to collaborate, to work together and to dream big.
              </p>
              <p className="reading-text-on-dark">
                The students were surrounded by 80 inspirational quotes and a
                15&prime; long digital message board that applauded their scholastic
                and athletic achievements.
              </p>
              <p className="reading-text-on-dark">
                This innovative and uplifting environment was part of the reason
                the number of students going on to college rose from 7% to 70%.
              </p>
              <p className="reading-text-on-dark">
                The school&rsquo;s extraordinary Principal, Dr. Gail Awakuni, became
                National Principal of the Year for the United States. It was an
                acknowledgment of the Renaissance she led in a school that was
                struggling, a school at risk, and with her visionary leadership, a
                school that became transformed.
              </p>
            </div>

            <p className="reading-text-on-dark text-center text-gold">
              Please enjoy this memorable video.
            </p>

            <div className="relative">
              <div className="absolute -inset-3 bg-gradient-to-br from-gold/20 via-navy-400/10 to-gold/20 rounded-3xl blur-sm" />
              <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl ring-1 ring-white/10">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/q_5G2uiu6TM"
                  title="Robin Stephens Rohr — The Power to Choose Courtyard"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>

            <CourtyardQuotesGallery />
          </div>

          <AlsoInThePressSection />
        </div>
      </div>
    </section>
  );
}
