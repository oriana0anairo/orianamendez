import Image from "next/image";

import { Card } from "@/app/components/ui/card";
import { ExternalLink } from "@/app/components/ui/external-link";
import { Section } from "@/app/components/ui/section";
import { Tag } from "@/app/components/ui/tag";
import { certificateGroups } from "@/app/data/certificates";
import { SECTION } from "@/app/data/navigation";
import { asset } from "@/app/lib/assets";
import { formatFullDate } from "@/app/lib/dates";

export function Certificates() {
  return (
    <Section
      id={SECTION.certificates}
      eyebrow="Formación y aprendizaje continuo"
      title="Certificados"
      description="Mi formación complementa mi experiencia profesional y refleja mi interés por fortalecer tanto el desarrollo frontend como mi transición hacia backend con Java y Spring Boot."
    >
      <div className="space-y-14">
        {certificateGroups.map(({ category, certificates }) => (
          <div key={category}>
            <div className="mb-6 flex items-center gap-3">
              <div
                aria-hidden
                className="h-px flex-1 bg-gradient-to-r from-fuchsia-500/40 to-transparent"
              />
              <h3 className="shrink-0 text-lg font-medium text-fuchsia-200">
                {category}
              </h3>
              <div
                aria-hidden
                className="h-px flex-1 bg-gradient-to-l from-fuchsia-500/40 to-transparent"
              />
            </div>

            <ul className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
              {certificates.map((certificate) => (
                <li key={certificate.slug} className="flex">
                  <Card interactive className="flex w-full flex-col">
                    <div className="relative aspect-16/10 overflow-hidden bg-zinc-900">
                      <Image
                        src={asset(certificate.image)}
                        alt={`Certificado: ${certificate.title}, emitido por ${certificate.issuer}`}
                        fill
                        sizes="(min-width: 1280px) 25rem, (min-width: 640px) 45vw, 90vw"
                        className="object-cover transition duration-500 group-hover:scale-[1.02] motion-reduce:transform-none"
                      />
                      <div
                        aria-hidden
                        className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"
                      />
                    </div>

                    <div className="flex flex-1 flex-col p-6">
                      <p className="mb-2 text-xs uppercase tracking-[0.25em] text-zinc-500">
                        {certificate.issuer}
                      </p>

                      <h4 className="text-xl font-semibold leading-snug text-white">
                        {certificate.title}
                      </h4>

                      <p className="mt-3 text-sm text-zinc-400">
                        Aprobado el {formatFullDate(certificate.issuedAt)}
                      </p>
                    </div>

                    <div className="flex items-center justify-between gap-3 border-t border-white/10 px-6 py-4">
                      <Tag size="sm" variant="accent">
                        {certificate.category}
                      </Tag>

                      {certificate.credentialUrl && (
                        <ExternalLink
                          href={certificate.credentialUrl}
                          ariaLabel={`Verificar el certificado ${certificate.title}`}
                          className="text-xs text-zinc-400 underline underline-offset-4 hover:text-fuchsia-200"
                        >
                          Verificar
                        </ExternalLink>
                      )}
                    </div>
                  </Card>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
