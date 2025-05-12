import React from "react";
import OurMission from "../components/OurMission-meaningful";
import Community from "../components/Community";
import MissionCards from "../components/Mission-features";
import AboutUs from "../components/Ourmission-Aboutus";
import OurMissionBottom from "../components/OurMission-Bottom";
import { Helmet } from "react-helmet";
const Company = () => {
  return (
    <div>
      <Helmet>
        <title>Careers at Kraf Technologies - Join Our Team</title>
        <meta
          name="description"
          content="Join Kraf Technologies and be part of an innovative team. Explore exciting career opportunities in software development, AI, and cloud computing."
        />
        <meta
          name="keywords"
          content="Careers, Jobs, Software Development, AI, Cloud Computing, Kraf Technologies"
        />
        <meta
          property="og:title"
          content="Careers at Kraf Technologies - Join Our Team"
        />
        <meta
          property="og:description"
          content="Explore job openings and work with the best in the industry at Kraf Technologies."
        />
        <meta
          property="og:image"
          content="https://kraftechnologies.com/assets/careers-og-image.jpg"
        />
        <meta
          property="og:url"
          content="https://kraftechnologies.com/careers/"
        />
        <link rel="canonical" href="https://kraftechnologies.com/careers/" />
      </Helmet>
      <OurMission />
      <Community />
      <MissionCards />
      <AboutUs />
      <OurMissionBottom />
    </div>
  );
};

export default Company;
