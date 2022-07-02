const loginUser = async (req, res, model) => {
	const { username, password } = req.body;
	const user = await model.findOne({ username, password });
	if (user) {
		res.send(user._id);
	} else {
		res.status(404).send("No User Found");
	}
};

const createUser = async (req, res, model) => {
	const { username, password, currency, budget } = req.body;
	try {
		const user = await model.create({ username, password, currency, budget });
		res.send(user._id);
	} catch (err) {
		res.status(400).send(err.message);
	}
};

const readUser = async (req, res, model) => {
	const { id } = req.params;
	const user = await model.findById(id);
	if (user) {
		res.send(user);
	} else {
		res.status(404).send("No User Found");
	}
};

const updateUser = async (req, res, model) => {
	const { id } = req.params;
	const { username, password, day, points, level, balance, budget, currency } =
		req.body;
	try {
		await model.findByIdAndUpdate(id, {
			username,
			password,
			day,
			points,
			level,
			balance,
			budget,
			currency,
		});
		res.sendStatus(200);
	} catch (err) {
		res.status(400).send(err.message);
	}
};

const deleteUser = async (req, res, model) => {
	const { id } = req.params;
	try {
		await model.findByIdAndDelete(id);
		res.sendStatus(200);
	} catch (err) {
		res.status(400).send(err.message);
	}
};

module.exports = { loginUser, createUser, readUser, updateUser, deleteUser };
