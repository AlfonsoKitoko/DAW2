const express = require("express")
const app = express()
const port = 3000
const path = require("path")	//npm i path
app.set("view_engine","ejs")	//npm i ejs
app.set("views", path.join(__dirname,"views"))

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

/* //Ruta por defecto (*)
app.get("*",(req,res)=>{
	res.send("<h1>ERROR 404 Cagaste</h1>")
}) */

//Levantar el servidor
app.listen(port,()=>console.log(`http://localhost:${port}`))