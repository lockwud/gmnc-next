"use client";

import { useEffect, useRef } from "react";

export default function LandingPageEnhancements() {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = document.documentElement;
    root.classList.add("page-effects-ready");

    const updateScrollState = () => {
      root.classList.toggle("page-is-scrolled", window.scrollY > 8);
    };

    const cursor = cursorRef.current;
    let frame = 0;
    let x = 0;
    let y = 0;

    const moveCursor = (event: MouseEvent) => {
      x = event.clientX;
      y = event.clientY;

      if (frame) return;
      frame = window.requestAnimationFrame(() => {
        cursor?.style.setProperty("--cursor-x", `${x}px`);
        cursor?.style.setProperty("--cursor-y", `${y}px`);
        frame = 0;
      });
    };

    const setCursorState = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;
      cursor?.classList.toggle("is-hovering", Boolean(target?.closest("a, button")));
    };

    const revealItems = document.querySelectorAll(".landing-page section, .app-page section, .landing-footer");
    revealItems.forEach((item) => item.classList.add("scroll-reveal"));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("is-visible");
        });
      },
      { threshold: 0.14 }
    );

    revealItems.forEach((item) => observer.observe(item));
    updateScrollState();
    window.addEventListener("scroll", updateScrollState, { passive: true });
    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mouseover", setCursorState);

    return () => {
      root.classList.remove("page-effects-ready");
      root.classList.remove("page-is-scrolled");
      if (frame) window.cancelAnimationFrame(frame);
      observer.disconnect();
      window.removeEventListener("scroll", updateScrollState);
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseover", setCursorState);
    };
  }, []);

  return <div ref={cursorRef} className="soft-cursor" aria-hidden="true" />;
}
