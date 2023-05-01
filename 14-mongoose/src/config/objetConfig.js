const { connect } = require("mongoose");

let url =
	"mongodb+srv://guidopaw:guidito11@cluster0.ssa863r.mongodb.net/comision39750?retryWrites=true&w=majority";

module.exports = {
	connectDB: () => {
		connect(url);
		console.log("Base de datos conectada");
	},
};
