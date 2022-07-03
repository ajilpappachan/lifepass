const express = require("express");

const { User, Daily } = require("../../database");

const {
	createTask,
	readTask,
	updateTask,
	claimTask,
	deleteTask,
} = require("../helpers/task-crud");
const { claimTask: userRequire } = require("../helpers/user-crud");

const router = express.Router();

router.get("/:user", (req, res) => {
	readTask(req, res, Daily);
});

router.put("/:user", (req, res) => {
	createTask(req, res, Daily);
});

router.post("/:user/:id", (req, res) => {
	updateTask(req, res, Daily);
});

router.post("/:user/:id/claim", (req, res) => {
	userRequire(req.params.user, User, Daily, process.env.DAILY_POINTS);
	claimTask(req, res, Daily);
});

router.delete("/:user/:id", (req, res) => {
	deleteTask(req, res, Daily);
});

module.exports = router;
