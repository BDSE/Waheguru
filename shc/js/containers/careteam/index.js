import React, { Component } from 'react';
import { render } from 'react-dom';
import Providers from './Providers';

class CareTeam extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="careteam">
                <Providers { ...this.props } />
            </div>
        );
    }
}

export default CareTeam;