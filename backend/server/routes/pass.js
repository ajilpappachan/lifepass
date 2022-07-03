const express = require("express");

const { User, Pass } = require("../../database");

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
	readTask(req, res, Pass);
});

router.put("/:user", (req, res) => {
	createTask(req, res, Pass);
});

router.post("/:user/:id", (req, res) => {
	updateTask(req, res, Pass);
});

router.post("/:user/:id/claim", (req, res) => {
	userRequire(req.params.user, User, Pass, process.env.TOTAL_PASS);
	claimTask(req, res, Pass);
});

router.delete("/:user/:id", (req, res) => {
	deleteTask(req, res, Pass);
});

module.exports = router;
