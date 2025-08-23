 import React from 'react';
import { FaShieldAlt, FaPlug, FaTools, FaInfoCircle } from 'react-icons/fa';
import { MdVerified, MdElectricalServices, MdSolarPower } from 'react-icons/md';
import { GiPowerLightning } from 'react-icons/gi';
import { HiOfficeBuilding } from 'react-icons/hi';

const SearchFooterSection = () => {
  return (
    <section className="bg-gray-400 py-10 px-4 md:px-12">
      <div
        className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 text-sm text-gray-900"
        data-aos="fade-up"
      >
        {/* Group 1: Trusted */}
        <div className="space-y-2">
          <h4 className="flex items-center gap-2 font-semibold text-base mb-1">
            <FaShieldAlt /> Trusted
          </h4>
          <p><MdVerified className="inline-block mr-1" /> Katsina State Govnt.</p>
          <p><MdVerified className="inline-block mr-1" /> Kaduna State Govnt.</p>
          <p><MdVerified className="inline-block mr-1" /> VerifiedElectro</p>
          <p><MdVerified className="inline-block mr-1" /> Polaris Grid</p>
          <p><MdVerified className="inline-block mr-1" /> Jigawa State Govnt.</p>
        </div>

        {/* Group 2: Popular Services */}
        <div className="space-y-2">
          <h4 className="flex items-center gap-2 font-semibold text-base mb-1">
            <FaPlug /> Popular Services
          </h4>
          <p><MdElectricalServices className="inline-block mr-1" /> Electrical Wiring</p>
          <p><MdSolarPower className="inline-block mr-1" /> Solar Panel Setup</p>
          <p><GiPowerLightning className="inline-block mr-1" /> Grid Connection</p>
          <p><FaTools className="inline-block mr-1" /> Smart Poles</p>
        </div>

        {/* Group 3: Project Types */}
        <div className="space-y-2">
          <h4 className="flex items-center gap-2 font-semibold text-base mb-1">
            <HiOfficeBuilding /> Project Types
          </h4>
          <p><FaTools className="inline-block mr-1" /> Residential</p>
          <p><FaTools className="inline-block mr-1" /> Commercial</p>
          <p><FaTools className="inline-block mr-1" /> Industrial</p>
          <p><FaTools className="inline-block mr-1" /> Rural Power</p>
        </div>

        {/* Group 4: More */}
        <div className="space-y-2">
          <h4 className="flex items-center gap-2 font-semibold text-base mb-1">
            <FaInfoCircle /> More
          </h4>
          <p><MdVerified className="inline-block mr-1" /> Certifications</p>
          <p><MdVerified className="inline-block mr-1" /> Client Reviews</p>
          <p><MdVerified className="inline-block mr-1" /> FAQs</p>
          <p><MdVerified className="inline-block mr-1" /> Connect With Us</p>
        </div>
      </div>
    </section>
  );
};

export default SearchFooterSection;

