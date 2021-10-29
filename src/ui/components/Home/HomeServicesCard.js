import React, {Fragment} from "react"
import service_1 from "../../../assets/images/Products/service_1.jpg"
import banner2 from "../../../assets/images/home/main-banner.jpg"
import "../../../assets/scss/components/_featureCard.scss"
import {Link} from "react-router-dom";

export default function HomeServicesCard() {
    return (
        <Fragment>
            <div className="FeatureCards">
                <div className="row justify-content-lg-between">
                    <div className="col-md-4">
                        <div className="FeatureCard">
                            <div className="FeatureCard-container">
                                <img className="FeatureCard-img img-fluid" src={service_1} alt=""/>
                                <h3 className="FeatureCard-titleFixed"> Maquillaje </h3>
                                <div className="FeatureCard-content">
                                    <h3 className="FeatureCard-title"> Maquillaje </h3>
                                    <span className="FeatureCard-text">Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
                                    Lorem Ipsum Lorem Ipsum Lorem Ipsum
                                    </span>
                                    <Link to={"/products"} className="FeatureCard-btn btn-action btn-rounded">Comprar Ahora</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="FeatureCard">
                            <div className="FeatureCard-container">
                                <img className="FeatureCard-img img-fluid" src={service_1} alt=""/>
                                <h3 className="FeatureCard-titleFixed"> Maquillaje </h3>
                                <div className="FeatureCard-content">
                                    <h3 className="FeatureCard-title"> Maquillaje </h3>
                                    <span className="FeatureCard-text">Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
                                    Lorem Ipsum Lorem Ipsum Lorem Ipsum
                                    </span>
                                    <Link to={"/products"} className="FeatureCard-btn btn-action btn-rounded">Comprar Ahora</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="FeatureCard">
                            <div className="FeatureCard-container">
                                <img className="FeatureCard-img img-fluid" src={service_1} alt=""/>
                                <h3 className="FeatureCard-titleFixed"> Maquillaje </h3>
                                <div className="FeatureCard-content">
                                    <h3 className="FeatureCard-title"> Maquillaje </h3>
                                    <span className="FeatureCard-text">Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
                                    Lorem Ipsum Lorem Ipsum Lorem Ipsum
                                    </span>
                                    <Link to={"/products"} className="FeatureCard-btn btn-action btn-rounded">Comprar Ahora</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="FeatureCard">
                            <div className="FeatureCard-container">
                                <img className="FeatureCard-img img-fluid" src={service_1} alt=""/>
                                <h3 className="FeatureCard-titleFixed"> Maquillaje </h3>
                                <div className="FeatureCard-content">
                                    <h3 className="FeatureCard-title"> Maquillaje </h3>
                                    <span className="FeatureCard-text">Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
                                    Lorem Ipsum Lorem Ipsum Lorem Ipsum
                                    </span>
                                    <Link to={"/products"} className="FeatureCard-btn btn-action btn-rounded">Comprar Ahora</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="FeatureCard">
                            <div className="FeatureCard-container">
                                <img className="FeatureCard-img img-fluid" src={service_1} alt=""/>
                                <h3 className="FeatureCard-titleFixed"> Maquillaje </h3>
                                <div className="FeatureCard-content">
                                    <h3 className="FeatureCard-title"> Maquillaje </h3>
                                    <span className="FeatureCard-text">Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
                                    Lorem Ipsum Lorem Ipsum Lorem Ipsum
                                    </span>
                                    <Link to={"/products"} className="FeatureCard-btn btn-action btn-rounded">Comprar Ahora</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="FeatureCard">
                            <div className="FeatureCard-container">
                                <img className="FeatureCard-img img-fluid" src={service_1} alt=""/>
                                <h3 className="FeatureCard-titleFixed"> Maquillaje </h3>
                                <div className="FeatureCard-content">
                                    <h3 className="FeatureCard-title"> Maquillaje </h3>
                                    <span className="FeatureCard-text">Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
                                    Lorem Ipsum Lorem Ipsum Lorem Ipsum
                                    </span>
                                    <Link to={"/products"} className="FeatureCard-btn btn-action btn-rounded">Comprar Ahora</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="WeddingCard">
                <div className="row col-md-12 p-0 m-0">
                    <div className="col-md-9 p-0">
                        <div className="WeddingCard-banner">
                            <img className="WeddingCard-bannerImg" src={banner2} alt=""/>
                        </div>
                    </div>
                    <div className="col-md-3 p-0">
                        <div className="WeddingCard-container">
                            <h3 className="WeddingCard-containerTitle">
                                Bodas
                            </h3>
                            <span className="WeddingCard-containerText">
                            Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
                        </span>
                            <Link to={"/products"} className="FeatureCard-btn btn-action btn-rounded">Comprar Ahora</Link>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}