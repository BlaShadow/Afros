//Objeto HTTP Request
function getHTTPrequest(){

	 var xmlhttp=false;
	 
		try
		{
			xmlhttp=new ActiveXObject("Msxml2.XMLHTTP");
		}
		catch(e)
		{
			try
			{
				xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
			}
			catch(E) 
			{
				xmlhttp=false;
			}
		}
		
		if (!xmlhttp && typeof XMLHttpRequest!='undefined') {

			xmlhttp=new XMLHttpRequest(); 
		
		
		}

		return xmlhttp;

}

//Cargar Los pots Para news
function newsHome(){

	//Obtengo mi objeto httprequest
	http=getHTTPrequest();
	
	//abro una coneion asincronima via get
	http.open("GET","./engine/posts.php",true);
	
	//accedo al eventos que cuando te ready que realice esta funcion
	http.onreadystatechange = function(){
	
		//si el estado es 4 avanzara
		if(http.readyState==4){
			
			//si el status es 200 avanzara
			if(http.status==200){
			
				alert(http.responseXML);
			
			}
		
		}
	
	}
	//No enviara valores ya que se enviaran por get (via url)
	http.send(null);

}













