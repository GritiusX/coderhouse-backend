const modo = "calculos";

const ejemploImport = async () => {
	if (modo === "calculos") {
		const { Calculadora } = await import("./5-calculadora.js");
		const calculadora = new Calculadora();
		console.log(calculadora.suma(1, 2));
	}
};

console.log(ejemploImport());
