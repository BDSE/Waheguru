import { combineReducers } from 'redux';
import analytics from './analytics';
import getData from './getData';
import getState from './getState';
import modal from './modal';
import spinner from './spinner';

const rootReducer = combineReducers({
    analytics,
    getData,
    getState,
    modal,
    spinner
});

export default rootReducer;