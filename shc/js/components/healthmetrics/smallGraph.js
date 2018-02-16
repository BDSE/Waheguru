import React, { Component } from 'react';
import {Sparklines, SparklinesLine, SparklinesSpots} from 'react-sparklines';

class SmallGraph extends Component{
    render(){
        return(
            <div>
                <Sparklines height={15} width={100} data={this.props.data}>
                    <SparklinesLine color={this.props.color} style={{ fill: "none", strokeWidth: .8}}/>
                    <SparklinesSpots size={1} style={{ stroke: this.props.color, strokeWidth: .8, fill: "#ECF5F7" }}/>
                </Sparklines>
            </div>
        );
    }
}

export default SmallGraph;