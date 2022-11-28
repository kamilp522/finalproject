const bcrypt = require("bcrypt");
const usersRouter = require("express").Router();
const User = require("../models/user");

usersRouter.get("/", async (request, response) => {
  const users = await User.find({});
  response.json(users);
});

usersRouter.post("/", async (request, response) => {
  const { username, password, repeatedPassword } = request.body;

  if (!username) {
    return response.status(400).json({
      error: "must provide username",
    });
  }

  if (!password) {
    return response.status(400).json({
      error: "must provide password",
    });
  }

  if (password !== repeatedPassword) {
    return response.status(400).json({
      error: "passwords don't match",
    });
  }

  const existingUser = await User.findOne({ username });
  if (existingUser) {
    return response.status(400).json({
      error: "username must be unique",
    });
  }

  const saltRounds = 11;
  const passwordHash = await bcrypt.hash(password, saltRounds);

  const user = new User({
    username,
    passwordHash,
  });

  const savedUser = await user.save();

  response.status(201).json(savedUser);
});

module.exports = usersRouter;
