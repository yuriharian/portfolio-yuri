import { FORMARTION } from "../constants";
import { motion } from "framer-motion";

const Formation = () => {
  return (
    <div className="mb-8 border-b border-neutral-950 pb-4">
      <motion.h1
        whileInView={{ y: 0, opacity: 1 }}
        initial={{ y: -30, opacity: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="mb-8 text-center text-4xl"
      >
        Formação
      </motion.h1>
      <div>
        {FORMARTION.map((formation, index) => (
          <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
            <motion.div
              whileInView={{ x: 0, opacity: 1 }}
              initial={{ x: -100, opacity: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="w-full lg:w-1/4"
            >
              <p className="mb-2 font-extrabold text-md text-neutral-700">
                {formation.year}
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
                {formation.course} -{" "}
                <span className="text-sm text-neutral-600">
                  {formation.company}
                </span>
              </h6>
              <p className="mb-4 text-neutral-700">{formation.tier}</p>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Formation;
