// Obtén el dato del localStorage
var dato = localStorage.getItem('token');

// Verifica si el dato existe
if (dato) {
    var json = JSON.parse(jsonStr);

  // Accede a la propiedad "nombre"
  var nombre = json.nombre;
console.log(nombre);
  // Muestra el dato dentro del span
  document.getElementById('user').textContent = nombre;
} else {
  // El dato no está almacenado en el localStorage
  console.log('El dato no está disponible');
}


