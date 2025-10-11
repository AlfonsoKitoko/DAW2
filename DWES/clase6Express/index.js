//npm init (para crear un package .json CON un cuestionario) -y (para evitarlo)
//para ejecutar y que actualice al guardar: node --watch index-js
//npm i -g nodemon

const express = require("express") // npm i express

const app = express()
const port = 3000
app.get("/contactos",(req,res)=>{
	res.send(`
		<ul><h1>Lista de contactos:</h1>
			<li>Pepe</li>
			<li>María</li>
			<li>Juan</li>
			<li>Sara</li>
		</ul>`)
})
app.get("/",(req,res)=>{
	res.send("<h1>INDEX</h1>")
})

//Parámetros en la ruta (req.params) --> :parámetro
//	/contactos/{id}
app.get("/contactos/:nombre/:apellido",(req,res)=>{
	console.log(req.params)
	const { nombre,apellido } = req.params
	res.send(`<h1>${nombre} ${apellido} !!!</h1>`)
})

//Recoger QueryString (req.query)
app.get("/search",(req,res)=>{
	//http://localhost:3000?=Algo que buscar
	const { q } = req.query
	if(q){
		res.send(`<h1>Resultados que contengan la palabra '${q}'...</h1>`)
	}else{
		res.send(`<h1>Debe introducir un parámetro de búsqueda válido</h1>`)
	}
})

//Levantar servidor
app.listen(port,()=>{
	console.log(`Escuchando en http://localhost:${port}`)
})