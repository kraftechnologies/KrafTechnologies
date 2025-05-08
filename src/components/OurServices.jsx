import React from "react";
const OurServices = () => {
  return (
    <div className="bg-gradient-to-br from-[#010C09] via-[#010C09] to-black text-white font-sans">
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

      {/* Content container */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Section Title */}
        <div className="text-left mb-8">
          <h2 className="text-[#18cb96] text-6xl font-semibold">
            Our Services
          </h2>
          <h1 className="text-6xl font-semibold mt-3">
            Pioneering SaaS Solutions
          </h1>
        </div>

        {/* Explore Button */}
        <button className="bg-[#18cb96] hover:bg-[#18cccc] text-black font-medium py-4 px-6 rounded-full mb-10 w-[20%] min-w-[150px]">
          Explore Now
        </button>

        {/* Image Placeholder */}
        <div className="mb-10">
          <img
            src="/PeopleWorking.png"
            alt="People working in tech environment"
            className="rounded-md w-full object-cover h-[300px]"
          />
        </div>

        {/* Description Paragraph */}
        <p className="xsm:text-2xl md:text-3xl leading-normal max-w-[100%] p-0">
          We deliver cutting-edge{" "}
          <span className="text-[#18cb96] font-semibold">
            Software-as-a-Service
          </span>{" "}
          solutions that transform{" "}
          <span className="text-[#18cb96] font-semibold">B2B</span> enterprises.
          We’re not just solving today’s{" "}
          <span className="text-[#18cb96] font-semibold">challenges</span> —
          we’re architecting tomorrow’s{" "}
          <span className="text-[#18cb96] font-semibold">Possibilities</span>.
        </p>
      </div>
    </div>
  );
};

export default OurServices;
