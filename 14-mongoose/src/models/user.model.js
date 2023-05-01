/// esquema
const { Schema, model } = require("mongoose");

// model se usa para tener todos los metodos disponibles para crear, insertar ,modificar, eliminar, etc

const collection = "usuarios"; //esta es la collection a la que quiero llegar de aca a mi base de datos

const userSchema = new Schema({
	first_name: String,
	last_name: {
		type: String,
		required: true,
	},
	email: {
		type: String,
		required: true,
		unique: true,
	},
});

const userModel = model(collection, userSchema); //este es el objeto que a traves de model va a la collection que queremos y le enviara datos con ese Schema

module.exports = {
	userModel,
};
