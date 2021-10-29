import React from 'react';
import handIcon from '../../../assets/images/icons/hand.svg';
import mapIcon from '../../../assets/images/icons/map.svg';
import faceIcon from '../../../assets/images/icons/face.svg';

export default function HomeServicesAdvantage() {
    return (
        <div className="HomeServices">
            <div className="HomeServices-container">
                <h2 className="HomeServices-title">
                    <span>Servicios</span>
                </h2>
                <span className="HomeServices-description">
                    Bellify es la plataforma líder en España en servicios de belleza a domicilio. Únete a Bellify para acceder a los mejores profesionales en peluquería, maquillaje, uñas y estética.
                </span>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-sm-4">
                        <div className="HomeServicesAdvantage-item">
                            <img src={handIcon} alt=""/>
                            <h5>Tu Belleza</h5>
                            <span>
                                ¿Cómo quieres sentirte hoy? Simplemente selecciona los servicios que se ajusten a tus necesidades de belleza y nosotros nos encargaremos del resto. Cualquiera que sea la solicitud, siempre adaptamos un enfoque personalizado para cada cita.
                            </span>
                        </div>
                    </div>
                    <div className="col-sm-4">
                        <div className="HomeServicesAdvantage-item">
                            <img src={mapIcon} alt=""/>
                            <h5>Tu disponibilidad y tu ubicación</h5>
                            <span>
                                ¿Una reunión a las 8 de la mañana? 
                                ¿Una cena a las 11 de la noche? 
                                No importa dónde te encuentres o cómo tengas la agenda, ofrecemos una experiencia que se adapta a tu vida y a tu horario, porque la belleza sucede cada segundo de cada día. 
                            </span>
                        </div>
                    </div>
                    <div className="col-sm-4">
                        <div className="HomeServicesAdvantage-item">
                            <img src={faceIcon} alt=""/>
                            <h5>Nuestros Profesionales</h5>
                            <span>
                            Bellify pone a tu disposición a los profesionales que mejor se adaptan a tus necesidades, quienes llegarán al lugar indicado con los mejores productos y utensilios garantizando el mejor resultado.
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}