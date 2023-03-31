//title,description,price,thumbnailcode,stock
class ProductManager {
	constructor() {
		this.products = [];
	}

	getProducts() {
		return this.products;
	}

	validateProduct(newProduct) {
		const productKeys = [
			"title",
			"description",
			"price",
			"thumbnail",
			"code",
			"stock",
		];

		let validationResult = true;

		if (!newProduct) {
			//throw new Error("Error, por favor agregue un producto);
			console.error("Error, por favor agregue un producto");
			return false;
		}

		if (this.products.some((product) => product.code === newProduct.code)) {
			console.error("El código ya existe");
			return false;
		}

		for (let key in newProduct) {
			if (!newProduct[key]) {
				console.error(`El dato ${key} es requerido`);
				validationResult = false;
			}
		}

		return validationResult;
	}

	addProduct = (title, description, price, thumbnail, code, stock) => {
		const newProduct = {
			title,
			description,
			price,
			thumbnail,
			code,
			stock,
		};

		const validationResult = this.validateProduct(newProduct);

		if (validationResult) {
			newProduct.id = this.products === 0 ? 1 : this.products.length + 1;
			this.products.push(newProduct);
		}
	};

	getProductById = (productId) => {
		if (productId === 0 || productId > this.products.length) {
			return console.log("Producto no encontrado");
		}
		return this.products.find((product) => product.id === productId);
	};
}

const productManager = new ProductManager();
productManager.addProduct(
	"producto1",
	"esto es una descripcion",
	1234,
	"sin foto",
	"abc123"
);
// productManager.addProduct(
// 	"producto2",
// 	"esto es una descripcion",
// 	1234,
// 	"sin foto",
// 	"abc123",
// 	1
// );
// productManager.addProduct(
// 	"producto3",
// 	"esto es una descripcion",
// 	1234,
// 	"sin foto",
// 	"abc123",
// 	2
// );
// productManager.addProduct(
// 	"producto4",
// 	"esto es una descripcion",
// 	1234,
// 	"sin foto",
// 	"abc123456",
// 	3
// );
// productManager.addProduct(
// 	"producto5",
// 	"esto es una descripcion",
// 	1234,
// 	"sin foto",
// 	"abc12456"
// );

//console.log(productManager.getProducts());
// console.log(
// 	"======================================================================="
// );
//console.log("getProductByID", productManager.getProductById(3));
