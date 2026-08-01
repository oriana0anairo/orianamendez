import type { Language } from "./types";

/**
 * Idiomas y su nivel según el MCER.
 *
 * Al aprobar un nuevo nivel basta con actualizar `level` y `note`; la sección
 * se oculta sola si la lista queda vacía.
 */
export const languages: Language[] = [
  {
    name: "Español",
    level: "Nativo",
  },
  {
    name: "Inglés",
    level: "A1",
    note: "En formación continua. Lectura de documentación técnica.",
  },
];
