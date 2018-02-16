import React, { Component } from 'react';
import { render } from 'react-dom';
import { NavLink } from 'react-router-dom';
import Provider from '../../components/careteam/Provider';

class CareTeam extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { careteam } = this.props,
            numberOfProvider = 3;

        let providers = careteam.providers.slice(0, numberOfProvider);

        return (
            <div className="home-careteam section col-lg-6 col-md-6 col-sm-6 col-xs-12">
                <div className="title">
                    <h1>Care Team</h1>
                </div>
                <div className="careteam-providers content fix-height">
                    <div className="providers">
                    { providers.map(provider =>
                            <Provider provider={ provider } key={ provider.id } />
                    )}
                    </div>
                    <br clear="all" />
                </div>
                <NavLink className="nav-link bottom" to="careteam">View All of Your Care Team &raquo;</NavLink>
            </div>
        );
    }
}

export default CareTeam;
