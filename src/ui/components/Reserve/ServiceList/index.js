import React, {Fragment} from 'react';
import ServiceCard from '../ServiceCard';

import service_1 from '../../../../assets/images/Products/service_1.jpg';
import service_2 from '../../../../assets/images/Products/service_2.jpg';
import service_3 from '../../../../assets/images/Products/service_3.jpg';
import service_4 from '../../../../assets/images/Products/service_4.jpg';
import service_5 from '../../../../assets/images/Products/service_5.jpg';
import service_6 from '../../../../assets/images/Products/service_6.jpg';

export default function ServiceList() {
    return(
        <Fragment>
            <div className="ServiceList">
                <div className="row">
                    <div className="col-12">
                        <h3 className="ServiceList-title">1. Servicios</h3>
                        <p className="ServiceList-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, tempora. Reprehenderit temporibus laborum libero distinctio ad, perferendis perspiciatis nobis odio, facere vitae quam? Aperiam, nesciunt et quae totam consequatur velit!</p>
                    </div>
                    <div className="col-12 col-xl-6">
                        <ServiceCard 
                            image={service_1}
                            title="Peluquería"
                            text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni fugit, amet harum magnam non, itaque eos saepe."
                            price="A partir de 30$"
                        />
                    </div>
                    <div className="col-12 col-xl-6">
                        <ServiceCard 
                            image={service_4}
                            title="Peluquería"
                            text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni fugit, amet harum magnam non, itaque eos saepe."
                            price="A partir de 30$"
                        />
                    </div>
                    <div className="col-12 col-xl-6">
                        <ServiceCard 
                            image={service_2}
                            title="Peluquería"
                            text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni fugit, amet harum magnam non, itaque eos saepe."
                            price="A partir de 30$"
                        />
                    </div>
                    <div className="col-12 col-xl-6">
                        <ServiceCard 
                            image={service_5}
                            title="Peluquería"
                            text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni fugit, amet harum magnam non, itaque eos saepe."
                            price="A partir de 30$"
                        />
                    </div>
                    <div className="col-12 col-xl-6">
                        <ServiceCard 
                            image={service_3}
                            title="Peluquería"
                            text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni fugit, amet harum magnam non, itaque eos saepe."
                            price="A partir de 30$"
                        />
                    </div>
                    <div className="col-12 col-xl-6">
                        <ServiceCard 
                            image={service_6}
                            title="Peluquería"
                            text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni fugit, amet harum magnam non, itaque eos saepe."
                            price="A partir de 30$"
                        />
                    </div>
                    <div className="col-12 col-xl-6">
                        <ServiceCard 
                            image={service_1}
                            title="Peluquería"
                            text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni fugit, amet harum magnam non, itaque eos saepe."
                            price="A partir de 30$"
                        />
                    </div>
                    <div className="col-12 col-xl-6">
                        <ServiceCard 
                            image={service_4}
                            title="Peluquería"
                            text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni fugit, amet harum magnam non, itaque eos saepe."
                            price="A partir de 30$"
                        />
                    </div>
                </div>
            </div>
        </Fragment>
    );
}