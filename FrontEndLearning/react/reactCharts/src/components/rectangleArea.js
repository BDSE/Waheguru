import React, { Component } from 'react';

class RectangleArea extends Component{
    constructor(props){
        super(props);
        this.state = {
            width: 50,
            height: 0
        };
    }
    calculateRectangleHeight(graphHeight, rangeMax, rangeMin, dataMaxVal, dataMinVal, padding){

        graphHeight = graphHeight - ((padding ? padding: 20)*2) //offset the height remove the padding from it(top and bottom)
        const maxima = rangeMax > dataMaxVal ? rangeMax : dataMaxVal; //what is the highest point onn chart, max range or max data val
        const minima = rangeMin > dataMinVal ? dataMinVal : rangeMin;
        const rangeDiff = rangeMax-rangeMin; //need height from rangeMin to rangeMax on yAxis
        const height = (graphHeight/(maxima-minima))*rangeDiff;
        return height;

    }
    componentDidMount(){
        const { padding, payload, rangeMax, rangeMin, dataMaxVal, dataMinVal } = this.props;
        if(rangeMax === payload.value){
            const yAxis = window.document.querySelector('.recharts-yAxis .recharts-cartesian-axis-line');
            const xAxis = window.document.querySelector('.recharts-xAxis .recharts-cartesian-axis-line')
            let DOMRect = yAxis.getBoundingClientRect();
            const { height } = DOMRect;
            DOMRect = xAxis.getBoundingClientRect();
            const { width } = DOMRect;
            this.setState({
                width: width,
                height: this.calculateRectangleHeight(height, rangeMax, rangeMin, dataMaxVal, dataMinVal, padding)
            });
        }
    }
    render(){
       const { x, y, payload, rangeMax, rangeMin, fillColor } = this.props;
       const { value } = payload;

       const valueLength = value.toString().length;
       const xOffSet = (value.toString().indexOf('.') > -1)?  (valueLength*8)+4 : (valueLength*8)+8
       
       if(rangeMax === value){
        return(
            <g className="tickRectangle">
                <text x={x-xOffSet} y={y+5}>{payload.value}</text>
               <rect x={x+2} y={y} width={this.state.width} height={this.state.height} style={{fill:fillColor,fillOpacity:0.3}} />
           </g>
       );
       }else{
           return(
            <g className="tickRectangle">
                <text x={x-xOffSet} y={y+5}>{payload.value}</text>
            </g>
           )
       }
    }
}

export default RectangleArea;