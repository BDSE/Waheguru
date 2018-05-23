import React, { Component } from 'react';
import { render } from 'react-dom';

class SlimHeader extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="slim-header">
                <div className="container">
                    <ul className="col-sm-12 nav-items">
                        <li className="logout">
                            <a onClick={ this.props.logout } title="Logout">
                                <span className="visible-xs"><img src={ SHC.config.resourceHost + "/resources/images/icons/MyHealth_Icons_Logout.svg" } width="24" height="24" alt="Logout"/></span>
                                <span className="visible-sm visible-md visible-lg">Logout</span>
                            </a>
                        </li>
                        <li className="profile-switcher">
                            <div className="profile-self">{ this.props.displayName }</div>
                        </li>
                        <li className="right">
                            <div className="healthwise-search">
                                <form autoComplete="off" method="post" action="https://www.healthwise.net/stanford/find/search.aspx" id="KeywordSearch" target="_blank">
                                    <div className="keywordsearch">
                                        <input className="hidden" type="hidden" name="f" value="stanford" autoComplete="off" />
                                        <input type="text" name="SEARCHTERM" id="SEARCHTERM" maxLength="100" autoComplete="off" placeholder="Search Health Topics" />
                                    </div>
                                    <div id="search-toggle" ng-click="mobileSearchOpen = ! mobileSearchOpen">
                                        <img src={ SHC.config.resourceHost + "/resources/images/icons/MyHealth_Icons_Search.svg" } width="36" height="36" alt="Search Health Topics"/>
                                    </div>
                                </form>
                            </div>
                        </li>
                    </ul>
                    <div className="logo-container">
                        <span className="off-screen">My Health</span>
                        <a className="logo" href="/Rigel"></a>
                    </div>
                </div>
                <div className="announcement">
                    <div className="container">
                        <button className="dismiss" onClick={ this.props.gotoOutPatient }>Change View</button>
                        <span className="message">Welcome to Stanford Hospital. Click &#8220;Change View&#8221; to switch between features for your hospital stay and for your general health.</span>
                    </div>
                </div>
            </div>
        );
    }
}

export default SlimHeader;
