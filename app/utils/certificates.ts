import { image } from "./images";

export type CertificateCategory =
  | "Backend"
  | "Arquitectura"
  | "Idiomas"
  | "Habilidades complementarias";

export type Certificate = {
  title: string;
  issuedAt: string;
  image: string;
  category: CertificateCategory;
  issuer: string;
};

export const certificates: Certificate[] = [
  {
    title: "Curso de Fundamentos de Arquitectura de Software",
    issuedAt: "Aprobado el 2 de febrero, 2026",
    image: image.arquitecturaSoftware,
    category: "Arquitectura",
    issuer: "Platzi",
  },
  {
    title: "Curso de Java Spring Boot",
    issuedAt: "Aprobado el 11 de febrero, 2026",
    image: image.javaSpring,
    category: "Backend",
    issuer: "Platzi",
  },
  {
    title: "Curso de Java Spring Data JPA: Bases de Datos",
    issuedAt: "Aprobado el 19 de febrero, 2026",
    image: image.springDataJpa,
    category: "Backend",
    issuer: "Platzi",
  },
  {
    title: "Curso de Java Spring Security: Autenticación y Seguridad Web",
    issuedAt: "Aprobado el 13 de febrero, 2026",
    image: image.springSecurity,
    category: "Backend",
    issuer: "Platzi",
  },
  {
    title: "Curso de Inglés Básico A1: Verbos Comunes",
    issuedAt: "Aprobado el 13 de enero, 2026",
    image: image.inglesA1,
    category: "Idiomas",
    issuer: "Platzi",
  },
  {
    title: "Audiocurso de Desarrollo de Creatividad para tu Vida Profesional",
    issuedAt: "Aprobado el 14 de enero, 2026",
    image: image.creatividad,
    category: "Habilidades complementarias",
    issuer: "Platzi",
  },
  {
    title: "Curso de Product Management",
    issuedAt: "Aprobado el 13 de enero, 2026",
    image: image.productManagement,
    category: "Habilidades complementarias",
    issuer: "Platzi",
  },
];
