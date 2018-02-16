import $ from 'jquery';
import React, { Component } from 'react';
import { render } from 'react-dom';
import Moment from 'react-moment';
import { NavLink, BrowserHistory } from 'react-router-dom';

class Topic extends Component {
    constructor(props) {
        super(props);
        this.pointIndex = this.pointIndex.bind(this);
        this.pointText = this.pointText.bind(this);
        this.leftNav = this.leftNav.bind(this);
        this.mainContent = this.mainContent.bind(this);
        this.back = this.back.bind(this);
        this.buttons = this.buttons.bind(this);
        this.content = this.content.bind(this);
        this.data = {
            title: false,
            topic: false,
            point: false
        };
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
                className = point.id === this.data.point.id ? 'completedPointCircle' : 'completedPointCircleInActive';
                break;
            default:
                display = index + 1;
                className = point.id === this.data.point.id ? 'currentPointCircle' : 'noAnswerPointCircle';
                break;
        }

        return (
            <div className="leftcolumn">
                <span className={ className }>{ display }</span>
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

    leftNav(props){
        const { topic } = props;

        return (
            <div className="point-style pointMenu">
                { topic.point.map((point, index) =>
                <NavLink to={ "/education/point/key=" + point.key } key={ point.key }>
                    <div className='item'>
                        <this.pointIndex point={ point } index={ index } />
                        <this.pointText point={ point } index={ index } />
                    </div>
                </NavLink>
                )}
            </div>
        );
    }

    iframeContent(props){
        const { point } = props;

        return (
            <div className="pointContent">
                <iframe className="pointContent" id="pointContent" frameBorder="0" allowFullScreen src={ point.source }></iframe>
                <div className="contentDesc"></div>
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
    
    messages(props){
        const { point } = props;

        return (
            <div className="messages">
            { point.readOnly ? (
                <div className="sendMessage">
                    This education material is read-only. Please <a className="sendMessageLink">send a message</a> to your Care Team if you have any questions about this content.
                </div>
            ) : false}
            </div>
        );
    }

    back() {
        return (
            <NavLink to={ "/education/topic/key=" + this.props.keyValue }><button className="button custom-button custom-cancel-button">Back To Topic</button></NavLink>
        );
    }

    buttons(){
        return (
            <div className="custom-button-container">
                <button className="button custom-button custom-cancel-button noneOutline" onClick={ this.props.history.goBack }>Back</button>
                <this.back />
            </div>
        );
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
        const encounters = (this.props.education && this.props.education.response && this.props.education.response.encounter ? this.props.education.response.encounter : []);
        const { keyValue } = this.props;

        encounters.map(encounter => {
            encounter.title.map(title => {
                if(title.key && keyValue.indexOf(title.key) === 0){
                    title.topic.map(topic => {
                        if(topic.key && keyValue.indexOf(topic.key) === 0){
                            this.data.title = title;
                            this.data.topic = topic;
                            this.data.point = topic.point[0];

                            topic.point.map(point => {
                                if(point.key && keyValue.indexOf(point.key) === 0){
                                    this.data.point = point;
                                }
                            });
                        }
                    });
                }
            });
        });

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
