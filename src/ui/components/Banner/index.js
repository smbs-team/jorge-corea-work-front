import React from 'react';
import PropTypes from 'prop-types';

export default function Banner(props) {
    return (
        <div className={`BannerSection`} style={{backgroundImage:`url(${props.fileName})`}}>
            <div className="container">
                {/* <h1 className="BannerSection-title">
                    {props.title}
                </h1> */}
                {props.children}
            </div>
        </div>
    );
}

Banner.propTypes = {
    fileName: PropTypes.string,
}

