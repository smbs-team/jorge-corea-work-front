import React, { Fragment } from 'react';
import Product from '../../components/Product';
import Breadcrumb from '../../components/Breadcrumb';
import PropTypes from 'prop-types';

import { useParams } from "react-router-dom";

function Home() {
    const {id} = useParams();
    return (
        <Fragment>
            <Breadcrumb />
            <Product id={parseInt(id)} />
        </Fragment>
    );
}

Home.propTypes = {
    id: PropTypes.string    
}

export default Home;
