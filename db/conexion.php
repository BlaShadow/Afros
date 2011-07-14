<?php

	class conexion{
	
		public function conexion(){
		
			mysql_coonnect("localhost","root","");
		
		}
		
		
		public function closeConexion(){
		
			mysql_close();
		
		}
	
	}

?>