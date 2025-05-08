import React from "react";
import { MdOutlineWbSunny } from "react-icons/md";
import { BsCpuFill } from "react-icons/bs"; // Optional icon
import { TbBrain } from "react-icons/tb"; // Optional icon

const AiMachineLearningSection = () => {
  return (
    <div className=" text-white bg-gradient-to-br from-[#010C09] via-[#010C09] to-blackfont-sans py-16 px-4">
      <div className="max-w-7xl mx-auto flex flex-wrap lg:flex-nowrap items-start gap-6">
        {/* Left Text */}
        <div className="space-y-6 animate-[fadeUp_0.8s_ease-in-out] w-full lg:w-1/2 min-w-[250px]">
          <p className="text-[#18cb96] font-semibold text-xl">WHAT WE OFFER</p>
          <h2 className="text-4xl lg:text-6xl font-bold leading-tight">
            Advanced AI &<br /> Machine Learning
          </h2>
          <p className="text-white text-lg lg:text-xl leading-relaxed max-w-[90%]">
            Leveraging cutting-edge artificial intelligence and machine learning
            technologies to deliver intelligent, scalable solutions for
            enterprise needs.
          </p>
          <button className="mt-4 bg-[#18cb96] hover:bg-[#16b58a] transition-colors text-black font-semibold py-3 px-12 rounded-full w-fit">
            Contact Us
          </button>
        </div>

        {/* Right Cards */}
        <div className="space-y-6 animate-[fadeUp_1s_ease-in-out] w-full lg:w-1/2 min-w-[250px]">
          {/* Card 1 */}
          <div className="bg-gradient-to-br from-[#112d2c] to-[#0f1a1a] text-white px-12 py-12 rounded-xl shadow-lg">
            <div className="flex items-center gap-3 text-2xl font-bold mb-2">
              <BsCpuFill className="text-[#18cb96]" />
              AI
            </div>
            <p className="text-xl font-semibold mb-3">Large Language Models</p>
            <ul className="text-lg space-y-2 font-medium">
              <li className="flex items-center gap-2">
                <MdOutlineWbSunny className="text-[#18cb96]" />
                15B+ Parameters
              </li>
              <li className="flex items-center gap-2">
                <MdOutlineWbSunny className="text-[#18cb96]" />
                Multi-language Support
              </li>
              <li className="flex items-center gap-2">
                <MdOutlineWbSunny className="text-[#18cb96]" />
                Context-aware Responses
              </li>
            </ul>
          </div>

          {/* Card 2 */}
          <div className="bg-white text-black px-12 py-12 rounded-xl shadow-lg">
            <div className="flex items-center gap-3 text-2xl font-bold mb-2">
              <TbBrain className="text-[#18cb96]" />
              Neural Networks
            </div>
            <p className="text-xl font-semibold mb-3">
              Deep learning models for pattern recognition
            </p>
            <ul className="text-lg space-y-2 font-medium">
              <li className="flex items-center gap-2">
                <MdOutlineWbSunny className="text-[#18cb96]" />
                99.9% Accuracy
              </li>
              <li className="flex items-center gap-2">
                <MdOutlineWbSunny className="text-[#18cb96]" />
                Adaptive Learning
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AiMachineLearningSection;
