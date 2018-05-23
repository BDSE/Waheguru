import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import Graph from './graph';
import List from './list';

import $ from 'jquery';

class Readings extends Component{

    constructor(props){

        super(props);

        this.toggleListGraph = this.toggleListGraph.bind(this);
    }

    toggleListGraph(e){
        const { history } = this.props;
        const target = $(e.target),
              targetVal = target.html().toLowerCase(),
              hash = history.location.pathname;

        if(hash.indexOf(targetVal) === -1){
            this.props.history.push(hash.replace(/graph|table/, targetVal));
        }

    }

    renderContent(data, healthmetricsComments, submode, dispatch, allReadings){
        if( data && allReadings ){
            switch(submode){
                case 'graph':
                    return (<Graph data={data} dispatch={dispatch} healthmetricsComments={healthmetricsComments}/>);
                case 'table':
                    return (<List data={data} dispatch={dispatch} healthmetricsComments={healthmetricsComments}/>);
            }
        }
        else
        return (
            <div className="noResultsFound">No readings found.</div>
        );

    }

    render(){
        const { data, healthmetricsComments, dispatch, paramsObj } = this.props,
              { allReadings, name, isGraphable } = data,
              { mode, submode, params } = paramsObj;

        return(
            <div>
                <div className="title">
                    <h1>{name}</h1>
                </div>
                <div className={"toggleListGraph pointer " + (isGraphable ? '' : 'hide')} onClick={this.toggleListGraph}>
                        <span className={(submode === 'graph') ? 'active' : ''}>Graph</span>
                        <span className={(submode === 'table') ? 'active' : ''}>Table</span>
                </div>
                <div className="info-text">Click on a result to view more information.</div>
                {this.renderContent(data, healthmetricsComments, submode, dispatch, allReadings)}
                <div className="to-mainpage">
                    <NavLink to="/healthmetrics">&#171; Back to The Results List</NavLink>
                </div>
            </div>
        );
    }
}

export default Readings;