import React from 'react';
import '../../../assets/scss/components/_rentbar.scss';

import PropTypes from 'prop-types';

export default function Rentbar(props) {
    return (
        <div className="container space-separator Rentbar">
            <div className="row offset-md-1">
                <div className="col-md-2  Rentbar-block1">
                    Localidad
                </div>
                <div className="col-md-2 Rentbar-block1">
                    Tratamiento
                </div>
                <div className="col-md-2 Rentbar-block1">
                    Fecha
                </div>
                <div className="col-md-2 Rentbar-block1">
                    Hora
                </div>
                <div className="col-md-2 Rentbar-block1">
                    Reservar
                </div>
            </div>
        </div>
    );
}

