const { Router } = require("express");
// const ProductManager = require("../Dao/fs/ProductManager"); // fs ProductManager
const ProductManager = require("../Dao/mongo/ProductManager");

const router = Router();
const productManager = new ProductManager();

router.get("/", async (req, res) => {
	try {
		const allProducts = await productManager.getProducts();

		return res.send({
			status: "success",
			payload: allProducts,
		});
	} catch (error) {
		res.status(404).send({ status: 404, error: error.message });
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

		return res.send({ message: "product obtained successfully", productById });
	} catch (error) {
		res.status(404).send({ status: 404, error: error.message });
	}
});

router.post("/", async (req, res) => {
	try {
		const body = req.body;
		const productAdded = await productManager.addProduct(body);
		return res.status(200).send({
			status: 200,
			payload: { productAdded },
			message: "product added successfully",
		});
	} catch (error) {
		res.status(404).send({ status: 404, error: error.message });
	}
});

router.put("/:pId", async (req, res) => {
	try {
		const { pId } = req.params;
		const body = req.body;

		const productToReplace = {
			title: body.title,
			description: body.description,
			thumbnail: body.thumbnail,
			price: body.price,
			stock: body.stock,
			code: body.code,
		};

		const productById = await productManager.updateProduct(
			pId,
			productToReplace
		);

		return res.status(200).send({
			status: "success",
			payload: { productById },
			message: "product updated successfully",
		});
	} catch (error) {
		res.status(404).send({ status: 404, error: error.message });
	}
});

router.delete("/:pId", async (req, res) => {
	try {
		const { pId } = req.params;
		const deleteById = await productManager.deleteProduct(pId);

		return res.status(200).send({
			status: "success",
			payload: { deleteById },
			message: "product deleted successfully",
		});
	} catch (error) {
		res.status(404).send({ status: 404, error: error.message });
	}
});

module.exports = router;
