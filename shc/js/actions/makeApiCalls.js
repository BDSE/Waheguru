import ApiCalls from '../services/ApiCalls';

export const INITIAL_DATA = 'INITIAL_DATA';
export const CARETEAM_DATA = 'CARETEAM_DATA';

export function getInitialData(paramsObj, successCallback, errorCallback){
    const initialRequestsPromise = ApiCalls.getUserDataPromise();

    return (dispatch) => {
        initialRequestsPromise.then((responseData, connectData) => {
            if(responseData && connectData){
                let profile = responseData.response;
                 profile.connectData = connectData;
                 successCallback();
                dispatch({
                    type: INITIAL_DATA,
                    payload: profile
                });
            }else{
                errorCallback();
                return false;
            }
        }, (error) => {
            errorCallback(error);
        });
    };

}

export function getCareteamData(paramsObj, successCallback, errorCallback){
    const careTeamRequestPromise = ApiCalls.careteam();

    return (dispatch) => {
        careTeamRequestPromise.then(responseData => {
            if(responseData){
                successCallback(responseData);
                dispatch({
                    type: CARETEAM_DATA,
                    payload: responseData
                });
            }
            else{
                errorCallback();
                throw false;
            }
        }, error => {
            errorCallback(error);
        });
    };

}