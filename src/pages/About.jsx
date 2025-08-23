 import React from 'react';
import AboutHero from '../components/AboutHero.jsx';
import VisionMission from '../components/VisionMission.jsx';
import Certification from '../components/Certification.jsx';
import SearchFooterSection from '../components/SearchFooterSection.jsx';

const About = () => {
  return (
    <>
    <div className="relative">
      <AboutHero />
      <VisionMission />
      <Certification />
      <SearchFooterSection />
    </div>
   

    </>
  );
};

export default About;