import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import { BRAND } from "@/lib/constants";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { GlassCard } from "@/components/ui/GlassCard";

export const metadata: Metadata = {
  title: "Contact — Nexlocore Technologies",
  description: "Start your project with Nexlocore Technologies.",
};

export default function ContactPage() {
  return (
    <section className="section-padding flex min-h-screen items-center pt-24 pb-20">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium text-[var(--accent-pink)]">Contact</p>
          <h1 className="mt-4 text-4xl font-semibold text-white md:text-5xl">Start Your Project</h1>
          <p className="mt-4 text-[var(--text-muted)]">
            Tell us about your goals and we&apos;ll get back to you shortly.
          </p>
        </div>

        <div className="mx-auto mt-12 grid max-w-4xl gap-8 lg:grid-cols-5">
          <GlassCard className="lg:col-span-3">
            <form className="space-y-5">
              <div>
                <label htmlFor="name" className="mb-2 block text-sm text-white/70">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white outline-none focus:border-[var(--accent-pink)]/40"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="mb-2 block text-sm text-white/70">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white outline-none focus:border-[var(--accent-pink)]/40"
                  placeholder="you@company.com"
                />
              </div>
              <div>
                <label htmlFor="phone" className="mb-2 block text-sm text-white/70">
                  Phone
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white outline-none focus:border-[var(--accent-pink)]/40"
                  placeholder="Your phone number"
                />
              </div>
              <div>
                <label htmlFor="message" className="mb-2 block text-sm text-white/70">
                  Project details
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  className="w-full resize-none rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white outline-none focus:border-[var(--accent-pink)]/40"
                  placeholder="Tell us about your project..."
                />
              </div>
              <Button href="#" variant="primary" className="w-full justify-center">
                Start Your Project
                <ArrowRight size={16} />
              </Button>
            </form>
          </GlassCard>

          <div className="flex flex-col gap-4 lg:col-span-2">
            <GlassCard>
              <p className="text-xs font-medium text-[var(--accent-pink)]">Email</p>
              <a
                href={`mailto:${BRAND.email}`}
                className="mt-2 block text-white hover:text-[var(--accent-pink)]"
              >
                {BRAND.email}
              </a>
            </GlassCard>
            <GlassCard>
              <p className="text-xs font-medium text-[var(--accent-pink)]">Phone</p>
              <p className="mt-2 text-white">{BRAND.phone}</p>
            </GlassCard>
            <GlassCard>
              <p className="text-xs font-medium text-[var(--accent-pink)]">Website</p>
              <a
                href={`https://${BRAND.website}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 block text-white hover:text-[var(--accent-pink)]"
              >
                {BRAND.website}
              </a>
            </GlassCard>
          </div>
        </div>
      </Container>
    </section>
  );
}
