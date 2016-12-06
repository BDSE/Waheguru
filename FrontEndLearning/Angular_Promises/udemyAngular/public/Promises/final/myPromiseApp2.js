//var geoLocationPromise =  new Promise(function(resolve,reject){
//	
//	
//	
//});

function geoLocationPromise(url, params) {
	var paramString = "testParam=test";
	for (param in params) {
		paramString += "&" + param + "=" + params[param];
	}
	var urlString = url + "?" + paramString;
	var geoPromise = new Promise(function (resolve, reject) {

		var client = new XMLHttpRequest();
		client.onreadystatechange = function () {
			if (client.readyState == XMLHttpRequest.DONE) {
				if (client.status == 200) {
					console.log("200 status");
					resolve(JSON.parse(this.response));
				} else if (client.status == 400) {
					console.log("error..calling reject");
					reject("unable to fetch data- error 400");
				} else
				if (client.status == 500) {
					console.log("error..calling reject");
					reject("unable to fetch data- error 500");
				} else {
					reject("unable to fetch data- error--some error");
				}
			}
		};
		client.open("GET", urlString);
		client.send();
	});
	return geoPromise;
}
document.addEventListener("DOMContentLoaded", function () {

	document.getElementById("getYourLocationInfo").addEventListener("click", function () {
		var address = document.getElementById("address").value;
		var paramObj = {
			address: address
		};
		geoLocationPromise("https://maps.googleapis.com/maps/api/geocode/json", paramObj)
			.then(function (data) {
				if (data.status === "ZERO_RESULTS") {
					throw "GOOGLE API CAME BACK WITH NO RESULTS";
				}
				var lat = data.results[0].geometry.location.lat;
				var long = data.results[0].geometry.location.lng;
				var formattedAddress = data.results[0].formatted_address;
				document.getElementById("lat").innerHTML = lat;
				document.getElementById("long").innerHTML = long;
				document.getElementById("formattedAddress").innerHTML = formattedAddress;

				//return the promise here instead of calling geoLocation here again for weather
				return geoLocationPromise("http://api.openweathermap.org/data/2.5/weather", {
					lat: lat,
					lon: long,
					APPID: "67fc2feae188441820f5aca19df0ccda"
				})
			})
			.then(function (response) {
				var forecast = response.weather[0].description + " with " + Math.round((1.8 * (response.main.temp - 273)) + 32) + " degrees F";
				var date = new Date(response.dt * 1000);
				date = date.getMonth() + 1 + "/" + date.getDate() + "/" + date.getFullYear();
				document.getElementById("date").innerHTML = date;
				document.getElementById("forecast").innerHTML = forecast;
			})
			.catch(function (error) {
				console.log("from catch block..." + error);
			})
	});

});