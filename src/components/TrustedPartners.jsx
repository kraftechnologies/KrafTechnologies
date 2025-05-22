import React from "react";
import {
  FaClipboardList,
  FaHandshake,
  FaBullhorn,
  FaBookOpen,
} from "react-icons/fa";
import { motion } from "framer-motion";

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
  transition: {
    duration: 0.1,
  },
};

const TrustedPartners = () => {
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
          Trusted by independents, <br /> trusted by partners
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-3 md:px-12">
          {/* Item 1 */}
          <motion.div
            variants={fadeUp}
            custom={1}
            whileHover={itemHover}
            className="flex-col items-start backdrop-blur-md bg-gradient-to-b from-blue-950/80 to-blue-900/30 border border-gray-800 rounded-xl p-8 transition-all"
          >
            <div className="p-2 rounded-sm">
              <FaClipboardList className="h-8 w-8 md:h-8 md:w-8 text-white" />
            </div>
            <div className="max-w-full md:max-w-[80%]">
              <p className="font-semibold text-xl md:2xl hover:text-[#18cb96]">
                Custom Setup.
                <span className="text-gray-400 text-lg ml-2">
                  Easy onboarding built exclusively for your platform
                </span>
              </p>
            </div>
          </motion.div>

          {/* Item 2 */}
          <motion.div
            variants={fadeUp}
            custom={2}
            whileHover={itemHover}
            className="flex-col items-start backdrop-blur-md bg-gradient-to-b from-purple-950/80 to-purple-900/30 border border-gray-800 rounded-xl p-8 transition-all"
          >
            <div className="p-2 rounded-sm">
              <FaHandshake className="h-8 w-8 md:h-8 md:w-8 text-white" />
            </div>
            <div className="max-w-full md:max-w-[80%]">
              <p className="font-semibold text-xl md:2xl hover:text-[#18cb96]">
                Cobranding.
                <span className="text-gray-400 text-lg ml-2">
                  Brand positioning in product and communications
                </span>
              </p>
            </div>
          </motion.div>

          {/* Item 3 */}
          <motion.div
            variants={fadeUp}
            custom={3}
            whileHover={itemHover}
            className="flex-col items-start backdrop-blur-md bg-gradient-to-b from-orange-950/80 to-orange-900/30 border border-gray-800 rounded-xl p-8 transition-all"
          >
            <div className="p-2 rounded-sm">
              <FaBullhorn className="h-8 w-8 md:h-8 md:w-8 text-white" />
            </div>
            <div className="max-w-full md:max-w-[80%]">
              <p className="font-semibold text-xl md:2xl hover:text-[#18cb96]">
                Comms.
                <span className="text-gray-400 text-lg ml-2">
                  Dedicated communications to help your people every step of the
                  way
                </span>
              </p>
            </div>
          </motion.div>

          {/* Item 4 */}
          <motion.div
            variants={fadeUp}
            custom={4}
            whileHover={itemHover}
            className="flex-col items-start backdrop-blur-md border border-gray-800 rounded-xl p-8 bg-gradient-to-b from-emerald-950/80 to-emerald-900/30 transition-all"
          >
            <div className="p-2 rounded-sm">
              <FaBookOpen className="h-8 w-8 md:h-8 md:w-8 text-white" />
            </div>
            <div className="max-w-full md:max-w-[80%]">
              <p className="font-semibold text-xl md:2xl hover:text-[#18cb96]">
                Content.
                <span className="text-gray-400 text-lg ml-2">
                  Financial education to make complicated decisions a little
                  easier
                </span>
              </p>
            </div>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default TrustedPartners;
