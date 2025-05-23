import React from "react";
import { motion } from "framer-motion";
import {
  FaBrain,
  FaPlug,
  FaShieldAlt,
  FaUsers,
  FaChartBar,
} from "react-icons/fa";

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

const SaaSFeatures = () => {
  return (
    <div className="bg-gradient-to-br from-[#010C09] via-[#010C09] to-black py-16 px-4 sm:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="text-3xl md:text-4xl font-bold text-center mb-12 text-white"
        >
          Key Features of Our SaaS Solution
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Machine Learning */}
          <motion.div
            variants={fadeUp}
            custom={1}
            whileHover={itemHover}
            className="bg-gray-900/50 p-6 rounded-xl border border-gray-800 hover:border-[#18CB96]/50 transition-all"
          >
            <div className="p-3 bg-emerald-900/20 rounded-full w-max mb-4">
              <FaBrain className="h-6 w-6 text-emerald-400" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">
              Advanced Machine Learning
            </h3>
            <p className="text-gray-300">
              Self-improving algorithms that continuously enhance prediction
              accuracy without manual intervention.
            </p>
          </motion.div>

          {/* Integration */}
          <motion.div
            variants={fadeUp}
            custom={2}
            whileHover={itemHover}
            className="bg-gray-900/50 p-6 rounded-xl border border-gray-800 hover:border-[#18CB96]/50 transition-all"
          >
            <div className="p-3 bg-blue-900/20 rounded-full w-max mb-4">
              <FaPlug className="h-6 w-6 text-blue-400" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">
              Seamless Integration
            </h3>
            <p className="text-gray-300">
              Connects effortlessly with your existing databases, warehouses,
              and data sources.
            </p>
          </motion.div>

          {/* Security */}
          <motion.div
            variants={fadeUp}
            custom={3}
            whileHover={itemHover}
            className="bg-gray-900/50 p-6 rounded-xl border border-gray-800 hover:border-[#18CB96]/50 transition-all"
          >
            <div className="p-3 bg-purple-900/20 rounded-full w-max mb-4">
              <FaShieldAlt className="h-6 w-6 text-purple-400" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">
              Enterprise Security
            </h3>
            <p className="text-gray-300">
              Military-grade encryption with compliance certifications and
              guaranteed uptime SLAs.
            </p>
          </motion.div>

          {/* Collaboration */}
          <motion.div
            variants={fadeUp}
            custom={4}
            whileHover={itemHover}
            className="bg-gray-900/50 p-6 rounded-xl border border-gray-800 hover:border-[#18CB96]/50 transition-all"
          >
            <div className="p-3 bg-amber-900/20 rounded-full w-max mb-4">
              <FaUsers className="h-6 w-6 text-amber-400" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">
              Collaborative Workflows
            </h3>
            <p className="text-gray-300">
              Intuitive interface with real-time sharing and team collaboration
              features.
            </p>
          </motion.div>

          {/* Outcomes */}
          <motion.div
            variants={fadeUp}
            custom={5}
            whileHover={itemHover}
            className="bg-gray-900/50 p-6 rounded-xl border border-gray-800 hover:border-[#18CB96]/50 transition-all"
          >
            <div className="p-3 bg-red-900/20 rounded-full w-max mb-4">
              <FaChartBar className="h-6 w-6 text-red-400" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">
              Proven Outcomes
            </h3>
            <p className="text-gray-300">
              Documented improvements in customer engagement, operational
              efficiency, and risk management.
            </p>
          </motion.div>

          {/* Implementation */}
          <motion.div
            variants={fadeUp}
            custom={6}
            whileHover={itemHover}
            className="bg-gray-900/50 p-6 rounded-xl border border-gray-800 hover:border-[#18CB96]/50 transition-all"
          >
            <div className="p-3 bg-green-900/20 rounded-full w-max mb-4">
              <FaUsers className="h-6 w-6 text-green-400" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">
              Smooth Implementation
            </h3>
            <p className="text-gray-300">
              Dedicated support team ensures successful integration with minimal
              disruption.
            </p>
          </motion.div>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="flex flex-col sm:flex-row justify-center gap-4 mt-16"
        >
          <button className="bg-[#18CB96] hover:bg-green-400 text-black font-semibold py-3 px-8 rounded-lg transition-all flex items-center justify-center gap-2">
            Book a 30-Min Demo
          </button>
          <button className="bg-transparent hover:bg-gray-800/50 text-white font-semibold py-3 px-8 rounded-lg border border-gray-600 transition-all">
            See Integration Guide
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default SaaSFeatures;
