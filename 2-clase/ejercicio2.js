class Contador {
	constructor(responsable) {
		this.responsable = responsable;
		this.contador = 0;
	}

	static contadorGlobal = 0;

	getResponsable() {
		return this.responsable;
	}

	contar() {
		this.contador++;
		Contador.contadorGlobal++;
	}

	getCuentaIndividual() {
		return this.contador;
	}
	getCuentaGlobal() {
		return Contador.contadorGlobal; // como este es static, se lo llama desde Contador y no desde this
	}
}

// instancia de la clase Contador
const contador = new Contador("Fede");

console.log(contador.getResponsable());
console.log("getCuentaIndividual", contador.getCuentaIndividual());
console.log("getCuentaGlobal", contador.getCuentaGlobal());
contador.contar();
contador.contar();
contador.contar();
console.log(contador.getCuentaIndividual());
console.log(contador.getCuentaGlobal());

const contador2 = new Contador("Juan");
console.log("===============================================================");
console.log(contador2.getResponsable());
console.log("getCuentaIndividual", contador2.getCuentaIndividual());
console.log("getCuentaGlobal", contador2.getCuentaGlobal());
contador.contar();
console.log(contador2.getCuentaIndividual());
console.log(contador2.getCuentaGlobal()); //aca sera 4, porque toma todos los contar que se fueron haciendo
