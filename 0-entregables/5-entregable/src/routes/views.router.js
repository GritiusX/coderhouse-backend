const { Router } = require("express");
const ProductManager = require("../ProductManager");
const router = Router();
const productManager = new ProductManager();

router.get("/", async (req, res) => {
	res.status(200).send({ status: 200, payload: "ok" });
});

router.get("/home", async (req, res) => {
	const allProducts = await productManager.getProducts();

	let productsObj = {
		products: allProducts,
		style: "home.css",
		title: "Home Products List",
	};

	res.status(200).render("home", productsObj);
});

router.get("/realtimeproducts", async (req, res) => {
	let productsObj = {
		style: "realTime.css",
		title: "Real Time Products List",
	};
	res.status(200).render("realTimeProducts", productsObj);
});
module.exports = router;
