import Nav from "@/components/nav";
import Preloader from "@/components/preloader";
import About from "@/components/sections/about";
import Contact from "@/components/sections/contact";
import Impact from "@/components/sections/impact";
import Experience from "@/components/sections/experience";
import Hero from "@/components/sections/hero";
import Projects from "@/components/sections/projects";
import Skills from "@/components/sections/skills";
import Testimonials from "@/components/sections/testimonials";

export default function Home() {
  return (
    <>
      <Preloader />
      <Nav />
      <main id="main">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Impact />
        <Experience />
        <Testimonials />
        <Contact />
      </main>
    </>
  );
}
