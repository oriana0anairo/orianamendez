export type TechLevel = "Avanzado" | "Intermedio";

export type TechItem = {
  name: string;
  level?: TechLevel;
};

export type TechGroup = {
  title: string;
  items: TechItem[];
};

export const techStack: TechGroup[] = [
  {
    title: "Frontend",
    items: [
      { name: "React", level: "Avanzado" },
      { name: "TypeScript", level: "Avanzado" },
      { name: "Next.js", level: "Intermedio" },
      { name: "Material UI" },
      { name: "Tailwind CSS" },
    ],
  },
  {
    title: "Backend",
    items: [
      { name: "Java", level: "Intermedio" },
      { name: "Spring Boot", level: "Intermedio" },
      { name: "Spring Data JPA" },
      { name: "Spring Security" },
      { name: "REST APIs" },
    ],
  },
  {
    title: "Base de Datos",
    items: [{ name: "MySQL" }, { name: "JPA / Hibernate" }],
  },
  {
    title: "Herramientas",
    items: [
      { name: "Git" },
      { name: "GitHub" },
      { name: "Postman" },
      { name: "VS Code" },
    ],
  },
];
