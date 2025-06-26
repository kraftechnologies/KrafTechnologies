import React from "react";
import { motion } from "framer-motion";
import div1 from "../assets/div1.png";
import div2 from "../assets/div2.png";
import div3 from "../assets/div3.png";
import div4 from "../assets/div4.png";
import div5 from "../assets/div5.png";
import paperwrite from "../assets/paperwrite.png";
import talk from "../assets/talk.png";
import graph from "../assets/graph.png";
import arrow from "../assets/arrow.png";

const OpenInnovationSection = () => {
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
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div
      className="bg-gradient-to-br from-[#010C09] via-[#010C09] to-black py-12 px-4 sm:px-6"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.h1
          className="text-3xl md:text-4xl font-bold text-white mb-4 text-center"
          variants={itemVariants}
        >
          What Startups Gain from{" "}
          <span className="text-[#18cb96]">Open Innovation?</span>
        </motion.h1>
        <motion.p
          className="text-gray-400 mb-12 text-center max-w-3xl mx-auto"
          variants={itemVariants}
        >
          From capital and cloud credits to mentorship and market access —
          unlock everything you need to build, scale, and succeed.
        </motion.p>

        {/* Five Benefit Images - Tight grid layout */}
        <motion.div
          className="grid grid-cols-1  md:grid-cols-3 gap-4 sm:gap-12 mb-24 justify-items-center "
          variants={containerVariants}
        >
          {[div1, div2, div3, div4, div5].map((img, index) => (
            <motion.div
              key={index}
              className="flex justify-center "
              variants={itemVariants}
              whileHover={{ scale: 1.03 }}
            >
              <img
                src={img}
                alt={`Benefit ${index + 1}`}
                className="w-full h-auto object-contain"
              />
            </motion.div>
          ))}
        </motion.div>

        {/* How to Apply Section */}
        <motion.div className="text-center" variants={containerVariants}>
          <motion.h2
            className="text-2xl md:text-3xl font-bold text-white mb-8"
            variants={itemVariants}
          >
            How To Apply?
          </motion.h2>

          <motion.div
            className="flex flex-col md:flex-row items-center justify-center gap-2 sm:gap-4 max-w-5xl mx-auto mb-12"
            variants={containerVariants}
          >
            {[
              { icon: paperwrite, alt: "Fill Out the Application" },
              { icon: talk, alt: "Get Reviewed & Pitch" },
              { icon: graph, alt: "Start Scaling with Us" },
            ].map((step, index) => (
              <React.Fragment key={index}>
                <motion.div
                  className="flex flex-col items-center w-[160px] sm:w-[180px] border border-[#18cb96] rounded-lg gap-4 p-4"
                  variants={itemVariants}
                  whileHover={{ y: -3 }}
                >
                  <div className="mb-3 w-14 h-14 sm:w-16 sm:h-16 bg-[#18cb96] rounded-full flex items-center justify-center">
                    <img
                      src={step.icon}
                      alt={step.alt}
                      className="h-8 sm:h-6 w-auto text-white fill-current font-semibold"
                    />
                  </div>
                  <p className="text-[#18cb96] text-xs sm:text-sm md:text-base font-semibold text-center">
                    {step.alt}
                  </p>
                </motion.div>

                {/* Add arrow between steps except after last */}
                {index < 2 && (
                  <motion.div
                    className="hidden md:block mx-1"
                    variants={itemVariants}
                  >
                    <img
                      src={arrow}
                      alt="arrow"
                      className="w-6 h-6 sm:w-8 sm:h-8 opacity-70"
                    />
                  </motion.div>
                )}
              </React.Fragment>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default OpenInnovationSection;
