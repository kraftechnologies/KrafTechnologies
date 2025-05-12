import React from "react";
import { ArrowRight, Building, Cloud, Triangle } from "lucide-react";
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

const features = [
  {
    icon: <ArrowRight className="h-12 w-12 text-white" />,
    title: "You don’t have to write any new code.",
    description:
      "Get started quickly and work with Catch to enrich the experience over time",
  },
  {
    icon: <Building className="h-12 w-12 text-white" />,
    title: "We support your existing flow of funds.",
    description: "You won’t need to change anything about your setup",
  },
  {
    icon: <Cloud className="h-12 w-12 text-white" />,
    title: "Users can import and transfer marketplace plans",
    description:
      "From standalone marketplace sites like HealthCare.gov, Stride, and others",
  },
  {
    icon: <Triangle className="h-12 w-12 text-white" />,
    title: "We work with partners to craft our roadmap.",
    description: "Together with users and internal experiments",
  },
];

const GetStarted = () => {
  return (
    <section className="bg-gradient-to-b from-black to-[#18cb96]/10 text-white py-12 px-6 md:px-16">
      <motion.h2
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
        custom={0}
        className="text-3xl md:text-6xl font-bold mb-10 text-left max-w-7xl pl-4 md:pl-12"
      >
        It’s free and easy to get started
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-7xl mx-auto mb-12">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={index + 1}
            className="flex-col items-start gap-12 px-4 hover:text-[#18cb96] cursor-default"
          >
            <div className="my-3">{feature.icon}</div>
            <div>
              <h3 className="font-semibold text-2xl">{feature.title}</h3>
              <p className="text-xl opacity-70">{feature.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default GetStarted;
