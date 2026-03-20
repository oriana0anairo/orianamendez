import Hero from "./components/hero";
import About from "./components/about";
import Contact from "./components/contact";
import Skills from "./components/skills";
import Projects from "./components/projects";
import Certificates from "./components/certificates";

export default function Home() {
  return (
    <main className="bg-black text-white">
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Certificates />
      <Contact />
    </main>
  );
}
