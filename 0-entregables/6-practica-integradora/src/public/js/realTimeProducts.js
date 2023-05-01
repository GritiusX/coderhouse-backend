const socket = io();

// ==== delete products
const formDelete = document.querySelector("#formDelete");
formDelete.addEventListener("submit", (evt) => {
	evt.preventDefault();

	let deleteInput = formDelete.elements.deleteInput.value;

	if (deleteInput.trim() !== "") {
		socket.emit("deleteProduct", {
			deleteInput,
		});
	} else {
		console.log("el input esta vacio");
	}
	formDelete.reset();
});
socket.on("deletedProduct", (data) => {
	console.log("deletedProduct", data);
	listProducts.innerHTML = data;
});

// ==== add products
const dataForm = document.querySelector("#formAdd");
dataForm.addEventListener("submit", (evt) => {
	evt.preventDefault();

	const productToAdd = {
		title: dataForm.elements.title.value.trim(),
		description: dataForm.elements.description.value.trim(),
		code: dataForm.elements.code.value.trim(),
		price: dataForm.elements.price.value.trim(),
		stock: dataForm.elements.stock.value.trim(),
		category: dataForm.elements.category.value.trim(),
		thumbnails: "no hay foto nunca, como se agrega??",
		status: dataForm.elements.status.value.trim(),
	};

	if (Object.values(productToAdd) !== "") {
		socket.emit("addingProduct", productToAdd);
	} else {
		console.log("no se pudo agregar");
	}
	dataForm.reset();
});
socket.on("addedProduct", (data) => {
	console.log("deletedProduct", data);
	listProducts.innerHTML = data;
});

// ==== render products
socket.on("productos", (data) => {
	const listProducts = document.querySelector("#listProducts");
	let products = "";

	data.forEach((product) => {
		products += `
        <div class="product-container">
            <p>${product.title}</p>
            <p>${product.description}</p>
            <p>${product.price}</p>
            <p>${!product.thumbnail ? "no hay foto" : product.thumbnail}</p>
            <p>${product.code}</p>
            <p>${product.stock}</p>
            <p>${product.id}</p>
        </div>`;
	});
	listProducts.innerHTML = products;
});

// socket.emit("message", "Hola me estoy comunicando desde un cliente socket");

// socket.on("evento-para-el-cliente", (data) => {
// 	console.log(data);
// });

// socket.on("evento-para-todos-menos-el-socket-actual", (data) => {
// 	console.log(data);
// });

// socket.on("evento-para-todos", (data) => {
// 	console.log(data);
// });
