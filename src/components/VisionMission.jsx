 import React, { useEffect, useRef, useState } from 'react';
import {
  FaLightbulb,
  FaRocket,
  FaCogs,
  FaHandshake,
  FaShieldAlt
} from 'react-icons/fa';

function VisionMission() {
  const sectionRef = useRef(null);
  const [inView, setInView] = useState(false);
  const [showMissionCard, setShowMissionCard] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          setTimeout(() => setShowMissionCard(true), 1000);
        }
      },
      { threshold: 0.5 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative snap-start w-full px-6 py-16 bg-gradient-to-br from-blue-950 via-blue-800 to-blue-600 text-white overflow-hidden"
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
        Our Vision & Mission
      </h2>

      {/* Cards Container */}
      <div className="flex flex-col lg:flex-row justify-center items-center gap-10 mb-16">
        {/* Vision Card */}
        <div
          className={`max-w-sm w-full md:w-96 bg-white/10 backdrop-blur-md text-white rounded-2xl p-6 shadow-lg transform transition-all duration-[2000ms] ${
            inView ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'
          }`}
        >
          <FaLightbulb size={36} className="mb-4 text-yellow-300" />
          <h3 className="text-2xl font-semibold mb-2">Vision</h3>
          <p className="text-sm">
            To lead in cutting-edge innovation, offering futuristic engineering solutions that transform communities, Businesses and Industries.
          </p>
        </div>

        {/* Mission Card */}
        <div
          className={`max-w-sm w-full md:w-96 bg-white/10 backdrop-blur-md text-white rounded-2xl p-6 shadow-lg transform transition-all duration-[2000ms] ${
            showMissionCard ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
          }`}
        >
          <FaRocket size={36} className="mb-4 text-pink-300" />
          <h3 className="text-2xl font-semibold mb-2">Mission</h3>
          <p className="text-sm">
            Deliver top-notch, sustainable, and tech-driven engineering solutions that empower businesses and uplift lives through innovation, expertise, and integrity.
          </p>
        </div>
      </div>

      {/* Bottom Icon Row */}
      <div
        className={`flex flex-wrap justify-center items-center gap-6 transform transition-all duration-[2500ms] ${
          showMissionCard ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
        }`}
      >
        {[
          { Icon: FaCogs, text: 'Innovation', color: 'text-cyan-300' },
          { Icon: FaHandshake, text: 'Trust', color: 'text-green-300' },
          { Icon: FaShieldAlt, text: 'Security', color: 'text-purple-300' },
          { Icon: FaRocket, text: 'Growth', color: 'text-orange-300' }
        ].map(({ Icon, text, color }, index) => (
          <div
            key={index}
            className="flex flex-col items-center hover:scale-110 transition-transform duration-500"
          >
            <Icon size={30} className={`${color} mb-1 animate-pulse`} />
            <span className="text-sm">{text}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default VisionMission;



