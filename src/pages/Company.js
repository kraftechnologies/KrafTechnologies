import React from "react";

const KrafTechnologies = () => {
  const companies = ["Xflow ScaleKit", "Goldcast", "Drivertain", "Goldcast"];

  const duplicatedCompanies = [...companies, ...companies];

  return (
    <div className="max-w-7xl mx-auto py-10 px-5">
      <h1 className="text-4xl font-bold mb-8">
        Our mission is to make work meaningful
      </h1>

      <p className="text-xl leading-relaxed mb-10">
        Kraf Technologies delivers smart, scalable SaaS solutions that drive
        business growth. Power your digital future with seamless, cloud-based
        innovation from Kraf.
      </p>

      <div className="relative flex items-center my-12">
        <div className="flex-grow border-t border-gray-700"></div>
        <span className="flex-shrink mx-4 font-bold">
          TRUSTED BY AN EPIC COMPANY
        </span>
        <div className="flex-grow border-t border-gray-700"></div>
      </div>

      <div className="relative overflow-hidden py-5">
        <div className="flex animate-scroll">
          {duplicatedCompanies.map((company, index) => (
            <div
              key={`${company}-${index}`}
              className="mx-10 text-2xl font-bold shrink-0"
            >
              {company}
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          animation: scroll 20s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default KrafTechnologies;
