const User = require("../../models/user");
const Idea = require("../../models/idea");

const usersInDb = async () => {
	const users = await User.find({});
	return users.map((user) => user.toJSON());
};

const ideasInDb = async () => {
	const ideas = await Idea.find({});
	return ideas.map((idea) => idea.toJSON());
};
module.exports = { usersInDb, ideasInDb };
