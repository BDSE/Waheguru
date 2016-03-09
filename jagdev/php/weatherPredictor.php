<!doctype html>
<html>
<head>
<title>My First Webpage</title>
	<meta charset="utf-8" />
	<meta http-equiv="Content-type" content="text/html; charset=utf-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1" /
	<!-- Latest compiled and minified CSS -->
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.1.1/css/bootstrap.min.css">

	<!-- Optional theme -->
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.1.1/css/bootstrap-theme.min.css">

	
	<style>
	 body{
		 background-image:url("images/weather1.jpg");
		 width:100%;
		 height:100%;
		 background-size:cover;
		 background-position:center;
		 }
	 html{
		 height:100%;
		}	
	.white{
		color:white;
		margin-top:30px;
	}		
	.marginTop{
		margin-top:120px;
	}
	.alert{
		margin-top:20px;
	}
	</style>
</head>
<body>
	<div class = "navbar navbar-default">
	<div class= "container">
		<div class = "navbar-brand">
			<strong>Weather Predictor</strong>
		</div>
	</div>
	</div>	
	<div class = "container">
		<div class = "row">
		<div class = "col-md-6 col-md-offset-3">
			<h1 class = "white marginTop">Weather Predictor</h1>
			<p class = "white">Enter the city below to get the forecast for rhe weather<p>
			<form>
				<div class = "form-group">
					<input type = "text" class =  "form-control" id = "city" placeholder = "Eg. London,Paris,San Francisco">
				</div>
				<div>	
					<button type ="submit" id ="findmyweather" class = "btn btn-success btn-lg">Enter the city</button>
				</div>
			</form>		
			<div class="alert alert-success" id ="success" role="alert"></div>
			<div class="alert alert-danger" id = "failure" role="alert">...</div>
		</div>
		</div>
	</div>	
	<script src="//code.jquery.com/jquery-1.11.0.min.js"></script>
	<script src="//netdna.bootstrapcdn.com/bootstrap/3.1.1/js/bootstrap.min.js"></script>
	
	<script>
		$("#findmyweather").click(function(event){
			event.preventDefault();
			if($("#city").val()!=""){ 
			$.get("weatherforecast.php?city="+$("#city").val(),function(data){
				if(data == ""){
					alert("Please try again");
				} else{
				$("#success").html(data);
				}
			});
			}
			else
				alert("Please enter a city");
		});
	
	</script>
</body>
</html>