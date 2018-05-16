import React,{ Component } from 'react';
import { openModal } from '../../actions_old';
import { healthmetricsReverseData, healthmetricsSearch } from '../../actions_old/processData';
import Main from './main';
import Graph from './graph';
import List from './list';
import Util from '../../services/Util';

class VitalsAndResults extends Component{
    constructor(props) {
        super(props);
        this.HEALTHMETRICS_COMMENTS_ATTR = 'healthmetricsComments';
        this.infoDot = this.infoDot.bind(this);
        this.changeOrder = this.changeOrder.bind(this);
        this.searchTestResults = this.searchTestResults.bind(this);
        this.state = {
            ready: false,
            view: '',
            selectedTest: {
                name: "",
                data: {}
            }
        };
    }

    componentDidMount(){
        
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

    renderView(){
        const { healthmetrics, dispatch, partialData } = this.props;
        const paramsObj = (this.props.match.params) ? this.props.match.params : {
            mode: "healthmetrics",
            submode: undefined,
            params: undefined
        };
        let { mode, submode, params } = paramsObj;
        let data = {};
        if(params && healthmetrics){
            params = Util.hexDecode(params);
            data = Util.selectObjectFromArray('name', params, healthmetrics.healthmetrics);
        }
        switch(submode) {
            case 'graph':
            return (<Graph data={data} dispatch={dispatch} partialData={partialData}/>);
            case 'list':
            return (<List data={data} dispatch={dispatch} partialData={partialData}/>);
            default:
            return (<Main data= {healthmetrics} changeOrder={this.changeOrder} searchTestResults={this.searchTestResults} />);
        }
    }

    render(){
        console.log("index: healthmetrics: props", this.props);
        return(
            <div className="healthmetrics test-results">
                <div className="info-icon" onClick={ this.infoDot }>
                    <img src={ SHC.config.resourceHost + "/resources/images/MyHealth_Icons_Information.svg" } width="25" height="24" alt="" />
                </div>
                {this.renderView()}
            </div>
        );
    }
}

export default VitalsAndResults;