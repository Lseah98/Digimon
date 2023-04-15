// Obtener el elemento select del DOM
const selectElement = document.getElementById("selectDigimon");

// Obtener datos de la API
fetch("https://digimon-api.vercel.app/api/digimon")
  .then(response => response.json())
  .then(data => {
    // Recorrer el array de posiciones obtenido de la API
    data.forEach(posicion => {
        const nombre = posicion.name;
      // Crear una opción para cada posición
      const opcion = document.createElement("option");
      opcion.text = nombre;
      opcion.value = nombre;
      // Agregar la opción al select
      selectElement.add(opcion);
      // Agregar un evento change al elemento select
selectElement.addEventListener("change", event => {
    // Obtener el objeto seleccionado del array
    const posicionSeleccionada = data.find(posicion => posicion.name === event.target.value);
    if (posicionSeleccionada) {
      // Obtener los valores de las propiedades 'name', 'img' y 'level' del objeto seleccionado
      const nombre = posicionSeleccionada.name;
      const img = posicionSeleccionada.img;
      const level = posicionSeleccionada.level;
      // Asignar los valores obtenidos del array a los elementos en el HTML
      console.log("Nombre:", nombre);
      console.log("Imagen:", img);
      console.log("Nivel:", level);
      let nombreDigimon = document.getElementById('nombreDigimon');
      nombreDigimon.innerHTML = nombre;
      let nivelDigimon = document.getElementById('nivelDigimon');
      nivelDigimon.innerHTML = `Nivel: ${level}`;
      let imgDigimon = document.getElementById('imgDigimon');
      imgDigimon.src = img;
    }
  });
    });
  })

  .catch(error => console.error("Error al obtener datos de la API:", error));
  