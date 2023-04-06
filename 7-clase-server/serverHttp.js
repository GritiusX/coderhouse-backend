const http = require("http");

const server = http.createServer((peticion, respuesta) => {
	respuesta.end("Hola Coder, funciona mejor que la app");
});

server.listen(8000, () => {
	console.log("Escuchando el puerto 8000");
});
