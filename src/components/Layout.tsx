import { useState, useEffect } from "react";
import { NavLink, Outlet, useLocation } from "react-router-dom";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/media", label: "Media" },
  { to: "/contact", label: "Contact" },
];

export default function Layout() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col bg-ivory font-quicksand">
      <header className="sticky top-0 z-50 bg-ivory/80 backdrop-blur-xl border-b border-teal-800/[0.06] shadow-sm shadow-teal-900/[0.03]">
        <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <NavLink
            to="/"
            className="text-xl sm:text-2xl font-bold tracking-tight text-teal-800"
          >
            Robin Stephens Rohr
          </NavLink>

          <ul className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  end={link.to === "/"}
                  className={({ isActive }) =>
                    `relative px-4 py-2 rounded-xl text-sm font-semibold tracking-wide uppercase transition-all ${
                      isActive
                        ? "text-teal-800 bg-teal-800/[0.06]"
                        : "text-teal-700/50 hover:text-teal-800 hover:bg-teal-800/[0.03]"
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      {link.label}
                      {isActive && (
                        <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-5 h-0.5 bg-gold rounded-full" />
                      )}
                    </>
                  )}
                </NavLink>
              </li>
            ))}
          </ul>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden flex flex-col gap-1.5 p-2"
            aria-label="Toggle menu"
          >
            <span
              className={`block w-6 h-0.5 bg-teal-800 transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`}
            />
            <span
              className={`block w-6 h-0.5 bg-teal-800 transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`}
            />
            <span
              className={`block w-6 h-0.5 bg-teal-800 transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}
            />
          </button>
        </nav>

        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${menuOpen ? "max-h-64" : "max-h-0"}`}
        >
          <ul className="flex flex-col gap-1 px-6 pb-4">
            {navLinks.map((link) => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  end={link.to === "/"}
                  className={({ isActive }) =>
                    `block py-2.5 text-sm font-semibold tracking-wide uppercase ${
                      isActive ? "text-teal-800" : "text-teal-700/60"
                    }`
                  }
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </header>

      <main className="flex-1">
        <Outlet />
      </main>

      <footer className="bg-teal-900 text-ivory">
        {/* Top decorative border */}
        <div className="h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />

        <div className="max-w-6xl mx-auto px-6 pt-16 pb-10">
          {/* Main footer grid */}
          <div className="grid sm:grid-cols-3 gap-12 sm:gap-8 mb-14">
            {/* Brand column */}
            <div className="sm:col-span-1">
              <NavLink to="/" className="inline-block mb-4">
                <span className="text-gold font-bold text-xl tracking-tight">
                  Robin Stephens Rohr
                </span>
              </NavLink>
              <p className="text-ivory/50 text-sm leading-relaxed">
                Author, journalist, and integrative health advocate based in
                Hawai&rsquo;i.
              </p>
            </div>

            {/* Quick Links column */}
            <div className="sm:col-span-1">
              <h4 className="text-ivory/80 font-semibold text-xs tracking-[0.2em] uppercase mb-5">
                Quick Links
              </h4>
              <ul className="space-y-3">
                {navLinks.map((link) => (
                  <li key={link.to}>
                    <NavLink
                      to={link.to}
                      end={link.to === "/"}
                      className="text-ivory/50 text-sm font-medium hover:text-gold transition-colors"
                    >
                      {link.label}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>

            {/* Featured quote column */}
            <div className="sm:col-span-1">
              <h4 className="text-ivory/80 font-semibold text-xs tracking-[0.2em] uppercase mb-5">
                Words to Live By
              </h4>
              <blockquote className="text-ivory/40 text-sm italic leading-relaxed border-l-2 border-gold/30 pl-4">
                &ldquo;There is only one thing in life, and that is the
                continual renewal of inspiration.&rdquo;
              </blockquote>
            </div>
          </div>

          {/* Divider */}
          <div className="h-px bg-ivory/10 mb-8" />

          {/* Bottom bar */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-ivory/30 text-xs">
              &copy; {new Date().getFullYear()} Robin Stephens Rohr. All rights
              reserved.
            </p>
            <p className="text-ivory/30 text-xs">
              Hawai&rsquo;i &middot; Author &middot; Journalist &middot;
              Advocate
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
