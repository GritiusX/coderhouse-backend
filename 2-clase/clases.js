class Persona {
	constructor(nombre, apellido, email) {
		this.nombre = nombre;
		this.apellido = apellido;
		this.email = email;
	}
	static variableEstatica =
		"la variable estatica se puede llamar aun no teniendo algo instanciado, ver ejemplo mas abajo";
	static variableEstatica2 =
		"un ejemplo muy conocido es Date.now() -> .now() es la variable estatica de Date";

	saludar() {
		return "hola soy una persona";
	}
	getNombreCompleto() {
		return `${this.nombre} ${this.apellido}`;
	}
}

const person = new Persona("Guido", "Pawluk", "g@mail.com");
const person2 = new Persona("carlos", "peres", "f@mail.com");

console.log(person.saludar());
console.log(person.nombre);
console.log(person.apellido);
console.log(person.email);
console.log(person.getNombreCompleto());

console.log("========================================================");
console.log(person2.saludar());
console.log(person2.nombre);
console.log(person2.apellido);
console.log(person2.email);

console.log("========================================================");
console.log(Persona.variableEstatica);
console.log(Persona.variableEstatica2);
