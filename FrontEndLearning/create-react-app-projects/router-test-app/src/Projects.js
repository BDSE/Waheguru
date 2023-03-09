import React from 'react';
import {Switch, Link} from "react-router-dom";
import CreateRoute from "./CreateRoute";

function Projects(props) {
    const {routes, match} = props;
    return (
        <div className="content-component">
            <div>this is Projects main page</div>
            <Link to={`${match.path}/project1`}>Project1</Link>
            <Link to={`${match.path}/project2`}>Project2</Link>
            <Link to={`${match.path}/project1/test project1 params`}>Project1</Link>
            <Link to={`${match.path}/project2/testproject2params`}>Project2</Link>
            <Switch>
                {
                    routes.map(function (routes, index) {
                        return (
                            <CreateRoute  key={index} {...routes}/>
                        )
                    })
                }
            </Switch>

        </div>
    );
}

export default Projects;
