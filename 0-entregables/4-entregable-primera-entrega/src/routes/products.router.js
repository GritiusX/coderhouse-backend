const { Router } = require("express");
const ProductManager = require("../ProductManager");

const router = Router();
const productManager = new ProductManager();

router.get("/", async (req, res) => {
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

router.get("/:pId", async (req, res) => {
	try {
		const { pId } = req.params;
		const productById = await productManager.getProductById(parseInt(pId));
		const productsArray = await productManager.getProducts();

		if (!pId || pId > productsArray.length) {
			return res
				.status(404)
				.send({ error: `El producto con id ${pId} no existe` });
		}

		return res.send({ productById });
	} catch (error) {
		console.error(
			`APP: No se pudo obtener el producto por Id: ${error.message}`
		);
	}
});

router.post("/", (req, res) => {
	try {
		const body = req.body;
		const productAdded = productManager.addProduct(body);
		return res.status(200).send({
			status: "success",
			message: "aqui te tengo tu cariñito",
			productAdded,
		});
	} catch (error) {
		console.error(`APP: error en el cariñito`);
	}
});

module.exports = router;
