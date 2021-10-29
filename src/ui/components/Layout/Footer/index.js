/* eslint-disable react/jsx-no-target-blank */
import React, { Fragment } from 'react';

import playstore from '../../../../assets/images/playstore.png';
import apple_store from '../../../../assets/images/apple_store.png';
import arrow_right from '../../../../assets/images/arrow_right.png';

import facebook_icon from '../../../../assets/images/facebook_icon.png';
import instagram_icon from '../../../../assets/images/instagram_icon.png';
import twitter_icon from '../../../../assets/images/twitter_icon.png';
import beonshop_logo from '../../../../assets/images/beonshop_logo.png';
import credit_cards_logo from '../../../../assets/images/credit_cards_logo.png';
import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <Fragment>
            <div className="Footer">
                <div className="container">
                    <div className="Footer-info">
                        <div className="row">
                            <div className="col-xs-12 col-md-4 col-lg Footer-col">
                                <h5 className="block-title Footer-title">App</h5>
                                <Link to="#" className="Footer-playstore">
                                    <img src={playstore} alt="Download our app on Google Playstore"/>
                                </Link>
                                <Link to="#" className="Footer-apple_store">
                                    <img src={apple_store} alt="Download our app on Apple Store"/>
                                </Link>
                            </div>
                            <div className="col-xs-12 col-md-4 col-lg Footer-col">
                                <h5 className="block-title Footer-title">Tienda</h5>
                                <ul className="Footer-links">
                                    <li className="Footer-link">
                                        <Link to="/reserve" className="text-small">Servicios</Link>
                                    </li>
                                    <li className="Footer-link">
                                        <Link to="/products" className="text-small">Productos</Link>
                                    </li>
                                    <li className="Footer-link">
                                        <Link to="/weedings" className="text-small">Bodas</Link>
                                    </li>
                                    <li className="Footer-link">
                                        <Link to="/styles" className="text-small">Estilos</Link>
                                    </li>
                                    <li className="Footer-link">
                                        <Link to="/shop" className="text-small">Locales Bellify</Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-xs-12 col-md-4 col-lg Footer-col">
                                <h5 className="block-title Footer-title">Sobre Bellify</h5>
                                <ul className="Footer-links">
                                    <li className="Footer-link">
                                        <Link to="/staff" className="text-small">Nuestro Equipo</Link>
                                    </li>
                                    <li className="Footer-link">
                                        <Link to="/sponsors" className="text-small">Patrocinadores</Link>
                                    </li>
                                    <li className="Footer-link">
                                        <Link to="/blog" className="text-small">Blog</Link>
                                    </li>
                                    <li className="Footer-link">
                                        <Link to="/reviews" className="text-small">Reviews</Link>
                                    </li>
                                    <li className="Footer-link">
                                        <Link to="/press" className="text-small">Prensa y medios</Link>
                                    </li>
                                    <li className="Footer-link">
                                        <Link to="/join-us" className="text-small">Únete a nosotros</Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-xs-12 col-md-4 col-lg Footer-col">
                                <h5 className="block-title Footer-title">Ayuda</h5>
                                <ul className="Footer-links">
                                    <li className="Footer-link">
                                        <Link to="/faq" className="text-small">FAQ</Link>
                                    </li>
                                    <li className="Footer-link">
                                        <Link to="#" className="text-small">Términos y condiciones</Link>
                                    </li>
                                    <li className="Footer-link">
                                        <Link to="#" className="text-small">Privacidad</Link>
                                    </li>
                                    <li className="Footer-link">
                                        <Link to="/contact" className="text-small">Contacto</Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-xs-12 col-md-4 col-lg-2 Footer-col Footer-col-social">
                                <h5 className="block-title Footer-title">Síguenos</h5>
                                <div className="Footer-social">
                                    <Link to="#" className="Footer-social-link">
                                        <img src={twitter_icon} alt="Twitter" className="Footer-twitter"/>
                                    </Link>
                                    <Link to="#" className="Footer-social-link">
                                        <img src={facebook_icon} alt="Facebook" className="Footer-facebook"/>
                                    </Link>
                                    <Link to="#" className="Footer-social-link">
                                        <img src={instagram_icon} alt="Instagram" className="Footer-instagram"/>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>  
                    <div className="row">
                        <div className="col-12 col-lg-8">
                            <form action="" className="Footer-newsletter flex-row-start">
                                <h5 className="block-title Footer-newsletter-title">Newsletter</h5>
                                <input type="text" name="name" id="name" className="Footer-input" placeholder="Nombre" />
                                <div className="Footer-inputWrap">
                                    <input type="text" name="email" id="email" className="Footer-input withIcon" placeholder="Correo electrónico" />
                                    <button type="submit" className="Footer-submit">
                                        <img src={arrow_right} className="Footer-submit-icon" alt=""/>
                                    </button>
                                </div>
                            </form>
                        </div>
                        <div className="col-12 col-lg-4">
                            <div className="Footer-creditCards">
                                <img src={credit_cards_logo} alt=""/>
                            </div>
                        </div>                            
                    </div>                      
                </div>
                <div className="Footer-bottomBar">
                    <div className="Footer-bottomBar-wrapper container">
                        <span className="Footer-copy">&copy; 2019 Bellify. All rights reserved.</span>
                        <div className="Footer-link">
                            <a href="https://www.weareidentty.com/home" target="_blank">
                                <p className="Footer-powered mb-0">Work done by <img src={beonshop_logo} alt="Beonshop" className="Footer-beonshop"/></p>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}