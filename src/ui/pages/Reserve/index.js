import React, {Fragment} from 'react';
import { Helmet } from "react-helmet";
import Services from '../../components/Reserve';
import ReserveContainer from '../../components/Reserve/ReserveContainer';
import ReserveSidebar from '../../components/Reserve/ReserveSidebar';

import '../../../assets/scss/pages/reserve.scss'

export default function Reserve() {
    return(
        <Fragment>
            <Helmet bodyAttributes={{ class: "without-footer" }} />
            <ReserveContainer>
                <ReserveSidebar />
                <Services />
            </ReserveContainer>
        </Fragment>
    )
}