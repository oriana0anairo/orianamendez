import { ExternalLink } from "@/app/components/ui/external-link";
import { Section } from "@/app/components/ui/section";
import { SECTION } from "@/app/data/navigation";
import { contactLinks, profile } from "@/app/data/profile";

export function Contact() {
  return (
    <Section
      id={SECTION.contact}
      eyebrow="Hablemos"
      title="Contacto"
      className="pb-24"
    >
      <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-zinc-950 to-zinc-900 p-8 md:p-10">
        <p className="mb-8 max-w-2xl text-lg leading-8 text-zinc-400">
          {profile.openToWork
            ? "Estoy abierta a nuevas oportunidades y proyectos. Puedes escribirme directamente o encontrarme en mis redes."
            : "Puedes encontrarme en mis redes o escribirme directamente."}
        </p>

        <ul className="flex flex-wrap gap-4">
          {contactLinks.map((link) => (
            <li key={link.label}>
              <ExternalLink
                href={link.href}
                ariaLabel={link.description}
                className="inline-flex border border-white/15 px-5 py-2 text-sm text-white hover:bg-white/5"
              >
                {link.label}
              </ExternalLink>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
