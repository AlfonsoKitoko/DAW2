const folderName = process.argv[2] || "carpeto"	//requiere argumentos, si no tiene, hace con el string indicado
const fs=require("fs")	//Import fs: FileSystem

try {
	fs.mkdirSync(folderName)
	fs.writeFileSync(`${folderName}/index.html`,"")
	fs.writeFileSync(`${folderName}/app.js`,"")
	fs.writeFileSync(`${folderName}/style.css`,"")
} catch (error) {
	console.log(error)
}