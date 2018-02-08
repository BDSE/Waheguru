import React, { Component } from 'react';

class Dot extends Component{
    render(){
        const { cx, cy, value, rangeMin, rangeMax, strokeWidth, width, height } = this.props;
        if(value < rangeMin || value > rangeMax){
            return(
                <circle cx={cx} cy={cy} r="6" stroke="red" stroke-width={strokeWidth} width={width} height={height} fill="#fff" />
            )
        }else{
            return(
                <circle cx={cx} cy={cy} r="6" stroke="#8884d8" stroke-width={strokeWidth} width={width} height={height} fill="#fff" />
            )
        }
    }
}

export default Dot;