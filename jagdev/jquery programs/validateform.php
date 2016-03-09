<!doctype html>
<html>
 <head>
 <title>Learning jQuery</title>

 <meta charset="utf-8" />
 <meta http-equiv="Content-type" content="text/html; charset=utf-8" />
 <meta name="viewport" content="width=device-width, initial-scale=1" />

 <script type="text/javascript" src="jQuery.js"></script>


 <style>

 #wrapper {
 width:600px;
 margin:0 auto;
 font-family: helvetica;
 font-size:1.2em;
 }

 input {
 width:300px;
 height:30px;
 padding:5px;
 border-radius:5px;
 font-size:1.2em;
 border: 1px solid grey;
 margin-bottom:10px;
 }

 label {
 width:200px;
 float:left;
 padding-top:7px;
 }

 #submitButton {
 height:50px;
 margin-left:200px;
 width:100px;
 }

 #error {
 color:red;
 margin:20px;
 }

 </style>
 
 </head>

 <body>

 <div id="wrapper">

 <div id="error"></div>

 <form id="validationForm">

 <label for="email">Email</label>
 <input name="email" id="email" />

 <label for="phone">Telephone</label>
 <input name="phone" id="phone" />

 <label for="pass">Password</label>
 <input name="pass" type="password" id="pass1" />

 <label for="pass">Confirm Password</label>
 <input name="pass" type="password" id="pass2" />

 <input id="submitButton" type="submit" value="Submit" />

 </form>

 </div>
 
 <script>
 $("#validationForm").submit(function(event){
	 event.preventDefault();
	 alert("submit");
 });


 </script>
</body>
</html>