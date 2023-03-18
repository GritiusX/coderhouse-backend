let frase = "      hola como estan       ";
let array = [1, 2, 3, 4, [5, [6, [7]]], 8, 9, 10];

console.log("frase: ", frase);
console.log("frase: ", frase.trim());
console.log("=====================================");
console.log("array: ", array.flat()); //aplana los arrays de array para que sea solo un array con toda la info de los demas
console.log("array: ", array.flat(2));
console.log("array: ", array.flat(3));
