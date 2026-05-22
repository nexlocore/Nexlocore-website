"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/cn";

type GlassCardProps = {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
};

export function GlassCard({ children, className, hover = true }: GlassCardProps) {
  return (
    <motion.div
      whileHover={hover ? { y: -4, borderColor: "rgba(255,255,255,0.2)" } : undefined}
      transition={{ duration: 0.3 }}
      className={cn(
        "glass rounded-[18px] p-6 transition-colors duration-300",
        className
      )}
    >
      {children}
    </motion.div>
  );
}
