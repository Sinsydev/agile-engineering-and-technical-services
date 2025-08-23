 import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import History from '../components/History';
import SearchFooterSection from '../components/SearchFooterSection';

const Home = () => {
  return (
    <>
    <div className="relative">
      <Navbar />
      <Hero />
      <History />
      <SearchFooterSection />
    </div>
   

    </>
  );
};

export default Home;
