import React,{ Component } from 'react';
import { openModal } from '../../actions_old';
import { healthmetricsReverseData, healthmetricsSearch } from '../../actions_old/processData';
import Main from './main';
import Graph from './graph';
import List from './list';

class VitalsAndResults extends Component{
    constructor(props) {
        super(props);
        this.infoDot = this.infoDot.bind(this);
        this.changeOrder = this.changeOrder.bind(this);
        this.searchTestResults = this.searchTestResults.bind(this);
        this.changeView = this.changeView.bind(this);
        this.state = {
            ready: false,
            view: 'main',
            selectedTest: {
                name: "",
                data: {}
            }
        };
    }
    infoDot() {
        const { dispatch } = this.props;
        const modalContent = {
            defaultCloseButton: true,
            shouldCloseOnOverlayClick: true,
            content: (
            <div className="modal-healthmetrics padding-content">
                    <h2>Test Results</h2>
                <ul className="resources">
                    <li>
                        <span><p>If you have questions about your test results, please contact the physician who ordered the test by sending a <a className="close-modal" href="/Private#/messages/create">MyHealth message</a> or calling your clinic.</p></span>
                    </li>
                    <li>
                        <span><div className="certain-tests-modal"><p><strong>Most test results are shared with you on MyHealth.</strong></p><ul><li>Simple lab results are usually shared within a few days.</li></ul><p></p></div></span>
                    </li>
                    <li>
                        <span><div className="certain-tests-modal"><p><strong>Some results may require additional review or counseling.</strong></p><ul><li>Radiology tests, genetic tests, pathology</li><li>These results are usually shared within two weeks.</li></ul><p></p></div></span>
                    </li>
                    <li>
                        <span><div className="certain-tests-modal"><p><strong>Some results may not be shared for technical reasons.</strong></p><ul><li>Endoscopic tests</li><li>Cardiac tests</li><li>Imaging tests</li></ul><p></p></div></span>
                    </li>
                    <li>
                        <span><p>Your care team will share other results with you through an alternate means.</p></span>
                    </li>
                </ul>
            </div>
            )
        };
        dispatch(openModal({}, modalContent));
    }
    searchTestResults(text){
        const { dispatch } = this.props;
        dispatch(healthmetricsSearch(this.props.healthmetrics, text, 'name'));
    }
    changeOrder(){
        const { dispatch } = this.props;
        dispatch(healthmetricsReverseData(this.props.healthmetrics));
    }
    getSelectedTestData(testName){
        const { healthmetrics } = this.props.healthmetrics;
        for(let id in healthmetrics){
            if(healthmetrics[id].name === testName){
                return healthmetrics[id];
            }
        }
    }
    changeView(view, testName=""){
        let data = {};
        if(testName){
             data = this.getSelectedTestData(testName);
        }
        this.setState(
            {
                view: view,
                selectedTest: {
                    name: testName,
                    data: data
                }
            }
        );
        window.scrollTo(0,0);
    }
    renderView(view){
        switch(view) {
            case 'graph':
            return (<Graph data={this.state.selectedTest.data} changeView={this.changeView} />);
            case 'list':
            return (<List data={this.state.selectedTest.data} changeView={this.changeView} />);
            default:
            return (<Main data= {this.props.healthmetrics} changeOrder={this.changeOrder} searchTestResults={this.searchTestResults} changeView={this.changeView} />);
        }
    }
    render(){
        //deep link implement from here.
        console.log("indexjs....", this.props);
        const paramsObj = (this.props.match.params) ? this.props.match.params : {
            mode: "healthmetrics",
            submode: "main",
            params: ""
        };
        const { mode, submode, params } = paramsObj;
        ////
        return(
            <div className="healthmetrics test-results">
                <div className="info-icon" onClick={ this.infoDot }>
                    <img src={ SHC.config.resourceHost + "/resources/images/MyHealth_Icons_Information.svg" } width="25" height="24" alt="" />
                </div>
                {this.renderView(this.state.view)}
            </div>
        );
    }
}

export default VitalsAndResults;