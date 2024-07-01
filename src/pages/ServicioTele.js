import React, { useEffect } from 'react';
import { useTheme } from '../ThemeContext';
import NavbarTele from '../components/NavbarTele';
import Footer from '../components/Footer';
import { FiMoon, FiSun } from "react-icons/fi";
import { FaArrowRight } from "react-icons/fa6";
import { Link, useNavigate } from 'react-router-dom';
import anime from 'animejs';

function ServicioTele() {
    const { theme, toggleTheme } = useTheme();
    const navigate = useNavigate();

    useEffect(() => {
        let textWrapper = document.querySelector('.ml15 .letters');
        textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

        anime.timeline({ loop: false })
            .add({
                targets: '.ml15 .letter',
                rotateY: [-90, 0],
                duration: 1300,
                delay: (el, i) => 45 * i
            }).add({
                targets: '.ml15',
                duration: 1000,
                easing: "easeOutExpo",
                delay: 1000
            });
    }, []);

    const handleNavigation = (path) => {
        navigate(path);
        setTimeout(() => {
            const elementId = path.startsWith('/#') ? path.slice(2) : path;
            const element = document.getElementById(elementId);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }, 100);
    };

    return (
        <>
            <section className={`servicio-tele ${theme}`} id='servicio-tele'>

                <div className='logo logo2'></div>
                <NavbarTele />
                <div className='toggle-container toggle2 toggle-padding'>
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
                <span className={`degrade7 ${theme}`}></span>
                <span className={`degrade8 ${theme}`}></span>
                <div className='servicio-tele-contenido'>

                    <div className={`tele-top ${theme}`}>
                        <div className='tele-top-titulo'>
                            <h1 className="ml15">
                                <span className="text-wrapper">
                                    <span className="letters">Nuestro servicio de televisión</span>
                                </span>
                            </h1>
                            <p>Dentro de nuestros servicios se encuentra la TV. Selecciona tu localidad para poder ver los planes correspondientes a tu zona.</p>
                            <button className={`btn-grilla ${theme}`}><Link to='/#grilla' onClick={() => handleNavigation('/#grilla')}>Grilla<FaArrowRight /></Link></button>
                        </div>
                    </div>

                    <div className='tele-bottom'>
                        <div className={`tele-tarjeta tele-tarjeta-1 ${theme}`}>
                            <div className={`tele-tarjeta-top ${theme}`}>
                                <h4>Básico analógico</h4>
                            </div>
                            <div className={`tele-tarjeta-medio ${theme}`}>
                                <div className='tele-tarjeta-medio-canales'>
                                    <span className={`tarjeta-medio-span-canales ${theme}`}>+60 canales</span>
                                    <span className={`tarjeta-medio-span-calidad ${theme}`}>En calidad analógico</span>
                                </div>
                            </div>
                            <div className='tarjeta-bottom'>
                                <button className={`btn-servicio ${theme}`}><a href="https://wa.me/3755300576" target='_blank'>Contratar</a></button>
                            </div>
                        </div>
                        <div className={`tele-tarjeta tele-tarjeta-2 ${theme}`}>
                            <div className={`tele-tarjeta-top ${theme}`}>
                                <h4>Plan Básico HD</h4>
                            </div>
                            <div className={`tele-tarjeta-medio ${theme}`}>
                                <div className='tele-tarjeta-medio-canales'>
                                    <span className={`tarjeta-medio-span-canales ${theme}`}>+80 canales</span>
                                    <span className={`tarjeta-medio-span-calidad ${theme}`}>Canales Digitales HD</span>
                                </div>
                            </div>
                            <div className='tarjeta-bottom'>
                                <button className={`btn-servicio ${theme}`}><a href="https://wa.me/3755300576" target='_blank'>Contratar</a></button>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
            <Footer />
        </>
    );
}

export default ServicioTele;
