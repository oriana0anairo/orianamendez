import type { ReactNode } from "react";

import { cn } from "@/app/lib/cn";

type CardProps = {
  children: ReactNode;
  /** Añade elevación y borde luminoso al pasar el cursor. */
  interactive?: boolean;
  className?: string;
};

/** Superficie base de las tarjetas del sitio (proyectos, certificados, stack). */
export function Card({ children, interactive = false, className }: CardProps) {
  return (
    <div
      className={cn(
        "group relative overflow-hidden rounded-3xl border border-white/10 bg-zinc-950/90 shadow-[0_0_30px_rgba(168,85,247,0.06)]",
        interactive &&
          "transition duration-300 hover:-translate-y-1 hover:border-fuchsia-400/40 hover:shadow-[0_0_45px_rgba(217,70,239,0.12)] motion-reduce:transform-none motion-reduce:transition-none",
        className,
      )}
    >
      {children}
    </div>
  );
}
