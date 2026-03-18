import Hero from "./components/hero";
import About from "./components/about";
import Projects from "./components/projects";
import Contact from "./components/contact";
import Skills from "./components/skills";

export default function Home() {
  return (
    <main className="bg-[#0f172a] text-white min-h-screen bg-gradient-to-b from-[#0f172a] to-[#020617]">
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </main>
  );
}
