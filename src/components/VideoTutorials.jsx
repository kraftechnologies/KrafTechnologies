import React from "react";
import image from "../assets/tutorial.png";
const TutorialCard = () => {
  return (
    <div className="bg-gradient-to-br from-[#010C09] via-[#010C09] to-black py-6">
      <div className="max-w-7xl mx-auto   px-6 md:px-10 rounded-lg shadow-md   font-sans">
        <div className="flex flex-col md:flex-row gap-8 mt-4 justify-between items-center">
          {/* Text Content Section */}
          <div className="flex-1">
            <button className="text-sm font-semibold text-[#18cb96] mb-5 border rounded-lg border-[#18cb96] px-2 py-2">
              Explore our tutorials
            </button>
            <h3 className="text-2xl font-medium text-white mb-5">
              Video Tutorials
            </h3>
            <p className="text-lg text-white mb-5 ">
              Looking for some video tutorials on how to use{" "}
              <span className="text-[#18cb96]">resources</span>? We've got you
              covered.
            </p>
            <button className="bg-[#18cb96] hover:bg-[#18bb96] font-semibold text-grey-800 py-3 px-6 rounded-lg text-sm transition-colors">
              Watch tutorials
            </button>
          </div>

          {/* Image Section */}
          <div className="flex-1 flex items-center justify-center">
            <img
              src={image}
              alt="Video tutorials placeholder"
              className="w-[80%] h-[80%] rounded"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TutorialCard;
