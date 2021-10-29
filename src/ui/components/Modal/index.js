import React, { useState, Fragment } from 'react';
import {Modal, ModalHeader} from 'reactstrap';
import "../../../assets/scss/components/_modal.scss";
import PropTypes from 'prop-types';

const ModalCustom = (props) => {
    const {
        open,
        size,
        maxWidth,
        centered,
    } = props;

    const [isOpen, setIsOpen] = useState(open)

    const toggle = () => setIsOpen(!isOpen);

    return (
        <Fragment>
            <Modal isOpen={isOpen} size={size} centered={centered} style={{maxWidth: maxWidth}}>
                <ModalHeader toggle={toggle}></ModalHeader>
                {props.children}
            </Modal>
        </Fragment>
    );
}


ModalCustom.propTypes = {
    open: PropTypes.bool,
    position: PropTypes.string,
    size: PropTypes.string,
    maxWidth: PropTypes.string
}

export default ModalCustom;