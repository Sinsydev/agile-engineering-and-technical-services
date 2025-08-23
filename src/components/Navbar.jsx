 import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 bg-black/40 backdrop-blur-md shadow-md px-4 sm:px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <img
            src="/images/logo.webp"
            alt="Agile Engineering Logo"
            className="h-10 w-auto"
            loading="lazy"
          />
        </div>

        {/* Desktop Links */}
        <ul className="hidden md:flex gap-6 text-white font-medium">
          <li><Link to="/" className="hover:text-blue-600">Home</Link></li>
          <li><Link to="/about" className="hover:text-blue-600">About Us</Link></li>
          <li><Link to="/electrical-services" className="hover:text-blue-600">Electrical Services</Link></li>
          <li><Link to="/solar-installation" className="hover:text-blue-600">Solar Installation</Link></li>
          <li><Link to="/contact" className="hover:text-blue-600">Contact Us</Link></li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-white focus:outline-none"
          aria-label="Toggle Menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </nav>

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-16 left-0 w-64 h-[calc(100%-64px)] bg-black/40 backdrop-blur-md shadow-lg z-40 transform transition-transform duration-300 overflow-y-auto ${
          menuOpen ? 'translate-x-0' : 'translate-x-[100vw]'
        } md:hidden`}
      >
        <div className="flex justify-end p-4">
          <button onClick={closeMenu} aria-label="Close Menu">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <ul className="flex flex-col items-start pl-6 gap-4 text-white font-semibold">
          <li><Link to="/" onClick={closeMenu} className="hover:text-blue-400">Home</Link></li>
          <li><Link to="/about" onClick={closeMenu} className="hover:text-blue-400">About Us</Link></li>
          <li><Link to="/electrical-services" onClick={closeMenu} className="hover:text-blue-400">Electrical Services</Link></li>
          <li><Link to="/solar-installation" onClick={closeMenu} className="hover:text-blue-400">Solar Installation</Link></li>
          <li><Link to="/contact" onClick={closeMenu} className="hover:text-blue-400">Contact Us</Link></li>
        </ul>
      </div>

      {/* Backdrop */}
      {menuOpen && (
        <div
          onClick={closeMenu}
          className="fixed inset-0 bg-black opacity-40 z-30 md:hidden"
        />
      )}
    </>
  );
};

export default Navbar;
















