import React, { Fragment, useState } from 'react';
import colIcon from '../../../assets/images/icons/cols.svg';
import gridIcon from '../../../assets/images/icons/grid.svg';

const FilterStore = () => {
    const [isOpen, setIsOpen] = useState(false);

	const toggle = () => setIsOpen(!isOpen);
    return (
        <Fragment>
            <div className="Store-filterSection">
                <span className="Store-filterLabel" onClick={toggle}>Filtro</span>
                <div className={`Store-filterPanel ${isOpen ? 'd-block' : ''}`}>
                    <span className="Store-filterPanelClose" onClick={toggle}>&times;</span>
                    <div className="container">
                        <div className="row justify-content-md-center">
                            <div className="col col-lg-3">
                                <h3>
                                    <span>Servicios</span>
                                </h3>
                                <ul className="Store-filterList">
                                    <li><span>Peluquerias</span></li>
                                    <li><span>Coloración</span></li>
                                    <li><span>Maquillaje</span></li>
                                    <li><span>Uñas</span></li>
                                    <li><span>Estética facial</span></li>
                                    <li><span>Estética corporal</span></li>
                                </ul>
                            </div>
                            <div className="col-md-auto">
                                <h3>
                                    <span>Marca</span>
                                </h3>
                                <ul className="Store-filterList">
                                    <li><span>L'Oréal Professionnel</span></li>
                                    <li><span>Kérastage</span></li>
                                    <li><span>Redken</span></li>
                                    <li><span>Matrix</span></li>
                                    <li><span>Shu Uemura Art of Hair</span></li>
                                    <li><span>Decléor</span></li>
                                    <li><span>Carita</span></li>
                                    <li><span>Biolage</span></li>
                                    <li><span>Ten Image (by Cazcarra)</span></li>
                                </ul>
                            </div>
                            <div className="col col-lg-3">
                                <h3>
                                    <span>Colección</span>
                                </h3>
                                <ul className="Store-filterList">
                                    <li><span>Lorem ipsum dolor</span></li>
                                    <li><span>Lorem ipsum dolor</span></li>
                                    <li><span>Lorem ipsum dolor</span></li>
                                    <li><span>Lorem ipsum dolor</span></li>
                                    <li><span>Lorem ipsum dolor</span></li>
                                </ul>
                            </div>
                        </div>
                        <button className="btn btn-purple btn-lg btn-rounded Store-filterButton">Filtrar</button>
                    </div>
                </div>
            </div>
            <div className="Store-viewType-icons">
                <ul className="Store-viewType-list">
                    <li className="Store-viewType-item">
                        <img src={gridIcon} alt=""/>
                    </li>
                    <li className="Store-viewType-item">
                        <img src={colIcon} alt=""/>
                    </li>
                </ul>
            </div>
        </Fragment>
    );
}

export default FilterStore;