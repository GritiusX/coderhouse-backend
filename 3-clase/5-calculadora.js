class Calculadora {
	suma(num1, num2) {
		return num1 + num2;
	}
	resta(num1, num2) {
		return num1 - num2;
	}
}

//export Calculadora -esto es igual al de abajo
module.exports = {
	Calculadora,
};

// module.exports = Calculadora -- y estos 2 son iguales entre si
// export default Calculadora
