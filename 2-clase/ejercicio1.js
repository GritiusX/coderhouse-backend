const testArray = ["Carlos", "Pepe", "Robert", "Walter"];

const mostrarLista = (params = []) => {
	if (params === undefined || params === null || params.length === 0)
		console.error("Lista Vacía!!");
	params.forEach((param) => console.log(param));
	return params.length;
};

console.log("Primer ej sin parametros", mostrarLista());
console.log("==================================================");
console.log("segundo ejemplo con array de parametro", mostrarLista(testArray));
