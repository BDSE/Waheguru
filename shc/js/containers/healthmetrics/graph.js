import React, { Component } from 'react';
import Charts from '../../components/healthmetrics/Charts';
import Util from '../../services/Util';
import { fetchDataIfNeeded } from '../../actions';
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
                toolTip: false,
                isAbnormal: false
            }
        };

        this.orderId = "";
        this.handleClick = this.handleClick.bind(this);
        this.showReadingToolTIp = this.showReadingToolTIp.bind(this);
        this.clear = this.clear.bind(this);

    }

    componentDidUpdate(){
        const { orderId } = this.state.selectedReading;
        const { dispatch } = this.props;
        if( orderId !== this.orderId ){
            dispatch(fetchDataIfNeeded({dataAttribute: ['healthmetricsComments']}, [{key: 'orderId', orderId: orderId}]));
            this.orderId = orderId;
        }
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

    showReadingToolTIp(numericValue="", unit="", dateAndTime= "", cx=0, cy=0, isAbnormal=false){

        if(dateAndTime)
            dateAndTime = `${Util.formatDate(dateAndTime, 'mmmm dd')} at ${Util.getTimeFromDate(dateAndTime)}`;
        this.setState({
            hoveredReading: {
                value: numericValue,
                dateAndTime: dateAndTime,
                unit: unit,
                cx: cx-83,
                cy: cy+60,
                toolTip:true,
                isAbnormal: isAbnormal
            }
        });
    }

    handleClickOnReading(target){
        const orderId = target.attr('orderid') || '';
        if(orderId !== this.state.selectedReading.orderId){
            this.setState({
                selectedReading:{
                    orderId:orderId
                }
            });
        }
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

    createCommentsPannel(arr){
        const {orderId} = this.state.selectedReading;
        if(arr.length === 0 && orderId){
            return (
                <div className="noinfo">There isn't any additional information for this result.</div>
            );
        }else{

           return arr.map((element) => {
                return (
                    <div key={element['Name']} className="comments">
                        <div>{element['Name']}</div>
                        <div>{element['Text']}</div>
                    </div>
                );
            });
        }
    }

    render(){
        //console.log("graph: render: props: ", this.props);
        const axisColor = "#979797",
            { data, healthmetricsComments } = this.props,
            { allReadings, rangeHigh, rangeLow } = data,
            dataForGraph = this.prepareDataForGraph(allReadings,"numericValue"),
            dateRangeArr = this.getHighestLowestDate(allReadings, "timeRecorded"),
            { orderId } = this.state.selectedReading,
            { comment } = (healthmetricsComments && healthmetricsComments[orderId])? healthmetricsComments[orderId] :{
                comment: {
                    impression: "",
                    mychartNote: "",
                    narrative: ""
                }
            },
            { value, dateAndTime, unit, cx, cy, toolTip, isAbnormal } = this.state.hoveredReading; 
            let commentsArr = [];
            console.log(comment);
            if(comment.narrative)
            commentsArr.push({Name:"Narrative", Text:comment.narrative});

            if(comment.impression)
            commentsArr.push({Name:"Impression", Text:comment.impression});

            if(comment.mychartNote)
            commentsArr.push({Name:"Additional Notes", Text:comment.mychartNote});      

            return(
                <div>
                    <div className="info-panel">
                        <div>
                            <span className="icons-sprite out-of-range"></span>
                            <span className="description">Out of Range</span>
                        </div>
                        <div>
                            <span className="icons-sprite out-of-range-val"></span>
                            <span className="description">Out of Range Value</span>
                        </div>
                    </div>
                    <div className="graph-content" onClick={this.handleClick}>
                        <Charts
                                axisColor={axisColor}
                                referenceAreaMin={rangeLow}
                                referenceAreaMax={rangeHigh}
                                data={allReadings}
                                yAxisDataKey="numericValue"
                                xAxisDataKey="timeRecorded"
                                normalStrokeCol ="#4D4F53"
                                abnormalStrokeCol = "#E57374"
                                xAxisLabelArr={dateRangeArr}
                                isDot={true}
                                isRectangleArea={true}
                                showReadingToolTIp= {this.showReadingToolTIp}
                                clearToolTip={this.clear}
                                selectedData = {orderId}
                        />
                        <div className={"graph-tooltip " + (isAbnormal ? "abnormal-graph-tooptip" : "")} style={{transform: `translate(${cx}px, ${cy}px)`, visibility: toolTip ? 'visible' : 'hidden'}}>
                            <div className="value">{value}</div>
                            <div className="date">{dateAndTime}</div>
                            <div className="units">{unit}</div>
                        </div>
                    </div>
                    <div className="comments-panel">
                        {this.createCommentsPannel(commentsArr)}
                    </div>
                </div>
            );
    }
}

export default Graph;