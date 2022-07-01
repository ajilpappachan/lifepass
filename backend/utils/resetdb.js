require("dotenv").config();
const mongoose = require("mongoose");

const database = require("../database");

const sampledata = {
	users: [
		{
			username: "user 1",
			password: "password",
			day: 0,
			points: 0,
			level: 0,
			balance: 0,
			budget: 500,
			currency: "USD",
		},
		{
			username: "user 2",
			password: "password",
			day: 0,
			points: 0,
			level: 0,
			balance: 0,
			budget: 1000,
			currency: "INR",
		},
	],
};

mongoose.connect(process.env.DATABASE_URL);
const db = mongoose.connection;
db.on("connected", async () => {
	console.log("connected!");
	await resetdb();
	mongoose.disconnect();
});

const generateTasks = (users, count = 10) => {
	let tasks = [];
	for (let i = 0; i < count; i++) {
		tasks.push({
			owner: users[Math.floor(Math.random() * users.length)],
			title: `Task ${i + 1}`,
			claimed: Math.random() > 0.5 ? true : false,
		});
	}
	return tasks;
};

const clearDB = async () => {
	await database.User.deleteMany({});
	await database.Daily.deleteMany({});
	await database.Weekly.deleteMany({});
	await database.Pass.deleteMany({});
};

const resetdb = async () => {
	await clearDB();
	const newUsers = await database.User.insertMany(sampledata.users);
	const userIds = newUsers.map((user) => user._id);
	await database.Daily.insertMany(generateTasks(userIds, 10));
	await database.Weekly.insertMany(generateTasks(userIds, 6));
	await database.Pass.insertMany(generateTasks(userIds, 4));
	console.log("Added data");
};
