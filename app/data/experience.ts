import type { ExperienceItem } from "./types";

/**
 * Experiencia profesional, del puesto más reciente al más antiguo.
 *
 * La sección "Experiencia" se oculta automáticamente mientras esta lista esté
 * vacía, así que el sitio nunca muestra un bloque a medio llenar.
 *
 * Plantilla para un puesto nuevo:
 *
 * ```ts
 * {
 *   slug: "empresa-rol",              // identificador único
 *   role: "Frontend Developer",
 *   company: "Nombre de la empresa",
 *   location: "Remoto",
 *   startDate: "2026-03",             // YYYY-MM
 *   endDate: "2026-09",               // omitir si sigue vigente
 *   description: "Qué construiste y para quién, en una o dos frases.",
 *   achievements: [
 *     "Logro concreto, idealmente con un número que lo respalde.",
 *   ],
 *   tech: ["React", "TypeScript"],
 * }
 * ```
 */
export const experience: ExperienceItem[] = [];
