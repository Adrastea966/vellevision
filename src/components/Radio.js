import React, { useEffect, useRef, useState } from 'react';
import { GoArrowUpRight } from "react-icons/go";
import { useTheme } from '../ThemeContext';

function Radio() {
  const [isHovering, setIsHovering] = useState(false);
  const radioRef = useRef(null);
  const { theme } = useTheme();

  useEffect(() => {
    const handleMouseMove = (event) => {
      const rect = radioRef.current.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
      radioRef.current.style.setProperty('--x', `${x}px`);
      radioRef.current.style.setProperty('--y', `${y}px`);
    };

    const handleMouseEnter = () => {
      setIsHovering(true);
    };

    const handleMouseLeave = () => {
      setIsHovering(false);
      const rect = radioRef.current.getBoundingClientRect();
      radioRef.current.style.setProperty('--x', `${rect.width / 2}px`);
      radioRef.current.style.setProperty('--y', `${rect.height / 2}px`);
    };

    const radioElement = radioRef.current;
    radioElement.addEventListener('mousemove', handleMouseMove);
    radioElement.addEventListener('mouseenter', handleMouseEnter);
    radioElement.addEventListener('mouseleave', handleMouseLeave);

    // Set initial position
    const rect = radioElement.getBoundingClientRect();
    radioRef.current.style.setProperty('--x', `${rect.width / 2}px`);
    radioRef.current.style.setProperty('--y', `${rect.height / 2}px`);

    return () => {
      radioElement.removeEventListener('mousemove', handleMouseMove);
      radioElement.removeEventListener('mouseenter', handleMouseEnter);
      radioElement.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div className={`radio ${theme}`} id='radio' ref={radioRef}>
      <h1>Escuchar FM del Valle - 91.1Mhz</h1>
      <div
        className={`circle ${theme}`}
        style={{
          transform: `translate(calc(var(--x, 50%) - 100px), calc(var(--y, 50%) - 100px))`,
        }}
      >
        <a href='https://radio.vallevision.com.ar/' target='_blank' rel='noopener noreferrer'>
          <GoArrowUpRight />
        </a>
      </div>
    </div>
  );
}

export default Radio;