/**
 * @name learningScript by jagdev
 * @Author Jagdev Brar
 * @DateCreated 04/24/2015
 * @copyRight 2015 Jagdev Brar [Jagdev at jagdev.com]
 */

var arraySorter = function(){
	var html ="";
	var arr = $("#array").val();	
	 arr = arr.split(",");
	 var j = [];
	 for(var i = 0 ; i < arr.length ; i++){
		 if(!isNaN(parseInt(arr[i]))){
			   if(typeof j[arr[i]] != "undefined"){
					j[arr[i]] = j[arr[i]]+1;	
				} else{
					j[arr[i]] = 1;
				}
		 }else{
			 alert("enter array consisting of numbers only separated by commas.");
			 return;
		 }
	 }
	for(var i= 0 ; i < j.length ; i++){
		if(typeof j[i] != "undefined"){
			html += "<p>"+i+" appeared "+j[i]+" times</p>";
		}
	}
	document.getElementById("arrayShow").innerHTML = html;
}

var factorialFind = function(){
	var factorialValue = myfunction();
	$("#factValue").html(factorialValue);
	
}
var myfunction = function(){
	var num = $("#numb").val();
	if(num == " "){
		alert("enter a number");
	}else{
		var x = parseInt(num); fact =1;
		if(x==0){
			return  1;
		}
		else if(x<0){
			alert("enter valid number");
		}
		else{
			for(var i=x;i>1;i--){
				fact*=i;
				console.log("aithe "+i+ " rakh..." +fact);
			}
			return fact;
		}
	
	}
}