const films = require("./films.json")
const express = require("express")
const app = express()
const port = 3000
const path = require("path")
app.set("view_engine","ejs")
app.set("views",path.join(__dirname,"views"))
app.use(express.static(path.join(__dirname,"public")))

//----------------- 
//app.get("/",(req,res)=>{})
// googlemovies.ejs
app.get("/",(req,res)=>{
	res.render("googlemovies.ejs")
})
// search.ejs
app.get("/search",(req,res)=>{
	const { q } = req.query
	const film = films[q]
	if(film) 
		res.render("search.ejs",{film})
})

// default
app.get(/.*/,(req,res)=>{
	const { busqueda } = req.params
	res.send(`<h1>PELÍCULA '${busqueda}' NO ENCONTRADA</h1>`)})
//-----------------
app.listen(port,()=>console.log(`http://localhost:${port}`))