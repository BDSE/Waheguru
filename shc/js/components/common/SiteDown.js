import React, { Component } from 'react';
import { render } from 'react-dom';
import SlimHeader from './SlimHeader';
import SHCLogo from './SHCLogo';

class SiteDown extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let displayName = this.props.getUserData && this.props.getUserData.userProfile && this.props.getUserData.userProfile.completeName && this.props.getUserData.userProfile.completeName.displayName ? this.props.getUserData.userProfile.completeName.displayName : '';

        return (
            <div className="main">
                <div className="hd">
                    <SlimHeader displayName={ displayName } logout={ this.props.logout } />
                    <SHCLogo />
                </div>
                <div className="body container content-area error-sitedown">
                    <div className="inner">
                        <div className="error-sitedown">
                            <div className="main-image"><img src={ SHC.config.resourceHost + "/resources/images/icons/MyHealth_Icons_bandaid.svg" } /></div>
                            <div className="main-desc">We're sorry.<br />Our site is temporarily unavailable.<br />We are working on it and will be back soon.</div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default SiteDown;
