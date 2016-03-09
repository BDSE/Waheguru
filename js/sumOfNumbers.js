
 function multiplyAll(arr){
 var array = arr;
 var result =1;  
	for(var i=0;i<array.length;i++){
		result *=array[i];
		}
	return result;
 }
 
 function multiplyby2(){
	var inputval ="";
	inputval = document.getElementById("array").value;
	 inputval = inputval.split(",");
	 var result = multiplyAll(inputval);
	 $("#returnarray").html(result);
} 	

	