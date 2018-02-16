import $ from 'jquery';

import {
    REQUEST_DATA,
    RECEIVE_DATA,
    INVALID_DATA,
    REQUEST_PROCESS_DATA,
    RECEIVE_PROCESS_DATA
    } from '../actions_old';

function fetchData(
    state = {
        isFetching: false
    }, action = {}
){
    switch (action.type) {
        case REQUEST_DATA:
            return $.extend({}, state, {
                isFetching: true,
                invalidData: false
            });
        case RECEIVE_DATA:
            return $.extend({}, state, {
                isFetching: false,
                invalidData: false,
                data: action.state.data,
                lastUpdated: action.state.receivedAt
            });
        case INVALID_DATA:
            return $.extend({}, state, {
                isFetching: false,
                invalidData: true
            });
        default:
            return state;
    }
}

function getData(state = {}, action = {}) {
    switch (action.type) {
        case REQUEST_DATA:
        case RECEIVE_DATA:
        case INVALID_DATA:
            return $.extend({}, state,fetchData(state, action)
        );
        case RECEIVE_PROCESS_DATA:
            return $.extend({}, state, {
                isFetching: false,
                invalidData: false,
                data: action.state.data,
                lastUpdated: action.state.receivedAt
            });
        case REQUEST_PROCESS_DATA:
            return $.extend({}, state, {
                isFetching: true,
                invalidData: false
            });
        default:
            return state;
    }
}

export default getData;
