import React, { Component } from 'react';
import { render } from 'react-dom';
import ReactModal from 'react-modal';

class Modal extends Component {
    constructor(props) {
        super(props);
        this.defaultCloseButton = this.defaultCloseButton.bind(this);
        ReactModal.setAppElement('body');
    }

    defaultCloseButton (){
        if(this.props.modalParams.defaultCloseButton) {
            return (
                <div className="defaultCloseButton" onClick={ this.props.closeModal }></div>
            );
        }
    }

    render() {
        return (
            <ReactModal
                isOpen={ true }
                onRequestClose={ this.props.closeModal }
                className={{
                    base: 'modal-dialog',
                    afterOpen: '',
                    beforeClose: ''
                }}
                overlayClassName={{
                    base: 'modal-backdrop',
                    afterOpen: '',
                    beforeClose: ''
                }}
                shouldCloseOnOverlayClick={ this.props.modalParams.shouldCloseOnOverlayClick }
            >
                <div className="modal-content">
                    <this.defaultCloseButton />
                    { this.props.modalParams.content }
                </div>
            </ReactModal>
        );
    }
}

export default Modal;