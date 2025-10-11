//CALL STACK (Pila de llamadas en JS)
//JS es SINGLE-THREAD
//JS Solo tiene un hilo de ejecución. NO es Multihilo

const multiplicacion = (x,y) => x*y
const calcularCuadrado = num => multiplicacion(num,num)
const esRectanguloRecto = (a,b,c) => calcularCuadrado(a)+calcularCuadrado(b)==calcularCuadrado(c)

console.log(esRectanguloRecto(3,4,5))
console.log(esRectanguloRecto(5,1,5))

console.log("Primero")
setTimeout(()=> console.log("Segundo"),300)
setInterval
console.log("Tercero")

//AJAX --> Asynchronous JS and XML
//AJAJ --> Asynchronous JS and JSON
//REQUEST --> Petición
//XMLHttpRequest --> NO soporta PROMISES... Peticiones SOAP(XML)
//FETCH --> Soporta PROMISES --> Nativo JS ES6 -- Trabaja con XML y JSON (API Restful)
//AXIOS --> Soporta PROMISES --> Librería Externa que trabaja directamente con objeto "data", que es JSON
const url = "http://api.tvmaze.com/search/shows?q="

//fetch() es una función callback de nativa de JS ES6. Devuelve texto plano, los resultados obtenidos de una url, mediante PROMISE (resolve o reject)
const consultaPeliSerie = async nombre => 
	await fetch(url+nombre)
		//Resolve
		.then(data => {
			console.log("RESOLVE")
			return data.json()
		})
		//Resolve
		.then(jsonData => {console.log(jsonData)})
		//Reject
		.catch(error => {console.log("Reject"); console.log(error)})
		
consultaPeliSerie("South Park")

const consultaPeliSerieAxios=async nombre =>
	await axios.get(url+nombre)//Resolve
		.then(data => {
			console.log("RESOLVE")
			console.log(data.data)
		})
		//Reject
		.catch(error => {console.log("Reject"); console.log(error)})

consultaPeliSerieAxios("Torrente")