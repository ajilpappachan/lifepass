const mongoose = require("mongoose");

const User = require("./models/User");
const { Daily, Weekly, Pass } = require("./models/Task");

mongoose.connect(process.env.DATABASE_URL);
const db = mongoose.connection;
db.on("connected", () => {
	console.log("Connected to database");
});

module.exports = {
	User,
	Daily,
	Weekly,
	Pass,
};
