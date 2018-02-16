import React, { Component } from 'react';
import { render } from 'react-dom';
import { NavLink } from 'react-router-dom';
import GenerateTable from '../../components/healthmetrics/GenerateTable';

class TestResults extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { healthmetrics } = this.props,
            numberOfResults = 4;

        let results = healthmetrics.healthmetrics.slice(healthmetrics.healthmetrics.length - numberOfResults - 1, healthmetrics.healthmetrics.length - 1);
        return (
            <div className="home-healthmetrics section col-lg-6 col-md-6 col-sm-6 col-xs-12">
                <div className="title">
                    <h1>Test Results</h1>
                </div>
                <div className="content fix-height">
                    <table className="healthmetrics-table">
                        <tbody>
                            {results.map(testData => (
                                <GenerateTable testData={ testData } key={`${testData.name}:${testData.lastRecorded}`} showColumns={ ['name', 'graph'] } />
                            ))}
                        </tbody>
                    </table>
                </div>
                <NavLink className="nav-link bottom" to="healthmetrics">View All Test Results &raquo;</NavLink>
            </div>
        );
    }
}

export default TestResults;
