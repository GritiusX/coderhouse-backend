// let variablePrueba = false;

// let prueba1 = variablePrueba || "sin Valor"; // si es true, da true, si es false da 'sin Valor', pero si ambos son null o undefined, dan siempre 'sin Valor'
// let prueba2 = variablePrueba ?? "sin Valor"; // si es true, da true, si es false da false, pero si ambos son null o undefined, dan siempre 'sin Valor'

// console.log(prueba1); // || ---> chequea solo los booleanos
// console.log(prueba2); // ?? ---> solo chequea los valores

// ================================================================================================================================
class Persona {
	#name; // --> propiedad privada

	constructor(name, age) {
		this.name = name; // igual la declaramos porque le queremos poner un valor
		this.age = age;
		this.#fullname = `${name} ${age}`;
	}

	getName() {
		return this.#name;
	}
	getFullName() {
		return this.#fullname;
	}
	#metodoPrivado = () => "solo accesible para la clase";
}

//si una propiedad es privada no la podemos declarar

const persona = new Persona("John", 30);
console.log(persona.getName());
