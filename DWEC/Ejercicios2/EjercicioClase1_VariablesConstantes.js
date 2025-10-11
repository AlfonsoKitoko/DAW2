//1. Variables y tipos de datos
console.log("1. Variables y tipos de datos")

let nombre="Alfonso"
let edad=29
let bool=true
console.log(`${nombre}\n${edad}\n${bool}`)

//2. Constantes
console.log("\n2. Constantes")

const PI = 3.14159
let radio = 52
longitud = 2*PI*radio
console.log(`longitud círculo con radio ${radio} = ${longitud}`)

//3. Operadores aritméticos
console.log("\n3. Operadores aritméticos")

let num1 = 5
let num2 = 6
let suma = num1 + num2
let resta = num1 - num2
let multi = num1 * num2
let divi = num1 / num2
let mod = num1 % num2
console.log(`${num1} + ${num2} = ${suma}`)
console.log(`${num1} - ${num2} = ${resta}`)
console.log(`${num1} * ${num2} = ${multi}`)
console.log(`${num1} / ${num2} = ${divi}`)
console.log(`${num1} % ${num2} = ${mod}`)

//4. Operadores de comparación
console.log("\n4. Operadores de comparación")

let valor1=8637
let valor2=37
let mayor = false
let menor = false
let igual = false
if(valor1>valor2)
	mayor=true
if(valor1<valor2)
	menor=true
if(valor1==valor2)
	igual=true
console.log(`${valor1} == ${valor2}: ${igual}`)
console.log(`${valor1} > ${valor2}: ${mayor}`)
console.log(`${valor1} < ${valor2}: ${menor}`)

//5. Operadores lógicos
console.log("\n5. Operadores lógicos")

let si=true
let no=false
if(si==true && no==false)
	console.log("si es si y no es no")
if(si==true || no==true)
	console.log("ni si es no ni no es si")
if(!si || !no)
	console.log("no es si y si es no")