const correcto = "1234"
let intentos = 3
do{
	let entrada =	prompt("Introduce contraseña:")
	if(entrada === correcto)
		break
	else{
		alert(`Contraseña incorrecta.\n Te quedan ${intentos} intentos`)
		intentos--
	}
} while(intentos>=0)
if(intentos>0)
	alert("Acceso concedido")
else
	alert("Acceso bloqueado tras 3 intentos fallidos")