const projects = [
  {
    title: "Repuestos de carros",
    description: "Aplicación de practica de maquetacion",
    tech: ["React", "JavaScript", "Material UI"],
    github: "https://github.com/oriana0anairo/repuestosdecarros",
  },
  {
    title: "CV Generator Api",
    description: "Generedor de curriculums vitae, con campos basicos. Back-end",
    tech: ["Prisma", "TypeScript"],
    github: "https://github.com/oriana0anairo/cv-generator-api",
  },
  {
    title: "CV Generator",
    description: "Generedor de curriculums vitae, con campos basicos",
    tech: ["React", "TypeScript"],
    github: "https://github.com/oriana0anairo/CV-Generator",
  },
  {
    title: "Ascencion",
    description:
      "Proyecto universitario colaborativo. Juego de naves espaciales que se enfrentan a oleadas de enemigos",
    tech: ["Java"],
    github: "https://github.com/oriana0anairo/Ascencion",
  },
  {
    title: "Calculadora de calorias",
    description: "Proyecto de practica de Reatct",
    tech: ["Reatc, Meterial UI, JavaScript"],
    github: "https://github.com/oriana0anairo/calculadora-de-calorias",
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="mx-auto max-w-6xl px-6 pb-24 md:px-12 lg:px-20"
    >
      <h2 className="mb-10 text-3xl font-semibold text-white">Proyectos</h2>

      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project, index) => (
          <a
            key={project.title}
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="block"
          >
            <article
              className="rounded-3xl border border-white/10 bg-zinc-950 p-6 shadow-[0_0_30px_rgba(168,85,247,0.06)]"
              key={index}
            >
              <h3 className="mb-3 text-2xl font-semibold text-white">
                {project.title}
              </h3>
              <p className="mb-4 text-zinc-400">{project.description}</p>
              <p className="text-sm text-fuchsia-300">
                {project.tech.join(" · ")}
              </p>
            </article>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Projects;
