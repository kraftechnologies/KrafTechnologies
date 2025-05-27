import React from "react";
import { motion } from "framer-motion";
import image from "../assets/resources-header.png";
const HeroSection = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="bg-gradient-to-br from-[#010C09] via-[#010C09] to-black  text-white py-20 px-4 sm:px-6 lg:px-8 bg-image bg-cover bg-center  "
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="text-left ">
          <motion.h1
            initial={{ y: -20 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-2 lg:mb-4"
          >
            Excellent <span className="text-[#18cb96]">Resources</span>
          </motion.h1>

          <motion.p
            initial={{ y: 20 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl md:text-2xl lg:text-3xl mb-10"
          >
            for Your Success
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: 0.3,
              ease: "easeOut",
            }}
            className="text-gray-100 text-left mt-4  md:text-left  max-w-[80%] min-w-[300px] "
          >
            Explore <span className="text-[#18CB96] ">kraf's</span> library of
            guides, webinars, customer stories, tutorials, and other helpful
            content — everything you need to become a scheduling superstar!
          </motion.p>

          <button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="px-6 py-3 bg-[#18CB96] hover:bg-green-400 text-black rounded-lg font-medium transition-all duration-300 mt-6"
          >
            Explore Now
          </button>
        </div>
        <div>
          <motion.div className="min-w-[80%] min-h-[80%] mx-auto">
            <motion.img
              initial={{ y: -20 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.5 }}
              src={image}
              alt="Resources Hero"
              className="w-[100%] h-[100%] object-cover  rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
            />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default HeroSection;
