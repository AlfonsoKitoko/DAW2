alert("Bienvenido/a")
let fin=false
let entrada,nums,resultado,a,b,finOperacion
//Se inicia un bucle para hacer operaciones hasta que el usuario haga cancel en el confimr()
do{
	//Se pide al usuario el operador, si el usuario introduce cualquier cosa que no sea el operador, no lo acepta
	switch(prompt("¿Qué operación quieres hacer? (+,-,*,/)")){
		case '+':
			finOperacion=false
			//Se inicia un bucle en el que el usuario introduce los dos números, de no ser ambos números, se repite la operación
			do{
			entrada = prompt("Introduce los dos números separados por espacio")
			//Genera un array con los dos números
			nums= entrada.trim().split(" ")
			//Comprueba si el usuario ha introducido dos valores numéricos
			if(!isNaN(nums[0]) && !isNaN(nums[1])){
				a = parseInt(nums[0])
				b = parseInt(nums[1])
				resultado = a + b
				alert(`${a} + ${b} = ${resultado}`)
				finOperacion=true
			}
			} while(!finOperacion)
			//Pide al usuario confirmar si quiere seguir haciendo operaciones
			fin =!confirm("¿Quieres hacer otra operación?")
			break;
		case '-':
			finOperacion=false
			do{
			entrada = prompt("Introduce los dos números separados por espacio")
			nums= entrada.trim().split(" ")
			if(!isNaN(nums[0]) && !isNaN(nums[1])){
				a = parseInt(nums[0])
				b = parseInt(nums[1])
				resultado = a - b
				alert(`${a} - ${b} = ${resultado}`)
				finOperacion=true
			}
			} while(!finOperacion)
			fin =!confirm("¿Quieres hacer otra operación?")
			break;
		case '*':
			finOperacion=false
			do{
			entrada = prompt("Introduce los dos números separados por espacio")
			nums= entrada.trim().split(" ")
			if(!isNaN(nums[0]) && !isNaN(nums[1])){
				a = parseInt(nums[0])
				b = parseInt(nums[1])
				resultado = a * b
				alert(`${a} * ${b} = ${resultado}`)
				finOperacion=true
			}
			} while(!finOperacion)
			fin =!confirm("¿Quieres hacer otra operación?")
			break;
		case '/':
			finOperacion=false
			do{
			entrada = prompt("Introduce los dos números separados por espacio")
			nums= entrada.trim().split(" ")
			if(!isNaN(nums[0]) && !isNaN(nums[1])){
				a = parseInt(nums[0])
				b = parseInt(nums[1])
				resultado = a / b
				alert(`${a} / ${b} = ${resultado}`)
				finOperacion=true
			}
			} while(!finOperacion)
			fin =!confirm("¿Quieres hacer otra operación?")
			break;
		default:	//Si el usuario introduce valor no válido
			alert("Opción no válida")
	}
} while(!fin)
alert("Hasta la próxima")