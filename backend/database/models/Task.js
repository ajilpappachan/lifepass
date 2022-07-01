const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
	owner: { type: String, required: true },
	title: { type: String, required: true },
	claimed: { type: Boolean, required: true, default: false },
});

const Daily = mongoose.model("dailytask", taskSchema);
const Weekly = mongoose.model("weeklytask", taskSchema);
const Pass = mongoose.model("passtask", taskSchema);

module.exports = { Daily, Weekly, Pass };
