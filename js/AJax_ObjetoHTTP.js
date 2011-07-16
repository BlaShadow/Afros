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

	http=getHTTPrequest();
	
	http.open("GET","./engine/posts.php",true);
	
	http.onreadystatechange = function(){
	alert(http.status);
		if(http.readyState==4){
		
			if(http.status==200){
			
				alert(http.responseText);
			
			}
		
		}
	
	}
	
	
	http.send(null);

}













