import React from "react";

const HelpSection = () => {
  return (
    <div className="bg-gradient-to-br from-[#010C09] via-[#010C09] to-black">
      <section className=" py-16 px-6 md:px-10 flex flex-col md:flex-row items-center justify-between gap-10 max-w-7xl mx-auto">
        <div>
          <h2 className="text-4xl md:text-5xl font-bold text-grey-800 mb-4">
            Looking for help?
          </h2>
          <p className=" text-grey-800 mb-4 max-w-2xl">
            Get instant access to all of these features and more, so you can
            have more productive meetings without the back-and-forth
          </p>
        </div>
        <div className="flex gap-4">
          <button className=" text-grey-800 px-6 py-3 bg-[#18cb96] hover:bg-[#18bb96] rounded-md font-semibold shadow-md transition">
            Help Center
          </button>
          <button className="border border-[#18cb96] bg-transparent hover:bg-gray-800/50 text-grey-800 px-6 py-3 rounded-md font-semibold transition">
            Contact Us
          </button>
        </div>
      </section>
    </div>
  );
};

export default HelpSection;
