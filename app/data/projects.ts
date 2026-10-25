import type { Project } from "./types";

/**
 * Proyectos del portafolio.
 *
 * Para agregar uno nuevo: copiar un objeto, cambiar `slug` (único) y marcar
 * `featured: true` si debe aparecer entre los primeros.
 */
export const projects: Project[] = [
  {
    slug: "golden-fantasy-web",
    title: "Golden Fantasy",
    description:
      "Tienda de bisutería artesanal: catálogo con filtros por categoría y búsqueda, carrito y panel de administración. El navegador nunca llama al backend directamente, la sesión se resuelve en el servidor con NextAuth.",
    tech: ["Next.js", "React", "TypeScript", "Tailwind CSS", "NextAuth"],
    repositoryUrl: "https://github.com/oriana0anairo/golden-fantasy-web",
    featured: true,
  },
  {
    slug: "golden-fantasy-api",
    title: "Golden Fantasy API",
    description:
      "Backend de la tienda: dueño del modelo de datos y la lógica de negocio. Autenticación con JWT y roles, catálogo, órdenes y cobro con Mercado Pago, con verificación de firma en el webhook de confirmación.",
    tech: [
      "TypeScript",
      "Node.js",
      "Express",
      "Prisma",
      "PostgreSQL",
      "JWT",
      "Zod",
    ],
    repositoryUrl: "https://github.com/oriana0anairo/golden-fantasy-api",
    featured: true,
  },
  {
    slug: "cv-generator",
    title: "CV Generator",
    description:
      "Generador de currículums vitae con campos básicos. Interfaz construida con React y TypeScript, consume la API propia del proyecto.",
    tech: ["React", "TypeScript"],
    repositoryUrl: "https://github.com/oriana0anairo/CV-Generator",
  },
  {
    slug: "cv-generator-api",
    title: "CV Generator API",
    description:
      "Backend del generador de currículums: modelado de datos con Prisma y exposición de una API REST en TypeScript.",
    tech: ["TypeScript", "Prisma", "REST API"],
    repositoryUrl: "https://github.com/oriana0anairo/cv-generator-api",
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
