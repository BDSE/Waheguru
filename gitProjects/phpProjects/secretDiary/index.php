	<? include("login.php");?>
	<!DOCTYPE html>
	<html lang="en">
	<head>
		<meta charset="utf-8">
		<meta http-equiv="X-UA-Compatible" content="IE=edge">
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<title>Secret Diary</title>
		<link href="css/bootstrap.min.css" rel="stylesheet">
		<link href="css/style.css" rel="stylesheet">
		<script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
		<script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
	</head>
	<body data-spy="scroll" data-target=".navbar-collapse">
		<div class="navbar navbar-default navbar-fixed-top">
			<div class="container">
				<div class="navbar-header">
					<button class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
						<span class="icon-bar"></span>
						<span class="icon-bar"></span>
						<span class="icon-bar"></span>
					</button>
					<a class="navbar-brand">Secret Diary</a>
				</div>
				<div class="collapse navbar-collapse">
					<form class="navbar-form navbar-right" method="post"> 
						<div class="form-group">
							<input type="email" name="loginemail" placeholder="Email" class="form-control" />
						</div>
						<div class="form-group">
							<input type="password" name="loginpassword" placeholder="Password" class="form-control" />
						</div>
						<input type="submit" name= "submit" class="btn btn-success" value="Log In">
					</form>
				</div>
			</div>	
		</div>
		<div class="container contentContainer" id="topContainer">
			<div class="row">
				<div class="col-md-6 col-md-offset-3" id="topRow">
					<h1 class="marginTop">Secret Diary</h1>
					<p class="lead">Your own private diary, with you wherever you go.</p>
					<?php
					$error="";
					$message="";
					if ($error) {
					echo '<div class="alert alert-danger">'.addslashes($error).'</div>';
					}
					if ($message) {
					echo '<div class="alert alert-success">'.addslashes($message).'</div>';
					}
					?>
					<p class="bold marginTop">Interested? Sign Up Below!</p>
					<form class="marginTop" method="post"> 
						<div class="form-group">
							<label for="email">Email Address</label>
							<input type="email" name="email" class="form-control" placeholder="Your Email"  />
						</div>
						<div class="form-group">
							<label for="password">Password</label>
							<input type="password" name="password" class="form-control" placeholder="Password"  />
						</div>
						<input type="submit" name="submit" value="Sign Up" class="btn btn-success btn-lg marginTop"/> 
					</form>
				</div>
			</div>
		</div>
		<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js"></script>
		<script src="js/bootstrap.min.js"></script>
		<script>
			$(".contentContainer").css("min-height",$(window).height());
		</script>
	</body>
	</html>