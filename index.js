document.getElementById("consultaCidade").onclick = function(){

	let cidade = document.getElementById("cidade").value;
	    
	  fetch('https://api.hgbrasil.com/weather?format=json-cors&key=75b6f5e3&city_name='+cidade)

	  .then(resposta => resposta.json())
	  .then(resposta => tempoDaCidade(resposta))
	  .catch(erro => console.error(erro));
	  
	 
	  function tempoDaCidade(dados){
		let resultado = document.querySelector('#resultado');
		if(dados.erro){
			resultado.innerHTML = "<br>Não foi possível localizar o endereço!";
		}
		else{
		resultado.innerHTML =
		 `
		 <br>
		 Cidade: ${dados.results.city}
		 <br>
		 Situação Atual: ${dados.results.description}
		 <br>
		 Temperatura Atual: ${dados.results.temp}ºC
		 <br>
		 Temperatura Máxima: ${dados.results.forecast[0].max}ºC
		 <br>
		 Temperatura Mínima: ${dados.results.forecast[0].min}ºC
		`
		}
	  }
	}
