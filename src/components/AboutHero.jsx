 import React from 'react';

const AboutHero = () => {
  return (
    <section id="about" className="bg-blue-50">

      {/*  Decorative Background Image with "About" Title */}
      <div className="relative w-screen h-[350px] overflow-hidden">
        <img
          src="/images/about bg.webp"
          alt="About Section Background"
          className="w-full h-full object-cover"
        />

        {/* Title Overlay on Image */}
        <div className="absolute inset-0 flex items-end justify-start px-6 pb-6">
          <h1
            className="text-white text-4xl md:text-6xl font-extrabold drop-shadow-lg"
            data-aos="fade-up"
          >
            About Us
          </h1>
        </div>
      </div>

      {/* Headline + Paragraphs Below the Image */}
      <div className="py-16 px-4 md:px-12 max-w-6xl mx-auto text-center">
        
        {/* Headline */}
        <h2
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-900 leading-snug mb-8"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          Engineering Power & Clean Energy for a Brighter Future
        </h2>

        {/*  Paragraphs */}
        <p
          className="text-lg text-gray-700 mb-6 leading-relaxed font-serif"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          At Agile Engineering & Technical Services, we specialize in delivering high-performance electrical installation services and concrete pole manufacturing for local and international projects. From residential wiring to large-scale industrial networks, we provide end-to-end electrical solutions with unmatched precision, safety, and compliance.
        </p>

        <p
          className="text-lg text-gray-700 leading-relaxed font-serif"
          data-aos="fade-up"
          data-aos-delay="500"
        >
          Our team also leads the way in solar energy installations—offering modern, cost-effective, and eco-friendly systems for homes, schools, and businesses. With a deep commitment to sustainability and innovation, Agile Engineering powers lives and industries with technology built for tomorrow.
        </p>
      </div>
    </section>
    
  );
};

export default AboutHero;









