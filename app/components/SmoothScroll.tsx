"use client";

import { useEffect } from "react";

// Smooth scrolling for in-page links, switched on only after the page has
// loaded: a page opened at an anchor (e.g. after switching language) lands
// there at once instead of sliding down from the top.
export function SmoothScroll() {
  useEffect(() => {
    const root = document.documentElement;
    let frame = 0;
    const enable = () => {
      frame = requestAnimationFrame(() => root.classList.add("smooth-scroll"));
    };
    if (document.readyState === "complete") enable();
    else window.addEventListener("load", enable, { once: true });
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("load", enable);
    };
  }, []);

  return null;
}
