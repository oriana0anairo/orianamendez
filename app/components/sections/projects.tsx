import { Card } from "@/app/components/ui/card";
import { ExternalLink } from "@/app/components/ui/external-link";
import { Section } from "@/app/components/ui/section";
import { Tag } from "@/app/components/ui/tag";
import { SECTION } from "@/app/data/navigation";
import { sortedProjects } from "@/app/data/projects";

const LINK_STYLES =
  "inline-flex items-center border border-white/15 px-4 py-2 text-sm text-white hover:bg-white/5";

export function Projects() {
  return (
    <Section
      id={SECTION.projects}
      eyebrow="Trabajo"
      title="Proyectos"
      description="Proyectos personales, académicos y de práctica donde aplico lo que aprendo, del frontend al backend."
    >
      <ul className="grid gap-6 md:grid-cols-2">
        {sortedProjects.map((project) => (
          <li key={project.slug} className="flex">
            <Card interactive className="flex w-full flex-col p-6">
              <div className="flex flex-1 flex-col">
                {project.featured && (
                  <Tag size="sm" variant="accent" className="mb-3 self-start">
                    Destacado
                  </Tag>
                )}

                <h3 className="mb-3 text-2xl font-semibold text-white">
                  {project.title}
                </h3>

                <p className="mb-5 leading-7 text-zinc-400">
                  {project.description}
                </p>

                <ul className="mb-6 flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <li key={tech}>
                      <Tag size="sm">{tech}</Tag>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-auto flex flex-wrap gap-3">
                {project.repositoryUrl && (
                  <ExternalLink
                    href={project.repositoryUrl}
                    ariaLabel={`Ver el código de ${project.title} en GitHub`}
                    className={LINK_STYLES}
                  >
                    Ver código
                  </ExternalLink>
                )}

                {project.demoUrl && (
                  <ExternalLink
                    href={project.demoUrl}
                    ariaLabel={`Abrir la demo de ${project.title}`}
                    className={LINK_STYLES}
                  >
                    Ver demo
                  </ExternalLink>
                )}
              </div>
            </Card>
          </li>
        ))}
      </ul>
    </Section>
  );
}
