//title,description,price,thumbnailcode,stock
class ProductManager {
	constructor() {
		this.products = [];
	}

	getProducts() {
		return this.products;
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
		if (
			!this.products.find((oldProduct) => oldProduct.code === newProduct.code)
		) {
			if (Object.values(newProduct).every((value) => value !== undefined)) {
				if (this.products.length === 0) {
					newProduct.id = 1;
				} else {
					newProduct.id = this.products[this.products.length - 1].id + 1;
				}
				this.products.push(newProduct);
				return console.log("-- Producto agregado correctamente");
			} else {
				return console.log("-- Uno de los campos es invalido o esta vacio");
			}
		} else {
			return console.log("-- Ya hay un producto con codigo repetido");
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
productManager.addProduct(
	"producto2",
	"esto es una descripcion",
	1234,
	"sin foto",
	"abc123",
	1
);
productManager.addProduct(
	"producto3",
	"esto es una descripcion",
	1234,
	"sin foto",
	"abc123",
	2
);
productManager.addProduct(
	"producto4",
	"esto es una descripcion",
	1234,
	"sin foto",
	"abc123456",
	3
);
productManager.addProduct(
	"producto5",
	"esto es una descripcion",
	1234,
	"sin foto",
	"abc12456"
);

console.log(productManager.getProducts());
console.log(
	"======================================================================="
);
console.log("getProductByID", productManager.getProductById(3));
