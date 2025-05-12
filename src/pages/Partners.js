import React from "react";
import BenifitsOfPartnership from "../components/BenifitsOfPartnership";
import TrustedPartners from "../components/TrustedPartners";
import GetStarted from "../components/GetStarted";
import PrivacyAndSecurity from "../components/PrivacyAndSecurity";
import { Helmet } from "react-helmet";
const Partners = () => {
  return (
    <>
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
      <BenifitsOfPartnership />
      <TrustedPartners />
      <GetStarted />
      <PrivacyAndSecurity />
    </>
  );
};

export default Partners;
