const express = require("express");

const { Pass } = require("../../database");
const {
	createTask,
	readTask,
	updateTask,
	deleteTask,
} = require("../helpers/task-crud");

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

router.delete("/:user/:id", (req, res) => {
	deleteTask(req, res, Pass);
});

module.exports = router;
