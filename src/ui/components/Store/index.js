import React, { Fragment } from 'react';
import ListStore from './ListStore';
import FilterStore from './FilterStore';

export default function ShopList() {
    return (
        <Fragment>
            <div className="container-fluid">
                <div className="filter-container">
                    <FilterStore />
                </div>
            </div>
            <ListStore usePagination />
        </Fragment>
    );
}