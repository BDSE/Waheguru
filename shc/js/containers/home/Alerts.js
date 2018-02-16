import React, { Component } from 'react';
import { render } from 'react-dom';
import { NavLink } from 'react-router-dom';

class Alerts extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="home-alerts section todolist col-lg-4 col-md-4 col-sm-4 col-xs-12">
                <div className="title">
                    <h1>Alert Center</h1>
                </div>
                <ul className="content">
                    <NavLink to="schedule">
                        <li className="alert-item todoitem">
                            <img src={ SHC.config.resourceHost + "/resources/images/icons/MyHealth_Icons_ScheduleAVisit.svg" } />
                            <span className="text">Your Schedule</span>
                            <span className="count">2</span>
                        </li>
                    </NavLink>
                    <NavLink to="healthmetrics">
                        <li className="alert-item todoitem">
                            <img src={ SHC.config.resourceHost + "/resources/images/icons/MyHealth_Icons_TestResults.svg" } />
                            <span className="text">Test Results</span>
                            <span className="count">12</span>
                        </li>
                    </NavLink>
                    <NavLink to="education">
                        <li className="alert-item todoitem">
                            <img src={ SHC.config.resourceHost + "/resources/images/icons/MyHealth_Icons_Education.svg" } />
                            <span className="text">Education</span>
                            <span className="count">7</span>
                        </li>
                    </NavLink>
                </ul>
            </div>
        );
    }
}

export default Alerts;
