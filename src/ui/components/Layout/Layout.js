import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import routes from '../../../routes';

import Header from './Header';
import Footer from './Footer';

import '../../../assets/scss/layout/layout.scss';

export default function Layout() {
    return (
        <Fragment>
            <Header />
            <Switch>
            <div className="Main">
                {routes.map((route, idx) => {
                    return route.component ? (
                    <Route
                        key={idx}
                        path={route.path}
                        exact={route.exact}
                        name={route.name}
                        render={props => (
                        <route.component {...props} />
                        )} />
                    ) : (null);
                })}
            </div>
            </Switch>
            <Footer />
        </Fragment>
    );
}