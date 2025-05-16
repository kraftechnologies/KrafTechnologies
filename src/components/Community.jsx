import React from "react";
import { motion } from "framer-motion";

const stats = [
  {
    value: "5,000+",
    label: "Organizations trust Kraf",
  },
  {
    value: "5.55M",
    label: "Pieces of Feedback Shared",
  },
  {
    value: "24,000+",
    label: "Resources for community Members",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
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

export default function Community() {
  return (
    <section className="bg-gradient-to-b from-black to-[#18cb96]/10 text-white py-16 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left Side */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={0}
            className="text-3xl md:text-4xl font-bold leading-snug mb-4"
          >
            Develop <span className="text-[#18cb96]">engaged</span> & <br />
            <span className="text-[#18cb96]">high-performing</span> team
          </motion.h2>

          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={1}
            className="text-white mb-6 text-2xl md:text-3xl"
          >
            People spend most of their waking hours at work — our goal is to
            make those hours better. Kraf works with People teams across the
            globe to turn managers into leaders, employees into high-performers,
            and companies into the best places to work.
          </motion.p>

          <motion.button
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={2}
            className="bg-[#18cb96] hover:bg-green-400 text-black font-semibold py-3 px-6 rounded-full transition"
          >
            Join the Community
          </motion.button>
        </motion.div>

        {/* Right Side - Stats */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 + 0.2, duration: 0.6 }}
              className="bg-gradient-to-b from-[#18cb96]/7 to-black border border-[#18cb96] rounded-xl p-6 shadow-lg hover:border-white
                 hover:scale-105 transition-transform duration-300"
            >
              <p className="text-2xl font-bold text-white">{stat.value}</p>
              <p className="text-white">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
