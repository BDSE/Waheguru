import Util from '../services/Util';

export const REQUEST_PROCESS_DATA = 'REQUEST_PROCESS_DATA';
export const RECEIVE_PROCESS_DATA = 'RECEIVE_PROCESS_DATA';

export function requestProcessData(state={}){
    return {
        type: REQUEST_PROCESS_DATA,
        state
    };
}

export function recieveProcessedData(state={}){
    return {
        type: RECEIVE_PROCESS_DATA,
        state
    };
}

export function healthMetricsSortResults(obj, flag){
    let data = Object.assign({}, obj);
    let sortby = 'lastRecorded';

    return (dispatch) => {
        dispatch(requestProcessData());
        setTimeout(function(){
            Util.sortArrayOfObjects(data.healthmetrics, sortby, flag);
            dispatch(recieveProcessedData(data));
        },0);
       
    };
}
export function healthmetricsReverseData(obj, flag){
    let data = Object.assign({}, obj);

    return (dispatch) => {
        dispatch(requestProcessData());
 
        setTimeout(function(){
            data.healthmetrics.reverse();
            dispatch(recieveProcessedData(data));
        },0);      
    };
}
 export function healthmetricsSearch(obj, text, param){
    let data = Object.assign({}, obj);
    console.log("data..", data);
    
    return (dispatch) => {
        dispatch(requestProcessData());
 
        setTimeout(function(){
            data.healthmetrics = Util.truncateDataArray(data.healthmetrics, text, param);
            console.log("......",data);
            dispatch(recieveProcessedData(data));
        },0);      
    };
 }
