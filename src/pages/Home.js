import React from 'react';
import Hero from '../components/Hero';
import IndustrySpecificSolutions from "./../components/Industry-SpecificSolutions";
import BusinessGrowthShowcase from '../components/GrowthforBusinesses'; 
import WhatWeOffer from '../components/WhatWeOffer';
import HowWeHelp from '../components/HowWeHelp';
import OpenInnovation from '../components/OpenInnovation';
import FeaturedInsights from '../components/‘FeaturedInsights';
import ExpertiseSection from '../components/ExpertiseIn';
import useScrollRestoration from '../hooks/useScrollRestoration';

const Home = () => {
  const containerRef = useScrollRestoration('home');

  return (
    <div 
      ref={containerRef} 
      className="h-screen overflow-y-auto bg-black"
      style={{ scrollBehavior: 'smooth' }}
    >
      <Hero />
      <BusinessGrowthShowcase />
      <WhatWeOffer />
      <IndustrySpecificSolutions />
      <HowWeHelp />
      <OpenInnovation />
      <ExpertiseSection />
      <FeaturedInsights />
    </div>
  );
};

export default Home;