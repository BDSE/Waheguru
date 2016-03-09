<?php
 String name = request.getParameter("name");
 String phone = request.getParameter("phone");

?>
		
<div>
Hello <%=name%>
your phone number is <%=phone%>
</div>

	// retrieve parameters from request.
	$name = $_GET['name'];
	$phone = $_GET['phone'];

 ?>

 <div>
 	welcome <?php echo $name ?> your phone is <?php echo $phone?>
 </div>


