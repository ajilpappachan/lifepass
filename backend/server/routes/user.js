const express = require("express");
const bcrypt = require("bcrypt");

const { User } = require("../../database");
const {
	loginUser,
	createUser,
	readUser,
	updateUser,
	deleteUser,
} = require("../helpers/user-crud");

const router = express.Router();

const hashFunction = async (password) => {
	return await bcrypt.hash(password, 10);
};

const compareFunction = async (password, hashedPassword) => {
	return await bcrypt.compare(password, hashedPassword);
};

router.post("/", (req, res) => {
	loginUser(req, res, User, compareFunction);
});

router.put("/", (req, res) => {
	createUser(req, res, User, hashFunction);
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
