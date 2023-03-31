const { UserManager } = require("./userManager.js");

const manager = new UserManager();

const env = async () => {
	let primeraConsultaUsuarios = await manager.consultarUsuarios();
	console.log(primeraConsultaUsuarios);

	let user = {
		nombre: "Guido",
		apellido: "Pawluk",
		edad: 29,
		curso: "Backend",
		pass: "123",
	};

	let result = await manager.crearUsuarios(user);
	console.log(result);

	// let segundaConsultaUsuarios = await manager.consultarUsuarios();
	// console.log(segundaConsultaUsuarios);

	// manager.validarUsuarios("Guido", "123");
};

env();
