import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../ThemeContext';
import { FaArrowLeft } from "react-icons/fa6";
import { RiHomeLine } from "react-icons/ri";
import { IoIosArrowForward } from "react-icons/io";
import { RiFileList2Line } from "react-icons/ri";
import { GrGroup } from "react-icons/gr";
import { MdOutlineWorkOutline } from "react-icons/md";
import { VscSend } from "react-icons/vsc";

const Navbar = () => {
  const [isSubMenu1Visible, setSubMenu1Visible] = useState(false);
  const [isNavResponsiveVisible, setNavResponsiveVisible] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    const listElements = document.querySelectorAll('.list-button-click');

    listElements.forEach(listElement => {
      const handleClick = () => {
        listElement.classList.toggle('arrow');
        const menu = listElement.nextElementSibling;
        const height = menu.clientHeight === 0 ? menu.scrollHeight : 0;
        menu.style.height = `${height}px`;
      };

      listElement.addEventListener('click', handleClick);

      return () => {
        listElement.removeEventListener('click', handleClick);
      };
    });
  }, []);

  const handleArrowClick = () => {
    setNavResponsiveVisible(!isNavResponsiveVisible);
  };

  const handleCloseMenu = () => {
    setNavResponsiveVisible(false);
  };

  return (
    <>
      <div className={`navbar ${theme}`}>
        <ul className='navbar-lista'>

          <li className='navbar-lista-item'>
            <a href='#inicio' onClick={(e) => {
              e.preventDefault();
              const contactoSection = document.getElementById('inicio');
              if (contactoSection) {
                contactoSection.scrollIntoView({ behavior: 'smooth' });

                const currentUrl = window.location.pathname;
                if (currentUrl === '/grilla') {
                  window.history.replaceState(null, '', '/');
                }
                window.history.replaceState(null, '', '#inicio');
              }
            }}>Inicio</a>
          </li>

          <li className='navbar-lista-item'>
            <a href='#grilla' onClick={(e) => {
              e.preventDefault(); // Evitar que el navegador maneje el enlace
              const grillaSection = document.getElementById('grilla');
              if (grillaSection) {
                grillaSection.scrollIntoView({ behavior: 'smooth' }); // Desplazamiento suave
                window.history.replaceState(null, '', '/grilla'); // Actualizar la URL sin el hash
              }
            }}>Grilla</a>
          </li>

          <li className='navbar-lista-item'>
            <a href='#clientes' onClick={(e) => {
              e.preventDefault();
              const clientesSection = document.getElementById('clientes');
              if (clientesSection) {
                clientesSection.scrollIntoView({ behavior: 'smooth' });

                const currentUrl = window.location.pathname;
                if (currentUrl === '/grilla') {
                  window.history.replaceState(null, '', '/');
                }
                window.history.replaceState(null, '', '#clientes');
              }
            }}>Clientes</a>
          </li>

          <li className='navbar-lista-item-servicios' onMouseEnter={() => setSubMenu1Visible(true)} onMouseLeave={() => setSubMenu1Visible(false)}>
            <a href='#servicios' onClick={(e) => {
              e.preventDefault();
              const serviciosSection = document.getElementById('servicios');
              if (serviciosSection) {
                serviciosSection.scrollIntoView({ behavior: 'smooth' });

                // Si la URL actual es '/grilla', entonces restablecemos la URL base
                const currentUrl = window.location.pathname;
                if (currentUrl === '/grilla') {
                  window.history.replaceState(null, '', '/');
                }
                window.history.replaceState(null, '', '#servicios');
              }
            }}>Servicios</a>
            <ul className={`submenu ${isSubMenu1Visible ? 'show' : ''}`}>
              <li className='navbar-lista-item-submenu'><Link to='/internet'>Internet</Link></li>
              <li className='navbar-lista-item-submenu'><Link to='/television'>Televisión</Link></li>
            </ul>
          </li>

          <li className='navbar-lista-item'>
            <a href='#contacto' onClick={(e) => {
              e.preventDefault();
              const contactoSection = document.getElementById('contacto');
              if (contactoSection) {
                contactoSection.scrollIntoView({ behavior: 'smooth' });

                const currentUrl = window.location.pathname;
                if (currentUrl === '/grilla') {
                  window.history.replaceState(null, '', '/');
                }
                window.history.replaceState(null, '', '#contacto');
              }
            }}>Contacto</a>
          </li>

        </ul>
      </div>

      <div className={`navbar-responsive ${theme} ${isNavResponsiveVisible ? 'active' : ''}`}>
        <FaArrowLeft className={`uil uil-arrow-left arrow-in ${theme} ${isNavResponsiveVisible ? 'rotate' : ''}`} onClick={handleArrowClick} />

        <ul className={`list ${theme}`} style={{ visibility: isNavResponsiveVisible ? 'visible' : 'hidden' }}>
          <li className="list-item">
            <div className="list-button">
              <RiHomeLine className={`il uil-estate list-icon ${theme}`} />
              <a href="#" className={`nav-link ${theme}`} onClick={(e) => {
                e.preventDefault();
                const inicioSection = document.getElementById('inicio');
                if (inicioSection) {
                  inicioSection.scrollIntoView({ behavior: 'smooth' });

                  const currentUrl = window.location.pathname;
                  if (currentUrl === '/grilla') {
                    window.history.replaceState(null, '', '/');
                  }
                  window.history.replaceState(null, '', '#inicio');
                }
                handleCloseMenu();
              }}>Inicio</a>
            </div>
          </li>

          <li className="list-item">
            <div className="list-button">
              <RiFileList2Line className={`il uil-estate list-icon ${theme}`} />
              <a href="#grilla" className={`nav-link ${theme}`} onClick={(e) => {
                e.preventDefault();
                const grillaSection = document.getElementById('grilla');
                if (grillaSection) {
                  grillaSection.scrollIntoView({ behavior: 'smooth' });
                  window.history.replaceState(null, '', '/grilla');
                }
                handleCloseMenu();
              }}>Grilla</a>
            </div>
          </li>

          <li className="list-item">
            <div className="list-button">
              <GrGroup className={`il uil-estate list-icon ${theme}`} />
              <a href="#clientes" className={`nav-link ${theme}`} onClick={(e) => {
                e.preventDefault();
                const clientesSection = document.getElementById('clientes');
                if (clientesSection) {
                  clientesSection.scrollIntoView({ behavior: 'smooth' });

                  const currentUrl = window.location.pathname;
                  if (currentUrl === '/grilla') {
                    window.history.replaceState(null, '', '/');
                  }
                  window.history.replaceState(null, '', '#clientes');
                }
                handleCloseMenu();
              }}>Clientes</a>
            </div>
          </li>

          <li className="list-item list-item-click">
            <div className="list-button list-button-click">
              <MdOutlineWorkOutline className={`uil uil-users-alt list-icon ${theme}`} />
              <a href="#servicios" className={`nav-link ${theme}`} onClick={(e) => {
                e.preventDefault();
                const serviciosSection = document.getElementById('servicios');
                if (serviciosSection) {
                  serviciosSection.scrollIntoView({ behavior: 'smooth' });

                  const currentUrl = window.location.pathname;
                  if (currentUrl === '/grilla') {
                    window.history.replaceState(null, '', '/');
                  }
                  window.history.replaceState(null, '', '#servicios');
                }
                handleCloseMenu();
              }}>Servicios</a>
              <IoIosArrowForward className={`uil uil-angle-right list-arrow ${theme}`} />
            </div>

            <ul className={`list-show ${theme}`}>
              <li className="list-inside">
                <Link to="/internet" className={`nav-link nav-link-inside ${theme}`} onClick={handleCloseMenu}>Internet</Link>
              </li>
              <li className="list-inside">
                <Link to="/television" className={`nav-link nav-link-inside ${theme}`} onClick={handleCloseMenu}>Televisión</Link>
              </li>
            </ul>
          </li>

          <li className={`list-item ${theme}`}>
            <div className="list-button">
              <VscSend className={`uil list-icon ${theme}`} />
              <a href="#contacto" className={`nav-link ${theme}`} onClick={(e) => {
                e.preventDefault();
                const contactoSection = document.getElementById('contacto');
                if (contactoSection) {
                  contactoSection.scrollIntoView({ behavior: 'smooth' });

                  const currentUrl = window.location.pathname;
                  if (currentUrl === '/grilla') {
                    window.history.replaceState(null, '', '/');
                  }
                  window.history.replaceState(null, '', '#contacto');
                }
                handleCloseMenu();
              }}>Contacto</a>
            </div>
          </li>
        </ul>
        
      </div>

    </>
  );
};

export default Navbar;
