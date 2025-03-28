// src/components/Header.jsx
import { useState, useEffect } from "react";
import logo from "../assets/favicon.png";
import {
  ChevronRight,
  ChevronDown,
  Globe,
  Menu,
  X,
  Shield,
  Server,
  Database,
  Lock,
  FileCheck,
  Building,
  Award,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useMediaQuery } from "./hooks/use-media-query";

const navigation = [
  { name: "Solutions", href: "/our-solutions" },
  { name: "Products", href: "/products" },
  { name: "Resources", href: "/resources" },
  { name: "Partners", href: "/partners" },
  { name: "Company", href: "/company" },
];

// Array of titles for the top banner
const bannerTitles = [
  {
    text: "EMS by Kraf Technologies – The ultimate Employee Management System for businesses!",
  },
  {
    text: "Exclusive Offer: Get 20% OFF on software development!",
    icon: <Lock className="h-4 w-4 mr-1" />,
  },
  {
    text: "Secure Payments: High-security payment solutions with Kraf Technologies.",
    icon: <Shield className="h-4 w-4 mr-1" />,
  },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);
  const [bannerVisible, setBannerVisible] = useState(true);
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const isMobile = useMediaQuery("(max-width: 768px)");

  useEffect(() => {
    if (bannerVisible) {
      const interval = setInterval(() => {
        setCurrentTitleIndex((prevIndex) => (prevIndex + 1) % bannerTitles.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [bannerVisible]);

  useEffect(() => {
    if (!isMobile && activeMenu && !["solutions", "products"].includes(activeMenu)) {
      setActiveMenu(null);
    }
  }, [isMobile, activeMenu]);

  const toggleMenu = (menu) => {
    if (activeMenu === menu) {
      setActiveMenu(null);
    } else {
      setActiveMenu(menu);
    }
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    if (!mobileMenuOpen) setActiveMenu(null);
  };

  const handleMouseEnter = (menu) => {
    if (!isMobile && ["solutions", "products"].includes(menu)) {
      setActiveMenu(menu);
    }
  };

  const handleMouseLeave = () => {
    if (!isMobile) {
      setActiveMenu(null);
    }
  };

  const closeBanner = () => {
    setBannerVisible(false);
  };

  return (
    <>
      {/* Top Banner with Close Icon and Cycling Titles */}
      <AnimatePresence>
        {bannerVisible && (
          <motion.div
            className="bg-[#18cb96] text-black py-2 px-4 relative"
            initial={{ opacity: 0.9 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="max-w-7xl mx-auto flex items-center justify-between">
              <motion.p
                key={currentTitleIndex}
                className="text-xs md:text-sm font-medium text-center flex flex-wrap justify-center items-center gap-1 w-full"
                initial={{ y: -5, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 5, opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                <span className="inline-flex items-center">
                  {bannerTitles[currentTitleIndex].icon}
                  {bannerTitles[currentTitleIndex].text}
                </span>
                <span className="hidden sm:inline">|</span>
                <a
                  href="#"
                  className="inline-flex items-center bg-black/20 hover:bg-black/30 px-2 py-0.5 rounded-full transition-colors duration-200"
                >
                  Get the Details <ChevronRight className="h-3 w-3 ml-0.5" />
                </a>
              </motion.p>
              <button
                onClick={closeBanner}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 text-black hover:text-gray-800"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Header */}
      <header className="bg-[#121212] text-white py-2 px-4 md:px-6 relative z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-4 md:space-x-8">
            <a href="/" className="flex items-center">
              <img src={logo} alt="KRAF TECHNOLOGY" className="h-10 w-auto md:h-12" />
            </a>
            <nav className="hidden md:flex items-center space-x-6">
              {navigation.map((item) => (
                <div className="relative" key={item.name}>
                  <button
                    className={`text-white hover:text-[#18CB96] transition-colors duration-200 flex items-center text-sm md:text-base ${
                      activeMenu === item.name.toLowerCase() ? "border-b-2 border-[#18CB96]" : ""
                    }`}
                    onClick={() =>
                      ["solutions", "products"].includes(item.name.toLowerCase())
                        ? toggleMenu(item.name.toLowerCase())
                        : (window.location.href = item.href)
                    }
                    onMouseEnter={() => handleMouseEnter(item.name.toLowerCase())}
                  >
                    {item.name}
                    {["solutions", "products"].includes(item.name.toLowerCase()) && (
                      <ChevronDown className="h-4 w-4 ml-1" />
                    )}
                  </button>
                </div>
              ))}
            </nav>
          </div>
          <div className="flex items-center space-x-2 md:space-x-4">
            <a
              href="/kraf-think-2025"
              className="hidden md:block text-white hover:text-[#18CB96] transition-colors duration-200 text-sm md:text-base relative group"
            >
              #KrafThink2025
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#18CB96] scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left"></span>
            </a>
            <a
              href="https://ems.kraftechnologies.com/"
              className="hidden md:block text-white hover:text-[#18CB96] transition-colors duration-200 text-sm md:text-base relative group"
              target="_blank"
            >
              Employee Login
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#18CB96] scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left"></span>
            </a>
            <a
              href="/contact-us"
              className="hidden md:block text-white border border-white rounded-md px-3 py-1 md:px-4 md:py-1 hover:bg-white hover:text-[#0a0e1a] transition-colors duration-200 text-sm md:text-base"
            >
              Contact Us
            </a>
            <button className="md:hidden text-white p-1" onClick={toggleMobileMenu}>
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              className="md:hidden bg-[#121212] text-white absolute left-0 right-0 z-40"
              style={{ top: bannerVisible ? "48px" : "0px" }}
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <div className="px-4 py-3 flex flex-col space-y-2 border-t border-gray-800">
                {navigation.map((item) => (
                  <div key={item.name}>
                    <button
                      className="text-white py-2 text-left hover:text-[#18CB96] transition-colors duration-200 flex items-center justify-between text-sm w-full"
                      onClick={() =>
                        ["solutions", "products"].includes(item.name.toLowerCase())
                          ? toggleMenu(item.name.toLowerCase())
                          : (window.location.href = item.href)
                      }
                    >
                      {item.name}
                      {["solutions", "products"].includes(item.name.toLowerCase()) && (
                        <ChevronRight
                          className={`h-4 w-4 transition-transform duration-300 ${
                            activeMenu === item.name.toLowerCase() ? "rotate-90" : ""
                          }`}
                        />
                      )}
                    </button>
                    {/* Mobile Submenu for Solutions */}
                    {activeMenu === "solutions" && item.name.toLowerCase() === "solutions" && (
                      <motion.div
                        className="pl-4 space-y-2 bg-[#1a1f2b] rounded-md py-2"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div>
                          <p className="text-white font-semibold text-sm">Business Solutions</p>
                          <a href="#" className="block text-white hover:text-[#18CB96] text-xs py-1">
                            Enterprise Resource Planning (ERP)
                          </a>
                          <a href="#" className="block text-white hover:text-[#18CB96] text-xs py-1">
                            Customer Relationship Management (CRM)
                          </a>
                          <a href="#" className="block text-white hover:text-[#18CB96] text-xs py-1">
                            Business Intelligence & Analytics
                          </a>
                        </div>
                        <div>
                          <p className="text-white font-semibold text-sm">Software Development</p>
                          <a href="#" className="block text-white hover:text-[#18CB96] text-xs py-1">
                            Custom Software Development
                          </a>
                          <a href="#" className="block text-white hover:text-[#18CB96] text-xs py-1">
                            Web & Mobile App Development
                          </a>
                          <a href="#" className="block text-white hover:text-[#18CB96] text-xs py-1">
                            AI & ML Solutions
                          </a>
                        </div>
                        <div>
                          <p className="text-white font-semibold text-sm">B2B SaaS Products</p>
                          <a href="#" className="block text-white hover:text-[#18CB96] text-xs py-1">
                            KrafX-Q1 (Hackathon Management System)
                          </a>
                          <a href="#" className="block text-white hover:text-[#18CB96] text-xs py-1">
                            SkyGrade (Student Management with LMS & AI)
                          </a>
                          <a href="#" className="block text-white hover:text-[#18CB96] text-xs py-1">
                            Scheduler (Task & Project Management)
                          </a>
                        </div>
                        <div>
                          <p className="text-white font-semibold text-sm">E-commerce & Fintech</p>
                          <a href="#" className="block text-white hover:text-[#18CB96] text-xs py-1">
                            E-commerce Platforms
                          </a>
                          <a href="#" className="block text-white hover:text-[#18CB96] text-xs py-1">
                            Secure Payment Gateway Solutions
                          </a>
                          <a href="#" className="block text-white hover:text-[#18CB96] text-xs py-1">
                            Subscription & Billing Systems
                          </a>
                        </div>
                        <div>
                          <p className="text-white font-semibold text-sm">Security & Cloud Solutions</p>
                          <a href="#" className="block text-white hover:text-[#18CB96] text-xs py-1">
                            Cybersecurity & Data Protection
                          </a>
                          <a href="#" className="block text-white hover:text-[#18CB96] text-xs py-1">
                            Cloud Infrastructure (AWS, Azure, GCP)
                          </a>
                          <a href="#" className="block text-white hover:text-[#18CB96] text-xs py-1">
                            DevOps & CI/CD Solutions
                          </a>
                        </div>
                        <div>
                          <p className="text-white font-semibold text-sm">AI & Automation</p>
                          <a href="#" className="block text-white hover:text-[#18CB96] text-xs py-1">
                            AI Chatbots & Virtual Assistants
                          </a>
                          <a href="#" className="block text-white hover:text-[#18CB96] text-xs py-1">
                            Workflow Automation
                          </a>
                          <a href="#" className="block text-white hover:text-[#18CB96] text-xs py-1">
                            Predictive Analytics
                          </a>
                        </div>
                        <div>
                          <p className="text-white font-semibold text-sm">Healthcare & Pharma Solutions</p>
                          <a href="#" className="block text-white hover:text-[#18CB96] text-xs py-1">
                            Telemedicine & Healthcare Apps
                          </a>
                          <a href="#" className="block text-white hover:text-[#18CB96] text-xs py-1">
                            Pharmaceutical Management Software
                          </a>
                          <a href="#" className="block text-white hover:text-[#18CB96] text-xs py-1">
                            AI-driven Health Insights
                          </a>
                        </div>
                        <button className="w-full bg-[#18CB96] text-white py-2 rounded-md hover:bg-[#16b585] transition-colors duration-200 text-sm">
                          Open Innovation
                        </button>
                      </motion.div>
                    )}
                    {/* Mobile Submenu for Products */}
                    {activeMenu === "products" && item.name.toLowerCase() === "products" && (
                      <motion.div
                        className="pl-4 space-y-2 bg-[#1a1f2b] rounded-md py-2"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <a href="#" className="block text-white font-semibold hover:text-[#18CB96] text-sm py-1">
                          PerformX (Employee Management System)
                        </a>
                        <a href="#" className="block text-white font-semibold hover:text-[#18CB96] text-sm py-1">
                          SkyGrade (Student Management System)
                        </a>
                        <a href="#" className="block text-white font-semibold hover:text-[#18CB96] text-sm py-1">
                          Krafcool (E-commerce Platform)
                        </a>
                        <a href="#" className="block text-white font-semibold hover:text-[#18CB96] text-sm py-1">
                          KrafX-Q1 (Hackathon & Event Management System)
                        </a>
                        <button className="w-full bg-[#18CB96] text-white py-2 rounded-md hover:bg-[#16b585] transition-colors duration-200 text-sm">
                          Open Innovation
                        </button>
                      </motion.div>
                    )}
                  </div>
                ))}
                <a href="/kraf-think-2025" className="text-white py-2 hover:text-[#18CB96] transition-colors duration-200 text-sm">
                  #KrafThink2025
                </a>
                <a href="https://ems.kraftechnologies.com/" className="text-white py-2 hover:text-[#18CB96] transition-colors duration-200 text-sm" target="_blank">
                  Employee Login
                </a>
                <a
                  href="/contact-us"
                  className="text-white border border-white rounded-md px-4 py-2 text-center hover:bg-white hover:text-[#0a0e1a] transition-colors duration-200 text-sm"
                >
                  Contact Us
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Dropdown Menus (Desktop Only) */}
        <AnimatePresence>
          {!isMobile && activeMenu && (
            <motion.div
              className="absolute left-0 right-0 bg-white shadow-lg z-30 rounded-b-[20px]"
              style={{ top: bannerVisible ? "72px" : "48px" }}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              onMouseLeave={handleMouseLeave}
            >
              {/* Solutions Menu */}
              {activeMenu === "solutions" && (
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
                  <div className="space-y-3">
                    <p className="text-[#0a0e1a] font-semibold">Business Solutions</p>
                    <a href="#" className="block text-[#0a0e1a] hover:text-[#18CB96] transition-colors duration-200 text-sm">
                      Enterprise Resource Planning (ERP)
                    </a>
                    <a href="#" className="block text-[#0a0e1a] hover:text-[#18CB96] transition-colors duration-200 text-sm">
                      Customer Relationship Management (CRM)
                    </a>
                    <a href="#" className="block text-[#0a0e1a] hover:text-[#18CB96] transition-colors duration-200 text-sm">
                      Business Intelligence & Analytics
                    </a>
                    <p className="text-[#0a0e1a] font-semibold mt-4">Software Development</p>
                    <a href="#" className="block text-[#0a0e1a] hover:text-[#18CB96] transition-colors duration-200 text-sm">
                      Custom Software Development
                    </a>
                    <a href="#" className="block text-[#0a0e1a] hover:text-[#18CB96] transition-colors duration-200 text-sm">
                      Web & Mobile App Development
                    </a>
                    <a href="#" className="block text-[#0a0e1a] hover:text-[#18CB96] transition-colors duration-200 text-sm">
                      AI & ML Solutions
                    </a>
                  </div>
                  <div className="space-y-3">
                    <p className="text-[#0a0e1a] font-semibold">B2B SaaS Products</p>
                    <a href="#" className="block text-[#0a0e1a] hover:text-[#18CB96] transition-colors duration-200 text-sm">
                      KrafX-Q1 (Hackathon Management System)
                    </a>
                    <a href="#" className="block text-[#0a0e1a] hover:text-[#18CB96] transition-colors duration-200 text-sm">
                      SkyGrade (Student Management with LMS & AI)
                    </a>
                    <a href="#" className="block text-[#0a0e1a] hover:text-[#18CB96] transition-colors duration-200 text-sm">
                      Scheduler (Task & Project Management)
                    </a>
                    <p className="text-[#0a0e1a] font-semibold mt-4">E-commerce & Fintech</p>
                    <a href="#" className="block text-[#0a0e1a] hover:text-[#18CB96] transition-colors duration-200 text-sm">
                      E-commerce Platforms
                    </a>
                    <a href="#" className="block text-[#0a0e1a] hover:text-[#18CB96] transition-colors duration-200 text-sm">
                      Secure Payment Gateway Solutions
                    </a>
                    <a href="#" className="block text-[#0a0e1a] hover:text-[#18CB96] transition-colors duration-200 text-sm">
                      Subscription & Billing Systems
                    </a>
                  </div>
                  <div className="space-y-3">
                    <p className="text-[#0a0e1a] font-semibold">Security & Cloud Solutions</p>
                    <a href="#" className="block text-[#0a0e1a] hover:text-[#18CB96] transition-colors duration-200 text-sm">
                      Cybersecurity & Data Protection
                    </a>
                    <a href="#" className="block text-[#0a0e1a] hover:text-[#18CB96] transition-colors duration-200 text-sm">
                      Cloud Infrastructure (AWS, Azure, GCP)
                    </a>
                    <a href="#" className="block text-[#0a0e1a] hover:text-[#18CB96] transition-colors duration-200 text-sm">
                      DevOps & CI/CD Solutions
                    </a>
                    <p className="text-[#0a0e1a] font-semibold mt-4">AI & Automation</p>
                    <a href="#" className="block text-[#0a0e1a] hover:text-[#18CB96] transition-colors duration-200 text-sm">
                      AI Chatbots & Virtual Assistants
                    </a>
                    <a href="#" className="block text-[#0a0e1a] hover:text-[#18CB96] transition-colors duration-200 text-sm">
                      Workflow Automation
                    </a>
                    <a href="#" className="block text-[#0a0e1a] hover:text-[#18CB96] transition-colors duration-200 text-sm">
                      Predictive Analytics
                    </a>
                    <p className="text-[#0a0e1a] font-semibold mt-4">Healthcare & Pharma Solutions</p>
                    <a href="#" className="block text-[#0a0e1a] hover:text-[#18CB96] transition-colors duration-200 text-sm">
                      Telemedicine & Healthcare Apps
                    </a>
                    <a href="#" className="block text-[#0a0e1a] hover:text-[#18CB96] transition-colors duration-200 text-sm">
                      Pharmaceutical Management Software
                    </a>
                    <a href="#" className="block text-[#0a0e1a] hover:text-[#18CB96] transition-colors duration-200 text-sm">
                      AI-driven Health Insights
                    </a>
                    <button className="mt-4 w-full bg-[#18CB96] text-white py-2 rounded-md hover:bg-[#16b585] transition-colors duration-200 text-sm">
                      Open Innovation
                    </button>
                  </div>
                </div>
              )}

              {/* Products Menu */}
              {activeMenu === "products" && (
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
                  <div className="space-y-3">
                    <a href="#" className="block text-[#0a0e1a] font-semibold hover:text-[#18CB96] transition-colors duration-200">
                      PerformX (Employee Management System)
                    </a>
                    <a href="#" className="block text-[#0a0e1a] font-semibold hover:text-[#18CB96] transition-colors duration-200">
                      SkyGrade (Student Management System)
                    </a>
                    <a href="#" className="block text-[#0a0e1a] font-semibold hover:text-[#18CB96] transition-colors duration-200">
                      Krafcool (E-commerce Platform)
                    </a>
                    <a href="#" className="block text-[#0a0e1a] font-semibold hover:text-[#18CB96] transition-colors duration-200">
                      KrafX-Q1 (Hackathon & Event Management System)
                    </a>
                  </div>
                  <div className="flex items-end">
                    <button className="w-full bg-[#18CB96] text-white py-2 rounded-md hover:bg-[#16b585] transition-colors duration-200 text-sm">
                      Open Innovation
                    </button>
                  </div>
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}