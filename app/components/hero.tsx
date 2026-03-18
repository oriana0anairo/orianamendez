export default function Hero() {
  return (
    <section className="h-screen flex flex-col justify-center items-center text-center px-6">
      <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent">
        Fullstack Engineer
      </h1>

      <p className="text-lg text-gray-400 max-w-xl mb-6">
        Desarrollo aplicaciones escalables con React, Next.js y Spring Boot.
        Especializado en arquitectura limpia y sistemas empresariales.
      </p>

      <div className="flex gap-4">
        <a
          href="#projects"
          className="bg-indigo-500 px-6 py-2 rounded-lg hover:bg-indigo-600 transition"
        >
          Ver proyectos
        </a>

        <a
          href="#contact"
          className="border border-gray-600 px-6 py-2 rounded-lg hover:bg-gray-800 transition"
        >
          Contacto
        </a>
      </div>
      <p className="text-sm text-gray-500 mt-4">
        Disponible para oportunidades
      </p>
    </section>
  );
}
