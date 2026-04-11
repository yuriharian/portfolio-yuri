import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaPython,
  FaGitAlt,
  FaNodeJs,
} from "react-icons/fa";
import {
  SiMongodb,
  SiCsharp,
  SiTypescript,
  SiNextdotjs,
  SiNestjs,
  SiExpress,
  SiDart,
  SiDocker,
  SiGitlab,
  SiOpenai,
} from "react-icons/si";
import { GrMysql } from "react-icons/gr";
import { RiTailwindCssFill } from "react-icons/ri";
import { TbBrandFramerMotion } from "react-icons/tb";
import { motion } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../i18n/translations";

const FRONTEND_TOOLS = [
  { name: "HTML", icon: FaHtml5, color: "#f97316" },
  { name: "CSS", icon: FaCss3Alt, color: "#3b82f6" },
  { name: "JavaScript", icon: FaJsSquare, color: "#eab308" },
  { name: "TypeScript", icon: SiTypescript, color: "#2563eb" },
  { name: "React.js", icon: FaReact, color: "#06b6d4" },
  { name: "Next.js", icon: SiNextdotjs, color: "#171717" },
  { name: "Tailwind", icon: RiTailwindCssFill, color: "#0891b2" },
  { name: "Motion", icon: TbBrandFramerMotion, color: "#8b5cf6" },
  { name: "Git", icon: FaGitAlt, color: "#dc2626" },
  { name: "Dart", icon: SiDart, color: "#0175C2" },
];

const BACKEND_DB_AI = [
  { name: "Node.js", icon: FaNodeJs, color: "#22c55e" },
  { name: "Express", icon: SiExpress, color: "#525252" },
  { name: "NestJS", icon: SiNestjs, color: "#be123c" },
  { name: "Python", icon: FaPython, color: "#2563eb" },
  { name: "OpenAI / LLM", icon: SiOpenai, color: "#10a37f" },
  { name: "Docker", icon: SiDocker, color: "#0ea5e9" },
  { name: "GitLab CI/CD", icon: SiGitlab, color: "#f97316" },
  { name: "C#", icon: SiCsharp, color: "#a21caf" },
  { name: "MySQL", icon: GrMysql, color: "#00618a" },
  { name: "MongoDB", icon: SiMongodb, color: "#16a34a" },
];

const Technologies = () => {
  const [selectedFront, setSelectedFront] = React.useState(null);
  const [selectedBack, setSelectedBack] = React.useState(null);

  const { language } = useLanguage();
  const t = translations[language] || translations.pt;

  const getSafeColor = (tech) => {
    if (tech.name === "Next.js") {
      return "text-neutral-900 dark:text-white";
    }

    if (tech.name === "Express") {
      return "text-neutral-700 dark:text-neutral-200";
    }

    return "";
  };

  const renderCard = (title, techs, selected, setSelected) => {
    return (
      <div className="flex-1 flex flex-col items-center justify-center rounded-3xl shadow-xl p-8 min-h-[380px] border-2 border-neutral-200 dark:border-white/10 bg-white/90 dark:bg-white/5 backdrop-blur-xl transition-all duration-500">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center tracking-tight text-neutral-900 dark:text-white">
          {title}
        </h2>

        {selected ? (
          <div className="flex flex-col items-center justify-center h-full">
            <selected.icon
              className={`text-[7rem] md:text-[8rem] mb-4 ${getSafeColor(
                selected,
              )}`}
              style={{
                color:
                  selected.name !== "Next.js" && selected.name !== "Express"
                    ? selected.color
                    : undefined,
                filter: "drop-shadow(0 4px 18px rgba(0,0,0,0.25))",
              }}
            />

            <span className="text-2xl md:text-3xl font-bold text-neutral-900 dark:text-white drop-shadow mb-4 text-center">
              {selected.name}
            </span>

            <button
              className="mt-2 px-5 py-2 rounded-xl font-semibold text-white btn-solid-blue"
              onClick={() => setSelected(null)}
            >
              {t.technologies.back}
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-3 gap-3 md:flex md:flex-wrap md:items-center md:justify-center md:gap-6">
            {techs.map((tech) => (
              <button
                key={tech.name}
                className="group flex flex-col items-center justify-center w-16 h-16 md:w-24 md:h-24 rounded-2xl border-2 p-1 md:p-2 shadow-md bg-white dark:bg-stone-900 border-neutral-200 dark:border-white/10 hover:scale-110 hover:shadow-xl transition-all duration-300"
                style={{
                  borderColor: tech.color,
                }}
                onClick={() => setSelected(tech)}
              >
                <tech.icon
                  className={`text-xl md:text-5xl transition-transform group-hover:scale-110 ${getSafeColor(
                    tech,
                  )}`}
                  style={{
                    color:
                      tech.name !== "Next.js" && tech.name !== "Express"
                        ? tech.color
                        : undefined,
                  }}
                />

                <span className="mt-1 text-xs md:mt-2 md:text-sm font-semibold text-center text-neutral-800 dark:text-neutral-200">
                  {tech.name}
                </span>
              </button>
            ))}
          </div>
        )}
      </div>
    );
  };

  return (
    <section
      id="technologies"
      className="mt-8 md:mt-14 pb-20 border-b border-neutral-200 dark:border-white/10"
    >
      <motion.h1
        whileInView={{ y: 0, opacity: 1 }}
        initial={{ y: -30, opacity: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="mb-6 text-center text-3xl md:text-5xl font-bold tracking-tight text-neutral-900 dark:text-white"
      >
        {t.technologies.title}
      </motion.h1>

      <motion.p
        whileInView={{ y: 0, opacity: 1 }}
        initial={{ y: -40, opacity: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="mb-12 text-center max-w-4xl mx-auto text-neutral-600 dark:text-neutral-300 leading-8"
      >
        {t.technologies.description}
      </motion.p>

      <div className="flex flex-col lg:flex-row items-stretch justify-center gap-8">
        {renderCard(
          t.technologies.frontendTitle,
          FRONTEND_TOOLS,
          selectedFront,
          setSelectedFront,
        )}

        {renderCard(
          t.technologies.backendTitle,
          BACKEND_DB_AI,
          selectedBack,
          setSelectedBack,
        )}
      </div>
    </section>
  );
};

export default Technologies;
