import React, { Component } from 'react';
import { render } from 'react-dom';
import Moment from 'react-moment';
import { NavLink } from 'react-router-dom';

class Schedule extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="home-schedule section col-lg-8 col-md-8 col-sm-8 col-xs-12">
                <div className="title">
                    <h1>Today&#8217; Schedule</h1>
                </div>
                <div className="today-date"><Moment format="dddd - MMMM Do, YYYY">{ new Date() }</Moment></div>
                <ul className="content">
                    <li className="schedule-item">
                        <span className="icons-sprite size-38x38 surgery"></span>
                        <span className="description">You have surgery planned</span>
                    </li>
                    <li className="schedule-item">
                        <span className="icons-sprite size-38x38 medication"></span>
                        <span className="description">You&#8217;ll need to take medication today</span>
                    </li>
                    <li className="schedule-item">
                        <span className="icons-sprite size-38x38 rounding"></span>
                        <span className="description">You have Care Team rounding planned in your room</span>
                    </li>
                    <li className="schedule-item">
                        <span className="icons-sprite size-38x38 radiology"></span>
                        <span className="description">You have a radiology appointment planned</span>
                    </li>
                </ul>
                <NavLink className="nav-link bottom" to="schedule">View Full Schedule &raquo;</NavLink>
            </div>
        );
    }
}

export default Schedule;
