import React from "react";
import innovationImage from "../assets/innovation.png";
import { IoHardwareChipOutline } from "react-icons/io5";
import { FaGlobeAsia } from "react-icons/fa";
const InnovationTechnologySection = () => {
  return (
    <div className="bg-gradient-to-br from-[#010C09] via-[#010C09] to-black text-white pt-12 px-6 ">
      <h2 className="text-6xl font-bold text-center">
        Fueling <span className="text-[#18cb96]">Innovation</span> Through{" "}
        <span className="text-[#18cb96]">Technology</span>
      </h2>
      <p className="text-white text-center mt-4 text-3xl max-w-7xl mx-auto">
        We leverage cutting-edge technologies to push the boundaries of what’s
        possible. Our solutions are built on a foundation of innovation,
        scalability, and performance.
      </p>

      <div className="flex flex-wrap justify-start mt-10 max-w-7xl mx-auto px-4 py-12 gap-6 relative">
        {/* Left-aligned box */}
        <div className="border border-white rounded-3xl p-8 w-full md:w-[48%] border mx-auto max-w-[70%]">
          <div className="flex items-center gap-2 mb-2 text-3xl text-white">
            <IoHardwareChipOutline className="text-[#18cb96]" />
            <h4 className="font-semibold">Advance AI Integration</h4>
          </div>
          <p className="text-white text-xl text-left">
            Powered by state-of-the-art machine learning
          </p>
        </div>

        <div className="border border-white rounded-3xl p-8 w-full md:w-[48%] md:ml-auto mx-auto max-w-[70%]">
          <div className="flex items-center gap-2 mb-2 text-3xl text-white">
            <FaGlobeAsia className="text-[#18cb96]" />
            <h4 className="font-semibold">Global Scale</h4>
          </div>
          <p className="text-white text-xl text-left">
            Enterprise-ready infrastructure worldwide
          </p>
        </div>
      </div>

      <img
        src={innovationImage}
        alt="Innovation"
        className="mt-10 rounded-md mx-auto w-full max-w-7xl mb-0"
      />
    </div>
  );
};

export default InnovationTechnologySection;
