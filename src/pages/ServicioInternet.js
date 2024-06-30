//Servicio Internet
import React, { useEffect, useState } from 'react';
import { useTheme } from '../ThemeContext';
import NavbarInter from '../components/NavbarInter';
import Footer from '../components/Footer';
import { FiMoon, FiSun } from "react-icons/fi";
import anime from 'animejs';

function ServicioInternet() {
    const { theme, toggleTheme } = useTheme();
    const [localidad, setLocalidad] = useState('');

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

    const handleLocalidadChange = (e) => {
        setLocalidad(e.target.value);
    };

    return (
        <>
            <div className='servicio-tele-header'>
                <div className='logo'></div>
                <NavbarInter />
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
            </div>

            <section className={`servicio-internet ${theme}`} id='servicio-internet'>
                <span className={`degrade7 ${theme}`}></span>
                <span className={`degrade8 ${theme}`}></span>
                <div className='servicio-tele-contenido'>

                    <div className={`tele-top ${theme}`}>
                        <div className='tele-top-titulo'>
                            <h1 className="ml15">
                                <span className="text-wrapper">
                                    <span className="letters">Nuestro servicio de Internet</span>
                                </span>
                            </h1>
                            <p>Dentro de nuestros servicios se encuentra el Internet. Selecciona tu localidad para poder ver los planes correspondientes a tu zona.</p>
                        </div>
                        <div className={`localidad ${theme}`}>
                            <h3>Seleccionar localidad</h3>
                            <select onChange={handleLocalidadChange}>
                                <option className='option' value="">Seleccione una localidad</option>
                                <option className='option' value="Aristóbulo del Valle">Aristóbulo del Valle</option>
                                <option className='option' value="Salto Encantado">Salto Encantado</option>
                                <option className='option' value="Campo Grande">Campo Grande</option>
                                <option className='option' value="Dos de Mayo">Dos de Mayo</option>
                            </select>
                        </div>
                    </div>

                    <div className='tele-bottom'>
                        {localidad === 'Dos de Mayo' ? (
                            <div className={`mensaje-no-disponible ${theme}`}>
                                <div className='mensaje-error'>{/*Imagen de error al cargar*/}</div>
                                <p style={{ textAlign: 'center', textDecoration: 'underline' }}>
                                    Lo sentimos, servicio de Internet no disponible en esta localidad.
                                </p>
                            </div>
                        ) : (
                            <>
                                <div className={`tele-tarjeta tele-tarjeta-1 ${theme}`}>
                                    <div className={`tele-tarjeta-top ${theme}`}>
                                        <h4>Plan básico</h4>
                                    </div>
                                    <div className={`tele-tarjeta-top-2 ${theme}`}>
                                        <h4>Internet</h4>
                                    </div>
                                    <div className={`tele-tarjeta-medio ${theme}`}>
                                        <p>$Precio del plan</p>
                                        <div className='tele-tarjeta-medio-canales'>
                                            <span className={`tarjeta-medio-span-canales ${theme}`}>50Mbps de descarga </span>
                                            <span className={`tarjeta-medio-span-calidad ${theme}`}>Hasta 10Mbps Subida</span>
                                        </div>
                                    </div>
                                    <div className='tarjeta-bottom'>
                                        <button className={`btn-servicio ${theme}`}><a href="https://wa.me/3755300576" target='_blank'>Contratar</a></button>
                                    </div>
                                </div>
                                <div className={`tele-tarjeta tele-tarjeta-2 ${theme}`}>
                                    <div className={`tele-tarjeta-top ${theme}`}>
                                        <h4>Plan Súper</h4>
                                    </div>
                                    <div className={`tele-tarjeta-top-2 ${theme}`}>
                                        <h4>Internet</h4>
                                    </div>
                                    <div className={`tele-tarjeta-medio ${theme}`}>
                                        <p>$Precio del plan</p>
                                        <div className='tele-tarjeta-medio-canales'>
                                            <span className={`tarjeta-medio-span-canales ${theme}`}>100Mbps de descarga</span>
                                            <span className={`tarjeta-medio-span-calidad ${theme}`}>Hasta 10Mbps Subida</span>
                                        </div>
                                    </div>
                                    <div className='tarjeta-bottom'>
                                        <button className={`btn-servicio ${theme}`}><a href="https://wa.me/3755300576" target='_blank'>Contratar</a></button>
                                    </div>
                                </div>
                                <div className={`tele-tarjeta tele-tarjeta-3 ${theme}`}>
                                    <div className={`tele-tarjeta-top ${theme}`}>
                                        <h4>Plan Premium</h4>
                                    </div>
                                    <div className={`tele-tarjeta-top-2 ${theme}`}>
                                        <h4>Internet</h4>
                                    </div>
                                    <div className={`tele-tarjeta-medio ${theme}`}>
                                        <p>$Precio del plan</p>
                                        <div className='tele-tarjeta-medio-canales'>
                                            <span className={`tarjeta-medio-span-canales ${theme}`}>300Mbps de descarga</span>
                                            <span className={`tarjeta-medio-span-calidad ${theme}`}>Hasta 10Mbps Subida</span>
                                        </div>
                                    </div>
                                    <div className='tarjeta-bottom'>
                                        <button className={`btn-servicio ${theme}`}><a href="https://wa.me/3755300576" target='_blank'>Contratar</a></button>
                                    </div>
                                </div>
                            </>
                        )}
                    </div>

                </div>
            </section>
            <Footer />
        </>
    );
}

export default ServicioInternet;
