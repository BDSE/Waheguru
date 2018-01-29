import _ from 'lodash';
import React, {Component} from 'react';
import {Sparklines, SparklinesLine, SparklinesSpots} from 'react-sparklines';
import { Highcharts } from 'highcharts';

class Chart extends Component{
    constructor(props){
        super(props);
    }
    average(data){
    return _.round(_.sum(data)/data.length);
    }
    render(){
        return (
            <div>
                 <Sparklines height={120} width={180} data={this.props.data}>
                   <SparklinesLine color={this.props.color} style={{ fill: "none" }}/>
                   <SparklinesSpots />
                </Sparklines>
                <div>{this.average(this.props.data)}</div>
            </div>
        )
    }
}
export default Chart;