const express = require("express");

const indexRoutes = require("./routes");

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/", indexRoutes);

const port = process.env.PORT || 8000;
const server = app.listen(port, () => {
	console.log("Server listening on port " + port);
});

module.exports = { app, server };
