import { FORMARTION } from "../constants";
import { motion } from "framer-motion";
import { FiBookOpen, FiAward } from "react-icons/fi";

const Formation = () => {
  const higher = FORMARTION.filter((f) => f.tier === "Superior");
  const courses = FORMARTION.filter((f) => f.tier === "Curso");

  return (
    <section className="relative py-12 md:py-20 border-b border-neutral-200">
      <motion.h1
        initial={{ y: -30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="mb-4 text-center text-3xl md:text-5xl font-bold tracking-tight text-neutral-900"
      >
        Formação
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
        viewport={{ once: true }}
        className="max-w-3xl mx-auto text-center text-neutral-600 mb-14 leading-8"
      >
        Minha base acadêmica em desenvolvimento de sistemas se conecta a uma
        jornada contínua de especialização em engenharia de software, automação,
        DevOps e Inteligência Artificial aplicada.
      </motion.p>

      <div className="flex flex-col gap-10">
        {higher.map((formation, index) => (
          <motion.div
            key={`higher-${index}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="rounded-3xl border border-white/60 bg-white/90 backdrop-blur-sm shadow-xl p-8"
          >
            <div className="flex items-center gap-3 mb-4">
              <FiAward className="text-2xl text-blue-500" />
              <p className="font-bold text-blue-500">{formation.year}</p>
            </div>

            <h3 className="font-bold text-2xl text-neutral-900 mb-2">
              {formation.course}
            </h3>

            <p className="text-neutral-600 font-medium">{formation.company}</p>

            <p className="mt-4 text-neutral-700 leading-7">
              Formação superior que consolida minha base em arquitetura de
              software, lógica, estruturas de dados, banco de dados e
              desenvolvimento full-stack.
            </p>
          </motion.div>
        ))}

        {courses.length > 0 && (
          <div>
            <h3 className="text-2xl md:text-3xl font-bold mb-8 text-neutral-900 text-center">
              Especialização
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {courses.map((c, i) => (
                <motion.div
                  key={`course-${i}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  viewport={{ once: true }}
                  className="group rounded-3xl border border-white/60 bg-white/90 backdrop-blur-sm p-6 shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="flex items-start gap-3 mb-4">
                    <FiBookOpen className="text-xl text-blue-500 mt-1" />
                    <div>
                      <p className="text-sm text-blue-500 font-bold">
                        {c.year}
                      </p>
                      <h4 className="mt-1 font-bold text-lg text-neutral-900">
                        {c.course}
                      </h4>
                      <p className="text-sm text-neutral-500 mt-1">
                        {c.company}
                      </p>
                    </div>
                  </div>

                  {c.description && (
                    <p className="text-sm text-neutral-700 leading-7">
                      {c.description}
                    </p>
                  )}

                  {c.tags && c.tags.length > 0 && (
                    <div className="mt-4 flex flex-wrap gap-2">
                      {c.tags.map((tag, idx) => (
                        <span
                          key={idx}
                          className="text-xs bg-neutral-100 text-neutral-700 px-3 py-1 rounded-full font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}

                  {c.link && c.link.length > 0 && (
                    <div className="mt-5">
                      <a
                        href={c.link}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-block text-sm px-4 py-2 rounded-xl rainbow-btn-deploy text-white font-semibold shadow-md hover:scale-105 transition"
                      >
                        Ver certificado
                      </a>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Formation;
