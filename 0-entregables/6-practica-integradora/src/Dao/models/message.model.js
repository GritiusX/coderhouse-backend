const { Schema, model } = require("mongoose");

const collection = "messages";

const messageSchema = new Schema({
	user: {
		type: String,
		required,
	},
	message: {
		type: String,
		required,
	},
});

const messageModel = model(collection, messageSchema);

module.exports = {
	messageModel,
};
