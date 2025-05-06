import React from "react";

const CustomSoftware = () => {
  return (
    <div className="bg-black text-white">
      {/* Hero Section */}
      <section className="flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-16 py-20 md:py-24 gap-12 md:gap-8 mr-60 ml-60">
        <div className="max-w-2xl text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Custom Software That Fits Your Business
          </h1>
          <p className="text-gray-300 mb-8 text-lg md:text-xl md:leading-relaxed">
            At Kraft, we build secure, scalable applications tailored to your exact needs—from initial concept and wireframes through testing, deployment, and ongoing support.
          </p>
          <button className="bg-[#18CB96] text-black px-8 py-4 rounded-lg shadow-lg hover:bg-[#15b183] transition-transform transform hover:scale-105 text-lg font-semibold">
            Get Started
          </button>
        </div>

        <div className="mb-12 md:mb-0">
          <img
            src="https://inspri.com.au/wp-content/uploads/2022/04/co-gai-1-834x2048.png"
            alt="Custom Software Illustration"
            className="w-[200px] md:w-[300px] drop-shadow-2xl transition-transform hover:scale-105"
          />
        </div>
      </section>

      {/* Logos */}
      <section className="py-12 bg-gray-900">
        <div className="max-w-6xl mx-auto px-6 md:px-16">
          <div className="flex justify-center items-center gap-12 flex-wrap">
            {["Amara", "Earth2.0", "HexLab", "Goldline"].map((brand, index) => (
              <span
                key={index}
                className="text-gray-400 font-semibold text-lg opacity-90 hover:opacity-100 transition-opacity"
              >
                {brand}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-6 md:px-16 bg-black">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our Best Features & Services
          </h2>
          <p className="text-gray-400 text-lg md:text-xl">
            Kraft blends deep industry expertise with proven engineering practices to deliver solutions that evolve alongside your business.
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid gap-8 grid-cols-1 md:grid-cols-3">
          {[
            {
              title: "Project Discovery",
              description:
                "We dive deep into your workflows, challenges, and goals to define a roadmap that maximizes ROI.",
            },
            {
              title: "Design & Prototyping",
              description:
                "Our UX/UI team crafts intuitive prototypes that bring your vision to life before a single line of code is written.",
            },
            {
              title: "Deployment & Support",
              description:
                "From launch to maintenance, Kraft provides 24/7 monitoring, training, and iterative updates to keep you ahead of the curve.",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-gray-900 border border-gray-700 p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:border-[#18CB96] group"
            >
              <h3 className="text-xl font-bold mb-4 group-hover:text-[#18CB96] transition-colors">
                {item.title}
              </h3>
              <p className="text-gray-400 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Grow Your Business Section */}
      <section className="py-20 px-6 md:px-16 bg-gray-900">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div className="flex justify-center">
            <img
              src="https://images.pexels.com/photos/4347368/pexels-photo-4347368.jpeg?cs=srgb&dl=pexels-edmond-dantes-4347368.jpg&fm=jpg"
              alt="Woman with Laptop"
              className="w-full max-w-[480px] rounded-2xl shadow-2xl"
            />
          </div>
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-6">
              Grow Your Business With Kraft’s Expertise
            </h2>
            <p className="text-gray-400 mb-8 text-lg">
              We automate key processes, integrate with your existing systems, and unlock new revenue streams through smart, bespoke software.
            </p>
            <div className="space-y-6">
              <div className="bg-[#12cb96] text-white p-6 rounded-xl shadow-lg flex justify-between items-start hover:shadow-2xl transition">
                <div>
                  <h3 className="font-bold text-lg mb-2">Business Analysis</h3>
                  <p className="text-sm opacity-90">
                    We map out your operations to identify high-impact digital opportunities.
                  </p>
                </div>
                <span className="text-white text-2xl mt-1">↗</span>
              </div>
              {[
                {
                  title: "UI/UX Design",
                  desc:
                    "We design clean, user-friendly interfaces that drive engagement and loyalty.",
                },
                {
                  title: "Software Development",
                  desc:
                    "End‑to‑end development for web, mobile, and cloud platforms, tailored to your scale.",
                },
              ].map((card, i) => (
                <div
                  key={i}
                  className="bg-gray-800 border border-gray-700 p-6 rounded-xl hover:shadow-lg transition group hover:border-[#18CB96]"
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-bold text-lg mb-2 group-hover:text-[#18CB96]">
                        {card.title}
                      </h3>
                      <p className="text-gray-400 text-sm">{card.desc}</p>
                    </div>
                    <span className="text-gray-400 text-2xl mt-1 group-hover:text-[#18CB96]">
                      ↗
                    </span>
                  </div>
                </div>
              ))}
            </div>
            <a
              href="#"
              className="inline-block mt-8 text-blue-400 hover:text-blue-300 font-medium transition"
            >
              See All Services →
            </a>
          </div>
        </div>
      </section>

      {/* Projects & Testimonials */}
      <section className="py-20 px-6 md:px-16 bg-black">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Explore Kraft’s Recent Projects
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              We’ve helped brands across fintech, e‑commerce, and healthcare launch robust software that scales with demand.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-20">
            {[
              {
                img:
                  "https://t3.ftcdn.net/jpg/04/40/29/94/360_F_440299419_s4b12RfNDJvpplheVDmKdhFGJiHlAYNs.jpg",
                title: "Fintech Dashboard Platform",
                desc:
                  "A real‑time analytics dashboard for a leading investment firm, enabling secure portfolio monitoring and reporting.",
              },
              {
                img:
                  "https://www.investopedia.com/thmb/03_nCwEf2AMtnDLH2QkOEuQxiIM=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-1084171152-8445a490b5894f0a9bb588dbfc2ac22d.jpg",
                title: "E‑Commerce Order Management",
                desc:
                  "A headless order management system integrated into Shopify and Magento stores to automate fulfilment and returns.",
              },
            ].map((project, i) => (
              <div
                key={i}
                className="rounded-2xl overflow-hidden shadow-xl bg-gray-900 hover:shadow-2xl transition"
              >
                <img
                  src={project.img}
                  alt={project.title}
                  className="w-full h-64 object-cover object-top"
                />
                <div className="p-8">
                  <h3 className="font-bold text-xl mb-4">{project.title}</h3>
                  <p className="text-gray-400 leading-relaxed">
                    {project.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Testimonials */}
          <div className="mb-16">
            <div className="flex flex-col md:flex-row justify-between items-start mb-12">
              <div className="md:w-1/2 mb-8 md:mb-0">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">
                  What Our Clients Say
                </h2>
                <p className="text-gray-400 text-lg">
                  Our clients value Kraft’s commitment to quality, communication, and on‑time delivery.
                </p>
              </div>
              <button className="px-6 py-3 bg-[#18CB96] text-white rounded-lg hover:bg-[#15b183] transition">
                See All Testimonials
              </button>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-[#18CB96] text-white p-8 rounded-2xl shadow-xl">
                <p className="text-lg mb-6">
                  “Kraft’s team took our idea from mockup to live application in under three months. Their hands‑on approach and clear documentation made the entire process seamless.”
                </p>
                <div className="flex items-center gap-4">
                  <img
                    src="https://i.pravatar.cc/60?img=3"
                    className="rounded-full w-12 h-12"
                  />
                  <div>
                    <p className="font-bold">Philip Vetrovs</p>
                    <p className="text-blue-200">CEO, TechCorp</p>
                  </div>
                </div>
              </div>
              <div className="bg-gray-900 p-8 rounded-2xl border border-gray-700 shadow-xl hover:border-[#18CB96] transition">
                <p className="text-gray-300 text-lg mb-6">
                  “Their engineers are true experts. Kraft delivered a fault‑tolerant microservices architecture that scaled our platform to millions of users without downtime.”
                </p>
                <div className="flex items-center gap-4">
                  <img
                    src="https://i.pravatar.cc/60?img=5"
                    className="rounded-full w-12 h-12"
                  />
                  <div>
                    <p className="font-bold text-white">Randy Stanton</p>
                    <p className="text-gray-400">CTO, DigitalSolutions</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-6 md:px-16 bg-gray-900">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-start">
          <div className="md:sticky md:top-20">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-400 text-lg mb-8">
              Answers to common questions about how Kraft builds, deploys, and supports your custom software.
            </p>
            <button className="px-8 py-3 bg-[#18CB96] text-black rounded-lg font-semibold hover:bg-[#15b183] transition">
              See All Questions
            </button>
          </div>
          <div className="space-y-4">
            {[
              [
                "How long does a custom software project take?",
                "Most projects with Kraft range from 8–16 weeks, depending on complexity and integrations.",
              ],
              [
                "What technologies does Kraft specialize in?",
                "We excel in React, Node.js, Python/Django, AWS, Azure, and containerized microservices.",
              ],
              [
                "Can existing workflows be integrated?",
                "Yes—we connect to CRMs, ERPs, payment gateways, and legacy databases via secure APIs.",
              ],
              [
                "How does maintenance work after launch?",
                "Kraft offers 24/7 monitoring, patch management, and quarterly feature updates under support plans.",
              ],
              [
                "What is your pricing model?",
                "We offer both fixed‑bid and time‑and‑materials contracts, tailored to project scope and timelines.",
              ],
              [
                "Do you provide user training?",
                "Absolutely—we deliver detailed documentation, live training sessions, and on‑demand video tutorials.",
              ],
              [
                "How do you ensure data security?",
                "Our processes follow OWASP guidelines, end‑to‑end encryption, and SOC 2‑compliant hosting environments.",
              ],
            ].map(([question, answer], idx) => (
              <div
                key={idx}
                className="bg-gray-800 rounded-xl p-6 hover:bg-gray-700 transition"
              >
                <details className="group">
                  <summary className="flex justify-between items-center cursor-pointer">
                    <span className="font-semibold text-lg group-hover:text-[#18CB96]">
                      {question}
                    </span>
                    <span className="text-2xl transition-transform group-open:rotate-180">
                      ▼
                    </span>
                  </summary>
                  <p className="mt-4 text-gray-300">{answer}</p>
                </details>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 md:px-16 bg-black">
        <div className="max-w-4xl mx-auto bg-[#18CB96] text-white text-center py-16 px-8 rounded-2xl shadow-2xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 leading-tight">
            Ready To Transform Your Business with Kraft?
          </h2>
          <div className="flex justify-center gap-6 flex-wrap">
            <button className="bg-white text-black font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transition-transform transform hover:scale-105">
              Start Your Free Trial
            </button>
            <button className="border-2 border-white text-white font-semibold px-8 py-3 rounded-lg hover:bg-white hover:text-blue-600 transition">
              Schedule a Demo
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CustomSoftware;
