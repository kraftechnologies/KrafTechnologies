import React from "react";
import {
  ChevronRight,
  Briefcase,
  GraduationCap,
  Clock,
  DollarSign,
  Users,
  Zap,
  HeartHandshake,
  Target,
  BookOpen,
  Award,
  BarChart,
  Layers,
  Compass,
  Shield,
  Coffee,
} from "lucide-react";
import { Link } from "react-router-dom";
import "../index.css";
import companyImg from "../assets/7.jpeg";
import companyImg3 from "../assets/3.jpeg";
import companyImg5 from "../assets/5.jpeg";
import aditya from "../assets/testonomy/adithya - Adithya Bharadwaj.png";
import john from "../assets/testonomy/inbound1979158642610545244 - John Ayomide (Perspicacious).jpg";
import diya from "../assets/testonomy/profile - Diya Arora.jpg";
import { Helmet } from "react-helmet";

function CareersPage() {
  // Combined testimonials for single row
  const testimonials = [
    {
      name: "John Odeleye Ayomide",
      position: "Full Stack Developer",
      years: "2 Month at KT",
      quote: "The internship has been amazing! Our mentors provide great support, ensuring we understand our tasks while challenging us to learn and explore new things.",
      avatar: john,
    },
    {
      name: "ADITHYA BHARADWAJ C",
      position: "Full Stack Developer Intern",
      years: "2 Months at KT",
      quote: "I’m completely satisfied with the process and genuinely enjoying it!",
      avatar: aditya,
    },
    {
      name: "Suyesh Kumar",
      position: "Team Lead, Oparation",
      years: "1 years at KT",
      quote: "A smooth, well-structured process with great team support. Every challenge is a learning opportunity, and Kraf’s commitment to excellence is inspiring.",
      avatar: "https://ideogram.ai/assets/progressive-image/balanced/response/Jse3aie5Tq-6aY3fgOFjQQ",
    },
    {
      name: "Tanya Singh",
      position: "Research Engineer",
      years: "1 year at KT",
      quote: "Kraf Technologies fosters innovation and growth. The supportive team and exciting projects make it a great place to learn and excel.",
      avatar: "https://ideogram.ai/assets/progressive-image/balanced/response/bIzTNrmdTw-AkOrnPAk-vA",
    },
    {
      name: "Ishika Kapoor",
      position: "Research and Analysis Department",
      years: "1 years at KT",
      quote: "Kraf Technologies provides a dynamic and learning-driven environment. The collaborative culture and challenging projects keep me motivated every day.",
      avatar: "https://media.licdn.com/dms/image/v2/D5603AQHSHLwJwMXPgQ/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1723928266461?e=1748476800&v=beta&t=_ZSEqNH297hbrAfc5OU90sTEwXqgFLPFUUifNCb9XGM",
    },
    {
      name: "Diya Arora",
      position: "HR Intern",
      years: "2 Months at KT",
      quote: "Kraf Technologies’ mentors provided exceptional support, guidance, and insights into HR processes, recruitment, and employee engagement, fostering learning and professional growth.",
      avatar: diya,
    },
    {
      name: "Aditya Mehta",
      position: "Devops Engineer",
      years: "2 years at KT",
      quote: "Kraf Technologies fosters growth, collaboration, and innovation, providing a dynamic environment with exciting projects and continuous learning opportunities every day.",
      avatar: "https://ideogram.ai/assets/progressive-image/balanced/response/CCfEMUxvQL6zwYqM9XyTfA",
    },
    {
      name: "Apurva",
      position: "Sales and Marketing Lead",
      years: "1 years at KT",
      quote: "Kraf Technologies offers great professional growth with a supportive team, innovative strategies, and hands-on experience, enhancing my sales and marketing expertise.",
      avatar: "https://ideogram.ai/assets/progressive-image/balanced/response/fsdOexcqTV-ONBZRLs5tTA",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
        <Helmet>
          <title>Careers at Kraf Technologies - Join Our Team</title>
          <meta name="description" content="Join Kraf Technologies and be part of an innovative team. Explore exciting career opportunities in software development, AI, and cloud computing." />
          <meta name="keywords" content="Careers, Jobs, Software Development, AI, Cloud Computing, Kraf Technologies" />
          <meta property="og:title" content="Careers at Kraf Technologies - Join Our Team" />
          <meta property="og:description" content="Explore job openings and work with the best in the industry at Kraf Technologies." />
          <meta property="og:image" content="https://kraftechnologies.com/assets/careers-og-image.jpg" />
          <meta property="og:url" content="https://kraftechnologies.com/careers/" />
          <link rel="canonical" href="https://kraftechnologies.com/careers/" />
        </Helmet>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
            alt="Kraf Technologies Workspace"
            className="object-cover opacity-40 w-full h-full"
            onError={(e) => (e.target.src = companyImg)}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent"></div>
        </div>
        <div className="container mx-auto px-4 z-10 relative">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight tracking-tight">
              Join Our Work Environment & <span className="text-[#18cb96]">Build the Future</span>
            </h1>
            <p className="text-lg md:text-xl mb-8 text-gray-300 font-light text-justify">
              At Kraf Technologies, we're pushing the boundaries of innovation. Join our team of visionaries and help
              shape tomorrow's technology landscape.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/careers/registration"
                className="group bg-[#18cb96] hover:bg-[#15b587] text-black font-medium py-3 px-6 rounded-md transition-all duration-300 flex items-center justify-center button-3d"
              >
                Apply Now
                <ChevronRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/about-us"
                className="group border border-[#18cb96] text-[#18cb96] font-medium py-3 px-6 rounded-md hover:bg-[#18cb96]/10 transition-all duration-300 flex items-center justify-center button-3d"
              >
                Learn More About Us
                <ChevronRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
        <ParticleBackground />
      </section>

      {/* Why Join Kraf Technologies? */}
      <section id="why-join" className="py-20 bg-black/80">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 tracking-tight">
            Why Join <span className="text-[#18cb96]">Kraf Technologies</span>?
          </h2>
          <p className="text-center text-gray-400 max-w-2xl mx-auto mb-16 font-light">
            We offer a unique environment where innovation meets opportunity
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <Zap className="h-10 w-10 text-[#18cb96]" />,
                title: "Innovative Work Culture",
                description: "Be part of a forward-thinking team that embraces new ideas and technologies.",
              },
              {
                icon: <GraduationCap className="h-10 w-10 text-[#18cb96]" />,
                title: "Growth & Learning",
                description: "Continuous learning opportunities and career advancement paths.",
              },
              {
                icon: <Clock className="h-10 w-10 text-[#18cb96]" />,
                title: "Flexible Work Environment",
                description: "Work-life balance with flexible schedules and remote options.",
              },
              {
                icon: <DollarSign className="h-10 w-10 text-[#18cb96]" />,
                title: "Competitive Salaries & Perks",
                description: "Attractive compensation packages and comprehensive benefits.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="realistic-card p-6 rounded-xl border border-gray-800 hover:border-[#18cb96]/50 transition-all duration-500 hover:shadow-lg"
              >
                <div className="mb-4 transform group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-gray-400 font-light">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Employee Feedback - Single Row */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 tracking-tight">
            Our <span className="text-[#18cb96]">Employee Feedback</span>
          </h2>
          <p className="text-center text-gray-400 max-w-2xl mx-auto mb-16 font-light">
            Hear directly from our team members about their experiences working at Kraf Technologies
          </p>

          {/* Single Row Continuous Loop */}
          <div className="relative overflow-hidden py-10">
            <div className="flex animate-marquee whitespace-nowrap">
              {testimonials.concat(testimonials).map((testimonial, index) => ( // Duplicate array for seamless loop
                <div
                  key={`testimonial-${index}`}
                  className="inline-block w-80 mx-4 h-auto min-h-[320px] realistic-card rounded-xl border-2 border-[#18cb96]/50 hover:border-[#18cb96] transition-all duration-300 shadow-lg overflow-hidden"
                >
                  <div className="p-6 flex flex-col justify-between h-full">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="relative h-12 w-12 flex-shrink-0 overflow-hidden rounded-full border-2 border-[#18cb96]">
                        <img
                          src={testimonial.avatar}
                          alt={testimonial.name}
                          className="object-cover w-full h-full"
                          onError={(e) => (e.target.src = companyImg)}
                        />
                      </div>
                      <div>
                        <h3 className="font-bold text-white">{testimonial.name}</h3>
                        <p className="text-sm text-[#18cb96]">{testimonial.position}</p>
                        <p className="text-xs text-gray-400">{testimonial.years}</p>
                      </div>
                    </div>
                    <div className="border-t border-[#18cb96]/50 pt-4 flex-grow">
                      <p className="text-gray-300 italic font-light text-justify w-full max-w-[250px] leading-relaxed break-words whitespace-normal">
                        "{testimonial.quote}"
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Work Environment */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 tracking-tight">
            Our <span className="text-[#18cb96]">Work Environment</span>
          </h2>
          <p className="text-center text-gray-400 max-w-2xl mx-auto mb-16 font-light">
            Designed to inspire creativity, collaboration, and productivity
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              {
                name: "Modern Office Space",
                icon: <Layers className="h-6 w-6 text-[#18cb96]" />,
                img: companyImg,
              },
              {
                name: "Collaborative Areas",
                icon: <Users className="h-6 w-6 text-[#18cb96]" />,
                img: companyImg3,
              },
              {
                name: "Meeting Rooms",
                icon: <Target className="h-6 w-6 text-[#18cb96]" />,
                img: companyImg5,
              },
              {
                name: "Recreation Zone",
                icon: <Coffee className="h-6 w-6 text-[#18cb96]" />,
                img: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3",
              },
              {
                name: "Cafeteria",
                icon: <Coffee className="h-6 w-6 text-[#18cb96]" />,
                img: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
              },
              {
                name: "Outdoor Space",
                icon: <Compass className="h-6 w-6 text-[#18cb96]" />,
                img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
              },
            ].map((space, index) => (
              <div key={index} className="group relative h-64 overflow-hidden rounded-lg">
                <img
                  src={space.img}
                  alt={space.name}
                  className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                  onError={(e) => (e.target.src = companyImg)}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col items-center justify-end p-6">
                  <div className="bg-black/60 p-2 rounded-full mb-2">{space.icon}</div>
                  <p className="text-white text-xl font-bold">{space.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section id="open-positions" className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 tracking-tight">
            Open <span className="text-[#18cb96]">Positions</span>
          </h2>
          <p className="text-center text-gray-400 max-w-2xl mx-auto mb-16 font-light">
            Join our team of innovators and make an impact in the tech world
          </p>

          <div className="flex flex-wrap gap-4 justify-center mb-10">
            <button className="bg-gray-800 hover:bg-gray-700 px-4 py-2 rounded-full text-sm">All Departments</button>
            <button className="bg-gray-800 hover:bg-gray-700 px-4 py-2 rounded-full text-sm">Engineering</button>
            <button className="bg-gray-800 hover:bg-gray-700 px-4 py-2 rounded-full text-sm">Design</button>
            <button className="bg-gray-800 hover:bg-gray-700 px-4 py-2 rounded-full text-sm">Marketing</button>
            <button className="bg-gray-800 hover:bg-gray-700 px-4 py-2 rounded-full text-sm">Full-time</button>
            <button className="bg-gray-800 hover:bg-gray-700 px-4 py-2 rounded-full text-sm">Internship</button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Sales/Marketing", department: "Sales & Marketing Department", location: "Remote" },
              { title: "UX/UI Designer", department: "Design", location: "Remote" },
              { title: "Backend Engineer", department: "Engineering", location: "Remote" },
              { title: "Product Manager", department: "Product", location: "Remote" },
              { title: "Marketing Specialist", department: "Marketing", location: "Remote" },
              { title: "DevOps Engineer", department: "Engineering", location: "Remote" },
            ].map((job, index) => (
              <div
                key={index}
                className="group realistic-card p-6 rounded-xl border border-gray-800 hover:border-[#18cb96]/50 transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1"
              >
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold mb-1">{job.title}</h3>
                    <p className="text-gray-400 text-sm">
                      {job.department} • {job.location}
                    </p>
                  </div>
                  <Briefcase className="h-5 w-5 text-[#18cb96]" />
                </div>
                <p className="text-gray-300 mb-6 font-light">
                  Join our team to work on cutting-edge technology and make a real impact in the industry.
                </p>
                <Link
                  to="/careers/registration"
                  className="w-full bg-transparent hover:bg-[#18cb96]/10 text-[#18cb96] border border-[#18cb96] font-medium py-2 px-4 rounded-md transition-all duration-300 group-hover:bg-[#18cb96] group-hover:text-black button-3d text-center block"
                >
                  Apply Now
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Career Journey */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 tracking-tight">
            Your <span className="text-[#18cb96]">Career Journey</span> at Kraf Technologies
          </h2>
          <p className="text-center text-gray-400 max-w-2xl mx-auto mb-16 font-light">
            We provide a clear path for growth and development, supporting you every step of the way
          </p>

          {/* Mobile Timeline */}
          <div className="md:hidden space-y-12 relative">
            <div className="absolute left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-[#18cb96] to-transparent"></div>
            {[
              {
                step: 1,
                title: "Onboarding & Integration",
                image: companyImg,
                items: [
                  {
                    icon: <GraduationCap className="h-5 w-5" />,
                    title: "Comprehensive Onboarding",
                    description: "A structured 2-week program to get you familiar with our tools, processes, and culture.",
                  },
                  {
                    icon: <Users className="h-5 w-5" />,
                    title: "Mentorship Program",
                    description: "One-on-one guidance from an experienced team member for your first 3 months.",
                  },
                  {
                    icon: <Target className="h-5 w-5" />,
                    title: "Initial Projects",
                    description: "Carefully selected assignments to help you apply your skills while learning our systems.",
                  },
                ],
              },
              {
                step: 2,
                title: "Professional Growth",
                image: companyImg3,
                items: [
                  {
                    icon: <BookOpen className="h-5 w-5" />,
                    title: "Learning & Development",
                    description: "$5,000 annual education budget for courses, conferences, and certifications.",
                  },
                  {
                    icon: <Users className="h-5 w-5" />,
                    title: "Cross-functional Projects",
                    description: "Opportunities to work with different teams to broaden your expertise.",
                  },
                  {
                    icon: <BarChart className="h-5 w-5" />,
                    title: "Regular Feedback Cycles",
                    description: "Quarterly reviews and continuous feedback to support your development.",
                  },
                ],
              },
              {
                step: 3,
                title: "Leadership & Ownership",
                image: companyImg5,
                items: [
                  {
                    icon: <Compass className="h-5 w-5" />,
                    title: "Project Leadership",
                    description: "Lead initiatives and drive innovation with support from senior leadership.",
                  },
                  {
                    icon: <Users className="h-5 w-5" />,
                    title: "Mentoring Others",
                    description: "Opportunity to mentor new team members and develop leadership skills.",
                  },
                  {
                    icon: <Zap className="h-5 w-5" />,
                    title: "Innovation Time",
                    description: "10% of your time dedicated to exploring new ideas and technologies.",
                  },
                ],
              },
              {
                step: 4,
                title: "Career Advancement",
                image: companyImg,
                items: [
                  {
                    icon: <Layers className="h-5 w-5" />,
                    title: "Clear Advancement Paths",
                    description: "Transparent promotion criteria and career ladders in technical and management tracks.",
                  },
                  {
                    icon: <Award className="h-5 w-5" />,
                    title: "Recognition Programs",
                    description: "Quarterly and annual awards for outstanding contributions and achievements.",
                  },
                  {
                    icon: <Shield className="h-5 w-5" />,
                    title: "Equity & Ownership",
                    description: "Stock options and profit-sharing to align your success with company growth.",
                  },
                ],
              },
            ].map((stage, index) => (
              <div key={index} className="pl-12 relative">
                <div className="absolute left-0 top-0 w-8 h-8 rounded-full bg-[#18cb96] flex items-center justify-center border-2 border-gray-800">
                  <span className="font-bold text-black text-lg">{stage.step}</span>
                </div>
                <div className="gradient-border">
                  <div className="realistic-card p-6 rounded-xl bg-gray-900/80">
                    <h3 className="text-2xl font-bold mb-4 text-white">{stage.title}</h3>
                    <div className="mb-6 overflow-hidden rounded-lg">
                      <img
                        src={stage.image}
                        alt={stage.title}
                        className="w-full h-40 object-cover transition-transform duration-500 hover:scale-105"
                        onError={(e) => (e.target.src = companyImg)}
                      />
                    </div>
                    <div className="space-y-4">
                      {stage.items.map((item, itemIndex) => (
                        <div key={itemIndex} className="flex items-start gap-3">
                          <div className="bg-gray-800 p-2 rounded-lg flex-shrink-0 mt-1 text-[#18cb96]">{item.icon}</div>
                          <div>
                            <h4 className="font-semibold text-[#18cb96]">{item.title}</h4>
                            <p className="text-gray-400 text-sm font-light">{item.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Desktop Timeline */}
          <div className="hidden md:block relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-[#18cb96] to-transparent"></div>
            <div className="space-y-32">
              {/* Step 1 */}
              <div className="relative flex items-center">
                <div className="w-1/2 pr-12 text-right">
                  <div className="gradient-border">
                    <div className="realistic-card p-6 rounded-xl bg-gray-900/80">
                      <h3 className="text-2xl font-bold mb-4 text-white">Onboarding & Integration</h3>
                      <div className="space-y-4">
                        {[
                          {
                            icon: <GraduationCap className="h-5 w-5" />,
                            title: "Comprehensive Onboarding",
                            description: "A structured 2-week program to get you familiar with our tools, processes, and culture.",
                          },
                          {
                            icon: <Users className="h-5 w-5" />,
                            title: "Mentorship Program",
                            description: "One-on-one guidance from an experienced team member for your first 3 months.",
                          },
                          {
                            icon: <Target className="h-5 w-5" />,
                            title: "Initial Projects",
                            description: "Carefully selected assignments to help you apply your skills while learning our systems.",
                          },
                        ].map((item, itemIndex) => (
                          <div key={itemIndex} className="flex items-center justify-end gap-3">
                            <div className="text-right">
                              <h4 className="font-semibold text-[#18cb96]">{item.title}</h4>
                              <p className="text-gray-400 text-sm font-light">{item.description}</p>
                            </div>
                            <div className="bg-gray-800 p-2 rounded-lg flex-shrink-0 text-[#18cb96]">{item.icon}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full bg-[#18cb96] flex items-center justify-center border-2 border-gray-800">
                  <span className="font-bold text-black text-xl">1</span>
                </div>
                <div className="w-1/2 pl-12">
                  <div className="overflow-hidden rounded-xl shadow-lg">
                    <img
                      src={companyImg}
                      alt="Onboarding"
                      className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
                      onError={(e) => (e.target.src = companyImg)}
                    />
                  </div>
                </div>
              </div>

              {/* Step 2 */}
              <div className="relative flex items-center">
                <div className="w-1/2 pr-12">
                  <div className="overflow-hidden rounded-xl shadow-lg">
                    <img
                      src={companyImg3}
                      alt="Professional Growth"
                      className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
                      onError={(e) => (e.target.src = companyImg)}
                    />
                  </div>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full bg-[#18cb96] flex items-center justify-center border-2 border-gray-800">
                  <span className="font-bold text-black text-xl">2</span>
                </div>
                <div className="w-1/2 pl-12">
                  <div className="gradient-border">
                    <div className="realistic-card p-6 rounded-xl bg-gray-900/80">
                      <h3 className="text-2xl font-bold mb-4 text-white">Professional Growth</h3>
                      <div className="space-y-4">
                        {[
                          {
                            icon: <BookOpen className="h-5 w-5" />,
                            title: "Learning & Development",
                            description: "$5,000 annual education budget for courses, conferences, and certifications.",
                          },
                          {
                            icon: <Users className="h-5 w-5" />,
                            title: "Cross-functional Projects",
                            description: "Opportunities to work with different teams to broaden your expertise.",
                          },
                          {
                            icon: <BarChart className="h-5 w-5" />,
                            title: "Regular Feedback Cycles",
                            description: "Quarterly reviews and continuous feedback to support your development.",
                          },
                        ].map((item, itemIndex) => (
                          <div key={itemIndex} className="flex items-center gap-3">
                            <div className="bg-gray-800 p-2 rounded-lg flex-shrink-0 text-[#18cb96]">{item.icon}</div>
                            <div>
                              <h4 className="font-semibold text-[#18cb96]">{item.title}</h4>
                              <p className="text-gray-400 text-sm font-light">{item.description}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 3 */}
              <div className="relative flex items-center">
                <div className="w-1/2 pr-12 text-right">
                  <div className="gradient-border">
                    <div className="realistic-card p-6 rounded-xl bg-gray-900/80">
                      <h3 className="text-2xl font-bold mb-4 text-white">Leadership & Ownership</h3>
                      <div className="space-y-4">
                        {[
                          {
                            icon: <Compass className="h-5 w-5" />,
                            title: "Project Leadership",
                            description: "Lead initiatives and drive innovation with support from senior leadership.",
                          },
                          {
                            icon: <Users className="h-5 w-5" />,
                            title: "Mentoring Others",
                            description: "Opportunity to mentor new team members and develop leadership skills.",
                          },
                          {
                            icon: <Zap className="h-5 w-5" />,
                            title: "Innovation Time",
                            description: "10% of your time dedicated to exploring new ideas and technologies.",
                          },
                        ].map((item, itemIndex) => (
                          <div key={itemIndex} className="flex items-center justify-end gap-3">
                            <div className="text-right">
                              <h4 className="font-semibold text-[#18cb96]">{item.title}</h4>
                              <p className="text-gray-400 text-sm font-light">{item.description}</p>
                            </div>
                            <div className="bg-gray-800 p-2 rounded-lg flex-shrink-0 text-[#18cb96]">{item.icon}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full bg-[#18cb96] flex items-center justify-center border-2 border-gray-800">
                  <span className="font-bold text-black text-xl">3</span>
                </div>
                <div className="w-1/2 pl-12">
                  <div className="overflow-hidden rounded-xl shadow-lg">
                    <img
                      src={companyImg5}
                      alt="Leadership"
                      className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
                      onError={(e) => (e.target.src = companyImg)}
                    />
                  </div>
                </div>
              </div>

              {/* Step 4 */}
              <div className="relative flex items-center">
                <div className="w-1/2 pr-12">
                  <div className="overflow-hidden rounded-xl shadow-lg">
                    <img
                      src={companyImg3}
                      alt="Career Advancement"
                      className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
                      onError={(e) => (e.target.src = companyImg)}
                    />
                  </div>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full bg-[#18cb96] flex items-center justify-center border-2 border-gray-800">
                  <span className="font-bold text-black text-xl">4</span>
                </div>
                <div className="w-1/2 pl-12">
                  <div className="gradient-border">
                    <div className="realistic-card p-6 rounded-xl bg-gray-900/80">
                      <h3 className="text-2xl font-bold mb-4 text-white">Career Advancement</h3>
                      <div className="space-y-4">
                        {[
                          {
                            icon: <Layers className="h-5 w-5" />,
                            title: "Clear Advancement Paths",
                            description: "Transparent promotion criteria and career ladders in technical and management tracks.",
                          },
                          {
                            icon: <Award className="h-5 w-5" />,
                            title: "Recognition Programs",
                            description: "Quarterly and annual awards for outstanding contributions and achievements.",
                          },
                          {
                            icon: <Shield className="h-5 w-5" />,
                            title: "Equity & Ownership",
                            description: "Stock options and profit-sharing to align your success with company growth.",
                          },
                        ].map((item, itemIndex) => (
                          <div key={itemIndex} className="flex items-center gap-3">
                            <div className="bg-gray-800 p-2 rounded-lg flex-shrink-0 text-[#18cb96]">{item.icon}</div>
                            <div>
                              <h4 className="font-semibold text-[#18cb96]">{item.title}</h4>
                              <p className="text-gray-400 text-sm font-light">{item.description}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 tracking-tight">
            Our <span className="text-[#18cb96]">Core Values</span>
          </h2>
          <p className="text-center text-gray-400 max-w-2xl mx-auto mb-16 font-light">
            The principles that guide everything we do
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Zap className="h-12 w-12" />,
                title: "Innovation",
                description: "Pushing boundaries and embracing new ideas.",
              },
              {
                icon: <Users className="h-12 w-12" />,
                title: "Collaboration",
                description: "Working together to achieve common goals.",
              },
              {
                icon: <HeartHandshake className="h-12 w-12" />,
                title: "Customer Focus",
                description: "Putting our customers at the center of everything we do.",
              },
              {
                icon: <BookOpen className="h-12 w-12" />,
                title: "Continuous Learning",
                description: "Always growing and evolving our knowledge.",
              },
            ].map((value, index) => (
              <div key={index} className="text-center group">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gray-800 group-hover:bg-[#18cb96]/20 mb-6 transition-all duration-300 hover:shadow-lg">
                  <div className="text-[#18cb96] transform group-hover:scale-110 transition-transform duration-300">
                    {value.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                <p className="text-gray-400 font-light">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA - Removed ParticleBackground */}
      <section className="py-20 bg-black relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 animate-pulse tracking-tight">
              Ready to <span className="text-[#18cb96]">Make an Impact</span>?
            </h2>
            <p className="text-xl text-gray-300 mb-10 font-light">
              Join our team of innovators and help us shape the future of technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact-us"
                className="group bg-[#18cb96] hover:bg-[#15b587] text-black font-medium py-3 px-8 rounded-md transition-all duration-300 transform hover:scale-105 flex items-center justify-center button-3d"
              >
                Connect With Team
                <ChevronRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/careers/registration"
                className="group border border-[#18cb96] text-[#18cb96] font-medium py-3 px-8 rounded-md hover:bg-[#18cb96]/10 transition-all duration-300 transform hover:scale-105 flex items-center justify-center button-3d"
              >
                Submit Your Resume
                <ChevronRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

// Particle Background Component (Still included for Hero section)
function ParticleBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {Array.from({ length: 20 }).map((_, i) => (
        <div
          key={i}
          className="absolute rounded-full bg-[#18cb96]/30 blur-sm animate-float"
          style={{
            width: `${Math.random() * 10 + 5}px`,
            height: `${Math.random() * 10 + 5}px`,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animationDuration: `${Math.random() * 10 + 10}s`,
            animationDelay: `${Math.random() * 5}s`,
          }}
        />
      ))}
    </div>
  );
}

export default CareersPage;