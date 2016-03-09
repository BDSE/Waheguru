<? 

	session_start();
	
	include("connection.php");
	
	$query="SELECT diary FROM users WHERE id='".$_SESSION['id']."' LIMIT 1";
	
	$result = mysqli_query($link,$query);
	
	$row = mysqli_fetch_array($result);
	
	$diary=$row['diary'];

?>

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
 	 	 <div class="navbar-header pull-left">
 	 	 	
 	 	 	 <a class="navbar-brand">Secret Diary</a>
 	 	 </div>
 	 	 	
 	 	 <div class="pull-right">
 	 	 	 <ul class="navbar-nav nav">	 	
 	 	 	 	 <li><a href="index.php?logout=1">Log out</a></li>
 	 	 	 </ul>
			
		</div>
 </div>
 </div>

 <div class="container contentContainer" id="topContainer">

 <div class="row">
 	 	
		<div class="col-md-6 col-md-offset-3" id="topRow">
			<textarea class="form-control"><?php echo $diary; ?></textarea>

		
		</div> 	 	
		</div>
		</div>
		
 <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js"></script>
 
 <script src="js/bootstrap.min.js"></script>
 <script>
 $(".contentContainer").css("min-height",$(window).height());
 $("textarea").css("height",$(window).height()-120);
 $("textarea").keyup(function(){
	$.ajax({
			  type: 'POST',
			  diary : $("textarea").val(),
			  url: "updatediary.php",
 });
 });
 </script>
 </body>
</html>

