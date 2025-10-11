// 1.Contar del 1 al 10. Haz un programa que muestre los números del 1 al 10 usando un bucle for.
for(let i=1;i<=10;i++)
	console.log(i)
// 2.Números pares. Muestra los números pares del 2 al 20 usando un bucle for.
for(let i=0;i<=20;i++){
	if(i%2===0)
		console.log(i)
}
// 3.Tabla de multiplicar del 5.Usando for, muestra la tabla de multiplicar del 5 (desde 5×1 hasta 5×10).
let cinco = 5
for(let i=0;i<=10;i++)
	console.log(`${cinco} * ${i} = ${cinco * i}`)
// 4.Suma de números.Calcula la suma de los números del 1 al 100 usando un bucle for.
suma=0
for(let i=1;i<=100;i++)
	suma+=i
console.log(`Suma de todos los números desde el 1 al 100: ${suma}`)
// 5.Índices de un array dado el array ["Lunes", "Martes", "Miércoles"], muestra por consola los índices con for...in.
const semana = ["Lunes","Martes","Miércoles","Jueves","Viernes","Sábado","Somingo"]
for(let index in semana)
	console.log(index)
// 6.Índice y valor.Con el array ["Rojo", "Verde", "Azul"], muestra el índice y el color en cada vuelta.
const color =["Rojo","Verde","Azul"]
for(let i=0;i<color.length;i++)
	console.log(`pos ${i}: ${color[i]}`)
// 7.Posiciones de letras.Con la palabra "HOLA", muestra la posición de cada letra.
const palabra="HOLA"
for(let i=0;i<palabra.length;i++)
	console.log(palabra[i])
// 8.Contar elementos. Usando for...in, cuenta cuántos elementos tiene el array [10, 20, 30, 40].
const numArray=[10,20,30,40]
let cont=0
for(i in numArray) cont++
console.log(`Tiene ${cont} elementos`)
// 9. Valores de un array.Dado el array ["Manzana", "Naranja", "Plátano"], muestra cada fruta con for...of.
const frutas=["Manzana", "Naranja", "Plátano"]
for(fruta of frutas)
	console.log(fruta)
// 10.Recorrer una palabra. Con la palabra "JAVASCRIPT", muestra cada letra con for...of.
const word="JAVASCRIPT"
let wordArr=word.split('')
for(letra of wordArr)
	console.log(letra)
// 11. Suma de números.Dado el array [1, 2, 3, 4, 5], calcula la suma total usando for...of.
const numeros= [1, 2, 3, 4, 5]
let totalNumeros=0
for(num of numeros)
	totalNumeros+=num
console.log(`Total: ${totalNumeros}`)
// 12. Encontrar el mayor número. Con el array [5, 12, 8, 20, 3], encuentra el número más grande usando for...of.
const otrosNumeros= [5, 12, 8, 20, 3]
let numGrande=0
for(num of otrosNumeros){
	if(num>numGrande)
		numGrande=num
}
console.log(`el valor más grande del array es ${numGrande}`)