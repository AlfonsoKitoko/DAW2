// 1.Escribe un programa que muestre por consola los números del 1 al 10 usando un bucle while.
let n1 = 1
while(n1<=10){
	console.log(n1)
	n1++
}
// 2. Muestra en pantalla los números del 10 al 1 usando un bucle while.
let n2 = 10
while(n2>=1){
	console.log(n2)
	n2--
}
// 3. Calcula la suma de todos los números del 1 al 100 y muestra el resultado final en consola.
let n3=0
for(let i=1;i<=100;i++){
	n3+=i
}
console.log(n3)
// 4. Declara una variable inicial en 0. Utiliza un bucle do...while para ir sumándole 10 y mostrar su valor en cada iteración. El bucle debe terminar cuando el número sea mayor que 50.
let n4=0
do{
	console.log(n4)
	n4+=10
} while(!(n4>50))
// 5. Simula que el programa pide un número al usuario (para este ejercicio se puede asignar manualmente en una variable con un array que se llame entradas [-3,-8-2,5]. El bucle debe repetirse mientras el número sea negativo, y debe terminar cuando se introduzca un número positivo.
let n5=[-3,-8,-2,5,-10]
for(let i=0;i<=n5.length;i++){
	console.log(`entrada usuario: ${n5[i]}`)
	if(n5[i]>=0){
		console.log("Se acabó")
		break
	}
}
// 6. Muestra los primeros 10 múltiplos de 3 utilizando un bucle while.
let n6=1
while(n6<=10){
	console.log(3*n6)
	n6++
}
// 7. Mostrar la tabla de multiplicar del número 7, desde 7 x 1 hasta 7 x 10.
for(let i=1;i<=10;i++)
	console.log(`7 * ${i} = ${(7*i)}`)
// 8. Calcular la suma de los primeros 20 números pares (2, 4, 6, …, 40).
let n8=0
for(let i=1;i<=40;i++){
	if(i%2==0)
		n8+=i
}
console.log(n8)
// 9. Dado un número entero positivo, mostrar sus cifras en orden inverso. Por ejemplo, si el número es 1234, mostrar 4321. (Nota: necesitaras utilizar el método Math.floor(x)  (siendo x un número) Devuelve el máximo entero menor o igual a un número)
let n9=4312
console.log(`Entrada: ${n9}`)
if(n9>0){
	let arrNumero=String(n9).split('')
	arrNumero.reverse()
	let nuevoNum=''

	for(let i=0;i<arrNumero.length;i++)
		nuevoNum+=arrNumero[i]
	
	nuevoNum=Number(nuevoNum)
	console.log(`Salida: ${nuevoNum}`)
	console.log(nuevoNum)
} else console.log("entrada no válida")
// 10. Dado un número entero, contar cuántas cifras tiene. Por ejemplo el numero 98765. (Nota: necesitaras utilizar el método Math.floor(x)  (siendo x un número) Devuelve el máximo entero menor o igual a un número)
let n10=98765
console.log(`Entrada: ${n10}`)
let arrNum=n10.toString().split('')
let resultado=arrNum.length
console.log(`Salida: ${resultado} cifras`)
console.log(resultado)