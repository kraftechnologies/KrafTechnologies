import React, { useRef, useEffect, useState } from "react";
import { Trophy, Award, Users, Globe, Gift, Target, Cpu, Camera, Code, Network, Star, Handshake } from 'lucide-react';
import { motion } from "framer-motion";
import heroImage from "../../assets/Serendale.png";
import { Helmet } from "react-helmet";

// HighlightCard Component
const HighlightCard = ({ icon, title, description }) => (
  <motion.div
    whileHover={{ scale: 1.05, boxShadow: "0 10px 20px rgba(24, 203, 150, 0.3)" }}
    className="backdrop-blur-md bg-gray-900/80 border border-gray-800 rounded-xl p-6 sm:p-8 shadow-lg transition-all duration-300"
  >
    <div className="flex items-center mb-4">
      {icon}
      <h4 className="ml-4 text-xl sm:text-2xl font-semibold font-jost text-[#18CB96]">{title}</h4>
    </div>
    <p className="text-gray-300 text-sm sm:text-base leading-relaxed">{description}</p>
  </motion.div>
);

// WinnerCard Component
const WinnerCard = ({ icon, title, team, project }) => (
  <motion.div
    whileHover={{ scale: 1.05, boxShadow: "0 10px 20px rgba(24, 203, 150, 0.3)" }}
    className="backdrop-blur-md bg-gray-900/80 border border-gray-800 rounded-xl p-6 sm:p-8 shadow-lg transition-all duration-300"
  >
    <div className="flex items-center mb-4">
      {icon}
      <h4 className="ml-4 text-xl sm:text-2xl font-semibold font-jost text-[#18CB96]">{title}</h4>
    </div>
    <p className="text-lg sm:text-xl font-bold text-[#18CB96]">{team}</p>
    <p className="text-gray-300 mt-2 text-sm sm:text-base">{project}</p>
  </motion.div>
);

// GalleryImage Component
const GalleryImage = ({ src, alt }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    className="relative overflow-hidden rounded-xl shadow-lg"
  >
    <img src={src} alt={alt} className="w-full h-48 sm:h-64 object-cover" />
    <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-40 transition-opacity duration-300 flex items-center justify-center">
      <Camera className="text-white opacity-0 hover:opacity-100 transition-opacity duration-300" />
    </div>
  </motion.div>
);

// WhyJoinItem Component
const WhyJoinItem = ({ icon, title, description }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    className="backdrop-blur-md bg-gray-900/80 border border-gray-800 rounded-xl p-4 sm:p-6 shadow-lg transition-all duration-300"
  >
    <div className="flex items-start gap-4">
      {icon}
      <div>
        <h4 className="text-lg sm:text-xl font-semibold font-jost text-[#18CB96]">{title}</h4>
        <div className="text-gray-300 text-sm sm:text-base">{description}</div>
      </div>
    </div>
  </motion.div>
);

