import React, { Component } from 'react';
import { render } from 'react-dom';
import SlimHeader from './SlimHeader';
import SHCLogo from './SHCLogo';

class Header extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="hd">
                <SlimHeader displayName={ this.props.userProfile.completeName.displayName } logout={ this.props.logout } gotoOutPatient={ this.props.gotoOutPatient } />
                <SHCLogo />
            </div>
        );
    }
}

export default Header;