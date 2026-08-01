import type { NextConfig } from "next";

/**
 * El sitio se publica en GitHub Pages bajo `https://<usuario>.github.io/orianamendez`,
 * por lo que en producción todo cuelga de ese subdirectorio.
 */
const isProd = process.env.NODE_ENV === "production";
const basePath = isProd ? "/orianamendez" : "";

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  assetPrefix: basePath ? `${basePath}/` : "",
  images: {
    // GitHub Pages sirve archivos estáticos: no hay servidor que optimice imágenes.
    unoptimized: true,
  },
  env: {
    // Única fuente de verdad del prefijo para los recursos de `public` (ver app/lib/assets.ts).
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
};

export default nextConfig;
