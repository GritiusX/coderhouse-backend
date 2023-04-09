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
				console.error(`No existe un cart con ese Id`);
			}
			const allCarts = await this.getCart(-1);
			const getCartProducts = await this.getCart(cartId);

			if (!getCartProducts) {
				return console.error(`No hay carts con ese Id: ${cartId}`);
			}

			const getAProductFromCart = getCartProducts.products.find(
				(p) => p.product === parseInt(productId)
			);

			getAProductFromCart
				? getAProductFromCart.quantity++
				: getCartProducts.products.push({
						product: parseInt(productId),
						quantity: 1,
				  });
			let updatedCart = allCarts.find((cart) => cart.id === getCartProducts.id);
			updatedCart = getCartProducts;

			console.log("1", getAProductFromCart);
			console.log("2", getCartProducts);
			console.log("3", updatedCart);

			// await fs.promises.writeFile(
			// 	this.path,
			// 	JSON.stringify(getCartProducts),
			// 	"utf-8"
			// );

			return allCarts;
		} catch (error) {
			console.error(`No se pudo agregar el cart: ${error.message}`);
		}
	}
}

module.exports = CartManager;

// class CartManager {
// 	constructor(file) {
// 		this.file = file;
// 	}

// 	async existsFile(file) {
// 		try {
// 			if (!fs.existsSync(file)) {
// 				throw new Error("The file does not exists");
// 			}
// 			return true;
// 		} catch (error) {
// 			console.log(`Error searching the file: ${error.message}`);
// 		}
// 	}

// 	async readFile(file) {
// 		try {
// 			const data = await fs.promises.readFile(file);
// 			return JSON.parse(data);
// 		} catch (error) {
// 			console.log(`Error reading the file: ${error.message}`);
// 		}
// 	}

// 	async writeFile(data) {
// 		try {
// 			await fs.promises.writeFile(this.archivo, JSON.stringify(data, null, 2));
// 		} catch (err) {
// 			console.log(err);
// 		}
// 	}

// 	async createCart() {
// 		try {
// 			if (!existsFile(this.file)) {
// 				let cartsArray = [];
// 				const cart = {
// 					id: this.#idGen(),
// 					products: [],
// 				};
// 				cartsArray.push(cart);
// 				await this.writeFile(cartsArray);
// 				console.log(`The cart was added with the id: ${cart.id}`);
// 				return cart.id;
// 			} else {
// 				/* si el archivo existe, primero verifico si esta vacio */
// 				if (this.readFile(this.archivo)) {
// 					const cartsArray = await this.readFile(this.archivo);
// 					// const cartsArray = await this.getProducts()
// 					if (cartsArray.length === 0 || !cartsArray) {
// 						/* si esta vacio no le paso parametro al idGenerator, por lo que le pondra id: 1 */
// 						const cart = {
// 							id: this.#idGen(),
// 							products: [],
// 						};
// 						cartsArray.push(cart);
// 					} else {
// 						/* si ya tiene algun producto, le paso el array de productos como parametro al idGenerator para que le ponga el id correspondiente */
// 						const cart = {
// 							id: this.#idGen(cartsArray),
// 							products: [],
// 						};
// 						cartsArray.push(cart);
// 					}
// 					/* escribo el producto */
// 					await this.writeFile(cartsArray);
// 					console.log(`The cart was added with the id: ${cart.id}`);
// 					return carts;
// 				}
// 			}
// 		} catch (error) {
// 			console.log(`Error adding product: ${error.message}`);
// 		}
// 	}

// 	getCartById = async (id) => {
// 		try {
// 			if (this.exists(this.archivo)) {
// 				let carts = await this.readFile(this.archivo);
// 				const cart = carts.find((item) => item.id === id);
// 				return cart ? cart : console.log("No product found");
// 			}
// 			return console.log("The db not exist");
// 		} catch (error) {
// 			console.log(error);
// 		}
// 	};

// 	addToCart = async (cid, pid) => {
// 		try {
// 			if (this.exists(this.archivo)) {
// 				const carts = await this.readFile(this.archivo);
// 				const cart = carts.find((item) => item.id === cid);
// 				console.log(cart);
// 				if (cart) {
// 					const addProduct = cart.products.find((item) => item.id === pid);
// 					if (addProduct) {
// 						addProduct.quantity++;
// 					} else {
// 						cart.products.push({ id: pid, quantity: 1 });
// 					}
// 					await this.writeFile(carts);
// 					return cart;
// 				}
// 				throw new Error(`The cart with the id was not found: ${cid}`);
// 			}
// 		} catch (error) {
// 			console.log(error);
// 		}
// 	};

// 	#idGen(productsArray = []) {
// 		const id =
// 			productsArray.length === 0
// 				? 1
// 				: productsArray[productsArray.length - 1].id + 1;
// 		return id;
// 	}
// }

// module.exports = CartManager;
