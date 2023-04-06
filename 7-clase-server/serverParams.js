const express = require("express");
// import express from "express"; // no hay diferencia entre ambos - solo que en el package json tenes que ponerle "type":"module", abajo de 'main'

const app = express();
app.use(express.urlencoded({ extended: true }));

let usuarios = [
	{ id: 1, nombre: "Guido1", apellido: "Pawluk1" },
	{ id: 2, nombre: "Guido2", apellido: "Pawluk2" },
	{ id: 3, nombre: "Guido3", apellido: "Pawluk3" },
];

app.get("/", (request, response) => {
	// console.log(request);
	response.send({ usuarios });
});

app.get("/bienvenida", (request, response) => {
	// console.log(request);
	response.send("<h1 style='color:blue'>Bienvenido!</h1>");
});

app.get("/usuario", (request, response) => {
	// console.log(request);
	response.send({
		nombre: "Guido",
		apellido: "Pawluk",
		edad: 29,
		correo: "guidopawluk@test.com",
	});
});

app.get("/:idUsuario", (request, response) => {
	// console.log(request);
	const { idUsuario } = request.params;
	const usuario = usuarios.find((usuario) => usuario.id == idUsuario);

	if (!usuario) return response.send({ error: "no se encuentra el usuario" });

	response.send({ usuario });
});

app.get("/usuario/:nombre", (request, response) => {
	console.log(request.params);
	response.send({
		nombre: request.params.nombre,
		apellido: "Pawluk",
		edad: 29,
		correo: "guidopawluk@test.com",
	});
});
app.get("/usuario/:nombre/:apellido", (request, response) => {
	console.log(request.params);
	response.send({
		nombre: request.params.nombre,
		apellido: request.params.apellido,
		edad: 29,
		correo: "guidopawluk@test.com",
	});
});

app.listen(8080, () => {
	console.log("Escuchando el puerto 8080");
});
