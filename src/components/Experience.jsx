import { EXPERIENCES } from "../constants";
import { motion } from "framer-motion";
import { FiBriefcase, FiTrendingUp } from "react-icons/fi";

const Experience = () => {
  return (
    <section className="relative py-10 md:py-20 border-b border-neutral-200">
      <motion.h1
        initial={{ y: -30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="mb-4 text-center text-3xl md:text-5xl font-bold tracking-tight text-neutral-900"
      >
        Experiência Profissional
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
        viewport={{ once: true }}
        className="max-w-3xl mx-auto text-center text-neutral-600 mb-14 leading-8"
      >
        Minha trajetória combina operação, liderança de processos, automação e
        visão analítica — uma base sólida que fortalece minha evolução para
        engenharia de software, IA aplicada e construção de produtos.
      </motion.p>

      <div className="relative flex flex-col gap-10">
        <div className="absolute left-5 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-cyan-400 via-purple-500 to-neutral-300 rounded-full opacity-30" />

        {EXPERIENCES.map((experience, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: index * 0.15 }}
            viewport={{ once: true }}
            className="relative flex flex-col md:flex-row items-start gap-6 md:gap-10"
          >
            <div className="absolute left-3 md:left-1/2 md:-translate-x-1/2 top-6 w-5 h-5 rounded-full rainbow-btn-deploy border-4 border-white shadow-lg" />

            <div className="ml-12 md:ml-0 md:w-[42%] rounded-3xl border border-white/60 bg-white/90 backdrop-blur-sm shadow-xl p-6 hover:shadow-2xl transition-all duration-300">
              <div className="flex items-center gap-3 mb-3">
                {index === 0 ? (
                  <FiTrendingUp className="text-xl text-blue-500" />
                ) : (
                  <FiBriefcase className="text-xl text-blue-500" />
                )}

                <p className="font-bold text-sm md:text-base text-blue-500">
                  {experience.year}
                </p>
              </div>

              <h3 className="font-bold text-xl md:text-2xl text-neutral-900 mb-2">
                {experience.role}
              </h3>

              <p className="text-sm text-neutral-500 mb-4 font-medium">
                {experience.company}
              </p>

              <p className="mb-4 text-neutral-700 leading-7">
                {experience.description}
              </p>

              {experience.technologies?.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {experience.technologies.map((technology, idx) => (
                    <span
                      key={idx}
                      className="text-xs px-3 py-1 rounded-full bg-neutral-100 text-neutral-700 font-medium"
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
    </section>
  );
};

export default Experience;
