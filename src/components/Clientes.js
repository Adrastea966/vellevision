//Clientes
import React, { useState, useRef, useEffect } from 'react';
import { GoArrowUpRight } from "react-icons/go";
import { IoIosInformationCircleOutline } from "react-icons/io";
import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { LuClock } from "react-icons/lu";
import { IoIosArrowDown } from "react-icons/io";
import anime from 'animejs';
import { useTheme } from '../ThemeContext';

function Accordion({ question, answer }) {
    const [isOpen, setIsOpen] = useState(false);
    const contentRef = useRef(null);
    const { theme } = useTheme();

    // Animación altura acordeón
    useEffect(() => {
        if (isOpen) {
            contentRef.current.style.maxHeight = `${contentRef.current.scrollHeight}px`;
        } else {
            contentRef.current.style.maxHeight = '0px';
        }
    }, [isOpen]);

    const handleClick = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className={`accordion-item ${theme}`}>
            <div className={`accordion-question ${theme}`} onClick={handleClick}>
                <h4>{question}</h4>
                <span className={isOpen ? 'icon-flip' : ''}>
                    <IoIosArrowDown />
                </span>
            </div>
            <div
                ref={contentRef}
                className={`accordion-answer ${theme} ${isOpen ? 'open' : ''}`}
                dangerouslySetInnerHTML={{ __html: answer }}
            />
        </div>
    );
}

