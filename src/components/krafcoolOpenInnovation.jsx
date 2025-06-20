import React from "react";
import { motion } from "framer-motion";
import techImage1 from "../assets/tech1.png";
import techImage2 from "../assets/tech5.png";
import techImage3 from "../assets/tech3.png";
import techImage4 from "../assets/tech4.png";
import bgforearlyAccess from "../assets/bgforEarlyAccess.png";

const WhyKrafCool = () => {
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

  // Infinite scroll animation for images
  // const infiniteScroll = {
  //   animate: {
  //     y: [0, -1000],
  //     transition: {
  //       y: {
  //         repeat: Infinity,
  //         repeatType: "loop",
  //         duration: 30,
  //         ease: "linear",
  //       },
  //     },
  //   },
  // };

  // Tech sectors data
  const techSectors = [
    { name: "AI Startups", image: techImage1 },
    { name: "CleanTech", image: techImage2 },
    { name: "Deep Tech", image: techImage3 },
    { name: "Fintech", image: techImage4 },
  ];

  return (
    <div className="bg-gradient-to-br from-[#010C09] via-[#010C09] to-black py-16 md:py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <motion.h1
            className="text-3xl md:text-4xl font-bold text-white mb-8"
            variants={itemVariants}
          >
            Why KrafCool Champions{" "}
            <span className="text-[#18cb96]">Open Innovation?</span>
          </motion.h1>

          <motion.p
            className=" text-gray-300 max-w-4xl mx-auto"
            variants={itemVariants}
          >
            At KrafCool, innovation is at the heart of everything we do. Open
            Innovation empowers us to nurture the brightest early-stage startups
            while driving strategic growth, technological leadership, and a
            culture of entrepreneurship — creating value for our partners,
            investors, and the broader ecosystem.
          </motion.p>
        </motion.div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
          {/* Left Column - Background Image with Content */}
          <motion.div
            className="relative h-full min-h-[500px] rounded-xl overflow-hidden col-span-1 md:col-span-2"
            variants={itemVariants}
          >
            <img
              src={bgforearlyAccess}
              alt="Early Access Background"
              className="absolute inset-0 w-full h-full object-cover opacity-50"
            />
            <div className="absolute bottom-0  flex items-center justify-center p-8">
              <div className="text-white max-w-md text-left">
                <h2 className="text-2xl font-bold">
                  Early Access to High-Growth Equity
                </h2>
                <p className="text-gray-300 ">
                  Gain preferential equity positions in disruptive startups
                  across AI, CleanTech, Deep Tech, and Fintech — before they
                  scale.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Infinite Scrolling Tech Cards */}
          <motion.div
            className="relative h-[500px] overflow-hidden"
            variants={itemVariants}
          >
            <motion.div
              className="absolute top-0 left-0 w-full"
              animate={{
                y: ["0%", "-100%"],
                transition: {
                  y: {
                    repeat: Infinity,
                    repeatType: "loop",
                    duration: 30,
                    ease: "linear",
                  },
                },
              }}
            >
              {[...techSectors, ...techSectors, ...techSectors].map(
                (sector, index) => (
                  <div
                    key={`${index}-${sector.name}`}
                    className="w-full h-[200px] flex items-center justify-center mb-4"
                  >
                    <div className="relative w-full h-full">
                      {" "}
                      {/* Fixed square container */}
                      <img
                        src={sector.image}
                        alt={sector.name}
                        className="absolute inset-0 w-full h-full object-cover"
                        style={{
                          objectFit: "cover",
                          width: "100%",
                          height: "100%",
                        }}
                      />
                    </div>
                  </div>
                )
              )}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default WhyKrafCool;
