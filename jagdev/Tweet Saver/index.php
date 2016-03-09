<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Twitter saver</title>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.4/css/bootstrap.min.css">
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js"></script>
	<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.4/js/bootstrap.min.js"></script>
	<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jqueryui/1.10.4/jquery-ui.min.js"></script> 
	<script type="text/javascript" src="tweetSaver.js"></script>
	<link rel="stylesheet" href="http://ajax.googleapis.com/ajax/libs/jqueryui/1.11.2/themes/smoothness/jquery-ui.css" />
	<style>
		.glyphicon{
			margin-right:15px;	
			font-size:28px;
				}
		.top{
			margin-top:4px;
			}	
		hr{
			background-color:gray;
		}
		ul{
			padding-left : 0px !important ;
		}
		#search{
			font-size:15px;
		}
		#inputnum
			{
			width:460px;
			}
		.textarea{
			width:515px;
			height:600px;
			overflow-y:scroll;
		}
		#tweetInput{
			width:515px;
			height: 600px;
		}
		#tweetInput .ui-draggable-dragging
		{ background: gray;
			margin:5px;}
		.margintop{
			margin-top:30px;
		}
		.tweetName{
			color : #3399FF;
		}
		.tweets{
			padding : 5px;
			list-style-type : none;
			cursor:all-scroll;
		}
		.tweets:hover{
			background-color:#23517C; 
			color: #ffffff;
		}
		#list  li{
			margin:10px;
			list-style-type : none;
		}
		#list img{
			margin:3px;
		}
	</style>
  </head>
  <body>
	<div class = "navbar navbar-default">
		<div class = "container">
			<div class= "navbar-header">
				<ul class="nav navbar-nav">
				    <li ><a href="#"><span class="glyphicon glyphicon-arrow-left" aria-hidden="true"></span></a></li>
					<li><a href="#"><span class="glyphicon glyphicon-arrow-right" aria-hidden="true"></span></a></li>
					<li><a href="#"><span class="glyphicon glyphicon-remove-circle" aria-hidden="true"></span></a></li>
					<li><a href="#"><span class="glyphicon glyphicon-home" aria-hidden="true"></span></a></li>
				</ul>
			</div>	
				<form class="navbar-form navbar-right" role="search">
				<div class="form-group">
				<input type="text" class="form-control top" placeholder="Search">
				</div>
				<button type="submit" class="btn btn-default top">Submit</button>
				</form>
		</div> 
	</div>	
	<div class = "container">
		<div class="row">
		  <div class="col-xs-12 col-md-12 top">
			<h2>Tweet Saver <img class="loaderImg" style="display:none;" src="ajax_loader.gif"></h2>
		</div>
		</div>
		<hr size = "30">
	</div>	
	<div class = "container">
		<div class="row">
			<div class="col-xs-6">
				<div class="col-lg-6 wide">
					<div class="input-group margintop">
						<input type="text" class="form-control"  id = "inputnum" placeholder="Search for tweets...">
							<span class="input-group-btn ">
								<button  onclick = "myFunction();" class="btn btn-default" type="button"><span  id = "search" class="glyphicon glyphicon-search" aria-hidden="true"></span></button>
							</span>
					</div>
				<div id ="tweetInput" class="form-control textarea">
				</div>
				</div>
			</div>
			<div class="col-xs-6"><h2>Saved tweets</h2>
			<div class="form-control textarea " id = "list" rows="27"></div>
			</div>
		</div>
	</div>	
  </body>
</html>
