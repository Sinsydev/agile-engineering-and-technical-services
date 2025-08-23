 import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import { PiLightningBold, PiSunBold, PiBatteryHighBold } from 'react-icons/pi';

const History = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section
      id="history"
      className="py-16 px-4 sm:px-8 bg-white text-gray-800 scroll-smooth"
    >
      <div className="max-w-5xl mx-auto">

        {/* Expertise Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-12">
          <div
            data-aos="fade-up"
            className="bg-white border border-gray-200 p-6 rounded-md shadow-md hover:shadow-lg transition duration-300 text-center"
          >
            <PiLightningBold className="text-yellow-600 text-4xl mx-auto mb-3" />
            <h3 className="font-semibold text-lg mb-1">Electrical Installations</h3>
            <p className="text-sm leading-relaxed">
              Certified wiring, repairs, and power system upgrades for homes, offices & industries.
            </p>
          </div>

          <div
            data-aos="fade-up"
            data-aos-delay="200"
            className="bg-white border border-gray-200 p-6 rounded-md shadow-md hover:shadow-lg transition duration-300 text-center"
          >
            <PiSunBold className="text-orange-500 text-4xl mx-auto mb-3" />
            <h3 className="font-semibold text-lg mb-1">Solar Panel Installation</h3>
            <p className="text-sm leading-relaxed">
              Clean, renewable solar energy systems designed and installed for Nigerian environments.
            </p>
          </div>

          <div
            data-aos="fade-up"
            data-aos-delay="400"
            className="bg-white border border-gray-200 p-6 rounded-md shadow-md hover:shadow-lg transition duration-300 text-center"
          >
            <PiBatteryHighBold className="text-green-600 text-4xl mx-auto mb-3" />
            <h3 className="font-semibold text-lg mb-1">Inverter & Backup Systems</h3>
            <p className="text-sm leading-relaxed">
              Long-lasting inverter + battery systems for 24/7 uninterrupted power supply.
            </p>
          </div>
        </div>

        {/* Decorative Background Image Section */}
         <div className="relative h-[300px] w-full mb-16">
         <img
           src="/images/hero bg-2.webp"
           alt="Section Background"
          className="absolute inset-0 w-full h-full object-cover"
       />
       </div>


        {/* History Content */}
        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Text Content */}
          <div>
            <div
              data-aos="fade-right"
              data-aos-delay="100"
              data-aos-duration="1000"
              className="mb-6"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
                Our History
              </h2>
               
            </div>

            <div
              data-aos="fade-up"
              data-aos-delay="300"
              data-aos-duration="1000"
            >
              <p className="text-base md:text-lg leading-relaxed font-serif text-justify">
                Over the years, we’ve expanded our operations, embraced modern technologies, and maintained a strong focus on quality and safety. This dedication has built lasting relationships with clients across Nigeria and West Africa.
                <br /><br />
                Today, Agile Engineering & Technical Services stands as a leader in the industry — powering homes, businesses, and industries through top-quality solutions. We’re committed to continuous growth, innovation, and shaping the future of electrical infrastructure for generations to come.
              </p>
            </div>
          </div>

          {/* CEO Image */}
          <div className="flex justify-center md:justify-end">
            <div className="group relative w-64 h-64 md:w-72 md:h-72 rounded-full overflow-hidden shadow-2xl transform transition-all duration-500 hover:scale-105 hover:shadow-[0_10px_30px_rgba(0,0,0,0.4)]">
              <img
                src="/images/history.webp"
                alt="ENGR. ABDULLAHI TANWA, CEO of Agile Engineering"
                className="w-full h-full object-cover transition-all duration-500 group-hover:blur-sm group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                <div className="text-center space-y-1 animate-fade-in-up">
                  <p className="text-white text-sm md:text-base font-semibold">CEO & Founder</p>
                  <p className="text-white text-lg md:text-xl font-bold">ENGR. ABDULLAHI BALA TANWA</p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default History;












