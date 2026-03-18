const projects = [
  {
    title: "Sistema de Gestión",
    description:
      "Aplicación empresarial con filtros avanzados y manejo de datos masivos.",
    tech: "React, MUI, Spring Boot",
  },
  {
    title: "Dashboard Analytics",
    description:
      "Visualización de datos con gráficos y métricas en tiempo real.",
    tech: "Next.js, Tailwind",
  },
];

export default function Projects() {
  return (
    <section className="py-20 px-6 max-w-5xl mx-auto">
      <h2 className="text-3xl font-semibold mb-10">Proyectos</h2>

      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((p, i) => (
          <div key={i} className="bg-[#1e293b] p-6 rounded-xl">
            <h3 className="text-xl font-bold mb-2">{p.title}</h3>
            <p className="text-gray-400 mb-2">{p.description}</p>
            <span className="text-sm text-indigo-400">{p.tech}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
