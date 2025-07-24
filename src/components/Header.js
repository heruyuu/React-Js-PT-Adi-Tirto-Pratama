import React, { useState, useEffect } from 'react';
import { FaHome, FaInfoCircle, FaCogs, FaEnvelope, FaBars } from 'react-icons/fa';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Tambahkan fungsi baru untuk menutup menu
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-gray-800' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a className="text-2xl font-bold text-white" href="#">PT. Adi Tirto Pratama</a>
          <button 
            className="navbar-toggler block md:hidden text-white" 
            type="button"
            onClick={toggleMenu}
          >
            <FaBars className="text-2xl" />
          </button>
          <div className="hidden md:block">
            <ul className="flex space-x-8">
              <li><a className="nav-link text-white hover:text-gray-300 flex items-center" href="#" onClick={closeMenu}><FaHome className="mr-2" /> Home</a></li>
              <li><a className="nav-link text-white hover:text-gray-300 flex items-center" href="#about" onClick={closeMenu}><FaInfoCircle className="mr-2" /> About</a></li>
              <li><a className="nav-link text-white hover:text-gray-300 flex items-center" href="#service" onClick={closeMenu}><FaCogs className="mr-2" /> Services</a></li>
              <li><a className="nav-link text-white hover:text-gray-300 flex items-center" href="#contact" onClick={closeMenu}><FaEnvelope className="mr-2" /> Contact</a></li>
            </ul>
          </div>
        </div>
        <div className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden mt-2`}>
          <ul className="flex flex-col space-y-2">
            <li><a className="nav-link block py-2 text-white flex items-center" href="#" onClick={closeMenu}><FaHome className="mr-2" /> Home</a></li>
            <li><a className="nav-link block py-2 text-white flex items-center" href="#about" onClick={closeMenu}><FaInfoCircle className="mr-2" /> About</a></li>
            <li><a className="nav-link block py-2 text-white flex items-center" href="#service" onClick={closeMenu}><FaCogs className="mr-2" /> Services</a></li>
            <li><a className="nav-link block py-2 text-white flex items-center" href="#contact" onClick={closeMenu}><FaEnvelope className="mr-2" /> Contact</a></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
