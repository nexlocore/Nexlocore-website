"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/cn";

type SectionHeaderProps = {
  label?: string;
  title: string;
  description?: string;
  className?: string;
  align?: "left" | "center";
};

export function SectionHeader({
  label,
  title,
  description,
  className,
  align = "center",
}: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "mb-16 max-w-[720px]",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {label && (
        <span className="mb-4 inline-block text-sm font-medium tracking-wide text-[var(--accent-pink)]">
          {label}
        </span>
      )}
      <h2 className="text-[35px] font-semibold leading-[1.15] tracking-[-0.02em] text-white md:text-[45px] lg:text-[50px]">
        {title}
      </h2>
      {description && (
        <p className="mt-5 text-base leading-relaxed text-[var(--text-muted)] md:text-lg">
          {description}
        </p>
      )}
    </motion.div>
  );
}
