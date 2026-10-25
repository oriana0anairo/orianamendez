import type { SkillGroup } from "./types";

/**
 * Stack técnico agrupado por área.
 *
 * Para agregar una tecnología basta con añadirla al grupo correspondiente; el
 * nivel es opcional y solo se declara cuando aporta información.
 */
export const skillGroups: SkillGroup[] = [
  {
    title: "Frontend",
    skills: [
      { name: "React", level: "Avanzado" },
      { name: "TypeScript", level: "Avanzado" },
      { name: "Next.js", level: "Intermedio" },
      { name: "Material UI" },
      { name: "Tailwind CSS" },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Java", level: "Intermedio" },
      { name: "Spring Boot", level: "Intermedio" },
      { name: "Spring Data JPA" },
      { name: "Spring Security" },
      { name: "REST APIs" },
      { name: "Node.js", level: "Básico" },
      { name: "Express", level: "Básico" },
    ],
  },
  {
    title: "Base de datos",
    skills: [
      { name: "MySQL" },
      { name: "PostgreSQL", level: "Básico" },
      { name: "JPA / Hibernate" },
      { name: "Prisma", level: "Básico" },
    ],
  },
  {
    title: "Herramientas",
    skills: [
      { name: "Git" },
      { name: "GitHub" },
      { name: "Postman" },
      { name: "VS Code" },
    ],
  },
];
