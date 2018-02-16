import React, { Component } from 'react';
import { render } from 'react-dom';

class ItemCount extends Component {
    constructor(props) {
        super(props);
    }

    render(){
        const { num } = this.props;

        if(!isNaN(num) && num > 0) {
            return (
                <span>&nbsp;({ num })</span>
            );
        }else{
            return false;
        }
    }
}

export default ItemCount;