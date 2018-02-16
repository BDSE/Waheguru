import React, { Component } from 'react';
import $ from 'jquery';
import Util from '../../services/Util';

class List extends Component{
        constructor(props){
            super(props);
            this.backToMainPage = this.backToMainPage.bind(this);
            this.handleClickOnTable = this.handleClickOnTable.bind(this);
        }
    
        backToMainPage(){
            this.props.changeView('main');
        }
        generateTable(testResult){
            const dateMillSecs = testResult.timeRecorded,
                  result = testResult.readingValue ? testResult.readingValue : " ",
                  unit= (testResult.unit) ? testResult.unit : " ",
                  comment = testResult.comment ? testResult.comment : " ",
                  narative = testResult.narative ? testResult.narative : " ",
                  orderId = testResult.orderId;
            return (
                <tr key={testResult.timeRecorded}>
                    <td>
                        <table>
                                <tbody>
                                    <tr orderid={orderId}  >
                                        <td className="date">
                                            <span className="formattedDate">{Util.formatDate(dateMillSecs,'mm/dd/yy')}</span>
                                            <span className="time">{Util.getTimeFromDate(dateMillSecs)}</span>
                                        </td>
                                        <td className="result">
                                            <a className="accordian">
                                                <span className="num">{result}</span>
                                                <span className="units">{unit}</span>
                                                <span className="arrow">&#8249;</span>
                                            </a>
                                        </td>
                                    </tr>
                                    <tr className="pannel">
                                        <td>
                                            <div className={"comments"+ (comment === " " ? " hide" : "")}>
                                                <div>Comments</div>
                                                <div>{comment}</div>
                                            </div>
                                            <div className={"narative" + (narative === " " ? " hide" : "")}>
                                                <div>Narative</div>
                                                <div>{narative}</div>
                                            </div>
                                            <div className={(comment === " " && narative === " ") ? "" : 'hide'}>There isn't any additional information for this result.</div>
                                        </td>
                                    </tr>
                                </tbody>
                        </table>
                    </td>
               </tr>
            );
        }
        accordian(ele){
            if(ele.parent().hasClass('accordian')){
                ele.parent().toggleClass("active");
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
            const ele = $(e.target);
            if(ele.parent().hasClass('accordian')|| ele.hasClass('accordian')){
                this.accordian(ele);
            }
        }
        render(){
            const { name, allReadings } = this.props.data;
            return(
                <div className="list">
                    <div className="title">
                        <h1>{name}</h1>
                    </div>
                    <div className="info-text">Click on a result to view more information.</div>
                    <div className="rigel-table">
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
                    <a onClick={this.backToMainPage}>&#171; Back to The Results List</a>
                </div>
            );
        }
}

export default List;