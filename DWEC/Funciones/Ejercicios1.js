let numero,nombre,apellido,minutos,lado,texto,base,exponente,letra,altura,a,b
// 1. Mostrar el doble de un número
numero=3
function doble(numero){
	return numero*2
}
console.log(`1. ${doble(numero)}`)
// 2. Mostrar el nombre completo
nombre="Alfonso"
apellido="Kitoko"
function nombreCompleto(nombre,apellido){
	let completo = `${nombre} ${apellido}`
	return completo
}
console.log(`2. ${nombreCompleto(nombre,apellido)}`)
// 3. Convertir minutos a segundos
minutos=60
function minutosASegundos(minutos){
	return (minutos*60)
}
console.log(`3. ${minutosASegundos(minutos)}`)
// 4. Calcular el perímetro de un cuadrado
lado=4
function perimetroCuadrado(lado){
	return (lado*4)
}
console.log(`4. ${perimetroCuadrado(lado)}`)
// 5. Determinar si un número es positivo
numero=-3
function esPositivo(numero){
	return numero>=0
}
console.log(`5. ${esPositivo(numero)}`)
// 6. Obtener el último caracter de un texto
texto="Cadena de ejemplo"
function ultimoCaracter(texto){
	return texto.charAt(texto.length-1)
}
console.log(`6. ${ultimoCaracter(texto)}`)
// 7. Elevar un número a una potencia
base=7
exponente=3
function potencia(base,exponente){
	let resultado=base
	for(let i=1;i<exponente;i++){
		resultado*=base
	}
	return resultado
}
console.log(`7. ${potencia(base,exponente)}`)
// 8. Comprobar si una palabra contiene una letra
palabra="Macanudo"
letra="n"
function contieneLetra(palabra,letra){
	let palabraArr=palabra.split("")
	for(const l of palabraArr){
		if(letra===l)	return true
	}
}
console.log(`8. ${contieneLetra(palabra,letra)}`)
// 9. Calcular el área de un triángulo
base=4
altura=10
function areaTriangulo(base,altura){
	return ((base*altura)/2)
}
console.log(`9. ${areaTriangulo(base,altura)}`)
// 10. Mostrar si dos números son iguales
a=1
b=1
function sonIguales(a,b){
	if(a===b) return true
	else return false
}
console.log(`10. ${sonIguales(a,b)}`)