//Footer
import React from 'react';
import { FaInstagram, FaFacebookF, FaPhoneAlt } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { useTheme } from '../ThemeContext';

function Footer() {
    const { theme } = useTheme();
    return (
        <div className={`footer ${theme}`} id='footer'>
            <div className='footer-izquierda'>
                <h2>Vallevision</h2>
            </div>
            <div className='footer-medio'>
                <h2>Contacto</h2>
                <div><FaPhoneAlt />3755 300576</div>
                <div><MdOutlineMail/>info@vallevision.com.ar</div>
            </div>
            <div className='footer-derecho'>
                <a href="https://www.instagram.com/vallevision_digital" target='_blank' className="icon2 icon-ig2"><FaInstagram className="uil uil-instagram" /></a>
                <a href="https://www.facebook.com/sgsvallevision" target='_blank' className="icon2 icon-face"><FaFacebookF className="uil uil-facebook" /></a>
            </div>

            <div className={`copy ${theme}`}> © 2024 Vallevision. Todos los derechos reservados. Diseño y desarrollo por <a href='https://elydevelopsit.com/' target='_blank'>Ely</a></div>
        </div>
    );
}

export default Footer;