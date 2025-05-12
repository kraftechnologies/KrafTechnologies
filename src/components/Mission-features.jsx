import React from "react";
import Customer from "../assets/customer-centricapproach.png";
import Global from "../assets/global-innovation.png";
import Innovation from "../assets/innovation-driven.png";
const missionData = [
  {
    title: "Customer-Centric Approach",
    description:
      "We prioritize the needs of our customers and strive to exceed expectations through every interaction.",
    image: `${Customer}`, // Replace with actual path
  },
  {
    title: "Innovation-Driven",
    description:
      "We embrace creativity and forward thinking to deliver solutions that set new standards in our industry.",
    image: `${Innovation}`, // Replace with actual path
  },
  {
    title: "Global Vision, Local Impact",
    description:
      "While our goals are global, we always stay rooted in making a positive difference locally.",
    image: `${Global}`, // Replace with actual path
  },
];

export default function MissionCards() {
  return (
    <section className="bg-gradient-to-b from-black to-[#18cb96]/10 py-16 px-6 text-white">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
          Our mission
        </h2>
      </div>
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {missionData.map((item, index) => (
          <div
            key={index}
            className="bg-black/30 rounded-xl overflow-hidden shadow-lg border border-gray-700 hover:border-[#18cb96] transition hover:scale-105 transition-transform duration-300"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-52 object-cover"
            />
            <div className="p-6">
              <h3 className="font-semibold text-2xl md:text-3xl text-white mb-2">
                {item.title}
              </h3>
              <p className="text-gray-300 text-xl">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
