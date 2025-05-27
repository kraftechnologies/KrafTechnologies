import React, { useRef, useState, useEffect } from "react";
import { IoIosArrowDropright, IoIosArrowDropleft } from "react-icons/io";
import { motion } from "framer-motion";

// Image imports
import book1 from "../assets/books-1.png";
import book2 from "../assets/books-2.png";
import book3 from "../assets/books-3.png";
import webinar1 from "../assets/webinar-1.png";
import webinar2 from "../assets/webinar-2.png";
import webinar3 from "../assets/webinar-3.png";
import customer1 from "../assets/c-1.png";
import customer2 from "../assets/c-2.png";
import customer3 from "../assets/c-3.png";
import blog1 from "../assets/b-1.png";
import blog2 from "../assets/b-2.png";
import blog3 from "../assets/b-3.png";
import growth from "../assets/growth.png";
import economics from "../assets/economiics.png";
import atlassin from "../assets/atlassin.png";
import templateforsucess from "../assets/templateforsuccess.png";
import sales from "../assets/sales.png";
import newin2024 from "../assets/newin2024.png";
import hirefrombest from "../assets/recruit-best.png";
import betterevents from "../assets/betterevents.png";
import kovai from "../assets/kovai.png";
import c4 from "../assets/c-4.png";
import b4 from "../assets/b-4.png";
import b5 from "../assets/b-5.png";
import b6 from "../assets/b-6.png";
const Resourcesscroll = () => {
  const sectionRefs = useRef({});
  const scrollRefs = useRef({});
  const [activeSection, setActiveSection] = useState("");

  const sections = [
    {
      id: "ebooks",
      title: "E-books & Guides",
      links: [
        {
          text: "Thes State of Meetings 2024",
          action: "Read Now →",
          image: book3,
        },
        {
          text: "The Art of Cold Outreach",
          action: "Read now →",
          image: book1,
        },
        { text: "The State of Scheduling", action: "Read now →", image: book2 },
        { text: "Growth Week ", action: "Read now →", image: growth },
        {
          text: "The Impact Of Economics",
          action: "Read now →",
          image: economics,
        },
        {
          text: "Templates for Success",
          action: "Read now →",
          image: templateforsucess,
        },
        {
          text: "Qulaify,Route,And Book Sales",
          action: "Read now →",
          image: sales,
        },
      ],
    },
    {
      id: "webinars",
      title: "Webinars",
      links: [
        {
          text: "Getting Started with Calendly",
          action: "Register →",
          image: webinar1,
        },
        { text: "Calendly Review", action: "Register →", image: webinar2 },
        { text: "How to use google", action: "Register →", image: webinar3 },
        {
          text: "Whats new in Q3 2024",
          action: "Read now →",
          image: newin2024,
        },
        {
          text: "How recruiters 'Hire the Best'",
          action: "Read now →",
          image: hirefrombest,
        },
        {
          text: " Better Events virtual Event",
          action: "Read now →",
          image: betterevents,
        },
      ],
    },
    {
      id: "customer-stories",
      title: "Customer Stories",
      links: [
        {
          text: "Thes State of Meetings 2024",
          action: "Read now →",
          image: customer1,
        },
        {
          text: "The Art of Cold Outreach",
          action: "Read now →",
          image: customer2,
        },
        {
          text: "The State of Scheduling",
          action: "Read now →",
          image: customer3,
        },
        { text: "Kovai Streamlines demo", action: "Read now →", image: kovai },
        {
          text: "Docusign transforms sales",
          action: "Read now →",
          image: c4,
        },
        {
          text: "Atlassian scales customer success",
          action: "Read now →",
          image: atlassin,
        },
      ],
    },
    {
      id: "blog",
      title: "Blog",
      links: [
        {
          text: "Thes State of Meetings 2024",
          action: "Read now →",
          image: blog1,
        },
        {
          text: "The Art of Cold Outreach",
          action: "Read now →",
          image: blog2,
        },
        { text: "The State of Scheduling", action: "Read now →", image: blog3 },
        { text: "How To share Google", action: "Read now →", image: b4 },
        {
          text: "Book more meetings with linkedIn",
          action: "Read now →",
          image: b5,
        },
        {
          text: "Scheduling apps for businesses",
          action: "Read now →",
          image: b6,
        },
      ],
    },
  ];

  // Scroll to section
  const scrollToSection = (id) => {
    sectionRefs.current[id]?.scrollIntoView({ behavior: "smooth" });
  };

  // Set active nav on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3 }
    );

    Object.values(sectionRefs.current).forEach(
      (el) => el && observer.observe(el)
    );
    return () => observer.disconnect();
  }, []);

  return (
    <div className="bg-gradient-to-br from-[#010C09] via-[#010C09] to-black py-12">
      {/* Navbar */}
      <div className="sticky top-0 z-50">
        <div className="flex justify-center gap-5">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => scrollToSection(section.id)}
              className={`text-white font-semibold relative transition-all`}
            >
              {section.title}
              {activeSection === section.id && (
                <span className="absolute left-0 right-0 bottom-[-6px] h-[3px] bg-[#18cb96] rounded-full" />
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Content Sections */}
      <div className="max-w-7xl mx-auto py-10 md:py-15 lg:py-18">
        {sections.map((section) => (
          <motion.div
            key={section.id}
            id={section.id}
            ref={(el) => (sectionRefs.current[section.id] = el)}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="pt-16 px-6"
          >
            <div className="flex justify-between items-center mb-8 w-full">
              <h1 className="text-3xl font-bold text-white">{section.title}</h1>
              <div className="flex gap-8">
                <IoIosArrowDropleft
                  className="text-[#18cb96] hover:text-[#18bb96] text-3xl cursor-pointer"
                  onClick={() =>
                    (scrollRefs.current[section.id].scrollLeft -= 300)
                  }
                />
                <IoIosArrowDropright
                  className="text-[#18cb96] hover:text-[#18bb96] text-3xl cursor-pointer"
                  onClick={() =>
                    (scrollRefs.current[section.id].scrollLeft += 300)
                  }
                />
              </div>
            </div>

            <div
              className="flex gap-6 overflow-x-auto scroll-smooth no-scrollbar"
              ref={(el) => (scrollRefs.current[section.id] = el)}
            >
              {section.links.map((link, index) => (
                <div
                  key={index}
                  className="flex-none mb-6 p-4 rounded-lg w-[280px] backdrop-blur-md bg-gray-900/80 border border-gray-800 transition-all duration-300 relative group hover:scale-105"
                >
                  <img
                    src={link.image}
                    alt="resource"
                    className="w-full h-40 object-cover rounded-lg mb-4 transition-transform duration-300"
                  />
                  <h2 className="text-white">{link.text}</h2>
                  <button className="bg-[#18cb96] hover:bg-[#18bb96] cursor-pointer rounded-lg px-4 py-2 mt-2 text-white font-medium transition-all duration-300">
                    {link.action}
                  </button>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Resourcesscroll;
