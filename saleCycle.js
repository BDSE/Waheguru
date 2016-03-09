var sc_onload_ie = true, sc_runCount = 0;
function populate() {
    // Declaring variables
    __sc = { b: "", bs: "1", c: "17001", s: "", n: "", e: "", t: "", o: "", p: "", i: "", v1: "", v2: "", q1: "", q2: "", q3: "", u: "", d1: "", d2: "", cu1: "", cu2: "", w: "", y: "USD", uc: "0", cc: "", ct: "90", st: "5400", er: "", ifs: "", sfs: "", ctd: "" };
    // Status recognition
    __sc.w = __SCO.title();
    if (__SCO.isString(__SCO.loc, "checkout.jsp")) {
        __sc.s = "1";
        if (__SCO.id("iTinWrap")) {
            processStatusOneBeta();
        }
        else {
            processStatusOne();
        }
    } 
    else if (__SCO.isString(__SCO.loc, "bookingconfirmation")) {
        __sc.s = "3";
        if (typeof (__s.purchaseID) != "undefined") {
            __sc.sfs = 'orderNumber^' + __s.purchaseID;
        }
    }   
}

function attach() { 
    __SCO.onChange(__SCO.id("emailAddress"), "email");
    __SCO.onChange(__SCO.id("altEmailAddress"), "email");
    __SCO.onChange(__SCO.id("contactPhoneNumber"), "telephone");
    __SCO.onChange(__SCO.id("firstName"), "name");
    __SCO.onChange(__SCO.id("lastName"), "surname");
    __SCO.onChange(__SCO.id("phoneNo"), "telephone");
    __SCO.onChange(__SCO.id("travfn0"),"name");
    __SCO.onChange(__SCO.id("travln0"),"surname");
    __SCO.onChange(__SCO.id("travTitle0"),"title");
    __SCO.onChange(__SCO.id("userName"),"email");
    __SCO.onChange(__SCO.id("emailId"),"email");
    __SCO.onChange(__SCO.id("usrName"),"email");
    __SCO.onChange(__SCO.id("fuserName"),"email");
    __SCO.onChange(__SCO.id("email"),"email");
}

/* NEW */
function returnFlightPos() {
    var img = __SCO.tag("img", __SCO.id("iTinWrap"));
    var iTinWrapChildren = Array.prototype.slice.call(__SCO.tag("img",__SCO.id("iTinWrap")));
    for (a in img) {
        if (img.propertyIsEnumerable(a)) {
            if (__SCO.isString(img[a].getAttribute("src"), "return-airplane")) {
                return iTinWrapChildren.indexOf(img[a]);
            }
        }
    }
    return false;
}

function imgPos(a) { 
    var iTinWrapChildren = Array.prototype.slice.call(__SCO.tag("img",__SCO.id("iTinWrap")));
    return iTinWrapChildren.indexOf(a);
}
/* NEW */


