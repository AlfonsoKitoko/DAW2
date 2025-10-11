const mates = require("./mates")
//npm (Node Package Module)
//para instalar npm i modulo1 modulo2

const figlet = require("figlet")
const colores = require("colors")

console.log(mates.s(10,4))
console.log(mates.c(5))

figlet("Hola a todos",(error,datos)=>{
	if(error)
		console.log(error)
	else
		console.log(datos.trap)
})