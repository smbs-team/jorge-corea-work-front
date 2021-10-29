import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

const ShopItem = (props) => {
    return (
        <div className="ShopItem">
            <Link to={`/product/${props.id || 1}`}>
                <div className="ShopItem-image">
                    <img src={props.fileName} alt=""/>
                </div>
                <div className="ShopItem-title" data-price={props.price}>
                    <h2>{props.title}</h2>
                </div>
            </Link>
        </div>
    );
}

ShopItem.propTypes = {
    id: PropTypes.string,
    fileName: PropTypes.string,
    title: PropTypes.string,
    price: PropTypes.string
}

export default ShopItem;