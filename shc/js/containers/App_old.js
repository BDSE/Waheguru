import React, { Component } from 'react';
import { render } from 'react-dom';
import $ from 'jquery';
import { connect } from 'react-redux';
import {
    fetchDataIfNeeded,
    getStateParams,
    ALL_STATES,
    changeState,
    closeModal
    } from '../actions_old';
import { compose } from 'recompose';
import { sendAnalytics } from 'react-redux-analytics';
import Modal from '../components/common/Modal';
import SiteDown from '../components/common/SiteDown';
import Header from '../components/common/Header_old';
import MainNav from '../components/common/MainNav_old';
import Footer from '../components/common/Footer';
import Home from './home';
import Schedule from './schedule';
import CareTeam from './careteam_old';
import HealthMetrics from './healthmetrics';
import Medications from './medications';
import Education from './education';

class App extends Component {
    constructor(props) {
        super(props);
        this.updateState = this.updateState.bind(this);
        this.gotoState = this.gotoState.bind(this);
        this.content = this.content.bind(this);
        this.showModal = this.showModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
        this.state = {
            mode: undefined,
            submode: undefined,
            params: undefined,
            logout: this.logout,
            updateState: this.updateState,
            gotoState: this.gotoState,
            gotoOutPatient: this.gotoOutPatient,
            closeModal: this.closeModal,
            dispatch: this.props.dispatch,
            ready: false
        };
    }

    componentWillMount (){
        const { dispatch } = this.props;
        dispatch(fetchDataIfNeeded(getStateParams({ mode: 'app' })));
    }

    componentDidUpdate (){
        const { isChanging, isFetching, invalidState, invalidUserSession, mode, submode, params, invalidData, dataAttribute, data, modalIsOpen, match, dispatch } = this.props;
        if(!isChanging && !isFetching) {
            if(invalidUserSession) {
                this.invalidSession();
            } else if(this.state.mode !== mode || this.state.submode !== submode || this.state.params !== params || modalIsOpen !== this.state.modalIsOpen) {
                let thisData = this.state[dataAttribute] ? {
                    [dataAttribute]: this.state[dataAttribute]
                } : {};

                if(!invalidData && dataAttribute && dataAttribute.length) {
                    dataAttribute.map(attr => {
                        if(thisData[attr] && data.dataParams && data.dataParams.key && data.dataParams[data.dataParams.key]){
                            $.extend(thisData[attr], data[attr]);
                        }else {
                            thisData[attr] = data[attr];
                        }
                    });
                }

                let state = $.extend({}, this.props, thisData);

                state.submode = submode;
                state.params = params;

                this.setState(state);
            } else if (!invalidData && !invalidState && match.params.mode && mode !== match.params.mode || !match.params.mode && mode !== 'home' || match.params.submode !== submode || match.params.params !== params) {
                this.gotoState({
                    mode: match.params.mode,
                    submode: match.params.submode,
                    params: match.params.params
                });

                let stateParams = getStateParams({
                        mode: match.params.mode || 'home',
                        submode: match.params.submode,
                        params: match.params.params
                    }),
                    dataParams = [],
                    dataAttributes = stateParams.dataAttribute;

                if(dataAttributes && dataAttributes.length){
                    dataAttributes.map(dataAttribute => {
                        if (this.state[dataAttribute]) {
                            stateParams[dataAttribute] = this.state[dataAttribute];
                        }
                    }, this);
                }
                if(stateParams.dataParams && stateParams.dataParams.length){
                    stateParams.dataParams.map((dataParam) => {
                        let newParam = {};
                        Object.keys(dataParam).map((key) => {
                            if(key !== 'key' && dataParam[key].indexOf('.') !== -1){
                                newParam[key] = eval(dataParam[key]);
                            }else{
                                newParam[key] = dataParam[key];
                            }
                        }, this);
                        dataParams.push(newParam);
                    }, this);
                }
                dispatch(fetchDataIfNeeded(stateParams, dataParams));
            } else if (invalidState) {
                window.location.hash = this.state.mode === 'home' ? '' : this.state.mode;
            } else if (!this.state.ready) {
                this.setState({
                    ready: true
                });
            }
        }
        var s_doPlugins = function(s){
            s.abort = true;
            s.pageName = 'MyHealth:Rigel:Unknown';
        };
        if(window.s){
            window.s.abort = true;
            window.s.usePlugins = true;
            window.s.doPlugins = s_doPlugins;
        }
    }

