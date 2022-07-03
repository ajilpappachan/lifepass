const createTask = async (req, res, model) => {
	const { user, id } = req.params;
	const { title } = req.body;
	try {
		await model.create({ owner: user, title: title, claimed: false });
		res.sendStatus(200);
	} catch (err) {
		res.status(400).send(err.message);
	}
};

const readTask = async (req, res, model) => {
	const { user } = req.params;
	const tasks = await model.find({ owner: user });
	res.send(tasks);
};

const updateTask = async (req, res, model) => {
	const { user, id } = req.params;
	const { title } = req.body;
	await model.findByIdAndUpdate(id, {
		title: title,
	});
	res.sendStatus(200);
};

const claimTask = async (req, res, model) => {
	const { user, id } = req.params;
	await model.findByIdAndUpdate(id, {
		claimed: true,
	});
	res.sendStatus(200);
};

const deleteTask = async (req, res, model) => {
	const { user, id } = req.params;
	await model.findByIdAndDelete(id);
	res.sendStatus(200);
};

module.exports = { createTask, readTask, updateTask, claimTask, deleteTask };
