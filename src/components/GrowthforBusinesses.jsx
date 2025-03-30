import React, { useState, useEffect } from 'react';
import { CheckCircle2, Building2, Rocket, Users, ArrowRight, Star } from 'lucide-react';

function GrowthforBusinesses() {
  const [activeTab, setActiveTab] = useState('startups');
  const [visibleChecks, setVisibleChecks] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const checkInterval = setInterval(() => {
      setVisibleChecks(prev => prev < 4 ? prev + 1 : prev);
    }, 500);
    return () => clearInterval(checkInterval);
  }, []);

  const services = [
    'MVP Development',
    'SaaS Development',
    'UI/UX Design',
    'Product Development'
  ];

  const testimonials = [
    {
      text: "Their expertise transformed our startup's digital presence",
      author: "Sarah Chen",
      role: "CEO, TechStart",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop"
    },
    {
      text: "Outstanding results in enterprise solutions",
      author: "Michael Roberts",
      role: "CTO, Enterprise Co",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop"
    }
  ];

  const stats = [
    { value: "97%", label: "Client Satisfaction" },
    { value: "80+", label: "Industry Experts" },
    { value: "250+", label: "Global Clients" }
  ];

  return (
    <div className="min-h-screen bg-[#121212] text-white py-16 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className={`space-y-6 mb-16 transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h1 className="text-4xl md:text-6xl font-bold">
            Driving 
            <span className="bg-gradient-to-r from-[#18cb96] to-blue-500 text-transparent bg-clip-text"> Growth </span>
            for Businesses of All Sizes
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl typewriter">
            Led by experts and powered by technology, we help businesses scale and achieve revenue goals in an evolving digital landscape.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap gap-4 mb-12">
          {[
            { id: 'startups', icon: <Rocket />, label: 'Startups' },
            { id: 'enterprises', icon: <Building2 />, label: 'Enterprises' },
            { id: 'agencies', icon: <Users />, label: 'Agencies' }
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-lg transition-all duration-300 transform hover:scale-105
                ${activeTab === tab.id 
                  ? 'bg-gradient-to-r from-[#18cb96] to-[#18cb96]/50 text-white shadow-lg shadow-[#18cb96]/20'
                  : 'bg-white/5 hover:bg-white/10'}`}
            >
              {tab.icon}
              <span>{tab.label}</span>
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Services Section */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-[#18cb96]">Our Services</h2>
            <div className="space-y-4">
              {services.map((service, index) => (
                <div
                  key={service}
                  className={`flex items-center space-x-3 transition-all duration-500 transform
                    ${index < visibleChecks ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}
                >
                  <CheckCircle2 className="text-[#18cb96] w-6 h-6" />
                  <span>{service}</span>
                </div>
              ))}
            </div>

            {/* Statistics */}
            <div className="grid grid-cols-3 gap-4 mt-8">
              {stats.map(stat => (
                <div
                  key={stat.value}
                  className="text-center p-4 rounded-lg bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 transform hover:scale-105"
                >
                  <div className="text-2xl font-bold text-[#18cb96]">{stat.value}</div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Testimonials Section */}
          <div className="space-y-6">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="p-6 rounded-lg bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-[#18cb96]/10"
              >
                <div className="flex items-start space-x-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.author}
                    className="w-12 h-12 rounded-full"
                  />
                  <div>
                    <p className="text-gray-300 mb-3">{testimonial.text}</p>
                    <div className="flex items-center space-x-2">
                      <Star className="w-4 h-4 text-[#18cb96]" />
                      <Star className="w-4 h-4 text-[#18cb96]" />
                      <Star className="w-4 h-4 text-[#18cb96]" />
                      <Star className="w-4 h-4 text-[#18cb96]" />
                      <Star className="w-4 h-4 text-[#18cb96]" />
                    </div>
                    <p className="text-sm font-semibold mt-2">{testimonial.author}</p>
                    <p className="text-sm text-gray-400">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Button */}
        <div className="mt-12 text-center">
          <button className="group px-8 py-4 bg-gradient-to-r from-[#18cb96] to-blue-500 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-[#18cb96]/20 animate-pulse">
            <span className="flex items-center space-x-2">
              <span>Get Details</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default GrowthforBusinesses;