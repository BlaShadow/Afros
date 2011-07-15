<?php

	class conexion{
	
		public function conexion(){
		
			mysql_coonnect("localhost","root","");
			mysql_seleyc_db("peluqueria");
		
		}
		
		
		public function closeConexion(){
		
			mysql_close();
		
		}
	
	}

?>