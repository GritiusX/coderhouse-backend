const express = require("express");
const ProductManager = require("./3-entregable");

const app = express();
const productManager = ProductManager;

app.use(express.urlencoded({ extended: true }));

app.get("/products", (req, res) => {
	const { products } = req.query;
	//if (!products) return res.send({ error: "No hay productos" });

	const productsArray = productManager.getProducts();
	res.send({ productsArray });
});

app.listen(8080, () => {
	console.log("Escuchando el puerto 8080");
});
