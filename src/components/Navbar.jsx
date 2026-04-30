import { Link } from "react-scroll";
import { FaLinkedin, FaGithub, FaBars, FaTimes } from "react-icons/fa";
import { FiMoon, FiSun } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../assets/YH_Logo.png";
import { useState, useEffect, useRef } from "react";
import { useTheme } from "../context/ThemeContext";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../i18n/translations";

// Mapa de idiomas com bandeiras e rótulos
const LANGUAGES = [
  { code: "pt", flag: "https://flagcdn.com/w40/br.png", label: "Português" },
  { code: "en", flag: "https://flagcdn.com/w40/us.png", label: "English" },
  { code: "es", flag: "https://flagcdn.com/w40/es.png", label: "Español" },
];

function useIsMobile() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1024);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return isMobile;
}

const ThemeToggle = ({ theme, toggleTheme, mobile = false }) => {
  const baseClasses = mobile
    ? "p-3 rounded-2xl"
    : "p-2 rounded-full border-neutral-200 dark:border-zinc-700";

  return (
    <motion.button
      onClick={toggleTheme}
      whileTap={{ scale: 0.9, rotate: 20 }}
      className={`${baseClasses} bg-neutral-100 dark:bg-zinc-800 hover:scale-105 transition-all duration-300 flex items-center justify-center`}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={theme}
          initial={{ rotate: -90, opacity: 0, scale: 0.6 }}
          animate={{ rotate: 0, opacity: 1, scale: 1 }}
          exit={{ rotate: 90, opacity: 0, scale: 0.6 }}
          transition={{ duration: 0.25 }}
          className="flex items-center justify-center"
        >
          {theme === "light" ? (
            <FiMoon className="text-neutral-700" />
          ) : (
            <FiSun className="text-yellow-300 drop-shadow-sm" />
          )}
        </motion.div>
      </AnimatePresence>
    </motion.button>
  );
};

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [navbarHeight, setNavbarHeight] = useState(0);
  const isMobile = useIsMobile();

  const [langMenuOpen, setLangMenuOpen] = useState(false);
  const langMenuRef = useRef(null);
  const [langMenuOpenDesktop, setLangMenuOpenDesktop] = useState(false);
  const langMenuRefDesktop = useRef(null);

  const { theme, toggleTheme } = useTheme();
  const { language, toggleLanguage } = useLanguage();
  const t = translations[language] || translations.pt;

  // Idioma atual para exibir no botão
  const currentLang =
    LANGUAGES.find((l) => l.code === language) || LANGUAGES[0];

  const menuItems = [
    { id: "hero", label: t.menu.home },
    { id: "Journey", label: t.menu.journey },
    { id: "technologies", label: t.menu.technologies },
    { id: "experience", label: t.menu.experience },
    { id: "projects", label: t.menu.projects },
    { id: "formation", label: t.menu.formation },
    { id: "contact", label: t.menu.contact },
  ];

  const desktopBtn =
    "p-2 rounded-full border-neutral-200 dark:border-zinc-700 bg-neutral-100 dark:bg-zinc-800 hover:scale-105 transition flex items-center justify-center text-neutral-700 dark:text-zinc-200";

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

  useEffect(() => {
    const handler = (e) => {
      const inMobile =
        langMenuRef.current && langMenuRef.current.contains(e.target);
      const inDesktop =
        langMenuRefDesktop.current &&
        langMenuRefDesktop.current.contains(e.target);
      if (!inMobile) setLangMenuOpen(false);
      if (!inDesktop) setLangMenuOpenDesktop(false);
    };
    document.addEventListener("click", handler);
    return () => document.removeEventListener("click", handler);
  }, []);

  return (
    <nav
      id="navbar"
      className="fixed top-4 left-1/2 -translate-x-1/2 w-[95%] max-w-7xl z-50 rounded-3xl border-2 border-white/40 dark:border-white/10 bg-white/75 dark:bg-zinc-900/70 backdrop-blur-xl shadow-xl px-4 py-3 transition-colors duration-500"
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
          <div className="flex items-center gap-3">
            <ThemeToggle theme={theme} toggleTheme={toggleTheme} mobile />

            {/* Seletor de idioma — mobile */}
            <div className="relative" ref={langMenuRef}>
              <button
                onClick={() => setLangMenuOpen((s) => !s)}
                title={currentLang.label}
                aria-label={currentLang.label}
                className="px-3 py-2 rounded-xl bg-neutral-100 dark:bg-zinc-800 flex items-center justify-center"
              >
                <img
                  src={currentLang.flag}
                  alt={currentLang.label}
                  className="w-6 h-auto rounded-sm"
                />
              </button>

              {langMenuOpen && (
                <div className="absolute right-0 mt-2 w-36 bg-white dark:bg-zinc-800 rounded-md shadow-lg z-50 py-1">
                  {LANGUAGES.map((l) => (
                    <button
                      key={l.code}
                      onClick={() => {
                        toggleLanguage(l.code);
                        setLangMenuOpen(false);
                      }}
                      title={l.label}
                      aria-label={l.label}
                      className={`w-full text-left px-3 py-2 flex items-center gap-2 ${
                        language === l.code ? "opacity-100" : "opacity-50"
                      } hover:opacity-100 hover:bg-neutral-100 dark:hover:bg-zinc-700`}
                    >
                      <img
                        src={l.flag}
                        alt={l.label}
                        className="w-6 h-auto rounded-sm"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-2xl text-neutral-700 dark:text-zinc-200"
            >
              {isMenuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
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
                  className="cursor-pointer px-4 py-2 rounded-full border border-neutral-200 dark:border-zinc-700 bg-white dark:bg-zinc-800 hover:scale-105 hover:shadow-md transition-all duration-300 text-neutral-800 dark:text-zinc-100"
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
                className={desktopBtn}
              >
                <FaGithub />
              </a>

              <a
                href="https://www.linkedin.com/in/yuri-harian/"
                target="_blank"
                rel="noopener noreferrer"
                className={desktopBtn}
              >
                <FaLinkedin />
              </a>

              <ThemeToggle theme={theme} toggleTheme={toggleTheme} />

              {/* Seletor de idioma — desktop */}
              <div className="relative" ref={langMenuRefDesktop}>
                <button
                  onClick={() => setLangMenuOpenDesktop((s) => !s)}
                  title={currentLang.label}
                  aria-label={currentLang.label}
                  className={`${desktopBtn} w-10 h-10`}
                >
                  <img
                    src={currentLang.flag}
                    alt={currentLang.label}
                    className="w-6 h-auto rounded-sm"
                  />
                </button>

                {langMenuOpenDesktop && (
                  <div className="absolute right-0 mt-2 w-40 bg-white dark:bg-zinc-800 rounded-md shadow-lg z-50 py-1">
                    {LANGUAGES.map((l) => (
                      <button
                        key={l.code}
                        onClick={() => {
                          toggleLanguage(l.code);
                          setLangMenuOpenDesktop(false);
                        }}
                        title={l.label}
                        aria-label={l.label}
                        className={`w-full text-left px-3 py-2 flex items-center gap-2 ${
                          language === l.code ? "opacity-100" : "opacity-50"
                        } hover:opacity-100 hover:bg-neutral-100 dark:hover:bg-zinc-700`}
                      >
                        <img
                          src={l.flag}
                          alt={l.label}
                          className="w-6 h-auto rounded-sm"
                        />
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </>
        )}
      </div>

      {isMenuOpen && isMobile && (
        <div className="mt-4 flex flex-col gap-3 border-t border-neutral-200 dark:border-zinc-700 pt-4">
          <div className="absolute inset-x-4 top-full mt-2 -translate-y-2 rounded-2xl bg-white/10 dark:bg-zinc-900/30 backdrop-blur-sm p-3 z-40" />

          {menuItems.map((item) => (
            <Link
              key={item.id}
              to={item.id}
              smooth
              duration={500}
              offset={-navbarHeight}
              onClick={() => setIsMenuOpen(false)}
              className="cursor-pointer rounded-2xl border border-neutral-200 dark:border-zinc-700 px-4 py-3 text-center font-medium text-neutral-800 dark:text-zinc-100 bg-white/95 dark:bg-zinc-900/80 transition"
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
