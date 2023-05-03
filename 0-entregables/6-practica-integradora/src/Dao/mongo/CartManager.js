const { cartModel } = require("../models/cart.model");

class CartManagerMongo {
	constructor() {
		this.cartModel = cartModel;
	}
	async getCarts() {
		try {
			return await cartModel.find({});
		} catch (error) {
			throw new Error(" CartManagerMongo.getCarts " + error.message);
		}
	}
	async getCartById(cid) {
		try {
			return await cartModel.findOne({ _id: cid });
		} catch (error) {
			throw new Error(" CartManagerMongo.getCartsById " + error.message);
		}
	}
	async addCart(products) {
		try {
			if (!Array.isArray(products)) {
				throw new Error("It is not an array");
			}
			return await cartModel.create({ products });
		} catch (error) {
			throw new Error(" CartManagerMongo.addCarts " + error.message);
		}
	}

	async addProductInCart(cartId, productId, productBody) {
		try {
			const cart = await cartModel.find(
				{ _id: cartId },
				{
					products: 1,
				}
			);

			return cart;
		} catch (error) {
			throw new Error(" CartManagerMongo.updateCart " + error.message);
		}
	}

	async deleteCart(cid) {
		try {
		} catch (error) {
			throw new Error(" CartManagerMongo.deleteCart " + error.message);
		}
	}
}

module.exports = CartManagerMongo;
