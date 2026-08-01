import type { ReactNode } from "react";

import type { SectionId } from "@/app/data/navigation";
import { cn } from "@/app/lib/cn";

type SectionProps = {
  id: SectionId;
  /** Texto pequeño sobre el título, a modo de categoría. */
  eyebrow?: string;
  title: string;
  description?: string;
  children: ReactNode;
  className?: string;
};

/**
 * Contenedor común de las secciones de la página: unifica ancho, espaciado y
 * jerarquía tipográfica de los encabezados.
 */
export function Section({
  id,
  eyebrow,
  title,
  description,
  children,
  className,
}: SectionProps) {
  const headingId = `${id}-title`;

  return (
    <section
      id={id}
      aria-labelledby={headingId}
      className={cn(
        "mx-auto max-w-7xl px-6 py-20 md:px-12 md:py-24 lg:px-20",
        className,
      )}
    >
      <header className="mb-12">
        {eyebrow && (
          <p className="mb-3 text-sm uppercase tracking-[0.35em] text-fuchsia-200/70">
            {eyebrow}
          </p>
        )}

        <h2
          id={headingId}
          className="text-3xl font-semibold text-white md:text-4xl"
        >
          {title}
        </h2>

        {description && (
          <p className="mt-4 max-w-3xl text-base leading-7 text-zinc-400 md:text-lg">
            {description}
          </p>
        )}
      </header>

      {children}
    </section>
  );
}
