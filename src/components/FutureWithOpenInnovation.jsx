import React from "react";
import { motion } from "framer-motion";
import design from "../assets/open-innovation-design.png";

const FuelingFuture = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  const buttonVariants = {
    hover: {
      y: -2,
      transition: {
        duration: 0.2,
        ease: "easeOut",
      },
    },
    tap: {
      y: 1,
      scale: 0.98,
    },
  };

  return (
    <div className="relative overflow-hidden">
      {" "}
      {/* Added overflow-hidden here */}
      <motion.div
        className="mx-auto px-6 py-20 text-center bg-gradient-to-br from-[#010C09] via-[#010C09] to-black md:pt-24 pt-4"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {/* Main Content Container */}
        <div className="relative max-w-3xl mx-auto">
          <motion.h1
            className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight"
            variants={itemVariants}
          >
            Fueling the Future with{" "}
            <span className="text-[#18cb96]">Open Innovation</span>
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-gray-300 mb-12 mx-auto"
            variants={itemVariants}
          >
            Empowering early-stage startups with capital, infrastructure, and
            opportunity.{" "}
            <span className="font-semibold text-[#18cb96]">
              Powered by KrafCool
            </span>
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row justify-center gap-4 md:my-8 my-6"
            variants={itemVariants}
          >
            <motion.button
              className="px-8 py-3 bg-[#18cb96] hover:bg-[#18bb96] text-white rounded-lg font-medium text-lg transition-colors"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              Apply as a Startup
            </motion.button>

            <motion.button
              className="bg-transparent hover:bg-gray-800/50 text-white font-semibold py-3 px-8 rounded-lg border border-gray-600 transition-colors"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              Partner with Us
            </motion.button>
          </motion.div>
        </div>
      </motion.div>
      {/* Image positioned to stay within parent bounds */}
      <motion.div
        className="absolute bottom-0 right-0 opacity-100"
        style={{
          width: "200px",
          height: "auto",
          transform: "translate(30%, 30%)",
        }}
      >
        <img
          src={design}
          alt="Decorative element"
          className="w-full h-full object-contain"
        />
      </motion.div>
    </div>
  );
};

export default FuelingFuture;
