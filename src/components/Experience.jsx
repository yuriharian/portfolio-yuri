import React, { useEffect, useState } from "react";
import { CONTENT } from "../constants";
import { motion } from "framer-motion";
import { FiBriefcase, FiTrendingUp } from "react-icons/fi";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../i18n/translations";

const Experience = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  const { language } = useLanguage();
  const t = translations[language] || translations.pt;
  const experiences = CONTENT[language]?.experiences || CONTENT.pt.experiences;

  useEffect(() => {
    const checkScreen = () => setIsMobile(window.innerWidth < 768);
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  // Ensure desktop view shows the most recent experience (top) as active by default
  useEffect(() => {
    if (!isMobile) setActiveIndex(0);
  }, [isMobile]);

  const activeExperience = experiences[activeIndex];

  const nextSlide = () => {
    if (activeIndex < experiences.length - 1) {
      setActiveIndex((prev) => prev + 1);
    }
  };

  const prevSlide = () => {
    if (activeIndex > 0) setActiveIndex((prev) => prev - 1);
  };

  return (
    <section
      id="experience"
      className="relative py-10 md:py-20 border-b border-neutral-200 dark:border-white/10"
    >
      <motion.h1
        initial={{ y: -30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="mb-4 text-center text-3xl md:text-5xl font-bold tracking-tight text-neutral-900 dark:text-white"
      >
        {t.experience.title}
      </motion.h1>
      {isMobile ? (
        <div className="px-4">
          <motion.div
            key={activeExperience.role}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.35 }}
            className="rounded-2xl border border-white/60 dark:border-white/10 bg-white/95 dark:bg-zinc-900/80 backdrop-blur-sm shadow-xl p-5 transition-colors duration-500"
          >
            <div className="flex items-center gap-3 mb-3">
              {activeIndex === 0 ? (
                <FiTrendingUp className="text-xl text-blue-500" />
              ) : (
                <FiBriefcase className="text-xl text-blue-500" />
              )}

              <p className="font-bold text-sm text-blue-600 dark:text-blue-400">
                {activeExperience.year}
              </p>
            </div>

            <h3 className="font-bold text-xl text-neutral-900 dark:text-white mb-2">
              {activeExperience.role}
            </h3>

            <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-4 font-medium">
              {activeExperience.company}
            </p>

            <p className="mb-4 text-sm text-neutral-700 dark:text-neutral-300 leading-7">
              {activeExperience.description}
            </p>

            {activeExperience.technologies?.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {activeExperience.technologies.map((technology, idx) => (
                  <span
                    key={idx}
                    className="text-xs px-3 py-1 rounded-full bg-neutral-100 dark:bg-white/10 text-neutral-700 dark:text-neutral-200 font-medium"
                  >
                    {technology}
                  </span>
                ))}
              </div>
            )}
          </motion.div>

          <div className="flex justify-center gap-3 mt-5">
            {experiences.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === activeIndex
                    ? "bg-blue-500 scale-125"
                    : "bg-neutral-300 dark:bg-zinc-600"
                }`}
              />
            ))}
          </div>

          <div className="flex justify-center gap-4 mt-5">
            <button
              onClick={prevSlide}
              disabled={activeIndex === 0}
              className="px-4 py-2 rounded-xl border border-neutral-300 dark:border-white/10 bg-white dark:bg-white/5 text-neutral-800 dark:text-white disabled:opacity-40"
            >
              {t.experience.previous}
            </button>

            <button
              onClick={nextSlide}
              disabled={activeIndex === experiences.length - 1}
              className="px-4 py-2 rounded-xl text-white disabled:opacity-40 btn-solid-blue"
            >
              {t.experience.next}
            </button>
          </div>
        </div>
      ) : (
        <div className="relative flex flex-col gap-10 pl-10">
          <div className="absolute left-4 top-0 bottom-0 w-1 bg-neutral-200 dark:bg-zinc-800 rounded-full" />

          <div className="absolute left-4 top-0 bottom-0 w-1 rounded-full rainbow-progress" />

          {experiences.map((experience, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div
                className={`absolute -left-8 top-8 w-5 h-5 rounded-full border-4 border-white dark:border-[#0b1120] shadow-lg ${
                  index === activeIndex
                    ? "bg-blue-500 scale-125"
                    : "bg-neutral-400 dark:bg-zinc-500"
                }`}
              />

              <div className="w-full rounded-3xl border-2 border-white/60 dark:border-white/10 bg-white/90 dark:bg-white/5 backdrop-blur-xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300">
                <div className="flex items-center gap-3 mb-3">
                  {index === 0 ? (
                    <FiTrendingUp className="text-xl text-blue-500" />
                  ) : (
                    <FiBriefcase className="text-xl text-blue-500" />
                  )}

                  <p className="font-bold text-sm md:text-base text-blue-600 dark:text-blue-400">
                    {experience.year}
                  </p>
                </div>

                <h3 className="font-bold text-2xl text-neutral-900 dark:text-white mb-2">
                  {experience.role}
                </h3>

                <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-4 font-medium">
                  {experience.company}
                </p>

                <p className="mb-4 text-neutral-700 dark:text-neutral-300 leading-8">
                  {experience.description}
                </p>

                {experience.technologies?.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {experience.technologies.map((technology, idx) => (
                      <span
                        key={idx}
                        className="text-xs px-3 py-1 rounded-full bg-neutral-100 dark:bg-white/10 text-neutral-700 dark:text-neutral-200 font-medium"
                      >
                        {technology}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      )}
    </section>
  );
};

export default Experience;
