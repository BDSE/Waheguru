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
import Rectangle from 'recharts/lib/shape/Rectangle';

class Chart extends Component{
    constructor(props){
        super(props);
    }
    getDataMaxVal(data, key){
        const arr = data.map((x) => {
            return x[key]
        })
      return Math.max(...arr);
    }
    render () {
        const yAxisDataKey = "amt",
              xAxisDataKey = "name",
              rangeMax = 2500,
              rangeMin = 900;
        const data = [
            {name: 'Page A',  amt: 1400},
            {name: 'Page B',  amt: 710},
            {name: 'Page C',  amt: 1290},
            {name: 'Page D',  amt: 2800},
            {name: 'Page E',  amt: 201},
            {name: 'Page F',  amt: 1300},
            {name: 'Page G',  amt: 1800},
      ];
      const dataMaxVal = this.getDataMaxVal(data, "amt");
      return (
          <ResponsiveContainer width="100%" height={500}>
            <LineChart data={data}>
                <XAxis dataKey={xAxisDataKey}  tick={false} padding={{left:20,right:20}} stroke="red" >
                    <Label value="Date Here" offset={0} position="insideBottomLeft" />
                    <Label value="Date Here" offset={0} position="insideBottomRight" />
                </XAxis>
                <Tooltip />
                <YAxis type="number" dataKey={yAxisDataKey} domain={[0, 'dataMax']} ticks={[rangeMax, rangeMin]} tickSize={0} padding={{ bottom: 20, top:20}} stroke="red" tick={<RectangleArea rangeMax={rangeMax} rangeMin={rangeMin} dataMaxVal={dataMaxVal}/>}/>
                <Line type="monotone" dataKey="amt" stroke="#8884d8" strokeWidth="3" dot={<Dot rangeMax={rangeMax} rangeMin={rangeMin}/>}/>
            </LineChart>
          </ResponsiveContainer>
      );
    }
}
export default Chart;