import $ from 'jquery';

import {
    SPINNER_SHOW,
    SPINNER_HIDE
    } from '../actions';

function spinner(
    state = {}, action = {}
) {
    switch (action.type) {
        case SPINNER_SHOW:
            return $.extend({}, state, action.state, {
                showSpinner: true
            });
        case SPINNER_HIDE:
            return $.extend({}, state, action.state, {
                showSpinner: false
            });
        default:
            return state;
    }
}

export default spinner;
