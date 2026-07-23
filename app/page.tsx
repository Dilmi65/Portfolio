import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Socialwork from "@/components/Socialwork";

export default function Home() {
  return (
    <main className="bg-paper">
      <Nav />
      <Hero />
      <About />
      <Education />
      <Experience />
      <Projects />
      <Skills />
      <Socialwork />
      <Contact />
    </main>
  );
}
