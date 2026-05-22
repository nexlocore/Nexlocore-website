"use client";

import { motion } from "framer-motion";
import { BENEFITS } from "@/lib/constants";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { GlassCard } from "@/components/ui/GlassCard";
import {
  TrendingUp,
  Heart,
  Clock,
  DollarSign,
  BarChart3,
  Layers,
} from "lucide-react";

const icons = [TrendingUp, Heart, Clock, DollarSign, BarChart3];

export function Benefits() {
  return (
    <section id="benefits" className="section-padding relative">
      <Container>
        <SectionHeader
          label="Why Nexlocore"
          title="Why Choose Us"
          description="We combine creativity, technology, and AI to deliver digital products that perform and scale."
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {BENEFITS.map((benefit, i) => {
            const Icon = icons[i];
            return (
              <GlassCard key={benefit.title} hover>
                <motion.div
                  whileHover={{ rotate: [0, -5, 5, 0] }}
                  transition={{ duration: 0.4 }}
                  className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-[#df7afe]/20 to-[#814ac8]/20"
                >
                  <Icon size={20} className="text-[var(--accent-pink)]" />
                </motion.div>
                <h3 className="text-lg font-semibold text-white">{benefit.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[var(--text-muted)]">
                  {benefit.description}
                </p>
              </GlassCard>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
