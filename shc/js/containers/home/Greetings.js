import React, { Component } from 'react';
import { render } from 'react-dom';
import Moment from 'react-moment';

class Greetings extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let now = new Date(),
            hour = now.getHours(),
            greeting = 'Welcome, ';

        if(hour >= 4 && hour <= 11){
            greeting = 'Good morning, ';
        }else if(hour >= 12 && hour <= 16){
            greeting = 'Good afternoon, ';
        }else if(hour >= 17 && hour <= 21){
            greeting = 'Good evening, ';
        }

        return (
            <div className="home-greetings col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <div className="profile-image" style={{ backgroundImage: "url(" + SHC.config.resourceHost + "/resources/images/livechat_girl.png)" }} />
                <div className="content">
                    <div className="greeting">{ greeting + this.props.getUserData.userProfile.completeName.firstName }.</div>
                    <div className="today-date">Day 3: <Moment format="dddd, MMMM D, YYYY">{ new Date() }</Moment></div>
                </div>
            </div>
        );
    }
}

export default Greetings;
