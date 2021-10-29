import React, { Fragment } from 'react';
import DetailProduct from './DetailProduct';

export default function Product(props) {
    return (
        <Fragment>
            <DetailProduct id={props.id} />    
        </Fragment>
    );
}