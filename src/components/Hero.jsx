import { HERO_CONTENT } from "../constants";
import ProfileAvatar from "../assets/Profile_Avatar.jpg";
import { motion } from "framer-motion";
import { TfiDownload } from "react-icons/tfi";

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
});

const Hero = () => {
  const handleDownload = () => {
    const pdfPath =
      "https://drive.google.com/file/d/15sRvaC9vjMDZc1r9MBFV-Maam01YdjpG/view?usp=sharing";
    window.open(pdfPath, "_blank");
  };

  return (
    <div className="mb-8 border-b border-neutral-950 pb-8 lg:mb-35 pt-28">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1
              variants={container(0.5)}
              initial="hidden"
              animate="visible"
              className="text-4xl font-bold pb-4 lg:pb-10 tracking-tight lg:mt-16 lg:text-6xl"
            >
              Olá👋
              <br />
              Meu nome é Yuri Harian!
            </motion.h1>
            <motion.span
              variants={container(0.8)}
              initial="hidden"
              animate="visible"
              className="bg-gradient-to-r from-cyan-600 to-purple-700 text-transparent bg-clip-text text-2xl tracking-tight lg:text-4xl"
            >
              Dev Front-end
            </motion.span>
            <motion.p
              variants={container(1.1)}
              initial="hidden"
              animate="visible"
              className="mt-4 text-md lg:text-lg text-neutral-950"
            >
              {HERO_CONTENT}
            </motion.p>
            <motion.button
              whileInView={{ opacity: 1 }}
              initial={{ opacity: 0 }}
              transition={{ duration: 1 }}
              className="text-lg mt-8 border-2 border-transparent font-bold py-2 px-4 inline-flex items-center transition-all duration-300 bg-white rounded hover:bg-gradient-to-r from-cyan-600 to-purple-700 hover:text-white group"
              style={{
                borderImage: "linear-gradient(to right, #06b6d4, #8b5cf6) 1",
              }}
              onClick={handleDownload}
            >
              <span className="bg-gradient-to-r from-cyan-600 to-purple-700 bg-clip-text text-transparent transition-colors duration-300 group-hover:text-white">
                Baixar CV
              </span>
              <TfiDownload className="ml-2 group-hover:text-white" />
            </motion.button>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8 mt-4">
          <div className="flex justify-center mt-4">
            <motion.img
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1.4 }}
              className="mx-2 w-4/6 rounded-full animate-float lg:animate-floatB"
              src={ProfileAvatar}
              alt="Avatar"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
