import React, { Component } from 'react';
import $ from 'jquery';
import Util from '../../services/Util';
import GenerateTable from '../../components/healthmetrics/GenerateTable';
import WatchList from '../../components/healthmetrics/watchlist';

class Main extends Component{
    constructor(props){
        super(props);
        this.handleFilter = this.handleFilter.bind(this);
        this.searchTestResults = this.searchTestResults.bind(this);
        this.updateWatchlist = this.updateWatchlist.bind(this);
        this.renderTable = this.renderTable.bind(this);
        this.getNormalAndWatclistTable = this.getNormalAndWatclistTable.bind(this);

        this.state = {
            watchlistData: [],
            watchlist: props.watchlist && props.watchlist.watchlist ? props.watchlist.watchlist : []
        };
    }

    getNormalAndWatclistTable(jsx, className){
        if(jsx){
            let divClassName = "rigel-table" + (className ? " " + className : " shc-scrollbar");

            return (
                <div className={divClassName}>
                    <table className="healthmetrics-table main">
                            <thead>
                                <tr>
                                    <th className="date">Date</th>
                                    <th className="name">Name</th>
                                    <th className="graph">Graph</th>
                                    <th className="result">Result</th>
                                </tr>
                            </thead>
                            <tbody>
                                {jsx}
                            </tbody>
                    </table>
                </div>
            );
        }else{
            return false;
        }

    }

    renderTable(healthmetrics, list=[], className){
        let watchlistObj = {};
        let watchlistData = [];
        let normalTableJsx;
        let watchlistTableJsx;

        if(list && list.length > 0){
            list.map((item) => {
                watchlistObj[item] = item;
            });
        }
        if(healthmetrics.length > 0){
            normalTableJsx =  healthmetrics.map((testData) => {
                            if(watchlistObj[testData.name] ){
                                watchlistData.push(testData);
                            }
                            return(
                                <GenerateTable testData={ testData } key={`${testData.name}:${testData.lastRecorded}`} />
                            );
                        }
                        );
            if(watchlistData.length > 0){
            watchlistTableJsx =  watchlistData.map((testData) => {
                                return(
                                    <GenerateTable testData={ testData } key={`${testData.name}:${testData.lastRecorded}`} watchlist={true}/>
                                );
                            }
                            );
            }
            return(
                <div>
                    {this.getNormalAndWatclistTable(watchlistTableJsx, "watchlist")}
                    {this.getNormalAndWatclistTable(normalTableJsx)}
                </div>
            );
        }else{
            return false;
        }

    }

    handleFilter(e){
        let target = $(e.target);
        let value = target.attr("value");
        let filterText = $("#filterText").html();

        if(!(value === filterText)){
            $("#filterText").html(value);
            let filterType = target.attr('type');
            switch(filterType){
                case 'change-order' : 
                    this.props.changeOrder();
                break;
                case 'alphabetical-order' :
                   //call method here
                break;
            }
        }
        //hide the drop down menu
        this.toggleDropDown(e, target.parent());
    }

    toggleDropDown(e, target){
        if(target){
            target.toggleClass("show");
        }
        else{
            let target = $(e.target);
            let attr = target.attr('data-attr') || target.parent().attr('data-attr');
            $(`#${attr}-dropdown`).toggleClass("show");
        }
    }

    searchTestResults(e){ 
        if (e.which == 13 || e.keyCode == 13) {
            let value = e.target.value;
            this.props.searchTestResults(value);
        }
    }

    updateWatchlist(params){
        this.setState({
            watchlist: params
        });
    }

    render(){
        const { dispatch } = this.props;
        const { healthmetrics } = this.props.data;
        const { watchlist } = this.state;

        return(
           <div>
               <div className="title">
                    <h1>Test Results</h1>
                </div>
                <div className="info">Results in <strong>bold</strong> indicate new or updated content, or a comment has been added from your doctor</div>
                <div className="listcontrol">
                    <div className="listsearch noprint flt-left">
                        <input type="text" onKeyUp={this.searchTestResults} className="searchTestResults" name="searchTestResult" placeholder="Search Test Results" autoComplete="off" />
                        <img  className="search-icon" title="Search Test Results" alt="Search Test Results" src={ SHC.config.resourceHost+"/resources/images/icons/search.png"}/>
                    </div>
                    <div className="flt-right process-list">
                        <div>
                            <span>Sort by: </span>
                            <span className="filter" data-attr="filter" onClick={this.toggleDropDown}>
                                <span id="filterText" className="filter-text" >
                                    Newest to oldest
                                </span>
                                <span className="down-arrow"></span>
                            </span>
                            <div id="filter-dropdown" className="dropdown-content" onClick={this.handleFilter}>
                                <a type="change-order" value="Newest to oldest">Newest to oldest</a>
                                <a type="change-order" value="Oldest to newest">Oldest to newest</a>
                                {/* <a type="alphabetical-order" value="A-Z">A-Z</a> */}
                            </div>
                        </div>
                        <div>
                            <span className="watchlist-text" data-attr="watchlist" onClick={this.toggleDropDown}>
                                <span className="icons-sprite watchlist-icon"></span>
                                <span className="watchlist-text">
                                    Watch List
                                </span>
                                <span className="down-arrow"></span>
                            </span>
                            <WatchList data={ healthmetrics } dispatch={dispatch} updateWatchlist={ this.updateWatchlist } watchlist={watchlist}/>
                        </div>
                    </div>
                    <div className="clear"></div>
                      {this.renderTable(healthmetrics, watchlist)}
                </div>
           </div>
        );
    }
}

export default Main;