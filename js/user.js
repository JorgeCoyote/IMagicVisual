function users() {
    var baseUrl = 'http://localhost/servidor/api-red-social/Usuario/obtenerUsuarios.php';
  
    fetch(baseUrl, {
      method: 'GET',
    })
      .then(response => response.json())
      .then(resp => {
        console.log(resp.length);
        console.log(resp);
        const data = resp[0].data;
        console.log(data);
  
        const lista = document.getElementById("tuLista");
        const searchInput = document.getElementById("searchInput");
  
        function renderLista(data) {
          lista.innerHTML = '';
  
          data.forEach((dato) => {
            const li = document.createElement("li");
            li.className = "list-group-item d-flex align-items-center";
  
            const divAvatar = document.createElement("div");
            divAvatar.className = "avatar mr-2 flex-shrink-0";
  
            const img = document.createElement("img");
            img.src = dato.imagenSrc;
            img.className = "border-radius-100 box-shadow";
            img.width = 50;
            img.height = 50;
            img.alt = "";
  
            const divFlexGrow = document.createElement("div");
            divFlexGrow.className = "flex-grow-1";
  
            const divNombre = document.createElement("div");
            divNombre.className = "font-14 weight-600";
            divNombre.textContent = dato.nombre;
  
            const divSeguidores = document.createElement("div");
            divSeguidores.className = "font-12 weight-500";
            divSeguidores.textContent = "seguidores";
  
            const divCta = document.createElement("div");
            divCta.className = "cta flex-shrink-0";
  
            const enlace = document.createElement("a");
            enlace.href = "#";
            enlace.className = "btn btn-sm btn-primary text-white";
            enlace.textContent = "Seguir";
  
            divAvatar.appendChild(img);
            divFlexGrow.appendChild(divNombre);
            divFlexGrow.appendChild(divSeguidores);
            divCta.appendChild(enlace);
  
            li.appendChild(divAvatar);
            li.appendChild(divFlexGrow);
            li.appendChild(divCta);
  
            lista.appendChild(li);
          });
        }
  
        renderLista(data);
  
        searchInput.addEventListener("input", () => {
          const searchTerm = searchInput.value.toLowerCase();
          const datosFiltrados = data.filter(dato => dato.nombre.toLowerCase().includes(searchTerm));
          renderLista(datosFiltrados);
        });
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }
  
  users();
  