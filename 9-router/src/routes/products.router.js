const { Router } = require("express");
const ProductManager = require("../3-entregable");

const router = Router();
const productManager = new ProductManager("./src/data-3.json");

router.get("/", async (req, res) => {
	const products = await productManager.getProducts();
	res.send({ status: "success", payload: { products } });
});

router.post("/", async (req, res) => {
	const body = req.body;
	await productManager.addProduct(body);
	res.send({
		status: "success",
		message: `${Object.values(body)}`,
	});
});

module.exports = router;
//npm i multer
// npm i cookie-parser
