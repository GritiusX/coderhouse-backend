const socket = io();

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

const input = document.getElementById("text");
const logM = document.getElementById("mensajes");

input.addEventListener("keyup", (e) => {
	if (e.key === "Enter") {
		socket.emit("message2", input.value);
		input.value = "";
	}
});

socket.on("log", (data) => {
	let logss = "";
	data.logs.forEach((log) => {
		logss += `<li>${log.socketId} dice: ${log.message} </li>`;
	});
	logM.innerHTML = logss;
});
