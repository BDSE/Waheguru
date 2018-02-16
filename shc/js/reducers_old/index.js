import { combineReducers } from 'redux';
import analytics from './analytics';
import getData from './getData';
import getState from './getState';
import modal from './modal';

const rootReducer = combineReducers({
    analytics,
    getData,
    getState,
    modal
});

export default rootReducer;