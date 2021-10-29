import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

export default function ServiceCard(props) {
    return(
        <Fragment>
            <div className="ServiceCard">                
                <img className="ServiceCard-image" src={props.image} alt="Service"/>                
                <div className="ServiceCard-content">
                    <h4 className="ServiceCard-title">{props.title}</h4>
                    <p className="ServiceCard-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta natus quas corrupti, libero sed debitis.</p>
                    <span className="ServiceCard-price">{props.price}</span>
                </div>
            </div>
        </Fragment>
    );
}

ServiceCard.propTypes = {
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired
}