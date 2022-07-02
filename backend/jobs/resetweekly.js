const { Weekly } = require("../database");

const resetWeekly = async () => {
	console.log("Resetting Weekly Tasks");
	await Weekly.updateMany({}, { claimed: false });
	console.log("Weekly Reset Completed");
};

resetWeekly();
