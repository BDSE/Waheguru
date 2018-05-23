import React, { Component } from 'react';
import $ from 'jquery';
import { fetchDataIfNeeded } from '../../actions';
import Util from '../../services/Util';

class List extends Component{
        constructor(props){
            super(props);
            this.handleClickOnTable = this.handleClickOnTable.bind(this);
            this.generateTable = this.generateTable.bind(this);
        }
    
        generateTable(testResult){
            const dateMillSecs = testResult.timeRecorded,
                  result = testResult.readingValue ? testResult.readingValue : " ",
                  unit= (testResult.unit) ? testResult.unit : " ",
                  orderId = testResult.orderId,
                  { isAbnormal } = testResult,
                  { healthmetricsComments } = this.props,
                  { comment } = (healthmetricsComments && healthmetricsComments[orderId])? healthmetricsComments[orderId] :{
                    comment: {
                        impression: "",
                        mychartNote: "",
                        narrative: ""
                    }
                };
              let commentsArr = [];

              if(comment.narrative)
              commentsArr.push({Name:"Narrative", Text:comment.narrative});

              if(comment.impression)
              commentsArr.push({Name:"Impression", Text:comment.impression});

              if(comment.mychartNote)
              commentsArr.push({Name:"Additional Notes", Text:comment.mychartNote});

            return (
                <tr key={testResult.timeRecorded}>
                    <td>
                        <table>
                                <tbody>
                                    <tr >
                                        <td className="date">
                                            <span className="formattedDate">{Util.formatDate(dateMillSecs,'mm/dd/yy')}</span>
                                            <span className="time">{Util.getTimeFromDate(dateMillSecs)}</span>
                                        </td>
                                        <td className="result">
                                        <a className={"accordian " + (isAbnormal ? "abnormalReading" : "")} orderid={orderId}>
                                                <span className="num">{result}</span>
                                                <span className="units">{unit}</span>
                                                <span className="arrow">&#8249;</span>
                                            </a>
                                        </td>
                                    </tr>
                                    <tr className="comments-panel">
                                        <td>
                                           {this.createCommentsPannel(commentsArr)}
                                        </td>
                                    </tr>
                                </tbody>
                        </table>
                    </td>
               </tr>
            );
        }
        createCommentsPannel(arr){
            if(arr.length === 0){
                return (
                    <div className="noinfo">There isn't any additional information for this result.</div>
                );
            }else{
    
               return arr.map((element) => {
                    return (
                        <div className="comments">
                            <div>{element['Name']}</div>
                            <div>{element['Text']}</div>
                        </div>
                    );
                });
            }
        }
        accordian(ele, parent){
            if(parent.hasClass('accordian')){
                parent.toggleClass("active");
            }else
                 ele.toggleClass("active");
            var panel = ele.closest('tr').next();
            
            if (panel.css("display") === "table") {
                panel.css("display", "none");
            } else {
                panel.css("display", "table");
            }
        }
        handleClickOnTable(e){
            const { dispatch } = this.props,
                    ele = $(e.target),
                    parent = ele.parent(),
                    orderId = ele.attr('orderid') || ele.parent().attr('orderid') || '';

            if(parent.hasClass('accordian')|| ele.hasClass('accordian')){
                if(!(parent.hasClass('active') || ele.hasClass('active'))){
                    dispatch(fetchDataIfNeeded({dataAttribute: ['healthmetricsComments']}, [{key: 'orderId', orderId: orderId}], true));
                }
                this.accordian(ele, parent);
            }
        }
        render(){
            const { name, allReadings, isGraphable } = this.props.data;

            return(
                <div>
                    <div className="info-panel">
                        <div>
                            <span className="icons-sprite out-of-range-val"></span>
                            <span className="description">Out of Range Value</span>
                        </div>
                    </div>
                    <div className="list">
                        <div className="rigel-table shc-scrollbar">
                            <table className="healthmetrics-table list">
                                <thead>
                                    <tr>
                                        <th className="date">date</th>
                                        <th className="result">result</th>
                                    </tr>
                                </thead>
                                <tbody onClick={this.handleClickOnTable}>
                                    {allReadings.map(this.generateTable)}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            );

        }
}

export default List;