import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Project from "@/components/Project";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <div className="min-h-screen bg-linear-to-br from-slate-950 to-slate-900 text-white">

      <Hero />
      <Skills />
      <Project />
      <Experience />
      <Contact />

    </div>
  );
}
