import ApiCalls from "../services/ApiCalls";
import Util from "../services/Util";
import { requestProcessData, recieveProcessedData} from './index';

export const REQUEST_DATA = 'REQUEST_DATA';
export const RECEIVE_DATA = 'RECEIVE_DATA';
export const INVALID_DATA = 'INVALID_DATA';

function requestData (state){
    return {
        type: REQUEST_DATA,
        state
    };
}

function receiveData (state, response){
    state.data = response;
    state.receivedAt = Date.now();

    return {
        type: RECEIVE_DATA,
        state
    };
}

function invalidData (state){
    return {
        type: INVALID_DATA,
        state
    };
}

function getData (state, params){
    return dispatch => {
        if(state && state.dataAttribute && state.dataAttribute.length) {
            dispatch(requestData(state));

            let promises = [],
                responses = {},
                hasError = false;

            state.dataAttribute.map(dataAttribute => {
                if (typeof ApiCalls[dataAttribute] === 'function') {
                    promises.push(ApiCalls[dataAttribute](params).then(response => {
                        if (response && !response.error) {
                            responses[dataAttribute] = response;
                        } else {
                            hasError = true;
                            dispatch(invalidData(state));
                        }
                    }));
                } else {
                    return Promise.resolve(state);
                }
            });

            Promise.all(promises).then(function(){
                if(!hasError && Object.keys(responses).length){
                    dispatch(receiveData(state, responses));
                }
            });
        }else{
            return Promise.resolve(state);
        }
    };
}

function shouldFetchData (state) {
    let dataAttributes = [];

    if(state.dataAttribute && state.dataAttribute.length){
        state.dataAttribute.map(dataAttribute => {
            if(!state[dataAttribute]){
                dataAttributes.push(dataAttribute);
            }
        });
    }

    if(dataAttributes.length){
        return dataAttributes;
    } else {
        return false;
    }
}

export function fetchDataIfNeeded (state, params){
    return (dispatch) => {
        let dataAttributes = shouldFetchData(state);
        if(dataAttributes && dataAttributes.length){
            return dispatch(getData({
                dataAttribute: dataAttributes
            }, params));
        }
    };
}

export function forceFetchData (state, params){
    return (dispatch) => {
        return dispatch(getData(state, params));
    };
}