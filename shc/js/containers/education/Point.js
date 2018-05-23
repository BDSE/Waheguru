import $ from 'jquery';
import React, { Component } from 'react';
import { render } from 'react-dom';
import { modifyCached, openModal } from '../../actions';
import Moment from 'react-moment';
import ApiCalls from "../../services/ApiCalls";

class Topic extends Component {
    constructor(props) {
        super(props);
        this.setStatePoint = this.setStatePoint.bind(this);
        this.pointIndex = this.pointIndex.bind(this);
        this.pointText = this.pointText.bind(this);
        this.leftNavItem = this.leftNavItem.bind(this);
        this.leftNav = this.leftNav.bind(this);
        this.mainContent = this.mainContent.bind(this);
        this.preventModal = this.preventModal.bind(this);
        this.handleClickUrl = this.handleClickUrl.bind(this);
        this.handleChangeRadio = this.handleChangeRadio.bind(this);
        this.handleChangeTextbox = this.handleChangeTextbox.bind(this);
        this.messages = this.messages.bind(this);
        this.answerChanged = this.answerChanged.bind(this);
        this.saveAnswer = this.saveAnswer.bind(this);
        this.nextButton = this.nextButton.bind(this);
        this.goBack = this.goBack.bind(this);
        this.backTopic = this.backTopic.bind(this);
        this.buttons = this.buttons.bind(this);
        this.setPoint = this.setPoint.bind(this);
        this.content = this.content.bind(this);
        this.data = {
            title: false,
            topic: false,
            point: false,
            currentIndex: 0
        };
        this.state = {
            id: false,
            key: false,
            changed: false
        };
    }

    componentWillMount(){
        this.setStatePoint();
    }

    componentDidMount(){
        this.mountIframe();
    }

    componentDidUpdate(){
        if(this.props.keyValue !== this.state.key) {
            this.setStatePoint();
        }
    }

    mountIframe(force){
        let iframeContainer = $('#iframe-container');

        if(force){
            iframeContainer.find('iframe').remove();
        }

        if(!iframeContainer.find('iframe').length){
            iframeContainer.prepend('<iframe className="pointContent" frameBorder="0" allowFullScreen src="' + this.data.point.source + '"></iframe>');
        }
    }

    setStatePoint(){
        const encounters = (this.props.education && this.props.education.response && this.props.education.response.encounter ? this.props.education.response.encounter : []);
        const { keyValue } = this.props;

        let keyArray = keyValue ? keyValue.split('^') : [],
            foundTopic = false;

        encounters.map(encounter => {
            if(!this.props.encounterNumber || this.props.encounterNumber === encounter.encounterNumber) {
                encounter.title.map(title => {
                    if (title.key && keyArray[0] === title.id) {
                        this.data.title = title;

                        title.topic.map(topic => {
                            if (topic.key && keyArray[1] === topic.id) {
                                foundTopic = true;
                                this.data.topic = topic;
                                this.setPoint(this.data.topic);
                            }
                        });

                        if (!foundTopic && keyArray.length > 1 && keyArray[1] < title.topic.length) {
                            this.data.topic = title.topic[keyArray[1]];
                            this.setPoint(this.data.topic);
                        }
                    }
                });
            }
        });

        if(this.state.id !== this.data.point.id) {
            this.setState($.extend({
                response: undefined
            }, this.data.point));

            this.mountIframe(true);
        }
    }

    pointIndex(props) {
        const { point, index } = props;

        let display,
            className;

        switch (point.response){
            case 'Acceptance':
                display = '&#10003;';
                className = point.id === this.data.point.id ? 'completedPointCircle' : 'completedPointCircleInActive';
                break;
            case 'Nonacceptance':
                display = '?';
                className = point.id === this.data.point.id ? 'questionPointCircle' : 'questionPointCircleInActive';
                break;
            default:
                display = index + 1;
                className = point.id === this.data.point.id ? 'currentPointCircle' : 'noAnswerPointCircle';
                break;
        }

        return (
            <div className="leftcolumn">
                <span className={ className } dangerouslySetInnerHTML={{__html: display }}></span>
            </div>
        );
    }

    pointText(props) {
        const { point, index } = props;

        let className = point.id === this.data.point.id ? 'currentPointText' : 'pointText';

        return (
            <span className={ className }>{ point.displayText.toLowerCase() }</span>
        );
    }

    leftNavItem(props){
        const { point, index } = props,
            { topic } = this.data;

        return (
            <div onClick={() => this.handleClickUrl("/education/point/" + this.props.encounterNumber + "/" + point.key.replace('^^','^0^'), index)} className={( index <= this.getMaxAllowedIndex(topic) + 1 ? 'active ' : '' ) + 'item' }>
                <this.pointIndex point={ point } index={ index } />
                <this.pointText point={ point } index={ index } />
            </div>
        );
    }

    leftNav(props){
        const { topic } = props;

        if(topic && topic.point && topic.point.length) {
            return (
                <div className="point-style pointMenu">
                    { topic.point.map((point, index) => (
                        <this.leftNavItem point={ point } index={ index } key={ point.key || index } />
                    ))}
                </div>
            );
        }else{
            return false;
        }
    }

