const express = require("express");

const { User } = require("../../database");
const {
	loginUser,
	createUser,
	updateUser,
	deleteUser,
} = require("../helpers/user-crud");

const router = express.Router();

router.post("/", (req, res) => {
	loginUser(req, res, User);
});

router.put("/", (req, res) => {
	createUser(req, res, User);
});

router.get("/:id", (req, res) => {
	readUser(req, res, User);
});

router.post("/:id", (req, res) => {
	updateUser(req, res, User);
});

router.delete("/:id", (req, res) => {
	deleteUser(req, res, User);
});

module.exports = router;
