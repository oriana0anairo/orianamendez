import type { Certificate, CertificateCategory } from "./types";

/**
 * Certificados y formación complementaria.
 *
 * Para agregar uno nuevo:
 * 1. Guardar la imagen en `public/certificates/`.
 * 2. Añadir un objeto aquí con la ruta de esa imagen y su fecha ISO.
 *
 * El orden de esta lista no importa: se muestran del más reciente al más
 * antiguo y agrupados por categoría automáticamente.
 */
export const certificates: Certificate[] = [
  {
    slug: "arquitectura-software",
    title: "Fundamentos de Arquitectura de Software",
    issuer: "Platzi",
    issuedAt: "2026-02-03",
    image: "/certificates/arquitectura-software.jpg",
    category: "Arquitectura",
  },
  {
    slug: "java-spring-boot",
    title: "Java Spring Boot",
    issuer: "Platzi",
    issuedAt: "2026-02-11",
    image: "/certificates/java-spring.jpg",
    category: "Backend",
  },
  {
    slug: "spring-data-jpa",
    title: "Java Spring Data JPA: Bases de Datos",
    issuer: "Platzi",
    issuedAt: "2026-02-19",
    image: "/certificates/spring-data-jpa.jpg",
    category: "Backend",
  },
  {
    slug: "spring-security",
    title: "Java Spring Security: Autenticación y Seguridad Web",
    issuer: "Platzi",
    issuedAt: "2026-02-14",
    image: "/certificates/spring-security.jpg",
    category: "Backend",
  },
  {
    slug: "ingles-a1",
    title: "Inglés Básico A1: Verbos Comunes",
    issuer: "Platzi",
    issuedAt: "2026-01-14",
    image: "/certificates/ingles-a1.jpg",
    category: "Idiomas",
  },
  {
    slug: "creatividad",
    title: "Desarrollo de Creatividad para tu Vida Profesional",
    issuer: "Platzi",
    issuedAt: "2026-01-15",
    image: "/certificates/creatividad.jpg",
    category: "Habilidades complementarias",
  },
  {
    slug: "product-management",
    title: "Product Management",
    issuer: "Platzi",
    issuedAt: "2026-01-14",
    image: "/certificates/product-management.jpg",
    category: "Habilidades complementarias",
  },
];

/** Orden en que se muestran las categorías dentro de la sección. */
const CATEGORY_ORDER: CertificateCategory[] = [
  "Backend",
  "Frontend",
  "Arquitectura",
  "Idiomas",
  "Habilidades complementarias",
];

export type CertificateGroup = {
  category: CertificateCategory;
  certificates: Certificate[];
};

/**
 * Agrupa los certificados por categoría, ordenando cada grupo del más reciente
 * al más antiguo y descartando las categorías sin certificados.
 */
export const certificateGroups: CertificateGroup[] = CATEGORY_ORDER.map(
  (category) => ({
    category,
    certificates: certificates
      .filter((certificate) => certificate.category === category)
      .sort((a, b) => b.issuedAt.localeCompare(a.issuedAt)),
  }),
).filter((group) => group.certificates.length > 0);
