import React, { Component } from 'react';
import { render } from 'react-dom';
import YourSchedule from './YourSchedule';

class Schedule extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="schedule">
                <YourSchedule { ...this.props } />
            </div>
        );
    }
}

export default Schedule;