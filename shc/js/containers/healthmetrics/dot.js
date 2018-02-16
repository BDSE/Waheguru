import React, { Component } from 'react';

class Dot extends Component{

    constructor(props){
        super(props);

        this.incRadius = this.incRadius.bind(this);
        this.decRadius = this.decRadius.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    incRadius(event){
        let { radius } = this.props;
        radius = parseInt(radius)+5;
        event.target.setAttribute('r', ""+radius);
    }

    decRadius(event){
        let { radius } = this.props;
        event.target.setAttribute('r', radius);
    }

    handleClick(e){
        const { payload } = this.props;

        if(payload.comment || payload.narative){
            this.props.selectReading(payload.comment || " ", payload.narative || " ");
        }else{
            this.props.selectReading(" ", " ");
        }
    }

    render(){
        console.log("dot..,", this.props);
        const { cx, cy, value, referenceAreaMax, referenceAreaMin, strokeWidth, abnormalStrokeCol, normalStrokeCol, width, height, radius} = this.props;
        if((referenceAreaMax && referenceAreaMin) && (value < referenceAreaMin || value > referenceAreaMax)){
            return(
                <circle 
                    cx={cx}
                    cy={cy} 
                    r={radius} 
                    stroke={abnormalStrokeCol}
                    strokeWidth={strokeWidth}
                    width={width}
                    height={height}
                    fill="#fff" 
                    onMouseOver={this.incRadius}
                    onMouseOut={this.decRadius}
                    onClick={this.handleClick}
                />
            );
        }else{
            return(
                <circle
                    cx={cx}    
                    cy={cy}
                    r={radius} 
                    stroke={normalStrokeCol}
                    strokeWidth={strokeWidth}
                    width={width}
                    height={height}
                    fill="#fff"
                    onMouseOver={this.incRadius}
                    onMouseOut={this.decRadius}
                    onClick={this.handleClick}
                 />
            );
        }
    }
}

export default Dot;