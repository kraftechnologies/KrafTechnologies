import React from "react";
import { motion } from "framer-motion";
import Team from "../assets/ourmission-aboutus.png";
import BG from "../assets/BG.png";

const stats = [
  { label: "Categories", value: "10+" },
  { label: "Products", value: "1000+" },
  { label: "Happy Clients", value: "100%" },
];

export default function AboutUs() {
  return (
    <section
      className="bg-gradient-to-br from-[#010C09] via-[#010C09] to-black text-white px-6 py-12 h-auto bg-image w-[100%] bg-cover bg-center"
      style={{ backgroundImage: `url(${BG})` }}
    >
      <h2 className="text-3xl md:text-4xl font-semibold mb-4 max-w-7xl text-center mx-auto mt-[5%] mb-[5%]">
        About us
      </h2>
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-[5%] items-start">
        {/* Image with animation from left, triggers when it comes into view */}
        <motion.div
          className="relative"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }} // triggers only once when in view
        >
          <div className="absolute top-6 left-6 w-[70%] h-[70%]"></div>
          <img
            src={Team}
            alt="Team meeting"
            className="relative z-10 rounded-lg shadow-lg max-w-full md:max-w-[80%] h-auto object-cover mx-auto"
          />
        </motion.div>

        {/* Text and Stats with animation from right, triggers when they come into view */}
        <div>
          <p className="text-2xl md:text-3xl font-medium leading-normal mb-6">
            At Kraf we craft the future{" "}
            <span className="text-green-500">bright</span>,<br />
            SaaS solutions built to{" "}
            <span className="text-green-500">ignite</span>.
          </p>
          <p className="text-white mb-8 text-xl md:text-xl">
            We create organic teas designed to bring comfort, clarity, and calm
            to your everyday routine. Our blends are crafted with natural
            ingredients, sourced sustainably from farms around the world. We
            believe tea is more than a beverage — it’s a moment of peace, a
            breath of nature, and a ritual of care.
          </p>

          {/* Stats with animation from right, triggers when in view */}
          <div className="flex flex-wrap gap-8 justify-around pb-12 mb-12 min-w-full">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.3,
                }}
                className="text-center"
                viewport={{ once: true }} // triggers only once when in view
              >
                <p className="text-2xl md:text-3xl font-bold">{stat.value}</p>
                <p className="text-white text-xl md:text-2xl">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
