import React from "react";
import { FileText, BookMarked } from "lucide-react";
import { FaShield } from "react-icons/fa6";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const points = [
  {
    icon: <FaShield className="h-8 w-8 md:h-12 md:w-12 text-white" />,
    text: "Experts in regulatory compliance for financial services, insurance, and benefits",
  },
  {
    icon: <BookMarked className="h-8 w-8 md:h-12 md:w-12 text-white" />,
    text: "Licensed insurance agency for multiple lines",
  },
  {
    icon: <FileText className="h-8 w-8 md:h-12 md:w-12 text-white" />,
    text: "Audited annually for 400+ privacy and security controls",
  },
];

const PrivacyAndSecurity = () => {
  return (
    <section className="bg-gradient-to-b from-black to-[#18cb96]/10 text-white py-12 px-6 md:px-16 mb-12">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="bg-[#1b1b1b] rounded-xl p-8 max-w-7xl mx-auto shadow-3xl"
      >
        <motion.h2
          variants={fadeUp}
          custom={0}
          className="text-3xl md:text-5xl font-bold mb-6 py-6 md:py-10 pl-3"
        >
          Compliance, Privacy, Security
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6 md:mt-12">
          {points.map((point, index) => (
            <motion.div
              key={index}
              variants={fadeUp}
              custom={index + 1}
              className="flex-col items-start gap-4 px-3 md:px-6 hover:text-[#18cb96]"
            >
              <div className="mt-1">{point.icon}</div>
              <p className="text-xl md:text-2xl mt-4 md:mt-6">{point.text}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default PrivacyAndSecurity;