function Clientes() {
    const faqsAdmin = [
        { question: 'Medios de pago', answer: 'Para <strong>pagar tus facturas</strong> de forma <strong>más rápida</strong> y <strong>segura</strong>, podés adherirte a débito automático con tarjeta de crédito o CBU.<br/><br/><strong>En efectivo:</strong> En nuestras sucursales.<br/><br/><strong>Tarjeta de Crédito y Débito en nuestras sucursales:</strong><br/>- Visa<br/>- Mastercard<br/>- Maestro' },
        { question: 'Datos útiles', answer: '- En caso de <strong>tormenta eléctrica</strong>, desenchufe el cable coaxil del televisor y del cable modem. La empresa no se responsabiliza por eventuales desperfectos ocasionados por las tormentas. <br/><br/> - Nuestros técnicos domiciliarios están perfectamente identificados. <strong>No permita</strong> el ingreso a su domicilio de ninguna persona sin <strong>previa acreditación.</strong> <br/><br/> - Nuestros  técnicos <strong>no realizan trabajos de reparación</strong> en equipos que no pertenecen a la empresa, solamente verifican que la señal llegue correctamente a los equipos. <strong>No están autorizados a retirar aparatos</strong>  de su propiedad ni a efectuar cobranzas. <br/><br/> - Si Ud. considera que no ha sido debidamente atendido, por favor realice su reclamo telefónicamente al <strong>Servicio de Atención al Cliente (SAC)</strong> o por <a href="#contacto" class="mail-link">mail</a> <br/><br/> - Los trámites de modificaciones de servicios pueden ser realizados por el titular de la cuenta por nota escrita, o por mail. <br/><br/> - Los trámites de <strong>baja de servicios</strong> sólo pueden ser realizados en forma personal. Si la baja correspondiera a un servicio para el cual se hubiera entregado equipo en comodato, sólo se efectivizará con la devolución del mismo en el centro de atención personalizada. <br/><br/> - La <strong>falta de pago</strong> podrá ocasionar la <strong>baja de su servicio sin previo aviso.</strong> <br/><br/> - El pago de la factura recibida <strong>no supone la cancelación de las anteriores</strong>, para ello debe abonar el <strong>total del Estado de Cuenta</strong> consignado como Total a pagar.' },
        { question: 'Denuncias clandestinas', answer: 'Una <strong>conexión ilegal</strong> de cable también es un <strong>delito</strong>. Si conocés alguna conexión clandestina denunciala. Comunicate con nosotros o envianos un <a href="#contacto" class="mail-link">mail</a>.' },
        { question: 'Baja del servicio', answer: 'Para solicitar <strong>la baja de un producto o servicio</strong>, comunicarse telefónicamente al centro de atención al cliente, acercarse a la sucursal correspondiente a su localidad o bien puede solicitarla por correo electrónico.' },
    ];

    const faqsTele = [
        { question: 'TV Cable: las señales de TV se encuentran desordenadas o faltan señales', answer: 'Significa que la <strong>selección de antena es incorrecta</strong>. Para solucionarlo debe seleccionar la función <strong>CATV (Cable)</strong> en su televisor. En el control remoto de su televisor puede aparecer como <strong>AIRE/CABLE</strong>. Si su televisor es un <strong>LED</strong> deberá entrar en la opción <strong>Source o Input</strong> y deberá seleccionar <strong>CABLE.</strong>' },
        { question: 'TV Cable: las señales se ven en blanco y negro', answer: 'Esto significa que <strong>el TV no está configurado en la norma correcta.</strong> La norma identifica el tipo de señal que puede recibir el televisor. La norma en nuestro país es <strong>PAL-N o Auto</strong>. Para corregir, realice una <strong>búsqueda automática de canales.</strong>' },
        { question: 'TV Cable: las señales se ven con lluvia o interferencias', answer: 'Verifique que el cable <strong>coaxil esté bien conectado al TV.</strong> Si tiene alguna boca adicional, verifique si el problema persiste en esta otra boca. Si en todos los televisores, se verifica el mismo inconveniente, por favor comuníquese con nuestro Servicio de<a href="https://wa.me/3755300576" target="_blank" class="mail-link">Atención al Cliente.</a>' },
        { question: 'TV Cable: las señales se ven con intermitencias o descargas', answer: 'Verifique que el cable <strong>coaxil esté bien conectado al TV.</strong> Si tiene alguna boca adicional, verifique si el problema persiste en esta otra boca. Si en todos los televisores, se verifica el mismo inconveniente, por favor comuníquese con nuestro Servicio de <a href="https://wa.me/3755300576" target="_blank" class="mail-link">Atención al Cliente.</a>' },
        { question: 'Pack HD Básico | Funcionamiento', answer: 'Para sintonizar el <strong>Pack Plus</strong> debe seleccionar la entrada <strong>AIRE o ANTENA de su TV.</strong> Para hacer esto, presione la opción <strong>SOURCE o ENTRADA de su control remoto</strong>, y luego selecciones <strong>AIRE o ANTENA</strong>. Para volver a sintonizar las señales básicas, vuelva a presionar <strong>SOURCE o ENTRADA y seleccione CABLE.</strong>' }
    ];

    const faqsInter = [
        { question: 'Modem sin Señal', answer: 'Si <strong>no tiene acceso</strong> a las páginas y nota que <strong>las luces de su módem</strong> no están encendidas en su totalidad (Por ejemplo: Online apagada o parpadeando), por favor realice el siguiente procedimiento: <br/><br/> <strong>Opción 1:</strong> Si cuenta con servicio Básico de TV provisto por Vallevision chequee los canales a partir de la señal 2 en adelante (verifique que se vean correctamente sin lluvia o distorsión en la imagen). Si visualiza inconvenientes en el servicio de televisión, no continúe con las pruebas y comuníquese directamente con nuestro Servicio de Atención al Cliente.<br/><br/><strong>Opción 2:</strong> Si no detecta inconvenientes con el servicio de TV realizar el siguiente procedimiento: <br/> <strong>1.</strong> Desconecte el cable de alimentación y el cable coaxil del módem. Aguarde 10 segundos. <br/><strong>2.</strong> Conecte nuevamente, primero el coaxil, corrobore que este bien ajustado y luego el cable de alimentación y espere a que las luces enciendan en su totalidad. <br/> <strong>3.</strong> Reinicie la PC y chequee la navegación. <br/><br/><strong>Opción 3:</strong> Si continúa sin acceso a internet y cuenta con una red interna (un router u otros dispositivos), realice el siguiente procedimiento: <br/> - Conecte el módem directamente a una computadora y verifique si de esa forma la conexión funciona. Si el inconveniente persiste, comuníquese con nuestro Servicio de <a href="https://wa.me/3755300576" target="_blank" class="mail-link">Atención al Cliente.</a>' },
        { question: 'No encienden las luces del módem', answer: 'El módem para alcanzar señal <strong>necesita estar conectado a la red eléctrica</strong> mediante la fuente de alimentación provista. Verifique la parte posterior del módem, allí tendrá 2 ó 3 cables (dependiendo si es WIFI o no), de los cuales encontrará uno negro fino que conecta a la red eléctrica con la fuente. Por favor chequee el estado de ese cable y su conexión. <br/></br/> <strong>1.</strong> Desconecte la fuente de alimentación del módem, espere 10 segundos y vuelva a conectar. <br/><strong>2.</strong> De persistir apagado, siga este cable hasta llegar 2. a la fuente. Verifique que la misma este bien conectada al toma corriente. <br/> <strong>3.</strong> Si la fuente está correctamente conectado pruebe en otra toma corriente para descartar falla en el enchufe. <br/><br/>Si el inconveniente persiste comuníquese directamente con nuestro Servicio de <strong>Atención al cliente.</strong>' },
        { question: 'Mi Wi-Fi no tiene suficiente alcance', answer: 'La tecnología tiene sus limitaciones, al igual que la <strong>distancia y la cobertura.</strong> A medida que se aleje del lugar en donde se encuentra instalado el módem WIFI o router, puede <strong>perder calidad en el rendimiento del servicio.</strong> <br/><br/> Otro punto importante sobre la calidad del WIFI es <strong>el ambiente donde se encuentra instalado el módem.</strong> Lo recomendable es que se encuentre en un <strong>punto medio dentro del domicilio</strong> para que la señal alcance a todos los ambientes de la propiedad. Idealmente será dentro de la propiedad en un <strong>ambiente despojado y en altura</strong> para que la señal llegue con menos obstáculos. Tenga presente que <strong>la densidad de las paredes</strong> es otro punto en contra del nivel de señal del módem WIFI cuanto <strong>más gruesas las paredes menos nivel de señal tendrá disponible para conectarse.</strong>' },
        { question: 'No puedo navegar por Wi-Fi', answer: 'Verifique que la luz de señal del módem <strong>(“Cable” u “Online” según el modelo)</strong> esté encendida fija y la luz Wifi también se encuentre encendida. <br/><br/><strong>Opción 1:</strong> Si no hay falla en el estado de las luces del módem, verifique: <br/> Si cuenta con servicio Básico de TV provisto por Vallevision chequee los canales a partir de la señal 2 hasta el 60 (verifique que se vean correctamente sin lluvia o distorsión en la imagen). Si nota algún inconveniente en el servicio de televisión por cable, por favor comuníquese directamente con nuestro Servicio de <a href="https://wa.me/3755300576" target="_blank" class="mail-link">Atención al Cliente.</a> <br/><br/><strong>Opción 2:</strong><br/><strong>1.</strong> Desconecte el cable de la corriente eléctrica y el cable coaxil del módem, espere 10 segundos.<br/><strong>2.</strong> Vuelva a conectar primero el coaxil, corrobore que esta bien ajustado y luego el de corriente y espere hasta que las luces enciendan en su totalidad.<br/><strong>3.</strong> Compruebe nuevamente si aparece la red Wifi en su dispositivo <br/><br/><strong>Opción 3:</strong><br/>Verifique en la etiqueta debajo del modem los datos de la red Wifi que trae el equipo por defecto (SSID, Key o Encryption Key según el modelo)<br/>Verifique en su dispositivo si alguna de las redes Wifi (SSID) que aparecen coincide con estos datos, de ser asi conectese a ella utilizando la contraseña que aparece en la etiqueta del modem (Key o Encryption Key según el modelo)<br/><br/>Si el inconveniente persiste, por favor comuníquese con nuestro Servicio de <a href="https://wa.me/3755300576" target="_blank" class="mail-link">Atención al Cliente.</a>' },
    ];

    const h1Ref = useRef(null);

    useEffect(() => {
        let textWrapper = document.querySelector('.ml12 .letters');
        textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        anime.timeline({ loop: false })
                            .add({
                                targets: '.ml12 .letter',
                                rotateY: [-90, 0],
                                duration: 1300,
                                delay: (el, i) => 45 * i
                            }).add({
                                targets: '.ml12',
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

        return () => {
            if (h1Ref.current) {
                observer.unobserve(h1Ref.current);
            }
        };
    }, []);

    const { theme } = useTheme();

    return (
        <div className={`clientes ${theme}`} id='clientes'>
            <div className='contenedor-clientes'>
                <div className={`contenedor-clientes-titulos ${theme}`}>
                    <h1 ref={h1Ref} className="ml12">
                        <span className="text-wrapper">
                            <span className="letters">Nuestros clientes</span>
                        </span>
                    </h1>
                    <p>Accede de <strong>manera rápida</strong> y <strong>sencilla</strong> a todas las herramientas y recursos que necesitas para
                        facilitar tus tareas y mejorar tu experiencia.
                    </p>
                </div>
                <div className='contenedor-clientes-botones'>

                    <button className={`btn-clientes btn-autogestion ${theme}`}><a href='https://clientes.vallevision.com.ar/' target='_blank'>Autogestión <GoArrowUpRight /></a></button>
                    <button className={`btn-clientes btn-autogestion ${theme}`}><a href='https://wa.me/3755300576' target='_blank'>Baja de servicio<GoArrowUpRight /></a></button>
                </div>
            </div>

            <div className='contenedor-horarios-contacto'>
                <div className={`tarjeta-horarios ${theme}`}>
                    <h3>Horarios</h3>
                    <div className='tarjeta-horarios-items'>
                        <span><LuClock />Lunes a Viernes 7hs a 12hs y 16hs a 19hs</span>
                        <span><LuClock />Sábados 8hs a 12hs</span>
                        <span><LuClock />Domingos y Feriados Cerrado</span>
                    </div>
                </div>
                <div className={`tarjeta-contacto ${theme}`}>
                    <h3>Contacto</h3>
                    <div className='contenedor-tarjeta-contacto'>
                        <div className='tarjeta-contacto-atencion'>
                            <h4>Atención al cliente</h4>
                            <span><FaPhoneAlt />Llamadas 03755 470691</span>
                            <span><FaWhatsapp />WhatsApp 3755 300576</span>
                            <span><MdOutlineMail />info@vallevision.com.ar</span>
                        </div>
                        <div className='tarjeta-contacto-consultas'>
                            <h4>Consultas técnicas</h4>
                            <span><MdOutlineMail />soporte@vallevision.com.ar</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className={`consultas-frecuentes ${theme}`}>
                <h2>Consultas frecuentes <IoIosInformationCircleOutline /></h2>
                <div className={`contenedor-todas-las-consultas ${theme}`}>
                    <div className={`consultas-admin ${theme}`}>
                        <h3>Administrativas</h3>
                        {faqsAdmin.map((faq, index) => (
                            <Accordion key={index}
                                question={faq.question}
                                answer={faq.answer}
                            />
                        ))}
                    </div>
                    <div className={`consultas-inter ${theme}`}>
                        <h3>Internet</h3>
                        {faqsInter.map((faq, index) => (
                            <Accordion key={index}
                                question={faq.question}
                                answer={faq.answer} />
                        ))}
                    </div>
                    <div className={`consultas-tele ${theme}`}>
                        <h3>Televisión</h3>
                        {faqsTele.map((faq, index) => (
                            <Accordion key={index}
                                question={faq.question}
                                answer={faq.answer}
                            />
                        ))}
                    </div>
                </div>
            </div>
            <span className={`degrade3 ${theme}`}></span>
            <span className={`degrade4 ${theme}`}></span>
        </div>
    );
}

export default Clientes;
