import React from "react";
import growthImage from "../assets/growth.png";

const BusinessGrowthSection = () => {
  return (
    <div className="bg-gradient-to-br from-[#010C09] via-[#010C09] to-black text-white font-sans]">
      <div className="text-white py-12 px-6 flex flex-col lg:flex-row items-stretch  justify-between gap-6 max-w-7xl mx-auto px-3 py-12">
        <div className="max-w-xl">
          <h2 className="text-5xl font-semibold leading-snug">
            Driving <span className="text-[#18cb96]">Growth</span> for{" "}
            <span className="text-[#18cb96]">Businesses</span> of All Sizes
          </h2>
          <p className="text-2xl text-white mt-4">
            Led by experts and backed by tech, we are helping businesses hit
            their revenue goals in an ever-evolving digital landscape.
          </p>
          <div className="flex flex-col gap-4 mt-6">
            <button className="bg-[#18cb96] text-black text-xl font-semibold py-4 rounded w-[50%]">
              Startups
            </button>
            <button className="bg-[#18cb96] text-black text-xl py-4 font-semibold rounded w-[70%]">
              Enterprises
            </button>
            <button className="bg-[#18cb96] text-black text-xl py-4 font-semibold rounded w-[90%]">
              Agencies
            </button>
          </div>
        </div>
        <img
          src={growthImage}
          alt="Business Growth"
          className="rounded-md w-full max-w-md"
        />
      </div>
    </div>
  );
};

export default BusinessGrowthSection;
