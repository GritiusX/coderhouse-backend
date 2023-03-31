const express = require("express");
// import express from "express"; // no hay diferencia entre ambos - solo que en el package json tenes que ponerle "type":"module", abajo de 'main'

const app = express();
app.use(express.urlencoded({ extended: true }));

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

app.get("/query", (request, response) => {
	console.log(request.query);
	const { nombre, apellido } = request.query;
	response.send({ nombre, apellido });
});

app.get("/usuarios", (request, response) => {
	//console.log(request.query);
	const { genero } = request.query;

	if (!genero || (genero !== "M" && genero !== "F")) {
		return response.send({ usuarios });
	}
	let userFilter = usuarios.filter((user) => user.genero == genero);

	response.send({ userFilter });
});

app.listen(8080, () => {
	console.log("Escuchando el puerto 8080");
});
