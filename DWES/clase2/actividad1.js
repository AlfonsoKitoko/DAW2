/*
Actividad 1 - El caracol en el pozo
--------------------------------------------------
Un caracol sube 7 pies cada día y se desliza hacia atrás 2 pies cada noche.
¿Cuántos días tardará el caracol en salir de un pozo con una profundidad dada?

Entrada de muestra: 31

Salida de muestra: 6

Explicación: Analicemos la distancia que recorre el caracol cada día, según el ejemplo de entrada(31 pies):

Día 1: 7-2=5
Día 2: 5+7-2=10
Día 3: 10+7-2=15
Día 4: 15+7-2=20
Día 5: 20+7-2=25
Día 6: 25+7-2=30
Día 7: 30+7-2=31(+4)
*/
const AVANCE=7
const RETRASO=2
let meta=prompt("¿Cómo de profundo es el pozo?")
console.log(meta)
console.log(isNaN(parseInt(meta)))
let metaAlcanzada=false
let dia=0
let totalAvanzado=0
do{
	aux=totalAvanzado+AVANCE-RETRASO
	console.log(`Día ${dia+1}: ${totalAvanzado} + ${AVANCE} - ${RETRASO} = ${aux}`)
	totalAvanzado=aux
	dia++
	if(totalAvanzado>=meta){
		metaAlcanzada=true
	}
}while(!metaAlcanzada)
console.log(`El caracol ha tardado: ${dia} días`)