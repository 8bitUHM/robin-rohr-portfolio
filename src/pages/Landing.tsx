import { useEffect } from "react";

import { useLocation } from "react-router-dom";

import { useScrollAnimation } from "../hooks/useScrollAnimation";

import SectionDivider, { SECTION_COLORS } from "../components/SectionDivider";

import Home from "./Home";



export default function Landing() {

  const location = useLocation();

  useScrollAnimation();



  useEffect(() => {

    if (!location.hash) return;

    const id = location.hash.slice(1);

    const el = document.getElementById(id);

    if (el) {

      requestAnimationFrame(() => {

        el.scrollIntoView({ behavior: "smooth" });

      });

    }

  }, [location.hash]);



  return (

    <>

      <Home />



      <SectionDivider

        from={SECTION_COLORS.ivory}

        to={SECTION_COLORS.navy900}

        wave="deep"

        className="h-10 md:h-14"

      />

    </>

  );

}

