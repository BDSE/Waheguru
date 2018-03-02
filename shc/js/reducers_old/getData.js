import $ from 'jquery';

import {
    REQUEST_DATA,
    RECEIVE_DATA,
    RECEIVE_PARTIAL_DATA,
    RECEIVE_CACHED_DATA,
    INVALID_DATA,
    REQUEST_PROCESS_DATA,
    RECEIVE_PROCESS_DATA,
    FINISH_RECEIVE_DATA
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
        case RECEIVE_CACHED_DATA:
            return $.extend({}, state, {
                invalidData: false,
                data: action.state.data,
                lastUpdated: action.state.receivedAt
            });
        case FINISH_RECEIVE_DATA:
            return $.extend({}, state, {
                isFetching: false,
                invalidData: false
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

function mergePartialData(state, action){
    let partialData = {};
    if(state.partialData){
        if(!state.partialData[action.state.dataAttribute]){
            partialData = $.extend({}, state.partialData, action.state.data);
        }else{
            partialData = {
                [action.state.dataAttribute]: $.extend({}, state.partialData[action.state.dataAttribute], action.state.data[action.state.dataAttribute])
            };
        }

    }else{
        partialData = action.state.data;
    }

    return partialData;
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
        case RECEIVE_PARTIAL_DATA:

            return $.extend({}, state, {
                isFetching: false,
                invalidData: false,
                partialData: mergePartialData(state, action),
                lastUpdated: action.state.receivedAt
            });

        default:
            return state;
    }
}

export default getData;