const supertest = require("supertest");
const app = require("../app");

const helper = require("./test_helper.js");
const api = supertest(app);
const bcrypt = require("bcrypt");
const User = require("../models/user");

const { dropDb, dropCollections } = require("./database/local_database");

afterAll(async () => {
  await dropDb();
});

// afterEach(async () => {
//   await dropCollections();
// });

describe("\nCreation of users in database:\n", () => {
  beforeEach(async () => {
    await User.deleteMany({});

    const passwordHash = await bcrypt.hash("1234Qwertdd", 10);
    const user = new User({
      username: "John",
      passwordHash,
    });

    await user.save();
  });

  test("creation succeeds with a fresh username", async () => {
    const usersAtStart = await helper.usersInDb();

    const newUser = {
      username: "Mike",
      password: "5678asdf",
      repeatedPassword: "5678asdf",
    };

    await api
      .post("/api/users")
      .send(newUser)
      .expect(201)
      .expect("Content-Type", /application\/json/);

    const usersAtEnd = await helper.usersInDb();
    expect(usersAtEnd).toHaveLength(usersAtStart.length + 1);

    const usernames = usersAtEnd.map((u) => u.username);
    expect(usernames).toContain(newUser.username);
  });

  test("user with username that is already in database isn't created", async () => {
    const usersAtStart = await helper.usersInDb();

    const newUser = {
      username: "John",
      password: "123",
    };

    await api.post("/api/users").send(newUser).expect(400);

    const usersAtEnd = await helper.usersInDb();
    expect(usersAtEnd).toHaveLength(usersAtStart.length);
  });
});
