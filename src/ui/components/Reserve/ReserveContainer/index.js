import React, {Fragment} from 'react';

export default function ReserveContainer(props) {

    const [leftChild, ...otherChildren] = props.children;

    return (
        <Fragment>
            <div className="ReserveContainer">
                <div className="ReserveContainer-left">
                    {leftChild}
                </div>
                <div className="ReserveContainer-right">
                    <Fragment>
                        {otherChildren}
                    </Fragment>
                </div>
            </div>
        </Fragment>
    )    
}