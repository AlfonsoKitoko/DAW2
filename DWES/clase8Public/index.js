const datos = require("./data.json")
const fs = require("fs").promises //No requiere instalación, agregar promises
const express = require("express")	//npm i express
const app = express()
const port = 3000
const path = require("path")	//npm i path
app.set("view_engine","ejs")	//npm i ejs
app.set("views", path.join(__dirname,"views"))	//Agrega el directorio "views" al servidor
app.use(express.static(path.join(__dirname,"public")))	//Agrega el directorio "public" (contenido estático) al servidor

let contactos = ['Manolo','María','Paco','Yolanda']
//-----------------

// app.get("/",(req,res)=>{})
app.get("/",(req,res)=>{
	const nombre = req.query.nombre
	res.render("home.ejs",{titulo:nombre})
})

app.get("/contactos",(req,res)=>{
	res.render("contact.ejs",{contactos})
})

app.get("/random",(req,res)=>{
	const rando=parseInt(Math.random()*100)+1
	res.render("random.ejs",{rando})
})

app.get("/blog/:nombre",(req,res)=>{
	const { nombre } = req.params
	const post = datos[nombre]	//Extrae el objeto cuyo nombre ha pasado como parámetro
	if(post){	//Si existe
		res.render("blog.ejs",{blog:post})
	} else {
		res.send(`<h1>Error cargando el blog para la entrada (post) ${nombre}</h1>`)
	}
})

app.post("/contactos",(req,res)=>{
	const {c,d} = req.query	//Create, Delete
	if(d==1){
		contactos.pop()
		res.send("<h1>Último contacto eliminado</h1>")
	} else {
		contactos.push(c)
		res.send(`<h1>Contacto ${c} añadido</h1>`)
	}
})

app.get("/about",(req,res)=>{
	fs.readFile("./public/about.html")
		.then((data)=>{
			res.setHeader("Content-Type","text/html")
			res.writeHead(200)	//OK - Success
			res.end(data)
		})
		.catch((error)=>res.send(`<h1>Error. Des ${error}</h1>`))
})

 //Ruta por defecto (/.*/)
app.get(/.*/,(req,res)=>{
	//ACCESO PROHIBIDO AL DOM
	//document.getElementById("loquesea")
	res.send("<h1>ERROR 404 Cagaste</h1>")
	}) 

//Levantar el servidor
app.listen(port,()=>console.log(`http://localhost:${port}`))