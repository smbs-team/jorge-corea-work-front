import React, { useState } from 'react';
import twitter_icon from '../../../assets/images/icons/twitter_logo.svg';
import facebook_icon from '../../../assets/images/icons/facebook_logo.svg';
import instagram_icon from '../../../assets/images/icons/instagram_logo.svg';

import peluqueria from '../../../assets/images/icons/peluqueria.svg';
import cuidados from '../../../assets/images/icons/cuidados.svg';
import maquillaje from '../../../assets/images/icons/maquillaje.svg';

const InfoProduct = () => {
    const [count, setCount] = useState(1);    
    
    const changeCount = (amount) => () => {
        const newValue = count + amount;
        
        if(newValue >= 1){
            setCount(newValue);
        }
    }

    return (
        <div className="Product space-separator">
            <h1 className="Product-title">Lorem Ipsum</h1>
            <span className="Product-ref text-small">Núm. Ref: 223344</span>
            <p className="Product-description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque convallis dictum tellus, in rutrum purus ultricies ac. Vivamus a lobortis tellus, nec pulvinar mi. Sed bibendum vitae velit nec hendrerit. Morbi quis elementum arcu. Etiam placerat, sem a suscipit rutrum, nulla erat tincidunt odio, at vehicula mauris magna vel erat. Nunc mollis, neque a porttitor sodales, nisl sapien tincidunt odio, ut pellentesque turpis eros ac quam. Nunc pellentesque diam sed augue ullamcorper condimentum.
            </p>
            <div className="Product-middle">
                <div className="Product-quantity">
                    <span className="Product-label spaced-label">Cantidad</span>
                    <div className="Product-counter">
                        <button className="Product-counterItem add" onClick={changeCount(-1)}>-</button>
                        <span className="Product-counterItem number">{count}</span>
                        <button className="Product-counterItem substract" onClick={changeCount(1)}>+</button>
                    </div>
                </div>
                <div className="Product-share">
                    <span className="Product-label spaced-label">Comparte este producto en:</span>
                    <img className="Product-social twitter" src={twitter_icon} alt="Twitter"/>
                    <img className="Product-social facebook" src={facebook_icon} alt="Facebook"/>
                    <img className="Product-social instagram" src={instagram_icon} alt="Instagram"/>
                </div>
            </div>
            <div className="Product-services">
                <div className="Product-service">
                    <p data-icon={peluqueria}>
                        <img src={peluqueria} alt="" className="Product-serviceIcon" />
                        <span>Peluqueria</span>
                    </p>
                </div>
                <div className="Product-service">
                    <p data-icon={maquillaje}>
                        <img src={maquillaje} alt="" className="Product-serviceIcon" />
                        <span>Maquillaje</span>
                    </p>
                </div>
                <div className="Product-service">
                    <p data-icon={cuidados}>
                        <img src={cuidados} alt="" className="Product-serviceIcon" />
                        <span>Cuidados</span>
                    </p>
                </div>
            </div>
            <div className="Product-actions">
                <button className="btn-action transparent">Recomendar este producto</button>
                <button className="btn-action transparent">Añadir a wishlist</button>
                <button className="btn-action primary">Añadir a la cesta</button>
            </div>
        </div>
    );
}

export default InfoProduct;