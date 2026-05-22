import type { Metadata } from "next";
import { Services } from "@/components/sections/Services";
import { CTA } from "@/components/sections/CTA";
import { Container } from "@/components/ui/Container";
import { SERVICES_PAGE_INTRO } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Services — Nexlocore Technologies",
  description: SERVICES_PAGE_INTRO,
};

export default function ServicesPage() {
  return (
    <>
      <section className="pt-32 pb-8">
        <Container className="text-center">
          <p className="text-sm font-medium text-[var(--accent-pink)]">Services</p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-white md:text-5xl">
            End-to-End Digital Solutions
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-[var(--text-muted)]">
            {SERVICES_PAGE_INTRO}
          </p>
        </Container>
      </section>
      <Services />
      <CTA />
    </>
  );
}
