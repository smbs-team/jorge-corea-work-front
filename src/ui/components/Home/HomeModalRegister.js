import React from 'react';
import arrow_right from "../../../assets/images/arrow_right.png";
import { Link } from 'react-router-dom';

export default function HomeModalRegister() {
    return (
        <div className="ModalRegister-container">
            <div className="ModalRegisterInfo-content">
                <h3 class="ModalRegister-title">
                    <span>Tenemos algo especial para ti...</span>
                </h3>
                <span className="RegisterInfo-text">
                    Registrate ahora, obten un 30% de descuento en tu primera cita y beneficiate de todos los consejos,
                    tendencias y ofertas exclusivas del mundo de Bellify.
                </span>
            </div>            
            <form className="ModalRegisterInput">
                <input type="text" name="name" id="name" className="ModalRegisterInput-control" placeholder="Nombre"/>
                <input type="text" name="email" id="email" className="ModalRegisterInput-withIcon" placeholder="Correo electrónico" />
                <button type="submit" className="ModalRegisterInput-submit">
                    <img src={arrow_right} className="ModalRegister-submit-icon" alt=""/>
                </button>
                <div className="ModalRegisterInput-terms">
                    <input className="d-inline" type="checkbox"/>
                    <label className="d-inline ml-2">Confirmo haber leído y estar conforme con los
                        <Link  to="#"> términos y condiciones generales</Link> y la
                        <Link to="#"> política de privacidad</Link> de Bellify.
                    </label>
                </div>
            </form>
        </div>
    );
}