const express = require("express");
const { User } = require("../../database");

const router = express.Router();

router.post("/", async (req, res) => {
	const { username, password } = req.body;
	const user = await User.findOne({ username, password });
	if (user) {
		res.send(user._id);
	} else {
		res.status(404).send("No User Found");
	}
});

module.exports = router;
