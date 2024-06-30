import React from 'react';
import { FaArrowUp } from 'react-icons/fa';
import { useTheme } from '../ThemeContext';

const ScrollToTopButton = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  const { theme } = useTheme();

  return (
    <button className={`scroll-to-top ${theme}`} onClick={scrollToTop}>
      <FaArrowUp />
    </button>
  );
};

export default ScrollToTopButton;
