import React from "react";
import { motion } from "framer-motion";
import { FaExpand, FaDollarSign, FaRobot, FaGlobe } from "react-icons/fa";

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

const WhyOurSaaS = () => {
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
          Why Choose Our Predictive Analytics
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Scalability */}
          <motion.div
            variants={fadeUp}
            custom={1}
            whileHover={itemHover}
            className="bg-gradient-to-b from-blue-950/80 to-blue-900/30 border border-gray-800 rounded-xl p-6  hover:border-[#18CB96]/50 transition-all"
          >
            <div className="p-3 bg-emerald-900/20 rounded-full w-max mb-4">
              <FaExpand className="h-6 w-6 text-emerald-400" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">
              Elastic Scalability
            </h3>
            <p className="text-gray-300">
              Scale analytics instantly without infrastructure costs. Pay only
              for what you use.
            </p>
          </motion.div>

          {/* Cost */}
          <motion.div
            variants={fadeUp}
            custom={2}
            whileHover={itemHover}
            className="bg-gradient-to-b from-purple-950/80 to-purple-900/30 border border-gray-800 rounded-xl p-6  hover:border-[#18CB96]/50 transition-all"
          >
            <div className="p-3 bg-blue-900/20 rounded-full w-max mb-4">
              <FaDollarSign className="h-6 w-6 text-blue-400" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">
              Cost-Effective
            </h3>
            <p className="text-gray-300">
              Subscription model eliminates upfront costs and reduces total
              ownership expenses.
            </p>
          </motion.div>

          {/* Automation */}
          <motion.div
            variants={fadeUp}
            custom={3}
            whileHover={itemHover}
            className="bg-gradient-to-b from-orange-950/80 to-orange-900/30 border border-gray-800 rounded-xl hover:border-[#18CB96]/50 p-6  transition-all"
          >
            <div className="p-3 bg-purple-900/20 rounded-full w-max mb-4">
              <FaRobot className="h-6 w-6 text-purple-400" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">
              Real-Time Insights
            </h3>
            <p className="text-gray-300">
              Automated processing delivers actionable insights faster than
              traditional methods.
            </p>
          </motion.div>

          {/* Accessibility */}
          <motion.div
            variants={fadeUp}
            custom={4}
            whileHover={itemHover}
            className="bg-gradient-to-b from-emerald-950/80 to-emerald-900/30 border border-gray-800 rounded-xl p-6  transition-all hover:border-[#18CB96]/50"
          >
            <div className="p-3 bg-amber-900/20 rounded-full w-max mb-4">
              <FaGlobe className="h-6 w-6 text-amber-400" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">
              Global Accessibility
            </h3>
            <p className="text-gray-300">
              Cloud-based access enables team collaboration across time zones.
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
            Book a Demo
          </button>
          <button className="bg-transparent hover:bg-gray-800/50 text-white font-semibold py-3 px-8 rounded-lg border border-gray-600 transition-all">
            See Case Studies
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default WhyOurSaaS;
