import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import ServiceCard from "../components/ServiceCard";
import { useNavigate } from "react-router-dom";

const services = [
  {
    id: 1,
    title: "AI & Automation",
    description: "Empower your business with AI-driven automation and predictive analytics.",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <rect x="3" y="11" width="18" height="10" rx="2" />
      <circle cx="12" cy="5" r="2" />
      <path d="M12 7v4" />
      <line x1="8" y1="16" x2="8" y2="16" />
      <line x1="16" y1="16" x2="16" y2="16" />
      <path d="M9 7L8 3" />
      <path d="M15 7l1-4" />
    </svg>`,
    features: [
      "AI-Driven Automation Tools",
      "Predictive Analytics",
      "Intelligent Chatbots",
      "Machine Learning Models",
      "Process Optimization",
    ],
  },
  {
    id: 2,
    title: "Web3 & Blockchain",
    description: "Secure, decentralized solutions for the future of digital transactions.",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <rect x="2" y="7" width="6" height="10" rx="1" />
      <rect x="9" y="3" width="6" height="18" rx="1" />
      <rect x="16" y="7" width="6" height="10" rx="1" />
    </svg>`,
    features: [
      "Smart Contract Development",
      "Decentralized Apps (dApps)",
      "Blockchain Payments",
      "Web3 Integration",
      "Tokenization",
    ],
  },
  {
    id: 3,
    title: "Web Development",
    description: "Dynamic, responsive web applications for seamless user experiences.",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
      <line x1="12" y1="18" x2="12" y2="18" />
    </svg>`,
    features: [
      "Full-Stack Development",
      "Progressive Web Apps",
      "Responsive Design",
      "CMS Solutions",
      "eCommerce Platforms",
    ],
  },
  {
    id: 4,
    title: "Cloud & DevOps",
    description: "Scalable cloud solutions with automated deployment pipelines.",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M8 17.5a6 6 0 0 0 8.8-8.3A5 5 0 1 0 8.2 4.2a5 5 0 0 0 .1 7.8A6 6 0 0 0 8 17.5z" />
      <path d="M13 15h2a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-6a2 2 0 0 1-2-2v-2a2 2 0 0 1 2-2h2" />
    </svg>`,
    features: [
      "Cloud-Native Development",
      "CI/CD Pipelines",
      "Serverless Architecture",
      "Cloud Migration",
      "Infrastructure Optimization",
    ],
  },
  {
    id: 5,
    title: "Industry Solutions",
    description: "Tailored software for fintech, healthcare, retail, and more.",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z" />
      <path d="M3 9V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v4" />
      <path d="M12 11v8" />
      <path d="M8 11v8" />
      <path d="M16 11v8" />
    </svg>`,
    features: [
      "Fintech Applications",
      "Telemedicine Platforms",
      "AR Shopping Experiences",
      "Learning Management Systems",
      "Logistics Automation",
    ],
  },
];

const WhatWeOffer = () => {
  const ref = useRef(null);
  const [isInView, setIsInView] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.2 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  const handleContactClick = () => {
    navigate('/contact-us');
  };

  return (
    <section ref={ref} className="w-full py-8 bg-black text-white relative overflow-hidden">
      <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-[#18CB96]/20 filter blur-[100px] opacity-40"></div>
      <div className="absolute bottom-1/4 right-1/3 w-96 h-96 rounded-full bg-[#18CB96]/10 filter blur-[120px] opacity-30"></div>

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row px-4 md:px-8 lg:px-16 py-16 md:py-0">
        <div className="md:w-1/2 flex flex-col justify-center space-y-8 md:pr-8 z-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
            transition={{ duration: 0.5 }}
            className="text-[#18cb96] font-medium text-xl md:text-2xl tracking-wide"
          >
            WHAT WE OFFER
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
              Innovate, Automate,
              <br />
              Accelerate
            </h1>

            <p className="text-gray-300 mt-6 text-lg md:text-xl max-w-xl leading-relaxed">
              At Kraf Technologies, we deliver scalable SaaS solutions to drive your digital transformation, automate processes, and accelerate growth.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="backdrop-blur-md bg-gray-900/80 border border-gray-800 rounded-xl p-8 mt-12 relative overflow-hidden"
          >
            <div className="absolute -top-20 -left-20 w-40 h-40 bg-[#18CB96]/20 rounded-full filter blur-[60px]"></div>

            <div className="relative z-10">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-[#18CB96]/20 flex items-center justify-center">
                  <div
                    dangerouslySetInnerHTML={{
                      __html: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
                        <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
                        <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
                        <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
                      </svg>`,
                    }}
                  />
                </div>
                <h3 className="ml-4 text-2xl font-bold tracking-tight">
                  Your <span className="text-[#18CB96]">Tech Partner</span> for Growth
                </h3>
              </div>

              <p className="text-gray-300 mb-8 leading-relaxed">
                From startups to enterprises, we craft innovative solutions to scale your vision.
              </p>

              <button 
                onClick={handleContactClick}
                className="bg-gradient-to-r from-[#18CB96] to-[#18CB96] text-white rounded-full px-8 py-3 font-medium flex items-center group hover:shadow-lg hover:shadow-[#18CB96]/30 transition-all duration-300 transform hover:-translate-y-1"
              >
                GET IN TOUCH
                <div className="ml-2 w-5 h-5 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white/30 transition-colors">
                  <ArrowUpRight className="w-3 h-3 text-white" />
                </div>
              </button>
            </div>
          </motion.div>
        </div>

        <div className="md:w-1/2 relative overflow-hidden h-[600px] md:h-[700px] mt-12 md:mt-0 z-10">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-full h-full max-w-md">
              <AutoScrollCards services={services} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const AutoScrollCards = ({ services }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.5 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  return (
    <div 
      ref={containerRef}
      className="relative h-full overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="absolute bottom-0 left-0 w-full">
        <div className={`animate-scroll-up ${isHovered || !isVisible ? 'pause-animation' : ''}`}>
          {services.map((service, index) => (
            <motion.div
              key={`scroll-1-${service.id}`}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="mb-8"
            >
              <ServiceCard service={service} />
            </motion.div>
          ))}
        </div>

        <div className={`animate-scroll-up ${isHovered || !isVisible ? 'pause-animation' : ''}`}>
          {services.map((service, index) => (
            <motion.div
              key={`scroll-2-${service.id}`}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
              className="mb-8"
            >
              <ServiceCard service={service} />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhatWeOffer;