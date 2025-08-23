 import React from 'react';
import {
  FaInstagram,
  FaFacebookF,
  FaWhatsapp,
  FaTiktok,
  FaYoutube,
  FaTools,
  FaBolt,
  FaCogs,
  FaCertificate,
} from 'react-icons/fa';

const ContactHero = () => {
  return (
    <section className="bg-black text-white py-12 sm:py-16 px-4 sm:px-6 md:px-12">
      <div className="max-w-7xl mx-auto space-y-12 sm:space-y-16">
        
        {/* Title */}
        <div className="text-center" data-aos="fade-up">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 mt-6">
            Let’s Work Together
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto text-sm sm:text-base">
            At Agile Engineering & Technical Services, we combine innovation, experience,
            and trust to power up your future.
          </p>
        </div>

        {/* Services Summary */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-center"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          {[
            { icon: <FaBolt className="text-yellow-400 text-3xl mb-3 mx-auto" />, label: "Electrical Installation" },
            { icon: <FaTools className="text-blue-400 text-3xl mb-3 mx-auto" />, label: "Pole Construction" },
            { icon: <FaCogs className="text-green-400 text-3xl mb-3 mx-auto" />, label: "Transformer Maintenance" },
            { icon: <FaCertificate className="text-red-400 text-3xl mb-3 mx-auto" />, label: "Power Auditing" }
          ].map((service, idx) => (
            <div
              key={idx}
              className="bg-gray-900 p-6 rounded-lg shadow-md hover:scale-105 transition"
            >
              {service.icon}
              <h4 className="font-semibold text-base sm:text-lg">{service.label}</h4>
            </div>
          ))}
        </div>

        {/* Trusted Partners */}
        <div className="text-center" data-aos="fade-up" data-aos-delay="300">
          <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Trusted by</h3>
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 text-sm md:text-base text-gray-300">
            <span>Katsina State Government</span>
            <span>AfDin Construction Ltd</span>
            <span>Rural Electrification Agency</span>
            <span>Power Works Nigeria</span>
            <span>Hightech Energy</span>
          </div>
        </div>

        {/* Certifications */}
        <div className="text-center" data-aos="fade-up" data-aos-delay="400">
          <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Certifications</h3>
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4 text-sm md:text-base text-gray-400">
            <span>ISO Certified</span>
            <span>CAC Registered</span>
            <span>NERC Compliant</span>
            <span>Federal Ministry of Works Approval</span>
          </div>
        </div>

        {/* Contact Details */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10"
          data-aos="fade-up"
          data-aos-delay="500"
        >
          <div className="space-y-4">
            <h4 className="text-lg sm:text-xl font-semibold text-blue-400">Head Office</h4>
            <p className="text-gray-300 text-sm sm:text-base">
              Jibia Road Opposite Army Barracks, <br />
              Katsina, Katsina State, Nigeria.
            </p>

            <h4 className="text-lg sm:text-xl font-semibold text-green-400 mt-6">Branch Office</h4>
            <p className="text-gray-300 text-sm sm:text-base">
              No.12, Sultan Road, Gidan Abbas, <br />
              Unguwar Sarki, Kaduna, Nigeria.
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg sm:text-xl font-semibold text-yellow-400">Contact</h4>
            <p className="text-gray-300 text-sm sm:text-base">
              📧 Email: agileengineeringlimited@gmail.com
            </p>
            <p className="text-gray-300 text-sm sm:text-base">
              📞 +234 803 5999 507 <br />
              📞 +234 802 2055 877 <br />
              📞 +234 803 2488 114
            </p>

            {/* Social Media Icons */}
            <div className="flex gap-4 sm:gap-6 text-2xl sm:text-3xl mt-4">
              {[
                { href: "https://instagram.com/agile_engineering_limited", icon: <FaInstagram />, color: "text-pink-500" },
                { href: "https://facebook.com/agile_engineering_limited", icon: <FaFacebookF />, color: "text-blue-600" },
                { href: "https://wa.me/2348035999507", icon: <FaWhatsapp />, color: "text-green-500" },
                { href: "https://www.tiktok.com/agile_engineering_limited", icon: <FaTiktok />, color: "text-white" },
                { href: "https://www.youtube.com/@AgileEngineeringAndTechnicalSe", icon: <FaYoutube />, color: "text-red-500" }
              ].map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${social.color} hover:scale-110 transition focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-${social.color}`}
                  aria-label={social.href.split(".")[1]} 
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactHero;




