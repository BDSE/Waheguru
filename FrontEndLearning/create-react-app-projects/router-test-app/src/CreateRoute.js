import React from 'react';
import {Route, Redirect} from "react-router-dom";
import SecurityPoint from "./SecurityService";

function CreateRoute(appRoute) {
    const {security} = appRoute;
    let isRouteValid = true;
    if (security && security.length) {
        isRouteValid = SecurityPoint.checkSecurityPoints(security);
    }
    return (
        <Route
            path={appRoute.path}
            render={(routeProps) => {
                console.log("changing the route to - " + routeProps.match.path);
                if (isRouteValid) {
                    // pass the sub-routes down to keep nesting
                    return (<appRoute.component {...routeProps} routes={appRoute.routes}/>)
                } else {
                    return (<Redirect
                        to={{
                            pathname: appRoute.fallbackPath ? appRoute.fallbackPath : '/',
                            state: {from: routeProps.location}
                        }}
                    />)
                }
            }
            }
        />
    )
}

export default CreateRoute;
