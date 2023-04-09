const { Router } = require("express");
const CartManager = require("../CartManager");

const router = Router();
const cartManager = new CartManager();

router.get("/:cId", async (req, res) => {
	try {
		const { cId } = req.params;
		const cart = await cartManager.getCart(cId);
		res.status(200).send({ status: 200, payload: { cart } });
	} catch (error) {
		console.error(`APP: error al querer obtener el carrito`);
	}
});

router.post("/", async (req, res) => {
	try {
		const array = await cartManager.addCart(req.body);
		res.status(200).send({ status: 200, payload: array });
	} catch (error) {
		console.error(`APP: error al modificar el carrito`);
	}
});

router.post("/:cId/product/:pId", async (req, res) => {
	try {
		const { cId, pId } = req.params;
		const getCartArray = await cartManager.addProductCart(cId, pId);

		res.status(200).send({ status: 200, payload: getCartArray });
	} catch (error) {
		console.error(`APP: POST error al modificar el carrito`);
	}
});
module.exports = router;
