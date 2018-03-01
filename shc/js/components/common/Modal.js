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
        return this.props.modalParams.defaultCloseButton ? (
            <div className="defaultCloseButton" onClick={ this.props.closeModal }></div>
        ) : false;
    }

    render() {
        let baseName = 'modal-dialog' + (this.props.modalParams.baseClassName ? ' ' + this.props.modalParams.baseClassName : '');

        return (
            <ReactModal
                isOpen={ true }
                onRequestClose={ this.props.closeModal }
                className={{
                    base: baseName,
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