import type { Metadata } from "next";
import { Process } from "@/components/sections/Process";
import { CTA } from "@/components/sections/CTA";

export const metadata: Metadata = {
  title: "Process — Nexlocore Technologies",
  description:
    "How we work: discovery, strategy, design, development, testing, and launch.",
};

export default function ProcessPage() {
  return (
    <>
      <section className="pt-32" />
      <Process />
      <CTA />
    </>
  );
}
