import { Link } from "react-scroll";
import { FaLinkedin, FaGithub, FaBars, FaTimes } from "react-icons/fa";
import { FiMoon, FiSun, FiChevronDown, FiCheck } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../assets/YH_Logo.png";
import { useState, useEffect, useRef } from "react";
import { useTheme } from "../context/ThemeContext";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../i18n/translations";
import { FlagBR, FlagUS, FlagES } from "./ui/flags";

// Mapa de idiomas com bandeiras (SVG inline, sem emoji nem CDN — o Windows
// não desenha emoji de bandeira, só o par de letras), rótulo curto (exibido
// no botão) e nome completo (exibido no dropdown)
const LANGUAGES = [
  { code: "pt", Flag: FlagBR, label: "PT", name: "Português" },
  { code: "en", Flag: FlagUS, label: "EN", name: "English" },
  { code: "es", Flag: FlagES, label: "ES", name: "Español" },
];

const LanguageMenu = ({
  currentLang,
  language,
  languages,
  open,
  setOpen,
  onSelect,
  triggerRef,
  compact = false,
}) => (
  <div className="relative" ref={triggerRef}>
    <button
      onClick={() => setOpen((s) => !s)}
      title={currentLang.name}
      aria-label={currentLang.name}
      className={`flex items-center gap-1.5 rounded-xl border border-neutral-200 dark:border-zinc-700 bg-neutral-100 dark:bg-zinc-800 hover:scale-105 transition-all duration-300 text-neutral-800 dark:text-zinc-100 ${
        compact ? "px-2.5 py-2" : "px-3 py-2"
      }`}
    >
      <span className="w-5 h-3.5 rounded-[2px] overflow-hidden shrink-0 shadow-sm ring-1 ring-black/10 dark:ring-white/10">
        <currentLang.Flag className="w-full h-full" />
      </span>
      <span className="text-xs font-bold tracking-wide">{currentLang.label}</span>
      <motion.span animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.2 }}>
        <FiChevronDown size={12} />
      </motion.span>
    </button>

    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -6, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -6, scale: 0.97 }}
          transition={{ duration: 0.15 }}
          className="absolute right-0 mt-2 w-44 rounded-2xl border border-neutral-200 dark:border-zinc-700 bg-white dark:bg-zinc-800 shadow-xl z-50 overflow-hidden py-1"
        >
          {languages.map((l) => (
            <button
              key={l.code}
              onClick={() => onSelect(l.code)}
              className={`w-full flex items-center gap-2.5 px-3 py-2.5 text-sm transition-colors ${
                l.code === language
                  ? "bg-blue-50 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400 font-semibold"
                  : "text-neutral-700 dark:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-zinc-700"
              }`}
            >
              <span className="w-5 h-3.5 rounded-[2px] overflow-hidden shrink-0 shadow-sm ring-1 ring-black/10 dark:ring-white/10">
                <l.Flag className="w-full h-full" />
              </span>
              <span className="flex-1 text-left">{l.name}</span>
              {l.code === language && <FiCheck size={14} />}
            </button>
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  </div>
);

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
    { id: "corporate-projects", label: t.menu.corporateProjects },
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
            <LanguageMenu
              currentLang={currentLang}
              language={language}
              languages={LANGUAGES}
              open={langMenuOpen}
              setOpen={setLangMenuOpen}
              triggerRef={langMenuRef}
              compact
              onSelect={(code) => {
                toggleLanguage(code);
                setLangMenuOpen(false);
              }}
            />

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
              <LanguageMenu
                currentLang={currentLang}
                language={language}
                languages={LANGUAGES}
                open={langMenuOpenDesktop}
                setOpen={setLangMenuOpenDesktop}
                triggerRef={langMenuRefDesktop}
                onSelect={(code) => {
                  toggleLanguage(code);
                  setLangMenuOpenDesktop(false);
                }}
              />
            </div>
          </>
        )}
      </div>

      <AnimatePresence initial={false}>
        {isMenuOpen && isMobile && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="mt-4 flex flex-col gap-3 border-t border-neutral-200 dark:border-zinc-700 pt-4">
              {menuItems.map((item, i) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.25, delay: i * 0.04 }}
                >
                  <Link
                    to={item.id}
                    smooth
                    duration={500}
                    offset={-navbarHeight}
                    onClick={() => setIsMenuOpen(false)}
                    className="cursor-pointer block rounded-2xl border border-neutral-200 dark:border-zinc-700 px-4 py-3 text-center font-medium text-neutral-800 dark:text-zinc-100 bg-white/95 dark:bg-zinc-900/80 transition"
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
