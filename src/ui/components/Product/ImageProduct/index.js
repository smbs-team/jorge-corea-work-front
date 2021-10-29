import React from 'react';
import PropTypes from 'prop-types';
import Preview from './preview';

const ImageProduct = (props) => {
    const renderThumbs = () => {
        return props.thumbnails.map((t) => (
            <Preview fileName={t.source} isVideo={t.isVideo} />
        ))
    }

    return (
        <div className="ImageProduct">
            <div className="ImageProduct-main">
                <img className="img-fluid" src={props.fileName} alt=""/>                
            </div>            
            <div className="ImageProduct-thumbs">
                { renderThumbs() }
            </div>
        </div>
    );
}

ImageProduct.propTypes = {
    fileName: PropTypes.string,
    thumbnails: PropTypes.arrayOf(PropTypes.shape({
        isVideo: PropTypes.bool,
        source: PropTypes.string
    }))    
}

export default ImageProduct;