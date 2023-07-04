document.getElementById('myForm').addEventListener('submit', function(event) {
	event.preventDefault();
	if (this.checkValidity()) {
		swal({
			title: "SweetAlert!",
			text: "¡Registro enviado!",
			icon: "success",
			button: "Aceptar"
		});
		console.log('El formulario es válido. Se puede enviar.');
		var publ = document.getElementById('image-input').Value
        console.log(publ);
		// Aquí puedes realizar las acciones necesarias, como enviar el formulario o ejecutar una función de guardado
	} else {
		console.log('Hay campos inválidos en el formulario. Corrígelos antes de enviar.');
	}
});


var listPublicaciones = [];
function cancelarPublicacion(){
    document.getElementById("myForm").reset();
}

function categorias(){
	const categorias = [
		"Digital",
		"Oleo",
		"Fotografía",
		"Abstracto",
		"Realismo",
		"Cubismo",
		"Surrealismo",
		"Neoplasticismo",
		"Futurismo",
		"Otros"
	  ];
	  
	  categorias.forEach(categoria => {
		const li = document.createElement('li');
		const a = document.createElement('a');
		a.textContent = categoria;
		a.onclick = function() {
			viewPublicacion(categoria); // Llama a tu función con el parámetro deseado
			
			// Remueve la clase "active" de todas las opciones
			const opciones = document.querySelectorAll('#listCat li a');
			opciones.forEach(opcion => opcion.classList.remove('active'));
			
			// Agrega la clase "active" a la opción seleccionada
			a.classList.add('active');
		  };
		li.appendChild(a);
		document.getElementById('listCat').appendChild(li);
	  });
}

categorias();

function viewPublicacion(categoria){
	console.log("Categoria seleccionada: " + categoria);
}
							