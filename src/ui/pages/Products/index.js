
import React, { Fragment } from 'react';
import Banner from '../../components/Banner';
import BannerFile from '../../../assets/images/banners/store-banner.jpg';
import ListStore from '../../components/Store';
import Breadcrumb from '../../components/Breadcrumb';

export default function Products() {
    return (
        <Fragment>
            <Banner fileName={BannerFile} title='Tienda Online'/>
            <Breadcrumb />
            <ListStore />
        </Fragment>
    );
}