import { Section } from "@/app/components/ui/section";
import { Tag } from "@/app/components/ui/tag";
import { experience } from "@/app/data/experience";
import { SECTION } from "@/app/data/navigation";
import { formatDateRange } from "@/app/lib/dates";

/** Línea de tiempo profesional. No se renderiza mientras no haya experiencia cargada. */
export function Experience() {
  if (experience.length === 0) return null;

  return (
    <Section
      id={SECTION.experience}
      eyebrow="Trayectoria"
      title="Experiencia"
      description="Roles en los que he construido producto, con el detalle de lo aportado en cada uno."
    >
      <ol className="relative border-l border-white/10 pl-6 md:pl-8">
        {experience.map((item) => (
          <li key={item.slug} className="relative pb-12 last:pb-0">
            <span
              aria-hidden
              className="absolute -left-[31px] top-2 h-3 w-3 rounded-full border-2 border-fuchsia-400 bg-black md:-left-[39px]"
            />

            <p className="mb-2 text-sm text-fuchsia-200/80">
              {formatDateRange(item.startDate, item.endDate)}
            </p>

            <h3 className="text-xl font-semibold text-white md:text-2xl">
              {item.role}
            </h3>

            <p className="mt-1 text-base text-zinc-300">
              {item.company}
              {item.location && (
                <span className="text-zinc-500"> · {item.location}</span>
              )}
            </p>

            <p className="mt-4 max-w-3xl leading-7 text-zinc-400">
              {item.description}
            </p>

            {item.achievements && item.achievements.length > 0 && (
              <ul className="mt-4 max-w-3xl list-disc space-y-2 pl-5 text-zinc-400 marker:text-fuchsia-400/60">
                {item.achievements.map((achievement) => (
                  <li key={achievement}>{achievement}</li>
                ))}
              </ul>
            )}

            {item.tech && item.tech.length > 0 && (
              <ul className="mt-5 flex flex-wrap gap-2">
                {item.tech.map((tech) => (
                  <li key={tech}>
                    <Tag className="text-xs">{tech}</Tag>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ol>
    </Section>
  );
}
