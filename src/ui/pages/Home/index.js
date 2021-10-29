import React, { Fragment } from 'react';
import Banner from '../../components/Banner';
import BannerFile from '../../../assets/images/home/main-banner.jpg';
import HomestoreBanner from '../../../assets/images/home/banner2.jpg';
import  Modal from '../../components/Modal'
import '../../../assets/scss/pages/home.scss';

import { Link } from 'react-router-dom';
import HomeServicesAdvantage from '../../components/Home/HomeServicesAdvantage';
import HomeModalRegister from '../../components/Home/HomeModalRegister';
import HomeServicesCard from "../../components/Home/HomeServicesCard";

export default function Home() {
    return (
        <Fragment>
            <Modal open={true} size="xl" maxWidth="1000px" centered={true}>
                <div className="RegisterModal">
                    <div className="row">
                        <div className="col-lg-7 col-sm-12 offset-lg-5">
                            <HomeModalRegister />
                        </div>
                    </div>
                </div>
            </Modal>
            <Banner fileName={BannerFile}>
                <div className="HeroContent">
                    <div className="HeroContent-container">
                        <h1 className="HeroContent-title">
                            <span>Tu Asesor de Belleza a Domicilio</span>
                        </h1>
                        <div className="HeroContent-subtitle">
                            <span>
                                Servicios de peluquería, maquillaje, uñas y estética. Productos imprescindibles. En cualquier lugar, en cualquier lugar momento.
                            </span>
                        </div>
                    </div>
                </div>
            </Banner>
            <Banner fileName={HomestoreBanner}>
                <div className="HomestoreBanner">
                    <div className="HomestoreBanner-container">
                        <h2 className="HomestoreBanner-title">
                            <span>Tienda Online</span>
                        </h2>
                        <div className="HomestoreBanner-subtitle">
                            Accede a los productos de belleza utilizados por los mejores profesionales
                        </div>
                        <div className="HomestoreBanner-action">
                            <Link to={"/products"} className="btn btn-action btn-rounded btn-softblack">Comprar Ahora</Link>
                        </div>
                    </div>
                </div>
            </Banner>
            <HomeServicesAdvantage />
            <HomeServicesCard />
        </Fragment>
    );
}