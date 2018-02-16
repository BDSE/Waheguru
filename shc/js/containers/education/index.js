import React, { Component } from 'react';
import { render } from 'react-dom';
import { openModal } from '../../actions_old';
import Summary from './Summary';
import Topic from './Topic';
import Point from './Point';

class Education extends Component {
    constructor(props) {
        super(props);
        this.infoDot = this.infoDot.bind(this);
        this.getSubmode = this.getSubmode.bind(this);
        this.getKeyValue = this.getKeyValue.bind(this);
        this.isValidKey = this.isValidKey.bind(this);
        this.content = this.content.bind(this);
        this.submodes = ['summary', 'topic', 'point'];

        let thisKey = this.getKeyValue(),
            keyArray = thisKey ? thisKey.split('^') : [];

        this.state = {
            keyValue: thisKey,
            submode: this.getSubmode(keyArray),
            education: props.education,
            gotoSubmode: this.gotoSubmode,
            history: props.history
        };
    }

    componentDidUpdate () {
        let thisKey = this.getKeyValue(),
            keyArray = thisKey ? thisKey.split('^') : [],
            thisSubmode = this.getSubmode(keyArray);

        if(thisKey && !this.isValidKey(keyArray)){
            thisSubmode = 'summary';
            thisKey = undefined;
        }

        if(this.state.submode !== thisSubmode || this.state.keyValue !== thisKey) {
            this.setState({
                submode: thisSubmode,
                keyValue: thisKey
            });
        }
    }

    infoDot() {
        const { dispatch } = this.props;
        const modalContent = {
            defaultCloseButton: true,
            shouldCloseOnOverlayClick: true,
            content: (
                <div className="modal-education padding-content">
                    <h2>Caregiver Involvement</h2>
                    <p>Your health care can involve family and caregivers. Share access to MyHealth for support with doctors&#8217; visits, education, instructions, and questions for your care team.</p>
                    <br clear="all" />
                    <h2>How to Share Access</h2>
                    <p>Share Access enables designated individuals to access online medical health information for their child or another adult via MyHealth. To start, download and complete either the <a target="_blank" href="https://stanfordhealthcare.org/content/dam/SHC/patientsandvisitors/myhealth/docs/myhealth-proxy-request-form-adult.pdf">Adult Share Access Request Form</a> or the <a target="_blank" href="https://stanfordhealthcare.org/content/dam/SHC/patientsandvisitors/myhealth/docs/myhealth-proxy-request-form-minor-child.pdf">Child Share Access Request Form</a>. The form must be submitted in-person at any Stanford Health Care Clinic. You will receive an activation letter within one week of submission. <a target="_blank" href="https://stanfordhealthcare.org/for-patients-visitors/myhealth/share-access.html">Click here</a> for more information about Share Access.</p>
                </div>
            )
        };
        dispatch(openModal({}, modalContent));
    }

    getSubmode(keyArray){
        const { submode } = this.props;

        let index = this.submodes.indexOf(submode),
            length = keyArray? keyArray.length : 0;

        if(length <= index){
            return this.submodes[length];
        }else{
            return this.submodes[Math.max(index, 0)];
        }
    }

    getKeyValue(){
        const { params } = this.props;

        let thisKey = undefined;

        if(params){
            let param = params.split('&');

            if(param.length){
                param.map(item => {
                    let keyValue = item.split('=');

                    if(keyValue.length === 2 && keyValue[0] === 'key'){
                        thisKey = keyValue[1];
                    }
                });
            }
        }

        return thisKey;
    }

    isValidPoint(topic, keyArray){
        let valid = false;

        if (topic.point && topic.point.length) {
            topic.point.map(point => {
                if (point.id === keyArray[2]) {
                    valid = true;
                }
            });
        }

        return valid;
    }

    isValidTopic(title, keyArray){
        let valid = false;

        if (title.topic && title.topic.length) {
            title.topic.map(topic => {
                if (topic.id === keyArray[1]) {
                    if (keyArray.length > 2) {
                        valid = this.isValidPoint(topic, keyArray);
                    } else {
                        valid = true;
                    }
                }
            });
        }

        return valid;
    }

    isValidTitle(encounter, keyArray){
        let valid = false;

        if(encounter.title && encounter.title.length) {
            encounter.title.map(title => {
                if (title.id === keyArray[0]) {
                    if (keyArray.length > 1) {
                        valid = this.isValidTopic(title, keyArray);
                    } else {
                        valid = true;
                    }
                }
            });
        }

        return valid;
    }

    isValidKey(keyArray){
        let valid = false;

        if(keyArray.length > 0){
            if(this.state.education && this.state.education.response && this.state.education.response.encounter && this.state.education.response.encounter.length) {
                this.state.education.response.encounter.map(encounter => {
                    valid = this.isValidTitle(encounter, keyArray);
                });
            }
        }

        return valid;
    }

    content() {
        switch(this.state.submode){
            case 'summary':
                return <Summary { ...this.state } />;
            case 'topic':
                return <Topic { ...this.state } />;
            case 'point':
                return <Point { ...this.state } />;
            default:
                return false;
        }
    }

    render() {
        return (
            <div className="education">
                <div className="info-icon" onClick={ this.infoDot }>
                    <img src={ SHC.config.resourceHost + "/resources/images/MyHealth_Icons_Information.svg" } width="25" height="24" alt="" />
                </div>
                <div className="patient-education">
                    <this.content />
                </div>
            </div>
        );
    }
}

export default Education;