 import React, { useEffect, useRef, useState } from 'react';
import { ShieldCheck, Clock, ThumbsUp, Wrench, Globe, Smile } from 'lucide-react'; // Optional: Replace with your own

const reasons = [
  {
    title: 'Industry-leading Expertise',
    icons: [<ShieldCheck />, <Clock />, <ThumbsUp />, <Wrench />],
  },
  {
    title: 'Timely Delivery',
    icons: [<Clock />, <ShieldCheck />, <Globe />, <ThumbsUp />],
  },
  {
    title: 'Commitment to Safety & Durability',
    icons: [<ShieldCheck />, <ThumbsUp />, <Globe />, <Wrench />],
  },
  {
    title: 'Sustainable Practices',
    icons: [<Globe />, <ShieldCheck />, <ThumbsUp />, <Smile />],
  },
  {
    title: 'Custom Solutions',
    icons: [<Wrench />, <ShieldCheck />, <Smile />, <ThumbsUp />],
  },
  {
    title: 'Exceptional Customer Support',
    icons: [<Smile />, <Clock />, <ShieldCheck />, <ThumbsUp />],
  },
];

function WhyChooseUs() {
  const sectionRef = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.3 }
    );
    const current = sectionRef.current;
    if (current) observer.observe(current);
    return () => current && observer.unobserve(current);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full text-white py-16 px-4 sm:px-6 md:px-8 bg-cover bg-center bg-no-repeat transition-all duration-1000"
      style={{ backgroundImage: "url('/images/whychooseus.webp')" }}
    >
      <div className="bg-black/60 absolute inset-0 z-0"></div>

      <div className="relative max-w-7xl mx-auto z-10">
        <h2 className={`text-3xl sm:text-4xl font-bold text-center mb-12 transition-all duration-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          Why Choose Us?
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, idx) => (
            <div
              key={idx}
              className={`bg-white/10 border border-white/20 backdrop-blur-md rounded-xl p-6 text-center transition-all duration-1000 ${
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${idx * 100}ms` }}
            >
              <h3 className="text-xl font-semibold mb-4">{reason.title}</h3>
              <div className="flex justify-center gap-4 flex-wrap">
                {reason.icons.map((Icon, i) => (
                  <span
                    key={i}
                    className="p-3 bg-white/20 rounded-full backdrop-blur-sm hover:scale-110 transition-transform duration-300"
                  >
                    {Icon}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;
