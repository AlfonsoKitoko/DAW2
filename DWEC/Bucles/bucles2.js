const random = parseInt(Math.random()*100)+1
console.log(random)
let acierto=false
let cont=0
while(!acierto){
	let entrada = parseInt(prompt("Introduce un número entre 1 y 100"))
	if(entrada===random){
		cont++
		acierto=true
	}
	if(entrada !== random){
		cont++
		if(entrada>random)
			alert("Más alto")
		else if(entrada<random)
			alert("Más bajo")
	}
}
alert(`Correcto! Lo has adivinado en ${cont} intentos`)