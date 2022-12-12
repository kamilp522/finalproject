const ideasRouter = require("express").Router();
const Idea = require("../models/idea");
const User = require("../models/user");

ideasRouter.get("/", async (request, response) => {
  const ideas = await Idea.find({});
  response.json(ideas);
});

ideasRouter.post("/", async (request, response) => {
  const { long, short, arguments, userId } = request.body;

  const user = await User.findById(userId);

  const idea = new Idea({
    long: long,
    short: short,
    arguments: arguments,
    user: user._id,
  });

  const savedIdea = await idea.save();
  response.status(201).json(savedIdea);
});

module.exports = ideasRouter;
