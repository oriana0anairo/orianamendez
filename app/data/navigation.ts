import { experience } from "./experience";
import { languages } from "./languages";

/**
 * Identificadores de las secciones de la página.
 *
 * Son la única fuente de verdad para los anclas (`#id`) del menú y de los
 * botones internos, de modo que renombrar una sección no rompe la navegación.
 */
export const SECTION = {
  hero: "inicio",
  about: "about",
  experience: "experience",
  skills: "skills",
  projects: "projects",
  certificates: "certificates",
  languages: "languages",
  contact: "contact",
} as const;

export type SectionId = (typeof SECTION)[keyof typeof SECTION];

export type NavLink = {
  id: SectionId;
  label: string;
};

/**
 * Enlaces del menú principal. Las secciones que dependen de datos aún vacíos
 * (experiencia, idiomas) se omiten para no enlazar a un bloque inexistente.
 */
export const navLinks: NavLink[] = [
  { id: SECTION.about, label: "Sobre mí" },
  ...(experience.length > 0
    ? [{ id: SECTION.experience, label: "Experiencia" }]
    : []),
  { id: SECTION.skills, label: "Stack" },
  { id: SECTION.projects, label: "Proyectos" },
  { id: SECTION.certificates, label: "Certificados" },
  ...(languages.length > 0
    ? [{ id: SECTION.languages, label: "Idiomas" }]
    : []),
  { id: SECTION.contact, label: "Contacto" },
];
