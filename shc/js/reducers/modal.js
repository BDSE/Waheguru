import $ from 'jquery';

import {
    MODAL_OPENED,
    MODAL_CONTENT,
    MODAL_CLOSED
    } from '../actions';

function modal(
    state = {}, action = {}
) {
    switch (action.type) {
        case MODAL_OPENED:
            return $.extend({}, state, action.state, {
                modalIsOpen: true
            });
        case MODAL_CONTENT:
            return $.extend({}, state, {
                modalParams: action.state.params,
                modalIsOpen: false
            });
        case MODAL_CLOSED:
            return $.extend({}, state, action.state, {
                modalIsOpen: false
            });
        default:
            return state;
    }
}

export default modal;
