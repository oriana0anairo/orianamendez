import { Card } from "@/app/components/ui/card";
import { Section } from "@/app/components/ui/section";
import { Tag } from "@/app/components/ui/tag";
import { languages } from "@/app/data/languages";
import { SECTION } from "@/app/data/navigation";

export function Languages() {
  if (languages.length === 0) return null;

  return (
    <Section
      id={SECTION.languages}
      eyebrow="Comunicación"
      title="Idiomas"
      description="Niveles según el Marco Común Europeo de Referencia (MCER)."
    >
      <ul className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
        {languages.map((language) => (
          <li key={language.name} className="flex">
            <Card interactive className="flex w-full flex-col gap-3 p-6">
              <div className="flex items-center justify-between gap-4">
                <h3 className="text-xl font-semibold text-white">
                  {language.name}
                </h3>

                <Tag
                  size="sm"
                  variant={language.level === "Nativo" ? "success" : "accent"}
                >
                  {language.level}
                </Tag>
              </div>

              {language.note && (
                <p className="text-sm leading-6 text-zinc-400">
                  {language.note}
                </p>
              )}
            </Card>
          </li>
        ))}
      </ul>
    </Section>
  );
}
