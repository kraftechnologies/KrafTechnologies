import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Brands from '../components/Brands';
import Portfolio from "./../components/portfolio";
// import GrowthforBusinesses from '../components/GrowthforBusinesses';

function Home() {
  return (
    <>
      <div className="min-h-screen bg-black">
        <Hero />
        <About />
        {/* <GrowthforBusinesses /> */}
        <Portfolio />
        <Brands />
      </div>
    </>
  );
}

export default Home;