function processStatusOne() {
    var dests = new Array(), imgs = "", itemName = "", itemQty = "", itemPrice = "", totalPrice = "", itemIds = "", custom1 = "", custom2 = "", itemCount = 0, itemFields = "", sessionFields = "", minusPrice = 0,departure='',arrival='',infants=0,adults='',children='',students='',promoAirline="Asiana Airlines",promo='', arrAirport='',destAirport =[];
    __SCO.remV.src = "https://|http://|static.vayama.com//content/logos/air/large/";
    __SCO.remV.href = "";   
    if (__SCO.id("itineraryMain") && airportPop != "undefined" && airportPop != undefined) {
        var main = __SCO.getDOM(__SCO.id("itineraryMain"), "1 basket");
        var tables = __SCO.getDOM(__SCO.tag("table",main), "2 item rows");
         try { 
            for (var i = 0; i < tables.length; i++) {
                var imgsL = "", itemNameL = "", itemQtyL = "", itemPriceL = "", itemIdsL = "", custom1L = "", custom2L = "", itemFieldsL = "", colour="",size="",adultsL=0,childrenL=0;
                var rows = __SCO.getDOM(__SCO.tag("tr", tables[i]), "3 item rows");

                // Image
                imgsL = __SCO.remP(__SCO.getDOM(__SCO.tag("img", rows[0])[0], "4 image"), "src").replace("50","35");

                // Airline
                var airline = __SCO.getDOM(__SCO.tag("img", rows[0])[0], "4 image").getAttribute("alt");
                if(promo == "" && airline == promoAirline) {
                    promo = airline;
                }

                // Flight id/number
                itemIdsL = __SCO.text(__SCO.getDOM(__SCO.tag("td", rows[0])[2], "6 id"));

                var dep = __SCO.text(__SCO.tag("td",rows[1])[1]);
                var ret = __SCO.text(__SCO.tag("td",rows[2])[1]);
                var stops = __SCO.text(__SCO.tag("td", rows[5])[1]);

                // Departure details
                var depAirport = '(' + __SCO.text(__SCO.tag("a", __SCO.tag("td", rows[1])[2])[0]) + ') ' + __SCO.text(__SCO.tag("strong", __SCO.tag("td", rows[1])[2])[0]);
                var depDate = __SCO.text(__SCO.tag("td", rows[1])[1]); 

                // Arrival details
                arrAirport = '(' + __SCO.text(__SCO.tag("a", __SCO.tag("td", rows[2])[2])[0]) + ') ' + __SCO.text(__SCO.tag("strong", __SCO.tag("td", rows[2])[2])[0]);
                var arrDate = __SCO.text(__SCO.tag("td", rows[2])[1]);
                destAirport.push(arrAirport);
                destAirport.push(depAirport);
                // Class
                var cs = __SCO.inBetween("|","",__SCO.text(__SCO.tag("td",rows[3])[1]),"ll");
                if(cs == 'Economy') {
                    cs = "Y";
                }
                else if(cs == 'Premium Economy') {
                    cs = "W";
                }
                else if(cs == 'Business') {
                    cs = "C";
                }
                else {  
                    cs = "F";
                }

                // Not used in the template
                // Item Name
                var from = __SCO.text(__SCO.tag("div", __SCO.tag("td", rows[1])[2])[0]);
                var to = __SCO.text(__SCO.tag("div", __SCO.tag("td", rows[2])[2])[0]);
                itemNameL = from + ' - ' + to;
                dests.push(arrAirport);
                itemQtyL = 1;
                itemPriceL = "0.00";

                minusPrice += itemQtyL == 0 ? itemPriceL*1 : 0; 
                var students = 0;
                var people2 = __SCO.text(__SCO.tag("td", __SCO.id("mainTable"))[1]).match(/[0-9]{1}\s[a-zA-Z]{1,8}/gi);
                if (people2.length > 0) {
                    for (var i2 = 0; i2 < people2.length; i2++) {
                        var d = people2[i2].split(" ");
                      /*  if (__SCO.isString(d[1], "Infant")) {
                            infants += d[0] * 1;
                        }
                        else*/ if (__SCO.isString(d[1], "Adult")) {
                            adultsL += d[0] * 1;
                        }
                        else if (__SCO.isString(d[1], "Child")) {
                            childrenL += d[0] * 1;
                        }
                        /*else if (__SCO.isString(d[1], "Student")) {
                            students += d[0] * 1;
                        }*/
                    }
                }  

                // Operated by
                var op = '';
                if (__SCO.tag("i",__SCO.tag("img", rows[0])[0].parentNode) != "") {
                    op = __SCO.text(__SCO.tag("i",__SCO.tag("img", rows[0])[0].parentNode)[0]);
                }
                if (op == null) {
                    op = '';
                }

                itemFieldsL = 'depAirport^' + depAirport + '~depDate^' + depDate + '~arrAirport^' + arrAirport + '~arrDate^' + arrDate+'~orderNum^'+(i+1)+'~airline^'+airline+'~operated^'+op;
                // Insert new row only if following conditions are met
                if (itemNameL != "" && itemQtyL != "" && itemPriceL != "" && itemIdsL != "" && itemQtyL != 0 && !__SCO.isString(itemIdsL,"between")) {
                    imgs += imgsL + "|";
                    itemName += itemNameL + "|";
                    itemQty += itemQtyL + "|";
                    itemPrice += itemPriceL + "|";
                    itemIds += itemIdsL + "|";
                    custom1 += custom1L + "|";
                    custom2 += custom2L + "|";
                    itemFields += itemFieldsL + "|";  
                    adults += adultsL +"|";
                    children += childrenL +"|";
                    itemCount++;
                }
            }            
        }
        catch (err) { 
            __SCO.error("101 " + err.description);
        }
        try {
            //Set total price and session fields
            var people = __SCO.text(__SCO.tag("td", __SCO.id("mainTable"))[1]);
            var peoplePrice = __SCO.priceCurr(__SCO.text(__SCO.tag("td", __SCO.id("mainTable"))[2]));
            var taxes = __SCO.priceCurr(__SCO.text(__SCO.tag("td", __SCO.id("mainTable"))[5]));
            totalPrice2 = peoplePrice*1 + taxes*1; 
            
            // Create link to go back to search results
            // Build originArray, destArray and dateArray based on type of the journey
            var dateArr, dateDep;
            // Return
            if (typeof odDepDate != "undefined") {
                var dateDep = odDepDate.slice(6, 8) + '' + odDepDate.slice(4, 6) + '' + odDepDate.slice(0, 4);
                if (odRetDate == "") {
                    var nd = new Date(odDepDate.slice(0, 4), (odDepDate.slice(4, 6)-1), odDepDate.slice(6, 8));
                    nd.setDate(nd.getDate() + 7);
                    dateArr =  nd.getDate()+ '' + ((nd.getMonth() + 1) < 10 ? '0' : '') + (nd.getMonth() + 1) + '' + nd.getFullYear();
                }
                else {
                    dateArr = odRetDate.slice(6, 8) + '' + odRetDate.slice(4, 6) + '' + odRetDate.slice(0, 4);
                }
            }
            else if( typeof resultsPageArgs != "undefined") {
                var dDep = __SCO.inBetween("dateArray=", ",", resultsPageArgs, "ff");
                var dateDep = dDep.slice(0, 2);
                if ((Number(dDep.slice(2, 4)) + 1) < 10) {
                    dateDep += '0' + (Number(dDep.slice(2, 4)) + 1).toString();
                }
                else {
                    dateDep += (Number(dDep.slice(2, 4)) + 1);
                }
                dateDep += '' + dDep.slice(4);

                var dArr = __SCO.inBetween("dateArray=" + dDep + ',', '&', resultsPageArgs, "ff");
                
                var dateArr = dArr.slice(0, 2);
                if ((Number(dDep.slice(2, 4)) + 1) < 10) {
                    dateArr += '0' + (Number(dDep.slice(2, 4)) + 1).toString();
                }
                else {
                    dateArr += (Number(dDep.slice(2, 4)) + 1).toString();
                }
                dateArr += '' + dArr.slice(4);
            }

            // Arrival Airport
            var newArrAirport = __SCO.clean(__SCO.inBetween(")", "", arrAirport, "fl"));

            // OdString
            if (typeof odString != "undefined") {
                var airport1 = odString.split("/")[0];
                var airport2 = odString.split("/")[1];
            }
            else {
                var airport1 = __SCO.inBetween("originArray=", "&", resultsPageArgs, "ff").split(',')[0];
                var airport2 = __SCO.inBetween("destArray=", "&", resultsPageArgs, "ff").split(',')[0];
            }

            // Destination airport
            // Return flight
            var destAir="";
            if (tables.length == 2) {
                //If flights are the same, it's return flight
                if (destAirport[0] == destAirport[3] && destAirport[1] == destAirport[2]) {
                    destAir = destAirport[0];
                }
                else {
                    destAir = destAirport[2];
                }
            }
            else if(tables.length >= 4) {
                if (destAirport.length % 2 == 0) {
                    var half = destAirport.slice(0, destAirport.length / 2).sort();
                    var half2 = destAirport.slice(destAirport.length / 2).sort();

                    // Return flight 
                    if (half.toString() == half2.toString()) {
                        destAir = destAirport[(destAirport.length / 2) + 1];
                    }
                    else {
                        destAir = destAirport[destAirport.length - 1];
                    }
                }
                else { 
                        destAir = destAirport[0]; 
                }
            }
            else{
                destAir = destAirport[destAirport.length - 1];
            }
            
            if (airportPop.tripType == "RT" || airportPop.tripType == "OW") {
                for (var a in dests) {
                    if (dests[a].match(new RegExp("\\(" + __SCO.text(__SCO.getDOM(__SCO.id("product"), "01 dest")).split("-")[1] + "\\)")) != null)
                        destAir = dests[a];
                }
            }

            var airportd = '';
            if(destAir !=  "") {
                if (__SCO.isString(destAir, ")")) {
                    airportd = __SCO.inBetween(")", "", destAir, "ll");
                }
                else {
                    airportd = __SCO.clean(__SCO.inBetween("-","",destAir,"ll"));
                }
            }

            // Set the filter if destination has not been found
            if (destAir == "") {
                __sc.w = __sc.w + " [NODEST]";
            }
            var date3 = '';
            if (airportPop.tripType == "OW") {
                dateArr = '';
            }
            else {
                date3 = encodeURIComponent(encodeURIComponent("&DT2=" + dateArr));
            }
                
            sessionFields = 'people^' + people + '~peoplePrice^' + peoplePrice + '~taxes^' + taxes + '~airport1^' + airport1 + '~airport2^' + airport2 + '~date1^' + dateDep + '~date2^' + dateArr + '~type^' + airportPop.tripType + '~class^' + cs + '~airport^' + newArrAirport + '~destAir^' + destAir + '~airportd^' + airportd + '~date3^' + date3;
        }
        catch (errOR) { 
            __SCO.error("201 " + errOR.description);
        }
    }
    // do not allow baskets with no total price
    if (itemCount == 0 || totalPrice2 == "") {
        __sc.er == "" ? __sc.s = '' : '';
    }
    else {
        // Set the airlines
        __sc.cu1 = "";
        if(promo != "") {
            for(var i=0;i<itemCount;i++) {
                __sc.cu1 += "[["+promo+"]]|";   
            }
        }
        __sc.u = imgs;
        __sc.i = itemName;
        __sc.q1 = itemQty;
        __sc.v1 = itemPrice; 
        __sc.q2 = adults;
        __sc.q3 = children;
        __sc.p = itemIds; 
        __sc.cu2 = custom2;
        __sc.ifs = itemFields;
        __sc.sfs = sessionFields;
        __sc.v2 = (totalPrice2 - minusPrice).toFixed(2); 
    }
}

