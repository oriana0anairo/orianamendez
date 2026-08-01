import type { ReactNode } from "react";

import { cn } from "@/app/lib/cn";

export type TagVariant = "neutral" | "accent" | "success";
export type TagSize = "sm" | "md";

const VARIANT_STYLES: Record<TagVariant, string> = {
  neutral: "border-white/10 bg-zinc-900 text-zinc-200",
  accent: "border-fuchsia-400/30 bg-fuchsia-500/10 text-fuchsia-200",
  success: "border-emerald-400/30 bg-emerald-500/10 text-emerald-300",
};

const SIZE_STYLES: Record<TagSize, string> = {
  sm: "gap-1 px-2 py-[2px] text-[10px] font-medium",
  md: "gap-2 px-3 py-1 text-sm",
};

type TagProps = {
  children: ReactNode;
  variant?: TagVariant;
  size?: TagSize;
  className?: string;
};

/** Etiqueta redondeada para tecnologías, categorías y niveles. */
export function Tag({
  children,
  variant = "neutral",
  size = "md",
  className,
}: TagProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border",
        VARIANT_STYLES[variant],
        SIZE_STYLES[size],
        className,
      )}
    >
      {children}
    </span>
  );
}
