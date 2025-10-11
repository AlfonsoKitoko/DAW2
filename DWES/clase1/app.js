//ECMAScript 6 (ES6)
let a = 7
let nombre="Alfonso"
let apellido='Kitoko'
console.log(a)
console.log(nombre)
console.log("apellido: "+apellido);

console.log(`Hola, mi nombre es ${nombre} ${apellido}`)
let nombreCompleto = "Alfonso Martínez Kitoko"
let n = nombre.split(" ")[0]
let ap1 = nombre.split(" ")[1]
let ap2 = nombre.split(" ")[2]

let producto="ps5"
let precio=799.99598
let cantidad=5
//He comprado 5 ps5 por (precio*5)
console.log(`He comprado ${cantidad} ${producto} por ${(precio*cantidad).toFixed(2)} €`)


let div = 0/0
console.log(div)	//NaN (Not a Number)
if(isNaN(div)){
	console.log("Error al dividir por 0")
} else {
	console.log("OK")
}

//null vs undefined
let user
console.log(user)		//undefined

if (user==undefined){
	console.log("Variable no definida")
} else{
	console.log("OK")
}

let userLogueado = null
if(userLogueado==null){
	console.log("Abre pantalla de login")
	//Simularía proceso de login
} else{
	console.log(`Bienvenido ${userLogueado}`)
}

if(!userLogueado){		//equivalente a userLogueado==null || userLogueado==undefined
	console.log("Abre pantalla de login")
	//Simularía proceso de login
} else{
	console.log(`Bienvenido ${userLogueado}`)
}

if(userLogueado){		//equivalente a userLogueado!=null || userLogueado!=undefined
	console.log("Abre pantalla de login")
	//Simularía proceso de login
} else{
	console.log(`Bienvenido ${userLogueado}`)
}

/* let num = prompt("Introduce número:")
console.log(num)
console.log(parseInt(num))
console.log(parseFloat(num)) */
/* let cond = false
do{
	let num = prompt("Introduce número:")
	if(isNaN(parseInt(num)))
		console.log("Introduce número válido")
	else{
		console.log(`Tu número es ${parseInt(num)}`)
		cond = true
	}
} while(!cond) */

let aa = 2
let bb = '2'

if(aa==bb){	//compara SÓLO el valor
	console.log("Iguales")
} else{
	console.log("Distintos")
}

if(aa===bb){	//compara el valor y el tipo
	console.log("Iguales")
} else{
	console.log("Distintos")
}
console.log(aa)
let cc=3
//aa=cc
if(aa=cc){	//Tçipico error (utilizar la asignación como comparación)
	console.log("Iguales")
} else{
	console.log("Distintos")
}
console.log(aa)

let puntuacion=7
if(puntuacion<5){
	console.log("INSUFICIENTE")
} else if(puntuacion>=5 && puntuacion<=8){
	console.log("NOTABLE")
} else{
	console.log("SOBRESALIENTE")
}

//condición AND (aa==bb && aa==cc)
//cond OR (aa==bb || aa==cc)
//NOR (!=)

switch(puntuacion){
	case 0:
	case 1:
	case 2:
	case 3:
	case 4:
		console.log("INSUFICIENTE")
		break;
	case 5:
		console.log("SUFICIENTE")
		break;
	case 6:
		console.log("BIEN")
		break;
	case 7:
	case 8:
		console.log("NOTABLE")
		break;
	case 9:
	default:
		console.log("SOBRESALIENTE")
}

//ARRAYS...
let array1 = []
console.log(array1)
let colores = ["rojo","verde","azul"]
console.log(colores)
console.log(colores[1])
let numeros= [19,1,77,22,39]
console.log(numeros)
console.log(numeros[2])
let varios = ["rojo",19,true,false,77.44,'verde']
console.log(varios)
varios.push("Manolito")	//Eq java: ArrayList.add("Manolito")
console.log(varios)
varios.unshift("Rachel")	//Añade al principio del array
console.log(varios)
varios.pop()	//Elimina el último del array
console.log(varios)
varios.shift()	//Elimina el primero del array
console.log(varios)

console.log(numeros.sort())
console.log(varios.sort())

//MATRICES...
const tablero = [
	[1,2,3],
	[4,5,6],
	[7,8,9]
]
console.log(tablero)
console.log(tablero[2])
console.log(tablero[1][2])
tablero[1][2] = 36
console.log(tablero)
tablero[3] = [10,11,12]
//tablero = //no se puede hacer, por ser asignación CONST
tablero[0][1] = "Manolito"
console.log(tablero)

let arr = [1,2,3]
console.log(arr)
arr = [333,222,111]
console.log(arr)

const equipos = ["Barcelona","Madrid","Betis"]
console.log(equipos.length) //propiedad, no función
console.log(equipos[2])
const equipos2 = new Array(3)
console.log(equipos2)
equipos2[1] = "Caudetano"
console.log(equipos2)

//OBJETOS JSON (JavaScript Object Notation)
const equipoFutbol = {
	nombre:"Sevilla CF",
	ciudad:"Sevilla(España",
	anyoFundacion:1900,
	esPrimera:true,
	presupuesto:15500000.79,
	jugadores:[
		{
			nombreJugador:"Navas",
			edad:35
		},
		{
			nombreJugador:"Romeu",
			edad:20
		}
	],
	palmares:{
		ligas:7,
		copas:10,
		UEFAs:12,
		champions:null
	}
}
console.log(equipoFutbol)
console.log(equipoFutbol.ciudad)
console.log(equipoFutbol.jugadores)
console.log(equipoFutbol.jugadores[1])
console.log(equipoFutbol.jugadores[1].nombreJugador)
console.log(equipoFutbol.palmares)
equipoFutbol.palmares.UEFAs++
console.log(equipoFutbol.palmares)

const equiposPrimera = [
	{
		nombre:"Real Madrid CF",
		champions:15,
		jugadores:["Vinicius","Mbappe","Bellingham"]
	},
	{
		nombre:"FC Barcelona",
		champions:5,
		estadio:{
			nombre:"Johan Cryuf",
			aforo:5000
		}
	},
	{
		nombre:"Atlético de Madrid",
		champions:0
	}
]

console.log(equiposPrimera)

for(let i=0;i<equiposPrimera.length;i++){
	console.log(equiposPrimera[i])
}

equiposPrimera[2].estadio={
	nombre:"Metropolitano",
	aforo:60000
}

console.log("FOR EACH");
for(let equipo of equiposPrimera){
	//console.log(equipo)
	//console.log(equipo.jugadores)
	if(equipo.estadio)
		console.log(equipo.estadio.nombre)
	if(equipo.jugadores){
		console.log(equipo.jugadores)
		for(let jugador of equipo.jugadores)
			console.log(jugador)
	}
}
/* equiposPrimera.forEach(element => {
	console.log(element)
}); */

for(let fila of tablero){
	for(let dato of fila){
		console.log(dato)
	}
}