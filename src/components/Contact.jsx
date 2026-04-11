import { CONTENT } from "../constants";
import { motion } from "framer-motion";
import { FiLinkedin, FiMail, FiMapPin, FiMessageCircle } from "react-icons/fi";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../i18n/translations";

const Contact = () => {
  const { language } = useLanguage();
  const t = translations[language] || translations.pt;
  const content = CONTENT[language] || CONTENT.pt;

  return (
    <section
      id="contact"
      className="relative py-12 md:py-20 border-b border-neutral-200 dark:border-white/10"
    >
      <motion.h1
        initial={{ y: -30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="mb-4 text-center text-3xl md:text-5xl font-bold tracking-tight text-neutral-900 dark:text-white"
      >
        {t.contact.title}
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
        viewport={{ once: true }}
        className="max-w-3xl mx-auto text-center text-neutral-600 dark:text-neutral-300 mb-14 leading-8"
      >
        {t.contact.description}
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="flex flex-col gap-4 rounded-3xl border-2 border-neutral-200 dark:border-white/10 bg-white/80 dark:bg-white/5 backdrop-blur-xl shadow-xl p-8 mx-auto max-w-2xl"
      >
        {/* LinkedIn */}
        <a
          href="https://linkedin.com/in/yuri-harian"
          target="_blank"
          rel="noreferrer"
          className="group flex items-center gap-4 rounded-2xl border-2 border-neutral-200 dark:border-white/10 px-5 py-4 bg-white/70 dark:bg-white/5 hover:shadow-lg hover:-translate-y-0.5 transition-all"
        >
          <FiLinkedin className="text-2xl text-cyan-500" />
          <span className="font-semibold text-neutral-800 dark:text-neutral-200">
            {content.contact.linkedIn}
          </span>
        </a>

        {/* WhatsApp */}
        <a
          href="http://wa.me/5561982222582"
          target="_blank"
          rel="noreferrer"
          className="group flex items-center gap-4 rounded-2xl border-2 border-neutral-200 dark:border-white/10 px-5 py-4 bg-white/70 dark:bg-white/5 hover:shadow-lg hover:-translate-y-0.5 transition-all"
        >
          <FiMessageCircle className="text-2xl text-emerald-500" />
          <span className="font-semibold text-neutral-800 dark:text-neutral-200">
            {content.contact.phoneNo}
          </span>
        </a>

        {/* Email */}
        <a
          href="mailto:yuri_harian@outlook.com"
          className="group flex items-center gap-4 rounded-2xl border-2 border-neutral-200 dark:border-white/10 px-5 py-4 bg-white/70 dark:bg-white/5 hover:shadow-lg hover:-translate-y-0.5 transition-all"
        >
          <FiMail className="text-2xl text-violet-500" />
          <span className="font-semibold text-neutral-800 dark:text-neutral-200">
            {content.contact.email}
          </span>
        </a>

        {/* Location */}
        <div className="flex items-center gap-4 rounded-2xl border-2 border-neutral-200 dark:border-white/10 px-5 py-4 bg-neutral-50 dark:bg-white/5">
          <FiMapPin className="text-2xl text-rose-500" />
          <span className="font-medium text-neutral-700 dark:text-neutral-300">
            {content.contact.address}
          </span>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
