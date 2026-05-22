"use client";

import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight } from "lucide-react";
import { CASE_STUDIES } from "@/lib/constants";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/cn";

gsap.registerPlugin(ScrollTrigger);

export function CaseStudies() {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const dragStart = useRef({ x: 0, scrollLeft: 0 });

  useGSAP(
    () => {
      const section = sectionRef.current;
      const track = trackRef.current;
      if (!section || !track) return;

      const getScrollDistance = () =>
        Math.max(track.scrollWidth - window.innerWidth + 80, window.innerHeight);

      const setSectionHeight = () => {
        section.style.height = `${window.innerHeight + getScrollDistance()}px`;
      };

      setSectionHeight();

      gsap.to(track, {
        x: () => -(track.scrollWidth - track.clientWidth),
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: () => `+=${getScrollDistance()}`,
          scrub: 1,
          invalidateOnRefresh: true,
        },
      });

      const onResize = () => {
        setSectionHeight();
        ScrollTrigger.refresh();
      };
      window.addEventListener("resize", onResize);

      return () => {
        window.removeEventListener("resize", onResize);
        section.style.height = "";
      };
    },
    { scope: sectionRef }
  );

  const onPointerDown = (e: React.PointerEvent) => {
    setIsDragging(true);
    dragStart.current = { x: e.clientX, scrollLeft: trackRef.current?.scrollLeft ?? 0 };
  };

  const onPointerMove = (e: React.PointerEvent) => {
    if (!isDragging || !trackRef.current) return;
    const dx = e.clientX - dragStart.current.x;
    trackRef.current.scrollLeft = dragStart.current.scrollLeft - dx;
  };

  return (
    <section id="cases" ref={sectionRef} className="relative">
      <Container className="section-padding pb-0">
        <SectionHeader
          label="Portfolio"
          title="Selected Work"
          description="A glimpse of what we've built for startups, businesses, and global brands."
        />
        <p className="mb-8 text-center text-xs tracking-widest text-white/40 uppercase">
          DRAG TO EXPLORE
        </p>
      </Container>

      <div className="sticky top-0 flex h-screen flex-col justify-center overflow-hidden">
        <div
          ref={trackRef}
          className={cn(
            "flex cursor-grab gap-6 px-6 will-change-transform md:px-10",
            isDragging && "cursor-grabbing"
          )}
          onPointerDown={onPointerDown}
          onPointerUp={() => setIsDragging(false)}
          onPointerLeave={() => setIsDragging(false)}
          onPointerMove={onPointerMove}
          data-lenis-prevent
        >
          {CASE_STUDIES.map((study) => (
            <article
              key={study.company}
              className="glass w-[min(90vw,420px)] shrink-0 rounded-[18px] p-8"
            >
              <blockquote className="text-lg font-medium leading-snug text-white">
                &ldquo;{study.quote}&rdquo;
              </blockquote>
              <p className="mt-4 text-sm text-[var(--text-muted)]">
                <span className="font-semibold text-white">{study.company}</span>,{" "}
                {study.description}
              </p>
              <p className="mt-6 text-xs font-medium text-[var(--accent-pink)]">Details :</p>
              <div className="mt-3 grid grid-cols-2 gap-3">
                {study.impact.map((item) => (
                  <div
                    key={item.label}
                    className="rounded-xl border border-white/10 bg-white/5 p-3"
                  >
                    <p className="text-xl font-semibold text-white">{item.value}</p>
                    <p className="mt-1 text-[10px] text-white/50">{item.label}</p>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>

        <Container className="mt-8 pb-8">
          <div className="flex justify-center">
            <Button href="/portfolio" variant="secondary">
              Explore All Projects
              <ArrowRight size={16} />
            </Button>
          </div>
        </Container>
      </div>
    </section>
  );
}