/* #############################
            BETA SITE
############################### */

function processStatusOneBeta() {
    var imgs = "", itemName = "", itemQty = "", itemPrice = "", totalPrice = "", itemIds = "", custom1 = "", custom2 = "", itemCount = 0, itemFields = "", sessionFields = "", minusPrice = 0,departure='',arrival='',infants=0,adults='',children='',students='',promoAirline="Asiana Airlines",promo='', arrAirport='',destAirport =[],airports=[],flightType='';
    __SCO.remV.src = "https://|http://|static.vayama.com//content/logos/air/small/";
    __SCO.remV.href = "";  
    
    var main = __SCO.getDOM(__SCO.id("iTinWrap"), "1 basket");
    var tables = __SCO.getDOM(__SCO.eclass("col2","div",main), "2 item rows");

    /* NEW */
        // Take all children of iTinWrap
    var iTinWrapChildren = Array.prototype.slice.call(__SCO.id("iTinWrap").childNodes);
    /* NEW END */

    try {
        for (var i = 0; i < tables.length; i++) {
            if (tables[i].parentNode.parentNode.id != "itinReview") {
                var imgsL = "", itemNameL = "", itemQtyL = "", itemPriceL = "", itemIdsL = "", custom1L = "", custom2L = "", itemFieldsL = "", colour = "", size = "", adultsL = 0, childrenL = 0;
                var rows = __SCO.getDOM(__SCO.tag("li", tables[i]), "3 item rows");
                // Image
                imgsL = __SCO.remP(__SCO.getDOM(__SCO.tag("img", rows[0])[0], "4 image"), "src").replace("50","35");

                // Airline
                var airline = __SCO.getDOM(__SCO.tag("img", rows[0])[0], "4 image").getAttribute("alt") || "";
                if (promo == "" && airline == promoAirline) {
                    promo = airline;
                }

                itemIdsL = __SCO.text(__SCO.getDOM(__SCO.tag("b", rows[5])[0], "5 id"));

                // Departure details
                var depAirport = __SCO.text(rows[1]);
                var depDate = __SCO.text(rows[3]);

                // Arrival details
                arrAirport = __SCO.text(rows[2]);
                var arrDate = __SCO.text(rows[4]);
                destAirport.push(arrAirport);
                destAirport.push(depAirport);

                /* NEW */
                    flightType = __SCO.text(__SCO.eclass("col1 w81", "div", tables[i], 2)[0]);                    
                    airports.push({ "from": depAirport, "to":arrAirport, "position":imgPos(__SCO.tag("img", rows[0])[0]) });
                /* NEW END */

                // Class
                var cs = __SCO.inBetween("b>", "<", rows[5].innerHTML, "ll");
                if (cs == 'Economy') {
                    cs = "Y";
                }
                else if (cs == 'Premium Economy') {
                    cs = "W";
                }
                else if (cs == 'Business') {
                    cs = "C";
                }
                else {
                    cs = "F";
                }
                // Not used in the template
                // Item Name 
                itemNameL = depAirport + ' - ' + arrAirport
                itemQtyL = 1;
                itemPriceL = "0.00";
                
                // Operated by
                var op = '';
                if (__SCO.eclass("airOpt", "span", tables[i]) != "") {
                    op = __SCO.text(__SCO.eclass("airOpt", "span", tables[i])[0]);
                }
                if (op == null) {
                    op = '';
                }
                itemFieldsL = 'depAirport^' + depAirport + '~depDate^' + depDate + '~arrAirport^' + arrAirport + '~arrDate^' + arrDate + '~orderNum^' + (i + 1)+'~airline^'+airline+'~operated^'+op;
                minusPrice += itemQtyL == 0 ? itemPriceL * 1 : 0;
                custom2L = '[[V2]]  [new]';

                // Insert new row only if following conditions are met
                if (itemNameL != "" && itemQtyL != "" && itemPriceL != "" && itemIdsL != "" && itemQtyL != 0 && !__SCO.isString(itemIdsL, "between")) {
                    imgs += imgsL + "|";
                    itemName += itemNameL + "|";
                    itemQty += itemQtyL + "|";
                    itemPrice += itemPriceL + "|";
                    itemIds += itemIdsL + "|";
                    custom1 += custom1L + "|";
                    custom2 += custom2L + "|";
                    itemFields += itemFieldsL + "|";
                    itemCount++;
                }
            }
        }
    }
    catch (err) { 
        __SCO.error("101 " + err.description);
    }
    try {
        //Set total price and session fields
        var divs = __SCO.eclass("mainPriceSummary", "div", __SCO.id("showPricePerPassenger")), ad=0,ch=0, inf=0,peoplePrice=0,taxes=0;
        for (var i2 = 0; i2 < divs.length; i2++) {
            var left = __SCO.eclass("chkOut_fltLft", "div", divs[i2]);
            var right = __SCO.eclass("chkOut_fltRt", "div", divs[i2]);
            for (var i3 = 0; i3 < left.length; i3++) {
                var t = __SCO.text(right[i3]);
                var tl = __SCO.text(left[i3]);
                if (__SCO.isString(tl, "dult")) {
                    ad += parseInt(tl);
                }
                else if (__SCO.isString(tl, "hild")) {
                    ch += parseInt(tl);
                }
                else if (__SCO.isString(tl, "fant")) {
                    inf += parseInt(tl);
                }
                else if (__SCO.isString(tl, "Base Fare")) {
                    peoplePrice += (__SCO.priceCurr(t) *1);
                }
                else if (__SCO.isString(tl, "Taxes")) {
                    taxes += (__SCO.priceCurr(t) * 1);
                } 
            }
        }
        var people = ad + ' Adult(s)';
        if (ch > 0) { people += ', ' + ch + ' Child(ren)'; }
        if (inf > 0) { people += ', ' + inf + ' Infant(s)'; }  
        totalPrice2 = peoplePrice*1 + taxes*1; 
            
        // Create link to go back to search results
        // Build originArray, destArray and dateArray based on type of the journey
        var dateArr, dateDep,triptype="";
        // Return
        if (typeof odDepDate != "undefined") {
            var dateDep = odDepDate.slice(6, 8) + '' + odDepDate.slice(4, 6) + '' + odDepDate.slice(0, 4);
            if (odRetDate == "") {
                var nd = new Date(odDepDate.slice(0, 4), odDepDate.slice(4, 6), odDepDate.slice(6, 8));
                nd.setDate(nd.getDate() + 7);
                dateArr = nd.getFullYear() + '' + (nd.getMonth() + 1) + '' + nd.getDate();
            }
            else {
                dateArr = odRetDate.slice(6, 8) + '' + odRetDate.slice(4, 6) + '' + odRetDate.slice(0, 4);
            }
            triptype = airportPop.tripType;
        }
        else if( typeof resultsPageArgs != "undefined") {
            var dDep = __SCO.inBetween("dateArray=", ",", resultsPageArgs, "ff");
            var dateDep = dDep.slice(0, 2);
            if ((Number(dDep.slice(2, 4)) + 1) < 10) {
                dateDep += '0' + (Number(dDep.slice(2, 4)) + 1).toString();
            }
            else {
                dateDep += (Number(dDep.slice(2, 4)) + 1).toString();
            }
            dateDep += '' + dDep.slice(4,8);

            var dArr = __SCO.inBetween("dateArray=" + dDep + ',', '&', resultsPageArgs, "ff");
            // If you can still find comma, take the last date from array
            if (__SCO.isString(dArr, ",")) {
                dArr = __SCO.inBetween(",", "", dArr, "ll");
            }
            // Arrival date is the same and is not found in resultsPageArgs
            if (dArr == "0" || dArr == "0,0,0") {
                dateArr = "";
            }
            else {
                var dateArr = dArr.slice(0, 2);
                if ((Number(dDep.slice(2, 4)) + 1) < 10) {
                    dateArr += '0' + (Number(dArr.slice(2, 4)) + 1).toString();
                }
                else {
                    dateArr += (Number(dArr.slice(2, 4)) + 1).toString();
                }
                dateArr += '' + dArr.slice(4, 8);
            }
            triptype = __SCO.inBetween("&tripType=", "", resultsPageArgs, "ll");
            if (triptype == "" || triptype.length > 3) {
                triptype = airportPop.tripType;
            }
        }


        // Arrival Airport
        var newArrAirport = __SCO.clean(__SCO.inBetween("-", "", arrAirport, "fl"));

        // OdString
        if (typeof odString != "undefined") {
            var airport1 = odString.split("/")[0];
            var airport2 = odString.split("/")[1];
        }
        else {
            var airport1 = __SCO.inBetween("originArray=", "&", resultsPageArgs, "ff");
            var airport2 = __SCO.inBetween("destArray=", "&", resultsPageArgs, "ff");
        }

        // Destination airport
        // Return flight
        var destAir="";
        if (itemCount == 2) {
            //If flights are the same, it's return flight
            if (destAirport[0] == destAirport[3] && destAirport[1] == destAirport[2]) {
                destAir = destAirport[0];
            }
            else {
                destAir = destAirport[2];
            }
        }
        else if (triptype == "MC") {
            destAir = destAirport[destAirport.length-2];
        }
        else if (itemCount >= 4) {
            if (itemCount == 4) {
                // 4 Flights, return flight with 1 stop
                if (destAirport[0] == destAirport[3] && destAirport[4] == destAirport[7]) {
                    destAir = destAirport[2];
                }
                else {
                    destAir = destAirport[Math.round(destAirport.length / 2) - 2];
                }
            }
            else {
                    destAir = destAirport[Math.round(destAirport.length / 2) - 2];
            }
        }
        else {
            destAir = destAirport[0];
        }

        /* NEW */
        var destination = '';
        if (triptype == "RT") {
            var returnFlightPosition = returnFlightPos();
            fligts:
            for (var i3 = 0; i3 < airports.length; i3++) {
                if (airports[i3].position > returnFlightPosition) {
                    destination = airports[i3 - 1].to;  
                    break fligts;
                }
            }
        }
        else {
            destination = airports[airports.length - 1].to;
            } 

        var airportd = "";
        if(destAir !=  "") {
            if (__SCO.isString(destAir, ")")) {
                airportd = __SCO.inBetween(")", "", destAir, "ll");
            }
            else {
                airportd = __SCO.clean(__SCO.inBetween("-","",destAir,"ll"));
            }
        }
        var date3 = '';
        if (airportPop.tripType == "OW") {
            dateArr = '';
        }
        else {
            date3 = encodeURIComponent(encodeURIComponent("&DT2=" + dateArr));
        }
                
        sessionFields = 'people^' + people + '~peoplePrice^' + peoplePrice + '~taxes^' + taxes+'~airport1^'+airport1+'~airport2^'+airport2+'~date1^'+dateDep+'~date2^'+dateArr+'~type^'+ triptype+'~class^'+cs+'~airport^'+newArrAirport+'~destAir^'+destAir+'~airportd^'+airportd+'~date3^'+date3+'~bookingLink^'+encodeURIComponent(encodeURIComponent(resultsPageArgs));
    }
    catch (errOR) { 
        __SCO.error("201b " + errOR.description);
    }
    // do not allow baskets with no total price
    if (itemCount == 0 || totalPrice2 == "") {
        __sc.er == "" ? __sc.s = '' : '';
    }
    else {
        // Set the airlines
        __sc.cu1 = "";
        if (promo != "") {
            for (var i = 0; i < itemCount; i++) {
                __sc.cu1 += "[[" + promo + "]]|";
            }
        }
        __sc.u = imgs;
        __sc.i = itemName;
        __sc.q1 = itemQty;
        __sc.v1 = itemPrice;
        __sc.q2 = adults;
        __sc.q3 = children;
        __sc.p = itemIds;
        __sc.cu2 = custom2;
        __sc.ifs = itemFields;
        __sc.sfs = sessionFields;
        __sc.v2 = (totalPrice2 - minusPrice).toFixed(2);
    }
}

