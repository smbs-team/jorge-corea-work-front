import React, {Fragment} from 'react';

export default function ReserveSidebar() {
    return(
        <Fragment>
            <div className="ReserveSidebar">
                <ol className="ReserveSidebar-items">
                    <li className="ReserveSidebar-item completed">
                        Servicios
                    </li>
                    <li className="ReserveSidebar-item">
                        Dirección
                    </li>
                    <li className="ReserveSidebar-item">
                        Fecha Y Hora
                    </li>
                    <li className="ReserveSidebar-item">
                        Profesional
                    </li>
                    <li className="ReserveSidebar-item">
                        Identifícate
                    </li>
                    <li className="ReserveSidebar-item">
                        Pago
                    </li>
                </ol>
            </div>
        </Fragment>
    )
}
