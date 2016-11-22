jQuery(document).ready(function($) {
	$("#submitId").click(function(event) {
		var IdContratante = $("#ID").val();
		if(IdContratante == ""){
			alert("Por favor, preencha com o Id do contratante");
			event.preventDefault();
		}

		$.ajaxSetup({
		async: false
		});
		
		$.getJSON("http://ec2-35-164-139-210.us-west-2.compute.amazonaws.com/hirers/" + IdContratante + "/opportunities",function(json){
  		alert("Vagas abertas para o contratante " + IdContratante + ": " + json.length);
		});
	
	});
});






