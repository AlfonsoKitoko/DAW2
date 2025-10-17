let numArr,a,b,c,cadena,palabra,veces,num
// 1. Contar cuántos números pares hay en un array
numArr=[1,2,3,4,5,6,7,8,9,10]
function cuentaPares(numArr){
	let cont = 0
	for(let n of numArr){
		if(n%2===0)
			cont++
	}
	return `Hay ${cont} números pares`
}
console.log(`1 - ${cuentaPares(numArr)}`)
// 2. Sumar todos los elementos de un array.
numArr=[1,2,3,4,5,6,7,8,9,10]
function totalNumArr(numArr){
	let total=0
	for(let n of numArr){
		total+=n
	}
	return total
}
console.log(`2 - ${totalNumArr(numArr)}`)
// 3. Encontrar el número mayor (necesitarás utilizar el método Math.max)
a=1
b=2
c=3
function numeroMaryor(a,b,c){
	return Math.max(a,b,c)
}
console.log(`3 - ${numeroMaryor(a,b,c)}`)
// 4. Crear una función que devuelva si una frase contiene una palabra (necesitaras utilizar el método .includes)
cadena="Cadena de ejemplo"
palabra="de"
function contienePalabra(cadena,palabra){
	return cadena.includes(palabra)
}
console.log(`4 - ${contienePalabra(cadena,palabra)}`)
// 5. Repetir una cadena varias veces (necesitaras utilizar el método .repeat() )
cadena="Cadena de ejemplo"
veces= 3
function repiteCadena(cadena,veces){
	return cadena.repeat(veces)
}
console.log(`5 - ${repiteCadena(cadena,veces)}`)
// 6. Comprobar si todos los números de un array son positivos
numArr=[-1,2,3,4,5,6,7,8,9,10]
function todosPostitivos(lista){
	for(let n of lista){
		if(!(n>=0))
			return false
	}
	return true
}
console.log(`6 - ${todosPostitivos(numArr)}`)
// 7. Calcular el factorial de un número
num=5
function factorial(num){
	if(num===0 || num===1)
		return 1
	return num*factorial(num-1)
}
console.log(`7 - ${factorial(parseInt(num))}`)
// 8. Crear una función que calcule el promedio de un array (necesitaras utilizar el metodo. length)
numArr=[1,2,3,4,5,6,7,8,9,10]
function promedio(numArr){
	total=0
	for(n of numArr){
		total+=n
	}
	return (total/numArr.length)
}
console.log(`8 - ${promedio(numArr)}`)
// 9. Comprobar si un número es primo
num=17
function esPrimo(num){
	if (num<=1) return false
	if (num===2) return true
	if (num%2===0 && num%3===0) return false
	return true
}
console.log(`9 - ${esPrimo(num)}`)
// 10. Contar cuántas veces aparece un número en un array
numArr=[1,2,3,4,5,6,7,8,2,10]
num=2
function cuentaNumero(numArr,num){
	let cont=0
	for(let n of numArr){
		if(n==num)
			cont++
	}
	return cont
}
console.log(`10 - ${cuentaNumero(numArr)}`)
// 11. Invertir un número
num=1188
function invierteNumero(num){
	return num.toString().split("").reverse()
}
console.log(`11 - ${invierteNumero(num)}`)
// 12. Calcular el número de dígitos de un número
num=123456
function cuentaCifras(num){
	return num.toString().length
	
}
console.log(`12 - ${cuentaCifras(num)}`)
// 13. Comprobar si una palabra es palíndroma (sin usar métodos de texto)
palabra="Peep"
function esPalindromo(palabra){
	for(let i=0;i<palabra.length;i++){
		for(let j=palabra.length;j>0;j--){
			if(palabra.charAt(i)===palabra.charAt(j)) return true
			else return false
		}
	}
}
console.log(`13 - ${esPalindromo(palabra)}`)
// 14. Sumar solo los números impares de un array (necesitaras utilizar .length)
numArr=[1,2,3,4,5,6,7,8,9,10]
function sumaImparesArray(numArr){
	let total=0
	for(n of numArr) {
		if(n%2!=0)
			total+=n
	}
	return total
}
console.log(`14 - ${sumaImparesArray(numArr)}`)