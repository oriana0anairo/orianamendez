import { techStack } from "../utils/techStack";

const levelStyles = {
  Avanzado: "border-emerald-400/30 bg-emerald-500/10 text-emerald-300",
  Intermedio: "border-fuchsia-400/30 bg-fuchsia-500/10 text-fuchsia-200",
};

export default function Skills() {
  return (
    <section
      id="tech"
      className="mx-auto max-w-7xl px-6 py-24 md:px-12 lg:px-20"
    >
      {/* Header */}
      <div className="mb-14">
        <p className="mb-3 text-sm uppercase tracking-[0.35em] text-fuchsia-200/70">
          Stack técnico
        </p>

        <h2 className="text-3xl font-semibold text-white md:text-4xl">
          Tecnologías & Herramientas
        </h2>

        <p className="mt-4 max-w-3xl text-base leading-7 text-zinc-400 md:text-lg">
          Tecnologías que utilizo para construir soluciones escalables,
          mantenibles y orientadas a buenas prácticas de desarrollo.
        </p>
      </div>

      {/* Grid */}
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {techStack.map((group) => (
          <div
            key={group.title}
            className="group relative overflow-hidden rounded-3xl border border-white/10 bg-zinc-950/90 p-6 transition duration-300 hover:-translate-y-1 hover:border-fuchsia-400/40 hover:shadow-[0_0_40px_rgba(217,70,239,0.12)]"
          >
            {/* Glow decorativo */}
            <div className="absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100">
              <div className="absolute -top-10 left-1/2 h-40 w-40 -translate-x-1/2 rounded-full bg-fuchsia-500/10 blur-3xl" />
            </div>

            {/* Title */}
            <h3 className="mb-5 text-lg font-semibold text-fuchsia-300">
              {group.title}
            </h3>

            {/* Items */}
            <div className="flex flex-wrap gap-2">
              {group.items.map((tech) => (
                <div
                  key={tech.name}
                  className="flex items-center gap-2 rounded-full border border-white/10 bg-zinc-900 px-3 py-1 text-sm text-zinc-200 transition hover:border-fuchsia-400/30"
                >
                  <span>{tech.name}</span>

                  {tech.level && (
                    <span
                      className={`rounded-full border px-2 py-[2px] text-[10px] font-medium ${levelStyles[tech.level]}`}
                    >
                      {tech.level}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
