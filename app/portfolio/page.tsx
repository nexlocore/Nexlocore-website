import type { Metadata } from "next";
import { PortfolioGrid } from "@/components/sections/PortfolioGrid";
import { CTA } from "@/components/sections/CTA";

export const metadata: Metadata = {
  title: "Portfolio — Nexlocore Technologies",
  description:
    "Explore our work across web, mobile apps, UI/UX, branding, graphics, and video.",
};

export default function PortfolioPage() {
  return (
    <>
      <section className="pt-32" />
      <PortfolioGrid />
      <CTA />
    </>
  );
}
