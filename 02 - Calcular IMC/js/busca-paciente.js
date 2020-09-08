var buscaPaciente = document.querySelector("#buscar-paciente")

buscaPaciente.addEventListener("click", function(){ 
	console.log("Buscando...")

	var xhr = new XMLHttpRequest();

	xhr.open("GET", "http://api-pacientes.herokuapp.com/pacientes");

	xhr.addEventListener("load", function(){

		var erroAjax = document.querySelector("#erro-ajax");
		if(xhr.status == 200){
			erroAjax.classList.add("invisivel");
			console.log("ok!")
			var resposta = xhr.responseText;
			var pacientes = JSON.parse(resposta);
			
			pacientes.forEach(function(paciente){ 
				adicionaPacienteNaTabela(paciente);
			});
		}else{
			console.log(xhr.status);
			console.log(xhr.responseText);
			erroAjax.classList.remove("invisivel")

		}
	});

	xhr.send();
});
