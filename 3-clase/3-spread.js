const obj1 = {
	prop1: 1,
	prop2: "b",
	prop3: true,
};

const obj2 = {
	prop1: "c",
	prop2: [1, 2, 3],
	prop4: false,
};

console.log("1er ejemplo:  ", obj2.prop2);

// DESTRUCTURING

// const prop1 = obj1.prop1
// const prop2 = obj1.prop2
// const prop3 = obj1.prop3
// es lo mismo que hacer la llave de abajo

// const {prop1 = prop1} = obj1 ---> es lo mismo que: gracias a ECMAscript
const { prop1 } = obj1;

console.log("2er ejemplo:  ", prop1); //si quiero usar prop2 me va a decir que no esta definido porque no esta en el objeto de arriba

//==== nuevo ejemplo destructuring =====

const obj3 = { ...obj1, ...obj2 }; // esto hace que se copien todas las propiedades de obj1 y obj2 en obj3 ---> si hay propiedades
// repetidas como el caso de prop1,prop2 -> entonces solo se pasan los de obj1

console.log("3er ejemplo:  ", obj3);

//==== nuevo ejemplo destructuring =====

const { prop4, ...todoLoDemas } = obj2; // esto hace que se copien todas las propiedades de obj1 y obj2 en obj3 ---> si hay propiedades
// repetidas como el caso de prop1,prop2 -> entonces solo se pasan los de obj1

console.log("4to ejemplo:  ", todoLoDemas);
