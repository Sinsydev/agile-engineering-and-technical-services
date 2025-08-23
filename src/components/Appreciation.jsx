 import React, { useEffect, useRef, useState } from 'react';
import { Handshake, Heart, Sparkles } from 'lucide-react';

function Appreciation() {
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

  return (
    <section
      ref={sectionRef}
      className="relative w-full min-h-[60vh] bg-gradient-to-tr from-[#0f172a] via-[#1e293b] to-[#334155] text-white flex items-center justify-center px-4 sm:px-6 md:px-10"
      aria-label="Appreciation Section"
    >
      {/* Background image overlay */}
      <div
        className="absolute inset-0 opacity-40 bg-[url('/images/appreciation.webp')] bg-cover bg-center z-0"
        aria-hidden="true"
        role="presentation"
      />

      {/* Foreground content */}
      <div className="relative z-10 max-w-3xl text-center">
        <div
          className={`transition-all duration-1000 ease-out ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="flex justify-center mb-4 gap-3 text-yellow-400 text-3xl">
            <Sparkles className="w-8 h-8" />
            <Handshake className="w-8 h-8" />
            <Heart className="w-8 h-8" />
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6">
            Thank You for Trusting Agile Engineering & Technical Services
          </h2>

          <p className="text-base sm:text-lg text-gray-200 leading-relaxed">
            We are deeply grateful for the opportunity to serve our clients, collaborate with government and private entities, and contribute to a more sustainable, electrified, and innovative future. Your trust is the spark that powers everything we do.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Appreciation;

