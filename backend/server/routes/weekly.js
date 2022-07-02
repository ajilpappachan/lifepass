const express = require("express");

const { Weekly } = require("../../database");
const {
	createTask,
	readTask,
	updateTask,
	deleteTask,
} = require("../helpers/task-crud");

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

router.delete("/:user/:id", (req, res) => {
	deleteTask(req, res, Weekly);
});

module.exports = router;
