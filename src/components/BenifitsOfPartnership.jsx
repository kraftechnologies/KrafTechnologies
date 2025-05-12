import React from "react";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const BenefitsOfPartnership = () => {
  return (
    <div className="bg-[#010C09] text-white font-sans">
      <div className="w-full text-center py-12 p-6 bg-gradient-to-b from-black to-[#18cb96]/10">
        {/* Header Text */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-6 w-full"
        >
          <motion.p
            variants={fadeUp}
            custom={1}
            className="text-white text-xl font-medium"
          >
            Partner with Kraf Technology
          </motion.p>
          <motion.h1
            variants={fadeUp}
            custom={2}
            className="text-4xl md:text-6xl font-bold leading-tight py-6"
          >
            Benefits that make <br className="hidden sm:block" /> the difference
          </motion.h1>
          <motion.p
            variants={fadeUp}
            custom={3}
            className="text-2xl md:text-3xl text-white max-w-5xl mx-auto"
          >
            Help independent contractors on your platform take care of health,
            dental and more automatically. At no cost to you.
          </motion.p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            variants={fadeUp}
            custom={4}
            className="bg-[#18cb96] hover:bg-green-400 text-black font-semibold text-xl px-12 py-4 rounded-full transition duration-300"
          >
            Get in Touch
          </motion.button>
        </motion.div>

        {/* Secondary Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-4 max-w-7xl mx-auto px-4 py-12 text-left"
        >
          <motion.h2
            variants={fadeUp}
            custom={1}
            className="text-3xl md:text-6xl font-bold text-left w-[80%] min-w-[200px] mb-6"
          >
            The only all-in-one portable benefits platform
          </motion.h2>
          <motion.p
            variants={fadeUp}
            custom={2}
            className="text-2xl md:text-4xl text-white text-left"
          >
            Everything independents need in one easy-to-use platform
          </motion.p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            variants={fadeUp}
            custom={3}
            className="bg-[#18cb96] text-left hover:bg-green-400 text-black text-xl font-semibold px-12 py-4 rounded-full transition duration-300"
          >
            Get Started
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default BenefitsOfPartnership;
