import type { Project } from "./types";

/**
 * Proyectos del portafolio.
 *
 * Para agregar uno nuevo: copiar un objeto, cambiar `slug` (único) y marcar
 * `featured: true` si debe aparecer entre los primeros.
 */
export const projects: Project[] = [
  {
    slug: "cv-generator",
    title: "CV Generator",
    description:
      "Generador de currículums vitae con campos básicos. Interfaz construida con React y TypeScript, consume la API propia del proyecto.",
    tech: ["React", "TypeScript"],
    repositoryUrl: "https://github.com/oriana0anairo/CV-Generator",
    featured: true,
  },
  {
    slug: "cv-generator-api",
    title: "CV Generator API",
    description:
      "Backend del generador de currículums: modelado de datos con Prisma y exposición de una API REST en TypeScript.",
    tech: ["TypeScript", "Prisma", "REST API"],
    repositoryUrl: "https://github.com/oriana0anairo/cv-generator-api",
    featured: true,
  },
  {
    slug: "ascencion",
    title: "Ascensión",
    description:
      "Proyecto universitario colaborativo. Juego de naves espaciales que enfrentan oleadas de enemigos, desarrollado en Java.",
    tech: ["Java", "Programación orientada a objetos"],
    repositoryUrl: "https://github.com/oriana0anairo/Ascencion",
  },
  {
    slug: "calculadora-de-calorias",
    title: "Calculadora de calorías",
    description:
      "Aplicación de práctica en React: cálculo de calorías con manejo de estado y componentes de Material UI.",
    tech: ["React", "JavaScript", "Material UI"],
    repositoryUrl: "https://github.com/oriana0anairo/calculadora-de-calorias",
  },
  {
    slug: "repuestos-de-carros",
    title: "Repuestos de carros",
    description:
      "Aplicación de práctica de maquetación y composición de componentes con React y Material UI.",
    tech: ["React", "JavaScript", "Material UI"],
    repositoryUrl: "https://github.com/oriana0anairo/repuestosdecarros",
  },
];

/** Proyectos destacados primero, conservando el orden de cada grupo. */
export const sortedProjects: Project[] = [
  ...projects.filter((project) => project.featured),
  ...projects.filter((project) => !project.featured),
];
