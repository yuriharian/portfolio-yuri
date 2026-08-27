import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Journey from "./components/Journey";
import Technologies from "./components/Technologies";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import CorporateProjects from "./components/CorporateProjects";
import Formation from "./components/Formation";
import Contact from "./components/Contact";
import { FaArrowUp } from "react-icons/fa";
import { animateScroll as scroll } from "react-scroll";

export default function App() {
  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <div className="overflow-x-hidden antialiased selection:bg-cyan-300 selection:text-purple-900 bg-neutral-50 dark:bg-zinc-950 text-neutral-950 dark:text-zinc-100 transition-colors duration-500">
      <div className="fixed top-0 -z-10 h-full w-full"></div>

      <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-50 dark:bg-zinc-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(0,163,255,0.18),rgba(255,255,255,0))] dark:bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(34,211,238,0.12),rgba(24,24,27,0))]" />

      <div className="container mx-auto px-8 relative pt-20 md:pt-24">
        <Navbar />
        <div id="hero">
          <Hero />
        </div>
        <div id="Journey">
          <Journey />
        </div>
        <div className="border-b-[0.5px] border-neutral-200 dark:border-zinc-800" />
        <div id="technologies">
          <Technologies />
        </div>
        <div id="experience">
          <Experience />
        </div>
        <div id="projects">
          <Projects />
        </div>
        <div id="corporate-projects">
          <CorporateProjects />
        </div>
        <div id="formation">
          <Formation />
        </div>
        <div id="contact">
          <Contact />
        </div>

        <button
          onClick={scrollToTop}
          className="fixed bottom-12 right-8 z-40 p-4 rounded-full text-white tracking-tight lg:text-4xl transition-all duration-300 btn-solid-blue lg:hidden"
        >
          <FaArrowUp />
        </button>
      </div>
    </div>
  );
}
