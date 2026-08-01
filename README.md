# Portafolio · Oriana Méndez

Portafolio profesional construido con **Next.js (App Router)**, **React**, **TypeScript** y **Tailwind CSS**.
Se publica como sitio estático en GitHub Pages: <https://oriana0anairo.github.io/orianamendez>

## Empezar

```bash
yarn install
yarn dev        # http://localhost:3000
```

| Comando          | Qué hace                                          |
| ---------------- | ------------------------------------------------- |
| `yarn dev`       | Servidor de desarrollo con recarga en caliente     |
| `yarn build`     | Genera el sitio estático en `out/`                 |
| `yarn lint`      | Analiza el código con ESLint                       |
| `yarn typecheck` | Verifica los tipos con TypeScript                  |
| `yarn validate`  | Ejecuta lint + typecheck (correr antes de publicar)|
| `yarn clean`     | Borra `.next` y `out`                              |

## Cómo está organizado

El contenido está separado de la presentación: **los componentes no contienen
información personal**, solo la leen desde `app/data`. Actualizar el portafolio
es editar datos, no maquetación.

```
app/
├── data/            ← EL CONTENIDO: aquí se actualiza el portafolio
│   ├── types.ts         Tipos de todo el contenido
│   ├── profile.ts       Nombre, titular, resumen y canales de contacto
│   ├── projects.ts      Proyectos
│   ├── experience.ts    Experiencia laboral
│   ├── skills.ts        Stack técnico
│   ├── certificates.ts  Certificados
│   ├── languages.ts     Idiomas
│   └── navigation.ts    Ids de sección y enlaces del menú
├── components/
│   ├── layout/      Barra de navegación y pie de página
│   ├── sections/    Una sección de la página por archivo
│   └── ui/          Piezas reutilizables (Section, Card, Tag, ExternalLink)
├── lib/             Utilidades (rutas de recursos, fechas, clases CSS)
├── layout.tsx       Metadatos SEO y fuentes
└── page.tsx         Orden de las secciones
```

Las secciones que dependen de datos vacíos (experiencia, idiomas) **se ocultan
solas**, junto con su enlace en el menú: el sitio nunca muestra un bloque a
medio llenar.

## Cómo actualizarlo

### Agregar un proyecto

Añadir un objeto en `app/data/projects.ts`:

```ts
{
  slug: "mi-proyecto",              // único, se usa como key en React
  title: "Mi proyecto",
  description: "Qué resuelve y con qué lo construiste.",
  tech: ["React", "TypeScript"],
  repositoryUrl: "https://github.com/oriana0anairo/mi-proyecto",
  demoUrl: "https://...",           // opcional
  featured: true,                   // opcional: lo muestra entre los primeros
}
```

### Agregar experiencia laboral

Añadir un objeto al inicio de `app/data/experience.ts` (del más reciente al más
antiguo). Al hacerlo, la sección "Experiencia" y su enlace en el menú aparecen
automáticamente:

```ts
{
  slug: "empresa-rol",
  role: "Frontend Developer",
  company: "Nombre de la empresa",
  location: "Remoto",               // opcional
  startDate: "2026-03",             // formato YYYY-MM
  endDate: "2026-09",               // omitir si el puesto sigue vigente
  description: "Qué construiste y para quién.",
  achievements: ["Logro concreto, mejor si va con un número."],
  tech: ["React", "TypeScript"],
}
```

### Agregar un certificado

1. Guardar la imagen en `public/certificates/`.
2. Añadir un objeto en `app/data/certificates.ts`:

```ts
{
  slug: "nombre-del-curso",
  title: "Nombre del curso",
  issuer: "Platzi",
  issuedAt: "2026-03-15",           // formato YYYY-MM-DD
  image: "/certificates/nombre-del-curso.jpg",
  category: "Backend",              // ver CertificateCategory en types.ts
  credentialUrl: "https://...",     // opcional: enlace de verificación
}
```

No hace falta ordenarlos: se agrupan por categoría y se muestran del más
reciente al más antiguo.

### Actualizar un idioma

Cambiar `level` (y `note`) en `app/data/languages.ts`. Los niveles siguen el
MCER: `Nativo`, `C2`, `C1`, `B2`, `B1`, `A2`, `A1`.

### Actualizar el stack técnico

Añadir la tecnología al grupo correspondiente en `app/data/skills.ts`. El nivel
(`Avanzado`, `Intermedio`, `Básico`) es opcional.

### Cambiar datos personales o el estado de búsqueda de empleo

Todo está en `app/data/profile.ts`, incluido `openToWork`: al ponerlo en
`false`, desaparece el indicador "Disponible para oportunidades" del hero y
cambia el texto de la sección de contacto.

## Despliegue

Cada push a `develop` dispara el workflow de GitHub Actions
(`.github/workflows/deploy.yml`), que valida lint y tipos, construye el sitio
estático y lo publica en GitHub Pages.

```bash
yarn validate   # validar antes de publicar
yarn deploy     # equivale a: git push origin develop
```

> El sitio vive en un subdirectorio (`/orianamendez`), definido una sola vez en
> `next.config.ts`. Las imágenes de `public` deben resolverse siempre con el
> helper `asset()` de `app/lib/assets.ts` para que funcionen en producción.
