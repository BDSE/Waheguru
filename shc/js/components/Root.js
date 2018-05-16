import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { HashRouter, Route, Switch } from 'react-router-dom';
import App from '../containers/App_old';
import SiteDown from './common/SiteDown';

const Root = ({ store }) => (
    <Provider store={ store }>
        <HashRouter>
            <Switch>
                <Route path="/sitedown" component={SiteDown} />
                <Route path="/:mode?/:submode?" component={App} />
            </Switch>
        </HashRouter>
    </Provider>
);

Root.propTypes = {
    store: PropTypes.object.isRequired
};

export default Root;
