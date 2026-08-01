/**
 * Tipos del contenido del portafolio.
 *
 * Toda la información del sitio (proyectos, experiencia, certificados, etc.)
 * vive en `app/data` como datos tipados. Los componentes solo se encargan de
 * renderizar: para actualizar el portafolio basta con editar estos datos.
 */

/** Fecha en formato ISO corto: `YYYY-MM` o `YYYY-MM-DD`. */
export type IsoDate = string;

export type Project = {
  /** Identificador estable y único. Se usa como `key` en React. */
  slug: string;
  title: string;
  description: string;
  /** Tecnologías principales, en orden de relevancia. */
  tech: string[];
  repositoryUrl?: string;
  /** URL de la aplicación desplegada, si existe. */
  demoUrl?: string;
  /** Los proyectos destacados se muestran primero. */
  featured?: boolean;
};

export type ExperienceItem = {
  slug: string;
  role: string;
  company: string;
  /** Ej: "Remoto", "Caracas, Venezuela". */
  location?: string;
  startDate: IsoDate;
  /** Omitir cuando el puesto sigue vigente: se muestra "Actualidad". */
  endDate?: IsoDate;
  description: string;
  /** Logros concretos y medibles, uno por línea. */
  achievements?: string[];
  tech?: string[];
};

export type SkillLevel = "Avanzado" | "Intermedio" | "Básico";

export type Skill = {
  name: string;
  /** Omitir el nivel cuando no aporta información relevante. */
  level?: SkillLevel;
};

export type SkillGroup = {
  title: string;
  skills: Skill[];
};

export type CertificateCategory =
  | "Backend"
  | "Frontend"
  | "Arquitectura"
  | "Idiomas"
  | "Habilidades complementarias";

export type Certificate = {
  slug: string;
  title: string;
  issuer: string;
  /** Fecha de aprobación. Los certificados se ordenan del más reciente al más antiguo. */
  issuedAt: IsoDate;
  /** Ruta dentro de `public`, ej: "/certificates/java-spring.jpg". */
  image: string;
  category: CertificateCategory;
  /** URL pública de verificación del certificado, si existe. */
  credentialUrl?: string;
};

/** Niveles del Marco Común Europeo de Referencia (MCER). */
export type LanguageLevel = "Nativo" | "C2" | "C1" | "B2" | "B1" | "A2" | "A1";

export type Language = {
  name: string;
  level: LanguageLevel;
  /** Detalle opcional: "Lectura técnica fluida", "En formación", etc. */
  note?: string;
};

export type ContactLink = {
  label: string;
  href: string;
  /** Texto accesible para lectores de pantalla y atributo `title`. */
  description: string;
};
