import React, { Component } from 'react';
import { render } from 'react-dom';
import SlimHeader from '../../components/common/SlimHeader';
import SHCLogo from '../../components/common/SHCLogo';

class Header extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="hd">
                <SlimHeader displayName={ this.props.userProfile.completeName.displayName } logout={ this.props.logout } />
                <SHCLogo />
            </div>
        );
    }
}

export default Header;
