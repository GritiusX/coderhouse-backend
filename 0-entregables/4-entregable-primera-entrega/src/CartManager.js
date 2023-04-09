const fs = require("fs");

class CartManager {
	constructor(path) {
		this.path = path || "./src/cart.json";
		this.cart = [];
	}

	async validateCart(newArray) {
		let validationResult = true;

		if (!Array.isArray(newArray)) {
			console.error("It is not an array");
			return (validationResult = false);
		}
		return validationResult;
	}

	async getCart(cartId) {
		try {
			const data = await fs.promises.readFile(this.path, "utf-8");
			this.cart = JSON.parse(data);

			if (parseInt(cartId) === -1) {
				return this.cart;
			}
			if (parseInt(cartId) > this.cart.length) {
				return console.error("No hay un cart con ese id");
			}

			const filteredCart = this.cart.find(
				(cart) => cart.id === parseInt(cartId)
			);

			return filteredCart;
		} catch (error) {
			console.error(`No se pudo obtener el cart: ${error.message}`);
		}
	}

	async addCart(newCartArray) {
		try {
			const validationResult = await this.validateCart(newCartArray);
			const CartArray = await this.getCart(-1);

			if (validationResult) {
				const arrayObject = { id: "", products: newCartArray };
				arrayObject.id = CartArray.length === 0 ? 1 : CartArray.length + 1;

				CartArray.push(arrayObject);

				await fs.promises.writeFile(
					this.path,
					JSON.stringify(CartArray),
					"utf-8"
				);

				return CartArray;
			}

			return CartArray;
		} catch (error) {
			console.error(`No se pudo agregar el cart: ${error.message}`);
		}
	}

	async addProductCart(cartId, productId) {
		try {
			if (cartId <= 0) {
				return console.error(`No existe un cart con ese Id`);
			}
			const cartById = await this.getCart(cartId);
			const allCarts = await this.getCart(-1);

			const productsFromCart = cartById.products.find(
				(product) => product.product === parseInt(productId)
			);

			if (!productsFromCart) {
				cartById.products.push({ product: parseInt(productId), quantity: 1 });
			} else {
				productsFromCart.quantity++;
			}

			const cartFound = allCarts.find((cart) => cart.id === cartById.id);

			if (cartFound) {
				cartFound.products = cartById.products;
			} else {
				allCarts.push(cartById);
			}

			await fs.promises.writeFile(this.path, JSON.stringify(allCarts), "utf-8");
			return allCarts;
		} catch (error) {
			console.error(`No se pudo agregar el cart: ${error.message}`);
		}
	}
}

module.exports = CartManager;

// if (cartId <= 0) {
// 	console.error(`No existe un cart con ese Id`);
// }
// const allCarts = await this.getCart(-1);
// const cartArray = await this.getCart(cartId);

// if (!cartArray) {
// 	return console.error(`No hay carts con ese Id: ${cartId}`);
// }

// const getProductsArray = cartArray.products.find(
// 	(p) => p.product === parseInt(productId)
// );

// getProductsArray
// 	? getProductsArray.quantity++
// 	: cartArray.products.push({
// 			product: parseInt(productId),
// 			quantity: 1,
// 	  });
// console.log(allCarts.id);
// // await fs.promises.writeFile(
// // 	this.path,
// // 	JSON.stringify(getCartProducts),
// // 	"utf-8"
// // );
