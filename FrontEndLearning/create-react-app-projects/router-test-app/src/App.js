import React, {useState} from "react";
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Switch, Link} from "react-router-dom";
import AboutPage from "./AboutPage";
import Home from "./Home";
import Projects from "./Projects";
import Project1 from "./Project1";
import Project2 from "./Project2";
import PageNotFound from "./PageNotFound";
import ScrollToTop from "./ScrollToTop";

import CreateRoute from "./CreateRoute";

const appRoutes = [
    {
        path: "/about",
        component: AboutPage,
        security: []
    },
    {
        path: "/projects",
        component: Projects,
        security: [],
        routes: [
            {
                path: "/projects/project1/:params",
                component: Project1,
                security: ['security1', 'security2']
            },
            {
                path: "/projects/project1",
                component: Project1,
                security: ['security1'],
                fallbackPath: '/about'
            },
            {
                path: "/projects/project2/:params",
                component: Project2,
                security: ['security3']
            },
            {
                path: "/projects/project2",
                component: Project2,
                security: ['security2']
            }
        ]
    },
    {
        path: "/:id",
        component: Home,
        security: []
    },
    {
        path: "/",
        component: Home,
        security: []
    },
    {
        path: "*",
        component: PageNotFound,
        security: []
    }
];
const resourceHost = 'inpatient';
function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
            </header>
            <Router basename={resourceHost}>
                <ScrollToTop/>
                <div className={'body'}>
                    <div className={'main-nav'}>
                        <Link to="/">Home</Link>
                        <Link to="/about">About</Link>
                        <Link to="/projects">Projects</Link>
                    </div>
                    <div className={'tab-content'}>
                        <div className={'side-nav'}>Side navigation</div>
                        <Switch>
                            {
                                appRoutes.map(function (appRoute, index) {
                                    return (
                                        <CreateRoute  key={index} {...appRoute}/>
                                    )
                                })
                            }
                        </Switch>
                    </div>
                </div>
            </Router>
        </div>
    );
}

export default App;
