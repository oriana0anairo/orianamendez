import { Footer } from "./components/layout/footer";
import { Navbar } from "./components/layout/navbar";
import { About } from "./components/sections/about";
import { Certificates } from "./components/sections/certificates";
import { Contact } from "./components/sections/contact";
import { Experience } from "./components/sections/experience";
import { Hero } from "./components/sections/hero";
import { Languages } from "./components/sections/languages";
import { Projects } from "./components/sections/projects";
import { Skills } from "./components/sections/skills";

/**
 * Página única del portafolio. El orden de las secciones se define aquí; cada
 * una lee su contenido de `app/data` y se oculta sola si aún no tiene datos.
 */
export default function Home() {
  return (
    <>
      <Navbar />

      <main className="bg-black text-white">
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Certificates />
        <Languages />
        <Contact />
      </main>

      <Footer />
    </>
  );
}
