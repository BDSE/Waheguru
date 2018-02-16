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

    renderGradient(referenceAreaMax, referenceAreaMin, normalStrokeCol, abnormalStrokeCol, maxMinArr){

        const colorBreakPoint1 = referenceAreaMin,
              colorBreakPoint2 = referenceAreaMax;

        if(referenceAreaMin && referenceAreaMax){
            /* Calculate the breakpoints for both the upper and lower range values, so that we can change color at these thresholds in graph line*/
            const colorBreakPointPercentage1 = `${(1 - ((colorBreakPoint1 - maxMinArr[0]) / (maxMinArr[1] - maxMinArr[0]))) * 100}%`;
            const colorBreakPointPercentage2 = `${((maxMinArr[1] - colorBreakPoint2) / (maxMinArr[1] - maxMinArr[0])) * 100}%`;
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
    
    renderTooltip(){
       // console.log("amar");

    }
    render () { 
        const { axisColor, yAxisDataKey, xAxisDataKey, referenceAreaMax, referenceAreaMin, normalStrokeCol, abnormalStrokeCol, data, xAxisLabelArr, selectReading} = this.props,
                axisPadding = 30,
                maxMinArr = Util.getDataMaxMinVal(data, yAxisDataKey);

      return (
          <ResponsiveContainer width="100%" height={500}>
            <LineChart data={data}>
                <XAxis dataKey={xAxisDataKey}  tick={false} padding={{left:axisPadding,right:axisPadding}} stroke={axisColor? axisColor : "black"} >
                    <Label value={(xAxisLabelArr && xAxisLabelArr.length != 0) ? xAxisLabelArr[0] : " "} offset={0} position="insideBottomLeft" />
                    <Label value={(xAxisLabelArr && xAxisLabelArr.length != 0) ? xAxisLabelArr[1] : " "} offset={0} position="insideBottomRight" />
                </XAxis>
                <Tooltip/>
                <YAxis 
                    type="number"
                    dataKey={yAxisDataKey}
                    domain={(referenceAreaMax && referenceAreaMin) ? ['dataMin', 'dataMax'] : [0, 'dataMax']}
                    ticks={(referenceAreaMax && referenceAreaMin) ? [referenceAreaMax, referenceAreaMin] : [0, maxMinArr[1]] }
                    tickSize={0}
                    padding={{ bottom: axisPadding, top:axisPadding}}
                    stroke={axisColor? axisColor : "black"}
                    tick={(referenceAreaMax && referenceAreaMin) ? <RectangleArea referenceAreaMax={referenceAreaMax} referenceAreaMin={referenceAreaMin} dataMinVal={maxMinArr[0]} dataMaxVal={maxMinArr[1]} padding={axisPadding} fillColor={normalStrokeCol} /> : true}
                />
                    
                {this.renderGradient(referenceAreaMax, referenceAreaMin, normalStrokeCol, abnormalStrokeCol, maxMinArr)}

                <Line type="monotone" dataKey="numericValue" stroke={(referenceAreaMax && referenceAreaMin) ? 'url(#lineColor)' : normalStrokeCol} strokeWidth="5" dot={<Dot selectReading={selectReading} referenceAreaMax={referenceAreaMax} referenceAreaMin={referenceAreaMin} normalStrokeCol={normalStrokeCol} abnormalStrokeCol={abnormalStrokeCol} radius="12"/>}/>
            </LineChart>
          </ResponsiveContainer>
      );
    }
}
export default Chart;