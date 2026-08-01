/**
 * El sitio se publica en GitHub Pages bajo un subdirectorio (`/orianamendez`),
 * así que los recursos estáticos necesitan ese prefijo en producción.
 *
 * Next.js lo aplica solo a los recursos que él mismo genera: con
 * `images.unoptimized` activado, el `src` de `next/image` se usa tal cual. Por
 * eso las rutas de `public` se resuelven aquí, a partir del `basePath`
 * declarado en `next.config.ts`.
 */
const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

/** Convierte una ruta de `public` en una URL válida para el entorno actual. */
export function asset(path: string): string {
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;

  return `${BASE_PATH}${normalizedPath}`;
}
