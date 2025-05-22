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

const TrustedPartners = () => {
  const items = [
    {
      icon: <FaClipboardList className="h-8 w-8 md:h-12 md:w-12 text-white" />,
      title: "Custom Setup",
      description: "Easy onboarding built exclusively for your platform",
    },
    {
      icon: <FaHandshake className="h-8 w-8 md:h-12 md:w-12 text-white" />,
      title: "Cobranding",
      description: "Brand positioning in product and communications",
    },
    {
      icon: <FaBullhorn className="h-8 w-8 md:h-12 md:w-12 text-white" />,
      title: "Comms",
      description:
        "Dedicated communications to help your people every step of the way",
    },
    {
      icon: <FaBookOpen className="h-8 w-8 md:h-12 md:w-12 text-white" />,
      title: "Content",
      description:
        "Financial education to make complicated decisions a little easier",
    },
  ];

  return (
    <div className="bg-gradient-to-br from-[#010C09] via-[#010C09] to-black p-8 pt-1">
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className=" text-white py-12  px-2 md:px-6 rounded-2xl  md:max-w-7xl mx-auto m-8 shadow-3xl"
      >
        <motion.h2
          variants={fadeUp}
          custom={0}
          className="text-3xl md:text-4xl font-semibold mb-8 pl-3 md:pl-10"
        >
          Trusted by independents, <br /> trusted by partners
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-3 md:px-12">
          {items.map((item, index) => (
            <motion.div
              key={index}
              variants={fadeUp}
              custom={index + 1}
              className="flex-col items-start backdrop-blur-md bg-gray-900/80 border border-gray-800 rounded-xl p-8   rounded-xl border border-gray-800 hover:border-[#18CB96]/50 transition-all p-8"
            >
              <div className="p-2 rounded-sm ">{item.icon}</div>
              <div className="max-w-full md:max-w-[80%]">
                <p className="font-semibold text-xl md:2xl hover:text-[#18cb96]">
                  {item.title}.
                  <span className="text-gray-400 text-lg ml-2">
                    {item.description}
                  </span>
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </div>
  );
};

export default TrustedPartners;
