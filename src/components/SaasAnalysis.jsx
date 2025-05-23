import React from "react";
import { motion } from "framer-motion";
import { FaChartLine, FaRobot, FaShieldAlt, FaLightbulb } from "react-icons/fa";
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
  transition: { type: "spring", stiffness: 300, damping: 10 },
};
const PredictiveAnalysis = () => {
  return (
    <div className="bg-gradient-to-br from-[#010C09] via-[#010C09] to-black p-8 pt-1">
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="text-white py-12 px-2 md:px-6 rounded-2xl md:max-w-7xl mx-auto m-8 shadow-3xl"
      >
        <motion.h2
          variants={fadeUp}
          custom={0}
          className="text-3xl md:text-4xl font-semibold mb-8 pl-3 md:pl-10"
        >
          SaaS Predictive Analytics Analysis
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-3 md:px-12">
          {/* Strengths Card */}
          <motion.div
            variants={fadeUp}
            custom={1}
            whileHover={itemHover}
            className="flex-col items-start backdrop-blur-md bg-gradient-to-b from-emerald-950/80 to-emerald-900/30 border border-gray-800 rounded-xl p-8 hover:border-[#18cb96]/50 transition-all"
          >
            <div className="p-2 rounded-sm text-emerald-400">
              <FaChartLine className="h-8 w-8 md:h-8 md:w-8" />
            </div>
            <h3 className="font-bold text-xl md:text-2xl mb-4">Strengths</h3>
            <ul className="list-disc pl-5 space-y-2 text-gray-300">
              <li>Clear, actionable use cases for SaaS</li>
              <li>Strong low-code differentiation</li>
              <li>Effective SEO optimization</li>
              <li>Clean, scannable layout</li>
            </ul>
          </motion.div>

          {/* Weaknesses Card */}
          <motion.div
            variants={fadeUp}
            custom={2}
            whileHover={itemHover}
            className="flex-col items-start backdrop-blur-md bg-gradient-to-b from-indigo-950/80 to-indigo-900/30 border border-gray-800 rounded-xl p-8 hover:border-[#18cb96]/50 transition-all"
          >
            <div className="p-2 rounded-sm text-amber-400">
              <FaRobot className="h-8 w-8 md:h-8 md:w-8" />
            </div>
            <h3 className="font-bold text-xl md:text-2xl mb-4">Weaknesses</h3>
            <ul className="list-disc pl-5 space-y-2 text-gray-300">
              <li>Lacks concrete customer metrics</li>
              <li>Vague technical integration details</li>
              <li>No competitive comparison</li>
              <li>Missing interactive demos</li>
            </ul>
          </motion.div>

          {/* Suggestions Card */}
          <motion.div
            variants={fadeUp}
            custom={3}
            whileHover={itemHover}
            className="flex-col items-start backdrop-blur-md bg-gradient-to-b from-blue-950/80 to-blue-900/30 border border-gray-800 rounded-xl p-8 hover:border-[#18cb96]/50 transition-all"
          >
            <div className="p-2 rounded-sm text-blue-400">
              <FaLightbulb className="h-8 w-8 md:h-8 md:w-8" />
            </div>
            <h3 className="font-bold text-xl md:text-2xl mb-4">Suggestions</h3>
            <ul className="list-disc pl-5 space-y-2 text-gray-300">
              <li>Add customer case studies</li>
              <li>Include technical demo video</li>
              <li>Competitive comparison table</li>
              <li>Free trial or ROI calculator</li>
            </ul>
          </motion.div>

          {/* Verdict Card */}
          <motion.div
            variants={fadeUp}
            custom={4}
            whileHover={itemHover}
            className="flex-col items-start backdrop-blur-md bg-gradient-to-b from-teal-950/80 to-teal-900/30 border border-gray-800 rounded-xl p-8 hover:border-[#18cb96]/50 transition-all"
          >
            <div className="p-2 rounded-sm text-purple-400">
              <FaShieldAlt className="h-8 w-8 md:h-8 md:w-8" />
            </div>
            <h3 className="font-bold text-xl md:text-2xl mb-4">
              Final Verdict
            </h3>
            <p className="text-gray-300 mb-3">
              <span className="font-semibold text-purple-400">Grade: B+</span> -
              Strong messaging but needs more validation.
            </p>
            <p className="text-gray-300">
              Effective for mid-funnel leads exploring AI solutions.
            </p>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default PredictiveAnalysis;
