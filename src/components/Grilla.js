//Grilla
import React from 'react';
import LazyLoad from 'react-lazyload';
import { useTheme } from '../ThemeContext';

function Grilla() {
    //Imágenes para grilla analógica
    const analogGridImages = [
        process.env.PUBLIC_URL + '/img/cronicatv.png',
        process.env.PUBLIC_URL + '/img/canal26.png',
        process.env.PUBLIC_URL + '/img/cabal4local.png',
        process.env.PUBLIC_URL + '/img/c5n.png',
        process.env.PUBLIC_URL + '/img/tn.png',
        process.env.PUBLIC_URL + '/img/tvpublica.png',
        process.env.PUBLIC_URL + '/img/encuentro.png',
        process.env.PUBLIC_URL + '/img/ln.png',
        process.env.PUBLIC_URL + '/img/canal9.png',
        process.env.PUBLIC_URL + '/img/telefe.png',
        process.env.PUBLIC_URL + '/img/america.png',
        process.env.PUBLIC_URL + '/img/trece.png',
        process.env.PUBLIC_URL + '/img/a24.png',
        process.env.PUBLIC_URL + '/img/canal12provin.png',
        process.env.PUBLIC_URL + '/img/iplogo.png',
        process.env.PUBLIC_URL + '/img/tycsports.png',
        process.env.PUBLIC_URL + '/img/espn2.png',
        process.env.PUBLIC_URL + '/img/espn.png',
        process.env.PUBLIC_URL + '/img/americasports.png',
        process.env.PUBLIC_URL + '/img/foxsports.png',
        process.env.PUBLIC_URL + '/img/foxsports2.png',
        process.env.PUBLIC_URL + '/img/garagenuevo.png',
        process.env.PUBLIC_URL + '/img/deportv.png',
        process.env.PUBLIC_URL + '/img/pakapaka.png',
        process.env.PUBLIC_URL + '/img/discoverykids.png',
        process.env.PUBLIC_URL + '/img/disneychannel.png',
        process.env.PUBLIC_URL + '/img/disneyjunior.png',
        process.env.PUBLIC_URL + '/img/cartoonnetwork.png',
        process.env.PUBLIC_URL + '/img/incaatv.png',
        process.env.PUBLIC_URL + '/img/amc.png',
        process.env.PUBLIC_URL + '/img/universal.png',
        process.env.PUBLIC_URL + '/img/tnt.png',
        process.env.PUBLIC_URL + '/img/axn.png',
        process.env.PUBLIC_URL + '/img/cinecanal.png',
        process.env.PUBLIC_URL + '/img/star-channel.png',
        process.env.PUBLIC_URL + '/img/fx.png',
        process.env.PUBLIC_URL + '/img/space.png',
        process.env.PUBLIC_URL + '/img/tnt-novelas.png',
        process.env.PUBLIC_URL + '/img/tcm.png',
        process.env.PUBLIC_URL + '/img/volver.png',
        process.env.PUBLIC_URL + '/img/animalplanet.png',
        process.env.PUBLIC_URL + '/img/discovery-channel.png',
        process.env.PUBLIC_URL + '/img/nationalgeographic.png',
        process.env.PUBLIC_URL + '/img/history.png',
        process.env.PUBLIC_URL + '/img/elgourmet.png',
        process.env.PUBLIC_URL + '/img/telesur.png',
        process.env.PUBLIC_URL + '/img/cnn.png',
        process.env.PUBLIC_URL + '/img/tve.png',
        process.env.PUBLIC_URL + '/img/eurochannel.png',
        process.env.PUBLIC_URL + '/img/dw.png',
        process.env.PUBLIC_URL + '/img/canal-de-las-estrellas.webp',
        process.env.PUBLIC_URL + '/img/brand.png',
        process.env.PUBLIC_URL + '/img/canaldocriador.png',
        process.env.PUBLIC_URL + '/img/sbt.png',
        process.env.PUBLIC_URL + '/img/argentinisima.png',
        process.env.PUBLIC_URL + '/img/rural.png',
        process.env.PUBLIC_URL + '/img/ewtn.png',
        process.env.PUBLIC_URL + '/img/magazine.png',
        process.env.PUBLIC_URL + '/img/quieromusica.png',
        process.env.PUBLIC_URL + '/img/tooncast.png',
        process.env.PUBLIC_URL + '/img/canalluz.png',
        process.env.PUBLIC_URL + '/img/enlace.png',
        process.env.PUBLIC_URL + '/img/nuevotiempo.png',
    ];
    //Números para grilla analógica
    const analogGridNumbers = [
        '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20',
        '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38',
        '39', '40', '41', '42', '43', '44', '45', '46', '47', '48', '49', '50', '51', '52', '53', '54', '55', '56',
        '57', '58', '60', '61', '96', '97', '98', '99'
    ];
    //Imágenes para grilla digital
    const digitalGridImages = [
        process.env.PUBLIC_URL + '/img/canal26.png',
        process.env.PUBLIC_URL + '/img/c5n.png',
        process.env.PUBLIC_URL + '/img/tn.png',
        process.env.PUBLIC_URL + '/img/america.png',
        process.env.PUBLIC_URL + '/img/destapetv.png',
        process.env.PUBLIC_URL + '/img/a24.png',
        process.env.PUBLIC_URL + '/img/ln.png',
        process.env.PUBLIC_URL + '/img/cronicatv.png',
        process.env.PUBLIC_URL + '/img/canal12provin.png',
        process.env.PUBLIC_URL + '/img/iplogo.png',
        process.env.PUBLIC_URL + '/img/cabal4local.png',
        process.env.PUBLIC_URL + '/img/tvpublica.png',
        process.env.PUBLIC_URL + '/img/canal9.png',
        process.env.PUBLIC_URL + '/img/telefe.png',
        process.env.PUBLIC_URL + '/img/trece.png',
        process.env.PUBLIC_URL + '/img/tycsports.png',
        process.env.PUBLIC_URL + '/img/foxsports.png',
        process.env.PUBLIC_URL + '/img/foxsports2.png',
        process.env.PUBLIC_URL + '/img/foxsports3.png',
        process.env.PUBLIC_URL + '/img/espn2.png',
        process.env.PUBLIC_URL + '/img/espn.png',
        process.env.PUBLIC_URL + '/img/espn3.png',
        process.env.PUBLIC_URL + '/img/espn4.png',
        process.env.PUBLIC_URL + '/img/deportv.png',
        process.env.PUBLIC_URL + '/img/sbt.png',
        process.env.PUBLIC_URL + '/img/canaldocriador.png',
        process.env.PUBLIC_URL + '/img/france24.png',
        process.env.PUBLIC_URL + '/img/cgtn.png',
        process.env.PUBLIC_URL + '/img/cnn.png',
        process.env.PUBLIC_URL + '/img/snt.png',
        process.env.PUBLIC_URL + '/img/tve.png',
        process.env.PUBLIC_URL + '/img/nationalgeographic.png',
        process.env.PUBLIC_URL + '/img/tectv.png',
        process.env.PUBLIC_URL + '/img/encuentro.png',
        process.env.PUBLIC_URL + '/img/tooncast.png',
        process.env.PUBLIC_URL + '/img/nick.png',
        process.env.PUBLIC_URL + '/img/cartoonito.png',
        process.env.PUBLIC_URL + '/img/zoomoo.png',
        process.env.PUBLIC_URL + '/img/cartoonnetwork.png',
        process.env.PUBLIC_URL + '/img/disneychannel.png',
        process.env.PUBLIC_URL + '/img/disneyjunior.png',
        process.env.PUBLIC_URL + '/img/pakapaka.png',
        process.env.PUBLIC_URL + '/img/discoverykids.png',
        process.env.PUBLIC_URL + '/img/tnt.png',
        process.env.PUBLIC_URL + '/img/universal.png',
        process.env.PUBLIC_URL + '/img/incaatv.png',
        process.env.PUBLIC_URL + '/img/cinecanal.png',
        process.env.PUBLIC_URL + '/img/axn.png',
        process.env.PUBLIC_URL + '/img/space.png',
        process.env.PUBLIC_URL + '/img/europa.png',
        process.env.PUBLIC_URL + '/img/amc.png',
        process.env.PUBLIC_URL + '/img/eurochannel.png',
        process.env.PUBLIC_URL + '/img/para.png',
        process.env.PUBLIC_URL + '/img/fx.png',
        process.env.PUBLIC_URL + '/img/star-channel.png',
        process.env.PUBLIC_URL + '/img/tcm.png',
        process.env.PUBLIC_URL + '/img/tntseries.png',
        process.env.PUBLIC_URL + '/img/tnt-novelas.png',
        process.env.PUBLIC_URL + '/img/comedycentral.png',
        process.env.PUBLIC_URL + '/img/filmandarts.png',
        process.env.PUBLIC_URL + '/img/mtv00.png',
        process.env.PUBLIC_URL + '/img/mtv80s.png',
        process.env.PUBLIC_URL + '/img/magazine.png',
        process.env.PUBLIC_URL + '/img/canala.png',
        process.env.PUBLIC_URL + '/img/cm.png',
        process.env.PUBLIC_URL + '/img/quieromusica.png',
        process.env.PUBLIC_URL + '/img/htv.png',
        process.env.PUBLIC_URL + '/img/mtv.png',
        process.env.PUBLIC_URL + '/img/maschic.png',
        process.env.PUBLIC_URL + '/img/canal-de-las-estrellas.webp',
        process.env.PUBLIC_URL + '/img/pasiones.webp',
        process.env.PUBLIC_URL + '/img/metro.png',
        process.env.PUBLIC_URL + '/img/garagenuevo.png',
        process.env.PUBLIC_URL + '/img/americasports.png',
        process.env.PUBLIC_URL + '/img/discovery-channel.png',
        process.env.PUBLIC_URL + '/img/investigationdiscovery.png',
        process.env.PUBLIC_URL + '/img/history.png',
        process.env.PUBLIC_URL + '/img/chacratv.png',
        process.env.PUBLIC_URL + '/img/rural.png',
        process.env.PUBLIC_URL + '/img/t5.png',
        process.env.PUBLIC_URL + '/img/dw.png',
        process.env.PUBLIC_URL + '/img/argentinisima.png',
        process.env.PUBLIC_URL + '/img/ewtn.png',
        process.env.PUBLIC_URL + '/img/elgourmet.png',
    ];
    //Números para grilla digital
    const digitalGridNumbers = [
        '12.1', '12.2', '12.3', '12.4', '12.5', '13.1', '13.2', '13.3', '13.4', '13.5', '14.1', '14.2', '14.3', '14.4', '15.1', '15.2', '15.3', '16.1', '16.2', '16.3',
        '16.4', '16.5', '17.1', '17.2', '17.3', '18.1', '18.2', '18.3', '18.4', '18.5', '18.6', '19.1', '19.2', '19.3', '20.1', '20.2', '20.3', '20.4', '21.1',
        '21.2', '21.3', '21.4', '22.1', '22.2', '22.3', '22.4', '23.1', '23.2', '24.1', '24.2', '24.3', '24.4', '25.1', '25.2', '26.1', '26.2', '27.1', '27.2',
        '27.3', '27.4', '27.5', '27.6', '28.1', '28.2', '28.3', '28.4', '29.1', '29.2', '29.3', '29.4', '30.1', '30.2', '30.3', '30.4', '30.5', '31.1', '31.2', '31.3', '31.4', '31.5', '32.1', '32.2',
        '32.3', '32.4'
    ];
    //Canales HD grilla digital
    const hdIndexes = [0, 1, 2, 3, 5, 6, 7, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 28, 31, 35, 36,
        37, 38, 39, 40, 42, 43, 44, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 57, 58, 59, 64, 65, 66, 67, 68, 69, 70, 73, 74, 75, 76, 
        78, 79, 80, 82];

    const { theme } = useTheme();

    return (
        <section className={`grilla contenedor ${theme}`} id='grilla'>
            <span className={`degrade1 ${theme}`}></span>
            <span className={`degrade2 ${theme}`}></span>
            <span className={`degrade3 ${theme}`}></span>
            <span className={`degrade4 ${theme}`}></span>
            <div className='grilla-header'>
                <div className={`grilla-title ${theme}`}>
                    <h1>Conocé nuestra <br></br> <strong>Grilla de señales</strong></h1>
                </div>
                <div className={`grilla-hd ${theme}`}>
                    <span></span>
                    <h3>Señales HD</h3>
                </div>
            </div>
            <div className='grilla-section'>
                <h2 className={`grilla-subtitle ${theme}`}>Grilla analógica</h2>
                <div className='grilla-grid'>
                    {analogGridImages.map((imageUrl, index) => (
                        <LazyLoad key={index} height={90} offset={[-100, 100]} once>
                            <div className={`grilla-item ${theme}`}>
                                <div className='grilla-logo' style={{ backgroundImage: `url(${imageUrl})` }}></div>
                                <div className={`grilla-number ${theme}`}>{analogGridNumbers[index]}</div>
                            </div>
                        </LazyLoad>
                    ))}
                </div>
            </div>
            <div className='grilla-section'>
                <h2 className={`grilla-subtitle ${theme}`}>Grilla digital</h2>
                <div className='grilla-grid'>
                    {digitalGridImages.map((imageUrl, index) => (
                        <LazyLoad key={index} height={100} offset={[-100, 100]} once>
                            <div className={`grilla-item ${theme}`}>
                                <div className='grilla-logo' style={{ backgroundImage: `url(${imageUrl})` }}></div>
                                <div className={`grilla-number ${theme}`}>{digitalGridNumbers[index]}</div>
                                {hdIndexes.includes(index) && <span className={`grilla-span-hd ${theme}`} style={{ display: 'block' }}></span>}
                            </div>
                        </LazyLoad>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Grilla;