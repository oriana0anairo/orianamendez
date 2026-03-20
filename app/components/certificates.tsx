import Image from "next/image";
import { CertificateCategory, certificates } from "../utils/certificates";

const categories: CertificateCategory[] = [
  "Backend",
  "Arquitectura",
  "Idiomas",
  "Habilidades complementarias",
];

export default function Certificates() {
  return (
    <section
      id="certificates"
      className="mx-auto max-w-7xl px-6 py-24 md:px-12 lg:px-20"
    >
      <div className="mb-12">
        <p className="mb-3 text-sm uppercase tracking-[0.35em] text-fuchsia-200/70">
          Formación y aprendizaje continuo
        </p>

        <h2 className="text-3xl font-semibold text-white md:text-4xl">
          Certificados
        </h2>

        <p className="mt-4 max-w-3xl text-base leading-7 text-zinc-400 md:text-lg">
          Mi formación complementa mi experiencia profesional y refleja mi
          interés por fortalecer tanto el desarrollo frontend como mi transición
          hacia backend con Java y Spring Boot.
        </p>
      </div>

      <div className="space-y-14">
        {categories.map((category) => {
          const items = certificates.filter(
            (certificate) => certificate.category === category,
          );

          if (!items.length) return null;

          return (
            <div key={category}>
              <div className="mb-6 flex items-center gap-3">
                <div className="h-px flex-1 bg-gradient-to-r from-fuchsia-500/40 to-transparent" />
                <h3 className="shrink-0 text-lg font-medium text-fuchsia-200">
                  {category}
                </h3>
                <div className="h-px flex-1 bg-gradient-to-l from-fuchsia-500/40 to-transparent" />
              </div>

              <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
                {items.map((certificate) => (
                  <article
                    key={`${certificate.category}-${certificate.title}`}
                    className="group overflow-hidden rounded-3xl border border-white/10 bg-zinc-950/90 shadow-[0_0_30px_rgba(168,85,247,0.06)] transition duration-300 hover:-translate-y-1 hover:border-fuchsia-400/30 hover:shadow-[0_0_45px_rgba(217,70,239,0.12)]"
                  >
                    <div className="relative aspect-[16/10] overflow-hidden bg-zinc-900">
                      <Image
                        src={certificate.image}
                        alt={certificate.title}
                        fill
                        className="object-cover transition duration-500 group-hover:scale-[1.02]"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
                    </div>

                    <div className="p-6">
                      <p className="mb-2 text-xs uppercase tracking-[0.25em] text-zinc-500">
                        {certificate.issuer}
                      </p>

                      <h4 className="line-clamp-2 text-xl font-semibold leading-snug text-white">
                        {certificate.title}
                      </h4>

                      <p className="mt-3 text-sm text-zinc-400">
                        {certificate.issuedAt}
                      </p>
                    </div>

                    <div className="border-t border-white/10 px-6 py-4">
                      <span className="inline-flex rounded-full border border-fuchsia-400/20 bg-fuchsia-500/10 px-3 py-1 text-xs font-medium text-fuchsia-200">
                        {certificate.category}
                      </span>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
