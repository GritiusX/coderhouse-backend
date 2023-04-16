const { Router } = require("express");
const router = Router();

let food = [
	{ name: "producto 1", price: 150 },
	{ name: "producto 2", price: 250 },
	{ name: "producto 3", price: 350 },
	{ name: "producto 4", price: 450 },
	{ name: "producto 5", price: 550 },
];

let users = [
	{
		name: "Guido",
		last_name: "Pawluk1",
		title: "Ecommerce 1",
		role: "user",
	},
	{
		name: "Guido",
		last_name: "Pawluk2",
		title: "Ecommerce 2",
		role: "admin",
	},
	{
		name: "Guido",
		last_name: "Pawluk3",
		title: "Ecommerce 3",
		role: "user",
	},
	{
		name: "Guido",
		last_name: "Pawluk4",
		title: "Ecommerce 4",
		role: "admin",
	},
	{
		name: "Guido",
		last_name: "Pawluk5",
		title: "Ecommerce 5",
		role: "user",
	},
];

router.get("/", (req, res) => {
	let randomNumber = Math.floor(Math.random() * 5);
	let user = users[randomNumber];

	let testUser = {
		user,
		isAdmin: user.role === "admin",
		food,
		style: "index.css",
	};

	res.render("index", testUser);
});

router.get("/register", (req, res) => {
	res.render("registerForm", {
		style: "index.css",
	});
});

module.exports = router;
