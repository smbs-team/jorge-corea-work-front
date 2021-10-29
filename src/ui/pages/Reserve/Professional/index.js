import React, {Fragment} from 'react';
import { Helmet } from "react-helmet";
import ReserveContainer from '../../../components/Reserve/ReserveContainer';
import ProfessionalList from '../../../components/Reserve/ProfessionalList';
import ReserveSidebar from '../../../components/Reserve/ReserveSidebar';
import ReserveFooter from '../../../components/Reserve/ReserveFooter';

import '../../../../assets/scss/pages/reserve.scss'

export default function Professional() {
    return(
        <Fragment>
            <Helmet bodyAttributes={{ class: "without-footer" }} />
            <ReserveContainer>
                <ReserveSidebar />
                <ProfessionalList />
            </ReserveContainer>
            <ReserveFooter 
                description="Brushing joven de 11 a 21 años (20€)  +  Brushing con extensiones de 30cm (melena corta (6€) +    Reforzador (5€)  +   Lorem ipsum (5€)"
                subTotal="48,50€"
            >
                    <div className="ReserveFooter-prices">
                        <span>Extra horario</span>
                        <span className="ReserveFooter-prices mount">4,50€</span>
                    </div>
                    <div className="ReserveFooter-prices">
                        <span>Extra desplazamiento</span>
                        <span className="ReserveFooter-prices mount">8,00€</span>
                    </div>
            </ReserveFooter>
        </Fragment>
    )
}