const loginUser = async (req, res, model, compareFunction) => {
	const { username, password } = req.body;
	const user = await model.findOne({ username });
	if (user && compareFunction(password, user.password)) {
		res.send(user._id);
	} else {
		res.status(404).send("No User Found");
	}
};

const createUser = async (req, res, model, hashFunction) => {
	const { username, password, currency, budget } = req.body;
	const hashedPassword = await hashFunction(password);
	try {
		const user = await model.create({
			username,
			password: hashedPassword,
			currency,
			budget,
		});
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

const claimTask = async (userId, userModel, taskModel, taskTotalPoints) => {
	const user = await userModel.findById(userId);
	const tasks = await taskModel.find({ owner: userId });
	const points = taskTotalPoints / tasks.length;
	console.log(taskTotalPoints, tasks.length, points);
	const {
		POINTS_PER_LEVEL,
		TOTAL_POINTS,
		FINAL_REWARD,
		TEN_REWARD,
		ONE_REWARD,
	} = process.env;

	const newPoints = Math.min(user.points + points, TOTAL_POINTS);
	const levelDiff = parseInt(newPoints / POINTS_PER_LEVEL) - user.level;
	console.log(
		newPoints,
		POINTS_PER_LEVEL,
		newPoints % POINTS_PER_LEVEL,
		levelDiff
	);
	if (levelDiff > 0) {
		let reward = 0;
		const newLevel = user.level + levelDiff;
		for (let i = user.level; i <= newLevel; i++) {
			if (i % 10 === 0) reward += user.budget * eval(TEN_REWARD);
			else if (i === parseInt(TOTAL_POINTS / POINTS_PER_LEVEL))
				reward += user.budget * eval(FINAL_REWARD);
			else reward += user.budget * eval(ONE_REWARD);
		}
		const newBalance = user.balance + parseInt(reward);

		user.balance = newBalance;
		user.level = newLevel;
		console.log(ONE_REWARD, reward, newLevel);
	}
	user.points = newPoints;

	await userModel.findByIdAndUpdate(userId, user);
};

module.exports = {
	loginUser,
	createUser,
	readUser,
	updateUser,
	deleteUser,
	claimTask,
};
