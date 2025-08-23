 import React, { useEffect, useRef, useState } from 'react';

const certifications = [
  { src: '/images/certification01.webp', title: 'ISO 9001 Certified' },
  { src: '/images/certification02.webp', title: 'SON – Standards Organisation of Nigeria' },
  { src: '/images/certification03.webp', title: 'Engineering Council Accreditation' },
  { src: '/images/certification04.webp', title: 'Health & Safety Compliance' },
  { src: '/images/certification05.webp', title: 'NCC License' },
  { src: '/images/certification06.webp', title: 'Technical Partnership Recognition' },
  { src: '/images/certification07.webp', title: 'Quality Assurance Seal' }
];

function Certification() {
  const sectionRef = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);
      },
      { threshold: 0.4 }
    );
    const current = sectionRef.current;
    if (current) observer.observe(current);
    return () => {
      if (current) observer.unobserve(current);
    };
  }, []);

  return (
    <section
  ref={sectionRef}
  className="relative w-full text-white py-16 px-6 overflow-hidden bg-gradient-to-br from-[#202836] via-[#3e5986] to-[#010a16]"
>
  <div className="absolute inset-0 before:absolute before:w-[200%] before:h-[200%] before:bg-gradient-to-tr before:from-white/5 before:to-white/0 before:rotate-12 before:-translate-x-1/4 before:-translate-y-1/3 pointer-events-none" />


      <div className="max-w-screen-xl mx-auto text-center">
        <h2
          className={`text-3xl md:text-4xl font-bold mb-4 transition-all duration-1000 ease-out ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          Our Certifications
        </h2>
        <p
          className={`text-gray-300 mb-10 transition-all duration-1000 ease-out delay-200 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          We are proud to be recognized by leading institutions and regulatory authorities.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 place-items-center">
          {certifications.map(({ src, title }, index) => (
            <div
              key={index}
              className={`relative group bg-white/10 backdrop-blur-lg p-4 rounded-xl shadow-md transition-all duration-1000 ease-out ${
                inView ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <img
                src={src}
                alt={title}
                className="w-28 h-auto object-contain mx-auto"
              />
              <span className="absolute bottom-2 left-1/2 -translate-x-1/2 translate-y-full opacity-0 group-hover:opacity-100 text-xs text-white bg-black/70 px-2 py-1 rounded shadow-lg transition duration-300 z-10">
                {title}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Certification;



