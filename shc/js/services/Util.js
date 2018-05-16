const Util = {

    sortArrayOfObjects: function(dataArray, sortby, flag=1){

        dataArray.sort(function(a,b){
          return flag * (parseInt(a[sortby])-parseInt(b[sortby]));
        });

      },

    selectObjectFromArray: function(key="", keyValue="", data={}){

        let result = {};

        for(let id in data){
            if(data[id][key] === keyValue){
                result = data[id];
                break;
            }
        }
        return result;  
    },
    
    truncateDataArray: function(data, pattern, param){

        let result = [];

        for( let x in data){
            if(data[x][param].toLowerCase().indexOf(pattern.toLowerCase()) > -1){
                result.push(data[x]);
            }
        }

        return result;
     },

    getTimeFromDate: function(millsecs, format){

        let date = new Date(parseInt(millsecs)),
            hours = date.getHours(),
            hr = (hours > 12)? hours-12: hours,
            min = date.getMinutes(),
            ampm = (hours >= 12 && hours !=24)? "PM":"AM";

       return `${hr}:${min} ${ampm}`;
    },

     //millsecs - date in milliseconds
     //format - eg. mm/dd/yy, mm - for numeric month, mmmm - for abbreviated month, month - for full month
    formatDate: function(millsecs, format="mm/dd/yy"){

         const YEAR_ARR = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

         let processMonth = function(month){
             let fullMonth = format.indexOf('month') > -1;
             let abbrMonth =  format.indexOf('mmmm') > -1;
            let monthStr = YEAR_ARR[month];
            if(fullMonth || abbrMonth){
                return (fullMonth) ? monthStr : monthStr.slice(0,3);
            }
            else
            return month+1;
         };

         let date = new Date(parseInt(millsecs)),
             month = date.getMonth(),
             day = date.getDate(),
             mm = processMonth(month),
             dd = (day < 10)? '0'+(day) : day,
             yy = date.getFullYear();

        return format.replace(/mmmm|mm|month/, mm).replace(/dd/,dd).replace(/yy/,yy);

     },
     
    getDataMaxMinVal: function(data, key){

        if(data.length === 1){
           return [data[0][key], data[0][key]];
        }

        let obj = Object.assign([], data);
        const arr = obj.sort((x,y) => {
            return x[key]-y[key];
        });

       return [arr[0][key], arr[(arr.length)-1][key]];
    },

    hexCode: function(str=""){

        let hex, i;
        let result = "";

        for (i=0; i<str.length; i++) {
            hex = str.charCodeAt(i).toString(16);
            result += ("0"+hex).slice(-2);
        }
    
        return result;
    },

    hexDecode: function (hex=""){

        let hexes = hex.match(/.{1,2}/g) || [];
        let str = "";

        for(let j = 0; j<hexes.length; j++) {
            str += String.fromCharCode(parseInt(hexes[j], 16));
        }
    
        return str;
    }
};

export default Util;