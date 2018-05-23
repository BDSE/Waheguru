import React, { Component } from 'react';
import { render } from 'react-dom';
import Providers from './Providers';
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
                    <h2>Care Team</h2>
                    <h3>Attending Physician</h3>
                    <p>An Attending Physician is a senior physician who supervise the medical team and is in charge of planning your treatment and coordinating your care.</p>
                    <h3>Physician Assistant</h3>
                    <p>A Physician Assistant (PA-C) is a health care professional trained to prevent, diagnose and treat medical diagnose and treat medical conditions in collaboration with the attending physician. A physician assistant provides comprehensive health care as part of your health care team.</p>
                    <h3>Fellow</h3>
                    <p>A Fellow is a physician who has completed residency training in a field such as medicine or surgery, and is undergoing subspeciality training.</p>
                    <h3>Resident</h3>
                    <p>A Resident is a physician who is undergoing specialty training. The resident works with the attending to make decisions about managing your care and is your primary physician contant while you are in the hospital.</p>
                    <h3>Nurse Practitioner</h3>
                    <p>A Nurse Practitioner (NP) is an advanced practice nurse who has completed graduate education and is trained to prevent, diagnose and treat medical conditions. A nurse practitioner provides comprehensive health care as part of your health care team.</p>
                </div>
            )
        };
        dispatch(openModal({}, modalContent));
    }

    render() {
        return (
            <div className="careteam">
                <div className="info-icon" onClick={ this.infoDot }>
                    <img src={ SHC.config.resourceHost + "/resources/images/MyHealth_Icons_Information.svg" } width="25" height="24" alt="" />
                </div>
                <Providers { ...this.props } />
            </div>
        );
    }
}

export default CareTeam;