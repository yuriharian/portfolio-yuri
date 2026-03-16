import { Link } from "react-scroll";
import { FaLinkedin, FaGithub, FaBars, FaTimes } from "react-icons/fa";
import logo from "../assets/YH_Logo.png";
import { useState, useEffect } from "react";

function useIsMobile() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1024);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return isMobile;
}

const menuItems = [
  { id: "hero", label: "Início" },
  { id: "Journey", label: "Jornada" },
  { id: "technologies", label: "Tecnologias" },
  { id: "experience", label: "Experiência" },
  { id: "projects", label: "Projetos" },
  { id: "formation", label: "Formação" },
  { id: "contact", label: "Contato" },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [navbarHeight, setNavbarHeight] = useState(0);
  const isMobile = useIsMobile();

  useEffect(() => {
    const updateNavbarHeight = () => {
      const navbar = document.getElementById("navbar");
      if (navbar) setNavbarHeight(navbar.offsetHeight);
    };

    updateNavbarHeight();
    window.addEventListener("resize", updateNavbarHeight);

    return () => {
      window.removeEventListener("resize", updateNavbarHeight);
    };
  }, []);

  return (
    <nav
      id="navbar"
      className="fixed top-4 left-1/2 -translate-x-1/2 w-[95%] max-w-7xl z-50 rounded-3xl border border-white/60 bg-white/80 backdrop-blur-xl shadow-xl px-4 py-3"
    >
      <div className="flex items-center justify-between">
        <Link
          to="hero"
          smooth
          duration={500}
          offset={-navbarHeight}
          className="cursor-pointer"
        >
          <img className="w-14 md:w-16" src={logo} alt="logo" />
        </Link>

        {isMobile ? (
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-2xl text-neutral-700 hover:text-neutral-950 transition"
          >
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        ) : (
          <>
            <div className="flex items-center gap-3 text-sm font-medium">
              {menuItems.map((item) => (
                <Link
                  key={item.id}
                  to={item.id}
                  smooth
                  duration={500}
                  offset={-navbarHeight}
                  className="cursor-pointer px-4 py-2 rounded-full border border-neutral-200 bg-white hover:scale-105 hover:shadow-md transition-all duration-300 text-neutral-800"
                >
                  {item.label}
                </Link>
              ))}
            </div>

            <div className="flex items-center gap-3 text-2xl">
              <a
                href="https://github.com/yuriharian"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-neutral-100 hover:bg-neutral-200 transition"
              >
                <FaGithub className="text-neutral-700" />
              </a>

              <a
                href="https://www.linkedin.com/in/yuri-harian/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-neutral-100 hover:bg-neutral-200 transition"
              >
                <FaLinkedin className="text-neutral-700" />
              </a>
            </div>
          </>
        )}
      </div>

      {isMenuOpen && isMobile && (
        <div className="mt-4 flex flex-col gap-3 border-t border-neutral-200 pt-4">
          {menuItems.map((item) => (
            <Link
              key={item.id}
              to={item.id}
              smooth
              duration={500}
              offset={-navbarHeight}
              onClick={() => setIsMenuOpen(false)}
              className="cursor-pointer rounded-2xl border border-neutral-200 px-4 py-3 text-center font-medium text-neutral-800 hover:bg-neutral-50 transition"
            >
              {item.label}
            </Link>
          ))}

          <div className="flex justify-center gap-4 pt-2">
            <a
              href="https://github.com/yuriharian"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-neutral-100"
            >
              <FaGithub className="text-xl text-neutral-700" />
            </a>

            <a
              href="https://www.linkedin.com/in/yuri-harian/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-neutral-100"
            >
              <FaLinkedin className="text-xl text-neutral-700" />
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
