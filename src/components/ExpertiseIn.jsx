import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  BrainCircuit,
  Server,
  ShieldCheck,
  Blocks,
  Pencil,
  Code,
  Cloud,
  Lock,
  FileCode,
  Wand,
  PenTool,
  Terminal,
} from 'lucide-react';

// Technologies associated with each subcategory (using Lucide icons as placeholders)
const techLogos = {
  'AI & ML Model Development': [
    { icon: BrainCircuit, name: 'TensorFlow' },
    { icon: Wand, name: 'PyTorch' },
    { icon: Code, name: 'Python' },
  ],
  'MERN & Next.js': [
    { icon: Code, name: 'React' },
    { icon: Code, name: 'Node.js' },
    { icon: Code, name: 'Next.js' },
  ],
  'Cloud & DevOps': [
    { icon: Cloud, name: 'AWS' },
    { icon: Cloud, name: 'Docker' },
    { icon: Terminal, name: 'Kubernetes' },
  ],
  'Ethical Hacking & Security': [
    { icon: Lock, name: 'Kali Linux' },
    { icon: ShieldCheck, name: 'Wireshark' },
    { icon: Lock, name: 'Metasploit' },
  ],
  'Smart Contracts': [
    { icon: Blocks, name: 'Ethereum' },
    { icon: FileCode, name: 'Solidity' },
    { icon: Code, name: 'Truffle' },
  ],
  'UI/UX & Branding': [
    { icon: PenTool, name: 'Figma' },
    { icon: Pencil, name: 'Adobe XD' },
    { icon: PenTool, name: 'Sketch' },
  ],
};

const expertiseAreas = [
  { icon: BrainCircuit, text: 'Artificial Intelligence & LLMs' },
  { icon: Server, text: 'Full Stack Development' },
  { icon: ShieldCheck, text: 'Cybersecurity' },
  { icon: Blocks, text: 'Blockchain & Web3' },
  { icon: Pencil, text: 'UI/UX & Product Design' },
];

const subcategories = [
  { category: 'Artificial Intelligence & LLMs', icon: Wand, text: 'AI & ML Model Development' },
  { category: 'Full Stack Development', icon: Code, text: 'MERN & Next.js' },
  { category: 'Full Stack Development', icon: Cloud, text: 'Cloud & DevOps' },
  { category: 'Cybersecurity', icon: Lock, text: 'Ethical Hacking & Security' },
  { category: 'Blockchain & Web3', icon: FileCode, text: 'Smart Contracts' },
  { category: 'UI/UX & Product Design', icon: PenTool, text: 'UI/UX & Branding' },
];

function ExpertiseCard({ icon: Icon, text, isActive, onClick }) {
  return (
    <motion.div
      className={`flex items-center gap-4 p-4 rounded-xl transition-all duration-300 cursor-pointer ${
        isActive
          ? 'bg-white text-teal-500 shadow-lg'
          : 'text-gray-300 hover:text-teal-400 hover:bg-teal-500/10'
      }`}
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      onClick={onClick}
    >
      <Icon className={`w-6 h-6 ${isActive ? 'text-teal-500' : 'text-gray-300 group-hover:text-teal-400'}`} />
      <span className="font-medium">{text}</span>
      {isActive && <ArrowRight className="ml-auto text-teal-500" />}
    </motion.div>
  );
}

function SubcategoryCard({ icon: Icon, text }) {
  return (
    <motion.div
      className="bg-gray-800/50 backdrop-blur-md rounded-xl p-3 transition-all duration-300 border border-teal-500/20 hover:shadow-teal-500/30 cursor-pointer"
      style={{
        background:
          'radial-gradient(circle at 50% 50%, rgba(24, 203, 150, 0.1), rgba(0, 0, 0, 0.9))',
      }}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
      whileHover={{ scale: 1.05 }}
    >
      <div className="flex flex-col items-center text-center gap-1">
        <div className="bg-teal-500/20 p-2 rounded-full shadow-md">
          <Icon className="w-4 h-4 text-teal-400" />
        </div>
        <h3 className="text-xs font-medium text-white hover:text-teal-400 transition-colors duration-300">
          {text}
        </h3>
        <div className="flex flex-wrap justify-center gap-1 mt-1">
          {techLogos[text]?.map((tech, index) => (
            <div key={index} className="flex items-center gap-1">
              <tech.icon className="w-3 h-3 text-teal-400" />
              <span className="text-[10px] text-gray-400">{tech.name}</span>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

function ExpertiseSection() {
  const [activeExpertise, setActiveExpertise] = useState('Artificial Intelligence & LLMs');

  // Filter subcategories based on the active expertise
  const filteredSubcategories = subcategories.filter(
    (subcategory) => subcategory.category === activeExpertise
  );

  return (
    <section className="relative bg-black py-16 md:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden font-jost">
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
        <motion.div
          className="mb-12 md:mb-16"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-teal-400 mb-4 tracking-tight">
            We Have Expertise In
          </h2>
          <p className="text-base md:text-lg text-gray-300 max-w-3xl leading-relaxed">
            Backed by 675+ digital experts, Kraf Technologies is committed to delivering scalable,
            robust, and advanced solutions that meet the specific needs of our clients.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left Section: Expertise */}
          <div className="space-y-4">
            {expertiseAreas.map((area, index) => (
              <ExpertiseCard
                key={index}
                icon={area.icon}
                text={area.text}
                isActive={area.text === activeExpertise}
                onClick={() => setActiveExpertise(area.text)}
              />
            ))}
          </div>

          {/* Right Section: Subcategories */}
          <div className="grid grid-cols-2 gap-3">
            {filteredSubcategories.length > 0 ? (
              filteredSubcategories.map((subcategory, index) => (
                <SubcategoryCard
                  key={index}
                  icon={subcategory.icon}
                  text={subcategory.text}
                />
              ))
            ) : (
              <p className="text-gray-400 col-span-2 text-center">
                No subcategories available for this expertise.
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ExpertiseSection;