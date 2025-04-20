import React, { useEffect, useRef } from 'react';
import {
  Wallet,
  Heart,
  Store,
  GraduationCap,
  Truck,
  ArrowRight,
  LineChart,
  Shield,
  Clock
} from 'lucide-react';

const industries = [
  {
    icon: Wallet,
    title: 'Fintech',
    description: 'Revolutionary financial technology solutions that transform digital banking and payments.',
    features: ['Secure Payment Processing', 'Digital Wallet Integration', 'Real-time Analytics'],
    accentColor: 'from-blue-500 to-blue-600',
    bgPattern: 'radial-gradient(circle at 10% 20%, rgb(0, 107, 141) 0%, rgb(0, 69, 91) 90%)'
  },
  {
    icon: Heart,
    title: 'Healthcare',
    description: 'Advanced healthcare systems enabling better patient care and medical data management.',
    features: ['Patient Data Management', 'Telemedicine Platform', 'AI Diagnostics'],
    accentColor: 'from-purple-500 to-purple-600',
    bgPattern: 'radial-gradient(circle at 10% 20%, rgb(130, 2, 99) 0%, rgb(80, 12, 80) 90%)'
  },
  {
    icon: Store,
    title: 'Retail & eCommerce',
    description: 'Omnichannel retail solutions that create seamless shopping experiences.',
    features: ['Inventory Management', 'POS Systems', 'E-commerce Integration'],
    accentColor: 'from-emerald-500 to-emerald-600',
    bgPattern: 'radial-gradient(circle at 10% 20%, rgb(0, 107, 82) 0%, rgb(0, 69, 55) 90%)'
  },
  {
    icon: GraduationCap,
    title: 'EdTech',
    description: 'Innovative educational technology platforms that revolutionize learning.',
    features: ['Learning Management', 'Virtual Classrooms', 'Progress Tracking'],
    accentColor: 'from-orange-500 to-orange-600',
    bgPattern: 'radial-gradient(circle at 10% 20%, rgb(255, 126, 0) 0%, rgb(180, 65, 0) 90%)'
  },
  {
    icon: Truck,
    title: 'Logistics & Supply Chain',
    description: 'Smart logistics solutions for efficient supply chain management.',
    features: ['Route Optimization', 'Real-time Tracking', 'Warehouse Management'],
    accentColor: 'from-cyan-500 to-cyan-600',
    bgPattern: 'radial-gradient(circle at 10% 20%, rgb(0, 176, 155) 0%, rgb(0, 102, 102) 90%)'
  }
];

