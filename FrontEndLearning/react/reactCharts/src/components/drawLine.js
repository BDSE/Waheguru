import React, { Component } from 'react';
import { Line } from 'recharts';

class DrawLine extends Component{
    render(){
        const { cx, cy, value, rangeMin, rangeMax, strokeWidth, stroke, width, height } = this.props;
        console.log(".....",this.props);
        return (
            <Line type="monotone" dataKey="amt" stroke={normalStrokeCol} strokeWidth="5" />
        )
    }
}

export default DrawLine;