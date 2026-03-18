const projects = [
  {
    title: "Sistema de Gestión",
    description:
      "Aplicación empresarial con filtros avanzados y manejo de datos masivos.",
    tech: "React, MUI, Spring Boot",
  },
  {
    title: "Dashboard Analytics",
    description:
      "Visualización de datos con gráficos y métricas en tiempo real.",
    tech: "Next.js, Tailwind",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="mx-auto max-w-6xl px-6 pb-24 md:px-12 lg:px-20"
    >
      <h2 className="mb-10 text-3xl font-semibold text-white">Proyectos</h2>

      <div className="grid gap-6 md:grid-cols-2">
        <article className="rounded-3xl border border-white/10 bg-zinc-950 p-6 shadow-[0_0_30px_rgba(168,85,247,0.06)]">
          <h3 className="mb-3 text-2xl font-semibold text-white">
            Sistema de Gestión
          </h3>
          <p className="mb-4 text-zinc-400">
            Aplicación empresarial con filtros avanzados, manejo de datos
            masivos y flujos de operación complejos.
          </p>
          <p className="text-sm text-fuchsia-300">React · MUI · Spring Boot</p>
        </article>

        <article className="rounded-3xl border border-white/10 bg-zinc-950 p-6 shadow-[0_0_30px_rgba(168,85,247,0.06)]">
          <h3 className="mb-3 text-2xl font-semibold text-white">
            Dashboard Analytics
          </h3>
          <p className="mb-4 text-zinc-400">
            Visualización de datos con métricas en tiempo real y una interfaz
            moderna orientada a decisión de negocio.
          </p>
          <p className="text-sm text-fuchsia-300">
            Next.js · Tailwind · Data Visualization
          </p>
        </article>
      </div>
    </section>
  );
}
