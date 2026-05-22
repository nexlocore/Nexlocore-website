import { cn } from "@/lib/cn";

type BadgeProps = {
  children: React.ReactNode;
  className?: string;
};

export function Badge({ children, className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border border-[var(--border)] bg-white/5 px-3 py-1 text-xs font-medium text-white/90 backdrop-blur-sm",
        className
      )}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent-pink)]" />
      {children}
    </span>
  );
}
