const express = require("express");
const cookieParser = require("cookie-parser");
// import express from "express"; // no hay diferencia entre ambos - solo que en el package json tenes que ponerle "type":"module", abajo de 'main'
const userRouter = require("./routes/users.router");
const productsRouter = require("./routes/products.router");
const cartRouter = require("./routes/cart.router");
const viewsRouter = require("./routes/views.router");
const { uploader } = require("./utils.js");
//  --------------------------------------------------------------------------------------------------------------------------------

const { Server } = require("socket.io");

const app = express();
const PORT = 8080;

const httpServer = app.listen(PORT, () => {
	console.log(`Escuchando el puerto ${PORT}`);
});

const socketServer = new Server(httpServer);

// handlebars --------------------------------------------------------------------------------------------------------------------------------
const handlebars = require("express-handlebars");
app.engine("handlebars", handlebars.engine());
app.set("views", __dirname + "/views");
app.set("view engine", "handlebars");
// handlebars --------------------------------------------------------------------------------------------------------------------------------

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/public"));
app.use(cookieParser()); //middleware de tercero

//http://localhost:8080 /api/usuarios
app.use("/api/usuarios", userRouter);

app.post("/single", uploader.single("myFile"), (req, res) => {
	res.status(200).send({
		status: "Success",
		message: "Subido correctamente",
	});
}); //UNICA RUTA QUE TIENE EL POST ADENTRO PORQUE ESTAMOS PROBANDO MULTER

//localhost:8080 /api/productos //productsRouter
app.use("/api/products", productsRouter);

app.get("/chat", (req, res) => {
	res.render("chat", {});
});

app.get("/", (req, res) => {
	res.render("index", {});
});

socketServer.on("connection", (socket) => {
	console.log("nuevo cliente conectado");
	console.log(socket.id);

	let logs = [];
	socket.on("message2", (data) => {
		logs.push({ socketId: socket.id, message: data });

		socketServer.emit("log", { logs });
	});

	// socket.on("message", (data) => {
	// 	console.log(data);
	// });

	// socket.emit(
	// 	"evento-para-el-cliente",
	// 	"este mensaje lo recibio el cliente DESDE el servidor"
	// );

	// socket.broadcast.emit(
	// 	"evento-para-todos-menos-el-socket-actual",
	// 	"este mensaje sera recibido para todos salvo para el socket que refresco"
	// );

	// socketServer.emit(
	// 	"evento-para-todos",
	// 	"Este mensaje los reciben todos los sockets conectados"
	// );
});

//estas son todos las variables que pueden estar dentro del metodo
app.use((err, req, res, next) => {
	console.log(err);
	res.status(500).send("Todo mal");
});

//localhost = 127.0.0.1
