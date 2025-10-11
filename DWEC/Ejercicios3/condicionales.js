//1. Declara una variable numérica y comprueba si es mayor que 10. Si lo es, muestra por consola 'Es mayor que 10'.
let num=11
if(num>10)
	console.log(`${num} Es mayor que 10`)

//2. Declara dos variables numéricas. Comprueba si la primera es divisible por la segunda. Si lo es, muestra 'Es divisible'.
let num1=4
let num2=6
if(num1%num2==0)
	console.log("Es divisible")

//3. Declara una variable con una edad. Comprueba si la edad es mayor o igual a 18 y menor o igual a 65. Si cumple la condición, muestra 'Edad válida para trabajar'
let edad=34
if(edad>=18 && edad<=65)
	console.log("Edad válida para trabajar")

//4. Declara una variable con un número. Si es positivo muestra 'Número positivo', si no muestra 'Número negativo o cero'.
let entero=-9
if(entero>0)
	console.log("Es positivo")
else
	console.log("es negativo")

//5. Declara una variable con una nota del 0 al 10. Si la nota es mayor o igual a 5 muestra 'Aprobado', en caso contrario 'Suspenso'.
let nota=4
if(nota>=5)
	console.log("Aprobado")
else
	console.log("Suspenso")

//6. Declara una variable con la temperatura. Si es menor a 0 muestra 'Hace frío', en caso contrario muestra 'Temperatura positiva'.
let temp=-15
if(temp<0)
	console.log("Hace frío")
else
	console.log("Temperatura positiva")

//7. Declara una variable con un número del 1 al 7 y muestra el día de la semana correspondiente (1 = Lunes, 7 = Domingo).
let dia=5
switch(dia){
	case 1: console.log("Lunes")
		break;
	case 2: console.log("Martes")
		break;
	case 3: console.log("Miércoles")
		break;
	case 4: console.log("Jueves")
		break;
	case 5: console.log("Viernes")
		break;
	case 6: console.log("Sábado")
		break;
	case 7: console.log("Domingo")
		break;
	default: console.log("Día no válido")
}

//8. Declara una variable con una nota del 0 al 10. Muestra: 'Suspenso' (<5), 'Aprobado' (5-6), 'Notable' (7-8), 'Sobresaliente' (9-10).
	if (nota<5)
		console.log("Suspenso")
	else if (nota>=5 && nota<=6)
		console.log("Aprobado")
	else if (nota>=7 && nota<=8)
		console.log("Notable")
	else if (nota>=9 && nota<=10)
		console.log("Sobresaliente")
	else
		console.log("Nota no válida")

//9. Declara una variable con la edad de una persona. Clasifícala en: 'Niño' (0-12), 'Adolescente' (13-17), 'Adulto' (18-64), 'Mayor' (65+).
	if (edad>=0 && edad<=12)
		console.log("Niño")
	else if (edad>=13 && edad<=17)
		console.log("Adolescente")
	else if (edad>=18 && edad<=64)
		console.log("Adulto")
	else if (edad>=65)
		console.log("Mayor")
	else
		console.log("Edad no válida")

//10. Declara una variable con un número del 1 al 3 y muestra en consola 'Uno', 'Dos' o 'Tres'
let n=2
switch(n){
	case 1: console.log("Uno")
		break;
	case 2: console.log("Dos")
		break;
	case 3: console.log("Tres")
		break;
	default: console.log("Número no válido")
}

//11. Declara una variable con el nombre de un color ('rojo', 'azul', 'verde') y muestra un mensaje distinto para cada color.
let color="verde"
switch(color){
	case "rojo": console.log("El camión de bomberos es ROJO")
		break;
	case "verde": console.log("El bosque es VERDE")
		break;
	case "azul": console.log("El cielo es AZUL")
		break;
	default: console.log("No introdujiste el color correcto")	
}

//12. Declara una variable con un número del 1 al 12 y muestra el mes correspondiente
let mes =48
switch(mes){
	case 1: console.log("Enero")
		break;
	case 2: console.log("Febrero")
		break;
	case 3: console.log("Marzo")
		break;
	case 4: console.log("Abril")
		break;
	case 5: console.log("Mayo")
		break;
	case 6: console.log("Junio")
		break;
	case 7: console.log("Julio")
		break;
	case 8: console.log("Agosto")
		break;
	case 9: console.log("Septiembre")
		break;
	case 10: console.log("Octubre")
		break;
	case 11: console.log("Noviembre")
		break;
	case 12: console.log("Diciembre")
		break;
	default: console.log("Mes no válido")
}
