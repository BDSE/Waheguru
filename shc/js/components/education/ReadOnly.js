import React, { Component } from 'react';
import { render } from 'react-dom';

class ReadOnly extends Component {
    constructor(props) {
        super(props);
    }

    render(){
        const { readOnly } = this.props;

        if(readOnly){
            return (
                <span>&nbsp;[Read-Only]</span>
            );
        }else{
            return false;
        }
    }
}

export default ReadOnly;