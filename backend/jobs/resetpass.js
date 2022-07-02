const { User, Pass } = require("../database");

const resetPass = async () => {
	console.log("Resetting Pass");
	await Pass.deleteMany({});
	const users = await User.find({});
	users.forEach(async (user) => {
		await User.findByIdAndUpdate(user._id, {
			day: 0,
			points: 0,
			level: 0,
			balance: 0,
		});
	});
	console.log("Pass Reset Completed");
};

resetPass();
