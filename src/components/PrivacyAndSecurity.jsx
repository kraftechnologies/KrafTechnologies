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
    icon: <FaShield className="h-8 w-8 md:h-12 md:w-12 text-white" size={16} />,
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
    <section className="bg-gradient-to-br from-[#010C09] via-[#010C09] to-black text-white py-12 px-6 md:px-16 mb-12">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className=" p-8 max-w-7xl mx-auto shadow-3xl"
      >
        <motion.h2
          variants={fadeUp}
          custom={0}
          className="text-3xl md:text-4xl font-bold mb-6 py-6 md:py-10 pl-3"
        >
          Compliance, Privacy, Security
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6 md:mt-8">
          {points.map((point, index) => (
            <motion.div
              key={index}
              variants={fadeUp}
              custom={index + 1}
              className="flex-col items-start backdrop-blur-md bg-gray-900/80 border border-gray-800 rounded-xl p-8   rounded-xl border border-gray-800 hover:border-[#18CB96]/50 transition-all p-8"
            >
              <div className="mt-1  text-xs">{point.icon}</div>
              <p className="text-xl md:text-xl mt-4 md:mt-6 font-normal">
                {point.text}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default PrivacyAndSecurity;
