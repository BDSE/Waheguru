<?php 
  $username = "";
?>
<html lang="en">
  <head>
  		<script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
		<script type="text/javascript">
			var ajaxCallExample = function(){
				var name = $("#name").val();
				var phone = $("#phone").val();
				var jsonObj = {
								name : name,
								phone : phone
				}
				$.ajax({
					type : "GET",
					url : "ajaxResponse.php",
					data : "name="+name+"&phone="+phone,
					success : function(data){
						$(".ajaxResponse").html(data);
					}
				});
			}
		</script>
  </head>
  <body data-spy="scroll" data-target=".navbar-collapse">
    <div class = "navbar navbar-inverse navbar-fixed-top">
		<div class="container">
			<div class="navbar-header">
				  <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#example-navbar-collapse">
					<span class="icon-bar"></span>
					<span class="icon-bar"></span>
					<span class="icon-bar"></span>
				  </button>
	
				<a class="navbar-brand"><?php echo $usename ?></a>
			</div>
			<div class="collapse navbar-collapse" id="example-navbar-collapse">
				  <ul class="nav navbar-nav">
				    <li class="active"><a href="#midContainer">Home</a></li>
					<li><a href="#about">About</a></li>
					<li><a href="#footer">Enter the name and phone</a></li>
				  </ul>
				  <form class = "navbar-form navbar-right">
					<div class="form-group">
						<input type="text" id ="name" class="form-control" placeholder="enter your name" name ="email">
					</div>
					<div class = "form-group">
						<input type = "text" id= "phone" class = "form-control"  placeholder="enter your phone" name = "password">
					</div>
						<button onclick="ajaxCallExample();" type="button" class="btn btn-success" id="signin" >Log in</button>
				  </form>
				<div class="ajaxResponse"></div>	
			</div>
		</div>
	</div>
  </body>
</html>