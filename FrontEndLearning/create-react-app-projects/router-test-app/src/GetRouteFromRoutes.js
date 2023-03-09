import React from 'react';
import {Route} from "react-router-dom";

function GetRouteFromRoutes(props) {
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

export default GetRouteFromRoutes;