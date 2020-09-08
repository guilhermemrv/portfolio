
document.getElementById("adiciona-horario").onclick = function(event){
	event.preventDefault();
	console.log("Fui clicado!");
    console.log("Cliente escolheu: " + diaSemana.options[diaSemana.selectedIndex].text + 
    " pela "+ turnoDia.options[turnoDia.selectedIndex].text);

	var nome = document.querySelector("#form-adiciona")
	var cliente = obtemClienteDoFormulario(nome);

	var diaEscolhido = diaSemana.options[diaSemana.selectedIndex].value;
	var turnoEscolhido = turnoDia.options[turnoDia.selectedIndex].value;

	var soma = turnoEscolhido.concat(diaEscolhido);

	var item = document.getElementById(soma);

	item.textContent = cliente.nome;

	nome.reset();
}


function obtemClienteDoFormulario(form){

	var cliente = {
		nome: form.nomeCliente.value
	}
	return cliente;
}


