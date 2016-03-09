<?php include "login.php";?>
<!DOCTYPE html>
<html lang="en">
 <head>
 <meta charset="utf-8">
 <meta http-equiv="X-UA-Compatible" content="IE=edge">
 <meta name="viewport" content="width=device-width, initial-scale=1">
 <title>Secret Diary</title>
 <link href="css/bootstrap.min.css" rel="stylesheet">
 <link href="css/style.css" rel="stylesheet">
 <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
 <script src="https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js"></script>
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

		<h1 class="marginTop"> Secret Diary</h1>

		<p class="lead">Your Private with where ever you go .</p>

		<?php
			if($error){
				echo'<div class="alert alert-danger">'.addslashes($error).'</div>';
			}
			if($message){
				echo'<div class="alert alert-success">'.addslashes($message).'</div>';
			}
		
		?>

		<p class="bold marginTop">Interested? Join our mailing list!</p>

		<form class="marginTop" method="post">
			<div class="form-group">
				<input type="email" class="form-control" placeholder="Your email" name="email" />
			</div>
			<div class="form-group">
				<input type="password" class="form-control" placeholder="Your Password" name="password" />
			</div>
				<input type="submit" class="btn btn-success btn-lg marginTop" name="submit" value="Sign Up" />
		</form>
		</div> 	 	
		</div>
		</div>
		
 <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js"></script>
 
 <script src="js/bootstrap.min.js"></script>
 <script>
 $(".contentContainer").css("min-height",$(window).height());
 
 </script>
 </body>
</html>

