"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { PROCESS_STEPS } from "@/lib/constants";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { GlassCard } from "@/components/ui/GlassCard";

gsap.registerPlugin(ScrollTrigger);

function StepVisual({ variant }: { variant: (typeof PROCESS_STEPS)[number]["variant"] }) {
  if (variant === "analyze") {
    return (
      <div className="space-y-2 p-4 font-mono text-[10px] text-white/50">
        <p>Analyzing current workflow..</p>
        {["System check", "Process check", "Speed check", "Manual work", "Repetative task"].map(
          (item) => (
            <div key={item} className="flex items-center gap-2">
              <div className="h-1 w-1 rounded-full bg-[var(--accent-pink)]" />
              {item}
            </div>
          )
        )}
      </div>
    );
  }
  if (variant === "develop") {
    const code = `class AutomationTrigger:
  def check_trigger(self, value):
    if value > self.threshold:
      return "Automation triggered!"`;
    return (
      <pre className="overflow-hidden p-4 font-mono text-[9px] leading-relaxed text-[var(--accent-pink)]/80">
        {code}
      </pre>
    );
  }
  if (variant === "integrate") {
    return (
      <div className="flex items-center justify-center gap-4 p-6">
        <div className="rounded-xl border border-[var(--accent-pink)]/30 bg-[var(--accent-purple)]/20 px-4 py-3 text-xs text-white">
          Our solution
        </div>
        <div className="h-px w-8 bg-gradient-to-r from-[var(--accent-pink)] to-[var(--accent-purple)]" />
        <div className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-xs text-white/70">
          Your stack
        </div>
      </div>
    );
  }
  return (
    <div className="space-y-2 p-4">
      {[
        { name: "Chatbot system", status: "Efficiency will increase by 20%" },
        { name: "Workflow system", status: "Update available.." },
        { name: "Sales system", status: "Up to date" },
      ].map((s) => (
        <div key={s.name} className="flex items-center justify-between rounded-lg bg-black/40 px-3 py-2 text-xs">
          <span className="text-white/80">{s.name}</span>
          <span className="text-[var(--accent-pink)]">{s.status}</span>
        </div>
      ))}
    </div>
  );
}

export function Process() {
  const sectionRef = useRef<HTMLElement>(null);
  const stepsRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const steps = stepsRef.current?.querySelectorAll("[data-step]");
      if (!steps?.length) return;

      steps.forEach((step, i) => {
        gsap.from(step, {
          scrollTrigger: {
            trigger: step,
            start: "top 80%",
            end: "top 20%",
            toggleActions: "play none none reverse",
          },
          opacity: 0,
          y: 60,
          duration: 0.8,
          delay: i * 0.1,
          ease: "power3.out",
        });
      });
    },
    { scope: sectionRef }
  );

  return (
    <section id="process" ref={sectionRef} className="section-padding relative">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-[var(--accent-purple)]/5 to-transparent" />
      <Container>
        <SectionHeader
          label="Process"
          title="How We Work"
          description="A proven workflow from discovery to launch—built for clarity, speed, and quality."
        />

        <div ref={stepsRef} className="grid gap-6 md:grid-cols-2">
          {PROCESS_STEPS.map((step) => (
            <GlassCard key={step.step} hover className="overflow-hidden">
              <div data-step>
                <div className="mb-4 min-h-[120px] overflow-hidden rounded-xl bg-black/30">
                  <StepVisual variant={step.variant} />
                </div>
                <span className="text-xs font-medium text-[var(--accent-pink)]">{step.step}</span>
                <h3 className="mt-1 text-xl font-semibold text-white">{step.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-[var(--text-muted)]">
                  {step.description}
                </p>
              </div>
            </GlassCard>
          ))}
        </div>
      </Container>
    </section>
  );
}
