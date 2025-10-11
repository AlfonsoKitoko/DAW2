//1. Declara dos variables numéricas y comprueba si son iguales con '=='. Muestra el resultado en consola.
let a1=5
let b1=2

console.log(a1==b1)

//2. Declara una variable con tu edad y comprueba si es mayor o igual que 18. Muestra el resultado en consola.
let edad=29
const mayorEdad=19

if(edad>=mayorEdad)
	console.log("Es mayor de edad")
else 
	console.log("Es menor")

//3. Declara una variable con un número y comprueba si es distinto de 10.
let num = 52

console.log(num!=10)

//4. Declara dos variables con números distintos. Comprueba cuál es mayor e imprime el mayor en consola.
let num1=5
let num2=4

if(num1>num2)
	console.log(`${num1} > ${num2}`)
else if(num1<num2)
	console.log(`${num1} < ${num2}`)
else
	console.log(`${num1} == ${num2}`)

//5. Declara una variable con la temperatura y comprueba si está entre 20 y 30 grados (inclusive).
let temperatura=43
let temperatura2=25

if(temperatura>=20 && temperatura<=30)
	console.log(`temperatura(${temperatura} ºC) está dentro del rango`)
else
	console.log(`temperatura(${temperatura} ºC) está fuera del rango`)
if(temperatura2<=30 && temperatura2>=20)
	console.log(`temperatura2(${temperatura2} ºC) está dentro del rango`)
else
	console.log(`temperatura2(${temperatura2} ºC) está fuera del rango`)

//6. Declara dos variables booleanas (true/false). Usa el operador '&&' para comprobar si ambas son verdaderas.
let bool1=true
let bool2=false
console.log(bool1==true && bool2==true)

//7. Declara tres variables con números distintos y comprueba cuál es el mayor de los tres.
let n1=354
let n2=41937
let n3=402

if(n1>n2 && n1>n3)
	console.log(`${n1}(n1) es el mayor de los 3 números`)
else if(n2>n1 && n2>n3)
	console.log(`${n2}(n2) es el mayor de los 3 números`)
else if(n3>n1 && n3>n2)
	console.log(`${n3}(n3) es el mayor de los 3 números`)

//8. Declara una variable con un año y comprueba si es bisiesto. (Un año es bisiesto si es divisible entre 4 y no entre 100, salvo que también sea divisible entre 400).
let ano=2446
if(ano%4==0 && ano%100!=0 && ano%400==0)
	console.log(`${ano} es bisiesto`)
else console.log(`${ano} NO es bisiesto`)

//9. Declara una variable con un número y comprueba si está fuera del rango 50-100 usando el operador '!'.
let numero=74456
if(!(numero>=50 && numero<=100))
	console.log(`${numero} NO está dentro del rango`)
else 
	console.log(`${numero} está dentro del rango`)
