import React from 'react';
import { Link } from 'react-router-dom';

const WebMobilApp = () => {
  return (
    <div className="bg-black text-white">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 py-24 text-center">
        <span className="inline-block bg-green-900/20 text-[#18CB96] px-6 py-2 rounded-full text-sm mb-8 font-medium">
          Premium Offshore Development Partner
        </span>
        <h1 className="text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent leading-tight">
          Enterprise-Grade Digital Solutions<br />
          for Modern Businesses
        </h1>
        
        {/* Enhanced Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto mt-20">
          {[
            'https://images.unsplash.com/photo-1521737604893-d14cc237f11d',
            'https://images.unsplash.com/photo-1556761175-4b46a572b786',
            'https://images.unsplash.com/photo-1518770660439-4636190af475'
          ].map((src, index) => (
            <div key={index} className="relative group overflow-hidden rounded-3xl transform hover:scale-[1.02] transition-all duration-300 h-[500px]">
              <img
                src={src}
                alt="Development"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-end p-8">
                <h3 className="text-2xl font-bold text-white">
                  {['Enterprise Systems', 'Cloud Solutions', 'AI Integration'][index]}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12">
          <div className="space-y-8">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
              Kraft Technology Solutions
            </h2>
            <p className="text-gray-400 text-xl leading-relaxed">
              Strategic technology partnerships for Fortune 500 companies and industry leaders
            </p>
            <button className="bg-[#18CB96] text-black px-8 py-4 rounded-xl hover:bg-green-400 transition-colors font-semibold text-lg">
              Explore Enterprise Solutions
            </button>
          </div>

          {/* Enhanced Service Cards */}
          {[
            {
              title: "Enterprise Web & Mobile Platforms",
              desc: "Scalable solutions handling 1M+ daily transactions with 99.99% uptime SLA",
              image: "https://cdn.dribbble.com/userupload/43195380/file/original-4cc38877fac746bf9a875efc2afb2d79.png?resize=400x0",
              color: "bg-blue-900/30",
              height: "h-[600px]"
            },
            {
              title: "Global UI/UX Systems",
              desc: "Multi-national user experience platforms with AI-driven personalization",
              image: "https://freebiesui.com/wp-content/uploads/2020/12/Minimal-Travel-App-Design-screen.jpg",
              color: "bg-green-900/30",
              height: "h-[600px]"
            }
          ].map((service, index) => (
            <div key={index} className={`${service.color} p-10 rounded-3xl ${service.height} flex flex-col justify-between`}>
              <div>
                <h3 className="text-3xl font-bold mb-6">{service.title}</h3>
                <p className="text-gray-400 text-lg mb-8">{service.desc}</p>
              </div>
              <img
                src={service.image}
                alt={service.title}
                className="rounded-2xl w-full h-72 object-cover"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-24 px-4 bg-gray-900/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold mb-4">Enterprise Case Studies</h2>
            <p className="text-gray-400 text-xl max-w-3xl mx-auto">
              Transformative digital solutions for global industry leaders
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {[
              {
                img: "https://cdn.dribbble.com/userupload/15947362/file/original-6f57b1d74c72cd953910fb7b8b1eb5d3.png",
                title: "Global Retail Platform",
                tags: ["Supply Chain", "Kraft Cloud"]
              },
              {
                img: "https://cdn.dribbble.com/userupload/4387288/file/original-ae54e0a288909e0323028052488a8221.png",
                title: "Financial Trading System",
                tags: ["Fintech", "AI Analytics"]
              },
              {
                img: "https://mir-s3-cdn-cf.behance.net/project_modules/hd/be38c8126485415.612e67d1e8bef.jpg",
                title: "Ecommerce Store Mobile",
                tags: ["IoT", "Big Data"]
              },
              {
                img: "https://designshack.net/wp-content/uploads/furniture-ecommerce-mobile-app-ui-kit-499-1.jpg",
                title: "Manufacturing AI",
                tags: ["Industry 4.0", "Predictive ML"]
              }
            ].map((caseStudy, index) => (
              <div key={index} className="group relative overflow-hidden rounded-3xl h-[500px]">
                <img
                  src={caseStudy.img}
                  alt={caseStudy.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent flex items-end p-10">
                  <div>
                    <div className="flex gap-3 mb-4">
                      {caseStudy.tags.map((tag, i) => (
                        <span key={i} className="bg-green-900/30 text-green-400 px-4 py-2 rounded-full text-sm">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <h3 className="text-2xl font-bold">{caseStudy.title}</h3>
                    <p className="text-gray-300 mt-2">Kraft Enterprise Solution</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>



      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold mb-4">Client Experiences</h2>
            <p className="text-gray-400 text-xl max-w-3xl mx-auto">
              Hear from industry leaders who've transformed their businesses with Kraft solutions
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {[1, 2].map((testimonial) => (
              <div key={testimonial} className="bg-gray-800 rounded-3xl p-12 hover:bg-gray-700 transition-colors duration-300">
                <div className="flex items-center gap-8 mb-8">
                  <div className="w-24 h-24 rounded-full bg-gray-600 overflow-hidden">
                    <img
                      src={`https://i.pravatar.cc/150?img=${testimonial}`}
                      alt="Client"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="text-2xl font-semibold">James Patterson</h4>
                    <p className="text-green-400 text-lg">CTO, Fortune 500 Enterprise</p>
                  </div>
                </div>
                <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                  "Kraft's engineering team delivered a mission-critical platform that handles over 2M daily transactions. 
                  Their enterprise-grade approach and 24/7 support ensured seamless global operations."
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex gap-2 text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-8 h-8 fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <span className="text-gray-400 text-md">Kraft Enterprise Solution</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Enhanced CTA Section */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto bg-gradient-to-br from-green-900/40 to-blue-900/40 rounded-[40px] p-16 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-5xl font-bold mb-8">Digital Transformation at Scale</h2>
            <p className="text-gray-300 text-xl mb-12">
              Partner with Kraft's engineering excellence to redefine your industry leadership
            </p>
            <button className="bg-[#18CB96] text-black px-14 py-5 rounded-xl hover:bg-green-400 transition-colors text-xl font-bold flex items-center gap-4 mx-auto">
              Schedule Executive Briefing
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WebMobilApp;