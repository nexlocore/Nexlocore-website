"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { TESTIMONIALS } from "@/lib/constants";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function Testimonials() {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    let animationId: number;
    let position = 0;

    const animate = () => {
      position += 0.5;
      if (position >= el.scrollWidth / 2) position = 0;
      el.scrollLeft = position;
      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationId);
  }, []);

  const items = [...TESTIMONIALS, ...TESTIMONIALS];

  return (
    <section className="section-padding overflow-hidden">
      <Container>
        <SectionHeader
          label="Testimonials"
          title="Why Businesses Love Our AI Solutions"
          description="Real businesses, real results with AI automation."
        />
      </Container>

      <div
        ref={scrollRef}
        className="mt-8 flex gap-6 overflow-hidden px-6"
        style={{ scrollBehavior: "auto" }}
      >
        {items.map((t, i) => (
          <motion.blockquote
            key={`${t.name}-${i}`}
            whileHover={{ scale: 1.02 }}
            className="glass w-[min(90vw,380px)] shrink-0 rounded-[18px] p-8"
          >
            <p className="text-sm leading-relaxed text-white/80">&ldquo;{t.quote}&rdquo;</p>
            <footer className="mt-6 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-[#df7afe] to-[#814ac8] text-sm font-semibold text-white">
                {t.name.charAt(0)}
              </div>
              <div>
                <cite className="not-italic text-sm font-semibold text-white">{t.name}</cite>
                <p className="text-xs text-[var(--text-muted)]">{t.role}</p>
              </div>
            </footer>
          </motion.blockquote>
        ))}
      </div>
    </section>
  );
}
