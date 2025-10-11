/*
ACTIVIDAD JS - LLAMADA ASINCRONA A API REST
--------------------------------------------

DOCUMENTACION DE LA API DE STAR WARS

	https://swapi.dev/documentation


TAREAS:

Crea una función ASINCRONA, llamada "getStarWarsPeople" que realice lo siguiente:

	1 - La función tendrá un único parámetro de entrada llamado "name".

	2 - Se hará una petición inicial GET a "https://swapi.dev/api/people/" para devolver un listado de todos 
	los personajes de STAR WARS.

	3 - Se debe gestionar la devolución de la promesa (PROMISE) retornada. Si ha habido error, se debe mostrar
	por consola.

	4 - Si la promesa (PROMISE) ha sido correcta, se deben filtrar los resultados para obtener aquel personaje
	cuyo nombre (campo "name" del JSON de resultados) empieza por el valor del parámetro "name" de la función.

	5 - Si lo encuentra, se debe realizar una nueva invocación, tipo GET, a la URL devuelta por el valor
	del campo "homeworld" del JSON (es una URL del planeta donde vive).

	6 - Si la petición GET del planeta es correcta, se debe invocar a una nueva función ASINCRONA, que debes 
	crear (punto 7), llamada "GetPlanetInfo", donde debes pasarle todos los datos del personaje como parámetro
	en un objeto (datos del JSON devuelto --> "name","url","homeworld").

	7 - Crea la función ASINCRONA "GetPlanetInfo", que recibirá, como UNICO parámetro, un objeto "datosPersonaje"
	con los datos del personaje descritos en el punto 6. De esos datos, con ayuda del valor del campo "homeworld", 
	el cual almacena la URL del planeta donde vive el personaje, haremos una invocación GET a dicha URL.

	8 - Si la PROMESA es satisfactoria, al objeto, pasado por parámetro, le añadiremos más información: 
	nombre del planeta (campo "name" del JSON) y las urls de todos los residentes del planeta (array "residents"
	del JSON)

	9 - Como último cálculo, tendremos que ver cuántos "paisanos" tiene nuestro personaje dentro de su planeta.
	Para ello tendremos que FILTRAR el array de residentes con todas aquellas URL que sean distintas a la del
	personaje.

	10 - Por último, deberemos mostrar la salida por consola. Si el personaje no tiene "paisanos" deberemos indicarlo.

	Según el ejemplo de estas 3 llamadas (que están en el código de la invocación)    
	
		getStarWarsPeople("Obi-Wan");
		getStarWarsPeople("Darth");
		getStarWarsPeople("Leia");

	Las salidas deberían ser:

		El personaje Obi-Wan Kenobi vive en el planeta Stewjon como Han... Solo...
		El personaje Leia Organa vive en el planeta Alderaan con 2 paisanos
		El personaje Darth Vader vive en el planeta Tatooine con 9 paisanos

*/

// Función asíncrona para buscar personajes según su nombre
const getStarWarsPeople = async name => {
	// Petición GET a la API de Star Wars
	await axios.get("https://swapi.dev/api/people/")
	.then(respuesta => {
		// Se guardan todos los personajes en un array
		const personajes = respuesta.data.results
		// Muestra el primer personaje que coincide con el nombre dado
		const personaje = personajes.find(n => n.name.startsWith(name))
		// Llamada a la función del planeta
		getPlanetInfo(personaje)
	})
	// Muestra por consola el código de error
	.catch(error => console.log(error))
}
	// Función asíncrona para obtener la información sobre el planeta del personaje
	const getPlanetInfo = async datosPersonaje => {
		// Petición GET a la URL del homeworld del personaje
		await axios.get(datosPersonaje.homeworld)
		.then(respuesta => {
			// Añadimos al objeto datosPersonaje los nuevos datos del planeta
			datosPersonaje.name = datosPersonaje.name						// Nombre del personaje
			datosPersonaje.homeworld = datosPersonaje.homeworld	// URL del planeta
			datosPersonaje.planetName = respuesta.data.name			// Nombre del planeta
			datosPersonaje.residents = respuesta.data.residents	// Lista de URLs de los residentes del planeta
			
			// Filtra los residentes para eliminar el propio personaje
			const paisanosPlaneta = datosPersonaje.residents.filter(url => url !== datosPersonaje.url)
			// Se crea un nuevo objeto con los datos a mostrar
			personajeDatos = {
				nombre: datosPersonaje.name,				// Nombre del personaje
				planeta: datosPersonaje.planetName,	// Nombre del planeta
				paisanos: paisanosPlaneta.length		// Cantidad de paisanos del planeta
			}
			console.log(`El personaje ${personajeDatos.nombre} vive en el planeta ${personajeDatos.planeta} con ${personajeDatos.paisanos} paisanos`)
		})
		// Manejo de errores
		.catch(error => console.log(error))
	}

//LLAMADA - NO TOCAR!!!
const buscandoGenteStarWars = () => {
	getStarWarsPeople("Obi");
	getStarWarsPeople("Darth");
	getStarWarsPeople("Leia");
}

buscandoGenteStarWars();