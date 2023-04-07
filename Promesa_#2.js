// Pokemon Clefairy: se consulta la API de Pokemon y se obtiene la información de la ubicación de Clefairy en los videojuegos. 

// fectch es una interfaz que permite realizar solicitudes de servidor con promesas.
fetch('https://pokeapi.co/api/v2/location/35/')
      .then(response => response.json())
      .then(json => console.log(json))
        .catch(error => console.log(error))

console.log("El recurso se ya fue solicitado")