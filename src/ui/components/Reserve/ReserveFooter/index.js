import React from 'react'
import PropTypes from 'prop-types';


export default function ReserveFooter(props) {
    return (
        <div className="ReserveFooter">
            <div className="ReserveFooter-description">
                <div className="ReserveFooter-descriptionWrapper">
                    <p className="Professional Professional-description">{props.description}</p>
                </div>
            </div>
            <div className="ReserveFooter-pricesContainer">
                <div className="ReserveFooter-pricesWrapper">
                    {props.children}
                    <div className="ReserveFooter-prices subtotal">
                        <span className="Prices-subtotal">Subtotal</span>
                        <span className="ReserveFooter-prices mount">
                            {props.subTotal}
                        </span>
                    </div>
                </div>
                <div className="ReserveFooter-btnWrapper">
                    <div className="ReserveFooter-btn">
                        Siguiente
                    </div>
                </div>
            </div>
        </div>
    )
}

ReserveFooter.propTypes = {
    description: PropTypes.string.isRequired,
    subTotal: PropTypes.string.isRequired
}