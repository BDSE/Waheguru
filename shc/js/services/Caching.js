const dataStore = {};

function validKey(dataAttribute, partialKey){
    let valid = false;

    if(dataAttribute && dataStore[dataAttribute]){
        if(partialKey && partialKey.length){
            let keyArray = partialKey.split('.'),
                isValid = (parent, index) => {
                    if(parent[keyArray[index]]){
                        if(index >= keyArray.length - 1){
                            return true;
                        }else{
                            return isValid(parent[keyArray[index]], index + 1);
                        }
                    }else{
                        return false;
                    }
                };

            valid = isValid(dataStore[dataAttribute], 0);
        }else{
            valid = true;
        }
    }

    return valid;
}

const Caching = {
    getData: (dataAttribute, key) => {
        if(dataAttribute && dataStore[dataAttribute]){
            if(!key) {
                return dataStore[dataAttribute];
            }else if(dataStore[dataAttribute][key]) {
                return dataStore[dataAttribute][key];
            }else{
                return false;
            }
        }else{
            return false;
        }
    },
    setData: (dataAttribute, key, data) => {
        if(dataAttribute && data){
            if(key){
                if(dataStore[dataAttribute]){
                    dataStore[dataAttribute][key] = data;
                }else{
                    dataStore[dataAttribute] = {
                        [key]: data
                    };
                }
            }else {
                dataStore[dataAttribute] = data;
            }
        }
    },
    deleteData: (dataAttribute, partialKey) => {
        if(dataAttribute && dataStore[dataAttribute]){
            if(partialKey){
                if(validKey(dataAttribute, partialKey)) {
                    let partialKeyString = partialKey.split('.').join('"]["'),
                        data = eval('dataStore[dataAttribute]["' + partialKeyString + '"]');

                    if (data) {
                        eval('delete dataStore[dataAttribute]["' + partialKeyString + '"]');
                    }
                }
            }else{
                delete dataStore[dataAttribute];
            }
        }
    },
    modifyData: (dataAttribute, data, partialKey, appendArray) => {
        if(dataAttribute && dataStore[dataAttribute]){
            if(partialKey){
                if(validKey(dataAttribute, partialKey)) {
                    let partialKeyString = partialKey.split('.').join('"]["'),
                        thisObject = {};

                    if(appendArray){
                        eval('thisObject = dataStore[dataAttribute]["' + partialKeyString + '"].push');

                        if(typeof thisObject.push === 'function') {
                            eval('dataStore[dataAttribute]["' + partialKeyString + '"].push(data)');
                        }
                    }else {
                        eval('dataStore[dataAttribute]["' + partialKeyString + '"] = data');
                    }
                }
            }else{
                if(appendArray){
                    if(typeof dataStore[dataAttribute].push ==='function') {
                        dataStore[dataAttribute].push(data);
                    }
                }else {
                    dataStore[dataAttribute] = data;
                }
            }
        }
    }
};

export default Caching;