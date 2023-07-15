

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
//////////////////////////


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
                      console.log("Respuesta auth: ", result);
                        localStorage.setItem('token',JSON.stringify(result));
                        window.location.href = 'index.html';
                        
                        console.log(localStorage.getItem('token'));
                        Swal.fire({
                          position: 'top-end',
                          icon: 'success',
                          title: 'Sesión iniciada correctamente',
                          showConfirmButton: false,
                          timer: 1200
                        })
                    }
                    else{
                        document.getElementById("myFormLogin").reset();
                        swal({
                           position: 'center',
                          icon: 'success',
                          title: 'Error al iniciar sesión!',
                          showConfirmButton: false,
                          timer: 1200
                            // button: "Aceptar"
                        });
                    }
                  console.log(result); // Mostrar la respuesta en la consola
                })
                .catch(error => {
                    document.getElementById("myFormLogin").reset();
                  console.error('Error:', error);
                });
            
       
        } else {
            document.getElementById("myFormLogin").reset();
            console.log('Hay campos inválidos en el formulario. Corrígelos antes de enviar.');
        }
    });

// }

function registerUser(){
    const url = 'http://localhost/servidor/api-red-social/Usuario/agregarUsuario.php';

    const nombre = document.getElementById('nombreR').value;
    const correo = document.getElementById('correoR').value;
    const contrasena = document.getElementById('contrasenaR').value;

    var data = {
        nombre: nombre,
        correo: correo,
        contrasena: contrasena,
        fecha: Date.now
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
                                text: "¡Registro exitoso!",
                                icon: "success",
                                // button: "Aceptar"
                            });
            }
            else{
                console.log(result);
                // document.getElementById("myFormLogin").reset();
                swal({
                    title: "SweetAlert!",
                    text: "¡No se pudo registrar!",
                    icon: "danger",
                    // button: "Aceptar"
                });
            }
          console.log(result); // Mostrar la respuesta en la consola
        })
        .catch(error => {
           
          console.error('Error:', error);
        });
}

function logout(){
    var logoutLink = document.getElementById('logout-link');

    // Asigna el evento onclick para cerrar sesión
    // logoutLink.onclick = function() {
      // Realiza las acciones necesarias para cerrar sesión, como eliminar los datos del localStorage
      localStorage.removeItem('token');
    if(localStorage.getItem('token') == null)
         window.location.href = 'login.html'; 
      // Redirige al usuario a otra página
     // Reemplaza 'login.html' con la URL de la página de inicio de sesión
    // };
}

