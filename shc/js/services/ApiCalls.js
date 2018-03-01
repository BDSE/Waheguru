import $ from 'jquery';
import Util from './Util';

export const OrionURL = SHC.config.orionBaseUrl + "/orion/public/ajax/v1";
export const OrionBedsideURL = OrionURL + "/bedside";
export const OrionwebURL = SHC.config.orionBaseUrl + "/Private/Ajax/V1";

const ApiCalls = {
    makeCall: function (API_URL, method, data) {
        let params = {
            url: API_URL,
            type: method || "GET",
            crossDomain: true,
            cache: false,
            credentials: true
        };

        if (method === 'POST' && data) {
            $.extend(params, {
                data: JSON.stringify(data),
                contentType: "application/json",
                dataType: "json"
            });
        }

        return $.ajax(params).then(response => {
            if (response && response.meta && response.meta.code === 200) {
                return response;
            } else {
                return false;
            }
        });
    },

    getProfile: function () {
        let url = OrionwebURL + "/Profile";

        return this.makeCall(url, 'GET');
    },

    initConnect: function () {
        let url = OrionBedsideURL + "/connect",
            data = {
                "deviceInfo": {
                    "id": "A53DEE6F-EDB8-4CD2-8A79-C5DA6D6107AC",
                    "manufacturer": "Apple",
                    "model": "iPhone 8 Plus",
                    "os": "iOS",
                    "osversion": "11.2",
                    "alias": "Shared Family Phone"
                }
            };

        return this.makeCall(url, 'POST', data);
    },

    sessionKeepAlive: function () {
        var url = OrionwebURL + '/Session/KeepAlive';

        $.ajax({
            url: SHC.config.frameBaseUrl.replace("inside.asp", "keepalive.asp"),
            type: "GET",
            crossDomain: true,
            cache: false
        });

        return this.makeCall(url, 'POST');
    },

    getUserData: function () {
        return $.when(
            this.getProfile(),
            this.initConnect()
        ).then(function (responseData, connectData) {
            if (responseData && connectData) {
                let profile = responseData.response;

                profile.connectData = connectData;
                return profile;
            } else {
                return false;
            }
        });
    },

    getUserDataPromise: function () {
        const promise = $.when(this.getProfile(), this.initConnect());
        return promise;
    },

    schedule: function(params){
        let url = OrionBedsideURL + "/schedule",
            dateObj = new Date(params.date + ' 00:00:00'),
            today = dateObj.toString() !== 'Invalid Date' ? dateObj : new Date(),
            year = today.getFullYear(),
            month = parseInt(today.getMonth() + 1, 10),
            day = today.getDate(),
            data = {
                payload: year + '-' + (month > 9 ? month : '0' + month) + '-' + (day > 9 ? day : '0' + day)
            };

        return this.makeCall(url, 'POST', data);
    },

    careteam: function () {
        let url = OrionBedsideURL + "/careteam";

        return this.makeCall(url);
    },

    dashboard: function () {
        let url = OrionBedsideURL + "/dashboard";

        return this.makeCall(url);
    },

    education: function () {
        let url = OrionURL + "/patienteducation/encounterlist";

        return this.makeCall(url);
    },


    educationSetAnswer: function (userAnswer) {
        let url = OrionURL + '/patienteducation/saveanswer',
            data = {
                encounterNumber: userAnswer.encounterNumber,
                key: userAnswer.key,
                responseCode: userAnswer.responseCode,
                comment: userAnswer.comment,
                sendDataToEpic: userAnswer.sendDataToEpic,
                providerId: userAnswer.providerId
            };

        return this.makeCall(url, 'POST', data).then(response => {
            if (response && response.meta && response.meta.code === 200) {
                return true;
            } else {
                return false;
            }
        });
    },


    educationSendDataToEpic: function (encounterNumber) {
        let url = OrionURL + '/patienteducation/sendanswer',
            data = {
                encounterNumber: encounterNumber
            };

        return this.makeCall(url, 'POST', data).then(response => {
            if (response && response.meta && response.meta.code === 200) {
                return true;
            } else {
                return false;
            }
        });
    },

    healthmetrics: function (params) {
        let url = OrionBedsideURL + "/healthmetrics";
        return this.makeCall(url).then(response => {
            if (response && response.healthmetrics) {
                Util.sortArrayOfObjects(response.healthmetrics, 'lastRecorded');
            }
            return response;
        });
    }
};

export default ApiCalls;
