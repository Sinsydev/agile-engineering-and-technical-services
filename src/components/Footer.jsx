import React from 'react';
import { FaGithub, FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-950 text-gray-300 py-8 px-6 md:px-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
        {/* Left Side: Site Summary or Copyright */}
        <div>
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Agile Engineering & Technical Services Ltd.
          </p>
          <p className="text-xs text-gray-500">
            All rights reserved.
          </p>
        </div>

        {/* Right Side: Developer Credit */}
        <div className="flex flex-col items-center md:items-end gap-2">
          <p className="text-sm font-medium">
            Built by <span className="text-white font-semibold">Sinsy Frontend Dev</span>
          </p>
          <div className="flex gap-4 text-xl">
            {/* GitHub */}
            <a
              href="https://github.com/Sinsydev"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-transform transform hover:scale-110"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>

            {/* WhatsApp */}
            <a
              href="https://wa.me/2347063361518"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-green-500 transition-transform transform hover:scale-110"
              aria-label="WhatsApp"
            >
              <FaWhatsapp />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
