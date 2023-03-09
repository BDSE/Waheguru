import React from "react";
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Switch, Link, Route} from "react-router-dom";
import AboutPage from "./AboutPage";
import Home from "./Home";
import Projects from "./Projects";
import Project1 from "./Project1";
import Project2 from "./Project2";
import PageNotFound from "./PageNotFound";
import ScrollToTop from "./ScrollToTop";

import GetRouteFromRoutes from "./GetRouteFromRoutes";

function App() {
    const resourceHost = 'inpatient';
    const routes = [
        {
            path: "/about",
            component: AboutPage,
            security: []
        },
        {
            path: "/projects",
            component: Projects,
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
            path: "/:params",
            component: Home,
            security: []
        },
        {
            path: "/",
            component: Home,
            security: []
        }
    ];
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
                        <div className={'side-nav'}>Side nav</div>

                        <Switch>
                            {
                               routes.map((route, index) => <GetRouteFromRoutes key={index} route={route} />)
                            }
                        </Switch>
                    </div>
                </div>
            </Router>
        </div>
    );
}

function GetRoute(props) {
    const {route} = props;
    return (
        <Route
            path={route.path}
            render={routeProps => (
                // pass the sub-routes down to keep nesting
                <route.component {...routeProps} routes={route.routes} />
            )}
        />
    );
}

export default App;
