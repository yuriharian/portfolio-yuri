import ProfileAvatar3 from "../assets/Profile_Avatar3.png";
import ProfileAvatar2 from "../assets/Profile_Avatar2.png";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { TfiDownload } from "react-icons/tfi";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../i18n/translations";
import { CONTENT } from "../constants";

const Hero = () => {
  const { language } = useLanguage();
  const [flipped, setFlipped] = useState(false);
  const intervalRef = useRef(null);

  const t = translations[language] || translations.pt;
  const data = CONTENT[language] || CONTENT.pt;

  const startAutoFlip = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setFlipped((s) => !s);
    }, 5000);
  };

  useEffect(() => {
    startAutoFlip();
    return () => clearInterval(intervalRef.current);
  }, []);

  const handleAvatarClick = () => {
    setFlipped((s) => !s);
    startAutoFlip();
  };

  const handleDownload = () => {
    const pdfPath =
      "https://drive.google.com/file/d/1nyWz7pSGgtTu8kz1Md_QmDZMc_JVjnmz/view?usp=drivesdk";
    window.open(pdfPath, "_blank");
  };

  return (
    <section className="relative pt-10 pb-8 md:py-20 transition-colors duration-500">
      <div className="container mx-auto flex flex-col-reverse md:flex-row items-center gap-14 px-2 md:px-8">
        {/* TEXT */}
        <div className="flex-1 flex flex-col items-center md:items-start">
          <motion.h1
            initial={{ x: -60, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.7 }}
            className="text-4xl md:text-6xl font-bold mb-4 tracking-tight text-neutral-950 dark:text-zinc-100 leading-tight transition-colors duration-500"
          >
            {t.hero.greeting} 👋
            <br />
            {t.hero.intro}{" "}
            <span className="relative inline-block">
              Yuri Harian
              <span className="absolute left-0 -bottom-1 h-[4px] w-full rounded-full rainbow-underline opacity-90" />
            </span>
          </motion.h1>

          <motion.span
            initial={{ x: -60, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.9 }}
            className="rainbow-text text-xl md:text-3xl font-bold mb-4"
          >
            {t.hero.title}
          </motion.span>

          <motion.p
            initial={{ x: -60, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1.1 }}
            className="max-w-2xl mt-2 mb-8 text-base lg:text-lg leading-8 text-neutral-700 dark:text-zinc-400 transition-colors duration-500"
          >
            {data.hero}
          </motion.p>

          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2 }}
            onClick={handleDownload}
            className="group flex items-center gap-2 px-7 py-3 rounded-2xl font-semibold text-lg shadow-xl hover:scale-105 hover:shadow-2xl transition-all duration-300 rainbow-btn-deploy"
          >
            {t.hero.downloadCv}
            <TfiDownload className="ml-1 transition-transform group-hover:translate-y-0.5" />
          </motion.button>
        </div>

        {/* IMAGE */}
        <div className="flex-1 flex justify-center md:justify-end">
          <motion.div
            initial={{ x: 60, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1.2 }}
            className="relative float"
          >
            <div className="absolute inset-0 rounded-full blur-3xl bg-cyan-400/20 dark:bg-cyan-400/10 scale-110 transition-colors duration-500" />

            {/* 3D flip avatar */}
            <div
              className="avatar-3d relative w-64 h-64 md:w-96 md:h-96"
              onClick={handleAvatarClick}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === "Enter" && handleAvatarClick()}
            >
              <div className={`avatar-3d-inner ${flipped ? "flipped" : ""}`}>
                <img
                  src={ProfileAvatar3}
                  alt="Yuri Harian"
                  className="avatar-face front w-full h-full rounded-full shadow-2xl object-cover"
                  draggable={false}
                />

                <img
                  src={ProfileAvatar2}
                  alt="Yuri Harian alternate"
                  className="avatar-face back w-full h-full rounded-full shadow-2xl object-cover absolute inset-0"
                  draggable={false}
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
