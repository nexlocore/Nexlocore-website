"use client";

import { useEffect, RefObject } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function useScrollReveal(
  ref: RefObject<HTMLElement | null>,
  options?: { y?: number; stagger?: number }
) {
  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const children = el.querySelectorAll("[data-reveal]");
    const targets = children.length ? children : [el];

    const ctx = gsap.context(() => {
      gsap.from(targets, {
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
        opacity: 0,
        y: options?.y ?? 50,
        duration: 0.8,
        stagger: options?.stagger ?? 0.1,
        ease: "power3.out",
      });
    }, el);

    return () => ctx.revert();
  }, [ref, options?.y, options?.stagger]);
}
