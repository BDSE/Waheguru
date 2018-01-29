import React, { Component } from 'react';

class TestComponent extends Component{
    componentDidMount(){
        console.log("Test component");
    }
    render(){
        return (
            <div>Test</div>
        )
    }
}

export default TestComponent;