const express = require("express");
const productsRouter = require("./routes/products.router");
const cartRouter = require("./routes/cart.router");
const { Server } = require("socket.io");
// const http = require("http");
const viewRouter = require("./routes/views.router");
const handlebars = require("express-handlebars");
const ProductManager = require("./ProductManager");

//chequear sweetalert2 para modales y toasts

const app = express();
// const httpServer = http.createServer(app);

const PORT = 8080;

const httpServer = app.listen(PORT, () => {
	console.log(`Listening app port ${PORT}`);
});

const io = new Server(httpServer);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/public"));

app.engine("handlebars", handlebars.engine());
app.set("views", `${__dirname}/views`);
app.set("view engine", "handlebars");

app.use("/api/products", productsRouter);
app.use("/api/cart", cartRouter);
app.use("/", viewRouter);

const productManager = new ProductManager();

io.on("connection", async (socket) => {
	console.log("Nuevo cliente conectado", socket.id);
	const products = await productManager.getProducts();
	socket.emit("productos", products);

	socket.on("deleteProduct", async (data) => {
		const filteredArray = await productManager.deleteProduct(data.deleteInput);
		socket.emit("deletedProduct", filteredArray);
	});
	socket.on("addingProduct", async (data) => {
		console.log("APP.JS", data);
		const addProduct = await productManager.addProduct(data);
		const allProducts = await productManager.getProducts();
		//const filteredArray = await productManager.deleteProduct(data.deleteInput);
		socket.emit("addedProduct", allProducts);
	});
});

httpServer.on("error", (error) => {
	console.log("Error", error);
});
