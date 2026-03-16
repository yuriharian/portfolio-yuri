import { PROJECTS } from "../constants";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const Projects = () => {
  return (
    <section className="relative py-12 md:py-20 border-b border-neutral-200">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 text-neutral-900">
          Projetos em Destaque
        </h2>

        <p className="text-neutral-600 max-w-3xl mx-auto leading-8">
          Cada projeto representa um passo da minha evolução como engenheiro: da
          construção de interfaces e APIs até automações, desktop apps,
          experiência de produto e soluções orientadas por IA.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
        {PROJECTS.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="group flex flex-col rounded-3xl border border-white/60 bg-white/90 backdrop-blur-sm shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 overflow-hidden"
          >
            <div className="p-4 border-b border-neutral-100 bg-gradient-to-br from-neutral-50 to-white">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-56 object-contain rounded-2xl group-hover:scale-[1.03] transition-transform duration-300"
                draggable={false}
              />
            </div>

            <div className="flex flex-col p-6 gap-4 h-full">
              <h3 className="text-2xl font-bold text-neutral-900">
                {project.title}
              </h3>

              <p className="text-neutral-600 leading-7 flex-grow">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.technologies.map((technology, idx) => (
                  <span
                    key={idx}
                    className="rounded-full border border-neutral-200 bg-neutral-100 px-3 py-1 text-sm font-medium text-neutral-700"
                  >
                    {technology}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap gap-3 pt-3 mt-auto">
                {project.source && (
                  <a
                    href={project.source}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-xl font-semibold bg-neutral-900 text-white hover:scale-105 transition-transform"
                  >
                    <FaGithub />
                    Código
                  </a>
                )}

                {project.deploy && (
                  <a
                    href={project.deploy}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-xl font-semibold rainbow-btn-deploy text-white shadow-md hover:scale-105 transition-transform"
                  >
                    <FaExternalLinkAlt />
                    Ver Projeto
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
