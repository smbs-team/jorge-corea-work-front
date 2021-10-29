import React from 'react';

export default function HomeServicesItem() {
    return (
        <div className="HomeServices-list">
            <div className="container">
                <div className="row">
                    <div className="col-sm-4">
                        <div className="HomeServices-item">
                            <img src={handIcon} alt=""/>
                            <h5>Tu Belleza</h5>
                            <span>
                                ¿Cómo quieres sentirte hoy? Simplemente selecciona los servicios que se ajusten a tus necesidades de belleza y nosotros nos encargaremos del resto. Cualquiera que sea la solicitud, siempre adaptamos un enfoque personalizado para cada cita.
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}