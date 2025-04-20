import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { FaDigitalTachograph, FaCogs, FaServer, FaDollarSign, FaPuzzlePiece } from 'react-icons/fa';
import { ArrowRight, ArrowLeft } from 'lucide-react';

const solutions = [
  {
    icon: FaDigitalTachograph,
    title: 'Digital Transformation',
    description: 'Helping businesses transition to digital-first approaches for competitive advantage.',
  },
  {
    icon: FaCogs,
    title: 'Process Automation',
    description: 'AI-driven automation to reduce costs and increase operational efficiency.',
  },
  {
    icon: FaServer,
    title: 'Scalable Architecture',
    description: 'Building software with scalability in mind to support business growth.',
  },
  {
    icon: FaDollarSign,
    title: 'Cost-Effective Development',
    description: 'Providing high-quality software solutions at startup-friendly costs.',
  },
  {
    icon: FaPuzzlePiece,
    title: 'Seamless Integration',
    description: 'Ensuring our solutions integrate smoothly with existing software ecosystems.',
  },
];

function SolutionCard({ solution, index }) {
  const Icon = solution.icon;

  return (
    <motion.div
      className="relative group bg-gray-900/50 backdrop-blur-md rounded-2xl p-6 transition-all duration-700 font-jost border border-gray-800 hover:shadow-xl hover:shadow-[#18CB96]/20 flex-shrink-0 w-80"
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ 
        duration: 0.5,
        delay: index * 0.01,
        ease: "easeOut"
      }}
      viewport={{ once: true, margin: "-100px" }}
      style={{
        background: 'radial-gradient(circle at 10% 20%, rgba(24, 203, 150, 0.1), rgba(0, 0, 0, 0.9))',
      }}
    >
      <div className="absolute inset-0 rounded-2xl bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      <div className="relative z-10 flex flex-col items-center text-center space-y-4">
        <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-[#18CB96]/10 group-hover:scale-110 transition-transform duration-300">
          <Icon className="text-3xl text-[#18CB96]" />
        </div>
        <h3 className="text-xl font-semibold text-white group-hover:text-[#18CB96] transition-colors duration-300">
          {solution.title}
        </h3>
        <p className="text-gray-300 leading-relaxed">{solution.description}</p>
      </div>
    </motion.div>
  );
}

export default function HowWeHelp() {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    const container = scrollRef.current;
    if (container) {
      const scrollAmount = direction === 'left' ? -300 : 300; // Scroll by 300px
      container.scrollTo({
        left: container.scrollLeft + scrollAmount,
        behavior: 'smooth',
      });
    }
  };

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
            How We Help Organizations Scale
          </h2>
          <p className="text-base md:text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Empowering businesses with innovative solutions to drive growth and efficiency.
          </p>
        </motion.div>

        {/* Scrollable Solutions Row */}
        <div className="relative">
          <div
            ref={scrollRef}
            className="flex overflow-x-auto gap-8 pb-4 snap-x snap-mandatory scrollbar-hide"
            style={{ scrollSnapType: 'x mandatory' }}
          >
            {solutions.map((solution, index) => (
              <SolutionCard key={index} solution={solution} index={index} />
            ))}
          </div>

          {/* Navigation Buttons */}
          <motion.button
            onClick={() => scroll('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 p-3 bg-[#18CB96]/80 rounded-full shadow-lg hover:bg-[#18CB96] transition-all duration-300"
            whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
            animate={{ scale: 1, transition: { duration: 0.2 } }}
          >
            <ArrowLeft className="w-6 h-6 text-white" />
          </motion.button>
          <motion.button
            onClick={() => scroll('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 p-3 bg-[#18CB96]/80 rounded-full shadow-lg hover:bg-[#18CB96] transition-all duration-300"
            whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
            animate={{ scale: 1, transition: { duration: 0.2 } }}
          >
            <ArrowRight className="w-6 h-6 text-white" />
          </motion.button>
        </div>
      </div>
    </section>
  );
}