//Acción que ejecuta el agregar una nueva publicación
//-------------------------------------------------------------------------------------------//

//--------------------------------------------------------------------------------------------//
 //Función para cancelar el agregar un publicación
function cancelarPublicacion(){
    document.getElementById("myForm").reset();
}


//-----------------------------------------------------------------------------------------//
// Se ejecuta al seleccionar una opción de la categoria
function categorias() {
	const categorias = [
	  "Todos",
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
		// Obtener la referencia al elemento HTML
		var cardContainer = document.querySelector('.card-container');
  
		// Vaciar el contenido
		cardContainer.innerHTML = '';
  
		viewPublicacion(categoria); // Llama a tu función con el parámetro deseado
  
		// Remueve la clase "active" de todas las opciones
		const opciones = document.querySelectorAll('#listCat li a');
		opciones.forEach(opcion => opcion.classList.remove('active'));
  
		// Agrega la clase "active" a la opción seleccionada
		a.classList.add('active');
	  };
	  li.appendChild(a);
	  document.getElementById('listCat').appendChild(li);
  
	  // Verifica si es la opción "Todos" y la activa automáticamente
	  if (categoria === "Todos") {
		a.classList.add('active');
	  }
	});
  }
  
  //---------------------------------------------------------------------------------------//
  window.addEventListener('load', function() {
	// Obtén el dato del localStorage
	var data = JSON.parse(localStorage.getItem('token'));
	
	// Obtén el nombre y la imagen del objeto almacenado en el localStorage
	var nombre = data.nombre;
	var foto = data.foto;
  
	// Actualiza el texto del nombre y el atributo "src" de la imagen
	$('.user-name').text(nombre);
	$('#user-avatar').attr('src', foto);
  });
  
  //---------------------------------------------------------------------------------------//
 // Se ejecuté despues de cargar el DOM
  document.addEventListener('DOMContentLoaded', function() {
	categorias();
	viewPublicacion('Todos');
	// totalPublicaciones(); // Llamar a la función para mostrar el valor en HTML

  });
  var contador= 0;
  //--------------------------------------------------------//
  function viewPublicacion(categoria) {
	$('.card-container').empty();
  
	var baseUrl = 'http://localhost/servidor/api-red-social/Publicacion';
	var contadorPublicaciones = 0;
	var contadorLikes = 0;
	var contadorComentarios = 0;
  
	if (categoria == 'Todos') {
	  baseUrl += '/obtenerPublicaciones.php';
	} else {
	  baseUrl += `/getPublicacionesByCategoria.php?categoria=${categoria}`;
	  console.log(baseUrl);
	}
  
	fetch(baseUrl, {
	  method: 'GET',
	})
	  .then(response => response.json())
	  .then(resp => {
		console.log(resp.length);
		console.log(resp);
  
		var usuarios = resp.data.usuarios;
		var publicaciones = resp.data.publicaciones;
  
		contadorPublicaciones = publicaciones.length;
  
		// Se ejecuta la función y se muestra el total de publicaciones
		totalPublicaciones(contadorPublicaciones);
		
		usuarios.forEach((usuario, index) => {
		  const publicacion = publicaciones[index];
  
		  var card = document.createElement('div');
		  card.className = 'card mb-4';
  
		  var userContainer = document.createElement('div');
		  userContainer.className = 'card-header d-flex align-items-center';
  
		  var avatar = document.createElement('div');
		  avatar.className = 'avatar mr-2';
  
		  var avatarImg = document.createElement('img');
		  avatarImg.src = 'https://media.vandalsports.com/i/1200x1200/5-2023/2023530171357_1.jpg';
		  avatarImg.className = 'rounded-circle';
		  avatarImg.width = '50';
		  avatarImg.height = '50';
		  avatarImg.alt = '';
  
		  var userContent = document.createElement('div');
		  userContent.className = 'flex-grow-1';
  
		  var userName = document.createElement('div');
		  userName.className = 'font-weight-bold';
		  userName.textContent = 'Peter Parker';
  
		  var userFollowers = document.createElement('div');
		  userFollowers.className = 'text-muted';
		  userFollowers.textContent = '1238128 Seguidores';
  
		  var cardImg = document.createElement('img');
		  cardImg.className = 'card-img-top';
		  cardImg.src = publicacion.foto;
		  cardImg.alt = 'Photo empty';
  
		  var cardBody = document.createElement('div');
		  cardBody.className = 'card-body';
  
		  var cardTitle = document.createElement('h5');
		  cardTitle.className = 'card-title';
		  cardTitle.textContent = 'Categoria: ' + publicacion.categoria;
  
		  var cardText = document.createElement('p');
		  cardText.className = 'card-text';
		  cardText.textContent = publicacion.descripcion;
  
		  var cardDate = document.createElement('p');
		  cardDate.className = 'card-text';
		  var small = document.createElement('small');
		  small.className = 'text-muted';
		  small.textContent = publicacion.fecha;
		  cardDate.appendChild(small);
  
		  var cardIcons = document.createElement('div');
		  cardIcons.className = 'card-icons';
  
		  var likeIcon = document.createElement('i');
		  likeIcon.className = 'icon-copy dw dw-like1';
  
		  var commentIcon = document.createElement('i');
		  commentIcon.className = 'icon-copy dw dw-chat-21';
		  commentIcon.id = 'comment-icon';
  
		  var downloadIcon = document.createElement('i');
		  downloadIcon.className = 'icon-copy dw dw-download-1';
  
		  avatar.appendChild(avatarImg);
		  userContent.appendChild(userName);
		  userContent.appendChild(userFollowers);
		  userContainer.appendChild(avatar);
		  userContainer.appendChild(userContent);
		  cardBody.appendChild(cardTitle);
		  cardBody.appendChild(cardText);
		  cardBody.appendChild(cardDate);
		  cardIcons.appendChild(likeIcon);
		  cardIcons.appendChild(commentIcon);
		  cardIcons.appendChild(downloadIcon);
		 card.appendChild(userContainer);
		  card.appendChild(cardImg);
		  card.appendChild(cardBody);
		  card.appendChild(cardIcons);
		  $('.card-container').append(card);
		});
	  })
	  .catch(error => {
		console.error('Error:', error);
	  });
  }
  
  
  
  

  function totalPublicaciones(total) {
	var element = document.querySelector('.widget-data .font-24');
	console.log(contador, "total")
	if (element) {
	  element.textContent = total;
	}
  }
  

  

