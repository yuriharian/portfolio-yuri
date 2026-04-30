import { CONTENT } from "../constants";
import { motion } from "framer-motion";
import { FiBookOpen, FiAward } from "react-icons/fi";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../i18n/translations";

const Formation = () => {
  const { language } = useLanguage();

  const t = translations[language] || translations.pt;
  const formation = CONTENT[language]?.formation || CONTENT.pt.formation;

  const higher = formation.slice(0, 1);
  const featured = formation.slice(1, 4);
  const courses = formation.slice(4);

  return (
    <section
      id="formation"
      className="relative py-12 md:py-20 border-b border-neutral-200 dark:border-white/10"
    >
      <motion.h1
        initial={{ y: -30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="mb-4 text-center text-3xl md:text-5xl font-bold tracking-tight text-neutral-900 dark:text-white"
      >
        {t.formation.title}
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
        viewport={{ once: true }}
        className="max-w-3xl mx-auto text-center text-neutral-600 dark:text-neutral-300 mb-14 leading-8"
      >
        {t.formation.subtitle}
      </motion.p>

      <div className="flex flex-col gap-10">
        {higher.map((item, index) => (
          <motion.div
            key={`higher-${index}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="rounded-3xl border-2 border-white/60 dark:border-white/10 bg-white/90 dark:bg-white/5 backdrop-blur-xl shadow-xl p-8"
          >
            <div className="flex items-center gap-3 mb-4">
              <FiAward className="text-2xl text-blue-500" />
              <p className="font-bold text-blue-600 dark:text-blue-400">
                {item.year}
              </p>
            </div>

            <h3 className="font-bold text-2xl text-neutral-900 dark:text-white mb-2">
              {item.course}
            </h3>

            <p className="text-neutral-500 dark:text-neutral-400 font-medium">
              {item.company}
            </p>

            <p className="mt-4 text-neutral-700 dark:text-neutral-300 leading-8">
              {t.formation.degreeDescription}
            </p>
          </motion.div>
        ))}

        {featured.length > 0 && (
          <div>
            <div className="flex items-center gap-3 mb-6">
              <span className="text-xs font-semibold uppercase tracking-widest text-neutral-400 dark:text-neutral-500">
                {t.projects?.highlights || "Destaques"}
              </span>
              <div className="flex-1 h-px bg-neutral-200 dark:bg-white/10" />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {featured.map((course, i) => (
                <motion.div
                  key={`featured-course-${i}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  viewport={{ once: true }}
                  className="group rounded-3xl border-2 border-white/60 dark:border-white/10 bg-white/90 dark:bg-white/5 backdrop-blur-xl p-6 shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 h-full flex flex-col"
                >
                  <div className="flex items-start gap-3 mb-4">
                    <FiBookOpen className="text-xl text-blue-500 mt-1" />
                    <div>
                      <p className="text-sm text-blue-600 dark:text-blue-400 font-bold">
                        {course.year}
                      </p>
                      <h4 className="mt-1 font-bold text-lg text-neutral-900 dark:text-white">
                        {course.course}
                      </h4>
                      <p className="text-sm text-neutral-500 dark:text-neutral-400 mt-1">
                        {course.company}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {courses.length > 0 && (
              <div>
                <div className="flex items-center gap-3 mb-8">
                  <span className="text-xs font-semibold uppercase tracking-widest text-neutral-400 dark:text-neutral-500">
                    {t.projects?.more || "Mais cursos"}
                  </span>
                  <div className="flex-1 h-px bg-neutral-200 dark:bg-white/10" />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                  {courses.map((course, i) => (
                    <motion.div
                      key={`course-${i}`}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: i * 0.04 }}
                      viewport={{ once: true }}
                      className="group rounded-3xl border-2 border-white/60 dark:border-white/10 bg-white/90 dark:bg-white/5 backdrop-blur-xl p-4 shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 h-full flex flex-col"
                    >
                      <div className="flex items-start gap-3 mb-4">
                        <FiBookOpen className="text-xl text-blue-500 mt-1" />
                        <div>
                          <p className="text-sm text-blue-600 dark:text-blue-400 font-bold">
                            {course.year}
                          </p>
                          <h4 className="mt-1 font-bold text-lg text-neutral-900 dark:text-white">
                            {course.course}
                          </h4>
                          <p className="text-sm text-neutral-500 dark:text-neutral-400 mt-1">
                            {course.company}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default Formation;
