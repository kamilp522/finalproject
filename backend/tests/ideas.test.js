const supertest = require("supertest");
const app = require("../app");

const helper = require("./helpers/helper.js");
const api = supertest(app);
const bcrypt = require("bcrypt");

const User = require("../models/user");
const Idea = require("../models/idea");

const { dropDb, dropCollections } = require("./database/local_database");

afterAll(async () => {
  await dropDb();
});

describe("\nIdeas api", () => {
  beforeEach(async () => {
    await User.deleteMany({});

    const passwordHash = await bcrypt.hash("1234Qwertdd", 10);
    const user = new User({
      username: "John",
      passwordHash,
    });

    await user.save();
  });

  test("Can't create an idea when both symbols are missing", async () => {
    const ideasAtStart = await Idea.find({});
    const user = await User.findOne({ username: "John" });

    const newIdea = {
      ideaArguments: "fdsa fdsa dfs jfdsfds sdff",
      userId: user._id,
    };

    await api
      .post("/api/ideas")
      .send(newIdea)
      .expect(400)
      .expect("Content-Type", /application\/json/);

    const ideasAtEnd = await Idea.find({});
    expect(ideasAtEnd.length).toBe(ideasAtStart.length);
  });

  test("Can't create an idea when idea arguments aren't provided", async () => {
    const ideasAtStart = await Idea.find({});
    const user = await User.findOne({ username: "John" });

    const newIdea = {
      long: "AAPL",
      short: "TSLA",
      userId: user._id,
    };

    await api
      .post("/api/ideas")
      .send(newIdea)
      .expect(400)
      .expect("Content-Type", /application\/json/);

    const ideasAtEnd = await Idea.find({});
    expect(ideasAtEnd.length).toBe(ideasAtStart.length);
  });

  test("Can create an idea when only one symbol is missing", async () => {
    const ideasAtStart = await Idea.find({});
    const user = await User.findOne({ username: "John" });

    const newIdea = {
      long: "AAPL",
      ideaArguments: "fdsa fdsa dfs jfdsfds sdff",
      userId: user._id,
    };

    await api
      .post("/api/ideas")
      .send(newIdea)
      .expect(201)
      .expect("Content-Type", /application\/json/);

    const ideasAtEnd = await Idea.find({});
    expect(ideasAtEnd.length).toBe(ideasAtStart.length + 1);
  });

  test("Can create an idea when all fields are filled", async () => {
    const ideasAtStart = await Idea.find({});
    const user = await User.findOne({ username: "John" });

    const newIdea = {
      long: "AAPL",
      short: "TSLA",
      ideaArguments: "fdsa fdsa dfs jfdsfds sdff",
      userId: user._id,
    };

    await api
      .post("/api/ideas")
      .send(newIdea)
      .expect(201)
      .expect("Content-Type", /application\/json/);

    const ideasAtEnd = await Idea.find({});
    expect(ideasAtEnd.length).toBe(ideasAtStart.length + 1);
  });
});
