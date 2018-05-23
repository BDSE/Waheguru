import React, { Component } from 'react';
import Util from '../../services/Util';
import { postData, modifyCached, showSpinnerTimmer } from '../../actions';
import Caching from "../../services/Caching";
import ApiCalls from "../../services/ApiCalls";

class Watchlist extends Component{

    constructor(props){
        super(props);

        this.hideWatchlist = this.hideWatchlist.bind(this);
        this.handleCheckBox = this.handleCheckBox.bind(this);
        this.GetResultsList = this.GetResultsList.bind(this);
        this.updateWatchList = this.updateWatchList.bind(this);
        this.handleCancel = this.handleCancel.bind(this);
        this.syncWatchlistWithSelectedTests = this.syncWatchlistWithSelectedTests.bind(this);

        this.numberOfSelectionsAllowed = 3;

        this.watchlist = {};
        this.state = {
            watchlist : {}
        };

    }

    componentDidMount(){

        this.syncWatchlistWithSelectedTests();

    }

    syncWatchlistWithSelectedTests(){
        const { watchlist } = this.props;
        let watchlistObj = {};

        watchlist.map((item) => {
            watchlistObj[item] = item;
        });

        this.watchlist = watchlistObj;
        this.setState({
            watchlist: watchlistObj
        });
    }

    hideWatchlist(){
        let dropdown = document.getElementById('watchlist-dropdown');
        dropdown.classList.toggle('show');
    }

    handleCancel(){
        this.hideWatchlist();
        this.syncWatchlistWithSelectedTests();
    }

    handleCheckBox(e){

       const target = e.target;

       const value = target.value;
       const isChecked = target.checked;
       let updateStateFlag = true;

        if(isChecked){
            //insert value
            this.watchlist[value] = value;

            //only change the state when maximum desired number of checkboxes have been checked
            //if(Object.keys(this.watchlist).length === this.numberOfSelectionsAllowed) updateStateFlag = true;
        }else{
            //change state if deselecting on of the three already checked checkboxes.
            //if(Object.keys(this.watchlist).length === this.numberOfSelectionsAllowed) updateStateFlag = true;

            //remove value
            delete this.watchlist[value];
        }
        
        //change state of the component if flag is set.
        if(updateStateFlag){
            this.setState({
                watchlist: this.watchlist
            });
        }
    }

   updateWatchList(){
        const { setDataForWatchlistResults } = this.props;
        const { watchlist } = this.state;
        const watchListArr = Object.keys(watchlist).sort();

        //hide the menu
        this.hideWatchlist();

        this.postWatchlistData(watchListArr, false );
        
    }

    postWatchlistData(params, key){
        const { dispatch, updateWatchlist } = this.props;
        let cachedData = Caching.getData("healthmetricsWatchList", key).watchlist;
    
        if(cachedData > 0){
            cachedData.sort();
        }
    
        if(JSON.stringify(cachedData) !== JSON.stringify(params)){
            dispatch(showSpinnerTimmer({}));

            ApiCalls.healthmetricsSetWatchList(params).then(response => {
                if(response && response.meta && response.meta.code === 200 && response.watchlist && JSON.stringify(response.watchlist) === JSON.stringify(params)){
                    modifyCached('healthmetricsWatchList', params, 'watchlist');
                    updateWatchlist(params);
                }
            });
        }else{
            return false;
        }
    }

    GetResultsList(props){
        const { data, watchlistlen } = props;
        let shouldDisable =false;
        let checked = false;
        return (
            data.map((result) => {
                const { name, lastRecorded } = result;
                        shouldDisable =false;
                        checked = false;

                if(!this.state.watchlist[name] && watchlistlen ===this.numberOfSelectionsAllowed) shouldDisable = true;

                else if(this.state.watchlist[name]) checked = true;

                return(
                    <label key={`${name}:${lastRecorded}`} className={"test-result custom-checkbox" + (shouldDisable ? " disabled-list" : "")} >{name}
                        <input type="checkbox" value={name} checked={checked} onChange={this.handleCheckBox} disabled={shouldDisable ? "disabled" : ""} />
                        <span></span>
                    </label>
                );
            })
        );

    }

    render(){
        const { data } = this.props;
        const len = data.length;
        const watchlistlen = Object.keys(this.state.watchlist).length;

        //let hdrTxt = (len >= 4) ? 'Select up to test 3 results to watch:' : 'Select test results to watch:';

        return(
            <div id="watchlist-dropdown" className="dropdown-content">
                <div className="watch-list">
                    <div className="hdr">
                         {`Select up to ${this.numberOfSelectionsAllowed} test results to watch:`}
                    </div>
                    <div className="content">
                    <this.GetResultsList data={data} watchlistlen={watchlistlen} />
                    </div>
                    <div className="ftr">
                        <div className="update-btn" onClick={this.updateWatchList}>UPDATE</div>
                        <div className="cancel" onClick={this.handleCancel}>Cancel</div>
                    </div>
                </div>
            </div>
        );
    }

}

export default Watchlist;