 import React from 'react';
import ServicesHero from '../components/ServicesHero.jsx';
import OurClient from '../components/OurClient.jsx';
import WhyChooseUs from '../components/WhyChooseUs.jsx';
import Appreciation from '../components/Appreciation.jsx';

const ElectricalServices = () => {
  return (
    <>
    <div className="relative">
       <ServicesHero />
       <WhyChooseUs />
       <OurClient />
       <Appreciation />
    </div>
   

    </>
  );
};

export default ElectricalServices;