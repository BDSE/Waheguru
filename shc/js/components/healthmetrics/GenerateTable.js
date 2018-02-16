import React, { Component } from 'react';
import $ from 'jquery';
import Util from '../../services/Util';
import SmallGraph from './smallGraph';

class GenerateTable extends Component {
    constructor(props) {
        super(props);
        this.renderDate = this.renderDate.bind(this);
        this.renderName = this.renderName.bind(this);
        this.renderGraph = this.renderGraph.bind(this);
        this.renderResult = this.renderResult.bind(this);
        this.showColumns  = props.showColumns || ['date', 'name', 'graph', 'result'];
    }

    renderDate(){
        const { testData } = this.props,
            dateMillSecs = testData.lastRecorded;

        if(this.showColumns.indexOf('date') !== -1){
            return (
                <td className="date">
                    <div className="formattedDate">{Util.formatDate(dateMillSecs, 'mm/dd/yy')}</div>
                    <div className="time">{Util.getTimeFromDate(dateMillSecs)}</div>
                </td>
            );
        }else{
            return false;
        }
    }

    renderName(){
        const { testData } = this.props,
            view = testData.isGraphable ? 'graph': 'list';

        if(this.showColumns.indexOf('name') !== -1){
            return (
                <td className="name">
                    <a className="result-name" view={view}>{testData.name}</a>
                </td>
            );
        }else{
            return false;
        }
    }

    renderGraph(){
        const { testData } = this.props,
            allReadings = testData.allReadings,
            isGraphable = testData.isGraphable && allReadings.length > 1,
            highest= (isGraphable && testData.highest )? testData.highest : "",
            lowest= (isGraphable && testData.lowest )? testData.lowest : "",
            hideHighLow = (highest === lowest) ? 'hide' : '';

        let arr = [];

        if(isGraphable){
            arr = allReadings.map((x) => {
                return x.numericValue;
            });
        }

        if(this.showColumns.indexOf('graph') !== -1){
            return (
                <td className="graph">
                    <div className={"range "+hideHighLow}>
                        <div className="upper">{highest}</div>
                        <div className="lower">{lowest}</div>
                    </div>
                    <div className="graph-block">
                        <SmallGraph data={arr} color="#007C92" />
                    </div>
                </td>
            );
        }else{
            return false;
        }
    }

    renderResult(){
        const { testData } = this.props,
            allReadings = testData.allReadings,
            len = allReadings.length,
            numericResult = (testData.isGraphable && allReadings) ? allReadings[len-1].numericValue : "See Comments",
            units= (testData.units && numericResult !== "See Comments") ? testData.units : "";

        if(this.showColumns.indexOf('result') !== -1){
            return (
                <td className="result">
                    <div className="num">{numericResult}</div>
                    <div className="units">{units}</div>
                </td>
            );
        }else{
            return false;
        }
    }

    render() {
        return (
            <tr>
                <this.renderDate />
                <this.renderName />
                <this.renderGraph />
                <this.renderResult />
            </tr>
        );
    }
}

export default GenerateTable;