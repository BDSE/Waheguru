import React, { Component } from 'react';
import { render } from 'react-dom';
import Provider from '../../components/careteam/Provider';

class Providers extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const careteam = (this.props.careteam && this.props.careteam.providers ? this.props.careteam : { providers: [] });
        return (
            <div className="careteam-providers">
                <div className="title">
                    <h1>Care Team</h1>
                </div>
                <div className="info">All of our care team wear their photo identification in a prominently displayed manner. All employees, including physicians, are expected to introduce themselves, let you know what role they have in your healthcare, what they are planning to do, when they are going to do it, what effect it will have on you and what to expect next. If you have any questions, please do not hesitate to ask.</div>
                <div className="header-info">
                    <ul className="nav-bar">
                        <li className="selected">Today&#8217; Team</li>
                        <li>All</li>
                        <br clear="all" />
                    </ul>
                </div>
                <div className="providers">
                { careteam.providers.map(provider =>
                    <Provider provider={ provider } key={ provider.id } />
                )}
                </div>
            </div>
        );
    }
}

export default Providers;