const express = require("express");
const ProductManager = require("./3-entregable");

const app = express();
const productManager = new ProductManager();

app.use(express.urlencoded({ extended: true }));

app.get("/products", async (req, res) => {
	try {
		const productsArray = await productManager.getProducts();
		let limit = req.query.limit;

		if (!limit || limit > productsArray.length) {
			res.send(productsArray);
		}

		return res.send(productsArray.slice(0, limit));
	} catch (error) {
		console.error(`APP: No se pudo obtener los productos: ${error.message}`);
	}
});

app.get("/products/:pId", async (req, res) => {
	try {
		let { pId } = req.params;
		const productById = await productManager.getProductById(parseInt(pId));
		const productsArray = await productManager.getProducts();

		if (!pId || pId > productsArray.length) {
			res.send(productsArray);
		}

		return res.send({ productById });
	} catch (error) {
		console.error(
			`APP: No se pudo obtener el producto por Id: ${error.message}`
		);
	}
});

app.listen(8080, () => {
	console.log("Escuchando el puerto 8080");
});
