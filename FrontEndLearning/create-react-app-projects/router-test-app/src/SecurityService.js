// import ROOTSCOPE from ''
// import User from '';

let User = {},
    ROOTSCOPE = {};

const SecurityPoint = (function () {
    let enabledUserFeaturesMap = {
            security1: true,
            security2: true,
            security3: false,
        },
        
        getUserFeatures = function () {
            return User.getProfile().then(function(userData){
                if(userData && userData.response && userData.response.enabledUserFeatures && userData.response.enabledUserFeatures.allEnabledFeatures !== undefined){
                    ROOTSCOPE.userFeatures = userData.response.enabledUserFeatures.allEnabledFeatures;
                    //create a map of all enabled user features
                    return userData.response.enabledUserFeatures.allEnabledFeatures;
                }else{
                    return false;
                }
            });
        },

        //TODO: convert this into a promise
        //Call get userFeatures to grab the list of enabledUserFeature and create enabledUserFeatures map
        //Right now this function assumes that when its called the enabledUserFeatures map is already there
        checkSecurityPoints = function (securitiesArray) {
            let valid = true;
            if (Array.isArray(securitiesArray)){
                for (let index in securitiesArray){
                    if (!enabledUserFeaturesMap[securitiesArray[index]]){
                        valid = false;
                    }
                }
            }
            return valid;
        };

    return {
        checkSecurityPoints: checkSecurityPoints
    }
    

})();

export default SecurityPoint;