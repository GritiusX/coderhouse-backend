const express = require("express");
const configObject = require("./config/configServer");
const routerServer = require("./routes/index");

const app = express();
configObject.connectDb();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/public"));

app.use(routerServer);

const PORT = 8080;
app.listen(PORT, () => {
	console.log(`Listening app port ${PORT}`);
});
