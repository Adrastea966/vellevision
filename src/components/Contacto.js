import React, { useEffect, useRef } from 'react';
import { GoLocation } from "react-icons/go";
import anime from 'animejs';
import { useTheme } from '../ThemeContext';

function Contacto() {
    const { theme } = useTheme();

    //Funcionalidad para enviar email
    useEffect(() => {
        const $form = document.querySelector('#form');
        const $buttonMailTo = document.querySelector('#mail-to');

        if ($form) {
            $form.addEventListener('submit', handleSubmit);
        }

        function handleSubmit(event) {
            event.preventDefault();
            const form = new FormData($form);
            $buttonMailTo.setAttribute('href',
                `mailto:info@vallevision.com.ar?subject= Nombre: ${form.get('nombre')} Correo: ${form.get('email')}&body=${form.get('mensaje')}`
            );
            $buttonMailTo.click();
        }

        return () => {
            if ($form) {
                $form.removeEventListener('submit', handleSubmit);
            }
        };
    }, []);

    const h1Ref = useRef(null);
    const h3Ref = useRef(null);

    useEffect(() => {
        const animateText = (selector, ref) => {
            let textWrapper = document.querySelector(`${selector} .letters`);
            if (textWrapper) {
                textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

                const observer = new IntersectionObserver(
                    (entries) => {
                        entries.forEach((entry) => {
                            if (entry.isIntersecting) {
                                anime.timeline({ loop: false })
                                    .add({
                                        targets: `${selector} .letter`,
                                        rotateY: [-90, 0],
                                        duration: 1300,
                                        delay: (el, i) => 45 * i
                                    }).add({
                                        targets: selector,
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

                if (ref.current) {
                    observer.observe(ref.current);
                }

                return () => {
                    if (ref.current) {
                        observer.unobserve(ref.current);
                    }
                };
            }
        };

        animateText('.ml13', h1Ref);
        animateText('.ml14', h3Ref);
    }, []);

    return (
        <div className={`contacto ${theme}`} id='contacto'>
            <div className='mapa-y-adress'>
                <div className="map-section">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3551.809704779812!2d-54.8936578!3d-27.0992955!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94f8493e0326ed51%3A0xab2ab70987a9d853!2sVallevision%20-%20Canal%204%20-%20SGS%20Vallevision%20SRL!5e0!3m2!1ses-419!2sar!4v1719419649802!5m2!1ses-419!2sar"
                        width="100%" height="100%" className='map' allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
                <div className={`address ${theme}`}>
                    <h3 ref={h3Ref} className="ml14">
                        <span className="text-wrapper">
                            <GoLocation /> <span className="letters">¡Estamos aquí!</span>
                        </span>
                    </h3>
                    <span className='span-address'>Avenida de las Américas 568, Aristóbulo del Valle, Misiones.</span>
                </div>
            </div>
            <div className={`contact-form ${theme}`}>
                <form id="form">
                    <h1 ref={h1Ref} className="ml13">
                        <span className="text-wrapper">
                            <span className="letters">Contactanos</span>
                        </span>
                    </h1>
                    <div className={`form-group ${theme}`}>
                        <label htmlFor="nombre">Nombre completo *</label>
                        <input type="text" id="nombre" name="nombre" placeholder="Tu nombre" required />
                    </div>
                    <div className={`form-group ${theme}`}>
                        <label htmlFor="email">Correo electrónico *</label>
                        <input type="email" id="email" name="email" placeholder="tuemail@gmail.com" required />
                    </div>
                    <div className={`form-group ${theme}`}>
                        <label htmlFor="mensaje">Tu mensaje</label>
                        <textarea id="mensaje" name="mensaje" placeholder="Tu mensaje" rows="4"></textarea>
                    </div>
                    <div className={`container-btn-enviar ${theme}`}><button className={`btn-enviar ${theme}`} type="submit">Enviar</button></div>
                </form>
                <a href="mailto:info@vallevision.com.ar" id="mail-to">mail</a>
            </div>
        </div>
    );
}

export default Contacto;
