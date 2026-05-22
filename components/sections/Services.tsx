"use client";

import { useState } from "react";
import { SERVICES } from "@/lib/constants";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { GlassCard } from "@/components/ui/GlassCard";
import { cn } from "@/lib/cn";

function ServiceMockup({ variant }: { variant: (typeof SERVICES)[number]["variant"] }) {
  if (variant === "workflow") {
    return (
      <div className="space-y-2 p-4">
        {["Payroll management", "Employee Tracking", "Lead list"].map((t) => (
          <div key={t} className="flex items-center gap-2 rounded-lg bg-black/50 px-3 py-2 text-xs text-white/70">
            <div className="h-1.5 w-1.5 rounded-full bg-[var(--accent-pink)]" />
            {t}
          </div>
        ))}
      </div>
    );
  }
  if (variant === "assistant") {
    return (
      <div className="p-4">
        <div className="rounded-xl bg-black/50 p-4">
          <p className="text-xs text-white/50">What can I help with?</p>
          <p className="mt-2 text-sm text-white/80">
            Weather you want help in customer handling or make changes in your
            system just give me command
          </p>
          <div className="mt-3 flex flex-wrap gap-2">
            {["Add document", "Analyze", "Generate Image", "research"].map((c) => (
              <span key={c} className="rounded-full bg-white/10 px-2 py-1 text-[10px] text-white/60">
                {c}
              </span>
            ))}
          </div>
        </div>
      </div>
    );
  }
  if (variant === "sales") {
    return (
      <div className="space-y-2 p-4">
        {[
          { name: "Jack Daniel", email: "justin@main.com", company: "Xavier LLC" },
          { name: "Gorge Chapel", email: "gorge@mail.com", company: "Chapel LLC" },
        ].map((lead) => (
          <div key={lead.email} className="rounded-lg bg-black/50 p-3 text-xs">
            <div className="flex items-center gap-2">
              <div className="h-6 w-6 rounded-full bg-gradient-to-br from-[#df7afe] to-[#814ac8]" />
              <span className="font-medium text-white">{lead.name}</span>
              <span className="text-[10px] text-[var(--accent-pink)]">Verified</span>
            </div>
            <p className="mt-1 text-white/40">{lead.email}</p>
            <p className="text-white/40">{lead.company}</p>
          </div>
        ))}
      </div>
    );
  }
  return (
    <div className="p-4">
      <div className="rounded-xl bg-black/50 p-4">
        <p className="text-xs text-white/50">Hey David!</p>
        <p className="mt-1 text-sm text-white/80">Here is your Custom project & schedule</p>
        <div className="mt-3 rounded-lg bg-[var(--accent-purple)]/20 p-2 text-xs text-[var(--accent-pink)]">
          Customer Support Chatbot — 90% Finished
        </div>
        <div className="mt-2 flex gap-1">
          {["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"].map((d) => (
            <span key={d} className="flex-1 rounded bg-white/5 py-1 text-center text-[10px] text-white/50">
              {d}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export function Services() {
  const [active, setActive] = useState(0);

  return (
    <section id="services" className="section-padding relative">
      <Container>
        <SectionHeader
          label="Services"
          title="What We Do"
          description="End-to-end digital solutions—from web and mobile to design, branding, and video."
        />

        <div className="grid gap-6 lg:grid-cols-2">
          {SERVICES.map((service, i) => (
            <GlassCard
              key={service.id}
              className={cn(
                "cursor-pointer overflow-hidden transition-all duration-500",
                active === i && "ring-1 ring-[var(--accent-pink)]/40"
              )}
              hover
            >
              <div
                onMouseEnter={() => setActive(i)}
                onFocus={() => setActive(i)}
                role="button"
                tabIndex={0}
              >
                <div className="mb-4 min-h-[160px] overflow-hidden rounded-xl bg-black/30">
                  <ServiceMockup variant={service.variant} />
                </div>
                <p className="text-xs font-medium text-[var(--accent-pink)]">{service.title}</p>
                <h3 className="mt-1 text-xl font-semibold text-white">{service.subtitle}</h3>
                <p className="mt-3 text-sm leading-relaxed text-[var(--text-muted)]">
                  {service.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </GlassCard>
          ))}
        </div>
      </Container>
    </section>
  );
}
