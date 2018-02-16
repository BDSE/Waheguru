import React,{ Component } from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import { connect } from 'react-redux';

import Header from '../components/common/Header';
import MainNav from '../components/common/MainNav';
import NavTabs from '../actions/navigationBar';
import TabRouter from '../components/TabRouter';
import { getInitialData } from '../actions/makeApiCalls';

class App extends Component{
    componentDidMount(){
        this.props.getInitialData(null, () => {
            console.log("initialdata");
        }, (error="") => {
            console.log('error......',error);
            this.props.history.push("/sitedown");
        });
    }
    logout (){
        window.location = SHC.config.orionBaseUrl + '/RigelLogout';
    }
    render(){
        const { params } = this.props.match;
        const { mode , submode } = params;
        console.log(mode);
        if(!this.props.profile || !this.props.profile.userProfile){
           return (
               <div>
                    <div className="overlay loader col-mod-12  showing"></div>
                    <div className="spinner-wrap">
                        <i className="icon icon-normal icon-spinner"></i>
                    </div>
             </div>
           );
           
        }
        return(
            <div className="main dashboard">
                    <Header userProfile={ this.props.profile.userProfile } logout={ this.logout }/>
                    <div className="body container">
                        <div>
                            <MainNav navTabs= {NavTabs} mode={mode} submode= {submode}/>
                            <TabRouter />
                        </div>
                    </div>
                </div>
        );
    }
}

function mapStateToProps(state, ownProps){
    return {
        profile: state.profile
    };
}

export default connect(mapStateToProps, { getInitialData })(App);