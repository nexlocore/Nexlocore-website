import type { Metadata } from "next";
import { ABOUT_CONTENT } from "@/lib/constants";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { GlassCard } from "@/components/ui/GlassCard";
import { CTA } from "@/components/sections/CTA";

export const metadata: Metadata = {
  title: "About — Nexlocore Technologies",
  description: ABOUT_CONTENT.intro,
};

export default function AboutPage() {
  return (
    <>
      <section className="section-padding pt-32">
        <Container>
          <SectionHeader
            label="About"
            title="Building Digital Products That Scale"
            description={ABOUT_CONTENT.intro}
          />

          <div className="grid gap-6 md:grid-cols-2">
            <GlassCard hover>
              <p className="text-xs font-medium text-[var(--accent-pink)]">Mission</p>
              <p className="mt-3 text-lg leading-relaxed text-white">{ABOUT_CONTENT.mission}</p>
            </GlassCard>
            <GlassCard hover>
              <p className="text-xs font-medium text-[var(--accent-pink)]">Vision</p>
              <p className="mt-3 text-lg leading-relaxed text-white">{ABOUT_CONTENT.vision}</p>
            </GlassCard>
          </div>

          <GlassCard hover className="mt-6">
            <p className="text-xs font-medium text-[var(--accent-pink)]">Our Team</p>
            <p className="mt-3 text-lg leading-relaxed text-[var(--text-muted)]">
              {ABOUT_CONTENT.team}
            </p>
          </GlassCard>
        </Container>
      </section>
      <CTA />
    </>
  );
}
