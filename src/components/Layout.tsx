import { Outlet } from "react-router-dom";

import ColorPlayground from "./ColorPlayground";

const LINKEDIN_URL =
  "https://www.linkedin.com/in/robin-stephens-rohr-631418287?utm_source=share_via&utm_content=profile&utm_medium=member_ios";

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col bg-ivory font-quicksand">
      <ColorPlayground />
      <main className="flex-1">
        <Outlet />
      </main>

      <footer className="bg-navy-900 text-ivory">
        <div className="h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />

        <div className="max-w-6xl mx-auto px-6 pt-8 pb-8">
          <div className="grid sm:grid-cols-2 gap-8 sm:gap-6 mb-8">
            <div>
              <p className="text-coral font-bold site-heading tracking-tight">
                Robin Stephens Rohr
              </p>
            </div>

            <div>
              <h4 className="text-ivory/90 font-semibold text-sm tracking-[0.2em] uppercase mb-5">
                Contact Information
              </h4>
              <a
                href={LINKEDIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-ivory/90 hover:text-coral transition-colors text-base sm:text-lg font-bold"
              >
                <svg
                  className="w-6 h-6 shrink-0"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                LinkedIn
              </a>
            </div>
          </div>

          <div className="h-px bg-ivory/10 mb-8" />

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-ivory/60 text-sm sm:text-base">
              &copy; {new Date().getFullYear()}{" "}
              <span className="text-gold">Robin Stephens Rohr</span>. All
              rights reserved.
            </p>
            <p className="text-ivory/60 text-sm sm:text-base">
              Hawai&#699;i &middot; Author &middot; Journalist &middot;
              Advocate
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
