export default function Contact() {
  return (
    <section
      id="contact"
      className="mx-auto max-w-6xl px-6 pb-24 md:px-12 lg:px-20"
    >
      <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-zinc-950 to-zinc-900 p-8">
        <h2 className="mb-4 text-3xl font-semibold text-white">Contacto</h2>
        <p className="mb-6 text-zinc-400">
          Puedes encontrarme en mis redes o escribirme directamente.
        </p>

        <div className="flex flex-wrap gap-4">
          <a
            href="https://www.linkedin.com/in/oriana-mendez-prato-9a1682266"
            className="rounded-full border border-white/15 px-5 py-2 text-sm text-white hover:bg-white/5"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/oriana0anairo"
            className="rounded-full border border-white/15 px-5 py-2 text-sm text-white hover:bg-white/5"
          >
            GitHub
          </a>
          <a
            href="mailto:orianamendezprato@gmail.com"
            className="rounded-full border border-white/15 px-5 py-2 text-sm text-white hover:bg-white/5"
          >
            Email
          </a>
        </div>
      </div>
    </section>
  );
}
