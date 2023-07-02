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

function cancelarPublicacion(){
    document.getElementById("myForm").reset();
}