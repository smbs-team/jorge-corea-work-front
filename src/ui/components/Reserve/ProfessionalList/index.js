import React, { Component, Fragment } from 'react'

import ProfessionalCard from '../ProfessionalCard';
import cardImage from "../../../../assets/images/Services/peluquero.png"
import validImage from "../../../../assets/images/Services/validado.png"
class ProfessionalList extends Component {
    render() {
        return (
            <Fragment>
                 <div className="ProfessionalList">
                    <div className="row">
                        <div className="col-12">                            
                            <h3 className="ProfessionalList-title">1. Profesional</h3>
                            <p className="ProfessionalList-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque convallis dictum tellus, in rutrum purus ultricies ac. Vivamus a lobortis tellus, nec pulvinar mi. Sed bibendum vitae velit nec hendrerit. Morbi quis elementum arcu.</p>
                        </div>
                        <div className="col-12">
                            <h4 className="ProfessionalList-subtitle">
                                <span>Para todo</span>
                            </h4>
                            <div className="ProfessionalCardList">
                                <ProfessionalCard
                                    title="Nombre Apellido"
                                    image={cardImage}
                                    address="Barcelona (Disponibilidad viajar hasta 60km)"
                                />
                                <ProfessionalCard
                                    title="Nombre Apellido"
                                    image={cardImage}
                                    imageValidated={validImage}
                                    address="Barcelona (Disponibilidad viajar hasta 60km)"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="separator"></div>
                    <div className="row">
                        <div className="col-12">
                            <h4 className="ServiceList-subtitle">
                                <span>Para lorem ipsum</span>
                            </h4>
                            <div className="ProfessionalCardList">
                                <ProfessionalCard
                                    title="Nombre Apellido"
                                    image={cardImage}
                                    imageValidated={validImage}
                                    address="Barcelona (Disponibilidad viajar hasta 60km)"
                                />
                                <ProfessionalCard
                                    title="Nombre Apellido"
                                    image={cardImage}
                                    imageValidated={validImage}
                                    address="Barcelona (Disponibilidad viajar hasta 60km)"
                                />
                                <ProfessionalCard
                                    title="Nombre Apellido"
                                    image={cardImage}
                                    address="Barcelona (Disponibilidad viajar hasta 60km)"
                                />
                            </div>
                        </div>
                    </div>
                        <div className="separator"></div>
                        <div className="row">
                        <div className="col-12">
                            <h4 className="ServiceList-subtitle">
                                <span>Para lorem ipsum</span>
                            </h4>
                            <div className="ProfessionalCardList">
                                <ProfessionalCard
                                    title="Nombre Apellido"
                                    image={cardImage}
                                    address="Barcelona (Disponibilidad viajar hasta 60km)"
                                />
                                <ProfessionalCard
                                    title="Nombre Apellido"
                                    image={cardImage}
                                    address="Barcelona (Disponibilidad viajar hasta 60km)"
                                />
                            </div>
                        </div>
                    </div>
                 </div>
            </Fragment>
        )
    }
}


export default ProfessionalList;