import React from "react";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const PredictiveAnalysisHero = () => {
  return (
    <div className="bg-gradient-to-br from-[#010C09] via-[#010C09] to-black py-16 md:py-24 px-4 sm:px-8 text-white">
      <div className="max-w-7xl mx-auto text-center">
        {/* Main heading */}
        <motion.h1
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6"
        >
          Predictive Analytics
        </motion.h1>

        {/* Tagline */}
        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="text-xl md:text-xl text-gray-300 max-w-3xl mx-auto mb-10"
        >
          From scalability and flexibility to automation, our SaaS predictive
          analytics solutions are revolutionizing business intelligence
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="flex flex-col sm:flex-row justify-center gap-4"
        >
          <button className="bg-[#18CB96] hover:bg-green-400 text-black font-semibold py-3 px-8 rounded-lg transition-all flex items-center justify-center gap-2">
            Schedule Demo <FaArrowRight />
          </button>
          <button className="bg-transparent hover:bg-gray-800/50 text-white font-semibold py-3 px-8 rounded-lg border border-gray-600 transition-all">
            Learn More
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default PredictiveAnalysisHero;
