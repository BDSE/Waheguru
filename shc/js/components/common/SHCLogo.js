import React, { Component } from 'react';
import { render } from 'react-dom';

class SHCLogo extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="shc-header">
                <h1 className="off-screen">MyHealth at Stanford</h1>
                <div className="brand">
                    <a href="http://stanfordhospital.org" target="_blank"></a>
                </div>
            </div>
        );
    }
}

export default SHCLogo;

