jQuery(document).ready(function($) {
	
	$("#submitId").click(function(event) 
	{
		var IdContratante = $("#ID").val();
		
		if(IdContratante == "")
		{
			alert("Por favor, preencha com o ID do contratante");
			event.preventDefault();
		}

		//Ajax wasn't returning properly when this property was set to true
		$.ajaxSetup(
		{
		async: false
		});
		
		//URL with the ID parameter to make the GET request from the service
		var url = "http://ec2-35-164-139-210.us-west-2.compute.amazonaws.com/hirers/" + IdContratante + "/opportunities";

		//Ajax call using .getJSON, to receive the json from the REST WebService
		//To count how many job opportunities, the only thing needed is the length property of the json object returned 

		$.getJSON(url, function(json)
		{
				if (json.length>0)
  						alert("Vagas abertas para o contratante " + IdContratante + ": " + json.length);
  				else 
  						alert("Nenhuma vaga ou contratante inexistente");
		});
	});
});






