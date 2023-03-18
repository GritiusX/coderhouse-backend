const valores = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//const potencia = valores.map(function() {return valor ** valor});
const potencia = valores.map((valor, index) => valor ** index);

console.log(potencia);

const nombres = ["Juan", "Pedro", "Guido", "Robert", "Carlos", "Norbert"];

console.log(nombres.includes("Juan"));

// async await es una promesa y es sugar syntax de la promesa, Promise tmb
