"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export function CTA() {
  return (
    <section className="section-padding relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="h-[400px] w-[600px] glow-orb" />
      </div>
      <Container className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="glass mx-auto max-w-[800px] rounded-[24px] px-8 py-16 text-center md:px-16"
          style={{
            background:
              "linear-gradient(149deg, rgba(129,74,200,0.25) 0%, rgba(13,13,13,0.9) 100%)",
          }}
        >
          <h2 className="text-[28px] font-semibold leading-tight tracking-[-0.02em] text-white md:text-[40px] lg:text-[45px]">
            Let&apos;s Build Something{" "}
            <span className="gradient-text">Exceptional</span>
          </h2>
          <p className="mt-4 text-base text-[var(--text-muted)]">
            Ready to bring your next digital product to life? Let&apos;s talk.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Button href="/contact" variant="primary">
              Start Your Project Today
              <ArrowRight size={16} />
            </Button>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
