import React, { useState, useEffect } from 'react';
import { FaChevronUp } from 'react-icons/fa';

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      const aboutSection = document.getElementById('about');
      if (aboutSection) {
        const aboutSectionTop = aboutSection.offsetTop;
        if (window.scrollY > aboutSectionTop) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    isVisible && (
      <button
        onClick={scrollToTop}
        className="fixed bottom-4 right-4 bg-black bg-opacity-50 text-white p-3 rounded-md shadow-lg hover:bg-black transition duration-300 focus:outline-none"
        aria-label="Scroll to top"
      >
        <FaChevronUp className="text-xl" />
      </button>
    )
  );
};

export default ScrollToTopButton;
