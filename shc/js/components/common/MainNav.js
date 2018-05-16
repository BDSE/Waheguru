import React, { Component } from 'react';
import { render } from 'react-dom';
import { Link } from 'react-router-dom';
import  jquery from 'jquery';

class MainNav extends Component {
    constructor(props) {
        super(props);
    }

    renderNavBar(navTabs){
        let tabsJSX = navTabs.map(tab => {
            if(tab.name === 'Home' ){
                return(
                    <li position="top" className={this.props.mode === undefined ? 'active home': 'home'} key={tab.path}>
                        <Link to={tab.path}><img src={ SHC.config.resourceHost + "/resources/images/icons/MyHealth_Icons_HomeGrey.svg" } /></Link>
                    </li>  
                );  
            }else{
                return(
                    <li position="top" className={`/${this.props.mode}` === tab.path ? 'active': ''} key={tab.path}>
                        <Link to={tab.path} key={tab.path}>{tab.name}</Link>
                    </li> 
                );
            }
        });
        return tabsJSX;
    }

    render() {
        return (
            <div className="main-nav">
            <ul className="nav">
                {this.renderNavBar(this.props.navTabs)}
            </ul>
            </div>
        );
    }
}

export default MainNav;
