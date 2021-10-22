function cargar() {
	
	var request = new XMLHttpRequest();

	request.open('GET', 'http://demo2919080.mockable.io/puntos', true);
	request.onload = function() {
		if(request.readyState === 4) {
			if(request.status === 200) {
				var json = JSON.parse(request.responseText);
				const tabla = document.getElementById("tabla");

				for(let i in json) {
					console.log(json[i].tipo_de_residuos);

					const tr = document.createElement("tr");

					const tdDireccion = document.createElement("td");
					tdDireccion.textContent = json[i].direccion;
					tr.appendChild(tdDireccion);

					const tdTipo = document.createElement("td");
					tdTipo.textContent = json[i].tipo_de_residuos;
					tr.appendChild(tdTipo);

					const tdRazon = document.createElement("td");
					tdRazon.textContent = json[i].raz_n_social;
					tr.appendChild(tdRazon);

					tabla.appendChild(tr);

				}
			}
		}
	}
	request.send();

}


document.getElementById('boton').onclick = cargar;

