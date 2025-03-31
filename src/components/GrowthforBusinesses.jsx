import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, ArrowUpRight, ChevronRight } from "lucide-react";

// Business category data with avatars added
const businessCategories = [
  {
    id: "startups",
    label: "Startups",
    title: "Empowering Startups with Cutting-Edge Tech",
    description:
      "We help startups build scalable, AI-driven solutions with robust infrastructure and strategic guidance to accelerate growth.",
    services: [
      "AI-powered product development",
      "Cloud-native application deployment",
      "MVP design and launch strategies",
      "Investor-ready technology roadmaps",
    ],
    testimonial: {
      text: "Kraf Technologies transformed our startup with AI automation, reducing development time by 60%.",
      author: "Rohan Mehta",
      role: "CEO, InnovateX",
      avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=100&auto=format&fit=crop",
    },
    stats: [
      { value: "95%", label: "Tech-Enabled Startup Success Rate" },
      { value: "5x", label: "Growth Acceleration" },
    ],
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "enterprises",
    label: "Enterprises",
    title: "Enterprise Digital Transformation & AI Integration",
    description:
      "We drive digital transformation for enterprises with AI, blockchain, and cloud-based innovations, ensuring efficiency and scalability.",
    services: [
      "AI-driven process automation",
      "Legacy system modernization",
      "Enterprise cloud migration",
      "Blockchain-based data security",
    ],
    testimonial: {
      text: "Their AI integration saved us over $6M annually by automating workflows and optimizing data insights.",
      author: "Anand Verma",
      role: "CTO, NexaCorp",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=100&auto=format&fit=crop",
    },
    stats: [
      { value: "40%", label: "Operational Cost Reduction" },
      { value: "98%", label: "Enterprise Client Satisfaction" },
    ],
    image: "https://images.unsplash.com/photo-1551135049-8a33b5883817?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "agencies",
    label: "Agencies",
    title: "Next-Gen Solutions for Agencies & SaaS Providers",
    description:
      "We enable agencies and SaaS businesses to scale by providing AI-driven automation, cloud-native infrastructures, and seamless integrations.",
    services: [
      "AI-powered customer experience automation",
      "End-to-end SaaS development",
      "Cloud-based scalability solutions",
      "Data-driven marketing optimization",
    ],
    testimonial: {
      text: "With Kraf Technologies' AI solutions, we increased efficiency by 70% and doubled our client conversions.",
      author: "Neha Kapoor",
      role: "Managing Director, Vision Digital",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=100&auto=format&fit=crop",
    },
    stats: [
      { value: "87%", label: "Client Retention Rate" },
      { value: "4x", label: "Revenue Growth with AI" },
    ],
    image: "https://plus.unsplash.com/premium_photo-1661757413819-2ca3fb499c0d?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

// Utility function for classNames
const cn = (...classes) => classes.filter(Boolean).join(" ");

const BusinessGrowthShowcase = () => {
  const [activeTab, setActiveTab] = useState("startups");
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} className="w-full py-8 bg-black overflow-hidden">
      <div className="container px-4 mx-auto max-w-[1400px]">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-white mb-4 tracking-tight">
            Driving Growth for Every Business
          </h2>
          <p className="text-base md:text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Tailored strategies and expert solutions to help businesses of all sizes achieve exceptional results.
          </p>
        </motion.div>

        {/* Tabs and Content */}
        <div className="w-full">
          <div className="flex justify-center mb-12 overflow-x-auto pb-2 scrollbar-hide">
            <div className="h-14 p-1 bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-full flex gap-1">
              {businessCategories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveTab(category.id)}
                  className={cn(
                    "h-12 px-6 md:px-8 rounded-full text-sm md:text-base font-medium transition-all",
                    activeTab === category.id
                      ? "bg-gradient-to-r from-[#18cb96] to-[#18cb96] text-white shadow-lg shadow-[#18cb96]/20"
                      : "text-gray-300 hover:text-[#18cb96]"
                  )}
                >
                  {category.label}
                </button>
              ))}
            </div>
          </div>

          <AnimatePresence mode="wait">
            {businessCategories.map((category) => (
              activeTab === category.id && (
                <motion.div
                  key={category.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center min-h-[500px]"
                >
                  {/* Left Content Section */}
                  <div className=" pt-6 md:pt-0 space-y-8 order-2 lg:order-1">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2, duration: 0.5 }}
                    >
                      <h3 className="text-2xl md:text-3xl lg:text-4xl font-medium text-white mb-4 tracking-tight">
                        {category.title}
                      </h3>
                      <p className="text-base md:text-lg text-gray-300 mb-8 leading-relaxed">
                        {category.description}
                      </p>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4, duration: 0.5 }}
                      className="space-y-4"
                    >
                      <h4 className="text-lg md:text-xl font-medium text-white">Key Services</h4>
                      <ul className="space-y-3">
                        {category.services.map((service, index) => (
                          <motion.li
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.5 + index * 0.1, duration: 0.4 }}
                            className="flex items-center gap-3 text-gray-200"
                          >
                            <div className="flex-shrink-0 w-5 h-5 rounded-full bg-[#18cb96]/20 flex items-center justify-center">
                              <Check className="h-3 w-3 text-[#18cb96]" />
                            </div>
                            <span>{service}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6, duration: 0.5 }}
                      className="pt-4"
                    >
                      <button className="group flex items-center gap-2 text-[#18cb96] font-medium hover:text-[#18cb96]/70 transition-colors">
                        <span>Learn more about our approach</span>
                        <ChevronRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </button>
                    </motion.div>
                  </div>

                  {/* Right Visual Section */}
                  <div className="relative h-[400px] md:h-[500px] order-1 lg:order-2">
                    {/* Main Image */}
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.3, duration: 0.6 }}
                      className="absolute top-1/2 left-1/3 md:left-1/2 transform md:-translate-x-1/2 -translate-x-1/3 -translate-y-1/2 z-10"
                    >
                      <div className="relative w-56 h-56 md:w-72 md:h-72 rounded-full overflow-hidden border-4 border-[#18cb96] shadow-xl shadow-[#18cb96]/20">
                        <img
                          src={category.image}
                          alt={`${category.label} business`}
                          className="object-cover w-full h-full"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                      </div>
                    </motion.div>

                    {/* Testimonial Bubble */}
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8, y: 30 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      transition={{ delay: 0.6, duration: 0.5 }}
                      whileHover={{ y: -5, transition: { duration: 0.2 } }}
                      className="absolute top-0 right-1/5 md:right-1/4 lg:right-0 md:right-10 bg-gray-900/80 backdrop-blur-sm border border-gray-800 p-5 rounded-2xl shadow-lg max-w-[320px] z-20"
                    >
                      <div className="relative">
                        <p className="text-gray-200 italic mb-4 text-sm md:text-base">
                          "{category.testimonial.text}"
                        </p>
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full bg-gray-700 overflow-hidden relative">
                            <img
                              src={category.testimonial.avatar}
                              alt={category.testimonial.author}
                              className="object-cover w-full h-full"
                            />
                          </div>
                          <div>
                            <p className="font-medium text-white text-sm">{category.testimonial.author}</p>
                            <p className="text-xs text-gray-400">{category.testimonial.role}</p>
                          </div>
                        </div>
                        <motion.div
                          animate={{ x: [0, 10, 0], y: [0, -5, 0] }}
                          transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
                          className="absolute -bottom-12 -left-8"
                        >
                          <ArrowUpRight className="h-6 w-6 text-[#18cb96]" />
                        </motion.div>
                      </div>
                    </motion.div>

                    {/* Stats Cards */}
                    {category.stats.map((stat, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.7 + index * 0.2, duration: 0.5 }}
                        className={`absolute ${
                          index === 0 ? "bottom-10 left-0 md:left-10" : "bottom-40 right-0 md:right-20"
                        } bg-gradient-to-br from-[#18cb96] to-[#18cb96] p-3 md:p-4 rounded-xl shadow-lg shadow-[#18cb96]/20 text-white text-center w-28 md:w-32 z-20`}
                      >
                        <p className="text-xl md:text-2xl font-bold">{stat.value}</p>
                        <p className="text-xs md:text-sm font-medium opacity-90">{stat.label}</p>
                      </motion.div>
                    ))}

                    {/* Background Elements */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 0.5 }}
                      transition={{ delay: 0.2, duration: 0.8 }}
                      className="absolute inset-0 z-0"
                    >
                      <div className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full bg-[#18cb96] opacity-10 blur-xl" />
                      <div className="absolute bottom-1/4 right-1/4 w-40 h-40 rounded-full bg-[#18cb96] opacity-10 blur-xl" />
                      <div className="absolute top-1/2 left-1/2 w-24 h-24 rounded-full bg-[#18cb96] opacity-15 blur-lg" />
                    </motion.div>
                  </div>
                </motion.div>
              )
            ))}
          </AnimatePresence>
        </div>

        {/* Footer Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-16 md:mt-20 text-center"
        >
          <p className="text-base md:text-lg text-gray-300 mb-6">Ready to accelerate your business growth?</p>
          <button className="px-8 py-3 bg-gradient-to-r from-[#18cb96] to-[#18cb96]/80 text-white rounded-full font-medium hover:shadow-lg hover:shadow-[#18cb96]/30 transition-all duration-300 transform hover:-translate-y-1">
            Schedule a Consultation
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default BusinessGrowthShowcase;