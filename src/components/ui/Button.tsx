import Link from "next/link";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "cream" | "outline" | "ghost";

const styles: Record<Variant, string> = {
  primary:
    "bg-crimson text-white hover:bg-crimson-700 shadow-[0_10px_30px_-12px_rgba(58,0,0,0.6)]",
  cream: "bg-cream text-crimson-900 hover:bg-cream-600",
  outline: "border border-white/70 text-white hover:bg-white hover:text-crimson",
  ghost: "text-crimson hover:bg-crimson/5",
};

export function Button({
  href,
  children,
  variant = "primary",
  className,
}: {
  href: string;
  children: ReactNode;
  variant?: Variant;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold tracking-wide transition-all duration-300 active:scale-[0.98]",
        styles[variant],
        className,
      )}
    >
      {children}
    </Link>
  );
}
