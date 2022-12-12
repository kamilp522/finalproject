const bcrypt = require("bcrypt");
const usersRouter = require("express").Router();
const User = require("../models/user");

usersRouter.get("/", async (request, response) => {
  const users = await User.find({});
  response.json(users);
});

usersRouter.delete("/all", async (request, response) => {
  await User.deleteMany({});
  response.status(204).end();
});

usersRouter.delete("/:id", async (request, response) => {
  await User.findByIdAndRemove(request.params.id);
  response.status(204).end();
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

  if (username.length < 3) {
    return response.status(400).json({
      error: "username has to contain at least 3 characters",
    });
  }

  // regex thanks to Wiktor Stribiżew: https://stackoverflow.com/a/21456918/17842451
  const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/gi;
  if (!passwordRegex.test(password)) {
    return response.status(400).json({
      error:
        "Password has to contain at least 8 characters, minimum 1 letter and 1 number",
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
