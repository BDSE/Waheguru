export const MODAL_OPENED = 'MODAL_OPENED';
export const MODAL_CONTENT = 'MODAL_CONTENT';
export const MODAL_CLOSED = 'MODAL_CLOSED';

function modalOpened (state){
    return {
        type: MODAL_OPENED,
        state
    };
}

function setModalContent (state, params){
    state.params = params;

    return {
        type: MODAL_CONTENT,
        state
    };
}

function modalClosed (state){
    return {
        type: MODAL_CLOSED,
        state
    };
}

export function openModal(state, params) {
    return (dispatch) => {
        if (!state.modalIsOpen) {
            dispatch(setModalContent(state, params));
            return dispatch(modalOpened(state));
        }
    };
}

export function closeModal(state) {
    return (dispatch) => {
        return dispatch(modalClosed(state));
    };
}