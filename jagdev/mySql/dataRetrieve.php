<?php
$link = mysqli_connect("localhost");
if(mysqli_connect_error()){
	die("could not connect to database");
}
// $query ="INSERT INTO `test`.`users`(`name`,`email`,`password`) VALUES('Amar','amarfate@yahoo.com','1234')";
$query = "UPDATE `test`.`users` SET `name` = 'amarfatehJatt' WHERE `id`=9 ";
mysqli_query($link,$query);

$query = "SELECT `name` FROM test.users";
if($result = mysqli_query($link,$query)){
	while($row = mysqli_fetch_array($result)){
	print_r($row);
	}
}
else{
	echo"it failed";
}
echo $_SESSION['loginId'];

?>