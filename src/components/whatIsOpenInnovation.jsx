import React from "react";
import { motion } from "framer-motion";
import whatisopeninnovation from "../assets/whatisopeninnovation.png";
import currency from "../assets/currency.png";

const OpenInnovation = () => {
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

  const cardHover = {
    hover: {
      y: -5,
      borderColor: "#18cb96",
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
  };

  // Combined variants for cards
  const cardVariants = {
    ...itemVariants,
    hover: cardHover.hover,
  };

  return (
    <div className="bg-gradient-to-br from-[#010C09] via-[#010C09] to-black py-12 md:py-18 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section 1: What is Open Innovation */}
        <motion.div
          className="flex flex-col lg:flex-row gap-12 items-center mb-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <motion.div className="lg:w-1/2" variants={itemVariants}>
            <motion.img
              src={whatisopeninnovation}
              alt="Open Innovation"
              className="w-full h-auto rounded-xl object-cover"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            />
          </motion.div>

          <motion.div className="lg:w-1/2" variants={itemVariants}>
            <motion.h1
              className="text-3xl md:text-4xl font-bold text-white mb-6"
              variants={itemVariants}
            >
              What is <span className="text-[#18cb96]">Open Innovation?</span>
            </motion.h1>

            <motion.p
              className="text-xl text-gray-300 mb-8"
              variants={itemVariants}
            >
              Open Innovation is KrafCool's strategic initiative to empower
              early-stage startups. Unlike traditional accelerators, it's a
              multi-tier launchpad that derisks innovation, integrates new tech
              into KrafCool's ecosystem, and fuels mutual growth.
            </motion.p>
          </motion.div>
        </motion.div>

        {/* KEY ADVANTAGES Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <motion.h2
            className="text-2xl font-bold text-[#18cb96] mb-8"
            variants={itemVariants}
          >
            KEY ADVANTAGES
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {/* Funding Access Card */}
            <motion.div
              className="bg-gray-900/50 p-6 rounded-xl border border-gray-800 col-span-1 md:col-span-2"
              variants={cardVariants}
              whileHover="hover"
            >
              <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-xl font-bold text-[#18cb96] mb-4">
                    Funding Access
                  </h3>
                  <p className="text-gray-300">
                    Fuel your growth with flexible capital — convertible notes,
                    grants, and milestone-based investments tailored to your
                    startup's pace.
                  </p>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  viewport={{ once: true }}
                  className="flex items-center justify-center"
                >
                  <motion.img
                    src={currency}
                    alt="Currency"
                    className=" object-contain"
                    whileHover={{ scale: 1.05 }}
                  />
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Mentorship Network Card */}
            <motion.div
              className="bg-gray-900/50 p-6 rounded-xl border border-gray-800"
              variants={cardVariants}
              whileHover="hover"
            >
              <h3 className="text-xl font-bold text-[#18cb96] mb-4">
                Mentorship Network
              </h3>
              <p className="text-gray-300">
                Connect with seasoned agencies and executives from KrafCool and
                partner organizations for hands-on strategy guidance and deep
                domain insights.
              </p>
            </motion.div>

            {/* Infrastructure & Tools Card */}
            <motion.div
              className="bg-gray-900/50 p-6 rounded-xl border border-gray-800"
              variants={cardVariants}
              whileHover="hover"
            >
              <h3 className="text-xl font-bold text-[#18cb96] mb-4">
                Infrastructure & Tools
              </h3>
              <p className="text-gray-300">
                Get subsidized access to compute platforms, cloud services,
                prototyping labs, and dev environments — everything you need to
                scale quickly.
              </p>
            </motion.div>

            {/* Market Entry Support Card */}
            <motion.div
              className="bg-gray-900/50 p-6 rounded-xl border border-gray-800"
              variants={cardVariants}
              whileHover="hover"
            >
              <h3 className="text-xl font-bold text-[#18cb96] mb-4">
                Market Entry Support
              </h3>
              <p className="text-gray-300">
                Leverage KrafCool's brand, distribution, and customer network to
                validate your product, accelerate early adoption, and grow your
                presence fast.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default OpenInnovation;
