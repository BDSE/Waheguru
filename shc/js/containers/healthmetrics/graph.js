import React, { Component } from 'react';
import Charts from './Charts';
import Util from '../../services/Util';

class Graph extends Component{

    constructor(props){
        super(props);
        this.state = {
            selectedTest: {
                name: " ",
                comment: " ",
                narative: " ",
                testSelected: false
            }
        };
        this.backToMainPage = this.backToMainPage.bind(this);
        this.selectReading = this.selectReading.bind(this);
    }

    backToMainPage(){
        this.props.changeView('main');
    }

    getHighestLowestDate(data=[], key){
        const len = data.length;

        if(len === 0){
            return [];
        }
        let firstDate = data[0][key];
            firstDate = `${Util.formatDate(firstDate)}, ${Util.getTimeFromDate(firstDate)}`;
        let lastDate = data[len-1][key];
            lastDate = `${Util.formatDate(lastDate)}, ${Util.getTimeFromDate(lastDate)}`;
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

    selectReading(comment=" ", narative=" "){
        this.setState({
            selectedTest: {
                name: " ",
                comment: comment,
                narative: narative,
                testSelected:true
            }
        });
    }

    render(){
        const axisColor = "#B9B8BD",
              { data } = this.props,
              { allReadings, rangeHigh, rangeLow, name } = data,
              dataForGraph = this.prepareDataForGraph(allReadings,"numericValue"),
              dateRangeArr = this.getHighestLowestDate(allReadings, "timeRecorded"),
              comment = this.state.selectedTest.comment,
              narative = this.state.selectedTest.narative,
              testSelected = this.state.selectedTest.testSelected;

        return(
            <div>
                <div className="title">
                    <h1>{name}</h1>
                </div>
                <div className="info-text">Click on a result to view more information.</div>
                <div className="content">
                    <Charts
                         axisColor={axisColor}
                         referenceAreaMin={rangeLow}
                         referenceAreaMax={rangeHigh}
                         data={allReadings}
                         yAxisDataKey="numericValue"
                         xAxisDataKey="timeRecorded"
                         normalStrokeCol ="#2296F3"
                         abnormalStrokeCol = "#E57373"
                         selectReading= {this.selectReading}
                         xAxisLabelArr={dateRangeArr}
                    />
                </div>
                <div className="pannel">
                    <div className={"comments"+ (comment === " " ? " hide" : "")}>
                        <div>Comments</div>
                        <div>{comment}</div>
                    </div>
                    <div className={"narative" + (narative === " " ? " hide" : "")}>
                        <div>Narative</div>
                        <div>{narative}</div>
                    </div>
                    <div className={"noinfo "+ ((comment === " " && narative === " " && testSelected) ? "" : 'hide')}>There isn't any additional information for this result.</div>
                </div>
                <div className="to-mainpage">
                    <a onClick={this.backToMainPage}>&#171; Back to The Results List</a>
                </div>
            </div>
        );
    }
}

export default Graph;