const impuestos = {
	imp1: 234,
	imp2: 123,
	imp3: 465,
	imp4: 789,
};

// Object.entries: arma un array de array y en el array hijo mete cada uno de los valores dentro del obj: [ [test:1],[test:2],[test:3] ];
let parClaveValor = Object.entries(impuestos);

console.log(parClaveValor);

// Object.values: arma un array y mete todos los valores, o sea lo que VALE cada propiedad del Objeto: [234,123,465,789 ] del Objeto impuestos;
let VALUES = Object.values(impuestos);

console.log(VALUES);

// Object.keys: arma un array y mete todas las llaves, o sea todas las propiedades del Objeto: [ imp1,imp2,imp3,imp4 ] del Objeto impuestos;
let KEYS = Object.keys(impuestos);

console.log(KEYS);

// reduce: esto lo que hace es contador ARRANCA en 0 y itemArray toma el 1er valor del Array VALUES y despues suma contador con itemArray y lo pone
// en contador, despues agrega el siguiente itemArray y lo vuelve a sumar, y asi sucesivamente,
// ej: contador = 0, itemArray = 234 y se suman ---> contador 234, itemArray 123 y se suman ---> contador 357, itemArray 465 , etc etc etc

let totalImpuesto = VALUES.reduce(
	(contador, itemArray) => (contador = contador + itemArray),
	0
);

console.log("totalImpuesto", totalImpuesto);

// que es una callback? funcion que se pasada a otra funcion como argumento
