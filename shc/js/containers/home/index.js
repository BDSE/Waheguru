import React, { Component } from 'react';
import { render } from 'react-dom';
import Greetings from './Greetings';
import Schedule from './Schedule';
import Alerts from './Alerts';
import CareTeam from './CareTeam';
import TestResults from './TestResults';

class Home extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="home">
                <Greetings { ...this.props } />
                <Schedule { ...this.props } />
                <Alerts { ...this.props } />
                <CareTeam { ...this.props } />
                <TestResults { ...this.props } />
            </div>
        );
    }
}

export default Home;