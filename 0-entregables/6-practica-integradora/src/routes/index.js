const { Router } = require("express");
const productRouter = require("./products.router");
const cartRouter = require("./cart.router");

const router = Router();

router.use("/api/products", productRouter);
router.use("/api/cart", cartRouter);

module.exports = router;
