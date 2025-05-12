import React from "react";
import { motion } from "framer-motion";
import image from "../assets/ourmission.png";
import bubble from "../assets/logos/bubble.png";
import drivetrain from "../assets/logos/drivetrain.png";
import goldcast from "../assets/logos/goldcast.png";
import scalekit from "../assets/logos/scalekit.png";
import tailcall from "../assets/logos/tailcall.png";
import xflow from "../assets/logos/xflow.png";

const logos = [bubble, drivetrain, goldcast, scalekit, tailcall, xflow];

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

export default function MissionSection() {
  return (
    <section className="bg-gradient-to-b from-black to-[#18cb96]/10 text-white px-6 py-16 text-center">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          custom={0}
          className="text-3xl md:text-6xl font-bold mb-4"
        >
          Our mission is to make <br />
          work <span className="text-[#18cb96]">meaningful</span>
        </motion.h2>

        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          custom={1}
          className="text-white text-xl md:text-2xl max-w-full md:max-w-[50%] mx-auto mb-8"
        >
          Kraf Technologies delivers smart, scalable SaaS solutions that drive
          business growth. Power your digital future with seamless, cloud-based
          innovation from Kraf.
        </motion.p>

        <motion.img
          src={image}
          alt="Woman with coffee"
          className="rounded-xl mx-auto w-full max-w-[50%] shadow-lg min-w-[250px]"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        />

        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          custom={2}
          className="mt-10 text-lg text-white tracking-widest uppercase underline"
        >
          Trusted by epic companies
        </motion.p>
      </div>

      <div className="w-full bg-black py-8 mt-12 overflow-hidden">
        <div className="relative overflow-hidden">
          <motion.div
            className="whitespace-nowrap flex animate-infinite-scroll"
            initial={{ x: 0 }}
            animate={{ x: "-50%" }}
            transition={{
              repeat: Infinity,
              ease: "linear",
              duration: 20,
            }}
          >
            {[...logos, ...logos].map((src, index) => (
              <img
                key={`logo-${index}`}
                src={src}
                alt="Company logo"
                className="inline-block h-10 mx-8 grayscale opacity-80 hover:opacity-100 transition"
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
