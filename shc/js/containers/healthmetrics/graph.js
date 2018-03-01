import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Charts from './Charts';
import Util from '../../services/Util';
import $ from 'jquery';

class Graph extends Component{

    constructor(props){
        super(props);
        
        this.state = {
            readings: {
                isSelected: false
            },
            selectedReading:{
                orderId: ""
            },
            hoveredReading: {
                value: "",
                dateAndTime: "",
                unit: "",
                cx: 0,
                cy: 0,
                toolTip: false
            }
        };

        this.handleClick = this.handleClick.bind(this);
        this.showReadingToolTIp = this.showReadingToolTIp.bind(this);
        this.clear = this.clear.bind(this);
    }

    getHighestLowestDate(data=[], key){
        const len = data.length;

        if(len === 0){
            return [];
        }
        let firstDate = data[0][key];
            firstDate = `${Util.formatDate(firstDate, 'mmmm dd, yy')} ${Util.getTimeFromDate(firstDate)}`;
        let lastDate = data[len-1][key];
            lastDate = `${Util.formatDate(lastDate, 'mmmm dd, yy')} ${Util.getTimeFromDate(lastDate)}`;
        let returnArr = [firstDate, lastDate];

        return returnArr;
       
    }
    
    prepareDataForGraph(allReadings, key){
        let arr = Object.assign([], allReadings);

       for(let x in arr){
           arr[x][key] = parseFloat([arr[x][key]]);
       }

       return arr;
    }

    showReadingToolTIp(numericValue="", unit="", dateAndTime= "", cx=0, cy=0){
        if(dateAndTime)
            dateAndTime = `${Util.formatDate(dateAndTime, 'mmmm dd, yy')} at ${Util.getTimeFromDate(dateAndTime)}`;
        this.setState({
            hoveredReading: {
                value: numericValue,
                dateAndTime: dateAndTime,
                unit: unit,
                cx: cx-80,
                cy: cy+30,
                toolTip:true
            }
        });
    }

    handleClickOnReading(target){
        const orderId = target.attr('orderid') || '';
        this.setState({
            selectedReading:{
                orderId:orderId
            }
        });
    }

    handleClick(e){
        const target = $(e.target);

        if(target.hasClass('dot')){
            this.handleClickOnReading(target);
        }
    }

    clear(e){
        let target = e.target;
        if($(target).hasClass('dot') && e.type === 'mouseout'){
            this.setState({
                hoveredReading : {
                    toolTip: false
                }
            });
        }
    }

    render(){
        const axisColor = "#B9B8BD",
              { data } = this.props,
              { allReadings, rangeHigh, rangeLow, name } = data,
              dataForGraph = this.prepareDataForGraph(allReadings,"numericValue"),
              dateRangeArr = this.getHighestLowestDate(allReadings, "timeRecorded"),
              { orderId } = this.state.selectedReading,
              isSelected = (orderId ) ? true : false,
              { comment, narative } = this.state.readings[orderId] || {
                  comment:"",
                  narative:""
              },
              { value, dateAndTime, unit, cx, cy, toolTip } = this.state.hoveredReading;

              if(data && allReadings){
                return(
                    <div>
                        <div className="title">
                            <h1>{name}</h1>
                        </div>
                        <div className="info-text">Click on a result to view more information.</div>
                        <div className="content" onClick={this.handleClick}>
                            <Charts
                                 axisColor={axisColor}
                                 referenceAreaMin={rangeLow}
                                 referenceAreaMax={rangeHigh}
                                 data={allReadings}
                                 yAxisDataKey="numericValue"
                                 xAxisDataKey="timeRecorded"
                                 normalStrokeCol ="#2296F3"
                                 abnormalStrokeCol = "#E57373"
                                 xAxisLabelArr={dateRangeArr}
                                 isDot={true}
                                 showReadingToolTIp= {this.showReadingToolTIp}
                                 clearToolTip={this.clear}
                                 selectedData = {orderId}
                            />
                            <div className="graph-tooltip" style={{transform: `translate(${cx}px, ${cy}px)`, visibility: toolTip ? 'visible' : 'hidden'}}>
                                <div className="value">{value}</div>
                                <div className="date">{dateAndTime}</div>
                                <div className="units">{unit}</div>
                            </div>
                        </div>
                        <div className="pannel">
                            <div className={"comments"+ (!comment ? " hide" : "")}>
                                <div>Comments</div>
                                <div>{comment}</div>
                            </div>
                            <div className={"narative" + (!narative ? " hide" : "")}>
                                <div>Narative</div>
                                <div>{narative}</div>
                            </div>
                            <div className={"noinfo "+ ((!comment && !narative && isSelected) ? "" : 'hide')}>There isn't any additional information for this result.</div>
                        </div>
                        <div className="to-mainpage">
                            <NavLink to="/healthmetrics">&#171; Back to The Results List</NavLink>
                        </div>
                    </div>
                );
              }else{
                  return(
                    <div>
                        <div className="info">No readings found.</div>
                        <NavLink to="/healthmetrics">&#171; Back to The Results List</NavLink>
                    </div>
                  );
              }
    }
}

export default Graph;