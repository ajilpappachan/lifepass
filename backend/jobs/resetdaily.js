const { User, Daily } = require("../database");

const resetDaily = async () => {
	console.log("Resetting Daily Tasks");
	await Daily.updateMany({}, { claimed: false });
	const users = await User.find({});
	users.forEach(async (user) => {
		await User.findByIdAndUpdate(user._id, { day: user.day + 1 });
	});
	console.log("Daily Reset Completed");
};

resetDaily();
