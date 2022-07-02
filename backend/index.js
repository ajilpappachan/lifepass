require("dotenv").config();
const Bree = require("bree");

const { app, server } = require("./server");
const database = require("./database");

const bree = new Bree({
	jobs: [
		{ name: "resetdaily", interval: "at 12:00 am" },
		{ name: "resetweekly", interval: "at 12:00 am every monday" },
		{ name: "resetpass", interval: "at 12:00 am every 60 days" },
	],
});

bree.start();
