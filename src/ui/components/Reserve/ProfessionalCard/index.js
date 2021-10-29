import React from 'react'
import PropTypes from 'prop-types';

import locationIcon from '../../../../assets/images/Services/locationIcon.png'
import filledStar from '../../../../assets/images/Services/estrella-llena.png'
import emptyStar from '../../../../assets/images/Services/estrella-vacia.png'

export default function ProfessionalCard(props) {
    return (
        <div className="ProfessionalCard">
            {
                props.imageValidated
                ? <img className="ProfessionalCard-validate" src={props.imageValidated} alt="card validate" />
                : ""
            }
            <img className="ProfessionalCard-image" src={props.image} alt="card avatar"/>
            <div className="ProfessionalCard-body">
                <span className="ProfessionalCard-title">{props.title}</span>
                <div className="ProfessionalCard-ranking">
                    <img src={filledStar} alt="fill start"/>
                    <img src={filledStar} alt="fill start"/>
                    <img src={filledStar} alt="fill start"/>
                    <img src={filledStar} alt="fill start"/>
                    <img src={emptyStar} alt="empty start"/>
                </div>
                <div className="ProfessionalCard-address">
                <img src={locationIcon} alt="card location icon"/>
                    <span>
                        {props.address}
                    </span>
                </div>
            </div>
        </div>
    )
}

ProfessionalCard.propTypes = {
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    imageValidated: PropTypes.string,
    address: PropTypes.string.isRequired
}