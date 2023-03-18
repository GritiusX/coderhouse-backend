// //ej let - scopes
// let i = 0; // global scope

// function foo() {
// 	i = 1; // scope global de arriba
// 	let j = 2; // local scope a foo
// 	if (true) {
// 		console.log(i);
// 		console.log(j);
// 	}
// }

// foo();

// function foo1() {
// 	let i = 0; //local a foo1

// 	if (true) {
// 		let i = 1; // local dentro del if
// 		console.log(i); // chequea el i del if
// 	}
// 	console.log(i); // chequea el i de foo1
// }

// foo1();

// function foo2() {
// 	if (true) {
// 		let i = 1;
// 	}
// 	console.log('eh??',i); // da undefined porque el i solo tiene scope dentro del if
// }

// foo2();

// ================================================================================================
// ej const - scopes

// const i = 0;
// //i = 1;

// const obj = {
// 	i: 0,
// };

// obj.i++;

// const objPersona = {
// 	nombre: "Pepe",
// };

// objPersona.nombre = "John";

// console.log(objPersona);

// ================================================================================================
// ej functions

// const foo = function () { };
// const foo = () => "hola"; //this

// function nombreDeLaFuncion(params) {
// 	// en el cuerpo de la funcion estan las instrucciones que queremos que realice
// 	let saludo = "hola como estan " + params;
// 	// mandamos para afuera la variable porque el valor muere
// 	return saludo;
// }

// console.log(nombreDeLaFuncion("Juanes"));

// //misma funcion pero arrow
// const nombreDeLaFuncion2 = (params) => {
// 	// en el cuerpo de la funcion estan las instrucciones que queremos que realice
// 	let saludo = "hola como estan " + params;
// 	// mandamos para afuera la variable porque el valor muere
// 	return saludo;
// };
// console.log(nombreDeLaFuncion2("Juanes"));

// const identificadorDeLaFuncion = (params) => "hola como estan " + params;
// const identificadorDeLaFuncionSinParentesis = (_) => "hola como estan "; //no es necesario poner el parentesis, pero hay que poner un guion bajo

// const sumarDosNumeros = (num1, num2) => {
// 	return num1 + num2;
// };

// console.log(identificadorDeLaFuncion("Robert"));
// console.log(identificadorDeLaFuncionSinParentesis());
// console.log(sumarDosNumeros(1, 3));

// ================================================================================================
// ej scopes

// function nombreDeLaFuncion(params) {
// 	// en el cuerpo de la funcion estan las instrucciones que queremos que realice
// 	let saludo = "hola como estan " + params;
// 	// mandamos para afuera la variable porque el valor muere
// 	return saludo;
// }

// console.log(saludo); // asi no, pero si metemos el clg y sacamos el let saludo, si se puede

// ================================================================================================
// ej backticks o template strings

// function nombreDeLaFuncion(params) {
// 	// en el cuerpo de la funcion estan las instrucciones que queremos que realice
// 	let saludo = `hola como estan ${params}`;
// 	// mandamos para afuera la variable porque el valor muere
// 	return saludo;
// }

// console.log(nombreDeLaFuncion("carlos"));
