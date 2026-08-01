import type { ContactLink } from "./types";

/** Datos personales y de posicionamiento. Es el primer archivo a actualizar. */
export const profile = {
  name: "Oriana Méndez",
  /** Título profesional corto, se muestra bajo el nombre en el hero. */
  role: "Computer Engineer",
  tagline:
    "Desarrollo aplicaciones modernas con enfoque en arquitectura, rendimiento y experiencia de usuario.",
  summary:
    "Ingeniera en informática especializada en desarrollo frontend con React y TypeScript, actualmente expandiendo hacia backend con Java y Spring Boot. Experiencia construyendo interfaces escalables, integrando APIs REST y aplicando buenas prácticas de arquitectura para crear soluciones mantenibles y de alto rendimiento.",
  /** Poner en `false` cuando no se busquen nuevas oportunidades. */
  openToWork: true,
  availabilityLabel: "Disponible para oportunidades",
  email: "orianamendezprato@gmail.com",
  /** URL pública del sitio. Se usa para las etiquetas Open Graph. */
  siteUrl: "https://oriana0anairo.github.io/orianamendez",
} as const;

/**
 * Canales de contacto. Agregar uno nuevo (portafolio en Behance, X, etc.)
 * es añadir un elemento a esta lista.
 */
export const contactLinks: ContactLink[] = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/oriana-mendez-prato-9a1682266",
    description: "Perfil profesional de Oriana Méndez en LinkedIn",
  },
  {
    label: "GitHub",
    href: "https://github.com/oriana0anairo",
    description: "Repositorios de Oriana Méndez en GitHub",
  },
  {
    label: "Email",
    href: `mailto:${profile.email}`,
    description: `Escribir a ${profile.email}`,
  },
];
