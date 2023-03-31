const fs = require("fs");
const crypto = require("crypto");

const path = "./files/users.json";
// volver a chequear
class UserManager {
	consultarUsuarios = async () => {
		try {
			if (fs.existsSync(path)) {
				const data = fs.promises.readFile(path, "utf-8");
				console.log(data);
				const users = JSON.parse(data);
				return users;
			}
			await fs.promises.writeFile(path, "[]", "utf-8");
			return [];
		} catch (error) {
			console.log(error);
		}
	};

	crearUsuarios = async (usuario) => {
		try {
			const users = await this.consultarUsuarios();
			users.length === 0 ? (usuario.id = 1) : (usuario.id = users.length + 1);

			usuario.salt = crypto.randomBytes(128).toString("base64"); // alfa numerico
			usuario.password = crypto
				.createHmac("sha256", usuario.salt)
				.update(usuario.pass)
				.digest("hex");

			users.push(usuario);
			await fs.promises.writeFile(
				path,
				JSON.stringify(users, null, 2),
				"utf-8"
			);

			return usuario;
		} catch (error) {
			console.log(error);
		}
	};

	validarUsuarios = async (nombre, pass) => {
		try {
			const usuarios = await this.consultarUsuarios();
			const usuarioIndex = usuarios.findIndex((u) => u.nombre === nombre);

			if (usuarioIndex === -1) {
				console.log("error,usuario no encontrado");
			}

			const usuario = usuarios[usuarioIndex];
			const newHash = crypto
				.createHmac("sha256", usuario.salt)
				.update(pass)
				.digest("hex");

			if (newHash === usuario.password) {
				console.log("LOGUEADO");
			} else {
				console.log("Contraseña invalida");
			}
		} catch (error) {
			console.log(error);
		}
	};
}

module.exports = { UserManager };
