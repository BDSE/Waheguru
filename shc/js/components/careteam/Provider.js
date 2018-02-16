import React, { Component } from 'react';
import { render } from 'react-dom';

class Provider extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { provider } = this.props;
        return (
            <div className="provider-item">
                <div className="no-image"></div>
                <span className="name">{ provider.name }<span>{ provider.designation ? ' , ' + provider.designation : '' }</span></span>
                <span className="specialties">{ provider.type }</span>
                <br clear="all" />
            </div>
        );
    }
}

export default Provider;