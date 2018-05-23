import ApiCalls from "../services/ApiCalls";
import Caching from "../services/Caching";
import Util from "../services/Util";
import { requestProcessData, recieveProcessedData} from './index';

export const REQUEST_DATA = 'REQUEST_DATA';
export const RECEIVE_DATA = 'RECEIVE_DATA';
export const RECEIVE_CACHED_DATA = 'RECEIVE_CACHED_DATA';
export const RECEIVE_PARTIAL_DATA = 'RECEIVE_PARTIAL_DATA';
export const FINISH_RECEIVE_DATA = 'FINISH_RECEIVE_DATA';
export const INVALID_DATA = 'INVALID_DATA';
export const RECEIVE_POSTED_DATA = 'RECEIVE_POSTED_DATA';

function requestData (state, isDataPartial=false){
    return {
        type: REQUEST_DATA,
        isDataPartial: isDataPartial,
        state
    };
}

// function receiveData (state, response){
//     state.data = response;
//     state.receivedAt = Date.now();

//     return {
//         type: RECEIVE_DATA,
//         state
//     };
// }

// function receivePartialData(state, response, key){
//     if(state.dataAttribute){
//         if(key){
//             state.data = {
//                 [state.dataAttribute]: {
//                     [key] : response
//                 }
//             };
//         }
//         else{
//             state.data = {
//                 [state.dataAttribute]: response
//             };
//         }
//     }else{
//         state.data = response;
//     }
//     state.receivedAt = Date.now();

//     return {
//         type: RECEIVE_PARTIAL_DATA,
//         state
//     };
// }

function receiveData(state, response){
    state.data = response;
    state.receivedAt = Date.now();

    return {
        type: RECEIVE_DATA,
        state
    };
}

export function recievePartialData(state){
    Promise.resolve({
        type: RECEIVE_PARTIAL_DATA
    });
}

function receiveCachedData (state, response){
    state.data = response;
    state.receivedAt = Date.now();

    return {
        type: RECEIVE_CACHED_DATA,
        state
    };
}

function receivePostedData (state, response){
    state.data = response;
    state.receivedAt = Date.now();

    return {
        type: RECEIVE_POSTED_DATA,
        state
    };
}

function finishReceiveData (state){
    return {
        type: FINISH_RECEIVE_DATA,
        state
    };
}

function invalidData (state){
    return {
        type: INVALID_DATA,
        state
    };
}

// function decideKey(params, key=""){
//     if(typeof params === 'string' && !key){
//         key = params;
//     }else if(typeof params === 'object' && !key){
//         for( let i in params){
//             key = params[i];
//             break;
//         }
//     }
//     return key;
// }

// function getpartialData(state, params){
//     let attr = altDataAttr ? altDataAttr : dataAttribute;
//     //key = decideKey(params, key);
//     return (dispatch) => {
//         dispatch(requestData({dataAttribute:attr}));
//         if(typeof ApiCalls[dataAttribute] === 'function'){
//             ApiCalls[dataAttribute](params).then( (response) => {
//                 if(response && response.meta && response.meta.code === 200){
//                     Caching.setData(attr, key, response);
//                     dispatch(receivePartialData({dataAttribute:attr}, response, key));
//                 }else {
//                     dispatch(invalidData({dataAttribute:attr}));
//                 }
//             });
//         }else {
//             return Promise.resolve({dataAttribute:attr});
//         }
// };

// }

export function postData(dataAttribute, params, key, altDataAttr){
    let attr = altDataAttr ? altDataAttr : dataAttribute;
    return (dispatch) => {
        dispatch(requestData({dataAttribute:attr}));
        if(typeof ApiCalls[dataAttribute] === 'function'){
            ApiCalls[dataAttribute](params).then( (response) => {
                if(response && response.meta && response.meta.code === 200){
                    Caching.modifyData(attr,response);
                    dispatch(receivePostedData({dataAttribute:attr},{[attr]:response}));
                }else {
                    dispatch(invalidData({dataAttribute:attr}));
                }
            });
        }else {
            return Promise.resolve({dataAttribute:attr});
        }
    };
}
function getData (state, params, isDataPartial){
    return dispatch => {
        if(state && state.dataAttribute && state.dataAttribute.length) {
            dispatch(requestData(state, isDataPartial));

            let promises = [],
                responses = {},
                hasError = false,
                key = "";

            state.dataAttribute.map((dataAttribute, index) => {
                if (typeof ApiCalls[dataAttribute] === 'function') {
                    let param = params && params.length > index ? params[index] : {};
                        key = param && param.key ? param[param.key] : false;
                    promises.push(ApiCalls[dataAttribute](param).then(response => {
                        if (response && !response.error) {
                            if(key){
                                responses[dataAttribute] = {
                                    [key]: response
                                };
                                responses.dataParams = param;
                            }else {
                                responses[dataAttribute] = response;
                            }

                            Caching.setData(dataAttribute, key, response);
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

// function shouldCallAPI(state, params){

//    // key = decideKey(params, key);

//     let cachedData = Caching.getData(dataAttribute, params);
//     if(cachedData === false){
//         return true;
//     }else{
//         return false;
//     }

// }

function shouldFetchData (state, params) {
    let dataAttributes = [];

    if(state.dataAttribute && state.dataAttribute.length){
        state.dataAttribute.map((dataAttribute, index) => {
            let param = params && params.length > index ? params[index] : false,
                key = param && param.key ? param[param.key] : false;

            let cachedData = Caching.getData(dataAttribute, key);

            if(cachedData === false){
                dataAttributes.push(dataAttribute);
            }else{
                receiveCachedData(state, cachedData);
            }
        });
    }

    if(dataAttributes.length){
        return dataAttributes;
    } else {
        return false;
    }
}

//altDataAttr can be used in case you want to use a different key in redux state rather than dataAttribute
// export function fetchPartialDataIfNeeded(state, params){
//     let attr = altDataAttr ? altDataAttr : dataAttribute;
//     return (dispatch) => {
//         let shouldFetchData = shouldFetchData(state, params);
//         //let shouldFetchData = bypassCache ? true :  shouldFetchPartialData(dataAttribute, params, key, altDataAttr);// temporary to bypass cache in case of watchlist in test results.

//         if(shouldFetchData){
//             return dispatch(getpartialData(dataAttribute, params, key, altDataAttr));
//         }
//         else{
//             dispatch(finishReceiveData(attr));
//         }
//     };
// }

export function fetchDataIfNeeded (state, params, isDataPartial= false){
    return (dispatch) => {
        let dataAttributes = shouldFetchData(state, params);
        if(dataAttributes && dataAttributes.length){
            return dispatch(getData({
                dataAttribute: dataAttributes
            }, params, isDataPartial));
        }else{
            dispatch(finishReceiveData(state));
        }
    };
}

export function forceFetchData (state, params){
    return (dispatch) => {
        return dispatch(getData(state, params));
    };
}

export function deleteCached (dataAttribute, partialKey){
    Caching.deleteData(dataAttribute, partialKey);
}

export function modifyCached (dataAttribute, data, partialKey){
    Caching.modifyData(dataAttribute, data, partialKey);
    receiveCachedData({
        dataAttribute: dataAttribute
    }, Caching.getData(dataAttribute));
}