import { PROJECTS } from "../constants";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const Projects = () => {
  return (
    <div className="mb-8 border-b border-neutral-900 pb-4">
      <h1 className="mb-8 text-center text-4xl">Projetos</h1>
      <div>
        {PROJECTS.map((project, index) => (
          <div
            key={index}
            className="mb-16 lg:mb-12 flex flex-wrap lg:justify-center"
          >
            <motion.div
              whileInView={{ x: 0, opacity: 1 }}
              initial={{ x: -100, opacity: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="w-full lg:w-1/3 xl:w-1/4 flex justify-center lg:justify-start"
            >
              <img
                src={project.image}
                width={240}
                height={240}
                alt={project.title}
                className="mb-6 rounded"
              />
            </motion.div>
            <motion.div
              whileInView={{ x: 0, opacity: 1 }}
              initial={{ x: 100, opacity: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="w-full max-w-l lg:w-3/4"
            >
              <h6 className="mb-2 font-semibold">{project.title}</h6>
              <p className="mb-4 text-neutral-700">{project.description}</p>
              {project.technologies.map((technology, index) => (
                <span
                  key={index}
                  className="mr-2 mb-2 inline-block rounded bg-sky-200 px-3 py-1 text-sm font-medium text-neutral-800"
                >
                  {technology}
                </span>
              ))}
              <div className="flex items-center mt-4 justify-center lg:justify-start">
                {project.source && (
                  <a
                    href={project.source}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mr-4 flex items-center text-white bg-neutral-600 hover:bg-neutral-950 px-4 py-2 rounded"
                  >
                    <FaGithub className="mr-2" />
                    Source
                  </a>
                )}
                {project.deploy && (
                  <a
                    href={project.deploy}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-white bg-gradient-to-r from-cyan-600 to-purple-700 hover:from-cyan-700 hover:to-purple-800 px-4 py-2 rounded"
                  >
                    <FaExternalLinkAlt className="mr-2" />
                    Deploy
                  </a>
                )}
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
