import { React, useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useTheme } from '../ThemeContext';
import { FaArrowLeft } from "react-icons/fa6";
import { RiHomeLine } from "react-icons/ri";
import { IoIosArrowForward } from "react-icons/io";
import { RiFileList2Line } from "react-icons/ri";
import { GrGroup } from "react-icons/gr";
import { MdOutlineWorkOutline } from "react-icons/md";
import { VscSend } from "react-icons/vsc";

const NavbarInter = () => {
  const [isSubMenu1Visible, setSubMenu1Visible] = useState(false);
  const [isNavResponsiveVisible, setNavResponsiveVisible] = useState(false);
  const { theme } = useTheme();
  const navigate = useNavigate();

  const handleArrowClick = () => {
    setNavResponsiveVisible(!isNavResponsiveVisible);
  };

  const handleCloseMenu = () => {
    setNavResponsiveVisible(false);
  };

  const handleNavigationToGrilla = () => {
    navigate('/', { state: { scrollToGrilla: true } });
    setTimeout(() => {
      const grillaSection = document.getElementById('grilla');
      if (grillaSection) {
        grillaSection.scrollIntoView({ behavior: 'smooth' });
      }
      window.history.replaceState(null, '', '/grilla');
    }, 100);
  };

  // Función general para navegación con scroll
  const handleNavigation = (path) => {
    navigate(path);
    setTimeout(() => {
      const elementId = path.startsWith('/#') ? path.slice(2) : path;  // Remueve el '/#' del path
      const element = document.getElementById(elementId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <>
      <div className={`navbar ${theme}`}>
        <ul className='navbar-lista'>
          <li className='navbar-lista-item'>
            <Link to='/#inicio' onClick={() => handleNavigation('/#inicio')}>Inicio</Link>
          </li>
          <li className='navbar-lista-item'>
            <a onClick={handleNavigationToGrilla}>Grilla</a>
          </li>
          <li className='navbar-lista-item'>
            <Link to='/#clientes' onClick={() => handleNavigation('/#clientes')}>Clientes</Link>
          </li>
          <li
            className='navbar-lista-item-servicios'
            onMouseEnter={() => setSubMenu1Visible(true)}
            onMouseLeave={() => setSubMenu1Visible(false)}>
            <Link to='/#servicios' onClick={() => handleNavigation('/#servicios')}>Servicios</Link>
            <ul className={`submenu ${isSubMenu1Visible ? 'show' : ''}`}>
              <li className='navbar-lista-item-submenu'>
                <Link to='/internet'>Internet</Link>
              </li>
              <li className='navbar-lista-item-submenu'>
                <Link to='/television'>Televisión</Link>
              </li>
            </ul>
          </li>
          <li className='navbar-lista-item'>
            <Link to='/#contacto' onClick={() => handleNavigation('/#contacto')}>Contacto</Link>
          </li>
        </ul>
      </div>

      <div className={`navbar-responsive ${theme} ${isNavResponsiveVisible ? 'active' : ''}`}>
        <FaArrowLeft className={`uil uil-arrow-left arrow-in ${theme} ${isNavResponsiveVisible ? 'rotate' : ''}`} onClick={handleArrowClick} />
        <ul className={`list ${theme}`} style={{ visibility: isNavResponsiveVisible ? 'visible' : 'hidden' }}>
          <li className="list-item">
            <div className="list-button">
              <RiHomeLine className={`il uil-estate list-icon ${theme}`} />
              <Link to="/#inicio" className={`nav-link ${theme}`} onClick={() => handleNavigation('/#inicio')}>Inicio</Link>
            </div>
          </li>
          <li className="list-item">
            <div className="list-button">
              <RiFileList2Line className={`il uil-estate list-icon ${theme}`} />
              <a onClick={handleNavigationToGrilla}>Grilla</a>
            </div>
          </li>
          <li className="list-item">
            <div className="list-button">
              <GrGroup className={`il uil-estate list-icon ${theme}`} />
              <Link to="/#clientes" className={`nav-link ${theme}`} onClick={() => handleNavigation('/#clientes')}>Clientes</Link>
            </div>
          </li>
          <li className="list-item list-item-click">
            <div className="list-button list-button-click">
              <MdOutlineWorkOutline className={`uil uil-users-alt list-icon ${theme}`} />
              <Link to="/#servicios" className={`nav-link ${theme}`} onClick={() => handleNavigation('/#servicios')}>Servicios</Link>
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
              <Link to="/#contacto" className={`nav-link ${theme}`} onClick={() => handleNavigation('/#contacto')}>Contacto</Link>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
};

export default NavbarInter;