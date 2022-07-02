const readTask = async (req, res, model) => {
	const { user } = req.params;
	const tasks = await model.find({ owner: user });
	res.send(tasks);
};

const createTask = async (req, res, model) => {
	const { user, id } = req.params;
	const { task } = req.body;
	try {
		await model.create({ owner: user, title: task.title, claimed: false });
		res.sendStatus(200);
	} catch (err) {
		res.status(400).send(err.message);
	}
};

const updateTask = async (req, res, model) => {
	const { user, id } = req.params;
	const { task } = req.body;
	await model.findByIdAndUpdate(id, {
		title: task.title,
		claimed: task.claimed,
	});
	res.sendStatus(200);
};

const deleteTask = async (req, res, model) => {
	const { user, id } = req.params;
	await model.findByIdAndDelete(id);
	res.sendStatus(200);
};

module.exports = { createTask, readTask, updateTask, deleteTask };
