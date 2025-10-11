console.log("hola".toUpperCase())
String.prototype.toUpperCase = ()=>"Lo siento. No furula"
console.log("hola".toUpperCase())

String.prototype.holaTodos = function(){
	return "¡Hola a todos!"
}
console.log("".holaTodos())

//Los objetos son tratados como funciones en JS
console.log(String)

// Array.prototype.pop = function(){return `la longitud del array es de ${this.length}`}
const num=[6,7,8,9]
console.log(num)
console.log(num.pop())
console.log(num)

//Distintas formas de crear objetos en JS
//1 - Constantes (const) y Variables (let)
const equipo ={
	nombre: "Villena CF",
	ano: 1920,
	diasActivo:function(){return ""}
}
equipo.estadio = "La Solana"
console.log(equipo)

//2 - Factory Function - Necesita de un objeto a retornar SIEMPRE (siempre tendrá un return)
function crearColor(r,g,b){
	//Parecido a un constructor parametrizado
	const color={}
	color.r = r
	color.g = g
	color.b = b

	color.imprimirColor = function(){
		console.log(`rgb(${this.r},${this.g},${this.b})`)
	}
	//Siempre tiene un RETURN
	return color
}
let red = crearColor(255,0,0)
let green = crearColor(0,255,0)
let blue = crearColor(0,0,255)
let yellow = crearColor(255,255,0)
let cyan = crearColor(0,255,255)
let magenta = crearColor(255,0,255)
red.imprimirColor()
green.imprimirColor()
blue.imprimirColor()
yellow.imprimirColor()
cyan.imprimirColor()
magenta.imprimirColor()

//3 - Función Constructor - No implica el retorno de objeto. Se puede modificar a partir del 'prototype'. Para crear objetos se usa NEW
function colorNuevo(r,g,b){
	this.r = r
	this.g = g
	this.b = b

	this.imprimirColor = function(){
		console.log(`RGB(${this.r},${this.g},${this.b})`)
	}
	//No requiere de RETURN
}
//Utilizamos NEW para crear los objetos
let colorRed = new colorNuevo(255,0,0)
let colorGreen = new colorNuevo(0,255,0)
let colorBlue = new colorNuevo(0,0,255)
colorRed.imprimirColor()
colorGreen.imprimirColor()
colorBlue.imprimirColor()
console.log(colorNuevo)

colorNuevo.prototype.imprimirColor2 = () => console.log("Pues no hay color")
colorRed.imprimirColor2()

//4 - Programación orientada a objetos JS
class Animal{
	//Constructores
	//Atributos
	constructor(nombre,edad){
		this.nombre = nombre
		this.edad = edad
	}
	//Métodos
	dormir(){
		return `El animal ${this.nombre} está durmiendo`
	}
	comer(){
		return `El animal ${this.nombre} está comiendo`
	}
	hacerSonido(){
		return `El animal ${this.nombre} está sonando`
	}
}
const a1 = new Animal("Buitre",10)
console.log(a1.comer())
console.log(a1.dormir())
console.log(a1.hacerSonido())

class Perro extends Animal {	//Herencia de clases
	constructor(nombre,edad,raza,edadMedia=13){
		super(nombre,edad)	//Llamada al constructor padre
		this.raza=raza
		this.edadMedia=edadMedia
	}
	//Sobrecarga de funciones - Polimorfismo
	hacerSonido(){
		return `${this.nombre} está ladrando!!`
	}
}

const laika = new Perro("Laika",7,"Mestiza")
console.log(laika.comer())
console.log(laika.dormir())
console.log(laika.hacerSonido())