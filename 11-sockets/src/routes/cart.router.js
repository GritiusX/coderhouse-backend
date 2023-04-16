const { Router } = require("express");

const router = Router();

router.get("/", (req, res) => {
	res.send("Get Cart");
});

module.exports = router;