const KrafThinkMemories = () => {
  const sectionRefs = {
    memories: useRef(null),
    highlights: useRef(null),
    whyJoin: useRef(null),
    winners: useRef(null),
    gallery: useRef(null),
    sponsor: useRef(null),
  };
  const [isInView, setIsInView] = useState({
    memories: false,
    highlights: false,
    whyJoin: false,
    winners: false,
    gallery: false,
    sponsor: false,
  });

  useEffect(() => {
    const observers = Object.keys(sectionRefs).map((key) => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          setIsInView((prev) => ({ ...prev, [key]: entry.isIntersecting }));
        },
        { threshold: 0.2 }
      );
      if (sectionRefs[key].current) {
        observer.observe(sectionRefs[key].current);
      }
      return { key, observer };
    });

    return () => {
      observers.forEach(({ key, observer }) => {
        if (sectionRefs[key].current) {
          observer.unobserve(sectionRefs[key].current);
        }
      });
    };
  }, []);

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden font-jost">
      <Helmet>
        <title>Kraf Think 2025 Hackathon Memories - Kraf Technologies</title>
        <meta name="description" content="Relive the unforgettable moments of Kraf Think 2025 Hackathon, where innovation and collaboration shone at Chandigarh University." />
        <meta name="keywords" content="Hackathon, Kraf Think 2025, AI, Blockchain, SaaS, Kraf Technologies, Chandigarh University" />
        <meta property="og:title" content="Kraf Think 2025 Hackathon Memories" />
        <meta property="og:description" content="Celebrating the success of Kraf Think 2025, a premier hackathon by Kraf Technologies." />
        <meta property="og:image" content="https://kraftechnologies.com/og-image.jpg" />
        <meta property="og:url" content="https://kraftechnologies.com/kraf-think-2025" />
        <link rel="canonical" href="https://kraftechnologies.com/kraf-think-2025" />
      </Helmet>

      <main>
        {/* Hero Section */}
        <section className="relative text-center py-12 sm:py-16 bg-cover bg-center h-screen" style={{ backgroundImage: `url(${heroImage})` }}>
          <div className="absolute inset-0 bg-black opacity-20"></div>
          <div className="relative z-10 flex flex-col items-center justify-start h-full text-white px-2 sm:px-4 pt-6 sm:pt-8 md:pt-32">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl sm:text-6xl md:text-8xl font-medium mb-4 tracking-tighter font-jost"
            >
              Kraf Think 2025 Hackathon
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-base sm:text-xl text-[#18CB96] max-w-3xl mb-8 sm:mb-12 leading-relaxed px-4"
            >
              Empowering innovation, fostering collaboration, and transforming ideas into reality – join the Kraf Think 2025 Hackathon revolution!
            </motion.p>
          </div>
          <div className="relative mt-8 sm:mt-12 max-w-6xl mx-auto">
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-3 sm:w-4 h-3 sm:h-4 rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  background: i % 2 === 0 ? "#9333ea" : "#60a5fa",
                }}
                animate={{
                  y: [0, -20, 0],
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 0.8, 0.5],
                }}
                transition={{
                  duration: 4,
                  repeat: Number.POSITIVE_INFINITY,
                  delay: i * 0.3,
                }}
              />
            ))}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="absolute bottom-16 sm:bottom-24 md:bottom-32 left-4 sm:left-8 flex items-center flex-wrap gap-2"
            >
            </motion.div>
          </div>
        </section>

        {/* Memories Section */}
        <section ref={sectionRefs.memories} className="w-full py-12 sm:py-24 px-4 sm:px-8 relative overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-48 sm:w-64 h-48 sm:h-64 rounded-full bg-[#18CB96]/20 filter blur-[80px] sm:blur-[100px] opacity-40"></div>
          <div className="absolute bottom-1/4 right-1/3 w-64 sm:w-96 h-64 sm:h-96 rounded-full bg-[#18CB96]/10 filter blur-[100px] sm:blur-[120px] opacity-30"></div>
          <div className="max-w-full sm:max-w-4xl mx-auto relative z-10">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isInView.memories ? 1 : 0, y: isInView.memories ? 0 : 20 }}
              transition={{ duration: 0.5 }}
              className="text-[#18CB96] font-medium text-lg sm:text-xl md:text-2xl tracking-wide text-center"
            >
              KRAF THINK 2025
            </motion.h2>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isInView.memories ? 1 : 0, y: isInView.memories ? 0 : 20 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-center font-jost mt-2"
            >
              Unforgettable Memories
            </motion.h1>
            <div className="w-32 sm:w-48 h-1 bg-[#18CB96] mx-auto my-6 sm:my-8"></div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isInView.memories ? 1 : 0, y: isInView.memories ? 0 : 20 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="space-y-4 sm:space-y-6 text-center px-2 sm:px-4"
            >
              <p className="text-base sm:text-xl text-gray-300 leading-relaxed text-justify">
                Kraf Think 2025 was more than just a hackathon—it was a celebration of innovation, teamwork, and future-ready tech. Over 500 aspiring developers, designers, and entrepreneurs came together at Chandigarh University to build solutions that could change the world.
              </p>
              <p className="text-base sm:text-xl text-gray-300 leading-relaxed text-justify">
                Organized by Kraf Technologies in collaboration with Krafcool, the event featured intense 36-hour coding marathons, mentoring from industry experts, and powerful ideas in domains like Artificial Intelligence, Blockchain, and SaaS platforms. Participants didn't just code—they learned, networked, and pushed their limits.
              </p>
              <p className="text-base sm:text-xl text-gray-300 leading-relaxed text-justify">
                From the electrifying opening ceremony to the final pitch showdown, every moment echoed with energy, passion, and potential. A heartfelt thanks to our sponsors, partners, and every innovator who made Kraf Think 2025 an inspiring success story.
              </p>
              <div className="flex flex-wrap justify-center gap-4 mt-6 sm:mt-8">
                <div className="flex items-center gap-2 bg-[#18CB96]/10 px-3 sm:px-4 py-2 rounded-lg">
                  <Users className="text-[#18CB96] w-5 sm:w-6" />
                  <span className="text-sm sm:text-base">500+ Innovators</span>
                </div>
                <div className="flex items-center gap-2 bg-[#18CB96]/10 px-3 sm:px-4 py-2 rounded-lg">
                  <Globe className="text-[#18CB96] w-5 sm:w-6" />
                  <span className="text-sm sm:text-base">Chandigarh University</span>
                </div>
                <div className="flex items-center gap-2 bg-[#18CB96]/10 px-3 sm:px-4 py-2 rounded-lg">
                  <Trophy className="text-[#18CB96] w-5 sm:w-6" />
                  <span className="text-sm sm:text-base">30+ Projects</span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Highlights Section */}
        <section ref={sectionRefs.highlights} className="w-full py-12 sm:py-24 px-4 sm:px-8 relative overflow-hidden bg-black">
          <div className="absolute top-1/4 left-1/4 w-48 sm:w-64 h-48 sm:h-64 rounded-full bg-[#18CB96]/20 filter blur-[80px] sm:blur-[100px] opacity-40"></div>
          <div className="absolute bottom-1/4 right-1/3 w-64 sm:w-96 h-64 sm:h-96 rounded-full bg-[#18CB96]/10 filter blur-[100px] sm:blur-[120px] opacity-30"></div>
          <div className="max-w-full sm:max-w-6xl mx-auto relative z-10 text-center mb-12 sm:mb-20">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isInView.highlights ? 1 : 0, y: isInView.highlights ? 0 : 20 }}
              transition={{ duration: 0.5 }}
              className="text-[#18CB96] font-medium text-lg sm:text-xl md:text-2xl tracking-wide"
            >
              EVENT HIGHLIGHTS
            </motion.h2>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isInView.highlights ? 1 : 0, y: isInView.highlights ? 0 : 20 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight font-jost mt-2"
            >
              Moments That Defined Kraf Think
            </motion.h1>
            <div className="w-32 sm:w-48 h-1 bg-[#18CB96] mx-auto my-6 sm:my-8"></div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isInView.highlights ? 1 : 0, y: isInView.highlights ? 0 : 20 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-base sm:text-lg md:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed"
            >
              Dive into the most electrifying moments – from high-energy team collaboration, late-night breakthroughs, inspiring mentorship sessions, to the final adrenaline-pumped pitch presentations that brought innovation to life.
            </motion.p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-12 max-w-full sm:max-w-6xl mx-auto">
            {[
              { title: "AI-Powered Solutions", desc: "Innovative tools and platforms using AI to solve real-world problems." },
              { title: "Blockchain Impact", desc: "Projects that redefined transparency, security, and decentralization." },
              { title: "Startup-Ready SaaS", desc: "Deployable SaaS solutions with real market potential." },
              { title: "Workshops & Mentorship", desc: "Expert-led sessions guided participants through cutting-edge technologies." },
              { title: "Midnight Coding Buzz", desc: "An atmosphere of passion and determination as ideas turned into code." },
              { title: "Award Ceremony", desc: "Winners celebrated for brilliance and creativity across categories." },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: isInView.highlights ? 1 : 0, y: isInView.highlights ? 0 : 20 }}
                transition={{ duration: 0.5, delay: 0.2 * index }}
                className="bg-[#18CB96]/10 p-4 sm:p-6 rounded-xl shadow-lg hover:bg-[#18CB96]/20 transition"
              >
                <h3 className="text-lg sm:text-2xl font-semibold text-[#18CB96] mb-2">{item.title}</h3>
                <p className="text-gray-300 text-sm sm:text-base">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Why Join a Hackathon Section */}
        <section ref={sectionRefs.whyJoin} className="w-full py-12 sm:py-24 px-4 sm:px-8 relative overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-48 sm:w-64 h-48 sm:h-64 rounded-full bg-[#18CB96]/20 filter blur-[80px] sm:blur-[100px] opacity-40"></div>
          <div className="absolute bottom-1/4 right-1/3 w-64 sm:w-96 h-64 sm:h-96 rounded-full bg-[#18CB96]/10 filter blur-[100px] sm:blur-[120px] opacity-30"></div>
          <div className="max-w-full sm:max-w-7xl mx-auto relative z-10 text-center mb-12 sm:mb-20">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isInView.whyJoin ? 1 : 0, y: isInView.whyJoin ? 0 : 20 }}
              transition={{ duration: 0.5 }}
              className="text-[#18CB96] font-medium text-lg sm:text-xl md:text-2xl tracking-wide"
            >
              WHY JOIN A HACKATHON?
            </motion.h2>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isInView.whyJoin ? 1 : 0, y: isInView.whyJoin ? 0 : 20 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight font-jost mt-2"
            >
              Unleash Your Potential
            </motion.h1>
            <div className="w-32 sm:w-48 h-1 bg-[#18CB96] mx-auto my-6 sm:my-8"></div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isInView.whyJoin ? 1 : 0, y: isInView.whyJoin ? 0 : 20 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-base sm:text-lg md:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed"
            >
              Hackathons like Kraf Think 2025 empower you to think big, learn fast, and build real solutions. Here's why you should jump in:
            </motion.p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12 max-w-full sm:max-w-7xl mx-auto text-left">
            <WhyJoinItem
              icon={<Users className="text-[#18CB96] w-8 sm:w-10 h-8 sm:h-10" />}
              title="Skill Boost"
              description={
                <ul className="list-disc list-inside text-gray-300 text-sm sm:text-base">
                  <li>Hands-on coding experience</li>
                  <li>Learn new tools & tech</li>
                  <li>Solve real-world problems</li>
                </ul>
              }
            />
            <WhyJoinItem
              icon={<Users className="text-[#18CB96] w-8 sm:w-10 h-8 sm:h-10" />}
              title="Grow Your Network"
              description={
                <ul className="list-disc list-inside text-gray-300 text-sm sm:text-base">
                  <li>Meet mentors & peers</li>
                  <li>Team up with innovators</li>
                  <li>Build career connections</li>
                </ul>
              }
            />
            <WhyJoinItem
              icon={<Trophy className="text-[#18CB96] w-8 sm:w-10 h-8 sm:h-10" />}
              title="Showcase & Win"
              description={
                <ul className="list-disc list-inside text-gray-300 text-sm sm:text-base">
                  <li>Pitch your project</li>
                  <li>Win exciting prizes</li>
                  <li>Get recognized by industry</li>
                </ul>
              }
            />
          </div>
        </section>

        {/* Winners Section */}
        <section ref={sectionRefs.winners} className="w-full py-12 sm:py-24 px-4 sm:px-8 relative overflow-hidden bg-black">
          <div className="absolute top-1/4 left-1/4 w-48 sm:w-64 h-48 sm:h-64 rounded-full bg-[#18CB96]/20 filter blur-[80px] sm:blur-[100px] opacity-40"></div>
          <div className="absolute bottom-1/4 right-1/3 w-64 sm:w-96 h-64 sm:h-96 rounded-full bg-[#18CB96]/10 filter blur-[100px] sm:blur-[120px] opacity-30"></div>
          <div className="max-w-full sm:max-w-7xl mx-auto relative z-10 text-center mb-12 sm:mb-20">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isInView.winners ? 1 : 0, y: isInView.winners ? 0 : 20 }}
              transition={{ duration: 0.5 }}
              className="text-[#18CB96] font-medium text-lg sm:text-xl md:text-2xl tracking-wide"
            >
              OUR WINNERS
            </motion.h2>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isInView.winners ? 1 : 0, y: isInView.winners ? 0 : 20 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight font-jost mt-2"
            >
              Celebrating Excellence
            </motion.h1>
            <div className="w-32 sm:w-48 h-1 bg-[#18CB96] mx-auto my-6 sm:my-8"></div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isInView.winners ? 1 : 0, y: isInView.winners ? 0 : 20 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-base sm:text-lg md:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed"
            >
              Honoring the brilliant minds who illuminated Kraf Think 2025 with their innovative solutions.
            </motion.p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12 max-w-full sm:max-w-7xl mx-auto">
            <WinnerCard
              icon={<Gift className="text-[#18CB96] w-8 sm:w-10 h-8 sm:h-10" />}
              title="1st Place"
              team="Team Aura"
              project="Developed an AI-powered drone system for emergency medical delivery and campus surveillance, ensuring safety and rapid response."
            />
            <WinnerCard
              icon={<Target className="text-[#18CB96] w-8 sm:w-10 h-8 sm:h-10" />}
              title="2nd Place"
              team="Team Markaish"
              project="Created SafeSight – a real-time AI security system that proactively prevents incidents with intelligent surveillance."
            />
            <WinnerCard
              icon={<Cpu className="text-[#18CB96] w-8 sm:w-10 h-8 sm:h-10" />}
              title="3rd Place"
              team="Team Code Busters"
              project="Designed a non-contact, camera-based heart rate monitoring system using computer vision and AI for real-time health alerts."
            />
          </div>
        </section>

        {/* Gallery Section */}
        <section ref={sectionRefs.gallery} className="w-full py-12 sm:py-24 px-4 sm:px-8 relative overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-48 sm:w-64 h-48 sm:h-64 rounded-full bg-[#18CB96]/20 filter blur-[80px] sm:blur-[100px] opacity-40"></div>
          <div className="absolute bottom-1/4 right-1/3 w-64 sm:w-96 h-64 sm:h-96 rounded-full bg-[#18CB96]/10 filter blur-[100px] sm:blur-[120px] opacity-30"></div>
          <div className="max-w-full sm:max-w-7xl mx-auto relative z-10 text-center mb-12 sm:mb-20">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isInView.gallery ? 1 : 0, y: isInView.gallery ? 0 : 20 }}
              transition={{ duration: 0.5 }}
              className="text-[#18CB96] font-medium text-lg sm:text-xl md:text-2xl tracking-wide"
            >
              MEMORABLE MOMENTS
            </motion.h2>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isInView.gallery ? 1 : 0, y: isInView.gallery ? 0 : 20 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight font-jost mt-2"
            >
              Captured Creativity
            </motion.h1>
            <div className="w-32 sm:w-48 h-1 bg-[#18CB96] mx-auto my-6 sm:my-8"></div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isInView.gallery ? 1 : 0, y: isInView.gallery ? 0 : 20 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-base sm:text-lg md:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed"
            >
              Kraf Think 2025 was more than just a hackathon — it was a celebration of innovation, teamwork, and creativity. From intense coding marathons and insightful mentorship sessions to electrifying pitches and heartfelt award moments, these snapshots capture the energy and essence of the event. Here's a glimpse into the journey that brought changemakers together.
            </motion.p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-full sm:max-w-7xl mx-auto">
            <GalleryImage
              src="https://media.licdn.com/dms/image/v2/D4D22AQGpDKzPMmEDYQ/feedshare-shrink_2048_1536/B4DZV4HdxZGkAo-/0/1741476998072?e=1748476800&v=beta&t=SrnyoMuULZi4SGF0DVTcKZGSn2SO0kJ-BkvX-4Jm_mE"
              alt="Team coding session"
            />
            <GalleryImage
              src="https://media.licdn.com/dms/image/v2/D4D22AQFOH_jSqIeSAg/feedshare-shrink_2048_1536/B4DZV4Hd0mG4Ao-/0/1741476995740?e=1748476800&v=beta&t=ZE_P8J7bS7j2Jl3wahfjUraROrQj2VQKa6OyLinGCG8"
              alt="Project presentation"
            />
            <GalleryImage
              src="https://media.licdn.com/dms/image/v2/D4D22AQFeXon8pbYAEg/feedshare-shrink_2048_1536/B4DZV4Hd0LHAAo-/0/1741476997548?e=1748476800&v=beta&t=2mkYwZgCfqjtIzoJP9e4t_feblbb3MgYpyus_ls-S9M"
              alt="Award ceremony"
            />
            <GalleryImage
              src="https://media.licdn.com/dms/image/v2/D4D22AQFKcQsqlRvpDw/feedshare-shrink_2048_1536/B4DZV4Hd0OGcAo-/0/1741476993442?e=1748476800&v=beta&t=kBMFGjfllrQSUER3Gw2O_adwAuAmCqIN_ATgWClGcZU"
              alt="Networking session"
            />
            <GalleryImage
              src="https://media.licdn.com/dms/image/v2/D4D22AQHBN-VAqtTHvQ/feedshare-shrink_2048_1536/B4DZV4Hd2tG4As-/0/1741476993544?e=1748476800&v=beta&t=WLrCqzaYIKMdA6mtlY4SPmq5oQ-6xfgY2yQYe074P04"
              alt="Hackathon venue"
            />
            <GalleryImage
              src="https://media.licdn.com/dms/image/v2/D4D22AQHzJyJN86sthw/feedshare-shrink_2048_1536/B4DZV4Hd1tG8Aw-/0/1741476992687?e=1748476800&v=beta&t=yycV0Mxzt1H-u0RhRNVdorUYKiWWk5M9_hjEF_Wr7Xg"
              alt="Team collaboration"
            />
          </div>
        </section>

        {/* Become a Sponsor Section */}
        <section ref={sectionRefs.sponsor} className="w-full py-12 sm:py-24 px-4 sm:px-8 relative overflow-hidden bg-black">
          <div className="absolute top-1/4 left-1/4 w-48 sm:w-64 h-48 sm:h-64 rounded-full bg-[#18CB96]/20 filter blur-[80px] sm:blur-[100px] opacity-40"></div>
          <div className="absolute bottom-1/4 right-1/3 w-64 sm:w-96 h-64 sm:h-96 rounded-full bg-[#18CB96]/10 filter blur-[100px] sm:blur-[120px] opacity-30"></div>
          <div className="max-w-full sm:max-w-7xl mx-auto relative z-10 text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isInView.sponsor ? 1 : 0, y: isInView.sponsor ? 0 : 20 }}
              transition={{ duration: 0.5 }}
              className="text-[#18CB96] font-medium text-lg sm:text-xl md:text-2xl tracking-wide"
            >
              BECOME A SPONSOR
            </motion.h2>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isInView.sponsor ? 1 : 0, y: isInView.sponsor ? 0 : 20 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight font-jost mt-2"
            >
              Empower Future Innovators
            </motion.h1>
            <div className="w-32 sm:w-48 h-1 bg-[#18CB96] mx-auto my-6 sm:my-8"></div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isInView.sponsor ? 1 : 0, y: isInView.sponsor ? 0 : 20 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-base sm:text-lg md:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8 sm:mb-12"
            >
              Partner with Kraf Technologies to support the brightest tech talents. Our hackathons offer a dynamic platform to showcase your brand, recruit emerging innovators, and contribute to the advancement of technology.
            </motion.p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12 max-w-full sm:max-w-6xl mx-auto mb-12 sm:mb-16">
              <WhyJoinItem
                icon={<Handshake className="text-[#18CB96] w-8 sm:w-10 h-8 sm:h-10" />}
                title="Brand Visibility"
                description="Display your brand across event banners, social media, websites, and live streams seen by thousands."
              />
              <WhyJoinItem
                icon={<Users className="text-[#18CB96] w-8 sm:w-10 h-8 sm:h-10" />}
                title="Talent Engagement"
                description="Get early access to a pool of top students, coders, and future entrepreneurs."
              />
              <WhyJoinItem
                icon={<Star className="text-[#18CB96] w-8 sm:w-10 h-8 sm:h-10" />}
                title="Innovation Support"
                description="Back ideas and projects that could disrupt industries and drive real change."
              />
              <WhyJoinItem
                icon={<Star className="text-[#18CB96] w-8 sm:w-10 h-8 sm:h-10" />}
                title="Customized Promotions"
                description="Enjoy tailored sponsor mentions, co-branded materials, speaking slots, and dedicated booths."
              />
              <WhyJoinItem
                icon={<Star className="text-[#18CB96] w-8 sm:w-10 h-8 sm:h-10" />}
                title="Recruitment Opportunity"
                description="Connect with potential hires, conduct interviews, and collect resumes directly at the event."
              />
              <WhyJoinItem
                icon={<Globe className="text-[#18CB96] w-8 sm:w-10 h-8 sm:h-10" />}
                title="Global Recognition"
                description="Be part of a global tech movement with participants from leading universities and companies."
              />
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isInView.sponsor ? 1 : 0, y: isInView.sponsor ? 0 : 20 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <p className="text-gray-400 mb-4 sm:mb-6 text-sm sm:text-md md:text-lg">
                Interested in partnering with us or learning more about sponsorship benefits?
              </p>
              <a
                href="mailto:info@kraftechnologies.com"
                rel="noreferrer"
                className="inline-block bg-gradient-to-r from-[#18CB96] to-[#15b083] text-white rounded-full px-6 sm:px-8 py-2 sm:py-3 font-medium text-sm sm:text-lg shadow-lg hover:shadow-[#18CB96]/30 transition-all duration-300 transform hover:-translate-y-1"
              >
                Contact Us
              </a>
            </motion.div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default KrafThinkMemories;