function newPublicacion(){
	const urlP = 'http://localhost/servidor/api-red-social/Publicacion/agregarPublicacion.php';
	var titulo = document.getElementById('titulo').value;
	var categoria = document.getElementById('categoria').value;
	// var foto = document.getElementById('foto').value;
	var descripcion = document.getElementById('descripcion').value;

	var input = document.getElementById('foto');
	var file = input.files[0];

	var formData = new FormData();
	formData.append('imagen', file);
	console.log("URL: ", formData);

		// Obtén el JSON del localStorage
	var jsonStr = localStorage.getItem('token');
	var json = JSON.parse(jsonStr);
	var fk_id_usuario = parseInt(json.id_usuario);

	var data = {
		titulo: titulo,
		categoria: categoria,
		foto: formData,
		descripcion: descripcion,
		fecha: Date.now,
		fk_id_usuario: fk_id_usuario
	}

	console.log("data: ",data);
	
	// fetch(urlP, {
	// 	method: 'POST',
	// 	headers: {
	// 	  'Content-Type': 'application/json'
	// 	},
	// 	body: JSON.stringify(data)
	//   })
	// 	.then(response => response.json())
	// 	.then(result => { 
		
	// 	  console.log(result); // Mostrar la respuesta en la consola
	// 	})
	// 	.catch(error => {
			
	// 	  console.error('Error:', error);
	// 	});
}
							
function actualizarContenido(){
	// viewPublicacion('Todos');
	alert ("Actualiza el contenido");
}


											