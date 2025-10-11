//1 - Función DECLARACIÓN - Se puede llamar antes y después de su declaración

function sumar(a,b){
	let suma=a+b
	console.log(suma)

	//cualquier function da un return undefined por defecto
	return suma
}
sumar(15,2)
console.log(sumar(3,4))

const saludando= saludar("Miguel","Sánchez")
console.log(saludando)
function saludar(nom,ap){
	return `Hola ${nom} ${ap}`
}
console.log(saludar("Johnny","Walker"))

//Ámbitos (Scope)
let nombre = "Mike" //Ámbito GLOBAL
function saludarMike(){
	let nombre = "Paco"	//Ámbito LOCAL a la función
	console.log(nombre)
	if(nombre == "Paco"){
		let nombre = "Juan"	//Ámbito LOCAL al IF
		console.log(nombre)
	}
}
saludarMike()
console.log(nombre)

//2 - Funciones EXPRESIÓN -- Sólo se pueden utilizar una vez inicializadas

const cuadradoNum = function(num){
	return num**2
}
console.log(cuadradoNum(7))

/*Operaciones entre funciones
Funciones son, como los arrays, objetos...
podemos pasar una 	FUNCIÓN como PARÁMETRO de otra función*/
const decirHola = function(num){
	console.log("Hola " + num +"!")
}
function holaVariasVeces(f){
	for(let i=0;i<10;i++)
		f(i)
}
holaVariasVeces(decirHola)

//Devolver una función dentro de otra (return function)
function multiplicar(x,y){
	//return x*y
	return function(res){
		return res = x*y
	}
}
let resultado = multiplicar(3,4)
console.log(resultado())

function makeBetweenFunc(min,max){
	return function(val){
		return val>=min && val<=max
	}
}
const enRango=makeBetweenFunc(18,100)
console.log(enRango(17))
console.log(enRango(21))

//Objetos y funciones
const equipo = {
	nombre:"Madrid",
	anoFundacion:1895,
	vida(){
		return new Date().getFullYear() - this.anoFundacion
	},
	anosVida:function(){
		return new Date().getFullYear() - this.anoFundacion
	}
}
console.log(equipo.vida())
console.log(equipo.anosVida())

//Operaciones FUNCTION con ARRAYs
//Funciones CALLBACK -> función anónima que se pasa por parámetro y se ejecuta una vez por cada elemento del array

const numeros = [1,2,3,4,5]
const numerosNegativos = numeros.forEach(function(item){
	console.log(item*-1)
})
//console.log(numerosNegativos)	//devuelve undefined

const nombres = ["Juan","Paco","Antonio"]
const aMayus = nombres.map(function(i){
	return i.toUpperCase()
})
console.log(aMayus)

//3 - Funciones ARROW --> Expresiones LAMBDA
const cuadrado = (x) => { return x*x}		//Equivalente a -> en otros lenguajes
//const cuadrado = function(x){ return x*x}		--> equivalente
console.log(cuadrado(4))

const suma = (x,y) => {
	return x+y
}
const suma2 = (x,y) => x+y	//return implícito
const suma3 = (x,y) => {x+y}
console.log(suma(2,4))
console.log(suma2(2,4))
console.log(suma3(2,4))	//Undefined
const cuadrado2 = x => x*x
console.log(cuadrado(5))
const hola = () => "Hola"
console.log(hola())

//RESUMEN
//1 - Declaración
console.log(esPar(5))
function esPar(num){
	return num%2==0
}
console.log(esPar(2))

//2 - Expresión
const esPar2 = function(num){ return num%2==0 }
console.log(esPar2(2))

//3 - ARROW
const esPar3 = n => n%2==0
console.log(esPar3(2))

//Más funciones con ARRAYs y LAMBDAs
const nombres2 = ["Juan","Pepa","Manolo","María","Zimbabwe"]
const buscaLambda = nombres2.find(item => item.indexOf("M")===0)
console.log(buscaLambda)
const aMayus2 = nombres2.map(item => item.toUpperCase())
console.log(aMayus2)

//filter --> obtener todas las ocurrencias que incluyan la letra 'M'
const filtraLambda = nombres2.filter(item => item.toUpperCase().includes("M"))
console.log(filtraLambda)

const everyName = nombres2.every(i => i.includes("u"))
console.log(everyName)

const someName = nombres2.some(i => i.includes("Z"))
console.log(someName)

//operador ternario
let edad = 21
if(edad>=18)
	console.log("Mayor edad")
else
	console.log("Menor edad")

edad>=18 ? console.log("Mayor edad") : console.log("Menor edad")

//Parámetros por defecto
//function multiplicarDefecto(a,b){	//No tiene valores por defecto
function multiplicarDefecto(a=1,b=1){	//Se asignan valores por defecto para a y b
	console.log(a*b)
}
multiplicarDefecto(2,4)
//Resultado: NaN
multiplicarDefecto()

const numeros1=[1,2,3]
const numeros2=[4,5,6]
//... Operador Spread o Rest
const resultadoNum = ["Paco","Juan",...numeros1,...numeros2,7,8,9]
console.log(resultadoNum)

/* function sumaTotal1(a,b,c){}
//Poliformismo
function sumaTotal1(a,b,c,d,e){} */

//Número indefinido de parámetros
//Alternativa a la sobrecarga de operadores
function sumaTotal(...numeros){
	let total = 0
	for(let n of numeros){
		total+=n
	}
	console.log(total)
}
sumaTotal(1,2,3)
sumaTotal(1,2,3,4,5,6,7,8,9)
