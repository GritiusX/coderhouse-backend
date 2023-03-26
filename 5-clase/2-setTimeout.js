const temporizador = (cb) => {
	setTimeout(() => {
		cb();
	}, 3000);
};

const operacion = () => console.log("realizando tarea - 2");

console.log("iniciando tarea - 1");
temporizador(operacion);
console.log("tarea finalizada - 3");
