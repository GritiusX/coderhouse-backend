// //file system = fs ==========================================================================================================================================================
// const fs = require("fs");

// // console.log(fs);

// // fs sincronica
// fs.writeFileSync(
// 	"./data.txt",
// 	"este texto es el que esta en data.txt \n",
// 	"utf-8"
// ); //esto crea un archivo.txt llamado data, le escribe el texto y acepta utf-8
// console.log(fs.existsSync("./data.txt")); // si tengo un archivo data.txt entonces tira true

// fs.appendFileSync(
// 	"./data.txt",
// 	"esto es un texto agregado en la linea 14 \n",
// 	"utf-8"
// );

// if (fs.existsSync("./data.txt")) {
// 	const contenidoArchivo = fs.readFileSync("./data.txt", "utf-8"); //esto lee el archivo data.txt
// 	console.log(contenidoArchivo);
// }

// fs.unlinkSync("./data.txt"); // esto borra el archivo data.txt

// fs con callback ==============================================================================================================================
// const fs = require("fs");
// const text = "este es el contenidÓ que va dentro del data.txt \n";

// fs.writeFile("./data.txt", text, "utf-8", (err) => {
// 	if (err) console.log("ocurrio un error en writeFile asyncronico");
// });

// const otroTexto = "aca estamos agregando un texto nuevo \n";

// fs.appendFile("./data.txt", otroTexto, "utf-8", (err) => {
// 	if (err) console.log("salio otro error en appendFile asyncronico");
// 	console.log("agregado");
// });

// fs.readFile("./data.txt", "utf-8", async (err, contenido) => {
// 	if (err) console.log("hay un error en readFile asyncronico");
// 	console.log(contenido);
// });

// fs.unlink("./data.txt", (err) => {
// 	if (err) console.log("hay un error en unlink asyncronico");
// 	console.log("eliminado asincronico");
// });

// fs con promise ==============================================================================================================================
//const fs = require("fs");

// const operacionesAsyncronicas = async () => {
// 	try {
// 		await fs.promises.writeFile(
// 			"./data.txt",
// 			"aca estoy escribiendo algo \n",
// 			"utf-8"
// 		);
// 		// .then(() => console.log("termino de escribir el archivo"))
// 		// .catch((err) => console.log(err));
// 		let texto = "esto es lo siguiente que entra \n";

// 		await fs.promises.appendFile("./data.txt", texto, "utf-8");

// 		let contenido = await fs.promises.readFile("./data.txt", "utf-8");
// 		console.log(contenido);

// 		await fs.promises.unlink("./data.txt");
// 	} catch (error) {
// 		return console.log(error);
// 	}
// };

// operacionesAsyncronicas();

// ejercicio  ==============================================================================================================================
const fs = require("fs");

// const info = {
//     contenidoStr: (contenido del archivo leído en formato string),
//     contenidoObj: (contenido del archivo leído en formato objeto),
//     size: (tamaño en bytes del archivo)
// }

const funcionPackageJson = async () => {
	const info = {
		contenidoStr: "",
		contenidoObj: {},
		size: 0,
	};
	try {
		// se lee el contenido
		let contenido = await fs.promises.readFile("./package.json", "utf-8");

		// se lo transforma a json, a string y se obtiene el size
		let js0n = JSON.parse(contenido);
		let str1ng = JSON.stringify(js0n, "null", 2);
		let size = contenido.length;

		info.contenidoObj = js0n;
		info.contenidoStr = str1ng; //con estos parametros en el () el json queda prolijo
		info.size = size;

		console.log(info);

		await fs.promises.writeFile(
			"./info.json",
			JSON.stringify(info, "null", 2),
			"utf-8"
		);
	} catch (error) {
		console.log(error);
	}
};

funcionPackageJson();
