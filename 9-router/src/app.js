const express = require("express");
// import express from "express"; // no hay diferencia entre ambos - solo que en el package json tenes que ponerle "type":"module", abajo de 'main'
const userRouter = require("./routes/users.router");
const productsRouter = require("./routes/products.router");
const cartRouter = require("./routes/cart.router");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static("public"));

const mid1 = (req, res, next) => {
	//si le agregamos este mid1 antes del userRouter, podemos hacer un middleware
	// para chequear cualquier cosa ANTES de pegarle al endpoint
	req.dato1 = "dato uno";
	res.send("no tenes permiso para ver los usuarios");
};

//http://localhost:8080 /api/usuarios
app.use("/api/usuarios", userRouter);

//localhost:8080 /api/productos //productsRouter
app.use("/api/products", productsRouter);

//localhost:8080 /api/carrito //cartRouter
app.use("/api/cart", cartRouter);

//estas son todos las variables que pueden estar dentro del metodo
app.use((err, req, res, next) => {
	console.log(err);
	res.status(500).send("Todo mal");
});

const PORT = 8080;

app.listen(PORT, () => {
	console.log(`Escuchando el puerto ${PORT}`);
});

//localhost = 127.0.0.1
