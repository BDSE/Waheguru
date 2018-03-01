import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { HashRouter, Route } from 'react-router-dom';
import App from '../containers/App_old';

const Root = ({ store }) => (
    <Provider store={ store }>
        <HashRouter>
            <Route path="/:mode?/:submode?/:params*" component={ App } />
        </HashRouter>
    </Provider>
);

Root.propTypes = {
    store: PropTypes.object.isRequired
};

export default Root;