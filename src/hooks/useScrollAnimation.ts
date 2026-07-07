import { useEffect } from "react";

function revealFadeInsInViewport() {
  const viewportHeight =
    window.innerHeight || document.documentElement.clientHeight;

  document.querySelectorAll(".fade-in:not(.visible)").forEach((el) => {
    const rect = el.getBoundingClientRect();
    if (rect.top < viewportHeight && rect.bottom > 0) {
      el.classList.add("visible");
    }
  });
}

export function useScrollAnimation() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.01, rootMargin: "0px 0px 10% 0px" },
    );

    const observeAll = () => {
      document.querySelectorAll(".fade-in:not(.visible)").forEach((el) => {
        observer.observe(el);
      });
      revealFadeInsInViewport();
    };

    observeAll();

    window.addEventListener("scroll", revealFadeInsInViewport, { passive: true });
    window.addEventListener("resize", revealFadeInsInViewport);

    const revealAfterHashScroll = window.setTimeout(revealFadeInsInViewport, 400);

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", revealFadeInsInViewport);
      window.removeEventListener("resize", revealFadeInsInViewport);
      window.clearTimeout(revealAfterHashScroll);
    };
  }, []);
}
