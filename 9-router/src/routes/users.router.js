const { Router } = require("express");

const router = Router();

// router inicial, igual que era en app
// GET = https://localhost:8080 /usuarios
let usuarios = [
	{ id: 1, nombre: "Guido 1", apellido: "Pawluk1", genero: "M" },
	{ id: 2, nombre: "Maria 2", apellido: "Pawluk2", genero: "F" },
	{ id: 3, nombre: "Guido 3", apellido: "Pawluk3", genero: "M" },
	{ id: 4, nombre: "Maria 4", apellido: "Pawluk3", genero: "F" },
	{ id: 5, nombre: "Guido 5", apellido: "Pawluk3", genero: "M" },
	{ id: 6, nombre: "Guido 6", apellido: "Pawluk3", genero: "M" },
	{ id: 7, nombre: "Maria 7", apellido: "Pawluk3", genero: "F" },
	{ id: 8, nombre: "Guido 8", apellido: "Pawluk3", genero: "M" },
	{ id: 9, nombre: "Guido 9", apellido: "Pawluk3", genero: "M" },
];
//router.get("/", (req, res) => {});

const mid2 = (req, res, next) => {
	req.dato2 = "dato dos";
	next();
};

router.get("/", mid2, (request, response) => {
	//console.log(request.query);
	const { genero } = request.query;

	// aca podriamos chequear el dato2 que viene del mid2
	if (!genero || (genero !== "M" && genero !== "F")) {
		return response.send({ usuarios });
	}
	let userFilter = usuarios.filter((user) => user.genero == genero);

	response.send({ userFilter });
});

// POST = https://localhost:8080 /usuarios
router.post("/", (req, res) => {
	let user = req.body;

	if (!user.nombre || !user.apellido)
		return res
			.status(400)
			.send({ status: "error", mensaje: "todos los campos son necesarios" });
	usuarios.push(user);
	res.status(200).send({ user });
});

// PUT = https://localhost:8080 /usuarios
router.put("/usuarios/:pid", (req, res) => {
	const { pid } = req.params;
	const user = req.body;

	//validar pid
	//if(!pId) return
	//validar campos
	if (!user.nombre || !user.apellido) {
		return res
			.status(400)
			.send({ status: "error", mensaje: "todos los campos son necesarios" });
	}
	//buscar por pid user
	const index = usuarios.findIndex((usuario) => usuario.id === parseInt(pid));
	console.log(index);
	//validar que exista
	if (index === -1) {
		return res.send({ status: "error", mensaje: "no existe el usuario!" });
	}

	usuarios[index] = user;
	res.send({ usuarios });
});

// DELETE = https://localhost:8080 /usuarios
router.delete("/usuarios/:uid", (req, res) => {
	const { uid } = req.params;
	const index = usuarios.findIndex((usuario) => usuario.id === parseInt(uid));
	if (index === -1) {
		return res.send({ status: "error", mensaje: "no existe el usuario!" });
	}
	usuarios = usuarios.filter((usuario) => usuario.id !== parseInt(uid));

	res.send({ status: "success", payload: { usuarios } });
});

module.exports = router;
