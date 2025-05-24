import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Check } from "lucide-react";
import { useNavigate } from "react-router-dom";
const cn = (...classes) => classes.filter(Boolean).join(" ");

const ServiceCard = ({ service }) => {
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();
  return (
    <motion.div
      className={cn(
        "rounded-xl overflow-hidden cursor-pointer relative group",
        "backdrop-blur-md bg-gray-900/80 border border-gray-800",
        "transition-all duration-300"
      )}
      whileHover={{
        scale: 1.02,
        boxShadow: "0 0 20px 5px rgba(24, 203, 150, 0.15)",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={cn(
          "absolute inset-0 bg-gradient-to-r from-teal-500/20 to-transparent opacity-0 transition-opacity duration-300",
          isHovered ? "opacity-100" : "opacity-0"
        )}
      ></div>

      {/* <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-teal-500/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
        <ArrowUpRight className="w-4 h-4 text-teal-500" />
      </div> */}

      <div className="p-6 relative z-10">
        <div className="flex items-start">
          <div className="w-12 h-12 rounded-full bg-teal-500/20 flex items-center justify-center">
            <div
              className="w-6 h-6"
              dangerouslySetInnerHTML={{ __html: service.icon }}
            />
          </div>

          <div className="ml-4">
            <h3 className="text-xl font-bold text-white">{service.title}</h3>
            <p className="text-gray-300 mt-2 text-sm md:text-base">
              {service.description}
            </p>

            <div className="mt-4 space-y-2">
              {service.features
                .slice(0, 3)
                .map(([featureName, link], index) => (
                  <div key={index} className="flex items-center group">
                    <div className="w-5 h-5 rounded-full bg-teal-500/20 flex items-center justify-center mr-2">
                      <Check className="w-3 h-3 text-teal-500" />
                    </div>
                    <span className="text-gray-300 text-sm">{featureName}</span>
                    {
                      <button
                        className="inline w-4 h-4 rounded-full bg-teal-500/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity ml-2"
                        onClick={() => {
                          navigate(link);
                        }}
                        aria-label={`Go to ${featureName}`}
                      >
                        <ArrowUpRight className="w-4 h-4 text-teal-500" />
                      </button>
                    }
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ServiceCard;
