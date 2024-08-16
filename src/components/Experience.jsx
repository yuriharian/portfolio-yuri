import { EXPERIENCES } from "../constants";
import { motion } from "framer-motion";

const Experience = () => {
  return (
    <div className="mb-8 border-b border-neutral-950 pb-4">
      <motion.h1
        whileInView={{ y: 0, opacity: 1 }}
        initial={{ y: -30, opacity: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="mb-8 text-center text-4xl"
      >
        Experiência
      </motion.h1>
      <div>
        {EXPERIENCES.map((experience, index) => (
          <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
            <motion.div
              whileInView={{ x: 0, opacity: 1 }}
              initial={{ x: -100, opacity: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="w-full lg:w-1/4 "
            >
              <p className="mb-2 font-extrabold text-md text-neutral-700">
                {experience.year}
              </p>
            </motion.div>
            <motion.div
              whileInView={{ x: 0, opacity: 1 }}
              initial={{ x: 100, opacity: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="w-full max-w-l lg:w-3/4"
            >
              <h6 className="mb-2 font-semibold">
                {experience.role} -{" "}
                <span className="text-sm text-neutral-600">
                  {experience.company}
                </span>
              </h6>
              <p className="mb-4 text-neutral-700">{experience.description}</p>
              {experience.technologies.map((technology, index) => (
                <span
                  key={index}
                  className="mr-2 mb-2 inline-block rounded bg-sky-200 px-3 py-1 text-sm font-medium text-neutral-800"
                >
                  {technology}
                </span>
              ))}
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
