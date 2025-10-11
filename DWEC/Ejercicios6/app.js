/* let num= prompt("Introduce número pra mostrar su factorial")
let aux=num
if(parseInt(num)){
	for(let i=(num-1);i>=1;i--)
		aux*=i
}
alert(`${num}! = ${aux}`) */
//----------2.-------
let num1=parseInt(prompt("Introduce primer número"))
let num2=parseInt(prompt("Introduce segundo número"))
let numArr = []
let cont=0
if(num1<num2){
	for(let i=num1;i<=num2;i++){
		if(!(i%2==0) && !(i%3==0)){
			numArr.push(i)
			cont++
		}
		if(cont>=3)
			break
	}
	alert(`Números primos entre ${num1} y ${num2}: ${numArr}`)
}
else{
	for(let i=num2;i<=num1;i++){
			if(!(i%2==0) && !(i%3==0)){
				numArr.push(i)
				cont++
			}
			if(cont>=3)
				break
		}
		alert(`Números primos entre ${num2} y ${num1}: ${numArr}`)
	}