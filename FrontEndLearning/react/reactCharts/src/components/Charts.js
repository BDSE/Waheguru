import _ from 'lodash';
import React, {Component} from 'react';
import Dot from './dot';
import RectangleArea from './rectangleArea';
import {
    ResponsiveContainer,
    LineChart,
     Line,
     XAxis,
     YAxis,
     ReferenceArea,
     ReferenceLine,
     Tooltip,
     Label
    } from 'recharts';

class Chart extends Component{
    constructor(props){
        super(props);
    }
    getDataMaxMinVal(data, key){
        let obj = Object.assign([], data);
        const arr = obj.sort((x,y) => {
            return x[key]-y[key]
        })
      return [arr[0][key], arr[(arr.length)-1][key]];
    }
    render () { 
        const yAxisDataKey = "amt",
              xAxisDataKey = "name",
              rangeMax = 29,
              rangeMin = 18,
              axisPadding = 30,
              normalStrokeCol ="#2296F3",
              abnormalStrokeCol = "#E57373"
        const data = [
            {name: ' A',  amt: 23},
            {name: ' B',  amt: 16},
            {name: ' C',  amt: 25},
            {name: ' D',  amt: 29.3},
            {name: ' E',  amt: 32.1},
            {name: ' F',  amt: 28},
            {name: ' G',  amt: 28.9},
            {name: ' h',  amt: 25.9},
            {name: ' I',  amt: 30.9},
            {name: ' J',  amt: 32.9},
      ];
      const maxMinArr = this.getDataMaxMinVal(data, "amt");
      const colorBreakPoint1 = rangeMin;
      const colorBreakPoint2 = rangeMax;
      const colorBreakPointPercentage1 = `${(1 - ((colorBreakPoint1 - maxMinArr[0]) / (maxMinArr[1] - maxMinArr[0]))) * 100}%`;
      const colorBreakPointPercentage2 = `${((maxMinArr[1] - colorBreakPoint2) / (maxMinArr[1] - maxMinArr[0])) * 100}%`;
      console.log(colorBreakPointPercentage1);
      console.log(colorBreakPointPercentage2);
      return (
          <ResponsiveContainer width="100%" height={500}>
            <LineChart data={data}>
                <XAxis dataKey={xAxisDataKey}  tick={false} padding={{left:axisPadding,right:axisPadding}} stroke="red" >
                    <Label value="Date Here" offset={0} position="insideBottomLeft" />
                    <Label value="Date Here" offset={0} position="insideBottomRight" />
                </XAxis>
                <Tooltip />
                <YAxis type="number" dataKey={yAxisDataKey} domain={['dataMin', 'dataMax']} ticks={[rangeMax, rangeMin]} tickSize={0} padding={{ bottom: axisPadding, top:axisPadding}} stroke="red"
                 tick={<RectangleArea rangeMax={rangeMax} rangeMin={rangeMin} dataMinVal={maxMinArr[0]} dataMaxVal={maxMinArr[1]} padding={axisPadding} fillColor={normalStrokeCol}/>}/>
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
                <Line type="monotone" dataKey="amt" stroke='url(#lineColor)' strokeWidth="5" dot={<Dot rangeMax={rangeMax} rangeMin={rangeMin} />}/>
            </LineChart>
          </ResponsiveContainer>
      );
    }
}
export default Chart;