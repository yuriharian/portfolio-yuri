import { CONTACT } from "../constants";
import { motion } from "framer-motion";
import { FiLinkedin, FiMail, FiMapPin, FiMessageCircle } from "react-icons/fi";

const Contact = () => {
  return (
    <section className="relative py-12 md:py-20">
      <motion.h1
        initial={{ y: -30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="mb-4 text-center text-3xl md:text-5xl font-bold tracking-tight text-neutral-900"
      >
        Contato
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
        viewport={{ once: true }}
        className="max-w-3xl mx-auto text-center text-neutral-600 mb-14 leading-8"
      >
        Estou aberto a oportunidades em desenvolvimento full-stack, automação
        inteligente, produtos com LLMs e soluções com IA aplicada. Se você
        procura alguém com visão de produto, engenharia e evolução constante,
        vamos conversar.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="flex flex-col gap-4 bg-white/90 backdrop-blur-sm rounded-3xl shadow-xl border border-white/60 p-8 mx-auto max-w-2xl"
      >
        <a
          href="https://linkedin.com/in/yuri-harian"
          target="_blank"
          rel="noreferrer"
          className="group flex items-center gap-4 rounded-2xl border border-neutral-200 px-5 py-4 hover:shadow-md hover:-translate-y-0.5 transition-all"
        >
          <FiLinkedin className="text-2xl text-cyan-600" />
          <span className="font-semibold text-neutral-800 group-hover:text-cyan-700">
            {CONTACT.linkedIn}
          </span>
        </a>

        <a
          href="http://wa.me/5561982222582"
          target="_blank"
          rel="noreferrer"
          className="group flex items-center gap-4 rounded-2xl border border-neutral-200 px-5 py-4 hover:shadow-md hover:-translate-y-0.5 transition-all"
        >
          <FiMessageCircle className="text-2xl text-green-600" />
          <span className="font-semibold text-neutral-800 group-hover:text-green-700">
            {CONTACT.phoneNo}
          </span>
        </a>

        <a
          href="mailto:yuri_harian@outlook.com"
          className="group flex items-center gap-4 rounded-2xl border border-neutral-200 px-5 py-4 hover:shadow-md hover:-translate-y-0.5 transition-all"
        >
          <FiMail className="text-2xl text-purple-600" />
          <span className="font-semibold text-neutral-800 group-hover:text-purple-700">
            {CONTACT.email}
          </span>
        </a>

        <div className="flex items-center gap-4 rounded-2xl border border-neutral-200 px-5 py-4 bg-neutral-50">
          <FiMapPin className="text-2xl text-red-500" />
          <span className="font-medium text-neutral-700">
            {CONTACT.address}
          </span>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
