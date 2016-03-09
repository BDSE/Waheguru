<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>jQuery ajax tutorial</title>
    <link href="../bootstrap/sourceFile/css/bootstrap.min.css" rel="stylesheet">
      <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
      <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
	  <script type="text/javascript" src="jQuery.js"></script>
  </head>
  <body>
    <h1>jQuery ajax tutorial</h1>
		<h2> coffee orders</h2>
		<h4> Add a coffee order</h4>
		<p>Name:<input type = "text" id = "name"></p>
		<p>Drink:<input type = "text" id = "drink"></p>
		<button  id  = "add-order">Add order</button>
		<div id = "ajaxResponse"></div>
		<script>
		$.get("query.html",function(n){
			alert(n);
		});
		</script>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js"></script>
    <script src="../bootstrap/sourceFile/js/bootstrap.min.js"></script>
	
  </body>
</html>