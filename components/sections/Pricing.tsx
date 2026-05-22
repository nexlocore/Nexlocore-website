"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { PRICING_PLANS } from "@/lib/constants";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/cn";

export function Pricing() {
  const [annual, setAnnual] = useState(false);

  return (
    <section id="pricing" className="section-padding relative">
      <Container>
        <SectionHeader
          label="Pricing"
          title="The Best AI Automation, at the Right Price"
          description="Choose a plan that fits your business needs and start automating with AI"
        />

        <div className="mb-12 flex items-center justify-center gap-4">
          <button
            type="button"
            onClick={() => setAnnual(false)}
            className={cn(
              "text-sm transition-colors",
              !annual ? "text-white" : "text-white/50"
            )}
          >
            Monthly
          </button>
          <button
            type="button"
            onClick={() => setAnnual(!annual)}
            className="relative h-7 w-12 rounded-full bg-white/10 transition-colors"
            aria-label="Toggle billing period"
          >
            <motion.div
              className="absolute top-1 h-5 w-5 rounded-full bg-gradient-to-r from-[#df7afe] to-[#814ac8]"
              animate={{ left: annual ? "26px" : "4px" }}
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
            />
          </button>
          <button
            type="button"
            onClick={() => setAnnual(true)}
            className={cn(
              "text-sm transition-colors",
              annual ? "text-white" : "text-white/50"
            )}
          >
            Annually
          </button>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {PRICING_PLANS.map((plan) => (
            <motion.div
              key={plan.name}
              whileHover={{ y: -6 }}
              className={cn(
                "glass relative flex flex-col rounded-[18px] p-8",
                plan.popular &&
                  "border-[var(--accent-pink)]/30 bg-gradient-to-b from-[rgba(129,74,200,0.15)] to-[rgba(13,13,13,0.8)]"
              )}
            >
              {plan.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-[#df7afe] to-[#814ac8] px-4 py-1 text-xs font-medium text-white">
                  Popular
                </span>
              )}
              <h3 className="text-lg font-semibold text-white">{plan.name}</h3>
              <div className="mt-4">
                {plan.name === "Enterprise" ? (
                  <span className="text-4xl font-semibold text-white">Custom</span>
                ) : (
                  <>
                    <span className="text-4xl font-semibold text-white">
                      ${plan.price.monthly}
                    </span>
                    <span className="text-sm text-white/50">/month</span>
                  </>
                )}
              </div>
              <p className="mt-3 text-sm text-[var(--text-muted)]">{plan.description}</p>
              <Button
                href="/contact"
                variant={plan.popular ? "primary" : "secondary"}
                className="mt-6 w-full"
              >
                {plan.cta}
              </Button>
              <p className="mt-6 text-xs font-medium text-white/50">What&apos;s Included:</p>
              <ul className="mt-3 flex flex-col gap-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-sm text-white/70">
                    <Check size={16} className="mt-0.5 shrink-0 text-[var(--accent-pink)]" />
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
