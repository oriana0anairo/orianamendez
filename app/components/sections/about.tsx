import { Section } from "@/app/components/ui/section";
import { SECTION } from "@/app/data/navigation";
import { profile } from "@/app/data/profile";

export function About() {
  return (
    <Section id={SECTION.about} eyebrow="Perfil" title="Sobre mí">
      <p className="max-w-3xl text-lg leading-8 text-zinc-400">
        {profile.summary}
      </p>
    </Section>
  );
}
