"use client";

import { useState } from "react";
import {
  LOGO_CLOUD,
  PORTFOLIO_CATEGORIES,
  PORTFOLIO_PROJECTS,
  type PortfolioCategory,
} from "@/lib/constants";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { GlassCard } from "@/components/ui/GlassCard";
import { cn } from "@/lib/cn";

export function PortfolioGrid() {
  const [activeCategory, setActiveCategory] = useState<PortfolioCategory>("All");

  const filtered =
    activeCategory === "All"
      ? PORTFOLIO_PROJECTS
      : PORTFOLIO_PROJECTS.filter((p) => p.category === activeCategory);

  return (
    <section className="section-padding relative">
      <Container>
        <SectionHeader
          label="Portfolio"
          title="Our Work"
          description="Explore projects across web, mobile, design, branding, graphics, and video."
        />

        <div className="mb-12 flex flex-wrap justify-center gap-2">
          {PORTFOLIO_CATEGORIES.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setActiveCategory(category)}
              className={cn(
                "rounded-full border px-4 py-2 text-sm transition-all",
                activeCategory === category
                  ? "border-[var(--accent-pink)]/40 bg-[var(--accent-purple)]/20 text-white"
                  : "border-white/10 bg-white/5 text-white/60 hover:text-white"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {filtered.map((project) => (
            <GlassCard key={project.id} hover className="h-full">
              <div className="mb-4 flex items-center justify-between gap-4">
                <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-[var(--accent-pink)]">
                  {project.category}
                </span>
                <span className="text-xs text-white/40">{project.highlight}</span>
              </div>
              <h3 className="text-xl font-semibold text-white">{project.name}</h3>
              <p className="mt-3 text-sm leading-relaxed text-[var(--text-muted)]">
                {project.description}
              </p>

              <div className="mt-6 space-y-4 border-t border-white/10 pt-6">
                <div>
                  <p className="text-xs font-medium text-[var(--accent-pink)]">Problem</p>
                  <p className="mt-1 text-sm text-[var(--text-muted)]">{project.problem}</p>
                </div>
                <div>
                  <p className="text-xs font-medium text-[var(--accent-pink)]">Solution</p>
                  <p className="mt-1 text-sm text-[var(--text-muted)]">{project.solution}</p>
                </div>
                <div>
                  <p className="text-xs font-medium text-[var(--accent-pink)]">Outcome</p>
                  <p className="mt-1 text-sm text-[var(--text-muted)]">{project.outcome}</p>
                </div>
                <div>
                  <p className="text-xs font-medium text-[var(--accent-pink)]">Tech Used</p>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-6 min-h-[120px] rounded-xl border border-white/10 bg-gradient-to-br from-[var(--accent-purple)]/20 to-black/40 p-4">
                <p className="text-xs text-white/40">Project visuals</p>
                <p className="mt-2 text-sm text-white/60">
                  Mockups, UI screens, and media for {project.name}
                </p>
              </div>
            </GlassCard>
          ))}
        </div>

        <div className="mt-24 text-center">
          <SectionHeader
            label="Clients"
            title="Brands We've Worked With"
            description="We collaborate with ambitious brands across industries to design, build, and scale digital experiences."
          />
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
        </div>
      </Container>
    </section>
  );
}
