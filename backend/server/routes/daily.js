const express = require("express");

const { Daily } = require("../../database");
const {
	createTask,
	readTask,
	updateTask,
	deleteTask,
} = require("../helpers/task-crud");

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

router.delete("/:user/:id", (req, res) => {
	deleteTask(req, res, Daily);
});

module.exports = router;