/***** BYTESIZE GLOBAL *****/   
(function (window, undefined) {
    var __SCO = {
        curr: { "\u00a3": "GBP", "$": "USD", "\u20ac": "EUR", "\u00a5": "JPY", "z\u0142": "PLN", "K\u010d": "CZK", "kr": "NOK" },
        currS: "GBP|USD|EUR|JPY|PLN|CZK|NOK|kr|z\u0142|K\u010d|kr|$|\u00a3|\u20ac|\u00a5",
        remV: { src: "", href: "" },
        mailBlock: "",
        loc: window.location.href.toString().toLowerCase(),
        siteLocalised: false,
        localeBrowser: false,
        optNeg: false,
        addA: function (z, y) { 
            y = y||z.length, x= ""; for(var i = 0; i < y; i++) { x+= z[i]; } return x;
        },
        addEvent: function () {
            var first = true;
            if (document.addEventListener) { document.addEventListener("load", __SCO.runByteSize, false) } else if (window.attachEvent) { window.attachEvent("onload", __SCO.runByteSize); }
            function hr() {
                try {
                    if (typeof document.readyState == 'undefined' || sc_runCount > 0) { throw new Error("ReadyState"); }
                    (document.readyState == "complete" || document.readyState == "loaded") && sc_runCount == 0 ? first ? (setTimeout(hr, 500), first = false) : __SCO.runByteSize() : setTimeout(hr, 50);
                }
                catch (e) { }
            } hr();
        },
        clean: function (a) {
            return (a != null) ? a.replace(/^\s*|\s*$/g, '').replace(/\s{2,2000}/g, " ") : ''
        },
        eclass: function (a, b, c, d) {
            if (a != "") {
                c = c || document,
                b = b || "*",
                d = d || 1,
                f = new Array(),
                e = this.tag(b, c);
                for (var i = 0; i < e.length; i++) {
                    if ((d == 1 && e[i].className == a) || (d == 2 && e[i].className.indexOf(a) != -1) || (d == 3 && (e[i].className.search(new RegExp("(^|\\s)" + a.replace(/\$/g, "\\$") + "(\\s|$)")) != -1))) {
                        f.push(e[i]);
                    }
                }
                return f.length > 0 ? f : ''
            }
        },
        error: function (a) {
            __sc.er = (__sc.er == "") ? a : __sc.er;
            return null
        },
        esc: function (a) {
            return a.replace(/[-[\]{}()*+?.,\\^$|#]/g, "\\$&").replace(/\s/g, "\\s")
        },
        getDOM: function (a, b) {
            b = b || "";
            if (a != null) {
                if (typeof (a.length) != "undefined") {
                    return (a.length > 0) ? a : this.error(b);
                }
                else {
                    return a;
                }
            }
            else {
                return (b != "") ? this.error(b) : null;
            }
        },
        getVT: function (a, b) {
            var b = b || "v";
            var c = a.tagName.toLowerCase();
            var d = a.type.toLowerCase();
            var e;
            if (c == "select") {
                e = (b == "v") ? a.options[a.selectedIndex].value : a.options[a.selectedIndex].text;
            }
            else if (c == "input") {
                if (d == "checkbox" || d == "radio") {
                    e = (a.selected || a.checked == true) ? "1" : "0";
                }
                else {
                    e = a.value;
                }
            }
            return this.clean(e);
        },
        id: function (a, b) {
            return document.getElementById(a);
        },
        inBetween: function (a, b, c, d) {
            var d = d || "ff", e = '', f = 0, g = c.indexOf(a), h = c.lastIndexOf(a),
            i = a.length, j = "substring", k = c.lastIndexOf(b);
            if (g != -1 && k != -1) {
                if (a == b) {
                    f = c.match(new RegExp(this.esc(a), 'g'));
                    (d == "ff" && f.length > 1) ? e = c[j](g + i, c.indexOf(b, g + i)) : e;
                    (d == "fl" && f.length > 1) ? e = c[j](g + i, k) : e;
                }
                else {
                    (d == "ff") ? e = c[j](g + i, c.indexOf(b, g + i)) : e;
                    (d == "fl") ? e = c[j](g + i, k) : e;
                    (d == "lf") ? e = c[j](h + i, c.indexOf(b, h + i)) : e;
                    (d == "ll") ? e = c[j](h + i, k) : e;
                }
            }
            return __SCO.clean(e);
        },
        isString: function (a, b) {
            return (a.indexOf(b) == -1) ? false : true
        },
        isValid: function(a,b) {
            if(b == "email") {
                return __SCO.isString(a,"@") ? true : false;
            }
            else if(b == "telephone") {
                var a = a.replace(/[^0-9]/gi,""),c = a.split(new RegExp(a[0])).length-1;
                return (a.length > 5 && c != a.length) ? true : false;
            }
            else {
                return true;
            }
        },
        name: function (a) {
            return document.getElementsByName(a);
        },
        onChange: function (a, b, c, d) {
            var d = c || "";
            if (this.getDOM(a) != null) {
                var e = a.disabled || false;
                var v = __SCO.getVT(a, d);
                if (e == true) { a.disabled = false; }
                a.onchange = function () {
                    var v = __SCO.getVT(this, d);
                    if ((v != "" && v != c && __SCO.isValid(v,b) == true) || b == "optout") {
                        if (b == "name" || b == "surname" || b == "title") {
                            v = v.charAt(0).toUpperCase() + v.slice(1);
                            var n = (__sc.n != "") ? __sc.n.split("|") : (__sc.n = '||'.split("|"));
                            if (b == "name") { n[0] = v; } else if (b == "surname") { n[1] = v; } else { n[2] = v; }
                            __sc.n = n.join("|");
                        }
                        else {
                            __sc[b.substring(0, 1)] = (__SCO.optNeg == true && b == "optout") ? ((v - 1) * -1) : v;
                        }
                        if (b != "title") {
                            __sc.s = __sc.s != '' ? __sc.s : '2';
                            __scRun(__sc);
                        }
                    }
                }
                if (e == true) { a.disabled = true; }
                v != "" ? a.onchange() : null;
            }
        },
        priceCurr: function (a, f) {
            var f = f == false ? false : true;
            if(a != "") {
	            b = a.match(new RegExp("(" + this.currS.replace(/\$/g, "\\$") + ")")) || '',
	            c = a.replace(/[^\d\,\.]/g, "").match(/[\d]+/g),
	            d = (c.length == 1) ? c[0] : (c[c.length-1].length < 3) ? this.addA(c, c.length-1) + "." + c[c.length-1]: this.addA(c),
	            e = (b.length > 0) ? ((b[0].length == 1) ? this.curr[b[0]] : b[0]) : '';
	            this.curSym = e;
	            return (d != "") ? d : ((f == true) ? this.error("301 price not found") : "0.00");
            }
            else if (a == "" && f == true) {
                this.error("301 price not found");
            }
            else { return "0.00" }
        },
        remP: function (a, b) {
            return (a != null) ? a.getAttribute(b).replace(new RegExp("(" + this.remV[b].replace(/\?/g, "\\?").replace(/\&/g, "\\&").replace(/\./g, "\\.").replace(/\-/g, "\\-") + ")+", "g"), '') : ''
        },
        runByteSize: function () {
            try {
                sc_runCount++;
                populate();
                attach();
                (__sc.s != "" && __sc.s != 0) ? __scRun(__sc) : null;
            }
            catch (err) { }
        },
        sendRequest: function(t) {
            (t == true) ? __SCO.runByteSize() : __scRun(__sc);
        },
        setLocale: function (a) {
            __sc.ctd = (this.siteLocalised == true && this.localeBrowser == true) ? (navigator.language || navigator.userLanguage) : a;
        },
        tag: function (a, b) {
            return (b = b || document) ? b.getElementsByTagName(a) : '';
        },
        text: function (a) {
            return (a != null) ? this.clean(a.textContent || a.innerText) : ''
        },
        title: function () {
            return this.text(this.getDOM(this.tag("title")[0])) || this.loc
        }
    }
    window.__SCO = __SCO;

})(window);
__SCO.addEvent(sc_onload_ie);
/***** SALECYCLE GLOBAL *****/
var __sc;
function __runSC(t) {
    (t == true) ? __SCO.runByteSize() : __scRun(__sc);
}
function __scExt(t){
    __sc.cc = 0; (t == true) ? __sc.s = 4 : ''; __scRun(__sc);
}
function __scIsV(a) {
    return (__sc[a] == null || __sc[a] == "undefined") ? true : false
}

/* Cookie Solution __scRun function */
function __scRun(__sc) {
    var c = __scIsV("c") ? '' : __scCI(__sc.c);  //"c"lient id
    if (c != '') {
        var b = __scIsV("b") ? '' : __scCI(__sc.b),  //item session or "b"asket id
        s = __scIsV("s") ? '' : __scCI(__sc.s),  //cart "s"tatus - 1 = shopping, 2 = checkout, 3 = completed sale    
        n = __scIsV("n") ? '' : __scCI(encodeURI(__sc.n)),  //customer "n"ame
        e = __scIsV("e") ? '' : __scCI(__sc.e),  //customer "e"mail
        t = __scIsV("t") ? '' : __scCI(__sc.t),  //customer "t"elephone
        o = __scIsV("o") ? '' : __scCI(__sc.o),  //customer "o"pt out of receiving emails - we will assume opted in unless this flag is set to 1
        p = __scIsV("p") ? '' : __scCI(__sc.p),  //item "p"roduct ids or maybe hotel name
        i = __scIsV("i") ? '' : __scCI(encodeURI(__sc.i)),  //"i"tem name or maybe room type
        v1 = __scIsV("v1") ? '' : unescape(__scCI(__sc.v1)),  //item "v"alue1 item value of maybe room duration value - client trading currency
        v2 = __scIsV("v2") ? '' : unescape(__scCI(__sc.v2)), //item "v"alue2 (ideally total basket value or toal completed sales value) - client trading currency
        q1 = __scIsV("q1") ? '' : __scCI(__sc.q1), //item "q"uantity1 item quantity or maybe number of adults
        q2 = __scIsV("q2") ? '' : __scCI(__sc.q2), //item "q"uantity2 - maybe number of children
        q3 = __scIsV("q3") ? '' : __scCI(__sc.q3), //item "q"uantity3 - maybe number of rooms
        u = __scIsV("u") ? '' : __scCI(__sc.u), //item image "u"rl
        d1 = __scIsV("d1") ? '' : __scCI(__sc.d1), //item "d"ate1
        d2 = __scIsV("d2") ? '' : __scCI(__sc.d2), //item "d"ate2
        cu1 = __scIsV("cu1") ? '' : __scCI(__sc.cu1), //"c"ustom field1 - additional text entry data used for keyword lookup
        cu2 = __scIsV("cu1") ? '' : __scCI(__sc.cu2), //"c"ustom field2 - additional text entry data used for keyword lookup      
        w = __scIsV("w") ? __scCI(window.location.pathname) : __scCI(__sc.w), //"w"eb page name
        y = __scIsV("y") ? '' : __scCI(__sc.y), //Item Currency for all items in the basket  
        uc = __scIsV("uc") ? 0 : __scCI(__sc.uc), //"u"se "c"ookie for session id - some clients do not have session ids (0: use cookies but not for session; 1: use cookies also for sessions; 2: do not use any cookie
        cc = __scIsV("cc") ? 1 : __scCI(__sc.cc), //"c"laim "c"onversion
        st = __scIsV("st") ? 1800 : __scCI(__sc.st), //"s"ession expiry "t"ime in seconds
        ct = __scIsV("ct") ? 365 : __scCI(__sc.ct), //"c"ookie expiry "t"ime in days
        bs = __scIsV("bs") ? 0 : __scCI(__sc.bs), //byte size = 1 otherwise 0
        er = __scIsV("er") ? '' : __scCI(__sc.er), //"er"ror message
        ifs = __scIsV("ifs") ? '' : __scCI(__sc.ifs), //"i"tem "f"ield"s"
        sfs = __scIsV("sfs") ? '' : __scCI(__sc.sfs), //"s"ession "f"ield"s"
        ctv = __scIsV("ctv") ? '' : __scCI(__sc.ctv), // custom locale for values
        ctd = __scIsV("ctd") ? '' : __scCI(__sc.ctd), // custom locale for dates
        scs = screen.availHeight + '-' + screen.availWidth + '-' + screen.colorDepth + '-' + screen.height + '-' + screen.width;

        if (uc == 0 && window.location.protocol == "https:") {
            var c_r = __fc(), c_n = "", c_e = "", c_t = "", c_d = "", fc = "0";
            if (c_r) {
                var c_s = c_r.split(":");
                c_n = (c_s[0]) ? c_s[0] : '';
                c_e = (c_s[1]) ? c_s[1] : '';
                c_t = (c_s[2]) ? c_s[2] : '';
                c_d = (c_s[3]) ? c_s[2] : '';
                (n == '' && c_n != n) ? n = c_n : '';
                (e == '' && c_e != e) ? (e = c_e, fc = "1") : '';
                (t == '' && c_t != t) ? (t = c_t, fc = "1") : '';
            }
            (n != '' || e != '' || t != '') ? __wrC(n + ":" + e + ":" + t, c_d) : '';
        }

        //sale cycle "w"eb protocol
        var sc_w = (document.location.protocol == 'https:') ? 'https://' : 'http://';

        //sale cycle web "a"ddress url
        var sc_a = 'app.salecycle.com';

        //sale cycle web page "p"ath
        var sc_p = (s == 3 || s == 5) ? '/import/pixelcapture.aspx' : '/import/capture.aspx';

        //sale cycle full "u"rl variable
        var sc_u = sc_w + sc_a + sc_p;

        var sc_q = '';
        if (s == 3) {
            sc_q = 'c=' + c + '&b=' + b + '&cc=' + cc + '&ca=0&sfs=' + sfs + '&scs=' + scs;
        }
        else if (s == 5) {
            sc_q = 'c=' + c + '&e=' + e + '&cc=' + cc + '&sfs=' + sfs + '&scs=' + scs;
        }
        else {
            sc_q = unescape('fc=0&mid=0&c=' + c + '&b=' + b + '&n=' + n + '&e=' + e + '&t=' + t + '&o=' + o + '&p=' + p + '&i=' + i + '&u=' + u + '&v1=' + v1 + '&v2=' + v2 + '&q1=' + q1 + '&q2=' + q2 + '&q3=' + q3 + '&d1=' + d1 + '&d2=' + d2 + '&s=' + s + '&w=' + w + '&cu1=' + cu1 + '&cu2=' + cu2 + '&y=' + y + '&cc=' + cc + '&bs=' + bs + '&er=' + er + '&ca=0&st=' + st + '&ifs=' + ifs + '&sfs=' + sfs + '&ctd=' + ctd + '&ctv=' + ctv + '&scs=' + scs);
        }

        if (s == 3 || s == 5 || navigator.appName != 'Microsoft Internet Explorer') {
            var sc_i = new Image();
            sc_i.src = sc_u + "?" + sc_q;
            sc_i.style.display = 'none';
        }
        else {
            //Random number - this is used for a new cookie's machine id and for qs chunk processing
            var seed = (new Date()).getTime(); //Current Time of request
            var sc_rnd = seed + Math.floor(Math.random(seed) * 1000000000000);
            var sc_ch = __scGCL(sc_q, 2000);
            if (sc_ch > 0) {
                var sc_n = Math.floor(sc_q.length / sc_ch);
                if (sc_q.length % sc_ch != 0) sc_n++;
                for (var i = 0; i < sc_n; i++) {
                    var sc_i = new Image();
                    sc_i.src = sc_u + "?sc_dt=" + sc_rnd + "&sc_pn=" + (i + 1) + "_" + sc_n + "&" + sc_q.substr(i * sc_ch, sc_ch);
                    sc_i.style.display = 'none';
                }
            }
        } 
    }
}

/* Cookie solution check date */
function __sd(d) {
    var cd = (d != '') ? new Date(d) : new Date(), nd = new Date();
    return (nd >= cd) ? new Date(nd.setDate(nd.getDate() + 30)).toUTCString() : new Date(cd.setDate(cd.getDate())).toUTCString();
}

/* Cookie solution to find the cookie */
function __fc() {
    var eq = "__sc=", res = "", ca = document.cookie.split(";");
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        (c.indexOf(eq) != -1) ? res = c.substr(eq.length + 1, c.length) : '';
    }
    return (res != '') ? res : null;
}
function __scCI(e) {
    return escape(e.toString().replace(/&/g, '[sc_amp]').replace(/\?/g, '[sc_qm]').replace(/\+/g, '[sc_pl]').replace(/>/g, '[sc_bc]').replace(/</g, '[sc_bo]'));
}
/* Cookie solution to write the cookie, writes as secure cookie */
function __wrC(v, d) {
    document.cookie = "__sc=" + v + ";expires=" + __sd(d) + ";path=/" + ";secure";
}
function __scGCL(q, l) {
    var bValid = true;
    var sc_n = Math.floor(q.length / l);
    if (q.length % l != 0) sc_n++;
    for (var i = 1; i < sc_n; i++) {
        if (q.charAt(l * i) == '=' || q.charAt(l * i) == '&' || q.charAt(l * i) == '/' || q.charAt(l * i - 1) == '=' || q.charAt(l * i - 1) == '&' || q.charAt(l * i - 1) == '/' || q.charAt(l * i - 2) == '=' || q.charAt(l * i - 2) == '&' || q.charAt(l * i - 2) == '/' || q.charAt(l * i - 3) == '=' || q.charAt(l * i - 3) == '&' || q.charAt(l * i - 3) == '/' || q.charAt(l * i - 4) == '=' || q.charAt(l * i - 4) == '&' || q.charAt(l * i - 4) == '/' || q.charAt(l * i + 1) == '=' || q.charAt(l * i + 1) == '&' || q.charAt(l * i + 1) == '/' || q.charAt(l * i + 2) == '=' || q.charAt(l * i + 2) == '&' || q.charAt(l * i + 2) == '/' || q.charAt(l * i + 3) == '=' || q.charAt(l * i + 3) == '&' || q.charAt(l * i + 3) == '/' || q.charAt(l * i + 4) == '=' || q.charAt(l * i + 4) == '&' || q.charAt(l * i + 4) == '/') {
            bValid = false;
            break
        }
    }
    if (!bValid) return __scGCL(q, (l - 5));
    return l
}