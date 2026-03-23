import { Link } from "react-router-dom";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

export default function NotFound() {
  useScrollAnimation();

  return (
    <section className="relative py-28 md:py-44 px-6 text-center overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-1/3 w-72 h-72 bg-teal-200/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-1/3 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] border border-teal-800/[0.03] rounded-full" />
      </div>

      <div className="max-w-2xl mx-auto relative fade-in">
        <p className="text-gold font-semibold tracking-[0.3em] uppercase text-xs mb-6 ornament-line">
          Page Not Found
        </p>
        <h1 className="text-8xl sm:text-9xl font-bold gradient-text mb-6">
          404
        </h1>
        <p className="text-teal-700/60 text-lg sm:text-xl mb-10 leading-relaxed max-w-md mx-auto">
          The page you&rsquo;re looking for doesn&rsquo;t exist or has been
          moved.
        </p>
        <Link
          to="/"
          className="group inline-flex items-center gap-2 px-8 py-4 bg-teal-800 text-ivory rounded-2xl font-semibold text-sm hover:bg-teal-700 transition-all shadow-lg shadow-teal-800/20 hover:shadow-xl hover:shadow-teal-800/25 hover:-translate-y-0.5"
        >
          <svg
            className="w-4 h-4 transition-transform group-hover:-translate-x-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
            />
          </svg>
          Back to Home
        </Link>
      </div>
    </section>
  );
}