    iframeContent(props){
        const { point } = props;

        return (
            <div id="iframe-container" className="pointContent">
                { point.description && point.description.length ? (
                    <div className="contentDesc" dangerouslySetInnerHTML={{__html: point.description }}></div>
                ) : false }
            </div>
        );
    }

    mainContent(props){
        const { point } = props;

        return (
            <div className={ "beforeScreenResize " + (point.type === 'Video Stream' ? "video" : "text") }>
                <this.iframeContent point={ point } />
            </div>
        );
    }

    preventModal(callback){
        const { dispatch } = this.props;
        const modalContent = {
            baseClassName: 'modal-sm',
            shouldCloseOnOverlayClick: true,
            content: (
                <div className="modal-education padding-content prevent-dialog">
                    <h2>Leave this Page</h2>
                    <p>Are you sure you want to leave this page? The text/answer you entered will not be saved.</p>
                    <ul className="local-buttons text-align-left">
                        <li className="custom-button save" onClick={ callback }>Leave This Page</li>
                        <li className="custom-button cancel" onClick={ this.props.closeModal }>Stay on this Page</li>
                    </ul>
                </div>
            )
        };
        dispatch(openModal({}, modalContent));
    }

    handleClickUrl(url, index){
        const { topic } = this.data;

        let changeUrl = () => {
            if (url === 'back') {
                this.props.history.goBack();
            } else if (index <= this.getMaxAllowedIndex(topic) + 1) {
                this.props.history.push(url);
            }
        };

        let callback = () => {
            this.props.closeModal();
            changeUrl();
        };

        if(this.answerChanged()){
            this.preventModal(callback);
        }else{
            changeUrl();
        }
    }

    handleChangeRadio(event){
        this.setState({
            response: event.target.value
        });
    }

    handleChangeTextbox(event){
        this.setState({
            comment: event.target.value
        });
    }
    
    messages(props){
        const { point } = props,
            { response, readOnly } = this.state;

        return (
            <div className="messages">
                <div>
                    { response || !readOnly ? (
                    <div>
                        <label onClick={() => readOnly ? false : this.setState({ response: 'Acceptance' })}>
                            <input type="radio" value="Acceptance" name="answer" onChange={ this.handleChangeRadio } checked={ response === 'Acceptance' } disabled={ readOnly } />
                            <span className="answer">I have viewed the information above. I do not have any questions.</span>
                        </label>
                        <label onClick={() => readOnly ? false : this.setState({ response: 'Nonacceptance' })}>
                            <input type="radio" value="Nonacceptance" name="answer" onChange={ this.handleChangeRadio } checked={ response === 'Nonacceptance' } disabled={ readOnly } />
                            <span className="answer">I have viewed the information above. I have questions for my Care Team.</span>
                        </label>
                    </div>
                    ) : false }
                    { point.comment && point.comment.length ? (
                    <div className="info">
                        Last submitted question: <span dangerouslySetInnerHTML={{__html: point.comment}}></span>
                    </div>
                    ) : false }
                    { response === 'Nonacceptance' && !readOnly ? (
                    <textarea placeholder={ point.comment ? 'Additional question' : 'Question is required, please enter it here' } className="commentBox" onChange={ this.handleChangeTextbox } disabled={ readOnly }></textarea>
                    ) : false }
                </div>
                { readOnly ? (
                <div className="sendMessage">
                This education material is read-only. Please <a className="sendMessageLink">send a message</a> to your Care Team if you have any questions about this content.
                </div>
                ) : false }
            </div>
        );
    }

    answerChanged(){
        const { point } = this.data,
            { response, comment } = this.state;

        return point.response !== response || point.comment !== comment;
    }

