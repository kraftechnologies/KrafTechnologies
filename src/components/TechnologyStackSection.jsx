import React from "react";
import frontend from "../assets/frontend.png";
import backend from "../assets/backend.png";
import cloud from "../assets/cloudanddevops.png";
import ai from "../assets/dataandai.png";
import db from "../assets/databases.png";
import security from "../assets/security.png";
const techData = [
  {
    title: "Front End",
    skills: ["React", "Vue.js", "Next.js", "TypeScript"],
    image: `${frontend}`,
  },
  {
    title: "Back End",
    skills: ["Node.js", "Python", "Go", "Java"],
    image: `${backend}`,
  },
  {
    title: "Cloud & DevOps",
    skills: ["AWS", "Azure", "Docker", "Kubernetes"],
    image: `${cloud}`,
  },
  {
    title: "Data & AI",
    skills: ["TensorFlow", "PyTorch", "scikit-learn", "OpenAI"],
    image: `${ai}`,
  },
  {
    title: "Databases",
    skills: ["PostgreSQL", "MongoDB", "Redis", "Elasticsearch"],
    image: `${db}`,
  },
  {
    title: "Security",
    skills: ["OAuth 2.0", "JWT", "SSL/TLS", "WAF"],
    image: `${security}`,
  },
];

const TechnologyStackSection = () => {
  return (
    <div className="bg-gradient-to-br from-[#010C09] via-[#010C09] to-black text-white py-12 px-6 overflow-hidden">
      <h3 className="text-[#18cb96] font-semibold mb-6 text-xl">
        OUR TECHNOLOGY STACK
      </h3>
      <div className="relative w-full overflow-hidden">
        <div className="flex w-max animate-scroll-x space-x-6">
          {[...techData, ...techData].map((tech, idx) => (
            <div
              key={idx}
              className="min-w-[260px] bg-[#010C09] rounded-xl overflow-hidden shadow-lg hover:scale-105 transform transition duration-300"
            >
              <img
                src={tech.image}
                alt={tech.title}
                className="h-40 w-full object-cover"
              />
              <div className="p-4">
                <h4 className="font-bold text-lg mb-3 text-white">
                  {tech.title}
                </h4>
                <ul className="space-y-1 text-sm">
                  {tech.skills.map((skill, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                      {skill}
                    </li>
                  ))}
                </ul>
                <button className="mt-4 bg-[#18cb96] hover:bg-green-300 text-black font-semibold py-2 text-sm px-4 w-[50%] rounded-full transition duration-300">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechnologyStackSection;
