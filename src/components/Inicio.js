import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";
import { FiMoon, FiSun } from "react-icons/fi";
import anime from 'animejs';
import { useTheme } from '../ThemeContext';

function Inicio() {
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    let textWrapper = document.querySelector('.ml10 .letters');
    textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

    anime.timeline({ loop: false })
      .add({
        targets: '.ml10 .letter',
        rotateY: [-90, 0],
        duration: 1300,
        delay: (el, i) => 45 * i
      }).add({
        targets: '.ml10',
        duration: 1000,
        easing: "easeOutExpo",
        delay: 1000
      });
  }, []);

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  useEffect(() => {
    const handleScroll = () => {
      const nosotrosSection = document.getElementById('grilla');
      const scrollTopButton = document.querySelector('.scroll-top-button');

      if (nosotrosSection) {
        const nosotrosSectionPosition = nosotrosSection.getBoundingClientRect().top;

        if (nosotrosSectionPosition <= 0) {
          scrollTopButton.classList.add('show');
        } else {
          scrollTopButton.classList.remove('show');
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollToGrilla) {
      const grillaSection = document.getElementById('grilla');
      if (grillaSection) {
        grillaSection.scrollIntoView({ behavior: 'smooth' });
        window.history.replaceState(null, '', '/grilla');  // Actualizar la URL
      }
    }
  }, [location]);

  return (
    <div className={`contenedor inicio ${theme}`} id='inicio'>
      <div className={`titulo ${theme}`}>
        <h1 className="ml10">
          <span className="text-wrapper">
            <span className="letters">Vallevision</span>
          </span>
        </h1>
      </div>

      <div className='logo'> {/*Imagen del logotipo*/} </div>
      <div className="redes">
        <a href="https://www.instagram.com/vallevision_digital" target="_blank" className={`icon icon-ig ${theme}`}><FaInstagram className="uil uil-instagram" /></a>
        <a href="https://wa.me/3755300576" target="_blank" className={`icon icon-wsp ${theme}`}><FaWhatsapp className="uil uil-whatsapp" /></a>
        <a href="mailto:info@vallevision.com.ar" target="_blank" className={`icon icon-mail ${theme}`}><MdOutlineMail className="uil uil-envelope" /></a>
      </div>

      <div className={`scroll-down ${theme}`}>
        <button className={`btn-scroll ${theme}`}>
          <a href="#servicios">
            <IoIosArrowDown />
          </a>
        </button>
      </div>

      <div className='toggle-container'>
        <div className={`toggle ${theme}`}>
          <button className={`sol ${theme === 'light' ? 'active' : ''}`} onClick={toggleTheme}>
            <FiSun />
            <span>Claro</span>
          </button>
          <button className={`luna ${theme === 'dark' ? 'active' : ''}`} onClick={toggleTheme}>
            <FiMoon />
            <span>Oscuro</span>
          </button>
          <span className={`toggle-fondo ${theme}`}></span>
        </div>
      </div>

      <button className="scroll-top-button" onClick={scrollToTop}><i className="uil uil-angle-up"></i></button>
    </div>
  );
}

export default Inicio;
