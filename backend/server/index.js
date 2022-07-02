const express = require("express");
const path = require("path");

const indexRoutes = require("./routes/index");
const userRoutes = require("./routes/user");
const dailyRoutes = require("./routes/daily");
const weeklyRoutes = require("./routes/weekly");
const passRoutes = require("./routes/pass");

const app = express();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/", indexRoutes);
app.use("/user", userRoutes);
app.use("/daily", dailyRoutes);
app.use("/weekly", weeklyRoutes);
app.use("/pass", passRoutes);

const port = process.env.PORT || 8000;
const server = app.listen(port, () => {
	console.log("Server listening on port " + port);
});

module.exports = { app, server };
