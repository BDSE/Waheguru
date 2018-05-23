import React, {Component} from 'react';
import Dot from './dot';
import RectangleArea from './rectangleArea';
import Util from '../../services/Util';
import {
    ResponsiveContainer,
    LineChart,
     Line,
     XAxis,
     YAxis,
     Tooltip,
     Label
    } from 'recharts';

class Chart extends Component{

    constructor(props){
        super(props);
    }

    renderGradient(colorBreakPointMax, colorBreakPointMin, normalStrokeCol, abnormalStrokeCol, maxMinArr){

        if(colorBreakPointMax && colorBreakPointMin){
            /* Calculate the breakpoints for both the upper and lower range values, so that we can change color at these thresholds in graph line*/
            const colorBreakPointPercentage1 = `${(1 - ((colorBreakPointMin - maxMinArr[0]) / (maxMinArr[1] - maxMinArr[0]))) * 100}%`;
            const colorBreakPointPercentage2 = `${((maxMinArr[1] - colorBreakPointMax) / (maxMinArr[1] - maxMinArr[0])) * 100}%`;
            return (
                <defs>
                    <linearGradient id="lineColor" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor={abnormalStrokeCol} />
                        <stop offset={colorBreakPointPercentage2} stopColor={abnormalStrokeCol} />
                        <stop offset={colorBreakPointPercentage2} stopColor={normalStrokeCol} />
                        <stop offset={colorBreakPointPercentage1} stopColor={normalStrokeCol} />
                        <stop offset={colorBreakPointPercentage1} stopColor={abnormalStrokeCol} />
                        <stop offset="100%" stopColor={abnormalStrokeCol} />
                    </linearGradient>
                </defs>
            );
        }else{
            return false;
        }
    }

    render () { 
        //console.log("charts: render: props: ", this.props);
        const { 
                data,
                yAxisDataKey, 
                xAxisDataKey, 
                referenceAreaMax, 
                referenceAreaMin,  
                xAxisLabelArr, 
                showReadingToolTIp, 
                clearToolTip, 
                selectedData, 
                isDot,
                strokeWidth,
                isRectangleArea
            } = this.props,
                maxMinArr = Util.getDataMaxMinVal(data, yAxisDataKey),
                isRefArea = (referenceAreaMax && referenceAreaMin),
                normalStrokeCol = this.props.normalStrokeCol || 'black',
                abnormalStrokeCol = this.props.abnormalStrokeCol || normalStrokeCol,
                axisColor = this.props.axisColor || 'black',
                axisPadding = this.props.axisPadiing || 30;

      return (
          <ResponsiveContainer width="100%" height={500}>
            <LineChart data={data}>
                <XAxis dataKey={xAxisDataKey}  tick={false} padding={{left:axisPadding,right:axisPadding}} stroke={axisColor} >
                    <Label value={(xAxisLabelArr && xAxisLabelArr.length != 0) ? xAxisLabelArr[0] : " "} offset={0} position="insideBottomLeft" />
                    <Label value={(xAxisLabelArr && xAxisLabelArr.length != 0) ? xAxisLabelArr[1] : " "} offset={0} position="insideBottomRight" />
                </XAxis>
                <YAxis 
                    type="number"
                    dataKey={yAxisDataKey}
                    domain={isRefArea ? ['dataMin', 'dataMax'] : [0, 'dataMax']}
                    ticks={isRefArea ? [referenceAreaMax, referenceAreaMin] : [0, maxMinArr[1]] }
                    tickSize={0}
                    padding={{ bottom: axisPadding, top:axisPadding}}
                    stroke={axisColor}
                    tick={isRectangleArea ? <RectangleArea referenceAreaMax={referenceAreaMax} referenceAreaMin={referenceAreaMin} dataMinVal={maxMinArr[0]} dataMaxVal={maxMinArr[1]} padding={axisPadding} /> : true}
                />
                    
                {this.renderGradient(referenceAreaMax, referenceAreaMin, normalStrokeCol, abnormalStrokeCol, maxMinArr)}

                <Line dataKey="numericValue" stroke={isRefArea ? 'url(#lineColor)' : normalStrokeCol} strokeWidth={strokeWidth ? strokeWidth : 5}
                dot={
                    isDot ? 
                    <Dot 
                        showReadingToolTIp={showReadingToolTIp}
                        clearToolTip={clearToolTip}
                        referenceAreaMax={referenceAreaMax} 
                        referenceAreaMin={referenceAreaMin} 
                        normalStrokeCol={normalStrokeCol} 
                        abnormalStrokeCol={abnormalStrokeCol} 
                        selectedData={selectedData}
                        radius="10"
                    /> : false
                }
                />
            </LineChart>
          </ResponsiveContainer>
      );
    }
}
export default Chart;