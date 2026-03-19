export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/orianamendez/hero-programming.png')" }}
      />

      <div className="absolute inset-0 bg-black/65" />

      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-purple-950/40" />

      <div className="relative z-10 flex min-h-screen items-center px-6 py-16 md:px-12 lg:px-20">
        <div className="w-full max-w-3xl rounded-3xl border border-white/10 bg-white/8 p-8 backdrop-blur-md shadow-[0_0_60px_rgba(168,85,247,0.12)] md:p-12">
          <p className="mb-4 text-sm uppercase tracking-[0.35em] text-fuchsia-200/80">
            Portafolio profesional
          </p>

          <h1 className="mb-4 text-5xl font-semibold leading-tight md:text-7xl">
            Oriana
            <br />
            Méndez
          </h1>

          <p className="mb-3 text-xl text-fuchsia-200 md:text-2xl">
            Fullstack Engineer
          </p>

          <p className="mb-8 max-w-2xl text-base leading-7 text-zinc-300 md:text-lg">
            Desarrollo aplicaciones modernas con enfoque en arquitectura,
            rendimiento y experiencia de usuario.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#projects"
              className="rounded-full bg-gradient-to-r from-fuchsia-500 to-violet-500 px-6 py-3 text-sm font-medium text-white transition hover:scale-[1.02] hover:opacity-95"
            >
              Ver proyectos
            </a>

            <a
              href="#contact"
              className="rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-medium text-white transition hover:bg-white/10"
            >
              Contacto
            </a>
          </div>

          <p className="mt-8 text-sm text-zinc-400">
            Disponible para oportunidades
          </p>
        </div>
      </div>
    </section>
  );
}
