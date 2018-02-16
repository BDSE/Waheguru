import React, { Component } from 'react';
import $ from 'jquery';
import Util from '../../services/Util';
import GenerateTable from '../../components/healthmetrics/GenerateTable';

class Main extends Component{
    constructor(props){
        super(props);
        this.changeOrder = this.changeOrder.bind(this);
        this.searchTestResults = this.searchTestResults.bind(this);
        this.handleClickOnTable = this.handleClickOnTable.bind(this);
    }

    changeView(ele){
        let eleValue = ele.html();
        let view = ele.attr('view');
        this.props.changeView(view, eleValue);
    }
    handleClickOnTable(e){
        const ele = $(e.target);
        if(ele.hasClass('result-name')){
            this.changeView(ele);
        }
    }
    changeOrder(e){
        let value = e.target.getAttribute("value");
        let dropDownText = document.getElementById("changeOrder").innerHTML;

        if(!(value === dropDownText)){
            document.getElementById("changeOrder").innerHTML = value;
            this.props.changeOrder();
        }
        this.toggleDropDown();
    }
    toggleDropDown(){
        document.getElementById("dropdown").classList.toggle("show");
    }
    searchTestResults(e){ 
        if (e.which == 13 || e.keyCode == 13) {
            let value = e.target.value;
            this.props.searchTestResults(value);
        }
    }
    render(){
        console.log("main...", this.props);
        const { healthmetrics } = this.props.data;
        return(
           <div>
               <div className="title">
                    <h1>Test Results</h1>
                </div>
                <div className="info">Results in <strong>bold</strong> indicate new or updated content, or a comment has been added from your doctor</div>
                <div className="listcontrol">
                    <div className="listsearch noprint">
                        <input type="text" onKeyUp={this.searchTestResults} className="searchTestResults" name="searchTestResult" placeholder="Search Test Results" autoComplete="off" />
                        <img  className="search-icon" title="Search Test Results" alt="Search Test Results" src={ SHC.config.resourceHost+"/resources/images/icons/search.png"}/>
                    </div>
                    <div className="listsort">
                        <span>Sort by: </span>
                        <span className="dropdown">
                            <a id="changeOrder" onClick={this.toggleDropDown} >
                            Newest to oldest
                            </a>
                            <span className="sort-arrow down"></span>
                            <div id="dropdown" className="dropdown-content">
                                <div onClick={this.changeOrder}>
                                    <a value="Newest to oldest">Newest to oldest</a>
                                    <a value="Oldest to newest">Oldest to newest</a>
                                </div>
                            </div>
                        </span>
                    </div>
                    <div className="clear"></div>
                    <div className="rigel-table">
                        <table className="healthmetrics-table main">
                                <thead>
                                    <tr>
                                        <th className="date">Date</th>
                                        <th className="name">Name</th>
                                        <th className="graph">Graph</th>
                                        <th className="result">Result</th>
                                    </tr>
                                </thead>
                                <tbody onClick={this.handleClickOnTable}>
                                        {healthmetrics.map(testData => (
                                            <GenerateTable testData={ testData } key={`${testData.name}:${testData.lastRecorded}`} />
                                        ))}
                                </tbody>
                        </table>
                    </div>
                </div>
           </div>
        );
    }
}

export default Main;