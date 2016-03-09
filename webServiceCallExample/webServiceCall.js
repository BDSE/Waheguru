/**
 * @author Amar sandhu
 * @description calling w3school's web service which coverts celcius to farenheit and vice versa
 */
var callWebService = function(){
	
	 var temp = $(".frmInput").val();
	 $.ajax({
		 url: "http://www.w3schools.com/webservices/tempconvert.asmx/FahrenheitToCelsius",
		 type: "POST",
		 data: "Fahrenheit="+temp,
		 success: function(response){
			 alert(response);
		 }
	 })
}