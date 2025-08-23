import React from 'react';
import ContactHero from '../components/ContactHero.jsx';
import NewsLetterSubscribe from '../components/NewsLetterSubscribe.jsx';
import MapAddress from '../components/MapAddress.jsx';
import Footer from '../components/Footer.jsx'

const Contact = () => {
  return (
    <div className="relative">
      <ContactHero />
      <NewsLetterSubscribe />
      <MapAddress />
      <Footer  />

    </div>
  );
};

export default Contact;
