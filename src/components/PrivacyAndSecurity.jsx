import React from "react";
import { FileText, BookMarked } from "lucide-react";
import { FaShield } from "react-icons/fa6";
const points = [
  {
    icon: <FaShield className="h-8 w-8 md:h-12 md:w-12 text-white" />,
    text: "Experts in regulatory compliance for financial services, insurance, and benefits",
  },
  {
    icon: <BookMarked className="h-8 w-8 md:h-12 md:w-12 text-white" />,
    text: "Licensed insurance agency for multiple lines",
  },
  {
    icon: <FileText className="h-8 w-8 md:h-12 md:w-12 text-white" />,
    text: "Audited annually for 400+ privacy and security controls",
  },
];

const PrivacyAndSecurity = () => {
  return (
    <section className="bg-gradient-to-b from-black to-[#18cb96]/10 text-white py-12 px-6 md:px-16 mb-12">
      <div className="bg-[#1b1b1b] rounded-xl p-8">
        <h2 className="text-3xl md:text-5xl font-bold mb-6 py-6 md:py-10 pl-3">
          Compliance, Privacy, Security
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6 md:mt-12">
          {points.map((point, index) => (
            <div
              key={index}
              className="flex-col items-start gap-4 px-3 md:px-6"
            >
              <div className="mt-1">{point.icon}</div>
              <p className="text-xl md:text-2xl mt-4 md:mt-6">{point.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PrivacyAndSecurity;
