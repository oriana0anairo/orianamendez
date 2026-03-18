import Hero from "./components/hero";
import About from "./components/about";
import Projects from "./components/projects";
import Contact from "./components/contact";

export default function Home() {
  return (
    <main className="bg-[#0f172a] text-white min-h-screen">
      <Hero />
      <About />
      <Projects />
      <Contact />
    </main>
  );
}
