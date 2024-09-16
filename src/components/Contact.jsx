import { CONTACT } from "../constants";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div className="pb-12">
      <motion.h1
        whileInView={{ y: 0, opacity: 1 }}
        initial={{ y: -30, opacity: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="mb-8 text-center text-4xl"
      >
        Contato
      </motion.h1>
      <motion.div
        whileInView={{ y: 0, opacity: 1 }}
        initial={{ y: 30, opacity: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="text-center tracking-tighter"
      >
        <div className="flex flex-col items-center space-y-4">
          <a
            href="https://linkedin.com/in/yuri-harian"
            target="_blank"
            className="underline underline-offset-4"
          >
            {CONTACT.linkedIn}
          </a>
          <a
            href="http://wa.me/5561982222582"
            target="_blank"
            className="underline underline-offset-4"
          >
            {CONTACT.phoneNo}
          </a>
          <a
            href="mailto:yuri_harian@outlook.com"
            target="_blank"
            className="underline underline-offset-4"
          >
            {CONTACT.email}
          </a>
          <p>{CONTACT.address}</p>
        </div>
      </motion.div>
    </div>
  );
};

export default Contact;
