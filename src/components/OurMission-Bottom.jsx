import React from "react";
import { motion } from "framer-motion";

export default function Bottom() {
  return (
    <section className="bg-gradient-to-br from-[#010C09] via-[#010C09] to-black text-white py-16 px-6 text-center">
      {/* Title Animation */}
      <motion.h2
        className="text-2xl md:text-4xl font-bold mb-6"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }} // triggers only once when in view
      >
        Clients first, <br />
        Growth Always
      </motion.h2>

      {/* Button with Hover Animation */}
      <motion.button
        className="bg-[#18cb96] hover:bg-green-500 text-black font-semibold py-2 px-12 rounded-full transition duration-300"
        whileHover={{ scale: 1.1 }} // Scale up when hovered
        transition={{ type: "spring", stiffness: 300 }}
      >
        Contact us
      </motion.button>
    </section>
  );
}
