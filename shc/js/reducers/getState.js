import $ from 'jquery';

import {
    REQUEST_STATE,
    COMPLETE_STATE,
    INVALID_STATE,
    INVALID_USER_SESSION,
    initialState
    } from '../actions';

function forceSubmode (state, submode, params){
    state.submode = submode;
    state.params = params;
    return state;
}

function getState(
    state = $.extend({}, initialState, {
        isChanging: false
    }), action = {}
) {
    switch (action.type) {
        case REQUEST_STATE:
            return $.extend({}, state, {
                invalidState: false,
                isChanging: true
            });
        case COMPLETE_STATE:
            return forceSubmode($.extend({}, state, action.state.next, {
                invalidState: false,
                isChanging: false
            }), action.state.next.submode, action.state.next.params);
        case INVALID_STATE:
            return $.extend({}, state, action.state, {
                invalidState: true,
                isChanging: false
            });
        case INVALID_USER_SESSION:
            return $.extend({}, state, action.state, {
                invalidUserSession: true,
                isChanging: false
            });
        default:
            return state;
    }
}

export default getState;
