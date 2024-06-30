import React, { useEffect, useRef, useState } from 'react';
import { FaWifi } from "react-icons/fa6";
import { PiTelevisionSimpleBold } from "react-icons/pi";
import anime from 'animejs';
import { useTheme } from '../ThemeContext';
import ScrollToTopButton from './ScrollToTopButton'; 
import { Link } from 'react-router-dom';

function Servicios() {
    const h1Ref = useRef(null);
    const { theme } = useTheme();
    const [isButtonVisible, setIsButtonVisible] = useState(false);

    useEffect(() => {
        let textWrapper = document.querySelector('.ml11 .letters');
        textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        anime.timeline({ loop: false })
                            .add({
                                targets: '.ml11 .letter',
                                rotateY: [-90, 0],
                                duration: 1300,
                                delay: (el, i) => 45 * i
                            }).add({
                                targets: '.ml11',
                                duration: 1000,
                                easing: "easeOutExpo",
                                delay: 1000
                            });
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.5 }
        );

        if (h1Ref.current) {
            observer.observe(h1Ref.current);
        }

        const serviciosObserver = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    setIsButtonVisible(entry.isIntersecting);
                });
            },
            { threshold: 0.5 }
        );

        const serviciosElement = document.getElementById('servicios');
        if (serviciosElement) {
            serviciosObserver.observe(serviciosElement);
        }

        return () => {
            if (h1Ref.current) {
                observer.unobserve(h1Ref.current);
            }
            if (serviciosElement) {
                serviciosObserver.unobserve(serviciosElement);
            }
        };
    }, []);

    return (
        <div className={`servicios ${theme}`} id='servicios'>
            <div className={`contenedor-servicios ${theme}`}></div>

            <div className='contenedor-tarjetas-y-texto'>
                <div className={`servicios-ofrecemos ${theme}`}>
                    <h1 ref={h1Ref} className="ml11">
                        <span className="text-wrapper">
                            <span className="letters">Servicios que ofrecemos</span>
                        </span>
                    </h1>
                    <p>Te ofrecemos servicios de <strong>internet y televisión.</strong> Echa
                        un vistazo a nuestra <strong>grilla de señales</strong> y a nuestros <strong>planes</strong></p>
                </div>

                <div className="container-solo-cards">

                    <div className={`card ${theme}`}>
                        <div className="cover-card">
                            <img src={process.env.PUBLIC_URL + '/img/internet-stock.jpg'} alt="Imagen stock de Internet" />
                        </div>
                        <h2>Internet</h2>
                        <p>Tenemos planes accesibles de internet que se van a ajustar a sus necesidades. Si querés conocer más,
                            clikea acá abajo.</p>
                        <div className={`footer-card ${theme}`}>
                            <FaWifi />
                            <div className="services">
                                <button className={`btn-servicio ${theme}`}>
                                <Link to='/internet'>Ver servicio</Link></button>
                            </div>
                        </div>
                    </div>

                    <div className={`card ${theme}`}>
                        <div className="cover-card">
                            <img src={process.env.PUBLIC_URL + '/img/tv-stock.jpg'} alt="Imagen stock de una televisión" />
                        </div>
                        <h2>Televisión</h2>
                        <p>Tenemos la grilla más amplia de la zona, con los canales más populares y esos canales especiales que
                            no encontrarás en otro lugar. Para más información, clickea acá abajo.</p>
                        <div className={`footer-card ${theme}`}>
                            <PiTelevisionSimpleBold />
                            <div className="services">
                                <button className={`btn-servicio ${theme}`}>
                                <Link to='/television'>Ver servicio</Link></button>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
            <ScrollToTopButton isVisible={isButtonVisible} /> {/* Añade el botón aquí */}
        </div>
    )
}

export default Servicios;
