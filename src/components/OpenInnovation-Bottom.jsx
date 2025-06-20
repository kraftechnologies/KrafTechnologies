import React from "react";
import { motion } from "framer-motion";
import { RiFacebookCircleLine } from "react-icons/ri";
import { BsInstagram } from "react-icons/bs";
import { AiOutlineLinkedin } from "react-icons/ai";
import { RiTwitterXLine } from "react-icons/ri";

const Footer = () => {
  return (
    <footer className="bg-[#010C09] text-white py-8 px-6">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Animated upper section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-center gap-12"
        >
          {/* Company Info */}
          <div className="text-center md:text-left flex-1">
            <p className="font-bold text-xl">Kraf Technologies</p>
            <p className="text-gray-300 mt-1">
              <span className="text-lg align-middle">&copy;</span> Copyright.
              All Rights Reserved
            </p>
          </div>

          {/* Newsletter Subscription */}
          <div className="flex-1 text-center">
            <h2 className="text-2xl md:text-3xl font-semibold text-[#18cb96] mb-4">
              Subscribe to our newsletter
            </h2>
            <div className="bg-white rounded-full overflow-hidden w-full max-w-md mx-auto flex shadow-md">
              <input
                type="email"
                placeholder="Drop Your Email"
                className="flex-grow px-4 py-2 text-gray-700 focus:outline-none"
              />
              <button className="bg-[#18cb96] text-white px-6 py-2 font-semibold rounded-full hover:bg-[#14b386] transition-colors m-1">
                Submit
              </button>
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex-1 flex justify-center md:justify-end space-x-5 text-2xl text-[#18cb96]">
            <RiFacebookCircleLine className="h-9 w-9" />
            <BsInstagram className="h-7 w-7" />
            <AiOutlineLinkedin className="h-7 w-7" />
            <RiTwitterXLine className="h-7 w-7" />
          </div>
        </motion.div>

        {/* Contact Information */}
        <div className="text-xl text-gray-400 space-y-2 text-center md:text-left">
          <p>
            E-mail:{" "}
            <span className="hover:underline">info@krafttechnologies.com</span>
          </p>
          <p>
            Team E-mail:{" "}
            <span className="hover:underline">team@krafttechnologies.com</span>
          </p>
          <p>
            Contact: <span className="hover:underline">+91 9670269295</span>
          </p>
          <p>
            HO Office Address:{" "}
            <span className="hover:underline">
              Property No. 55, 3rd Floor Saidulajab, Near Westend, Marg Lane-2,
              New Delhi, 110030
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
