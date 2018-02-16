import $ from 'jquery';
import ApiCalls from '../services/ApiCalls';

export const REQUEST_STATE = 'REQUEST_STATE';
export const COMPLETE_STATE = 'COMPLETE_STATE';
export const INVALID_STATE = 'INVALID_STATE';
export const INVALID_USER_SESSION = 'INVALID_USER_SESSION';

export const initialState = {
    mode: 'app',
    dataAttribute: ['getUserData']
};

export const ALL_STATES = {
    'home': {
        name: 'Home',
        tab: false,
        dataAttribute: ['dashboard', 'careteam', 'healthmetrics']
    },
    'schedule': {
        name: 'Schedule',
        tab: true,
        dataAttribute: false
    },
    'careteam': {
        name: 'Care Team',
        tab: true,
        dataAttribute: ['careteam']
    },
    'healthmetrics': {
        name: 'Test Results',
        tab: true,
        dataAttribute: ['healthmetrics']
    },
    'education': {
        name: 'Education',
        tab: true,
        dataAttribute: ['education']
    },
    'medications': {
        name: 'Medications',
        tab: true,
        dataAttribute: ['dashboard']
    //},
    //'more': {
    //    name: 'More',
    //    tab: true,
    //    dataAttribute: false
    }
};

function changeStateRequest (state){
    return {
        type: REQUEST_STATE,
        state
    };
}

function changeStateComplete (state){
    return {
        type: COMPLETE_STATE,
        state
    };
}

function invalidState (state){
    return {
        type: INVALID_STATE,
        state
    };
}

function sessionKeepAlive (state){
    return dispatch => {
        return ApiCalls.sessionKeepAlive().then(response => {
            if (!response || response && response.meta && response.meta.code === 401) {
                return dispatch(invalidUserSession(state));
            }else{
                return Promise.resolve(state);
            }
        });
    };
}

function invalidUserSession (state){
    return {
        type: INVALID_USER_SESSION,
        state
    };
}

export function getParams(state = {}) {
    if (state.mode && state.submode && ALL_STATES[state.mode + '.' + state.submode]) {
        return $.extend({}, state, ALL_STATES[state.mode + '.' + state.submode]);
    } else if (state.mode && ALL_STATES[state.mode]) {
        return $.extend({}, state, ALL_STATES[state.mode]);
    } else {
        return initialState;
    }
}

export function changeState(state) {
    return dispatch => {
        if(state.current && state.next){
            dispatch(changeStateRequest(state.current));
            dispatch(sessionKeepAlive(state)).then(state => {
                if (state.type === INVALID_USER_SESSION) {
                    return dispatch(invalidUserSession(state));
                } else {
                    if(state.next.mode === 'home' || ALL_STATES[state.next.mode]) {
                        return dispatch(changeStateComplete($.extend({}, state.next, {
                            next: getParams(state.next)
                        })));
                    }else{
                        dispatch(invalidState(initialState));
                        return dispatch(changeStateComplete($.extend({}, {
                            next: getParams(initialState)
                        })));
                    }
                }
            });
        }
    };
}