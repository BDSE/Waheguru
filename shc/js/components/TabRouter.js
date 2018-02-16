import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

//import content components
import Home from '../containers/home/home';
import CareTeam from '../containers/careteam';
import Schedule from '../containers/schedule/schedule';
import Education from '../containers/education/education';
import GoingHome from '../containers/goinghome/goinghome';
import VitalsAndResults from '../containers/healthmetrics/healthmetrics';
import More from '../containers/more/more';

class TabRouter extends Component{
    render(){
        return (
            <Switch>
                <Route path="/schedule" component={Schedule} />
                <Route path="/careteam" component={CareTeam} />
                <Route path="/gohome" component={GoingHome} />
                <Route path="/education" component={Education} />
                <Route path="/healthmetrics" component={VitalsAndResults} />
                <Route path="/more" component={More} />
                <Route path="/" component={Home} />
            </Switch>
        );
    }
}

export default TabRouter;