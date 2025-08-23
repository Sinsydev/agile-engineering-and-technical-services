 import React, { useState } from 'react';

const MapAddress = () => {
  const [activeMap, setActiveMap] = useState('katsina');

  const maps = {
    katsina:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127609.51168758757!2d7.56887935!3d12.9935681!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x11b30203a65d237d%3A0x7f437b2eb77b8e50!2sKatsina!5e0!3m2!1sen!2sng!4v1690112345678!5m2!1sen!2sng',
    kaduna:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d991264.1793669267!2d6.57484975!3d10.51624605!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1041cf01c0b8b27f%3A0x875019d9dbd2630e!2sUnguwan%20Sarki%2C%20Kaduna!5e0!3m2!1sen!2sng!4v1690112399999!5m2!1sen!2sng',
  };

  return (
    <section className="bg-gray-100 py-12 px-4 sm:px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-blue-900 mb-10">
          Our Locations
        </h2>

        <div className="grid gap-10 md:grid-cols-2 items-start">
          {/* Address Cards */}
          <div className="space-y-6" data-aos="fade-right">
            {/* Head Office */}
            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-600">
              <h3 className="text-lg sm:text-xl font-semibold text-blue-700 mb-2">
                Head Office
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Jibia Road Opposite Army Barracks, <br />
                Katsina, Katsina State.
              </p>
              <button
                onClick={() => setActiveMap('katsina')}
                className={`mt-4 text-sm font-medium px-3 py-1 rounded-md transition-colors duration-200 
                  ${activeMap === 'katsina'
                    ? 'bg-blue-600 text-white'
                    : 'text-blue-600 hover:bg-blue-100'
                  }`}
                aria-pressed={activeMap === 'katsina'}
              >
                📍 Get Directions
              </button>
            </div>

            {/* Branch Office */}
            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-green-600">
              <h3 className="text-lg sm:text-xl font-semibold text-green-700 mb-2">
                Branch Office
              </h3>
              <p className="text-gray-700 leading-relaxed">
                No.12, Sultan Road, Gidan Abbas, <br />
                Unguwar Sarki, Kaduna.
              </p>
              <button
                onClick={() => setActiveMap('kaduna')}
                className={`mt-4 text-sm font-medium px-3 py-1 rounded-md transition-colors duration-200 
                  ${activeMap === 'kaduna'
                    ? 'bg-green-600 text-white'
                    : 'text-green-600 hover:bg-green-100'
                  }`}
                aria-pressed={activeMap === 'kaduna'}
              >
                📍 Get Directions
              </button>
            </div>
          </div>

          {/* Map Embed */}
          <div
            className="w-full h-[300px] sm:h-[350px] rounded-lg overflow-hidden shadow-lg transition-all duration-700 ease-in-out transform hover:scale-[1.01]"
            data-aos="fade-left"
          >
            <iframe
              key={activeMap}  
              title={`Map of ${activeMap === 'katsina' ? 'Katsina' : 'Kaduna'}`}
              src={maps[activeMap]}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              className="rounded-lg transition-opacity duration-500 ease-in-out"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MapAddress;


