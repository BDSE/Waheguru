import React, { Component } from 'react';

class Dot extends Component{
    render(){
        const { cx, cy, value, rangeMin, rangeMax, strokeWidth, stroke, width, height } = this.props;
        if(value < rangeMin || value > rangeMax){
            return(
                <circle cx={cx} cy={cy} r="9" stroke={'#E57373'} strokeWidth={strokeWidth} width={width} height={height} fill="#fff" />
            )
        }else{
            return(
                <circle cx={cx} cy={cy} r="9" stroke={'#2296F3'} strokeWidth={strokeWidth} width={width} height={height} fill="#fff" />
            )
        }
    }
}

export default Dot;