let contador = () => {
	let count = 1;

	let timer = setInterval(() => {
		console.log(count++);
		if (count > 4) {
			clearInterval(timer);
		}
	}, 3000);
};

console.log("iniciando tarea - 1");
contador(); // esta es equivalente al for pero no bloqueante, for es bloqueante
console.log("tarea finalizada - 3");
