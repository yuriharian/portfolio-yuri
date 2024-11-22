import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaPython,
  FaGitAlt,
  FaNodeJs,
} from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import {
  SiCsharp,
  SiExpress,
  SiMongodb,
  SiNextdotjs,
  SiTypescript,
} from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";
import { motion } from "framer-motion";
import { TECHS } from "../constants";

const Technologies = () => {
  return (
    <div className="mb-8 border-b border-neutral-950 pb-24">
      <motion.h1
        whileInView={{ y: 0, opacity: 1 }}
        initial={{ y: -30, opacity: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="mb-6 lg:mb-8 text-center text-4xl"
      >
        Tecnologias
      </motion.h1>
      <motion.p
        whileInView={{ y: 0, opacity: 1 }}
        initial={{ y: -60, opacity: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="mb-8 text-center"
      >
        {TECHS}
      </motion.p>
      <div className="flex flex-wrap items-center justify-center gap-8">
        {/* MongoDB */}
        <motion.div
          whileInView={{ y: 0, opacity: 1 }}
          initial={{ y: 100, opacity: 0 }}
          transition={{ duration: 1, delay: 1.1 }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center w-32 h-32 rounded-2xl border-2 border-green-600 p-2 text-green-600 hover:bg-green-600 hover:text-neutral-100"
        >
          <SiMongodb className="text-6xl" />
          <p className="mt-2 text-center">MongoDB</p>
        </motion.div>

        {/* Express */}
        <motion.div
          whileInView={{ y: 0, opacity: 1 }}
          initial={{ y: 100, opacity: 0 }}
          transition={{ duration: 1, delay: 1.2 }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center w-32 h-32 rounded-2xl border-2 border-gray-600 p-2 text-gray-600 hover:bg-gray-600 hover:text-neutral-100"
        >
          <SiExpress className="text-6xl" />
          <p className="mt-2 text-center">Express</p>
        </motion.div>

        {/* React.js */}
        <motion.div
          whileInView={{ y: 0, opacity: 1 }}
          initial={{ y: 100, opacity: 0 }}
          transition={{ duration: 1, delay: 1.3 }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center w-32 h-32 rounded-2xl border-2 border-cyan-500 p-2 text-cyan-500 hover:bg-cyan-500 hover:text-neutral-100"
        >
          <FaReact className="text-6xl" />
          <p className="mt-2 text-center">React.js</p>
        </motion.div>

        {/* Node.js */}
        <motion.div
          whileInView={{ y: 0, opacity: 1 }}
          initial={{ y: 100, opacity: 0 }}
          transition={{ duration: 1, delay: 1.4 }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center w-32 h-32 rounded-2xl border-2 border-green-500 p-2 text-green-500 hover:bg-green-500 hover:text-neutral-100"
        >
          <FaNodeJs className="text-6xl" />
          <p className="mt-2 text-center">Node.js</p>
        </motion.div>

        {/* HTML */}
        <motion.div
          whileInView={{ y: 0, opacity: 1 }}
          initial={{ y: 100, opacity: 0 }}
          transition={{ duration: 1, delay: 1.5 }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center w-32 h-32 rounded-2xl border-2 border-orange-600 p-2 text-orange-600 hover:bg-orange-600 hover:text-neutral-100"
        >
          <FaHtml5 className="text-6xl" />
          <p className="mt-2 text-center">HTML</p>
        </motion.div>

        {/* CSS */}
        <motion.div
          whileInView={{ y: 0, opacity: 1 }}
          initial={{ y: 100, opacity: 0 }}
          transition={{ duration: 1, delay: 1.6 }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center w-32 h-32 rounded-2xl border-2 border-blue-500 p-2 text-blue-500 hover:bg-blue-500 hover:text-neutral-100"
        >
          <FaCss3Alt className="text-6xl" />
          <p className="mt-2 text-center">CSS</p>
        </motion.div>

        {/* JavaScript */}
        <motion.div
          whileInView={{ y: 0, opacity: 1 }}
          initial={{ y: 100, opacity: 0 }}
          transition={{ duration: 1, delay: 1.7 }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center w-32 h-32 rounded-2xl border-2 border-yellow-500 p-2 text-yellow-500 hover:bg-yellow-500 hover:text-neutral-100"
        >
          <FaJsSquare className="text-6xl" />
          <p className="mt-2 text-center">JavaScript</p>
        </motion.div>

        {/* TypeScript */}
        <motion.div
          whileInView={{ y: 0, opacity: 1 }}
          initial={{ y: 100, opacity: 0 }}
          transition={{ duration: 1, delay: 1.8 }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center w-32 h-32 rounded-2xl border-2 border-blue-600 p-2 text-blue-600 hover:bg-blue-600 hover:text-neutral-100"
        >
          <SiTypescript className="text-6xl" />
          <p className="mt-2 text-center">TypeScript</p>
        </motion.div>

        {/* Next.js */}
        <motion.div
          whileInView={{ y: 0, opacity: 1 }}
          initial={{ y: 100, opacity: 0 }}
          transition={{ duration: 1, delay: 1.9 }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center w-32 h-32 rounded-2xl border-2 border-neutral-800 p-2 text-neutral-800 hover:bg-neutral-800 hover:text-neutral-100"
        >
          <SiNextdotjs className="text-6xl" />
          <p className="mt-2 text-center">Next.js</p>
        </motion.div>

        {/* Tailwind */}
        <motion.div
          whileInView={{ y: 0, opacity: 1 }}
          initial={{ y: 100, opacity: 0 }}
          transition={{ duration: 1, delay: 2.0 }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center w-32 h-32 rounded-2xl border-2 border-cyan-600 p-2 text-cyan-600 hover:bg-cyan-600 hover:text-neutral-100"
        >
          <RiTailwindCssFill className="text-6xl" />
          <p className="mt-2 text-center">Tailwind</p>
        </motion.div>

        {/* Framer Motion */}
        <motion.div
          whileInView={{ y: 0, opacity: 1 }}
          initial={{ y: 100, opacity: 0 }}
          transition={{ duration: 1, delay: 2.1 }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center w-32 h-32 rounded-2xl border-2 border-purple-700 p-2 text-purple-700 hover:bg-purple-700 hover:text-neutral-100"
        >
          <TbBrandFramerMotion className="text-6xl" />
          <p className="mt-2 text-center">Motion</p>
        </motion.div>

        {/* Python */}
        <motion.div
          whileInView={{ y: 0, opacity: 1 }}
          initial={{ y: 100, opacity: 0 }}
          transition={{ duration: 1, delay: 2.2 }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center w-32 h-32 rounded-2xl border-2 border-blue-700 p-2 text-blue-700 hover:bg-blue-700 hover:text-yellow-300"
        >
          <FaPython className="text-6xl" />
          <p className="mt-2 text-center">Python</p>
        </motion.div>

        {/* C# */}
        <motion.div
          whileInView={{ y: 0, opacity: 1 }}
          initial={{ y: 100, opacity: 0 }}
          transition={{ duration: 1, delay: 2.3 }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center w-32 h-32 rounded-2xl border-2 border-purple-600 p-2 text-purple-600 hover:bg-purple-600 hover:text-neutral-100"
        >
          <SiCsharp className="text-6xl" />
          <p className="mt-2 text-center">C#</p>
        </motion.div>

        {/* Git */}
        <motion.div
          whileInView={{ y: 0, opacity: 1 }}
          initial={{ y: 100, opacity: 0 }}
          transition={{ duration: 1, delay: 2.4 }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center w-32 h-32 rounded-2xl border-2 border-red-600 p-2 text-red-600 hover:bg-red-600 hover:text-neutral-100"
        >
          <FaGitAlt className="text-6xl" />
          <p className="mt-2 text-center">Git</p>
        </motion.div>
      </div>
    </div>
  );
};

export default Technologies;
