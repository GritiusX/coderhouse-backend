const { connect } = require("mongoose");

let url =
	"mongodb+srv://guidopaw:guidito11@cluster0.ssa863r.mongodb.net/eccomerce?retryWrites=true&w=majority";

module.exports = {
	connectDb: () => {
		connect(url);
		console.log("6-practica-integradora- DB CONECTADA");
	},
};
