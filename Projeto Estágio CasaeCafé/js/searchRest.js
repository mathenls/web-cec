jQuery(document).ready(function($) {
	
	$("#submitId").click(function(event) {
		var IdContratante = $("#ID").val();
		if(IdContratante == ""){
			alert("Por favor, preencha com o ID do contratante");
			event.preventDefault();
		}

		$.ajaxSetup({
		async: false
		});
		
		var url = "http://ec2-35-164-139-210.us-west-2.compute.amazonaws.com/hirers/" + IdContratante + "/opportunities";

		$.getJSON(url,function(json){
  				alert("Vagas abertas para o contratante " + IdContratante + ": " + json.length);
		});
	});
});






