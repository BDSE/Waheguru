const Util = {

    sortArrayOfObjects: function(dataArray, sortby, flag=1){
        dataArray.sort(function(a,b){
          return flag * (parseInt(a[sortby])-parseInt(b[sortby]));
        });
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
     //format - eg. mm/dd/yy
     formatDate: function(millsecs, format="mm/dd/yy"){

         let date = new Date(parseInt(millsecs)),
             mm = (date.getMonth()+1 < 10)? '0'+(date.getMonth()+1) : date.getMonth()+1,
             dd = date.getDate(),
             yy = date.getFullYear();

        return format.replace(/mm/,mm ).replace(/dd/,dd).replace(/yy/,yy);

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
    }
};

export default Util;