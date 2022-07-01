const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
	username: { type: String, required: true },
	password: { type: String, required: true },
	day: { type: Number, required: true, default: 0 },
	points: { type: Number, required: true, default: 0 },
	level: { type: Number, required: true, default: 0 },
	balance: { type: Number, required: true, default: 0 },
	budget: { type: Number, required: true },
	currency: { type: String, required: true },
});

const User = mongoose.model("user", userSchema);

module.exports = User;
