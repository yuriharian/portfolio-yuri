import { useEffect, useState } from "react";
import { Link } from "react-scroll";
import { FaLinkedin, FaGithub, FaBars, FaTimes } from "react-icons/fa";
import logo from "../assets/YH_Logo.png";

function useIsMobile() {
  const [isMobile, setIsMobile] = useState(
    typeof window !== "undefined" ? window.innerWidth < 768 : false,
  );
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return isMobile;
}

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [navbarHeight, setNavbarHeight] = useState(0);
  const isMobile = useIsMobile();

  useEffect(() => {
    const updateNavbarHeight = () => {
      const height = document.getElementById("navbar").offsetHeight;
      setNavbarHeight(height);
    };

    window.addEventListener("resize", updateNavbarHeight);

    updateNavbarHeight();

    return () => {
      window.removeEventListener("resize", updateNavbarHeight);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = () => setIsMenuOpen(false);
  return (
    <nav
      id="navbar"
      className="fixed top-0 left-0 right-0 bg-white shadow-md z-50 flex items-center justify-between py-4 px-8"
    >
      <div className="flex items-center justify-between w-full lg:w-auto">
        <Link
          to="hero"
          smooth={true}
          duration={500}
          offset={-navbarHeight}
          className="cursor-pointer"
        >
          <img className="mx-2 w-16" src={logo} alt="logo" />
        </Link>
        {isMobile && (
          <button
            className="lg:hidden text-3xl text-neutral-600 hover:text-neutral-900"
            onClick={toggleMenu}
            aria-label="menu"
          >
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        )}
      </div>

      {/* Mobile menu dropdown */}
      {isMenuOpen && isMobile && (
        <div
          className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-40 z-50 flex"
          onClick={toggleMenu}
        >
          <div
            className="fixed top-0 left-0 h-screen w-full bg-white z-50 flex flex-col items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <Link
              to="hero"
              smooth={true}
              duration={500}
              offset={-navbarHeight}
              className="cursor-pointer text-2xl text-neutral-800 hover:bg-gradient-to-r from-cyan-600 to-purple-700 hover:bg-clip-text hover:text-transparent my-6"
              onClick={handleLinkClick}
            >
              Início
            </Link>
            <Link
              to="technologies"
              smooth={true}
              duration={500}
              offset={-navbarHeight}
              className="cursor-pointer text-2xl text-neutral-800 hover:bg-gradient-to-r from-cyan-600 to-purple-700 hover:bg-clip-text hover:text-transparent my-6"
              onClick={handleLinkClick}
            >
              Tecnologias
            </Link>
            <Link
              to="experience"
              smooth={true}
              duration={500}
              offset={-navbarHeight}
              className="cursor-pointer text-2xl text-neutral-800 hover:bg-gradient-to-r from-cyan-600 to-purple-700 hover:bg-clip-text hover:text-transparent my-6"
              onClick={handleLinkClick}
            >
              Experiência
            </Link>
            <Link
              to="projects"
              smooth={true}
              duration={500}
              offset={-navbarHeight}
              className="cursor-pointer text-2xl text-neutral-800 hover:bg-gradient-to-r from-cyan-600 to-purple-700 hover:bg-clip-text hover:text-transparent my-6"
              onClick={handleLinkClick}
            >
              Projetos
            </Link>
            <Link
              to="contact"
              smooth={true}
              duration={500}
              offset={-navbarHeight}
              className="cursor-pointer text-2xl text-neutral-800 hover:bg-gradient-to-r from-cyan-600 to-purple-700 hover:bg-clip-text hover:text-transparent my-6"
              onClick={handleLinkClick}
            >
              Contato
            </Link>
            <div className="flex gap-6 my-6">
              <FaGithub
                className="text-4xl text-neutral-700 hover:text-neutral-950 cursor-pointer"
                onClick={handleLinkClick}
              />
              <FaLinkedin
                className="text-4xl text-neutral-700 hover:text-neutral-950 cursor-pointer"
                onClick={handleLinkClick}
              />
            </div>
            <button
              className="absolute top-4 right-4 text-4xl text-neutral-700 hover:text-neutral-950"
              onClick={toggleMenu}
              aria-label="close mobile menu"
            >
              <FaTimes />
            </button>
          </div>
        </div>
      )}
      <div
        className={`${
          isMenuOpen
            ? "fixed top-0 left-0 h-screen w-full bg-white z-50 flex flex-col items-center justify-center"
            : "hidden"
        } lg:hidden`}
      >
        <Link
          to="hero"
          smooth={true}
          duration={500}
          offset={-navbarHeight}
          className="cursor-pointer text-2xl text-neutral-800 hover:bg-gradient-to-r from-cyan-600 to-purple-700 hover:bg-clip-text hover:text-transparent my-6"
          onClick={handleLinkClick}
        >
          Início
        </Link>
        <Link
          to="technologies"
          smooth={true}
          duration={500}
          offset={-navbarHeight}
          className="cursor-pointer text-2xl text-neutral-800 hover:bg-gradient-to-r from-cyan-600 to-purple-700 hover:bg-clip-text hover:text-transparent my-6"
          onClick={handleLinkClick}
        >
          Tecnologias
        </Link>
        <Link
          to="experience"
          smooth={true}
          duration={500}
          offset={-navbarHeight}
          className="cursor-pointer text-2xl text-neutral-800 hover:bg-gradient-to-r from-cyan-600 to-purple-700 hover:bg-clip-text hover:text-transparent my-6"
          onClick={handleLinkClick}
        >
          Experiência
        </Link>
        <Link
          to="projects"
          smooth={true}
          duration={500}
          offset={-navbarHeight}
          className="cursor-pointer text-2xl text-neutral-800 hover:bg-gradient-to-r from-cyan-600 to-purple-700 hover:bg-clip-text hover:text-transparent my-6"
          onClick={handleLinkClick}
        >
          Projetos
        </Link>
        <Link
          to="contact"
          smooth={true}
          duration={500}
          offset={-navbarHeight}
          className="cursor-pointer text-2xl text-neutral-800 hover:bg-gradient-to-r from-cyan-600 to-purple-700 hover:bg-clip-text hover:text-transparent my-6"
          onClick={handleLinkClick}
        >
          Contato
        </Link>
        <FaGithub
          className="text-4xl text-neutral-700 hover:text-neutral-950 my-6 cursor-pointer"
          onClick={handleLinkClick}
        />
        <FaLinkedin
          className="text-4xl text-neutral-700 hover:text-neutral-950 my-6 cursor-pointer"
          onClick={handleLinkClick}
        />
        <button
          className="absolute top-4 right-4 text-4xl text-neutral-700 hover:text-neutral-950"
          onClick={toggleMenu}
        >
          <FaTimes />
        </button>
      </div>
      <div className="hidden lg:flex items-center justify-center gap-8 text-xl">
        <Link
          to="hero"
          smooth={true}
          duration={500}
          offset={-navbarHeight}
          className="cursor-pointer text-neutral-600 hover:bg-gradient-to-r from-cyan-600 to-purple-700 hover:bg-clip-text hover:text-transparent"
        >
          Início
        </Link>
        <Link
          to="technologies"
          smooth={true}
          duration={500}
          offset={-navbarHeight}
          className="cursor-pointer text-neutral-600 hover:bg-gradient-to-r from-cyan-600 to-purple-700 hover:bg-clip-text hover:text-transparent"
        >
          Tecnologias
        </Link>
        <Link
          to="experience"
          smooth={true}
          duration={500}
          offset={-navbarHeight}
          className="cursor-pointer text-neutral-600 hover:bg-gradient-to-r from-cyan-600 to-purple-700 hover:bg-clip-text hover:text-transparent"
        >
          Experiência
        </Link>
        <Link
          to="projects"
          smooth={true}
          duration={500}
          offset={-navbarHeight}
          className="cursor-pointer text-neutral-600 hover:bg-gradient-to-r from-cyan-600 to-purple-700 hover:bg-clip-text hover:text-transparent"
        >
          Projetos
        </Link>
        <Link
          to="contact"
          smooth={true}
          duration={500}
          offset={-navbarHeight}
          className="cursor-pointer text-neutral-600 hover:bg-gradient-to-r from-cyan-600 to-purple-700 hover:bg-clip-text hover:text-transparent"
        >
          Contato
        </Link>
      </div>
      <div className="hidden lg:flex items-center justify-center gap-4 text-3xl">
        <a
          href="https://github.com/yuriharian"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub className="text-neutral-600 hover:text-neutral-950" />
        </a>
        <a
          href="https://www.linkedin.com/in/yuri-harian/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin className="text-neutral-600 hover:text-neutral-950" />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
