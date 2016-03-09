<!--  
This an example where the w3school's web service is being call. FahrenheitToCelsius is a web method inside
the web service tempconvert.asmx.
-->
<html>
	<head>
	</head>
	<body>
		<form action='http://www.w3schools.com/webservices/tempconvert.asmx/FahrenheitToCelsius'
					  method="post" target="_blank">
			<table>
				<tr>
					<td>Fahrenheit to Celsius:</td>
					<td>
						<input class="frmInput" type="text" size="30" name="Fahrenheit">
					</td>
				</tr>
				<tr>
					<td></td>
					<td align="right">
						<input type="submit" value="Submit" class="button">
					</td>
				</tr>
			</table>
		</form>

		<form action='http://www.w3schools.com/webservices/tempconvert.asmx/CelsiusToFahrenheit'
		method="post" target="_blank">
			<table>
				<tr>
					<td>Celsius to Fahrenheit:</td>
					<td>
						<input class="frmInput" type="text" size="30" name="Celsius">
					</td>
				</tr>
				<tr>
					<td></td>
					<td align="right">
						<input type="submit" value="Submit" class="button">
					</td>
				</tr>
			</table>
		</form>
		
	</body>
</html>
