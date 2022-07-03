const express = require("express");

const { User, Weekly } = require("../../database");

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
	readTask(req, res, Weekly);
});

router.put("/:user", (req, res) => {
	createTask(req, res, Weekly);
});

router.post("/:user/:id", (req, res) => {
	updateTask(req, res, Weekly);
});

router.post("/:user/:id/claim", (req, res) => {
	userRequire(req.params.user, User, Weekly, process.env.WEEKLY_POINTS);
	claimTask(req, res, Weekly);
});

router.delete("/:user/:id", (req, res) => {
	deleteTask(req, res, Weekly);
});

module.exports = router;
