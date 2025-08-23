 import React, { useEffect, useRef, useState } from 'react';
 

const Hero = () => {
  const scrollToHistory = () => {
    const section = document.getElementById('history');
    section?.scrollIntoView({ behavior: 'smooth' });
  };

  const h1Ref = useRef(null);
  const pRef = useRef(null);
  const [visible, setVisible] = useState({ h1: false, p: false });

  useEffect(() => {
    const options = { threshold: 0.1 };

    const h1Observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setVisible((prev) => ({ ...prev, h1: true }));
      }
    }, options);

    const pObserver = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setVisible((prev) => ({ ...prev, p: true }));
      }
    }, options);

    if (h1Ref.current) h1Observer.observe(h1Ref.current);
    if (pRef.current) pObserver.observe(pRef.current);

    return () => {
      h1Observer.disconnect();
      pObserver.disconnect();
    };
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen pt-24 md:pt-28 flex items-center justify-center overflow-hidden"
    >
      {/* Video Background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src="/videos/hero-background.mp4" type="video/mp4" />
      </video>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60 z-10"></div>

      {/* Content */}
      <div className="relative z-20 flex flex-col items-center justify-center text-white text-center px-4">
        
        {/* Year */}
        <p
          ref={pRef}
          className={`text-lg md:text-2xl mb-4 max-w-3xl font-serif transition-all duration-1000 delay-500 ${
            visible.p ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          1991
        </p>

        {/* Company Name */}
        <h1
          ref={h1Ref}
          className={`text-4xl md:text-6xl font-bold mb-4 transition-all duration-1000 delay-200 ${
            visible.h1 ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-6'
          }`}
        >
          Agile Engineering & Technical Services.
        </h1>

        {/* Description */}
        <p
          className={`text-lg md:text-2xl mb-6 max-w-3xl transition-all duration-1000 delay-500 ${
            visible.p ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          Your trusted partner in durable pole production and expert solar installations—engineered for performance and safety.
        </p>

        {/* Scroll Button */}
        <button
          onClick={scrollToHistory}
          className="bg-white/80 hover:bg-white text-black font-semibold py-2 px-6 rounded-full shadow-md transition-all duration-300 delay-700"
        >
          ↓ Scroll Down
        </button>
      </div>
    </section>
  );
};

export default Hero;
 















 
 








