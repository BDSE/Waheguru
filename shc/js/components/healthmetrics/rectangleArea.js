import React, { Component } from 'react';

class RectangleArea extends Component{
    constructor(props){
        super(props);
        this.state = {
            width: 0,
            height: {
                totalHeight:0,
                inRangeHeight : 0,
                topOutOfRangeHeight: 0,
                bottomOutOfRangeHeight: 0
            }
        };
    }
    calculateRectangleHeight(graphHeight, referenceAreaMax, referenceAreaMin, dataMaxVal, dataMinVal, padding){

        graphHeight = graphHeight - ((padding ? padding: 20)*2); //offset the height remove the padding from it(top and bottom)

        const maxima = referenceAreaMax > dataMaxVal ? referenceAreaMax : dataMaxVal, //what is the highest point onn chart, max range or max data val
              minima = referenceAreaMin > dataMinVal ? dataMinVal : referenceAreaMin,
              graphHeightToDataRatio = graphHeight/(maxima-minima);

        let topOutOfRangeHeight, bottomOutOfRangeHeight, inRangeHeight;

        let result = {};

         inRangeHeight = graphHeightToDataRatio*(referenceAreaMax-referenceAreaMin);
         topOutOfRangeHeight = (graphHeightToDataRatio*(maxima - referenceAreaMax))+padding;
         bottomOutOfRangeHeight = (graphHeightToDataRatio*(referenceAreaMin - minima))+padding;

         result = {
             inRangeHeight,
             topOutOfRangeHeight,
             bottomOutOfRangeHeight
         };

        return result;

    }
    componentDidMount(){
        const { padding, payload, referenceAreaMax, referenceAreaMin, dataMaxVal, dataMinVal } = this.props;

         const isRefArea = (referenceAreaMax && referenceAreaMin);

            const yAxis = window.document.querySelector('.recharts-yAxis .recharts-cartesian-axis-line'),
                  xAxis = window.document.querySelector('.recharts-xAxis .recharts-cartesian-axis-line');

            let DOMRect = yAxis.getBoundingClientRect();
            const { height } = DOMRect;
            DOMRect = xAxis.getBoundingClientRect();
            const { width } = DOMRect;

            if(isRefArea){
                const heights = this.calculateRectangleHeight(height, referenceAreaMax, referenceAreaMin, dataMaxVal, dataMinVal, padding),
                 { inRangeHeight, topOutOfRangeHeight, bottomOutOfRangeHeight } = heights;

                  this.setState({
                    width: width,
                    height: {
                        inRangeHeight,
                        topOutOfRangeHeight,
                        bottomOutOfRangeHeight
                    }
                });
            }else{
                this.setState({
                    width:width,
                    height:{
                        totalHeight: height
                    }
                });
            }
    }
    render(){
       const { x, y, payload, referenceAreaMax, referenceAreaMin, dataMaxVal, dataMinVal, padding } = this.props;
       const { value } = payload;

       const valueLength = value.toString().length;
       const xOffSet = (value.toString().indexOf('.') > -1)?  (valueLength*8)+8 : (valueLength*8)+12;

       const isRefArea = (referenceAreaMax && referenceAreaMin);

       const heightFromState = this.state.height;

       if(isRefArea){
           if(referenceAreaMax === value){
                return(
                    <g className="tickRectangle">
                        <rect className="outOfRange" x={x+2} y={y-heightFromState.topOutOfRangeHeight} width={this.state.width} height={heightFromState.topOutOfRangeHeight} />
                            <text x={x-xOffSet} y={y+5}>{payload.value}</text>
                        <rect className="inRange" x={x+2} y={y} width={this.state.width} height={heightFromState.inRangeHeight} />
                    </g>
            );
            }else{
                return(
                    <g className="tickRectangle">
                        <text x={x-xOffSet} y={y+5}>{payload.value}</text>
                        <rect className="outOfRange" x={x+2} y={y} width={this.state.width} height={heightFromState.bottomOutOfRangeHeight} />
                    </g>
                );
            }
        }else{
            if( dataMaxVal === value ){
                 return(
                    <g className="tickRectangle">
                        <text x={x-xOffSet} y={y+5}>{payload.value}</text>
                        <rect className="rangeNotAvailRectangle" x={x+2} y={y-padding} width={this.state.width} height={heightFromState.totalHeight} />
                    </g>
                 );
            }else{
                return(
                    <g className="tickRectangle">
                        <text x={x-xOffSet} y={y+5}>{payload.value}</text>
                     </g>
                );
            }
       }
       
    }
}

export default RectangleArea;