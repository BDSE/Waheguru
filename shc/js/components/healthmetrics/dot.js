import React, { Component } from 'react';

class Dot extends Component{

    constructor(props){
        super(props);

        this.incRadius = this.incRadius.bind(this);
        this.setRadius = this.setRadius.bind(this);
        this.handleHover = this.handleHover.bind(this);
        this.drawCircle = this.drawCircle.bind(this);
    }

    incRadius(target, radius, by){ 

        radius = parseInt(radius)+by;
        target.setAttribute('r', ""+radius);

    }

    setRadius(target, radius){

        target.setAttribute('r', radius);

    }

    handleHover(e){
        let eventType = e.type;
        let target = e.target;
        const { payload, radius} = this.props || {
            radius: 12,
            payload: {
                numericValue: "",
                unit: "",
                timeRecorded: "",
                orderId:"",
                isAbnormal:false
            }
        },
        { isAbnormal } = payload;
        if(eventType === 'mouseover'){
            const { cx, cy } = this.props || {
                cx:0,
                cy:0,
            },
            { numericValue, unit, timeRecorded } = payload;

            this.incRadius(target, radius, 5);
            this.props.showReadingToolTIp( numericValue , unit , timeRecorded , cx , cy, isAbnormal );

        }else if(eventType === 'mouseout'){
            let { selectedData } = this.props,
                { orderId } = payload;

            if(!(orderId === selectedData)){
                this.setRadius(target, radius);
            }
           
            this.props.clearToolTip(e);

        }
    }

    drawCircle(){
        const { cx, cy, value, referenceAreaMax, referenceAreaMin, strokeWidth, abnormalStrokeCol, normalStrokeCol, width, height, radius, payload, selectedData} = this.props,
        { orderId, isAbnormal } = payload || {orderId : "", isAbnormal:false};
        let color = "";

        if(((referenceAreaMax && referenceAreaMin) && (value < referenceAreaMin || value > referenceAreaMax)) || isAbnormal) color = abnormalStrokeCol;
        else color = normalStrokeCol;

        return (
            <circle 
                className="dot pointer"
                cx={cx}
                cy={cy} 
                r={(orderId === selectedData)? parseInt(radius)+5 : radius} 
                stroke={color}
                strokeWidth={strokeWidth}
                width={width}
                height={height}
                fill="#fff" 
                onMouseOver={this.handleHover}
                onMouseOut={this.handleHover}
                orderid={orderId}
            />
        );
    }

    render(){
        
        return(
            <this.drawCircle />
        );

    }
}

export default Dot;