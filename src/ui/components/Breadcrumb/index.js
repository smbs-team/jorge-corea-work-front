import React from 'react';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';

const CustomBreadcrumb = () => {
    return (
        <div className="container-fluid">
            <Breadcrumb className="breadcrumb-custom">
                <BreadcrumbItem>
                    <Link to="">Home</Link>
                </BreadcrumbItem>
                <BreadcrumbItem active>
                    Tienda
                </BreadcrumbItem>
            </Breadcrumb>            
        </div>
    );
};

export default CustomBreadcrumb;