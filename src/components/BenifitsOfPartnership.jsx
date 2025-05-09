import React from "react";
const BenefitsOfPartnership = () => {
  return (
    <div className="bg-[#010C09] text-white font-sans">
      {/* Top banner
      <div className="bg-[#18cb96] text-center text-black text-sm py-2 font-semibold">
        <div className="w-full text-black text-sm  flex items-center justify-center gap-2">
          <IoShieldOutline className="text-black font-xl text-lg" />
          <span>
            Secure Payments: High Security payment solutions with Kaaf
            Technologies.
          </span>
        </div>
      </div> */}

      {/* Main Content */}
      <div className="w-full text-center py-12 p-6 bg-gradient-to-b from-black to-[#18cb96]/10">
        {/* Header Text */}
        <div className="space-y-6 w-full">
          <p className="text-white text-xl font-medium">
            Partner with Kraf Technology
          </p>
          <h1 className="text-4xl md:text-7xl font-bold leading-tight py-12">
            Benefits that make <br className="hidden sm:block" /> the difference
          </h1>
          <p className="text-3xl md:text-4xl text-white max-w-5xl mx-auto">
            Help independent contractors on your platform take care of health,
            dental and more automatically. At no cost to you.
          </p>
          <button className="bg-[#18cb96] hover:bg-[#18cbcc] text-black font-semibold text-xl px-12 py-4 rounded-full transition duration-300">
            Get in Touch
          </button>
        </div>

        {/* Secondary Section */}
        <div className="space-y-4 max-w-7xl mx-auto px-4 py-12 text-left">
          <h2 className="text-3xl md:text-6xl  font-bold text-left  w-[80%] min-w-[200px] mb-6">
            The only all-in-one portable benefits platform
          </h2>
          <p className="text-2xl md:text-4xl text-white text-left ">
            Everything independents need in one easy-to-use platform
          </p>
          <button className="bg-[#18cb96] text-left left-0 hover:bg-[#18cbcc] text-black text-xl font-semibold px-12 py-4 rounded-full transition duration-300 ">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default BenefitsOfPartnership;
