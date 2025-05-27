import React from "react";
import ResorceScroll from "../components/Resources-scroll";
import Resourceshero from "../components/Resources-hero";
import Tutorials from "../components/VideoTutorials";
import HelpSection from "../components/NeedHelp";
const Resource = () => {
  return (
    <div>
      <Resourceshero />
      <ResorceScroll />
      <Tutorials />
      <HelpSection />
    </div>
  );
};

export default Resource;
