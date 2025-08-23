 import React, { useEffect, useRef, useState } from "react";

const services = [
  { src: "/images/services01.webp", title: "Concrete Pole Construction", description: "Casting and molding of durable concrete poles for high and low tension use." },
  { src: "/images/services02.webp", title: "Reinforcement Bar Placement", description: "Strategic arrangement of reinforcement rods for pole strength and safety." },
  { src: "/images/services03.webp", title: "Concrete Mixing & Pouring", description: "Consistent mixing and pouring of high-grade concrete for structural integrity." },
  { src: "/images/services04.webp", title: "Pole Curing & Watering", description: "Regular hydration of poles to achieve optimal curing and long-term durability." },
  { src: "/images/services05.webp", title: "Pole Setting & Assembly", description: "Aligning and fixing poles with precision for reliable electrical distribution." },
  { src: "/images/services06.webp", title: "Pole Lifting Operations", description: "Heavy-duty lifting of poles using cranes and support tools with safety measures." },
  { src: "/images/services07.webp", title: "Pole Yard Arrangement", description: "Systematic layout and spacing of completed poles to maintain structure and air flow." },
  { src: "/images/services08.webp", title: "Quality Inspection", description: "Ensuring every pole passes safety, strength, and compliance testing standards." },
  { src: "/images/services09.webp", title: "Loading on Trailers", description: "Efficient and secure loading of poles onto trucks or tractors for delivery." },
  { src: "/images/services10.webp", title: "Final Dispatch", description: "Transporting and delivering poles to clients or designated electrical sites." },
];

function ServicesHero() {
  const sectionRef = useRef(null);
  const [inView, setInView] = useState(false);
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => setInView(entry.isIntersecting), { threshold: 0.3 });
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (selected && "speechSynthesis" in window) {
      const utterance = new SpeechSynthesisUtterance(`${selected.title}. ${selected.description}`);
      speechSynthesis.cancel();
      speechSynthesis.speak(utterance);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [selected]);

  const getResponsiveStyles = () => "h-48 sm:h-56 md:h-64 lg:h-72";

  return (
    <>
      {/* Half-screen Video Top Section */}
      <div className="w-full h-[50vh] relative overflow-hidden">
        <video className="w-full h-full object-cover" autoPlay muted loop playsInline>
          <source src="/videos/electrical-services.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Dark overlay for contrast */}
        <div className="absolute inset-0 bg-black/40"></div>

    
        <h2 className="absolute bottom-6 left-6 text-white text-3xl sm:text-4xl md:text-5xl font-bold drop-shadow-lg">
          Our Electrical Services
        </h2>
      </div>

      {/* Motivational Headline & Paragraph */}
      <div className="text-center px-4 py-10 max-w-3xl mx-auto">
        <h3 className="text-3xl md:text-4xl font-bold mb-4 text-white">
          Powering Progress, Connecting Communities
        </h3>
        <p className="text-gray-500 text-lg leading-relaxed">
          From the first foundation pour to the final dispatch, we deliver more than just poles —
          we deliver reliability, precision, and trust. Our mission is to strengthen connections,
          energize communities, and pave the way for a brighter, more sustainable future.
        </p>
      </div>

      {/* Services Section */}
      <section
        ref={sectionRef}
        id="services"
        className="relative w-full py-10 px-4 sm:px-6 md:px-8 overflow-hidden"
      >
        <div className="relative z-10 max-w-screen-xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {services.map((service, index) => (
              <div
                key={index}
                className={`relative group overflow-hidden rounded-xl shadow-md transition-all duration-1000 transform cursor-pointer will-change-transform ${
                  inView ? "opacity-100 scale-100" : "opacity-0 scale-95"
                } ${getResponsiveStyles()}`}
                style={{ transitionDelay: `${index * 100}ms` }}
                onClick={() => setSelected(service)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === "Enter" && setSelected(service)}
              >
                <img src={service.src} alt={service.title} className="w-full h-full object-cover" />
      
                <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center text-white text-center px-2 text-sm sm:text-base font-medium">
                  {service.title}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Modal */}
        {selected && (
          <div
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 px-4 sm:px-0"
            role="dialog"
            aria-modal="true"
            aria-labelledby="service-title"
          >
            <div className="bg-white text-gray-800 max-w-md w-full rounded-lg shadow-lg p-6 relative animate-fadeIn overflow-y-auto max-h-[90vh]">
              <button
                className="absolute top-2 right-3 text-xl text-gray-500 hover:text-red-500"
                onClick={() => {
                  speechSynthesis.cancel();
                  setSelected(null);
                }}
                aria-label="Close Modal"
              >
                &times;
              </button>
              <h3 id="service-title" className="text-xl sm:text-2xl font-bold mb-3">
                {selected.title}
              </h3>
              <p className="text-sm sm:text-base">{selected.description}</p>
            </div>
          </div>
        )}
      </section>
    </>
  );
}

export default ServicesHero;