function IndustryCard({ industry, index }) {
  const cardRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100', 'translate-y-0');
          entry.target.classList.remove('opacity-0', 'translate-y-10');
        }
      },
      {
        threshold: 0.1,
        rootMargin: '20px',
      }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  const Icon = industry.icon;

  return (
    <div
      ref={cardRef}
      className={`relative group rounded-2xl p-6 transition-all duration-700 opacity-0 translate-y-10 font-jost`}
      style={{
        background: industry.bgPattern,
        transitionDelay: `${index * 200}ms`,
        backdropFilter: 'blur(10px)',
      }}
    >
      <div className="absolute inset-0 rounded-2xl bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      
      <div className="relative">
        <div className="flex items-center justify-between mb-6">
          <div className={`flex items-center justify-center w-12 h-12 rounded-xl bg-white/10 backdrop-blur-lg group-hover:scale-110 transition-transform duration-300`}>
            <Icon className="w-6 h-6 text-white" />
          </div>
          <span className="text-white/30 text-4xl font-bold">0{index + 1}</span>
        </div>
        
        <h3 className="text-2xl font-bold text-white mb-3 group-hover:translate-x-2 transition-transform duration-300">
          {industry.title}
        </h3>
        
        <p className="text-white/70 mb-6 group-hover:translate-x-2 transition-transform duration-300 delay-75">
          {industry.description}
        </p>
        
        <ul className="space-y-3">
          {industry.features.map((feature, idx) => (
            <li 
              key={idx} 
              className="flex items-center text-white/90 group-hover:translate-x-2 transition-transform duration-300"
              style={{ transitionDelay: `${idx * 50}ms` }}
            >
              <ArrowRight className="w-4 h-4 mr-2 text-white/50" />
              {feature}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function StatsSection() {
  const statsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100', 'translate-y-0');
          entry.target.classList.remove('opacity-0', 'translate-y-10');
        }
      },
      {
        threshold: 0.1,
      }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => {
      if (statsRef.current) {
        observer.unobserve(statsRef.current);
      }
    };
  }, []);

  return (
    <div 
      ref={statsRef}
      className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 opacity-0 translate-y-10 transition-all duration-700 font-jost"
    >
      <div className="relative group p-6 rounded-2xl bg-gradient-to-r from-blue-600/20 to-blue-600/10 backdrop-blur-lg hover:scale-105 transition-transform duration-300">
        <div className="absolute inset-0 rounded-2xl bg-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <div className="relative flex items-center gap-4">
          <div className="p-3 rounded-lg bg-blue-500/10">
            <LineChart className="w-6 h-6 text-blue-400" />
          </div>
          <div>
            <h4 className="text-white font-semibold group-hover:translate-x-2 transition-transform duration-300">Data-Driven</h4>
            <p className="text-white/70 group-hover:translate-x-2 transition-transform duration-300 delay-75">Advanced analytics and insights</p>
          </div>
        </div>
      </div>
      
      <div className="relative group p-6 rounded-2xl bg-gradient-to-r from-purple-600/20 to-purple-600/10 backdrop-blur-lg hover:scale-105 transition-transform duration-300">
        <div className="absolute inset-0 rounded-2xl bg-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <div className="relative flex items-center gap-4">
          <div className="p-3 rounded-lg bg-purple-500/10">
            <Shield className="w-6 h-6 text-purple-400" />
          </div>
          <div>
            <h4 className="text-white font-semibold group-hover:translate-x-2 transition-transform duration-300">Enterprise Security</h4>
            <p className="text-white/70 group-hover:translate-x-2 transition-transform duration-300 delay-75">Protected and compliant solutions</p>
          </div>
        </div>
      </div>
      
      <div className="relative group p-6 rounded-2xl bg-gradient-to-r from-[#18cb96]/20 to-[#18cb96]/10 backdrop-blur-lg hover:scale-105 transition-transform duration-300">
        <div className="absolute inset-0 rounded-2xl bg-[#18cb96]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <div className="relative flex items-center gap-4">
          <div className="p-3 rounded-lg bg-[#18cb96]/10">
            <Clock className="w-6 h-6 text-[#18cb96]" />
          </div>
          <div>
            <h4 className="text-white font-semibold group-hover:translate-x-2 transition-transform duration-300">24/7 Support</h4>
            <p className="text-white/70 group-hover:translate-x-2 transition-transform duration-300 delay-75">Round-the-clock assistance</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function IndustrySpecificSolutions() {
  return (
    <div className="min-h-screen bg-black relative overflow-hidden font-jost">
      {/* Background Elements */}
      <div className="absolute inset-0">
        {/* Grid */}
        <div 
          className="absolute inset-0" 
          style={{ 
            backgroundImage: `linear-gradient(to right, rgba(24, 203, 150, 0.1) 1px, transparent 1px),
                             linear-gradient(to bottom, rgba(24, 203, 150, 0.1) 1px, transparent 1px)`,
            backgroundSize: '2rem 2rem'
          }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-20 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-white mb-4 tracking-tight">
            Industry-Specific Solutions
          </h2>
          <p className="text-base md:text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Transforming businesses across sectors with cutting-edge technology solutions tailored to your industry's unique challenges.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry, index) => (
            <IndustryCard key={index} industry={industry} index={index} />
          ))}
        </div>

        <StatsSection />
      </div>
    </div>
  );
}

export default IndustrySpecificSolutions; 