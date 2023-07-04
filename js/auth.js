
document.getElementById("register-link").addEventListener("click", function(e){
    e.preventDefault();
    document.getElementById("login-form").style.display = 'none';
    document.getElementById("registro-form").style.display = 'block';
});

document.getElementById("login-link").addEventListener("click", function(e){
    e.preventDefault();
    document.getElementById("registro-form").style.display = 'none';
    document.getElementById("login-form").style.display = 'block';
});




//////-----------------------------------------------------------------------////////

// function autenticarLogin(){
    const url = 'http://localhost/servidor/api-red-social/Usuario/auth.php';



    document.getElementById('myFormLogin').addEventListener('submit', function(event) {
        event.preventDefault();
        if (this.checkValidity()) {
            const correo = document.getElementById('correo').value;
            const contrasena = document.getElementById('contrasena').value;
          
            // Mostrar los datos en la consola
            console.log('Datos del formulario:');
            console.log('Username:', correo);
            console.log('Password:', contrasena);
            var data = {
                correo: correo,
                contrasena: contrasena
            }
            fetch(url, {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
              })
                .then(response => response.json())
                .then(result => {
                    if(result.status == 'success'){
                        swal({
                                        title: "SweetAlert!",
                                        text: "¡Registro enviado!",
                                        icon: "success",
                                        button: "Aceptar"
                                    });
                    }
                  console.log(result); // Mostrar la respuesta en la consola
                })
                .catch(error => {
                  console.error('Error:', error);
                });
                ///////////////////////////////
            // $.ajax({
            //     url: url,
            //     type: 'POST',
            //     data: data,
            //     dataType: 'json',
            //     success: function(response) {
            //         if(response.status == 'success'){
            //             swal({
            //                             title: "SweetAlert!",
            //                             text: "¡Registro enviado!",
            //                             icon: "success",
            //                             button: "Aceptar"
            //                         });
            //         }
            //       console.log(response); // Hacer algo con la respuesta
            //     },
            //     error: function(xhr, status, error) {
            //       console.error('Error en la petición:', error);
            //     }
            //   });
           
            console.log('El formulario es válido. Se puede enviar.');
            // Aquí puedes realizar las acciones necesarias, como enviar el formulario o ejecutar una función de guardado
        } else {
            console.log('Hay campos inválidos en el formulario. Corrígelos antes de enviar.');
        }
    });

// }