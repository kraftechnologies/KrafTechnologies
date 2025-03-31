import React from 'react';
import Hero from '../components/Hero';
import IndustrySpecificSolutions from "./../components/Industry-SpecificSolutions";
import BusinessGrowthShowcase from '../components/GrowthforBusinesses'; 
import WhatWeOffer from '../components/WhatWeOffer';
import HowWeHelp from '../components/HowWeHelp';

function Home() {
  return (
    <div className="min-h-screen bg-black">
      <Hero />
      <BusinessGrowthShowcase />
      <WhatWeOffer />
      <IndustrySpecificSolutions />
      <HowWeHelp />
    </div>
  );
}

export default Home;