import React from 'react';
import { motion } from 'framer-motion';
import { Lightbulb, Users, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';

const features = [
  {
    icon: Lightbulb,
    title: 'Funding & Development',
    description: 'Fueling bold ideas with resources and expertise.',
  },
  {
    icon: Users,
    title: 'Mentorship & Resources',
    description: 'Guiding innovators with wisdom and tools.',
  },
  {
    icon: Globe,
    title: 'Partnership Models',
    description: 'Connecting solutions to global opportunities.',
  },
];

function FeatureCard({ feature, index, isLast }) {
  const Icon = feature.icon;

  return (
    <div className="relative flex items-center">
      <motion.div
        className="relative bg-gray-900/70 backdrop-blur-md rounded-2xl p-6 font-jost border border-[#18CB96]/30 hover:shadow-[#18CB96]/40 transition-all duration-500 w-72 text-center"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: index * 0.3 }}
        style={{
          background: 'radial-gradient(circle at 50% 50%, rgba(24, 203, 150, 0.15), rgba(0, 0, 0, 0.9))',
        }}
      >
        <div className="absolute inset-0 rounded-2xl bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <div className="relative z-10 flex flex-col items-center space-y-4">
          <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[#18CB96]/20 group-hover:scale-110 transition-transform duration-300">
            <Icon className="w-6 h-6 text-[#18CB96]" />
          </div>
          <h3 className="text-lg font-medium text-white group-hover:text-[#18CB96] transition-colors duration-300">
            {feature.title}
          </h3>
          <p className="text-gray-300 text-sm leading-relaxed">{feature.description}</p>
        </div>
      </motion.div>
      {!isLast && (
        <svg
          className="w-16 h-8 text-[#18CB96]"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 12h16m-4 4l4-4m-4-4l4 4"
          />
        </svg>
      )}
    </div>
  );
}

export default function OpenInnovation() {
  return (
    <section className="relative bg-black py-16 md:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden font-jost">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(to right, rgba(24, 203, 150, 0.1) 1px, transparent 1px),
                             linear-gradient(to bottom, rgba(24, 203, 150, 0.1) 1px, transparent 1px)`,
            backgroundSize: '2rem 2rem',
          }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-white mb-4 tracking-tight">
            Open Innovation & Business Collaboration
          </h2>
          <p className="text-base md:text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Kraf Technologies believes in open innovation, where businesses with great ideas but limited
            resources can collaborate with us to bring their vision to life.
          </p>
        </motion.div>

        {/* Linear Feature Layout with Lines and Arrows */}
        <div className="flex justify-center items-center gap-4 overflow-x-auto pb-4 scrollbar-hide">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              feature={feature}
              index={index}
              isLast={index === features.length - 1}
            />
          ))}
        </div>

        {/* CTA with Buttons */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
        >
          <p className="text-lg text-gray-300 mb-6">
            Ready to transform your ideas into reality? Let's collaborate!
          </p>
          <div className="flex justify-center gap-4">
            <Link
              to="/open-innovation"
              className="px-6 py-3 bg-gradient-to-r from-[#18CB96] to-[#18CB96]/80 text-white font-semibold rounded-full shadow-lg hover:shadow-[#18CB96]/50 transition-all duration-300"
            >
              Learn More
            </Link>
            <Link
              to="/open-innovation/#apply-now"
              className="px-6 py-3 bg-gray-800 text-[#18CB96] font-semibold rounded-full border border-[#18CB96]/50 hover:bg-[#18CB96]/10 hover:text-[#18CB96] transition-all duration-300"
            >
              Apply Now
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}