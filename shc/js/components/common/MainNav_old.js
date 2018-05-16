import React, { Component } from 'react';
import { render } from 'react-dom';
import { NavLink } from 'react-router-dom';

const Nav = ({ states, selected }) => (
    <ul className="nav">
        <li position="top" className={( !selected || selected === "home" ? "active" : "" )}>
            <NavLink className="home-link" to=""><div className="icons-sprite size-38x38 home-icon"></div></NavLink>
        </li>
        { Object.keys(states).map(key => {
            if(states[key] && states[key].tab) {
                return (
                    <li key={ key } position="top" className={( selected === key ? "active" : "" )}>
                        <NavLink to={ '/' + key }>
                            <span>{ states[key].name }</span>
                        </NavLink>
                    </li>
                );
            }
        })}
        <li position="top" className="nav-icon">
            <div className="icons-sprite size-38x38 alert-icon"></div>
        </li>
        <li position="top" className="nav-icon">
            <div className="icons-sprite size-38x38 setting-icon"></div>
        </li>
    </ul>
);

class MainNav extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="main-nav">
                <Nav states={ this.props.states } selected={ this.props.selected } />
            </div>
        );
    }
}

export default MainNav;