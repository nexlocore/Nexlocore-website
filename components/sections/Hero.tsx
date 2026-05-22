"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { LOGO_CLOUD } from "@/lib/constants";

export function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden pt-32 pb-20">
      <div className="pointer-events-none absolute top-0 left-1/2 h-[600px] w-[800px] -translate-x-1/2 glow-orb" />
      <motion.div
        className="pointer-events-none absolute top-1/4 right-0 h-[400px] w-[400px] rounded-full opacity-30"
        style={{
          background:
            "linear-gradient(229deg, rgba(223,122,254,0.4) 0%, rgba(129,74,200,0.2) 50%, transparent 100%)",
          filter: "blur(80px)",
        }}
        animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      <Container className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center"
        >
          <Badge>Design. Build. Scale.</Badge>

          <h1 className="mt-8 max-w-[900px] text-[40px] font-semibold leading-[1.1] tracking-[-0.03em] text-white md:text-[56px] lg:text-[70px]">
          Build Future-Ready Digital Products
          </h1>

          <p className="mt-6 max-w-[560px] text-base leading-relaxed text-[var(--text-muted)] md:text-lg">
            Nexlocore Technologies is a full-service IT company delivering high-performance
            web, mobile, and design solutions powered by creativity, technology, and AI.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Button href="/contact" variant="primary">
              Start a Project
              <ArrowRight size={16} />
            </Button>
            <Button href="/portfolio" variant="secondary">
              View Our Work
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-20"
        >
          <p className="mb-2 text-center text-sm font-medium text-white/70">
            Trusted by Growing Brands & Startups
          </p>
          <p className="mb-8 text-center text-sm text-[var(--text-muted)]">
            We collaborate with ambitious brands across industries to design, build, and scale digital experiences.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 opacity-50">
            {LOGO_CLOUD.map((name) => (
              <span
                key={name}
                className="text-sm font-medium tracking-wider text-white/40 uppercase md:text-base"
              >
                {name}
              </span>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="relative mx-auto mt-16 max-w-[1000px]"
        >
          {/* <div className="glass-subtle overflow-hidden rounded-[18px] border border-white/10 p-1">
            <div
              className="rounded-[14px] p-6"
              style={{ background: "var(--gradient-card)" }}
            >
              <div className="mb-4 flex items-center justify-between">
                <span className="text-xs text-white/50">All Tasks</span>
                <span className="rounded-full bg-[var(--accent-purple)]/30 px-3 py-1 text-xs text-[var(--accent-pink)]">
                  Waiting for approval
                </span>
              </div>
              <div className="space-y-3">
                {[
                  { task: "Payroll management", meta: "Due on 2nd july" },
                  { task: "Employee Tracking", meta: "2 days ago" },
                  { task: "Social media post", meta: "Cancelled by user", cancelled: true },
                  { task: "Lead list", meta: "70% prepared", progress: 70 },
                  { task: "Payment reminder", meta: "sent to selected clients" },
                ].map((item) => (
                  <div
                    key={item.task}
                    className="flex items-center justify-between rounded-xl bg-black/40 px-4 py-3"
                  >
                    <div className="flex items-center gap-3">
                      <div className="h-2 w-2 rounded-full bg-[var(--accent-pink)]" />
                      <span
                        className={`text-sm ${item.cancelled ? "text-white/40 line-through" : "text-white/90"}`}
                      >
                        {item.task}
                      </span>
                    </div>
                    <span className="text-xs text-white/40">{item.meta}</span>
                  </div>
                ))}
              </div>
            </div>
          </div> */}
        </motion.div>
      </Container>
    </section>
  );
}
