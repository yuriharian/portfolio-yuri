import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Technologies from "./components/Technologies";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Formation from "./components/Formation";
import Contact from "./components/Contact";
import { FaArrowUp } from "react-icons/fa";
import { animateScroll as scroll } from "react-scroll";

export default function App() {
  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <div className="overflow-x-hidden text-neutral-950 antialiased selection:bg-cyan-300 selection:text-purple-900">
      <div className="fixed top-0 -z-10 h-full w-full"></div>

      <div className="absolute top-0 z-[-2] h-screen w-screen bg-white bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(0,163,255,0.3),rgba(255,255,255,0))]" />

      <div className="container mx-auto px-8 relative">
        <Navbar />
        <div id="hero">
          <Hero />
        </div>
        <div id="technologies">
          <Technologies />
        </div>
        <div id="experience">
          <Experience />
        </div>
        <div id="projects">
          <Projects />
        </div>
        <div id="formation">
          <Formation />
        </div>
        <div id="contact">
          <Contact />
        </div>
        <button
          onClick={scrollToTop}
          className="fixed bottom-12 right-8 z-49 p-4 rounded-full bg-gradient-to-r from-cyan-600 to-purple-700 text-white tracking-tight lg:text-4xl transition-all duration-300 lg:hidden"
        >
          <FaArrowUp />
        </button>
      </div>
    </div>
  );
}
