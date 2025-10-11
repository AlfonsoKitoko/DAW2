const productos=[
	{
		nombre:"PC",
		precio:{
			sinIVA:1000.99,
			conIVA:null
		}
	},
	{
		nombre:"Pantalla",
		precio:{
			sinIVA:269.95,
			conIVA:null
		}
	}
]
const IVA=.21
let incremento=prompt("¿Cuánto quieres subir los precios?")

if(!isNaN(parseFloat(incremento))){
	for(let prod of productos){
		prod.precio.sinIVA +=parseFloat(incremento)
		prod.precio.conIVA = Number(((prod.precio.sinIVA*IVA)+prod.precio.sinIVA).toFixed(2))
	}
	console.log(productos)
}
