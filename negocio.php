<?php

require_once("db/conexion.php");

?>
<html>

<head>

	<title>Peluquerias</title>
	
	<link rel="stylesheet" type="text/css" href="css/styleNegocio.css" media="screen">
	
</head>

<body>

	<div id="page">
		
		<div id="header">
		
		
		</div>
		
		<div id="menu">
		
				<a href="index.html"><div class="item">Inicio</div></a>
				<a href="mapa.html"><div class="item">Mapa</div></a>
				<a href="negocio.php"><div class="item">Negocio</div></a>
		
		<div style="clear:both"></div>
		
		</div>
		
		<div id="bodyNegocio">
		
			<div id="login" align="center">
			
			<form>
			
				User:<br>
				<input type="text">
				Password:<br>
				<input type="text">
				
				<input type="submit" value="Login">
			
			</form>
			
			</div>
		
		</div>
		
		<div id="footer"></div>
		
	</div>
	
</body>

</html>