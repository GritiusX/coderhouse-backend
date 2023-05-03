const { Schema, model } = require("mongoose");

const collection = "carts";

const cartSchema = new Schema({
	products: {
		type: [],
		required: true,
	},
});

const cartModel = model(collection, cartSchema);

module.exports = {
	cartModel,
};
