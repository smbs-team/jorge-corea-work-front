import React from 'react';
import PropTypes from 'prop-types';

import play_icon from '../../../../assets/images/icons/play.png';

const Preview = (props) => {
    return (
        <div className="ImageProduct-thumb">
            <img src={`${props.isVideo ? play_icon : props.fileName}`} alt=""/>
        </div>
    )
}

Preview.propTypes = {
    fileName: PropTypes.string,
    isVideo: PropTypes.bool 
}

export default Preview;