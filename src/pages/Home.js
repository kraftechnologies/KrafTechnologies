import React from 'react';
import Hero from '../components/Hero';
import Brands from '../components/Brands';
import IndustrySpecificSolutions from "./../components/Industry-SpecificSolutions";
import BusinessGrowthShowcase from '../components/GrowthforBusinesses'; 
import WhatWeOffer from '../components/WhatWeOffer';

function Home() {
  return (
    <div className="min-h-screen bg-black">
      <Hero />
      <BusinessGrowthShowcase />
      <WhatWeOffer />
      <IndustrySpecificSolutions />
      <Brands />
    </div>
  );
}

export default Home;