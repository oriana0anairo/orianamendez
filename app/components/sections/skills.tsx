import { Card } from "@/app/components/ui/card";
import { Section } from "@/app/components/ui/section";
import { Tag, type TagVariant } from "@/app/components/ui/tag";
import { SECTION } from "@/app/data/navigation";
import { skillGroups } from "@/app/data/skills";
import type { SkillLevel } from "@/app/data/types";

const LEVEL_VARIANT: Record<SkillLevel, TagVariant> = {
  Avanzado: "success",
  Intermedio: "accent",
  Básico: "neutral",
};

export function Skills() {
  return (
    <Section
      id={SECTION.skills}
      eyebrow="Stack técnico"
      title="Tecnologías y herramientas"
      description="Tecnologías que utilizo para construir soluciones escalables, mantenibles y orientadas a buenas prácticas de desarrollo."
    >
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {skillGroups.map((group) => (
          <Card key={group.title} interactive className="p-6">
            <div
              aria-hidden
              className="absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100"
            >
              <div className="absolute -top-10 left-1/2 h-40 w-40 -translate-x-1/2 rounded-full bg-fuchsia-500/10 blur-3xl" />
            </div>

            <div className="relative">
              <h3 className="mb-5 text-lg font-semibold text-fuchsia-300">
                {group.title}
              </h3>

              <ul className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <li key={skill.name}>
                    <Tag>
                      {skill.name}

                      {skill.level && (
                        <Tag size="sm" variant={LEVEL_VARIANT[skill.level]}>
                          {skill.level}
                        </Tag>
                      )}
                    </Tag>
                  </li>
                ))}
              </ul>
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
}
