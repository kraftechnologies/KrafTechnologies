import React from "react";
import { ArrowRight, Building, Cloud, Triangle } from "lucide-react";

const features = [
  {
    icon: <ArrowRight className="h-12 w-12 text-white" />,
    title: "You don’t have to write any new code.",
    description:
      "Get started quickly and work with Catch to enrich the experience over time",
  },
  {
    icon: <Building className="h-12 w-12 text-white" />,
    title: "We support your existing flow of funds.",
    description: "You won’t need to change anything about your setup",
  },
  {
    icon: <Cloud className="h-12 w-12 text-white" />,
    title: "Users can import and transfer marketplace plans",
    description:
      "From standalone marketplace sites like HealthCare.gov, Stride, and others",
  },
  {
    icon: <Triangle className="h-12 w-12 text-white" />,
    title: "We work with partners to craft our roadmap.",
    description: "Together with users and internal experiments",
  },
];

const GetStarted = () => {
  return (
    <section className="bg-gradient-to-b from-black to-[#18cb96]/10 text-white py-12 px-6 md:px-16">
      <h2 className="text-3xl md:text-6xl font-bold mb-10 text-left max-w-7xl pl-4 md:pl-12">
        It’s free and easy to get started
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-7xl mx-auto mb-12">
        {features.map((feature, index) => (
          <div key={index} className="flex-col items-start gap-12 px-4">
            <div className="my-3">{feature.icon}</div>
            <div>
              <h3 className="font-semibold text-2xl">{feature.title}</h3>
              <p className="text-xl opacity-70">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default GetStarted;
