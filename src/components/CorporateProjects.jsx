import { CONTENT } from "../constants";
import { motion } from "framer-motion";
import { FiLock } from "react-icons/fi";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../i18n/translations";
import Badge from "./ui/badge";

const containerVariants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const CorporateProjectCard = ({ project, confidentialLabel, statusLabel }) => {
  return (
    <motion.div
      variants={cardVariants}
      whileHover={{ y: -6, transition: { type: "spring", stiffness: 300, damping: 20 } }}
      className="group flex flex-col rounded-3xl border-2 border-white/60 dark:border-white/10 bg-white/90 dark:bg-white/5 backdrop-blur-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 p-6 h-full"
    >
      <div className="flex items-start justify-between gap-3 mb-3">
        <h3 className="font-bold text-lg text-neutral-900 dark:text-white leading-snug">
          {project.title}
        </h3>
        <Badge variant="confidential" className="shrink-0">
          <FiLock size={11} />
          {confidentialLabel}
        </Badge>
      </div>

      <p className="text-sm leading-6 text-neutral-600 dark:text-neutral-300 flex-grow">
        {project.description}
      </p>

      {project.status && (
        <p className="mt-4 text-xs font-semibold uppercase tracking-wide text-blue-600 dark:text-blue-400">
          {statusLabel}: {project.status}
        </p>
      )}

      {project.tags?.length > 0 && (
        <div className="flex flex-wrap gap-1.5 mt-3">
          {project.tags.map((tag, idx) => (
            <Badge key={idx}>{tag}</Badge>
          ))}
        </div>
      )}
    </motion.div>
  );
};

const CorporateProjects = () => {
  const { language } = useLanguage();
  const t = translations[language] || translations.pt;
  const projects =
    CONTENT[language]?.internalProjects || CONTENT.pt.internalProjects;

  if (!projects?.length) return null;

  return (
    <section
      id="corporate-projects"
      className="relative py-12 md:py-20 border-b border-neutral-200 dark:border-white/10"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mb-6"
      >
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 text-neutral-900 dark:text-white">
          {t.corporateProjects.title}
        </h2>
        <p className="text-neutral-600 dark:text-neutral-300 max-w-3xl mx-auto leading-8">
          {t.corporateProjects.description}
        </p>
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
        className="flex items-center justify-center gap-2 text-center text-xs md:text-sm text-neutral-400 dark:text-neutral-500 max-w-2xl mx-auto mb-12 italic"
      >
        <FiLock className="shrink-0" />
        {t.corporateProjects.confidentialNotice}
      </motion.p>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {projects.map((project, i) => (
          <CorporateProjectCard
            key={i}
            project={project}
            confidentialLabel={t.corporateProjects.confidentialBadge}
            statusLabel={t.corporateProjects.statusLabel}
          />
        ))}
      </motion.div>
    </section>
  );
};

export default CorporateProjects;
