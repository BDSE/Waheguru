export const SPINNER_SHOW = 'SPINNER_SHOW';
export const SPINNER_HIDE = 'SPINNER_HIDE';

function spinnerShow (state){
    return {
        type: SPINNER_SHOW,
        state
    };
}

function spinnerHide (state){
    return {
        type: SPINNER_HIDE,
        state
    };
}

export function showSpinner(state) {
    return (dispatch) => {
        return dispatch(spinnerShow(state));
    };
}

export function hideSpinner(state) {
    return (dispatch) => {
        return dispatch(spinnerHide(state));
    };
}

export function showSpinnerTimmer(state, millisec) {
    return (dispatch) => {
        if(isNaN(millisec)){
            millisec = 0;
        }

        dispatch(showSpinner(state));
        setTimeout(function(){
            dispatch(hideSpinner(state));
        }, millisec);
    };
}