import { CONTENT } from "../constants";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaPlay } from "react-icons/fa";
import { useLanguage } from "../context/LanguageContext";
import SharedCarousel from "./SharedCarousel";
import { translations } from "../i18n/translations";
import { useState, useRef, useCallback } from "react";

// ─── Media: imagem ou vídeo com play on hover/tap ────────────────────────────
const ProjectMedia = ({ project, featured = false }) => {
  const videoRef = useRef(null);
  const [playing, setPlaying] = useState(false);
  const height = featured ? "h-44" : "h-36";

  const play = useCallback(() => {
    if (!videoRef.current) return;
    videoRef.current.play();
    setPlaying(true);
  }, []);

  const pause = useCallback(() => {
    if (!videoRef.current) return;
    videoRef.current.pause();
    setPlaying(false);
  }, []);

  // Toggle para mobile (tap)
  const handleTap = useCallback(() => {
    if (!videoRef.current) return;
    playing ? pause() : play();
  }, [playing, play, pause]);

  if (project.placeholder) {
    return (
      <div
        className={`w-full rounded-2xl flex flex-col items-center justify-center gap-3 ${height} bg-neutral-200/50 dark:bg-white/5`}
      >
        <div className="text-4xl opacity-30">🚧</div>
        <span className="text-xs font-semibold uppercase tracking-widest text-neutral-400 dark:text-neutral-500">
          Em breve
        </span>
      </div>
    );
  }

  if (project.video) {
    return (
      <div
        className={`relative w-full ${height} rounded-2xl overflow-hidden cursor-pointer`}
        onMouseEnter={play}
        onMouseLeave={pause}
        onClick={handleTap}
      >
        <video
          ref={videoRef}
          src={project.video}
          className="w-full h-full object-cover rounded-2xl transition-transform duration-300 group-hover:scale-[1.03]"
          playsInline
          muted
          loop
          preload="metadata"
        />
        {/* Overlay com ícone de play quando pausado */}
        <AnimatePresence>
          {!playing && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="absolute inset-0 flex items-center justify-center bg-black/30 rounded-2xl"
            >
              <div className="w-12 h-12 rounded-full bg-white/90 dark:bg-black/60 flex items-center justify-center shadow-lg">
                <FaPlay
                  className="text-neutral-800 dark:text-white ml-1"
                  size={16}
                />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  }

  // Fallback: imagem
  return (
    <img
      src={project.image}
      alt={project.title}
      className={`w-full object-contain rounded-2xl group-hover:scale-[1.03] transition-transform duration-300 ${height}`}
      draggable={false}
    />
  );
};

// ─── Card reutilizável ───────────────────────────────────────────────────────
const ProjectCard = ({ project, t, featured = false }) => {
  const isPlaceholder = project.placeholder === true;

  return (
    <div
      className={`group flex flex-col rounded-3xl border-2 overflow-hidden h-full md:min-h-[340px] lg:min-h-[380px] transition-all duration-300
        ${
          isPlaceholder
            ? "border-dashed border-neutral-300 dark:border-white/20 bg-neutral-50/80 dark:bg-white/[0.03]"
            : "border-white/60 dark:border-white/10 bg-white/90 dark:bg-white/5 backdrop-blur-xl shadow-lg hover:shadow-2xl hover:-translate-y-1"
        }`}
    >
      {/* Mídia */}
      <div
        className={`p-4 border-b border-neutral-100 dark:border-white/10 ${isPlaceholder ? "bg-neutral-100/60 dark:bg-white/[0.03]" : "bg-gradient-to-br from-neutral-50 to-white dark:from-white/5 dark:to-white/0"}`}
      >
        <ProjectMedia project={project} featured={featured} />
      </div>

      {/* Conteúdo */}
      <div className="flex flex-col p-5 gap-3 flex-1">
        <div className="flex items-start justify-between gap-2">
          <h3
            className={`font-bold text-neutral-900 dark:text-white ${featured ? "text-xl" : "text-lg"}`}
          >
            {project.title}
          </h3>
          {isPlaceholder && (
            <span className="shrink-0 text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-amber-100 dark:bg-amber-400/10 text-amber-600 dark:text-amber-400 border border-amber-200 dark:border-amber-400/20">
              WIP
            </span>
          )}
        </div>

        <p
          className={`leading-6 flex-grow text-sm ${isPlaceholder ? "text-neutral-400 dark:text-neutral-500 italic" : "text-neutral-600 dark:text-neutral-300"}`}
        >
          {project.description}
        </p>

        {project.technologies?.length > 0 && (
          <div className="flex flex-wrap gap-1.5">
            {project.technologies.map((tech, idx) => (
              <span
                key={idx}
                className="rounded-full bg-neutral-100 dark:bg-white/10 px-2.5 py-0.5 text-xs font-medium text-neutral-700 dark:text-neutral-200"
              >
                {tech}
              </span>
            ))}
          </div>
        )}

        {!isPlaceholder && (
          <div className="flex flex-wrap gap-2 pt-2 mt-auto">
            {project.source && (
              <a
                href={project.source}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-sm font-semibold bg-neutral-900 dark:bg-white/10 dark:hover:bg-white/15 text-white hover:scale-105 transition-all duration-300"
              >
                <FaGithub />
                {t.projects?.code || "Código"}
              </a>
            )}
            {project.deploy && (
              <a
                href={project.deploy}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-sm font-semibold text-white shadow-md hover:scale-105 transition-all duration-300 rainbow-btn-deploy"
              >
                <FaExternalLinkAlt />
                {t.projects?.viewProject || "Ver projeto"}
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

// Carousel implementation removed — using SharedCarousel for consistency
// ─── Seção principal ─────────────────────────────────────────────────────────
const Projects = () => {
  const { language } = useLanguage();
  const t = translations[language] || translations.pt;
  const projects = CONTENT[language]?.projects || CONTENT.pt.projects;

  const featured = projects.slice(0, 2);
  const rest = projects.slice(2);

  return (
    <section
      id="projects"
      className="relative py-12 md:py-20 border-b border-neutral-200 dark:border-white/10"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 text-neutral-900 dark:text-white">
          {t.projects?.title || "Projetos"}
        </h2>
        <p className="text-neutral-600 dark:text-neutral-300 max-w-3xl mx-auto leading-8">
          {t.projects?.description ||
            "Projetos que representam minha evolução em front-end, back-end, automação e IA aplicada."}
        </p>
      </motion.div>

      {/* ── Destaques ── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="mb-14"
      >
        <div className="flex items-center gap-3 mb-6">
          <span className="text-xs font-semibold uppercase tracking-widest text-neutral-400 dark:text-neutral-500">
            {t.projects?.highlights || "Destaques"}
          </span>
          <div className="flex-1 h-px bg-neutral-200 dark:bg-white/10" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {featured.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              viewport={{ once: true }}
              className="h-full"
            >
              <ProjectCard project={project} t={t} featured />
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* ── Carrossel ── */}
      {rest.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="pb-10"
        >
          <div className="flex items-center gap-3 mb-8">
            <span className="text-xs font-semibold uppercase tracking-widest text-neutral-400 dark:text-neutral-500">
              {t.projects?.more || "Mais projetos"}
            </span>
            <div className="flex-1 h-px bg-neutral-200 dark:bg-white/10" />
          </div>

          <SharedCarousel
            items={rest}
            visibleCount={3}
            renderItem={(project) => <ProjectCard project={project} t={t} />}
          />
        </motion.div>
      )}
    </section>
  );
};

export default Projects;