    saveAnswer(sendDataToEpic, url){
        const { encounterNumber, education } = this.props,
            { title, topic, point } = this.data,
            { response, comment } = this.state;

        if(this.answerChanged()) {
            let dataAttribute = 'education',
                data = false,
                partialKey = 'response.encounter';

            education.response.encounter.map((encounter, index) => {
                if(encounter && encounter.encounterNumber === encounterNumber){
                    partialKey += '.' + index + '.title';

                    encounter.title.map((thisTitle, indexTitle) => {
                        if(thisTitle.key === title.key){
                            let topicsCompleted = true,
                                partialKeyTitle = partialKey + '.' + indexTitle + '.status';

                            partialKey += '.' + indexTitle + '.topic';

                            thisTitle.topic.map((thisTopic, indexTopic) => {
                                if(thisTopic.key === topic.key){
                                    let pointsCompleted = true,
                                        partialKeyTopic = partialKey + '.' + indexTopic + '.status';

                                    partialKey += '.' + indexTopic + '.point';

                                    thisTopic.point.map((thisPoint, pointIndex) => {
                                        if(thisPoint.key === point.key){
                                            partialKey += '.' + pointIndex;

                                            thisPoint.response = response;
                                            thisPoint.comment = response === "Acceptance" ? "" : comment;
                                            thisPoint.status = response === "Acceptance" ? "3-Done" : "1-Active";

                                            modifyCached(dataAttribute, thisPoint, partialKey);

                                            if(response !== "Acceptance"){
                                                pointsCompleted = false;
                                            }
                                        }else if(thisPoint.response !== "Acceptance"){
                                            pointsCompleted = false;
                                        }
                                    });

                                    if(pointsCompleted){
                                        if(thisTopic.status !== "complete"){
                                            thisTopic.status = "complete";
                                            modifyCached(dataAttribute, "complete", partialKeyTopic);
                                        }
                                    }else{
                                        if(thisTopic.status === "not-started"){
                                            thisTopic.status = "in-progress";
                                            modifyCached(dataAttribute, "in-progress", partialKeyTopic);
                                        }
                                    }

                                    if(thisTopic.status !== "complete"){
                                        topicsCompleted = false;
                                    }
                                }else if(thisTopic.status !== "complete"){
                                    topicsCompleted = false;
                                }
                            });

                            if(topicsCompleted){
                                if(thisTitle.status !== "complete"){
                                    thisTitle.status = "complete";
                                    modifyCached(dataAttribute, "complete", partialKeyTitle);
                                }
                            }else{
                                if(thisTitle.status === "not-started"){
                                    thisTitle.status = "in-progress";
                                    modifyCached(dataAttribute, "in-progress", partialKeyTitle);
                                }
                            }
                        }
                    });
                }
            });

            ApiCalls.educationSetAnswer({
                encounterNumber: encounterNumber,
                key: point.key,
                responseCode: (response === 'Acceptance' ? 2 : 4),
                comment: (response === "Acceptance" ? "" : comment),
                sendDataToEpic: sendDataToEpic,
                providerId: title.provider.id
            });

            this.setState({
                changed: true
            });
        }else if(this.state.changed && sendDataToEpic){
            this.setState({
                changed: false
            });
            ApiCalls.educationSendDataToEpic(encounterNumber);
        }

        if(url){
            this.props.history.push(url);
        }
    }
    
    nextButton(){
        const { currentIndex, topic } = this.data,
            { response, comment, readOnly } = this.state;

        let text, submode, keyString, sendDataToEpic,
            answerChanged = this.answerChanged();

        if(currentIndex < topic.point.length - 1){
            text = (answerChanged ? 'Save & ' : '') + 'Proceed';
            submode = 'point';
            keyString = topic.point[currentIndex + 1].key;
            sendDataToEpic = false;
        } else {
            text = answerChanged ? 'Save & Submit' : 'Done';
            submode = 'topic';
            keyString = topic.key;
            sendDataToEpic = true;
        }

        return (
            <button className="button custom-button custom-submit-button" onClick={() => this.saveAnswer(sendDataToEpic, '/education/' + submode + '/' + this.props.encounterNumber + '/' + keyString)} disabled={ !readOnly && (!response || response === 'Nonacceptance' && !comment) }>{ text }</button>
        );
    }

    goBack(){
        this.handleClickUrl('back');
    }

    backTopic() {
        const backText = this.state.readOnly ? 'Back To Topic' : 'Finish Later';

        return (
            <button className="button custom-button custom-cancel-button" onClick={() => this.handleClickUrl('/education/topic/' + this.props.encounterNumber + '/' + this.props.keyValue.replace('^^','^0^'), -1)}>{ backText }</button>
        );
    }

    buttons(){
        return (
            <div className="custom-button-container">
                <this.nextButton />
                <button className="button custom-button custom-cancel-button" onClick={ this.goBack }>Back</button>
                <this.backTopic />
            </div>
        );
    }

    getMaxAllowedIndex(topic){
        let thisIndex = topic.point.length - 1;

        if(topic.status === 'complete' || topic.readOnly){
            return thisIndex;
        }else{
            thisIndex = -1;

            topic.point.map((point, index) => {
                if(point.response){
                    thisIndex = index;
                }
            });

            return thisIndex;
        }
    }

    getFirstIndex(topic){
        let maxAllowedIndex = this.getMaxAllowedIndex(topic);

        if(maxAllowedIndex >= topic.point.length - 1){
            return 0;
        }else{
            return maxAllowedIndex + 1;
        }
    }

    setPoint(topic){
        const { keyValue } = this.props;

        let keyArray = keyValue ? keyValue.split('^') : [],
            thisIndex = keyArray.length > 2 && keyArray[2] < topic.point.length ? keyArray[2] : this.getFirstIndex(topic);

        topic.point.map((point, index) => {
            if(point.key && keyArray[2] === point.id){
                this.data.point = point;
                thisIndex = index;
            }
        });

        this.data.point = topic.point[thisIndex];
        this.data.currentIndex = thisIndex;
    }

    content() {
        return (
            <div>
                <this.mainContent point={ this.data.point } />
                <this.leftNav topic={ this.data.topic } />
                <br clear="all" />
                <this.messages point={ this.data.point } />
                <this.buttons />
            </div>
        );
    }

    render() {
        return (
            <div className="summary">
                <div className="title">
                    <h1>{ this.data.point.displayText }</h1>
                </div>
                <this.content />
            </div>
        );
    }
}

export default Topic;
