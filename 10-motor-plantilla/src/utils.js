const multer = require("multer"); //chequear documentacion de multer

const storage = multer.diskStorage({
	destination: function (req, file, cb) {
		cb(null, `${__dirname}/public/uploads`); //es la direccion donde vamos a llevar el file
	},
	filename: function (req, file, cb) {
		console.log("file: ", file);
		cb(null, `${Date.now()}-${file.originalname}`);
	},
});

const uploader = multer({
	storage,
	onError: function (err, next) {
		console.log(err);
		next();
	},
});

module.exports = { uploader };
