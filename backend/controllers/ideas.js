const ideasRouter = require("express").Router();
const Idea = require("../models/idea");
const User = require("../models/user");

ideasRouter.get("/", async (request, response) => {
	const ideas = await Idea.find({});
	response.json(ideas);
});

ideasRouter.delete("/", async (request, response) => {
	const { ideaId, userId } = request.body;

	const user = await User.findById(userId);

	if (userId !== user._id.toString()) {
		return response.status(401).json({
			error: "Only user that created an idea can delete it",
		});
	}

	await Idea.findByIdAndRemove(ideaId);
	response.status(204).end();
});

ideasRouter.post("/", async (request, response) => {
	const { long, short, ideaArguments, userId } = request.body;

	if (!(long || short)) {
		return response.status(400).json({
			error: "must provide at least one symbol",
		});
	}

	if (!ideaArguments) {
		return response.status(400).json({
			error: "text field can't be empty",
		});
	}

	const user = await User.findById(userId);

	const idea = new Idea({
		long: long,
		short: short,
		ideaArguments: ideaArguments,
		user: user._id,
	});

	const savedIdea = await idea.save();
	response.status(201).json(savedIdea);
});

module.exports = ideasRouter;
