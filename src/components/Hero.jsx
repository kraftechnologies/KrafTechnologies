// import { useState, useEffect } from "react";
// import { ChevronDown } from "lucide-react";

// const heroContent = [
//   {
//     image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=3132&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     title: "Innovate. Automate. Scale.",
//     description: "Empowering businesses with AI-driven automation, custom software solutions, and next-generation technologies. From startups to enterprises, we build scalable digital solutions that redefine industries.",
//   },
//   {
//     image: "https://images.unsplash.com/photo-1712062403111-978e36b01d1c?q=80&w=2960&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     title: "Building the Future with AI & Web3",
//     description: "Kraf Technologies specializes in AI, Blockchain, and Cloud solutions to accelerate digital transformation. Our expertise turns visionary ideas into high-performing business software.",
//   },
//   {
//     image: "https://images.unsplash.com/photo-1637073849667-91120a924221?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     title: "Your Vision, Our Innovation",
//     description: "We help startups, SMEs, and enterprises turn ideas into reality with cutting-edge software, AI automation, and Web3 solutions. Let’s build the future—together.",
//   },
// ];

// export default function HeroSection() {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [isTransitioning, setIsTransitioning] = useState(false);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setIsTransitioning(true);
//       setTimeout(() => {
//         setCurrentIndex((prevIndex) => (prevIndex + 1) % heroContent.length);
//         setIsTransitioning(false);
//       }, 500);
//     }, 5000);
//     return () => clearInterval(interval);
//   }, []);

//   const currentContent = heroContent[currentIndex];

//   return (
//     <div className="relative h-screen w-full overflow-hidden">
//       <div className={`absolute inset-0 transition-opacity duration-1000 ${isTransitioning ? "opacity-0" : "opacity-100"}`}>
//         <img 
//           src={currentContent.image} 
//           alt="Hero background" 
//           className="absolute inset-0 h-full w-full object-cover object-center"
//         />
//         <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black/30" />
//       </div>

//       <div className="relative z-10 flex h-full flex-col justify-center px-4 sm:px-6 md:px-12 lg:px-16 text-white">
//         <div 
//           className={`w-full max-w-4xl mx-auto transition-all duration-1000 ${
//             isTransitioning ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"
//           }`}
//         >
//           <h1 className="mb-4 text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold w-full leading-tight">
//             {currentContent.title}
//           </h1>
//           <p className="text-sm sm:text-base md:text-lg lg:text-xl w-full">
//             {currentContent.description}
//           </p>
//         </div>
//       </div>

//       {/* Scroll Down Icon */}
//       <div className="absolute bottom-8 sm:bottom-12 md:bottom-16 left-1/2 z-20 transform -translate-x-1/2 animate-bounce">
//         <ChevronDown className="h-6 w-6 sm:h-8 sm:w-8 text-[#18CB96]" />
//       </div>
//     </div>
//   );
// }

import { useState, useEffect } from "react";
import { ChevronDown } from "lucide-react";

const heroContent = [
  {
    video: "https://videos.pexels.com/video-files/3141208/3141208-uhd_2560_1440_25fps.mp4",
    title: "Innovate. Automate. Scale.",
    description: "Empowering businesses with AI-driven automation, custom software solutions, and next-generation technologies. From startups to enterprises, we build scalable digital solutions that redefine industries.",
  },
  {
    video: "https://videos.pexels.com/video-files/6804109/6804109-uhd_2732_1440_25fps.mp4",
    title: "Building the Future with AI & Web3",
    description: "Kraf Technologies specializes in AI, Blockchain, and Cloud solutions to accelerate digital transformation. Our expertise turns visionary ideas into high-performing business software.",
  },
  {
    video: "https://videos.pexels.com/video-files/5925292/5925292-uhd_2560_1440_24fps.mp4",
    title: "Your Vision, Our Innovation",
    description: "We help startups, SMEs, and enterprises turn ideas into reality with cutting-edge software, AI automation, and Web3 solutions. Let’s build the future—together.",
  },
];

export default function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % heroContent.length);
        setIsTransitioning(false);
      }, 500);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const currentContent = heroContent[currentIndex];

  return (
    <div className="relative h-screen w-full overflow-hidden">
      <div className={`absolute inset-0 transition-opacity duration-1000 ${isTransitioning ? "opacity-0" : "opacity-100"}`}>
        <video
          src={currentContent.video}
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black/30" />
      </div>

      <div className="relative z-10 flex h-full flex-col justify-center px-4 sm:px-6 md:px-12 lg:px-16 text-white">
        <div
          className={`w-full max-w-4xl mx-auto transition-all duration-1000 ${
            isTransitioning ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"
          }`}
        >
          <h1 className="mb-4 text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold w-full leading-tight">
            {currentContent.title}
          </h1>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl w-full mb-10">
            {currentContent.description}
          </p>
          <p className="text-base sm:text-lg md:text-xl font-light text-white">
            Looking for next-level digital support?{" "}
            <a 
              href="/contact-us" 
              className="text-xl md:text-1xl lg:text-2xl font-bold hover:underline transition-all duration-200 text-[#18CB96]"
            >
              Let’s talk.
            </a>
          </p>
        </div>
      </div>

      {/* Scroll Down Icon */}
      <div className="absolute bottom-8 sm:bottom-12 md:bottom-16 left-1/2 z-20 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="h-6 w-6 sm:h-8 sm:w-8 text-[#18CB96]" />
      </div>
    </div>
  );
}