    updateState (params){
        this.setState(params);
    }

    gotoState (state){
        const { dispatch } = this.props;

        if(!state.mode){
            state.mode = 'home';
        }

        let nextState = dispatch(changeState({
            current: this.state,
            next: state
        }));

        if(nextState && nextState.state && nextState.state.next) {
            this.setState(nextState.state.next);
        }
    }

    invalidSession (){
        window.location.href = SHC.config.orionBaseUrl + '/RigelLogout?timeout=1';
    }

    logout (){
        window.location.href = SHC.config.orionBaseUrl + '/RigelLogout';
    }

    gotoOutPatient (){
        window.location.href = SHC.config.orionBaseUrl + '/Private#/';
    }

    content() {
        switch (this.state.mode) {
            case 'home':
                return <Home { ...this.state } />;
            case 'schedule':
                return <Schedule { ...this.state } />;
            case 'careteam':
                return <CareTeam { ...this.state } />;
            case 'healthmetrics':
                return <HealthMetrics { ...this.state } />;
            case 'medications':
                return <Medications { ...this.state } />;
            case 'education':
                return <Education { ...this.state } />;
            default:
                return false;
        }
    }

    showModal() {
        return this.state.modalIsOpen ? (
            <Modal { ...this.state } />
        ) : false;
    }

    closeModal() {
        const { dispatch } = this.props;

        dispatch(closeModal(this.state));
    }

    render() {
        const { isChanging, isFetching } = this.props;
        if(this.state.invalidData){
            return (
                <SiteDown { ...this.state } />
            );
        } else if (this.state.ready) {
            return (
                <div className="main dashboard">
                    <div className={ "overlay loader col-mod-12" + (isChanging || isFetching ? " showing" : "") }></div>
                    <div className={ "spinner-wrap" + (!isChanging && !isFetching ? " display-none" : "") }>
                        <i className="icon icon-normal icon-spinner"></i>
                    </div>
                    <Header userProfile={ this.state.getUserData.userProfile } logout={ this.logout } gotoOutPatient={ this.gotoOutPatient } />
                    <div className="body container">
                        <MainNav states={ ALL_STATES } selected={ this.state.mode } />
                        <div className="tab-content">
                            <this.content />
                        </div>
                    </div>
                    <div className="footer container">
                        <Footer />
                    </div>
                    <this.showModal />
                </div>
            );
        } else {
            return (
                <div className="main dashboard">
                    <div className="overlay loader col-mod-12 showing"></div>
                    <div className="spinner-wrap">
                        <i className="icon icon-normal icon-spinner"></i>
                    </div>
                </div>
            );
        }
    }
}

const mapStateToProps = (state) => {
    const { getData, getState, modal } = state;
    const {
        mode,
        submode,
        params,
        name,
        dataAttribute,
        isChanging,
        invalidState,
        invalidUserSession
    } = getState || {
        isChanging: true
    };
    const {
        isFetching,
        invalidData,
        data
    } = getData || {
        isFetching: true
    };
    const {
        modalParams,
        modalIsOpen
    } = modal || {
        modalIsOpen: false
    };

    return {
        isFetching,
        invalidData,
        data,
        mode,
        submode,
        params,
        name,
        dataAttribute,
        isChanging,
        invalidState,
        invalidUserSession,
        modalParams,
        modalIsOpen
    };
};

export default compose(
    connect(mapStateToProps),
    sendAnalytics({
        sendPageViewOnDidMount: (props, state) => {
            let shouldTrack = (!props.isChanging && (props.location.pathname === '/' || props.location.pathname === '/home')),
                s_doPlugins = function(s){
                    s.abort = !shouldTrack;
                    s.pageName = 'MyHealth:Rigel:' + props.name || 'Home';
                };
                if(window.s) {
                    window.s.doPlugins = s_doPlugins;
                }
            return shouldTrack;
        },
        sendPageViewOnDidUpdate: (prevProps, props) => {
            let shouldTrack = (!props.isChanging && prevProps.mode !== props.mode),
                s_doPlugins = function(s){
                    s.abort = !shouldTrack;
                    s.pageName = 'MyHealth:Rigel:' + props.name || 'Home';
                };
                if(window.s) {
                     window.s.doPlugins = s_doPlugins;
                }
            return shouldTrack;
        }
    })
)(App);
