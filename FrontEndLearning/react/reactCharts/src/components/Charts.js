import _ from 'lodash';
import React, {Component} from 'react';
import Dot from './dot';
import {
    ResponsiveContainer,
    LineChart,
     Line,
     XAxis,
     YAxis,
     ReferenceArea,
     Tooltip,
     Label
    } from 'recharts';

class Chart extends Component{
    constructor(props){
        super(props);
    }

    render () {
        const data = [
            {name: 'Page A',  amt: 1400},
            {name: 'Page B',  amt: 710},
            {name: 'Page C',  amt: 1290},
            {name: 'Page D',  amt: 2800},
            {name: 'Page E',  amt: 201},
            {name: 'Page F',  amt: 1300},
            {name: 'Page G',  amt: 1800},
      ];
      return (
          <ResponsiveContainer width="100%" height={500}>
            <LineChart data={data}>
                <XAxis dataKey="name" padding={{left: 20}} tick={false} stroke="red" >
                    <Label value="Date Here" offset={0} position="insideBottomLeft" />
                    <Label value="Date Here" offset={0} position="insideBottomRight" />
                </XAxis>
                <YAxis type="number" width={80}  ticks={[900, 2500]} tickMargin={5} tickSize={0} padding={{ bottom: 20 }} stroke="red"/>
                <Tooltip/>
                <Line type="monotone" dataKey="amt" stroke="#8884d8" activeDot={{r: 8}} strokeWidth="3" dot={<Dot rangeMax={2500} rangeMin={900}/>}/>
                <ReferenceArea  y1={900} y2={2500} fill="blue" fillOpacity={0.1} />
            </LineChart>
          </ResponsiveContainer>
      );
    }
}
export default Chart;