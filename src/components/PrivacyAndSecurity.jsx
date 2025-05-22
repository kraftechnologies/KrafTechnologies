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

const itemHover = {
  y: -5,
  transition: {
    duration: 0.1,
    ease: "easeInOut",
  },
};

const PrivacyAndSecurity = () => {
  return (
    <section className="bg-gradient-to-br from-[#010C09] via-[#010C09] to-black text-white py-3 px-6 md:px-16 mb-12">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="p-8 max-w-7xl mx-auto shadow-3xl"
      >
        <motion.h2
          variants={fadeUp}
          custom={0}
          className="text-3xl md:text-4xl font-bold mb-6 py-3 pl-3"
        >
          Compliance, Privacy, Security
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6 md:mt-8">
          {/* Point 1 */}
          <motion.div
            variants={fadeUp}
            custom={1}
            whileHover={itemHover}
            className="flex-col items-start backdrop-blur-md bg-gradient-to-b from-blue-950/80 to-blue-900/30 border border-gray-800 rounded-xl p-8 hover:border-[#18CB96]/50 transition-all"
          >
            <div className="mt-1 text-xs">
              <FaShield
                className="h-8 w-8 md:h-8 md:w-8 text-white"
                size={16}
              />
            </div>
            <p className="text-xl md:text-xl mt-4 md:mt-6 font-normal">
              Experts in regulatory compliance for financial services,
              insurance, and benefits
            </p>
          </motion.div>

          {/* Point 2 */}
          <motion.div
            variants={fadeUp}
            custom={2}
            whileHover={itemHover}
            className="flex-col items-start backdrop-blur-md bg-gradient-to-b from-purple-950/80 to-purple-900/30 border border-gray-800 rounded-xl p-8 hover:border-[#18CB96]/50 transition-all"
          >
            <div className="mt-1 text-xs">
              <BookMarked className="h-8 w-8 md:h-8 md:w-8 text-white" />
            </div>
            <p className="text-xl md:text-xl mt-4 md:mt-6 font-normal">
              Licensed insurance agency for multiple lines
            </p>
          </motion.div>

          {/* Point 3 */}
          <motion.div
            variants={fadeUp}
            custom={3}
            whileHover={itemHover}
            className="flex-col items-start backdrop-blur-md bg-gradient-to-b from-orange-950/80 to-orange-900/30 border border-gray-800 rounded-xl p-8 hover:border-[#18CB96]/50 transition-all"
          >
            <div className="mt-1 text-xs">
              <FileText className="h-8 w-8 md:h-8 md:w-8 text-white" />
            </div>
            <p className="text-xl md:text-xl mt-4 md:mt-6 font-normal">
              Audited annually for 400+ privacy and security controls
            </p>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default PrivacyAndSecurity;
