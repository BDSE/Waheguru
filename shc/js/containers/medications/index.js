import React, { Component } from 'react';
import { render } from 'react-dom';
import Medications from './Medications';
import { openModal } from '../../actions';

class CareTeam extends Component {
    constructor(props) {
        super(props);
        this.infoDot = this.infoDot.bind(this);
    }

    infoDot() {
        const { dispatch } = this.props;
        const modalContent = {
            defaultCloseButton: true,
            shouldCloseOnOverlayClick: true,
            content: (
                <div className="modal-careteam padding-content">
                    <h2>Medications</h2>
                    <h3>Medications Content</h3>
                    <p>Medications info dot content goes here.</p>
                </div>
            )
        };
        dispatch(openModal({}, modalContent));
    }

    render() {
        return (
            <div className="medications">
                <div className="info-icon" onClick={ this.infoDot }>
                    <img src={ SHC.config.resourceHost + "/resources/images/MyHealth_Icons_Information.svg" } width="25" height="24" alt="" />
                </div>
                <Medications { ...this.props } />
            </div>
        );
    }
}

export default CareTeam;