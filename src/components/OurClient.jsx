 import React, { useEffect, useRef, useState } from 'react';
import { Star, StarOff } from 'lucide-react';

const clients = [
  {
    name: 'Katsina State Government',
    rating: 5,
  },
  {
    name: 'AfDin Construction Ltd / Rural Electrification Agency',
    rating: 4,
  },
  {
    name: 'Kaduna State Government',
    rating: 5,
  },
  {
    name: 'Jigawa State Government',
    rating: 4,
  },
];

function OurClient() {
  const sectionRef = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.2 }
    );
    const current = sectionRef.current;
    if (current) observer.observe(current);
    return () => current && observer.unobserve(current);
  }, []);

  const renderStars = (count) => {
    const fullStars = Array(count).fill(<Star className="text-yellow-400 w-5 h-5" />);
    const emptyStars = Array(5 - count).fill(<StarOff className="text-gray-400 w-5 h-5" />);
    return [...fullStars, ...emptyStars];
  }
  
  const getAnimationClass = (index) => {
    if (!inView) return 'opacity-0';
    return index < 2 ? 'translate-x-0 opacity-100' : 'translate-x-0 opacity-100';
  };

  const getInitialClass = (index) => {
    return index < 2 ? 'translate-x-[-50px]' : 'translate-x-[50px]';
  };

  return (
    <section
      ref={sectionRef}
      className="relative w-full min-h-[70vh] flex items-center justify-center text-white overflow-hidden"
    >
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1e293b] via-[#334155] to-[#475569] z-0" />

      <div className="relative z-10 max-w-6xl w-full px-4 sm:px-6 md:px-8">
        <h2
          className={`text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-12 transition-all duration-1000 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          Our Clients
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {clients.map((client, index) => (
            <div
              key={index}
              className={`bg-white/10 border border-white/20 backdrop-blur-md p-6 rounded-lg shadow-lg transform transition-all duration-1000 hover:scale-105 hover:bg-white/20 hover:shadow-2xl
              ${inView ? getAnimationClass(index) : getInitialClass(index)} `}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <h3 className="text-lg font-semibold mb-4 text-white text-center">
                {client.name}
              </h3>
              <div className="flex justify-center gap-1">
                {renderStars(client.rating).map((star, i) => (
                  <span key={i}>{star}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default OurClient;


