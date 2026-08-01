import type { ReactNode } from "react";

import { cn } from "@/app/lib/cn";

type ExternalLinkProps = {
  href: string;
  children: ReactNode;
  /** Etiqueta accesible cuando el texto visible no basta por sí solo. */
  ariaLabel?: string;
  className?: string;
};

/**
 * Enlace a un sitio externo con los atributos de seguridad siempre presentes
 * (`rel="noopener noreferrer"`), para no depender de recordarlos en cada uso.
 */
export function ExternalLink({
  href,
  children,
  ariaLabel,
  className,
}: ExternalLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={ariaLabel}
      className={cn(
        "rounded-full transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-fuchsia-400",
        className,
      )}
    >
      {children}
    </a>
  );
}
