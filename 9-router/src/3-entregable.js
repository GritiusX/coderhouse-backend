const fs = require("fs");

class ProductManager {
	constructor(path) {
		this.products = [];
		this.path = path || "./data-3.json";
	}

	async getProducts() {
		try {
			const data = await fs.promises.readFile(this.path, "utf-8");
			this.products = JSON.parse(data);
			console.log(this.products);
			return this.products;
		} catch (error) {
			console.error(`No se pudo obtener los productos: ${error.message}`);
		}
	}

	async validateProduct(newProduct) {
		const productKeys = [
			"title",
			"description",
			"price",
			"thumbnail",
			"code",
			"stock",
		];

		let validationResult = true;
		const data = await fs.promises.readFile(this.path, "utf-8");
		this.products = JSON.parse(data);

		Object.values(newProduct).forEach((value) => {
			if (value === "" || value.length === 0) {
				console.error("Error, por favor agregue un producto");
				return false;
			}
		});
		// if (Object.keys(newProduct).length === 0) {
		// 	//throw new Error("Error, por favor agregue un producto);
		// 	console.error("Error, por favor agregue un producto");
		// 	return false;
		// }

		if (this.products.some((product) => product.code === newProduct.code)) {
			console.error("El código ya existe");
			return false;
		}

		for (let key in productKeys) {
			if (Object.keys(newProduct)[key] !== productKeys[key]) {
				console.log(`El dato ${productKeys[key]} es requerido`);
				return false;
			}
		}

		return validationResult;
	}

	async validateProductId(productId) {
		let validationResult = true;
		const data = await fs.promises.readFile(this.path, "utf-8");
		this.products = JSON.parse(data);

		if (productId === 0 || productId > this.products.length) {
			console.log("Producto no encontrado");
			return false;
		}
		return validationResult;
	}

	async addProduct(product) {
		try {
			const newProduct = { ...product };
			const validationResult = await this.validateProduct(newProduct);
			console.log(validationResult);
			const productsArray = await this.getProducts();

			if (validationResult) {
				newProduct.id =
					productsArray.length === 0 ? 1 : this.products.length + 1;

				productsArray.push(newProduct);

				await fs.promises.writeFile(
					this.path,
					JSON.stringify(productsArray),
					"utf-8"
				);
			}
		} catch (error) {
			console.error(`No se pudo agregar el producto: ${error.message}`);
		}
	}

	async getProductById(productId) {
		try {
			const validationResult = this.validateProductId(productId);
			if (validationResult) {
				const data = await fs.promises.readFile(this.path, "utf-8");
				this.products = JSON.parse(data);

				const filteredProduct = this.products.find(
					(product) => product.id === productId
				);

				console.log(filteredProduct);
				return filteredProduct;
			}
		} catch (error) {
			console.error(`No se pudo obtener el producto por ID: ${error.message}`);
		}
	}

	async updateProduct(productId, updatableProduct) {
		try {
			const validationResult = this.validateProductId(productId);
			if (validationResult) {
				const data = await fs.promises.readFile(this.path, "utf-8");
				this.products = JSON.parse(data);

				const product = this.products.find((p) => p.id === productId);
				const newProduct = { ...product, ...updatableProduct };

				const updatedArray = this.products.map((product) =>
					product.id === newProduct.id ? (product = newProduct) : product
				);

				return await fs.promises.writeFile(
					this.path,
					JSON.stringify(updatedArray),
					"utf-8"
				);
			}
		} catch (error) {
			return console.error(
				`No se pudo actualizar el producto por ID: ${error.message}`
			);
		}
	}

	async deleteProduct(productId) {
		try {
			const validationResult = await this.validateProductId(productId);
			if (validationResult) {
				const data = await fs.promises.readFile(this.path, "utf-8");
				this.products = JSON.parse(data);

				const newArray = this.products.filter(
					(product) => product.id !== productId
				);
				return await fs.promises.writeFile(
					this.path,
					JSON.stringify(newArray),
					"utf-8"
				);
			}
		} catch (error) {
			return console.error(
				`No se pudo eliminar el producto por ID: ${error.message}`
			);
		}
	}
}
module.exports = ProductManager;
// const productManager = new ProductManager();

// const product1 = {
// 	title: "producto 1",
// 	description: "DESCRIPCION 1",
// 	price: 1234,
// 	thumbnail: "sin foto",
// 	code: "abc123",
// 	stock: 1,
// };
// const product2 = {
// 	title: "producto 2",
// 	description: "DESCRIPCION 2",
// 	price: 4321,
// 	thumbnail: "sin foto",
// 	code: "321cba",
// 	stock: 14,
// };
// const product3 = {
// 	title: "producto 3",
// 	description: "DESCRIPCION 3",
// 	price: 4321,
// 	thumbnail: "sin foto",
// 	code: "123",
// 	stock: 14,
// };
// const updatableProduct = {
// 	title: "producto UPDATE",
// 	description: "DESCRIPCION UPDATE 2",
// 	price: 123123,
// 	thumbnail: "con foto",
// 	code: "ASD234",
// 	stock: 144,
// };

// productManager.addProduct(product1);
// productManager.addProduct(product2);
// productManager.addProduct(product3);
//console.log("PRODUCTS", productManager.products);
//productManager.getProducts();
//productManager.getProductById(2);
// productManager.getProductById(43);
//productManager.getProductById(2);
// productManager.getProductById(0);
//productManager.deleteProduct(2);
