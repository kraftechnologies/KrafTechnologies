import React from 'react';
import { motion } from 'framer-motion';
import openInnovationImage from '../assets/image 2.png';
import dollar from '../assets/dollar.png'

const OpenInnovation = () => {
  return (
    <div className="min-h-screen bg-[#001A12] text-gray-100">
      <div className="relative">
        {/* Green tint overlay */}
        <div className="absolute inset-0 bg-[#18CB96] opacity-5"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-5xl font-bold mb-6"
            >
              Fueling the Future with Open Innovation
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto"
            >
              Empowering early-stage startups with capital, infrastructure, and opportunity. Powered by KrafCool
            </motion.p>
            <div className="flex justify-center gap-6">
              <motion.button
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="bg-[#18CB96] text-white px-8 py-3 rounded-lg hover:bg-[#16b585] transition-colors"
              >
                Apply as a Startup
              </motion.button>
              <motion.button
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="border border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-black transition-colors"
              >
                Partner with Us
              </motion.button>
            </div>
          </div>
        </div>
      </div>

      {/* What is Open Innovation section */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left side - Image */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <img 
              src={openInnovationImage} 
              alt="Open Innovation Concept" 
              className="w-full"
            />
          </motion.div>
          
          {/* Right side - Text */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-5xl font-bold mb-6">What is <span className="text-[#18CB96]">Open Innovation?</span></h2>
            <p className="text-gray-300 text-lg mb-8">
              Open Innovation is KrafCool's strategic initiative to empower early-stage startups. Unlike traditional accelerators, it's a multi-tier launchpad that de-risks innovation, integrates new tech into KrafCool's ecosystem, and fuels mutual growth.
            </p>
          </motion.div>
        </div>
        
        {/* Key Advantages Section */}
        <div className="mt-24">
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-xl font-medium mb-12"
          >
            <span className="text-[#18CB96]">KEY</span> ADVANTAGES
          </motion.h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Funding & Mentorship */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-[#001A12] border border-gray-800 rounded-lg p-6 md:col-span-2"
            >
              <div className="flex gap-6">
                <div className="flex-1">
                  <div className="mb-4">
                    <img src={dollar} alt="Funding Icon" className="w-24 h-24" />
                  </div>
                  <h4 className="text-xl font-bold mb-4">Funding Access</h4>
                  <p className="text-gray-400">
                    Fuel your growth with flexible capital — convertible notes, grants, and milestone-based investments tailored to your startup's pace.
                  </p>
                </div>
                <div className="flex-1">
                  <div className="mb-4">
                    <img src="/images/mentorship-icon.svg" alt="Mentorship Icon" className="w-24 h-24" />
                  </div>
                  <h4 className="text-xl font-bold mb-4">Mentorship Network</h4>
                  <p className="text-gray-400">
                    Connect with seasoned experts and executives from KrafCool and partner organizations for hands-on strategic guidance and deep domain insights.
                  </p>
                </div>
              </div>
            </motion.div>
            
            {/* Infrastructure & Tools */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-[#001A12] border border-gray-800 rounded-lg p-6"
            >
              <h4 className="text-xl font-bold mb-4">Infrastructure & Tools</h4>
              <p className="text-gray-400">
                Get subsidized access to compute platforms, cloud services, prototyping labs, and dev environments — everything you need to scale quickly.
              </p>
            </motion.div>
            
            {/* Market Entry Support */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-[#001A12] border border-gray-800 rounded-lg p-6"
            >
              <h4 className="text-xl font-bold mb-4">Market Entry Support</h4>
              <p className="text-gray-400">
                Leverage KrafCool's brand, distribution, and customer network to validate your product, acquire early adopters, and grow your presence fast.
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Why KrafCool Champions Open Innovation section */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-6">Why KrafCool Champions <span className="text-[#18CB96]">Open Innovation?</span></h2>
          <p className="text-gray-300 text-lg max-w-4xl mx-auto">
            At KrafCool, innovation is at the heart of everything we do. Open Innovation empowers us to nurture the brightest early-stage startups while driving strategic growth, technological leadership, and a culture of entrepreneurship — creating value for our partners, investors, and the broader ecosystem.
          </p>
        </motion.div>

        {/* Image Grid with Text Overlay */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Left Column - Large Image */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative h-full"
          >
            <div className="relative h-[500px] overflow-hidden">
              <img 
                src="/images/laptop-workspace.jpg" 
                alt="Workspace with laptop" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-8">
                <h3 className="text-2xl font-bold mb-3">Early Access to High-Growth Equity</h3>
                <p className="text-gray-200">
                  Gain preferential equity positions in disruptive startups across AI, CleanTech, Deep Tech, and Fintech — before they scale.
                </p>
                <div className="flex mt-4">
                  <span className="w-2 h-2 rounded-full bg-[#18CB96] mx-1"></span>
                  <span className="w-2 h-2 rounded-full bg-white/30 mx-1"></span>
                  <span className="w-2 h-2 rounded-full bg-white/30 mx-1"></span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column - 3 Stacked Images */}
          <div className="flex flex-col gap-6">
            {/* Top Image */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="relative h-[160px] overflow-hidden"
            >
              <img 
                src="/images/mentoring-session.jpg" 
                alt="Mentoring session" 
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* Middle Image */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="relative h-[160px] overflow-hidden"
            >
              <img 
                src="/images/business-discussion.jpg" 
                alt="Business discussion" 
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* Bottom Image */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="relative h-[160px] overflow-hidden"
            >
              <img 
                src="/images/team-collaboration.jpg" 
                alt="Team collaboration" 
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </div>

      {/* What Startups Gain from Open Innovation section */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 bg-[#001A12]">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6"
        >
          <h2 className="text-5xl font-bold">What Startups Gain from <span className="text-[#18CB96]">Open Innovation?</span></h2>
          <p className="text-gray-300 mt-4 text-lg">
            From capital and cloud credits to mentorship and market access — unlock everything you need to build, scale, and succeed.
          </p>
          <p className="text-gray-400 mt-2">
            content
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {/* Card 1: Essential Growth Resources */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-[#18CB96] rounded-lg p-8 relative overflow-hidden bg-[radial-gradient(circle_at_top_left,#00271c,transparent),radial-gradient(circle_at_bottom_right,#00271c,transparent)] bg-no-repeat"
          >
            <div className="relative z-10">
              <h3 className="text-xl font-bold mb-4 flex items-center">
                Essential Growth Resources 🚀
              </h3>
              <p className="text-gray-300">
                Access subsidized cloud compute, prototyping labs, and enterprise-grade tools — so you can focus on building, not budgeting.
              </p>
            </div>
            <div className="absolute right-0 bottom-[-40px] text-[#030c0a] text-[200px] font-bold opacity-50 leading-none z-0">
              1
            </div>
          </motion.div>

          {/* Card 2: Flexible Capital Models */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-[#18CB96] rounded-lg p-8 relative overflow-hidden bg-[radial-gradient(circle_at_top_left,#00271c,transparent),radial-gradient(circle_at_bottom_right,#00271c,transparent)] bg-no-repeat"
          >
            <div className="relative z-10">
              <h3 className="text-xl font-bold mb-4 flex items-center">
                Flexible Capital Models 💼
              </h3>
              <p className="text-gray-300">
                Choose from convertible notes, milestone-based grants, or equity-light funding — tailored to fit your growth stage and runway.
              </p>
            </div>
            <div className="absolute right-0 bottom-[-40px] text-[#030c0a] text-[200px] font-bold opacity-50 leading-none z-0">
              2
            </div>
          </motion.div>

          {/* Card 3: Strategic Mentorship */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-[#18CB96] rounded-lg p-8 relative overflow-hidden bg-[radial-gradient(circle_at_top_left,#00271c,transparent),radial-gradient(circle_at_bottom_right,#00271c,transparent)] bg-no-repeat"
          >
            <div className="relative z-10">
              <h3 className="text-xl font-bold mb-4 flex items-center">
                Strategic Mentorship 🧠
              </h3>
              <p className="text-gray-300">
                Work one-on-one with KrafCool's executive leaders and expert advisors who understand what it takes to scale.
              </p>
            </div>
            <div className="absolute right-0 bottom-[-40px] text-[#030c0a] text-[200px] font-bold opacity-50 leading-none z-0">
              3
            </div>
          </motion.div>

          {/* Card 4: Market & Customer Access */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-[#18CB96] rounded-lg p-8 relative overflow-hidden bg-[radial-gradient(circle_at_top_left,#00271c,transparent),radial-gradient(circle_at_bottom_right,#00271c,transparent)] bg-no-repeat"
          >
            <div className="relative z-10">
              <h3 className="text-xl font-bold mb-4 flex items-center">
                Market & Customer Access 🌐
              </h3>
              <p className="text-gray-300">
                Leverage KrafCool's distribution channels, demo opportunities, and brand reach to break into markets faster.
              </p>
            </div>
            <div className="absolute right-0 bottom-[-40px] text-[#030c0a] text-[200px] font-bold opacity-50 leading-none z-0">
              4
            </div>
          </motion.div>

          {/* Card 5: Operational Infrastructure */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="bg-[#18CB96] rounded-lg p-8 relative overflow-hidden bg-[radial-gradient(circle_at_top_left,#00271c,transparent),radial-gradient(circle_at_bottom_right,#00271c,transparent)] bg-no-repeat"
          >
            <div className="relative z-10">
              <h3 className="text-xl font-bold mb-4 flex items-center">
                Operational Infrastructure 🏢
              </h3>
              <p className="text-gray-300">
                Get support across legal, HR, and finance — plus access to co-working spaces and startup software stacks that keep your operations lean and efficient.
              </p>
            </div>
            <div className="absolute right-0 bottom-[-40px] text-[#030c0a] text-[200px] font-bold opacity-50 leading-none z-0">
              5
            </div>
          </motion.div>
        </div>
      </div>

      {/* How To Apply section */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-6">How To <span className="text-[#18CB96]">Apply?</span></h2>
          <p className="text-gray-300 text-lg max-w-4xl mx-auto">
            Join the KrafCool Open Innovation Community
          </p>
        </motion.div>

        <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-8">
          {/* Step 1: Fill Out the Application */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-[#001A12] border border-gray-800 rounded-lg p-6 w-full md:w-64 flex flex-col items-center"
          >
            <div className="bg-[#18CB96]/10 p-6 rounded-full mb-4">
              <img src="/images/application-icon.svg" alt="Application Form" className="w-16 h-16" />
            </div>
            <h4 className="text-[#18CB96] text-center font-medium">Fill Out the Application</h4>
          </motion.div>

          {/* Arrow */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="hidden md:block text-[#18CB96] text-4xl"
          >
            →
          </motion.div>

          {/* Step 2: Get Reviewed & Pitch */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-[#001A12] border border-gray-800 rounded-lg p-6 w-full md:w-64 flex flex-col items-center"
          >
            <div className="bg-[#18CB96]/10 p-6 rounded-full mb-4">
              <img src="/images/review-icon.svg" alt="Review Process" className="w-16 h-16" />
            </div>
            <h4 className="text-[#18CB96] text-center font-medium">Get Reviewed & Pitch</h4>
          </motion.div>

          {/* Arrow */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="hidden md:block text-[#18CB96] text-4xl"
          >
            →
          </motion.div>

          {/* Step 3: Start Scaling with Us */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="bg-[#001A12] border border-gray-800 rounded-lg p-6 w-full md:w-64 flex flex-col items-center"
          >
            <div className="bg-[#18CB96]/10 p-6 rounded-full mb-4">
              <img src="/images/scaling-icon.svg" alt="Scaling Process" className="w-16 h-16" />
            </div>
            <h4 className="text-[#18CB96] text-center font-medium">Start Scaling with Us</h4>
          </motion.div>
        </div>
      </div>
      
    </div>
  );
}

export default OpenInnovation;
