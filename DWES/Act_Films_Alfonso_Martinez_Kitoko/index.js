const films = require("./films.json")
const express = require("express")
const app = express()
const port = 5202	//Puerto para la conexión
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
	const film = Object.values(films).filter(f => 
		f.Title.toLowerCase().includes(q.toLowerCase())
	)
	if(film.length>0) return res.render("search.ejs",{film, q})
})

// default
app.use(/.*/,(req,res)=>{
	const { busqueda } = req.params
	res.send(`<h1>PELÍCULA '${busqueda}' NO ENCONTRADA</h1>`)})
//-----------------
app.listen(port,()=>console.log(`http://localhost:${port}`))